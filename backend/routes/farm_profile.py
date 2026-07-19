from fastapi import APIRouter

from models.schemas import FarmProfile

from services.farm_profile_service import (

    create_farm_profile,

    get_farm_profile,

    update_farm_profile

)

router = APIRouter(
    prefix="/farm-profile",
    tags=["Farm Profile"]
)