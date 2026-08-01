import { useState } from "react";
import { BrainCircuit, Clock3, CloudSun, ArrowRight } from "lucide-react";

import CultivationPlanModal from "./CultivationPlanModal";
import ProfitComparisonModal from "./ProfitComparisonModal";
import { generateCultivationPlan, simulateProfit } from "../../services/api";

function PlannerResult({ results, weather }) {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  // Profit Comparison States
  const [comparison, setComparison] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [loadingComparison, setLoadingComparison] = useState(false);
  const [businessAdvice, setBusinessAdvice] = useState("");

  const getBadgeColor = (type, value) => {
    if (type === "profit") {
      if (value === "High") return "bg-green-100 text-green-700";
      if (value === "Medium") return "bg-yellow-100 text-yellow-700";
      return "bg-gray-100 text-gray-700";
    }
    if (type === "risk") {
      if (value === "Low") return "bg-green-100 text-green-700";
      if (value === "Medium") return "bg-yellow-100 text-yellow-700";
      return "bg-red-100 text-red-700";
    }
    if (type === "demand") {
      if (value === "High") return "bg-green-100 text-green-700";
      if (value === "Medium") return "bg-yellow-100 text-yellow-700";
      return "bg-red-100 text-red-700";
    }
    return "bg-gray-100 text-gray-700";
  };

  const bestCrop = results[0];

  const handlePlan = async (crop) => {
    setLoading(true);
    setOpen(true);
    try {
      const response = await generateCultivationPlan({
        crop: crop.crop,
        // Replace these with planner answers later
        location: "Dehradun",
        soil_type: "Loamy",
        farm_size: "1 - 3 Acres",
        budget: "Medium",
      });
      setPlan(response.plan);
    } catch (error) {
      console.error(error);
      setPlan("Unable to generate cultivation plan.");
    } finally {
      setLoading(false);
    }
  };

  const handleCompareProfit = async () => {
    try {
      setLoadingComparison(true);
      const cropNames = results.map((crop) => crop.crop);
      const response = await simulateProfit(cropNames);
      setComparison(response.comparison);
      setBusinessAdvice(response.business_advice);
      setShowComparison(true);
    } catch (err) {
      console.error(err);
      alert("Unable to compare profits.");
    } finally {
      setLoadingComparison(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Top Titles */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-black text-gray-900">
              AI Analysis Complete
            </h1>
            <p className="mt-4 text-lg font-medium text-gray-600">
              Best Recommendation
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-green-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            
            {/* Green Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-10 text-white">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-5xl font-black">
                  🥇 {bestCrop.crop}
                </h2>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <span className="text-lg font-medium">Match Score</span>
                  <div className="h-4 w-48 overflow-hidden rounded-full bg-green-800/40">
                    <div
                      className="h-full rounded-full bg-white transition-all duration-1000"
                      style={{ width: `${bestCrop.score}%` }}
                    />
                  </div>
                  <span className="text-xl font-bold">{bestCrop.score}/100</span>
                </div>
              </div>
            </div>

            {/* Main Recommendation */}
            <div className="grid gap-10 p-10 lg:grid-cols-[1.2fr_0.8fr]">
              {/* LEFT */}
              <div>
                <h3 className="text-3xl font-black text-gray-900">
                  Why {bestCrop.crop}?
                </h3>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Our Artificial Intelligence selected
                  <span className="font-bold text-green-700">
                    {" "}
                    {bestCrop.crop}
                  </span>{" "}
                  because it provides the best balance between profitability,
                  market demand, weather suitability, soil compatibility and
                  cultivation risk.
                </p>

                {/* Reasons */}
                <div className="mt-10 grid gap-4">
                  {bestCrop.reasons.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-2xl border border-green-100 bg-green-50 p-5"
                    >
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                        ✓
                      </div>
                      <p className="leading-7 text-gray-700">{reason}</p>
                    </div>
                  ))}
                </div>

                {/* AI Explanation */}
                <div className="mt-10 rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 to-white p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">
                      <BrainCircuit size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">AI Expert Analysis</h3>
                      <p className="text-gray-500">
                        Generated using multiple agricultural factors
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 whitespace-pre-line leading-8 text-gray-700">
                    {bestCrop.ai_explanation}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div className="rounded-3xl border border-green-100 bg-gray-50 p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Recommendation Summary
                  </h3>
                  <div className="mt-8 space-y-6">
                    {/* Profit */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">
                          💰 Profit Potential
                        </span>
                        <span
                          className={`rounded-full px-4 py-2 text-sm font-semibold ${getBadgeColor(
                            "profit",
                            bestCrop.profit_level
                          )}`}
                        >
                          {bestCrop.profit_level}
                        </span>
                      </div>
                    </div>
                    {/* Demand */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">📈 Market Demand</span>
                        <span
                          className={`rounded-full px-4 py-2 text-sm font-semibold ${getBadgeColor(
                            "demand",
                            bestCrop.market_demand
                          )}`}
                        >
                          {bestCrop.market_demand}
                        </span>
                      </div>
                    </div>
                    {/* Risk */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">⚠ Risk Level</span>
                        <span
                          className={`rounded-full px-4 py-2 text-sm font-semibold ${getBadgeColor(
                            "risk",
                            bestCrop.risk
                          )}`}
                        >
                          {bestCrop.risk}
                        </span>
                      </div>
                    </div>
                    {/* Duration */}
                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-gray-500">
                          <Clock3 size={18} className="mr-2 inline" />
                          Harvest Time
                        </span>
                        <span className="font-bold text-green-700">
                          {bestCrop.duration} Days
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weather + Other Recommendations */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Weather Card */}
            <div className="rounded-[32px] border border-green-100 bg-white p-8 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <CloudSun size={30} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Live Weather</h3>
                  <p className="text-gray-500">Current Farm Conditions</p>
                </div>
              </div>
              {weather ? (
                <div className="mt-8 space-y-5">
                  <div className="flex justify-between">
                    <span className="text-gray-500">🌡 Temperature</span>
                    <span className="font-bold">{weather.temperature}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">💧 Humidity</span>
                    <span className="font-bold">{weather.humidity}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">🌬 Wind</span>
                    <span className="font-bold">{weather.wind_speed} m/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">☁ Condition</span>
                    <span className="font-bold">{weather.description}</span>
                  </div>
                </div>
              ) : (
                <div className="mt-8 rounded-2xl bg-green-50 p-6 text-gray-500">
                  Weather information unavailable.
                </div>
              )}
            </div>

            {/* Other Recommendations */}
            <div className="rounded-[32px] border border-green-100 bg-white p-8 shadow-xl">
              <h3 className="text-3xl font-black text-gray-900">
                Other Suitable Crops
              </h3>
              <p className="mt-3 text-gray-500">
                These crops also performed well during our AI analysis.
              </p>
              <div className="mt-8 space-y-5">
                {results.slice(1).map((crop, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-2xl border border-gray-200 p-6 transition hover:border-green-300 hover:shadow-lg"
                  >
                    <div>
                      <h4 className="text-xl font-bold">
                        {index === 0 ? "🥈 " : "🥉 "}
                        {crop.crop}
                      </h4>
                      <p className="mt-2 text-gray-500">{crop.score}% Match</p>
                    </div>
                    <div>
                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${getBadgeColor(
                          "profit",
                          crop.profit_level
                        )}`}
                      >
                        {crop.profit_level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <button
              onClick={() => handlePlan(bestCrop)}
              className="flex items-center gap-3 rounded-2xl bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
            >
              🌱 View Cultivation Guide
              <ArrowRight size={20} />
            </button>
            <button
              onClick={handleCompareProfit}
              className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              {loadingComparison ? "Comparing..." : "📈 Compare Profit"}
            </button>
          </div>
        </div>
      </section>

      {/* Cultivation Plan Modal */}
      <CultivationPlanModal
        open={open}
        onClose={() => setOpen(false)}
        plan={
          loading
            ? `🤖 Generating your AI cultivation roadmap...\n\nPlease wait while our AI prepares a detailed cultivation guide based on your selected crop, weather conditions and farming profile...`
            : plan
        }
      />

      {/* Profit Comparison Modal */}
      <ProfitComparisonModal
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
        comparison={comparison}
        businessAdvice={businessAdvice}
      />
    </>
  );
}

export default PlannerResult;