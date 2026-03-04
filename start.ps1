# EPIDIA Startup Script for Windows

Write-Host "Starting EPIDIA..." -ForegroundColor Cyan

# Check if .env exists
if (-not (Test-Path "backend\.env")) {
    Write-Host "No .env file found. Creating from template..." -ForegroundColor Yellow
    Copy-Item "backend\.env.example" "backend\.env"
    Write-Host "Please add your GEMINI_API_KEY to backend\.env" -ForegroundColor Yellow
    exit 1
}

# Start backend
Write-Host "Starting backend..." -ForegroundColor Green
Set-Location backend
Start-Process powershell -ArgumentList "-NoExit", "-Command", "python -m uvicorn main:app --reload --port 8000"
Set-Location ..

Start-Sleep -Seconds 2

Write-Host "Backend running on http://localhost:8000" -ForegroundColor Green
Write-Host "API docs at http://localhost:8000/docs" -ForegroundColor Cyan
Write-Host "Open frontend\index.html in your browser" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to open frontend..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# Open frontend in default browser
Start-Process (Resolve-Path "frontend\index.html").Path
