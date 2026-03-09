# EPIDIA - Quick Start Guide

## Your Dashboard is Ready!

Your frontend is configured and ready to use with the Railway backend.

## CRITICAL: Fix Railway Backend (1 minute)

Your Railway backend is deployed but crashed because it's missing the API key.

### Fix Now:

1. Go to: https://railway.app
2. Click on your **EPIDIA** service
3. Click **"Variables"** tab at the top
4. Click **"New Variable"**
5. Add:
   - **Variable**: `GEMINI_API_KEY`
   - **Value**: `AIzaSyAND4thRQGQdFTgvKhuYNeCEtjh9jZocZc`
6. Click **"Add"**

Railway will automatically redeploy (takes 1-2 minutes).

## Open Your Dashboard

Simply open this file in your browser:
**D:\EPIDIA\frontend\index.html**

Or double-click: `frontend/index.html`

## Verify Backend is Running

After adding the environment variable, test:
- https://epidia-production.up.railway.app/health

Should return: `{"status":"healthy","service":"EPIDIA"}`

## That's It!

Once the environment variable is added and Railway redeploys:
✅ Your dashboard will work perfectly
✅ Chatbot will respond
✅ All modules will load data

---

## Alternative: Local Backend (If you want to run locally)

You need Python installed from python.org (not Windows Store).

1. Install Python: https://python.org/downloads/
2. Check "Add Python to PATH"
3. Run:
   ```bash
   cd backend
   pip install -r requirements.txt
   python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

But using Railway is faster and easier!
