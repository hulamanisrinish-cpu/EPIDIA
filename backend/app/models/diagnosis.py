from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Symptom(BaseModel):
    name: str
    severity: int  # 1-10
    duration: str

class DiagnosisRequest(BaseModel):
    patient_id: str
    symptoms: List[Symptom]
    additional_notes: Optional[str] = ""

class DiagnosisResult(BaseModel):
    diagnosis_id: str
    patient_id: str
    possible_conditions: List[dict]
    confidence_scores: List[float]
    recommended_tests: List[str]
    urgency_level: str
    timestamp: datetime = datetime.now()
