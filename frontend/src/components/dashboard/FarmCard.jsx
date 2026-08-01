import React from "react";

function FarmCard({ farm, onEdit, onDelete }) {
  let healthColor = "#22c55e";
  let healthStatus = "Healthy";

  if (farm.health_score < 70) {
    healthColor = "#f59e0b";
    healthStatus = "Moderate";
  }

  if (farm.health_score < 50) {
    healthColor = "#ef4444";
    healthStatus = "High Risk";
  }

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-green-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-green-500 to-green-700" />

      {/* Header */}
      <div className="p-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              🌾 Smart Farm
            </div>
            <h2 className="mt-5 text-4xl font-black text-gray-900">
              {farm.crop}
            </h2>
            <p className="mt-2 text-gray-500">📍 {farm.location}</p>
          </div>
          <div
            className="rounded-full px-5 py-3 font-semibold"
            style={{
              backgroundColor: `${healthColor}20`,
              color: healthColor,
            }}
          >
            {healthStatus}
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="mt-8 rounded-3xl border border-green-100 bg-gradient-to-r from-green-50 via-white to-green-50 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white text-xl">
              🤖
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                AI Recommendation
              </h3>
              <p className="text-sm text-gray-500">
                Generated from your latest farm analysis
              </p>
            </div>
          </div>
          <p className="mt-5 leading-8 text-gray-700">
            {farm.recommendation}
          </p>
        </div>

        {/* Farm Information */}
        <div className="mt-8 grid grid-cols-2 gap-5">
          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">❤️ Health</p>
            <h3 className="mt-2 text-3xl font-black text-green-700">
              {farm.health_score}%
            </h3>
          </div>
          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">🌡 Temperature</p>
            <h3 className="mt-2 text-3xl font-black text-gray-900">
              {farm.temperature}°C
            </h3>
          </div>
          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">💰 Expected Profit</p>
            <h3 className="mt-2 text-2xl font-black text-green-700">
              ₹{farm.expected_profit}
            </h3>
          </div>
          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="text-sm text-gray-500">🎯 AI Confidence</p>
            <h3 className="mt-2 text-3xl font-black text-blue-600">
              {farm.confidence}%
            </h3>
          </div>
        </div>

        {/* Farm Details */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-green-100 p-4 text-center">
            <div className="text-2xl">🌱</div>
            <p className="mt-2 text-xs text-gray-500">Soil</p>
            <p className="mt-1 font-semibold">{farm.soil_type}</p>
          </div>
          <div className="rounded-2xl border border-green-100 p-4 text-center">
            <div className="text-2xl">📅</div>
            <p className="mt-2 text-xs text-gray-500">Month</p>
            <p className="mt-1 font-semibold">{farm.month}</p>
          </div>
          <div className="rounded-2xl border border-green-100 p-4 text-center">
            <div className="text-2xl">📍</div>
            <p className="mt-2 text-xs text-gray-500">Location</p>
            <p className="mt-1 truncate font-semibold">{farm.location}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={onEdit}
            className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            ✏️ Edit Farm
          </button>
          <button
            onClick={onDelete}
            className="flex-1 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            🗑 Delete
          </button>
        </div>

        {/* View Report */}
        <button className="mt-4 w-full rounded-2xl border border-green-600 bg-green-50 px-6 py-4 text-lg font-semibold text-green-700 transition-all duration-300 hover:bg-green-600 hover:text-white">
          📊 View Complete Analysis
        </button>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-green-100 pt-6">
          <div>
            <p className="text-sm text-gray-500">Last Updated</p>
            <p className="font-semibold text-gray-800">
              {farm.updated_at || "Recently"}
            </p>
          </div>
          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🌿 Active Farm
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmCard;