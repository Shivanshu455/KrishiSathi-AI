from pydantic import BaseModel


class MarketInsightRequest(BaseModel):
    crop: str
    location: str


class MarketInfo(BaseModel):
    market: str
    district: str
    price: int
    distance: float


class GovernmentMSP(BaseModel):
    crop: str
    msp: int
    season: str


class MarketTrend(BaseModel):
    trend: str
    change_percent: float


class MarketInsightResponse(BaseModel):
    success: bool

    crop: str

    government_msp: GovernmentMSP

    best_market: MarketInfo

    nearby_markets: list[MarketInfo]

    trend: MarketTrend

    recommendation: str