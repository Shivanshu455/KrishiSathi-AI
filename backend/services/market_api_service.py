import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("DATA_GOV_API_KEY")

BASE_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070"


def get_market_prices():

    params = {
        "api-key": API_KEY,
        "format": "json",
        "limit": 1
    }

    print("Sending Request...")

    response = requests.get(
        BASE_URL,
        params=params,
        timeout=60
    )

    print(response.status_code)
    print(response.text[:500])