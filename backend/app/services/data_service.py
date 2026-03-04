import json
import os
from typing import List, Optional
from app.models.patient import Patient, PatientCreate
from app.models.diagnosis import DiagnosisResult
import uuid

class DataService:
    def __init__(self):
        self.data_dir = "app/data"
        os.makedirs(self.data_dir, exist_ok=True)
        self.patients_file = f"{self.data_dir}/patients.json"
        self.diagnoses_file = f"{self.data_dir}/diagnoses.json"
        self._init_files()
    
    def _init_files(self):
        for file in [self.patients_file, self.diagnoses_file]:
            if not os.path.exists(file):
                with open(file, 'w') as f:
                    json.dump([], f)
    
    def create_patient(self, patient_data: PatientCreate) -> Patient:
        patient = Patient(id=str(uuid.uuid4()), **patient_data.dict())
        patients = self._read_json(self.patients_file)
        patients.append(patient.dict())
        self._write_json(self.patients_file, patients)
        return patient
    
    def get_patient(self, patient_id: str) -> Optional[Patient]:
        patients = self._read_json(self.patients_file)
        for p in patients:
            if p['id'] == patient_id:
                return Patient(**p)
        return None
    
    def get_all_patients(self) -> List[Patient]:
        patients = self._read_json(self.patients_file)
        return [Patient(**p) for p in patients]
    
    def save_diagnosis(self, diagnosis: DiagnosisResult):
        diagnoses = self._read_json(self.diagnoses_file)
        diagnoses.append(diagnosis.dict())
        self._write_json(self.diagnoses_file, diagnoses)
    
    def get_patient_diagnoses(self, patient_id: str) -> List[DiagnosisResult]:
        diagnoses = self._read_json(self.diagnoses_file)
        return [DiagnosisResult(**d) for d in diagnoses if d['patient_id'] == patient_id]
    
    def _read_json(self, filepath: str) -> list:
        with open(filepath, 'r') as f:
            return json.load(f)
    
    def _write_json(self, filepath: str, data: list):
        with open(filepath, 'w') as f:
            json.dump(data, f, indent=2, default=str)
