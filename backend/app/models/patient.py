from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class Patient(BaseModel):
    id: str
    name: str
    age: int
    gender: str
    medical_history: List[str] = []
    current_medications: List[str] = []
    allergies: List[str] = []
    created_at: datetime = datetime.now()

class PatientCreate(BaseModel):
    name: str
    age: int
    gender: str
    medical_history: Optional[List[str]] = []
    current_medications: Optional[List[str]] = []
    allergies: Optional[List[str]] = []
