# 📁 EPIDIA Project Structure

Clean, organized structure for the hackathon submission.

```
EPIDIA/
├── frontend/                    # Frontend application
│   ├── index.html              # Main dashboard
│   ├── foodsight.html          # Food security module
│   ├── climarisk.html          # Climate crisis module
│   ├── demohealth.html         # Democratic health module
│   ├── aiwatch.html            # AI governance module
│   ├── wealthflow.html         # Wealth inequality module
│   ├── demo-auto.html          # Auto-demo for video recording
│   ├── app.js                  # Navigation & Command Center
│   ├── chatbot.js              # AI chatbot (Gemini-powered)
│   └── chatbot.css             # Chatbot styling
│
├── backend/                     # Backend API
│   ├── app/
│   │   ├── api/
│   │   │   ├── routes.py       # API endpoints
│   │   │   └── __init__.py
│   │   ├── models/
│   │   │   ├── patient.py      # Data models
│   │   │   ├── diagnosis.py
│   │   │   └── __init__.py
│   │   ├── services/
│   │   │   ├── ai_service.py           # Gemini AI integration
│   │   │   ├── external_api_service.py # NASA, News API, etc.
│   │   │   ├── data_service.py
│   │   │   └── __init__.py
│   │   └── data/
│   │       ├── patients.json
│   │       └── diagnoses.json
│   ├── main.py                 # FastAPI application
│   ├── requirements.txt        # Python dependencies
│   ├── .env                    # Environment variables (API keys)
│   └── .env.example            # Example environment file
│
├── docs/                        # Documentation
│   ├── source/
│   │   ├── EPIDIA_COMBINED_PRD.md
│   │   ├── EPIDIA_Frontend_DesignDoc.md
│   │   ├── EPIDIA_Story.md
│   │   └── EPIDIA_Technical_Architecture_Documentation.md
│   ├── model-selection-playbook.md
│   ├── runbook.md
│   └── token-optimization-guide.md
│
├── scripts/                     # (Empty - cleaned up)
│
├── .gitignore                   # Git ignore file
├── .vscode/                     # VS Code settings
├── start.ps1                    # Windows start script
├── start.sh                     # Linux/Mac start script
├── index.html                   # Root redirect to frontend
│
├── README.md                    # Main documentation
├── DEPLOYMENT.md                # Deployment guide
└── PROJECT_STRUCTURE.md         # This file

```

## 🎯 Key Files

### Essential for Running
- `start.ps1` / `start.sh` - Start the application
- `backend/.env` - API keys configuration
- `backend/requirements.txt` - Python dependencies
- `frontend/index.html` - Main dashboard
- `frontend/app.js` - Core functionality
- `frontend/chatbot.js` - AI chatbot

### Essential for Hackathon
- `README.md` - Project overview and setup
- `DEPLOYMENT.md` - Deployment instructions
- `frontend/demo-auto.html` - Auto-demo for video
- `docs/source/` - Technical documentation

### Configuration
- `backend/.env` - API keys (Gemini, News API)
- `.gitignore` - Git ignore rules
- `.vscode/` - Editor settings

## 🗑️ Cleaned Up

Removed unnecessary files:
- ❌ GSD (Get Shit Done) folders
- ❌ Agent workflow files
- ❌ Old README files (5+ versions)
- ❌ Temporary documentation
- ❌ Medical diagnosis files (not used)
- ❌ Adapter files
- ❌ Test scripts
- ❌ Validation scripts

## 📊 File Count

- **Frontend**: 9 HTML files, 2 JS files, 1 CSS file
- **Backend**: 1 main file, 8 module files
- **Documentation**: 2 main docs, 4 detailed docs
- **Scripts**: 2 start scripts

**Total**: Clean, focused, hackathon-ready! 🚀
