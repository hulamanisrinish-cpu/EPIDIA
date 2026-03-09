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
        
        # Minimal context hints - let AI think freely
        context_info = {
            "foodsight": "The user is viewing data about food security crises (Gaza, Sudan, Horn of Africa, Yemen, Afghanistan, Haiti, DRC, Syria). Key organizations: WFP, FAO, UNICEF, Red Cross, Oxfam, Action Against Hunger.",
            "climarisk": "The user is viewing data about climate crises (Pakistan floods, Amazon deforestation, Mediterranean heat waves, Antarctic ice loss). Key organizations: UNEP, IPCC, Green Climate Fund, Red Cross, UNDP.",
            "demohealth": "The user is viewing data about democratic health and human rights crises (Russia, Myanmar, Iran, Nicaragua, Hungary, Turkey, Venezuela, India). Key organizations: Reporters Without Borders, Human Rights Watch, Amnesty International, Freedom House.",
            "aiwatch": "The user is viewing data about AI governance concerns (facial recognition surveillance, deepfakes, algorithmic bias, autonomous weapons). Key organizations: AI Now Institute, Partnership on AI, Future of Life Institute, EFF, Algorithm Watch.",
            "wealthflow": "The user is viewing data about wealth inequality (top 1% wealth concentration, billionaire wealth explosion, tax havens, student debt crisis). Key organizations: Oxfam, Tax Justice Network, Institute for Policy Studies, Economic Policy Institute."
        }
        
        # Build a natural, conversational prompt
        context_hint = context_info.get(context, "The user is asking about global crisis response.")
        
        prompt = f"""You are a helpful, knowledgeable assistant helping someone who cares about global crises and wants to make a difference.

Context: {context_hint}

User's question: {user_message}

Respond naturally and conversationally. Think about their specific situation and what would actually help them. Be practical, empathetic, and specific. Vary your responses - don't use the same structure every time. Sometimes be brief, sometimes detailed. Adapt to what they're really asking."""

        try:
            response = self.model.generate_content(prompt)
            return response.text
        except Exception as e:
            import traceback
            error_details = traceback.format_exc()
            print(f"Chatbot AI Error: {e}")
            print(f"Full error: {error_details}")
            return f"I'm experiencing a technical issue. Error: {str(e)}"
