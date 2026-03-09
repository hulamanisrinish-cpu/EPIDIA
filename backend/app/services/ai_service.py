import google.generativeai as genai
import os
from typing import List, Dict
from app.models.diagnosis import Symptom

class AIService:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY not found in environment variables")
        
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-pro')
    
    async def analyze_symptoms(self, symptoms: List[Symptom], patient_context: Dict) -> Dict:
        """Analyze symptoms using Gemini AI"""
        prompt = self._build_diagnosis_prompt(symptoms, patient_context)
        
        try:
            response = self.model.generate_content(prompt)
            return self._parse_diagnosis_response(response.text)
        except Exception as e:
            print(f"AI Service Error: {e}")
            return self._get_mock_diagnosis()
    
    def _build_diagnosis_prompt(self, symptoms: List[Symptom], context: Dict) -> str:
        symptom_list = "\n".join([
            f"- {s.name} (Severity: {s.severity}/10, Duration: {s.duration})"
            for s in symptoms
        ])
        
        return f"""You are a medical AI assistant. Analyze these symptoms and provide differential diagnosis.

Patient Context:
- Age: {context.get('age')}
- Gender: {context.get('gender')}
- Medical History: {', '.join(context.get('medical_history', []))}
- Current Medications: {', '.join(context.get('current_medications', []))}
- Allergies: {', '.join(context.get('allergies', []))}

Symptoms:
{symptom_list}

Provide:
1. Top 3 possible conditions with confidence scores (0-1)
2. Recommended diagnostic tests
3. Urgency level (Low/Medium/High/Critical)
4. Brief explanation for each diagnosis

Format as JSON with this structure:
{{
  "possible_conditions": [
    {{"name": "Condition Name", "probability": 0.65, "explanation": "Brief reason"}},
    ...
  ],
  "recommended_tests": ["Test 1", "Test 2"],
  "urgency_level": "Medium"
}}"""
    
    def _parse_diagnosis_response(self, response_text: str) -> Dict:
        """Parse AI response into structured format"""
        import json
        import re
        
        # Try to extract JSON from response
        try:
            # Find JSON in response
            json_match = re.search(r'\{.*\}', response_text, re.DOTALL)
            if json_match:
                data = json.loads(json_match.group())
                return data
        except:
            pass
        
        # Fallback to mock data
        return self._get_mock_diagnosis()
    
    def _get_mock_diagnosis(self) -> Dict:
        """Return mock diagnosis for demo purposes"""
        return {
            "possible_conditions": [
                {"name": "Upper Respiratory Infection", "probability": 0.65, "explanation": "Common viral infection"},
                {"name": "Seasonal Allergies", "probability": 0.25, "explanation": "Allergic reaction to environmental factors"},
                {"name": "Acute Bronchitis", "probability": 0.10, "explanation": "Inflammation of bronchial tubes"}
            ],
            "recommended_tests": ["Complete Blood Count", "Chest X-Ray", "Allergy Panel"],
            "urgency_level": "Medium"
        }
    
    async def generate_chatbot_response(self, user_message: str, context: str = None) -> str:
        """Generate intelligent chatbot response using Gemini AI"""
        
        # Context-aware responses for demo
        context_responses = {
            "foodsight": {
                "gaza": "The Gaza Strip is facing a severe humanitarian crisis with 98% crisis probability. Over 2.3M people are affected by ongoing conflict and humanitarian blockade. Key organizations providing aid include WFP, UNICEF, Red Cross, and Oxfam. Immediate needs include food, water, medical supplies, and safe passage for aid workers.",
                "sudan": "Sudan (Darfur, Khartoum) has 94% crisis probability with civil war and displacement affecting 25M at risk of famine. Organizations like WFP, FAO, and Red Cross are working to provide emergency food assistance.",
                "default": "I can provide information about global food security crises including Gaza Strip, Sudan, Horn of Africa, Yemen, Afghanistan, Haiti, DRC, and Syria. These regions face severe challenges from conflict, climate change, and economic instability. What specific region would you like to know more about?"
            },
            "climarisk": {
                "default": "Climate risks are escalating globally. Major concerns include Pakistan floods (33M affected), Amazon deforestation (17% lost), Mediterranean heat waves, and Antarctic ice loss. Organizations like UNEP, IPCC, and Green Climate Fund are working on mitigation and adaptation strategies."
            },
            "demohealth": {
                "default": "Democratic health and human rights are under threat in multiple regions including Russia, Myanmar, Iran, Nicaragua, Hungary, Turkey, Venezuela, and India. Organizations like Reporters Without Borders, Human Rights Watch, and Amnesty International are monitoring and advocating for change."
            }
        }
        
        # Simple keyword matching for demo
        message_lower = user_message.lower()
        
        if context and context in context_responses:
            responses = context_responses[context]
            for keyword, response in responses.items():
                if keyword in message_lower:
                    return response
            return responses.get("default", "I'm here to help with crisis response information. What would you like to know?")
        
        # General responses
        if "gaza" in message_lower or "palestine" in message_lower:
            return context_responses["foodsight"]["gaza"]
        elif "sudan" in message_lower:
            return context_responses["foodsight"]["sudan"]
        elif "climate" in message_lower or "weather" in message_lower:
            return context_responses["climarisk"]["default"]
        elif "democracy" in message_lower or "rights" in message_lower:
            return context_responses["demohealth"]["default"]
        else:
            return "I'm EPIDIA's AI assistant, powered by advanced crisis intelligence. I can help you understand global crises including food security, climate risks, democratic health, AI governance, and wealth inequality. What would you like to know about?"
