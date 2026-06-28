def generate_recommendation(data):

    if data.temperature > 35:
        return {
            "health_score": 60,
            "confidence": 92,
            "recommendation":
            "Increase irrigation immediately"
        }

    elif data.temperature > 28:
        return {
            "health_score": 80,
            "confidence": 88,
            "recommendation":
            "Monitor moisture levels"
        }

    return {
        "health_score": 95,
        "confidence": 96,
        "recommendation":
        "Conditions are healthy"
    }