from fastapi import APIRouter
from models.schemas import CultivationPlanRequest
from services.cultivation_service import generate_cultivation_plan

router = APIRouter()


@router.post("/generate-cultivation-plan")
def cultivation_plan(data: CultivationPlanRequest):

    plan = generate_cultivation_plan(data)

    return {
        "plan": plan
    }