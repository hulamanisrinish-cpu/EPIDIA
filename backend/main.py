from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

from app.api.routes import router

app = FastAPI(
    title="EPIDIA API",
    description="AI-Powered Civilizational Intelligence Platform",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins - update with your Vercel URL for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api/v1", tags=["epidia"])

@app.get("/")
async def root():
    return {"message": "EPIDIA API is running", "version": "1.0.0"}

@app.get("/health")
async def health():
    return {"status": "healthy", "service": "EPIDIA"}
