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