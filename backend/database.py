from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["krishisathi"]


users_collection = db["users"]
farms_collection = db["farms"]



market_prices_collection = db["market_prices"]
government_msp_collection = db["government_msp"]
market_history_collection = db["market_history"]
market_search_collection = db["market_searches"]
weather_cache_collection = db["weather_cache"]
ai_chat_history_collection = db["ai_chat_history"]

try:
    client.admin.command("ping")

    print("\n" + "=" * 50)
    print("MongoDB Atlas Connected Successfully")
    print(f"Database: {db.name}")
    print(f"Collection: {farms_collection.name}")
    print("Connection Status: ACTIVE")
    print("=" * 50 + "\n")

except Exception as e:

    print("\n" + "=" * 50)
    print("MongoDB Connection Failed")
    print(f"Error: {e}")
    print("=" * 50 + "\n")