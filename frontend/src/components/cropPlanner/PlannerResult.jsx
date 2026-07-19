import { useState } from "react";
import CultivationPlanModal from "./CultivationPlanModal";
import ProfitComparisonModal from "./ProfitComparisonModal";

import {
    generateCultivationPlan,
    simulateProfit
} from "../../services/api";

function PlannerResult({ results }) {

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
                budget: "Medium"

            });

            setPlan(response.plan);

        }

        catch (error) {

            console.error(error);

            setPlan("Unable to generate cultivation plan.");

        }

        finally {

            setLoading(false);

        }

    };

    const handleCompareProfit = async () => {

        try {

            setLoadingComparison(true);

            const cropNames = results.map(
                crop => crop.crop
            );

            const response = await simulateProfit(
                cropNames
            );

            setComparison(
                response.comparison
            );

            setBusinessAdvice(
                response.business_advice
            );

            setShowComparison(true);

        }

        catch (err) {

            console.error(err);

            alert("Unable to compare profits.");

        }

        finally {

            setLoadingComparison(false);

        }

    };

    return (

        <>
        <div className="max-w-6xl mx-auto py-10 px-4">

    <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        🌾 Your AI Crop Recommendations
    </h1>

    <div className="space-y-10">

        {results.map((crop, index) => (

            <div
                key={index}
                className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden"
            >

                {/* Header */}

                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6">

                    <h2 className="text-3xl font-bold">

                        {index === 0
                            ? "🥇 "
                            : index === 1
                            ? "🥈 "
                            : "🥉 "}

                        {crop.crop}

                    </h2>

                    <p className="mt-3">
                        ⭐ Match Score
                    </p>

                    <div className="w-full bg-green-200 rounded-full h-4 mt-2">

                        <div
                            className="bg-white h-4 rounded-full"
                            style={{
                                width: `${crop.score}%`
                            }}
                        />

                    </div>

                    <p className="mt-2 font-semibold">

                        {crop.score}/100

                    </p>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">

                    <div>

                        <p className="text-gray-500 mb-2">
                            💰 Profit
                        </p>

                        <span
                            className={`px-3 py-1 rounded-full font-semibold ${getBadgeColor(
                                "profit",
                                crop.profit_level
                            )}`}
                        >

                            {crop.profit_level}

                        </span>

                    </div>

                    <div>

                        <p className="text-gray-500 mb-2">
                            📈 Demand
                        </p>

                        <span
                            className={`px-3 py-1 rounded-full font-semibold ${getBadgeColor(
                                "demand",
                                crop.market_demand
                            )}`}
                        >

                            {crop.market_demand}

                        </span>

                    </div>

                    <div>

                        <p className="text-gray-500 mb-2">
                            ⚠ Risk
                        </p>

                        <span
                            className={`px-3 py-1 rounded-full font-semibold ${getBadgeColor(
                                "risk",
                                crop.risk
                            )}`}
                        >

                            {crop.risk}

                        </span>

                    </div>

                    <div>

                        <p className="text-gray-500 mb-2">
                            ⏳ Harvest
                        </p>

                        <span className="font-semibold">

                            {crop.duration} Days

                        </span>

                    </div>

                </div>

                {/* Reasons */}

                <div className="px-6 pb-6">

                    <h3 className="text-xl font-bold text-green-700 mb-4">
                        ✅ Why this crop?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-3">

                        {crop.reasons.map((reason, i) => (

                            <div
                                key={i}
                                className="bg-green-50 rounded-xl p-3"
                            >

                                ✔ {reason}

                            </div>

                        ))}

                    </div>

                </div>

                {/* AI Advice */}

                <div className="bg-gray-50 p-6 border-t">

                    <h3 className="text-xl font-bold text-green-700 mb-4">
                        🤖 AI Expert Recommendation
                    </h3>

                    <div className="leading-8 text-gray-700 whitespace-pre-line">

                        {crop.ai_explanation}

                    </div>

                </div>

                {/* Buttons */}

                <div className="p-6 border-t flex flex-wrap gap-4">

                    <button
                        onClick={() => handlePlan(crop)}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                    >

                        🌱 View Detailed Cultivation Plan

                    </button>

                    {index === 0 && (

                        <button
                            onClick={handleCompareProfit}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                        >

                            {loadingComparison
                                ? "Comparing..."
                                : "📈 Compare Profit"}

                        </button>

                    )}

                </div>

            </div>

        ))}

    </div>

</div>
            <CultivationPlanModal
                open={open}
                onClose={() => setOpen(false)}
                plan={
                    loading
                        ? "🤖 Generating your AI cultivation roadmap...\n\nPlease wait..."
                        : plan
                }
            />

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