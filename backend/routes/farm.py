from fastapi import APIRouter, HTTPException
from models.schemas import FarmInput
from services.advisory import generate_recommendation

router = APIRouter()

farm_db=[]


@router.get("/farm/status")
def status():

    return {
        "status":"running"
    }


@router.post("/farm/analyze")
def analyze(data: FarmInput):

    result=generate_recommendation(data)

    record={

        "id":len(farm_db)+1,

        "location":data.location,

        "crop":data.crop,

        "month":data.month,

        "temperature":data.temperature,

        "soil":data.soil_type,

        **result
    }

    farm_db.append(record)

    return record


@router.get("/farm")
def get_all():

    return farm_db


@router.get("/farm/{farm_id}")
def get_one(farm_id:int):

    if farm_id>len(farm_db):

        raise HTTPException(
            status_code=404,
            detail="Farm not found"
        )

    return farm_db[farm_id-1]


@router.put("/farm/update/{farm_id}")
def update(farm_id:int,data:FarmInput):

    if farm_id>len(farm_db):

        raise HTTPException(
            status_code=404,
            detail="Farm not found"
        )

    updated=generate_recommendation(data)

    farm_db[farm_id-1].update({

        "crop":data.crop,

        "temperature":data.temperature,

        **updated

    })

    return farm_db[farm_id-1]


@router.delete("/farm/delete/{farm_id}")
def delete(farm_id:int):

    if farm_id>len(farm_db):

        raise HTTPException(
            status_code=404,
            detail="Farm not found"
        )

    removed=farm_db.pop(farm_id-1)

    return {

        "deleted":True,

        "data":removed

    }


@router.get("/farm/search/")
def search(crop:str):

    result=[

        x

        for x in farm_db

        if crop.lower()

        in

        x["crop"].lower()

    ]

    return result