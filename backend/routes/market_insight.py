from fastapi import APIRouter

from models.market import MarketInsightRequest
from services.market_insight_service import MarketInsightService

router = APIRouter(
    prefix="/market-insight",
    tags=["Market Insight"]
)

service = MarketInsightService()


@router.post("/")
def market_insight(
    request: MarketInsightRequest
):

    return service.get_market_insight(

        crop=request.crop,

        location=request.location

    )