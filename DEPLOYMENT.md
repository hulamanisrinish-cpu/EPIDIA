# 🚀 EPIDIA Deployment Guide

Quick guide to deploy EPIDIA to production.

---

## 📋 Pre-Deployment Checklist

- [ ] Test all features locally
- [ ] Verify Gemini API key works
- [ ] Test AI chatbot on all modules
- [ ] Test Command Center features
- [ ] Create demo video
- [ ] Prepare screenshots

---

## 🌐 Recommended: Vercel + Railway

### Frontend on Vercel

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
cd frontend
vercel deploy --prod
```

3. **Configure:**
- Root directory: `frontend`
- Framework: Other
- Build command: (leave empty)
- Output directory: `.`

4. **Your URL:** `https://epidia.vercel.app`

### Backend on Railway

1. **Go to [Railway.app](https://railway.app)**

2. **Create New Project:**
- Click "New Project"
- Select "Deploy from GitHub repo"
- Connect your EPIDIA repository

3. **Configure:**
- Root directory: `backend`
- Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

4. **Add Environment Variables:**
```
GEMINI_API_KEY=your_api_key_here
NEWS_API_KEY=your_news_api_key_here
HOST=0.0.0.0
PORT=8000
ENV=production
```

5. **Your URL:** `https://epidia-backend.up.railway.app`

6. **Update Frontend API URL:**

In `frontend/chatbot.js` and `frontend/app.js`, change:
```javascript
const API_URL = 'http://localhost:8000';
```
To:
```javascript
const API_URL = 'https://epidia-backend.up.railway.app';
```

7. **Redeploy Frontend:**
```bash
vercel deploy --prod
```

---

## 🔧 Post-Deployment

### 1. Update CORS Settings

In `backend/main.py`, update allowed origins:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://epidia.vercel.app",
        "https://yourdomain.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 2. Test Deployment

Visit your deployed URLs and test:
- [ ] Dashboard loads correctly
- [ ] All crisis modules work
- [ ] AI chatbot connects and responds
- [ ] Command Center opens
- [ ] No console errors

---

## 🐛 Troubleshooting

### Chatbot Not Working

**Problem:** Chatbot shows "connection error"

**Solutions:**
1. Check backend is deployed and running
2. Verify API URL in `chatbot.js` is correct
3. Check CORS settings allow your frontend domain
4. Verify Gemini API key is set in backend environment variables

### Backend Not Starting

**Problem:** Backend deployment fails

**Solutions:**
1. Check `requirements.txt` has all dependencies
2. Verify Python version is 3.8+
3. Check environment variables are set
4. Review deployment logs for errors

---

## 📝 Deployment Checklist

### Before Deployment
- [ ] All features tested locally
- [ ] Code committed to Git
- [ ] Environment variables documented

### During Deployment
- [ ] Frontend deployed successfully
- [ ] Backend deployed successfully
- [ ] Environment variables set
- [ ] API URLs updated in frontend
- [ ] CORS configured correctly

### After Deployment
- [ ] Test all features on live site
- [ ] Verify chatbot works
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Monitor for errors

---

## 🎉 You're Live!

Your EPIDIA platform is now deployed and accessible worldwide!

**Share your links:**
- Frontend: `https://your-frontend-url.com`
- Backend API: `https://your-backend-url.com`
- Demo Video: `https://youtube.com/...`

---

## 📧 Need Help?

Contact: hulamanisrinish@gmail.com
