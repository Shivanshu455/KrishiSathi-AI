import { useState } from "react";
import { getMarketInsight } from "../services/marketService";

import MarketHero from "../components/market/MarketHero";
import SearchPanel from "../components/market/SearchPanel";
import SellingMeter from "../components/market/SellingMeter";
import SummaryCards from "../components/market/SummaryCards";
import PriceChart from "../components/market/PriceChart";
import AIAdvisor from "../components/market/AIAdvisor";
import BestMarketCard from "../components/market/BestMarketCard";
import NearbyMarkets from "../components/market/NearbyMarkets";
import ProfitCalculator from "../components/market/ProfitCalculator";

function MarketInsight() {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async (crop, location) => {
    try {
      setLoading(true);
      setError("");
      const response = await getMarketInsight({
        crop,
        location,
      });
      setMarketData(response);
    } catch (err) {
      setError("Unable to fetch market data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <MarketHero />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <SearchPanel
          onAnalyze={handleAnalyze}
          loading={loading}
        />

        {/* Error */}
        {error && (
          <div className="mt-8 bg-red-100 text-red-700 p-4 rounded-xl">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!marketData ? (
          <div className="text-center py-24">
            <div className="text-7xl">
              🌾
            </div>
            <h2 className="text-4xl font-bold mt-6">
              Search a Crop to Begin
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Select your crop and location,
              then click Analyze Market to receive
              AI-powered market insights.
            </p>
          </div>
        ) : (
          <div className="space-y-10 mt-10">
            <SellingMeter data={marketData} />
            <SummaryCards data={marketData} />
            <PriceChart data={marketData} />
            <AIAdvisor data={marketData} />
            <BestMarketCard data={marketData} />
            <NearbyMarkets data={marketData} />
            <ProfitCalculator data={marketData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MarketInsight;