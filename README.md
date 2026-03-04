# 🌍 EPIDIA - AI-Powered Civilizational Intelligence Platform

<div align="center">

![EPIDIA Banner](https://img.shields.io/badge/EPIDIA-Intelligence%20With%20A%20Conscience-00D4B1?style=for-the-badge)

**We Don't Predict the Future. We Protect It.**

[![GitLab Duo](https://img.shields.io/badge/GitLab-Duo%20Agent%20Platform-FC6D26?style=flat-square&logo=gitlab)](https://gitlab.com)
[![Gemini AI](https://img.shields.io/badge/Powered%20by-Gemini%20AI-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)

[Live Demo](#) • [Documentation](docs/) • [Video Demo](#)

</div>

---

## 🎯 The Problem

Global crises are accelerating:
- 🌾 **2.3M people** facing famine in Gaza
- 🌡️ **49 severe natural disasters** tracked by NASA right now
- 🗳️ **Press freedom declining** in 50+ countries
- 🤖 **Facial recognition** deployed without consent globally
- 💰 **Top 1% owns 45%** of global wealth

**Decision-makers lack real-time intelligence to respond effectively.**

---

## 💡 The Solution

**EPIDIA** monitors 5 critical civilizational threats in real-time and provides AI-powered actionable guidance through Google Gemini.

### 🎯 Key Features

#### 1. 🌍 Real-Time Crisis Monitoring
- **🌾 FoodSight**: Food security & famine prediction (Gaza, Sudan, Horn of Africa)
- **🌡️ ClimaRisk**: Climate disasters & extreme weather (NASA EONET - 49 active events)
- **🗳️ DemoHealth**: Democratic health & human rights (Russia, Myanmar, Iran)
- **🤖 AIWatch**: AI governance & ethics (facial recognition surveillance)
- **💰 WealthFlow**: Wealth inequality & economic justice (top 1% concentration)

#### 2. 🤖 AI-Powered Chatbot
- Powered by **Google Gemini 2.5 Flash**
- Context-aware responses based on which crisis you're viewing
- Personalized guidance (adapts to students, CEOs, teachers, etc.)
- Suggests specific organizations, actions, and next steps

#### 3. ⚡ Command Center
Multi-tab action hub for crisis management:
- **📊 Export**: Reports, AI summaries, data exports, visualizations
- **🔄 Data**: Refresh sources, sync times, auto-refresh settings
- **📤 Share**: Shareable links, email reports, webhooks, automation
- **⚡ Actions**: Escalate crises, create tickets, notify teams
- **🔍 Health**: System status, performance metrics, activity logs

#### 4. 📡 Live Data Sources
- **NASA EONET**: Real-time natural disasters (50 events tracked)
- **News API**: Crisis news (1,608 articles)
- **World Bank**: Economic indicators
- **FAO, V-Dem, IPCC**: Authoritative crisis data

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))
- News API key ([Get one here](https://newsapi.org/register))

### Installation

**Windows:**
```powershell
.\start.ps1
```

**Linux/Mac:**
```bash
chmod +x start.sh
./start.sh
```

The script will:
1. Install Python dependencies
2. Start FastAPI backend on `http://localhost:8000`
3. Start frontend server on `http://localhost:5500`
4. Open dashboard in your browser

### Manual Setup

1. **Backend Setup:**
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Add your API keys to .env
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

2. **Frontend Setup:**
```bash
cd frontend
python -m http.server 5500
```

3. **Open Dashboard:**
Navigate to `http://localhost:5500/index.html`

---

## 🔑 API Keys Setup

Add these to `backend/.env`:

```bash
# Required
GEMINI_API_KEY=your_gemini_key_here

# Optional (for live data)
NEWS_API_KEY=your_news_api_key_here
OPENWEATHER_API_KEY=your_openweather_key_here
```

**Get API Keys:**
- **Gemini AI**: https://makersuite.google.com/app/apikey (Required)
- **News API**: https://newsapi.org/register (Free - 100 requests/day)
- **OpenWeather**: https://openweathermap.org/api (Free - 1000 calls/day)

---

## 🏗️ Architecture

```
EPIDIA/
├── frontend/              # Crisis monitoring dashboard
│   ├── index.html        # Main dashboard
│   ├── foodsight.html    # Food security module
│   ├── climarisk.html    # Climate crisis module
│   ├── demohealth.html   # Democratic health module
│   ├── aiwatch.html      # AI governance module
│   ├── wealthflow.html   # Wealth inequality module
│   ├── chatbot.js        # AI chatbot (Gemini-powered)
│   └── app.js            # Navigation & Command Center
├── backend/              # FastAPI backend
│   ├── app/
│   │   ├── api/          # API routes
│   │   ├── models/       # Data models
│   │   └── services/     # AI & external API services
│   └── main.py           # FastAPI app
└── docs/                 # Documentation
```

### Tech Stack

**Frontend:**
- Vanilla JavaScript (fast & lightweight)
- HTML5/CSS3 with Glassmorphism design
- Anime.js for smooth animations

**Backend:**
- FastAPI (Python) - High-performance async API
- Google Gemini 2.5 Flash - AI chatbot
- Pydantic - Data validation

**Data Sources:**
- NASA EONET, News API, World Bank, FAO, V-Dem, IPCC

---

## 📊 Live Data Status

| Module | Data Source | Status | Details |
|--------|-------------|--------|---------|
| ClimaRisk | NASA EONET | ✅ Live | 50 active events, 49 severe |
| News Feed | News API | ✅ Live | 1,608 crisis articles |
| FoodSight | World Bank | ✅ Live | Food price indices |
| DemoHealth | Manual | ⚠️ Demo | Realistic estimates |
| AIWatch | Manual | ⚠️ Demo | Realistic estimates |
| WealthFlow | Manual | ⚠️ Demo | Realistic estimates |

---

## 🎬 Demo Video

[Watch the demo video](#) (2-3 minutes)

Or use the auto-demo page:
```
http://localhost:5500/demo-auto.html
```

---

## 🚀 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions to:
- Vercel (Frontend)
- Railway (Backend)
- Netlify
- Render

---

## 🎯 Use Cases

### For Crisis Managers
- Monitor multiple crises in real-time
- Get AI-powered recommendations
- Export reports for stakeholders

### For NGOs & Humanitarian Organizations
- Track food security, climate, and human rights crises
- Identify regions needing immediate intervention
- Generate funding proposals

### For Policymakers
- Evidence-based decision making
- Early warning system for emerging crises
- Track policy impact

### For Researchers & Journalists
- Access real-time crisis data
- Export data for analysis
- Verify information from trusted sources

---

## 🤖 AI Chatbot Examples

**Question:** "How can I help with the food crisis in Gaza?"

**AI Response:** Provides specific organizations (WFP, UNICEF, Oxfam), donation links, volunteer opportunities, and advocacy actions.

**Question:** "I'm a student with no money, how can I help?"

**AI Response:** Suggests amplifying awareness through social media, advocating to representatives, volunteering time and skills - all without spending money.

---

## 📝 API Documentation

Visit `http://localhost:8000/docs` for interactive API documentation.

### Key Endpoints

```http
POST /chat
GET /crisis-data
GET /crisis-news
GET /module/{module_name}
GET /health
```

---

## 🏆 Hackathon Submission

**Built for:** GitLab Duo Agent Platform Hackathon

**Category:** AI-Powered Crisis Intelligence / Social Impact

**Submission Date:** March 2026

---

## 🌟 What Makes EPIDIA Special

1. **True AI Intelligence**: Not pre-programmed - uses Gemini AI for personalized guidance
2. **Real Crisis Data**: Tracks actual ongoing crises with authoritative sources
3. **Actionable Guidance**: Doesn't just show data - tells you what to do
4. **Professional Tools**: Command Center provides enterprise-grade features
5. **Modern Design**: Beautiful, intuitive interface

---

## 📞 Contact

**Email:** hulamanisrinish@gmail.com

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details

---

## 🙏 Acknowledgments

- Google Gemini AI for powering the intelligent chatbot
- GitLab for the Duo Agent Platform
- NASA EONET for real-time disaster data
- News API for crisis news feeds
- All humanitarian organizations working on the frontlines

---

<div align="center">

**EPIDIA - Intelligence With A Conscience**

*Because when crises happen, every second counts.*

[⭐ Star this repo](https://github.com/yourusername/epidia) • [🐛 Report Bug](https://github.com/yourusername/epidia/issues) • [💡 Request Feature](https://github.com/yourusername/epidia/issues)

</div>
