from pydantic import BaseModel , EmailStr , Field


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

class UserRegister(BaseModel):
    username: str = Field(
        min_length=3,
        max_length=30
    )

    email: EmailStr

    password: str = Field(
        min_length=8
    )


class UserLogin(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)

class CropRecommendation(BaseModel):

    location: str
    soil_type: str
    month: str
    temperature: float
    humidity: float
    weather_description: str
    wind_speed: float
    farm_size: str
    irrigation: str
    budget: str
    goal: str

class FarmProfile(BaseModel):
    
    farm_name: str
    district: str
    village: str
    farm_size: str
    soil_type: str
    water_source: str
    budget: str
    experience: str
    goal: str

class CultivationPlanRequest(BaseModel):
    crop: str
    location: str
    soil_type: str
    farm_size: str
    budget: str

class ProfitSimulationRequest(BaseModel):
    crops: list[str]   