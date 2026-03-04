import httpx
import os
from typing import Dict, List
from datetime import datetime, timedelta

class ExternalAPIService:
    """Service to fetch live data from external APIs"""
    
    def __init__(self):
        self.news_api_key = os.getenv("NEWS_API_KEY", "")
        self.weather_api_key = os.getenv("OPENWEATHER_API_KEY", "")
        self.acled_key = os.getenv("ACLED_API_KEY", "")
        self.acled_email = os.getenv("ACLED_EMAIL", "")
    
    async def get_food_security_data(self) -> Dict:
        """Get food security data from World Bank API (no key needed)"""
        async with httpx.AsyncClient() as client:
            try:
                # World Bank Food Price Index
                url = "https://api.worldbank.org/v2/country/all/indicator/FP.CPI.TOTL?format=json&date=2020:2024&per_page=100"
                response = await client.get(url, timeout=10.0)
                data = response.json()
                
                # Process data
                if len(data) > 1 and data[1]:
                    latest = data[1][0]
                    value = float(latest.get('value', 0)) if latest.get('value') else 0
                    
                    # Calculate risk score (0-100)
                    # Higher food prices = higher risk
                    risk_score = min(100, int((value / 150) * 100))
                    
                    return {
                        "score": risk_score,
                        "indicator": "Food Price Index",
                        "value": value,
                        "date": latest.get('date'),
                        "source": "World Bank",
                        "live": True
                    }
            except Exception as e:
                print(f"World Bank API Error: {e}")
        
        # Fallback to realistic demo data
        return {
            "score": 73,
            "indicator": "Food Price Index",
            "source": "demo",
            "live": False
        }
    
    async def get_climate_risk_data(self) -> Dict:
        """Get climate data from NASA EONET (no key needed!) or OpenWeather API"""
        async with httpx.AsyncClient() as client:
            try:
                # Try NASA EONET first (no API key needed!)
                url = "https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=50"
                response = await client.get(url, timeout=10.0)
                data = response.json()
                
                if 'events' in data:
                    events = data['events']
                    
                    # Count severe events (wildfires, floods, storms, etc.)
                    severe_categories = ['wildfires', 'floods', 'severeStorms', 'volcanoes', 'drought']
                    severe_events = [e for e in events if any(cat['title'].lower() in severe_categories for cat in e.get('categories', []))]
                    
                    # Calculate risk score based on number of active events
                    risk_score = min(100, 40 + (len(severe_events) * 2))
                    
                    return {
                        "score": risk_score,
                        "total_events": len(events),
                        "severe_events": len(severe_events),
                        "source": "NASA EONET",
                        "live": True,
                        "note": "Real-time natural disaster tracking"
                    }
            except Exception as e:
                print(f"NASA EONET API Error: {e}")
            
            # Fallback to OpenWeather if available
            if self.weather_api_key:
                try:
                    regions = [
                        {"name": "Pakistan", "lat": 30.3753, "lon": 69.3451},
                        {"name": "Bangladesh", "lat": 23.6850, "lon": 90.3563},
                    ]
                    
                    total_alerts = 0
                    for region in regions:
                        url = f"https://api.openweathermap.org/data/2.5/onecall?lat={region['lat']}&lon={region['lon']}&appid={self.weather_api_key}"
                        response = await client.get(url, timeout=10.0)
                        data = response.json()
                        
                        if 'alerts' in data:
                            total_alerts += len(data['alerts'])
                    
                    risk_score = min(100, 50 + (total_alerts * 10))
                    
                    return {
                        "score": risk_score,
                        "alerts": total_alerts,
                        "regions_monitored": len(regions),
                        "source": "OpenWeather",
                        "live": True
                    }
                except Exception as e:
                    print(f"OpenWeather API Error: {e}")
        
        return {
            "score": 67,
            "source": "demo",
            "live": False,
            "note": "Using demo data"
        }
    
    async def get_conflict_data(self) -> Dict:
        """Get conflict data from ACLED API"""
        if not self.acled_key or not self.acled_email:
            return {
                "score": 45,
                "source": "demo",
                "live": False,
                "note": "Add ACLED_API_KEY and ACLED_EMAIL to .env for live data"
            }
        
        async with httpx.AsyncClient() as client:
            try:
                # Get recent conflict events
                end_date = datetime.now().strftime("%Y-%m-%d")
                start_date = (datetime.now() - timedelta(days=30)).strftime("%Y-%m-%d")
                
                url = f"https://api.acleddata.com/acled/read?key={self.acled_key}&email={self.acled_email}&event_date={start_date}|{end_date}&event_date_where=BETWEEN&limit=100"
                
                response = await client.get(url, timeout=10.0)
                data = response.json()
                
                if 'data' in data:
                    events = data['data']
                    fatalities = sum(int(e.get('fatalities', 0)) for e in events)
                    
                    # Calculate risk score
                    risk_score = min(100, int((len(events) / 10) + (fatalities / 100)))
                    
                    return {
                        "score": risk_score,
                        "events": len(events),
                        "fatalities": fatalities,
                        "period": "30 days",
                        "source": "ACLED",
                        "live": True
                    }
            except Exception as e:
                print(f"ACLED API Error: {e}")
        
        return {
            "score": 45,
            "source": "demo",
            "live": False
        }
    
    async def get_crisis_news(self, query: str = "food crisis") -> List[Dict]:
        """Get recent crisis news from News API"""
        if not self.news_api_key:
            return []
        
        async with httpx.AsyncClient() as client:
            try:
                url = f"https://newsapi.org/v2/everything?q={query}&sortBy=publishedAt&language=en&pageSize=5&apiKey={self.news_api_key}"
                response = await client.get(url, timeout=10.0)
                data = response.json()
                
                if data.get('status') == 'ok':
                    articles = data.get('articles', [])
                    return [
                        {
                            "title": a.get('title'),
                            "source": a.get('source', {}).get('name'),
                            "published": a.get('publishedAt'),
                            "url": a.get('url')
                        }
                        for a in articles
                    ]
            except Exception as e:
                print(f"News API Error: {e}")
        
        return []
    
    async def get_all_module_data(self) -> Dict:
        """Get data for all modules"""
        food_data = await self.get_food_security_data()
        climate_data = await self.get_climate_risk_data()
        conflict_data = await self.get_conflict_data()
        
        # Calculate global crisis risk index
        gcri = int((food_data['score'] + climate_data['score'] + conflict_data['score']) / 3)
        
        # Check if any live data is being used
        has_live_data = any([
            food_data.get('live', False),
            climate_data.get('live', False),
            conflict_data.get('live', False)
        ])
        
        return {
            "gcri": gcri,
            "modules": {
                "foodsight": food_data,
                "climarisk": climate_data,
                "demohealth": conflict_data,
                "aiwatch": {"score": 82, "source": "manual", "live": False},
                "wealthflow": {"score": 58, "source": "manual", "live": False}
            },
            "timestamp": datetime.now().isoformat(),
            "has_live_data": has_live_data
        }
