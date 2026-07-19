import os
import requests

BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


def get_weather(city: str):

    api_key = os.getenv("OPENWEATHER_API_KEY")

    if not api_key:
        raise Exception("OPENWEATHER_API_KEY not found")

    params = {
        "q": city,
        "appid": api_key,
        "units": "metric"
    }

    response = requests.get(BASE_URL, params=params)

    response.raise_for_status()

    data = response.json()

    return {
        "temperature": data["main"]["temp"],
        "humidity": data["main"]["humidity"],
        "description": data["weather"][0]["description"],
        "wind_speed": data["wind"]["speed"],
        "city": data["name"]
    }