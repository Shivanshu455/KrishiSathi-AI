from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi.middleware import SlowAPIMiddleware

# 1. Import from your newly named rate_limiter.py file!
from rate_limiter import limiter

# 2. Import routers AFTER shared dependencies
from routes.farm import router as farm_router
from routes.auth import router as auth_router

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

# ----------------------------
# Root Endpoint
# ----------------------------
@app.get("/")
def root():
    return {
        "message": "KrishiSathi Running"
    }