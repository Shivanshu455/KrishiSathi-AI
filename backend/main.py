from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi.middleware import SlowAPIMiddleware

# 1. Import from your newly named rate_limiter.py file!
from rate_limiter import limiter

# 2. Import routers AFTER shared dependencies
from routes.farm import router as farm_router
from routes.auth import router as auth_router

from routes.crop_recommendation import (
    router as crop_router
)
from routes.cultivation_plan import router as cultivation_router

from dotenv import load_dotenv

load_dotenv()

from routes.weather import router as weather_router
from routes.profit import router as profit_router

app = FastAPI(
    title="KrishiSathi API"
)

# ----------------------------
# Rate Limiter Configuration
# ----------------------------
app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)

# ----------------------------
# CORS Configuration
# ----------------------------
origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Register Routers
# ----------------------------
app.include_router(farm_router)
app.include_router(auth_router)
app.include_router(crop_router)
app.include_router(cultivation_router)
app.include_router(weather_router)
app.include_router(profit_router)
# ----------------------------
# Root Endpoint
# ----------------------------
@app.get("/")
def root():
    return {
        "message": "KrishiSathi Running"
    }