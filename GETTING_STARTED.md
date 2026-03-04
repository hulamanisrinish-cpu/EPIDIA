# 🚀 Getting Started with EPIDIA

Quick start guide to get EPIDIA running in 5 minutes.

---

## ⚡ Quick Start (5 Minutes)

### Step 1: Get API Keys (2 minutes)

1. **Gemini AI** (Required):
   - Go to: https://makersuite.google.com/app/apikey
   - Sign in with Google
   - Click "Create API Key"
   - Copy your key

2. **News API** (Optional but recommended):
   - Go to: https://newsapi.org/register
   - Sign up (takes 30 seconds)
   - Copy your API key

### Step 2: Configure (1 minute)

1. Open `backend/.env` file
2. Add your API keys:
```bash
GEMINI_API_KEY=your_gemini_key_here
NEWS_API_KEY=your_news_key_here
```

### Step 3: Run (2 minutes)

**Windows:**
```powershell
.\start.ps1
```

**Linux/Mac:**
```bash
chmod +x start.sh
./start.sh
```

The dashboard will open automatically at: `http://localhost:5500/index.html`

---

## 🎯 What You'll See

### Main Dashboard
- 5 crisis modules with animated scores
- Live feed of crisis updates
- World map with hotspots
- Global Crisis Risk Index (GCRI)

### Crisis Modules
Click any module to see detailed data:
- **FoodSight**: Gaza, Sudan, Horn of Africa
- **ClimaRisk**: 49 active natural disasters (NASA data)
- **DemoHealth**: Russia, Myanmar, Iran
- **AIWatch**: Facial recognition surveillance
- **WealthFlow**: Top 1% wealth concentration

### AI Chatbot
Click the 🤖 button to:
- Ask questions about any crisis
- Get personalized guidance
- Find organizations that can help
- Learn how to take action

### Command Center
Click "⚡ Command Center" to:
- Export reports and data
- Refresh live data sources
- Share dashboard with team
- Escalate critical crises
- Check system health

---

## 🧪 Test the Features

### 1. Test AI Chatbot
1. Click 🤖 chatbot button
2. Ask: "How can I help with the food crisis in Gaza?"
3. Get AI-powered response with specific actions

### 2. Test Command Center
1. Click "⚡ Command Center"
2. Try "📄 Download Crisis Report"
3. Try "🤖 Generate AI Executive Summary"
4. Try "💾 Export Raw Data"

### 3. Test Live Data
1. Go to Command Center → Data tab
2. Click "🔄 Refresh All Data Sources"
3. See live data from NASA EONET and News API

---

## 📊 Live Data Status

With your API keys configured:
- ✅ **NASA EONET**: Tracking 50 active natural disasters
- ✅ **News API**: 1,608 crisis articles
- ✅ **World Bank**: Food price indices
- ✅ **Gemini AI**: Intelligent chatbot responses

---

## 🎬 Create Demo Video

1. Open: `http://localhost:5500/demo-auto.html`
2. Use OBS Studio or screen recorder
3. Record the auto-playing demo (3 minutes)
4. Upload to YouTube

---

## 🚀 Deploy to Production

See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- Deploying to Vercel (Frontend)
- Deploying to Railway (Backend)
- Configuring custom domains
- Setting up CORS

---

## 🐛 Troubleshooting

### Backend won't start
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

### Frontend won't load
```bash
cd frontend
python -m http.server 5500
```

### Chatbot not working
1. Check backend is running: `http://localhost:8000/health`
2. Verify GEMINI_API_KEY in `backend/.env`
3. Check browser console for errors

### No live data
1. Add NEWS_API_KEY to `backend/.env`
2. Restart backend
3. Click "🔄 Refresh All Data Sources"

---

## 📞 Need Help?

- **Email**: hulamanisrinish@gmail.com
- **Documentation**: See [README.md](README.md)
- **Project Structure**: See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

---

## 🎉 You're Ready!

Your EPIDIA platform is now running with:
- ✅ Real-time crisis monitoring
- ✅ AI-powered chatbot
- ✅ Live data from NASA and News API
- ✅ Professional Command Center
- ✅ Export and sharing features

**Start exploring and making a difference!** 🌍
