from fastapi import APIRouter, HTTPException
from models.schemas import FarmInput
from services.advisory import generate_recommendation

from database import farms_collection
from bson import ObjectId

router = APIRouter()


@router.get("/farm/status")
def status():

    return {
        "status": "running"
    }


@router.post("/farm/analyze")
def analyze(data: FarmInput):

    result = generate_recommendation(data)

    record = {
        "location": data.location,
        "crop": data.crop,
        "month": data.month,
        "temperature": data.temperature,
        "soil_type": data.soil_type,
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

    farm = farms_collection.find_one(
        {"_id": ObjectId(farm_id)}
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

    if result.modified_count == 0:
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