from fastapi import APIRouter, HTTPException
from models.schemas import FarmInput
from services.advisory import generate_recommendation

from database import farms_collection
from bson import ObjectId

from services.geocoding_service import get_coordinates
from services.weather_service import get_weather
from datetime import datetime

router = APIRouter()


@router.get("/farm/status")
def status():
    return {
        "status": "running"
    }


@router.post("/farm/analyze")
def analyze(data: FarmInput):

    # Step 1: Convert location to coordinates
    coords = get_coordinates(data.location)

    weather = None

    # Step 2: Fetch real weather
    if coords:
        weather = get_weather(
            coords["latitude"],
            coords["longitude"]
        )

    # Step 3: Override manual temperature
    if weather:
        data.temperature = weather["temperature"]

    # Step 4: Generate AI recommendation
    result = generate_recommendation(data)
    from services.gemini_service import (
        generate_ai_advice
)
 
    ai_message = result["recommendation"]



    # Step 5: Store everything in MongoDB
    record = {
        "location": data.location,
        "crop": data.crop,
        "month": data.month,
        "temperature": data.temperature,
        "humidity": weather["humidity"] if weather else None,
        "wind_speed": weather["wind_speed"] if weather else None,
        "soil_type": data.soil_type,
        "ai_advice": ai_message,

        "created_at": datetime.utcnow(),
        
        **result
    }

    insert_result = farms_collection.insert_one(record)

    record["_id"] = str(insert_result.inserted_id)

    return record


@router.get("/farm")
def get_all():

    farms = list(farms_collection.find())

    for farm in farms:
        farm["_id"] = str(farm["_id"])

    return farms


@router.get("/farm/{farm_id}")
def get_one(farm_id: str):

    try:
        farm = farms_collection.find_one(
            {"_id": ObjectId(farm_id)}
        )
    except:
        raise HTTPException(
            status_code=400,
            detail="Invalid Farm ID"
        )

    if not farm:
        raise HTTPException(
            status_code=404,
            detail="Farm not found"
        )

    farm["_id"] = str(farm["_id"])

    return farm


@router.put("/farm/update/{farm_id}")
def update(farm_id: str, data: FarmInput):

    updated = generate_recommendation(data)

    update_data = {
        "location": data.location,
        "crop": data.crop,
        "month": data.month,
        "temperature": data.temperature,
        "soil_type": data.soil_type,
        **updated
    }

    result = farms_collection.update_one(
        {"_id": ObjectId(farm_id)},
        {"$set": update_data}
    )

    if result.matched_count == 0:
        raise HTTPException(
            status_code=404,
            detail="Farm not found"
        )

    farm = farms_collection.find_one(
        {"_id": ObjectId(farm_id)}
    )

    farm["_id"] = str(farm["_id"])

    return farm


@router.delete("/farm/delete/{farm_id}")
def delete(farm_id: str):

    farm = farms_collection.find_one(
        {"_id": ObjectId(farm_id)}
    )

    if not farm:
        raise HTTPException(
            status_code=404,
            detail="Farm not found"
        )

    farms_collection.delete_one(
        {"_id": ObjectId(farm_id)}
    )

    farm["_id"] = str(farm["_id"])

    return {
        "deleted": True,
        "data": farm
    }


@router.get("/farm/search/")
def search(crop: str):

    result = list(
        farms_collection.find(
            {
                "crop": {
                    "$regex": crop,
                    "$options": "i"
                }
            }
        )
    )

    for farm in result:
        farm["_id"] = str(farm["_id"])

    return result