from services.market_service import get_best_market
from services.profit_optimizer import get_best_profit_market
from services.traffic_service import get_transport_info

def generate_recommendation(data):

    health_score = 100
    reasons = []

    # Temperature Analysis

    if data.temperature > 35:
        health_score -= 25
        reasons.append("high temperature stress")

    elif data.temperature > 30:
        health_score -= 10
        reasons.append("moderately high temperature")

    # Crop Season Compatibility

    if (
        data.crop.lower() == "wheat"
        and data.month.lower()
        not in ["november", "december", "january"]
    ):
        health_score -= 15
        reasons.append("wheat is outside optimal season")

    if (
        data.crop.lower() == "rice"
        and data.month.lower()
        not in ["june", "july", "august"]
    ):
        health_score -= 15
        reasons.append("rice is outside optimal season")

    # Soil Compatibility

    if (
        data.crop.lower() == "wheat"
        and data.soil_type.lower() not in ["loamy", "clay"]
    ):
        health_score -= 10
        reasons.append("soil less suitable for wheat")

    if (
        data.crop.lower() == "rice"
        and data.soil_type.lower() not in ["clay"]
    ):
        health_score -= 10
        reasons.append("soil less suitable for rice")

    # Bound health score

    health_score = max(0, min(100, health_score))

    # Recommendation Generation

    # Recommendation Generation

    if health_score >= 85:
        recommendation = (
            "Conditions are favorable for crop growth."
        )
        confidence = 96

    elif health_score >= 70:
        recommendation = (
            "Monitor crop conditions and irrigation."
        )
        confidence = 91

    elif health_score >= 50:
        recommendation = (
            "Increase irrigation and monitor stress indicators."
        )
        confidence = 88

    else:
        recommendation = (
            "Crop conditions are critical. Immediate intervention recommended."
        )
        confidence = 84


    # Market Intelligence

    market_data = get_best_market(
        data.crop
    )

    profit_data = get_best_profit_market(
        data.crop
    )

    traffic_data = get_transport_info(
        profit_data["recommended_market"]
    )


    return {
        "health_score": health_score,

        "confidence": confidence,

        "recommendation": recommendation,

        "analysis_factors": reasons,

        "best_market":
            market_data["best_market"],

        "market_price":
            market_data["expected_price"],

        "recommended_market":
            profit_data["recommended_market"],

        "expected_profit":
            profit_data["expected_profit"],

        "travel_time":
            traffic_data["travel_time"],

        "fuel_cost":
            traffic_data["fuel_cost"]
    }