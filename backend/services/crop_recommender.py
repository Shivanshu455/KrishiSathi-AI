from services.crop_loader import load_crops


def recommend_crops(data):

    crops = load_crops()

    recommendations = []

    for crop in crops:

        score = 0
        reasons = []

        # -------------------------
        # Soil Compatibility
        # -------------------------

        if data.soil_type in crop["soil_types"]:
            score += 30
            reasons.append("Suitable soil")

        # -------------------------
        # Temperature Compatibility
        # -------------------------

        if (
            crop["temperature"]["min"]
            <= data.temperature
            <= crop["temperature"]["max"]
        ):
            score += 30
            reasons.append("Suitable temperature")

        # -------------------------
        # Season Compatibility
        # -------------------------

        season_map = {
            "January": "Rabi",
            "February": "Rabi",
            "March": "Rabi",
            "April": "Zaid",
            "May": "Zaid",
            "June": "Kharif",
            "July": "Kharif",
            "August": "Kharif",
            "September": "Kharif",
            "October": "Rabi",
            "November": "Rabi",
            "December": "Rabi",
        }

        current_season = season_map.get(
            data.month,
            ""
        )

        if (
            current_season in crop["seasons"]
            or "All" in crop["seasons"]
        ):
            score += 25
            reasons.append("Suitable season")

        # -------------------------
        # Market Demand
        # -------------------------

        if crop["market_demand"] == "High":
            score += 10

        elif crop["market_demand"] == "Medium":
            score += 5

        # -------------------------
        # Profit Level
        # -------------------------

        if crop["profit_level"] == "High":
            score += 5

        recommendations.append(
            {
                "crop": crop["name"],
                "score": score,
                "reasons": reasons,
                "category": crop["category"],
                "profit_level": crop["profit_level"],
                "market_demand": crop["market_demand"],
                "water_requirement": crop["water_requirement"],
                "investment": crop["investment"],
                "duration": crop["growing_duration_days"],
            }
        )

    recommendations.sort(
        key=lambda x: x["score"],
        reverse=True,
    )

    return recommendations[:3]