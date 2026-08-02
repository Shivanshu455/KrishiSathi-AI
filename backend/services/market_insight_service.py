from repositories.market_repository import MarketRepository


class MarketInsightService:

    def __init__(self):

        self.repository = MarketRepository()

    def get_market_insight(self, crop: str, location: str):

        crop = crop.title()

        msp = self.repository.get_msp(crop)

        markets = self.repository.get_markets(crop)

        best_market = self.repository.get_best_market(crop)

        history = self.repository.get_price_history(crop)

        summary = self.repository.get_market_summary(crop)

        if (
            not msp or
            not markets or
            not best_market
        ):

            return {

                "success": False,

                "message": "Crop data not available."

            }

        difference = (

            best_market["price"]

            -

            msp["msp"]

        )

        # ------------------------
        # AI Recommendation
        # ------------------------

        if difference >= 800:

            recommendation = (

                "Excellent market conditions. "
                "Current prices are significantly above MSP. "
                "Selling immediately is recommended."

            )

            action = "SELL NOW"

        elif difference >= 400:

            recommendation = (

                "Market prices are healthy. "
                "Selling within the next few days "
                "is recommended."

            )

            action = "SELL SOON"

        elif difference >= 0:

            recommendation = (

                "Prices are slightly above MSP. "
                "Monitor the market before selling."

            )

            action = "MONITOR"

        else:

            recommendation = (

                "Current market price is below MSP. "
                "Waiting is recommended."

            )

            action = "HOLD"

        return {

            "success": True,

            "crop": crop,

            "location": location,

            "government_msp": msp,

            "best_market": best_market,

            "nearby_markets": markets,

            "price_history": history,

            "summary": summary,

            "price_difference": difference,

            "recommended_action": action,

            "ai_recommendation": recommendation

        }