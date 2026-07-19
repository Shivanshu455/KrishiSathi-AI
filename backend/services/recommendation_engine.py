from services.crop_loader import load_crops
from services.gemini_service import explain_crop_recommendation


def calculate_score(data, crop):

    score = 0
    reasons = []

    # -------------------------
    # Soil
    # -------------------------
    if data.soil_type in crop["soil_types"]:
        score += 25
        reasons.append("Suitable soil")

    # -------------------------
    # Temperature
    # -------------------------
    if (
        crop["temperature"]["min"]
        <= data.temperature
        <= crop["temperature"]["max"]
    ):
        score += 20
        reasons.append("Suitable temperature")

    # -------------------------
    # Humidity
    # -------------------------
    if 40 <= data.humidity <= 80:
        score += 10
        reasons.append("Suitable humidity")

    # -------------------------
    # Weather Condition
    # -------------------------
    weather = data.weather_description.lower()

    if "clear" in weather:
        score += 8
        reasons.append("Clear weather is favorable")

    elif "cloud" in weather:
        score += 6
        reasons.append("Cloud cover supports healthy crop growth")

    elif "rain" in weather:
        score += 8
        reasons.append("Rainfall benefits cultivation")

    elif "storm" in weather or "thunder" in weather:
        score -= 10
        reasons.append("Stormy weather may affect crops")

    # -------------------------
    # Wind Speed
    # -------------------------
    if data.wind_speed <= 6:
        score += 5
        reasons.append("Low wind conditions")

    elif data.wind_speed > 12:
        score -= 5
        reasons.append("High winds may damage crops")

    # -------------------------
    # District
    # -------------------------
    if data.location in crop["districts"]:
        score += 15
        reasons.append("Suitable district")

    # -------------------------
    # Irrigation
    # -------------------------
    if data.irrigation in crop["irrigation"]:
        score += 10
        reasons.append("Suitable irrigation")

    # -------------------------
    # Budget
    # -------------------------
    if data.budget == crop["investment"]:
        score += 10
        reasons.append("Matches your investment")

    # -------------------------
    # Goal
    # -------------------------
    if (
        data.goal == "Maximum Profit"
        and crop["profit_level"] == "High"
    ):
        score += 10
        reasons.append("High profit potential")

    elif (
        data.goal == "Lowest Risk"
        and crop["risk"] == "Low"
    ):
        score += 10
        reasons.append("Low farming risk")

    elif (
        data.goal == "Quick Harvest"
        and crop["duration_days"] <= 100
    ):
        score += 10
        reasons.append("Fast harvest")

    return score, reasons


def recommend_crops(data):

    crops = load_crops()

    recommendations = []

    for crop in crops:

        score, reasons = calculate_score(data, crop)

        recommendations.append(
            {
                "crop": crop["name"],
                "score": score,
                "category": crop["category"],
                "market_demand": crop["market_demand"],
                "profit_level": crop["profit_level"],
                "risk": crop["risk"],
                "duration": crop["duration_days"],
                "reasons": reasons,
            }
        )

    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True,
    )

    top_three = recommendations[:3]

    for crop in top_three:

        crop["ai_explanation"] = explain_crop_recommendation(
            crop,
            data,
        )

    return top_three