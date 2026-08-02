from data.market_dummy_data import (
    MSP_DATA,
    MARKET_DATA,
    PRICE_HISTORY
)


class MarketRepository:

    @staticmethod
    def get_msp(crop: str):

        return MSP_DATA.get(crop)


    @staticmethod
    def get_markets(crop: str):

        return MARKET_DATA.get(crop, [])


    @staticmethod
    def get_best_market(crop: str):

        markets = MARKET_DATA.get(crop, [])

        if not markets:
            return None

        return max(
            markets,
            key=lambda market: market["price"]
        )


    @staticmethod
    def get_price_history(crop: str):

        return PRICE_HISTORY.get(crop, [])


    @staticmethod
    def get_market_summary(crop: str):

        markets = MARKET_DATA.get(crop, [])

        if not markets:

            return None

        highest = max(
            markets,
            key=lambda x: x["price"]
        )

        lowest = min(
            markets,
            key=lambda x: x["price"]
        )

        average = round(

            sum(
                market["price"]
                for market in markets
            ) / len(markets)

        )

        return {

            "highest_price": highest["price"],

            "lowest_price": lowest["price"],

            "average_price": average

        }