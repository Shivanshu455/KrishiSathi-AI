from services.market_service import market_prices
from services.traffic_service import get_transport_info


def get_best_profit_market(crop):

    crop = crop.lower()

    if crop not in market_prices:
        return None

    best_market = None
    best_profit = -1

    for city, price in market_prices[crop].items():

        transport = get_transport_info(city)

        profit = price - transport["fuel_cost"]

        if profit > best_profit:
            best_profit = profit
            best_market = city

    return {
        "recommended_market": best_market,
        "expected_profit": best_profit
    }