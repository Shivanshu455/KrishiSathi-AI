from models.schemas import FarmInput
from services.advisory import generate_recommendation

data = FarmInput(
    location="Chandigarh",
    crop="Wheat",
    month="December",
    temperature=25,
    soil_type="Loamy"
)

result = generate_recommendation(data)

print(result)