from pydantic import BaseModel


class FarmInput(BaseModel):
    location: str
    crop: str
    month: str
    temperature: float
    soil_type: str


class FarmResponse(BaseModel):
    id: int
    crop: str
    health_score: int
    recommendation: str