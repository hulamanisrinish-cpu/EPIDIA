#!/bin/bash

echo "🚀 Starting EPIDIA..."

# Check if .env exists
if [ ! -f backend/.env ]; then
    echo "⚠️  No .env file found. Creating from template..."
    cp backend/.env.example backend/.env
    echo "📝 Please add your GEMINI_API_KEY to backend/.env"
    exit 1
fi

# Start backend
echo "🔧 Starting backend..."
cd backend
python -m uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!

echo "✅ Backend running on http://localhost:8000"
echo "📖 API docs at http://localhost:8000/docs"
echo "🌐 Open frontend/index.html in your browser"
echo ""
echo "Press Ctrl+C to stop"

# Wait for Ctrl+C
trap "kill $BACKEND_PID; exit" INT
wait
