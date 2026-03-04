from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.models.patient import Patient, PatientCreate
from app.models.diagnosis import DiagnosisRequest, DiagnosisResult
from app.services.ai_service import AIService
from app.services.data_service import DataService
from app.services.external_api_service import ExternalAPIService
import uuid
from datetime import datetime

router = APIRouter()
ai_service = AIService()
data_service = DataService()
api_service = ExternalAPIService()

class ChatMessage(BaseModel):
    message: str
    context: str = None  # foodsight, climarisk, demohealth, aiwatch, wealthflow

@router.post("/chat")
async def chat(chat_message: ChatMessage):
    """
    AI-powered chatbot for crisis response guidance
    """
    try:
        response = await ai_service.generate_chatbot_response(chat_message.message, chat_message.context)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/test-ai")
async def test_ai():
    """
    Test if Gemini AI is configured correctly
    """
    import os
    api_key = os.getenv("GEMINI_API_KEY")
    has_key = api_key is not None and len(api_key) > 0
    
    if has_key:
        try:
            # Try a simple test call
            test_response = await ai_service.generate_chatbot_response("Hello", "foodsight")
            return {
                "status": "success",
                "api_key_loaded": True,
                "api_key_length": len(api_key),
                "test_response": test_response[:100] + "..." if len(test_response) > 100 else test_response
            }
        except Exception as e:
            return {
                "status": "error",
                "api_key_loaded": True,
                "api_key_length": len(api_key),
                "error": str(e)
            }
    else:
        return {
            "status": "error",
            "api_key_loaded": False,
            "message": "GEMINI_API_KEY not found in environment"
        }

@router.post("/patients", response_model=Patient)
async def create_patient(patient: PatientCreate):
    return data_service.create_patient(patient)

@router.get("/patients")
async def get_patients():
    return data_service.get_all_patients()

@router.get("/patients/{patient_id}")
async def get_patient(patient_id: str):
    patient = data_service.get_patient(patient_id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient

@router.post("/diagnose", response_model=DiagnosisResult)
async def diagnose(request: DiagnosisRequest):
    patient = data_service.get_patient(request.patient_id)
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    
    patient_context = {
        "age": patient.age,
        "gender": patient.gender,
        "medical_history": patient.medical_history,
        "current_medications": patient.current_medications,
        "allergies": patient.allergies
    }
    
    ai_result = await ai_service.analyze_symptoms(request.symptoms, patient_context)
    
    diagnosis = DiagnosisResult(
        diagnosis_id=str(uuid.uuid4()),
        patient_id=request.patient_id,
        possible_conditions=ai_result["possible_conditions"],
        confidence_scores=[c["probability"] for c in ai_result["possible_conditions"]],
        recommended_tests=ai_result["recommended_tests"],
        urgency_level=ai_result["urgency_level"]
    )
    
    data_service.save_diagnosis(diagnosis)
    return diagnosis

@router.get("/patients/{patient_id}/history")
async def get_patient_history(patient_id: str):
    diagnoses = data_service.get_patient_diagnoses(patient_id)
    return {"patient_id": patient_id, "diagnoses": diagnoses}


# ============================================
# LIVE API DATA ENDPOINTS
# ============================================

@router.get("/crisis-data")
async def get_crisis_data():
    """
    Get live crisis data from external APIs
    Returns real-time data from World Bank, OpenWeather, ACLED, etc.
    """
    try:
        data = await api_service.get_all_module_data()
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/crisis-news")
async def get_crisis_news(query: str = "food crisis climate conflict"):
    """
    Get recent crisis news from News API
    """
    try:
        news = await api_service.get_crisis_news(query)
        return {"news": news, "count": len(news)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/module/{module_name}")
async def get_module_data(module_name: str):
    """
    Get live data for a specific module
    Supported modules: foodsight, climarisk, demohealth
    """
    try:
        if module_name == "foodsight":
            data = await api_service.get_food_security_data()
        elif module_name == "climarisk":
            data = await api_service.get_climate_risk_data()
        elif module_name == "demohealth":
            data = await api_service.get_conflict_data()
        else:
            raise HTTPException(status_code=404, detail=f"Module '{module_name}' not found. Supported: foodsight, climarisk, demohealth")
        
        return data
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
