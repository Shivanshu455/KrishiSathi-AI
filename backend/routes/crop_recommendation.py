from fastapi import APIRouter

from services.recommendation_engine import recommend_crops

from models.schemas import CropRecommendation

router = APIRouter()


@router.post("/recommend-crops")
def recommend(data: CropRecommendation):

    recommendations = recommend_crops(data)

    return {
        "recommendations": recommendations
    }