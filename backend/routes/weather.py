from fastapi import APIRouter, HTTPException
from services.weather_service import get_weather

router = APIRouter()


@router.get("/weather/{city}")
def weather(city: str):

    data = get_weather(city)

    if not data:
        raise HTTPException(
            status_code=404,
            detail="Weather data not found."
        )

    return data