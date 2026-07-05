from services.gemini_service import (
    generate_ai_advice
)

class Dummy:
    crop = "Wheat"
    location = "Chandigarh"
    month = "June"
    temperature = 34
    soil_type = "Loamy"

result = {
    "health_score": 82,
    "recommendation":
    "Monitor moisture levels"
}

print(
    generate_ai_advice(
        Dummy(),
        result
    )
)