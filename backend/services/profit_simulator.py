from services.crop_loader import load_crops
from services.gemini_service import generate_business_advice


def simulate_profit(crop_names):

    crops = load_crops()

    comparison = []

    for crop in crops:

        if crop["name"] not in crop_names:
            continue

        investment = crop["estimated_cost"]

        revenue = (
            crop["expected_yield"]
            * crop["market_price"]
        )

        profit = revenue - investment

        roi = round(
            (profit / investment) * 100,
            2
        )

        comparison.append({

            "crop": crop["name"],

            "investment": investment,

            "yield": crop["expected_yield"],

            "market_price": crop["market_price"],

            "revenue": revenue,

            "profit": profit,

            "roi": roi,

            "risk": crop["risk"],

            "market_demand": crop["market_demand"]

        })

    comparison.sort(
        key=lambda x: x["profit"],
        reverse=True
    )

    advice = generate_business_advice(comparison)

    return {

        "comparison": comparison,

        "business_advice": advice

    }