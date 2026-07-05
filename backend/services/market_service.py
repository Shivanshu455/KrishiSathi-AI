market_prices = {
    "wheat": {
        "Delhi": 3200,
        "Chandigarh": 2900,
        "Jaipur": 3050
    },

    "rice": {
        "Delhi": 4100,
        "Chandigarh": 3900,
        "Jaipur": 4000
    },

    "maize": {
        "Delhi": 2300,
        "Chandigarh": 2200,
        "Jaipur": 2250
    }
}


def get_best_market(crop):

    crop = crop.lower()

    if crop not in market_prices:
        return None

    markets = market_prices[crop]

    best_city = max(
        markets,
        key=markets.get
    )

    return {
        "best_market": best_city,
        "expected_price": markets[best_city]
    }