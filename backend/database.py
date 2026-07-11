from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["krishisathi"]

farms_collection = db["farms"]
users_collection = db["users"]

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