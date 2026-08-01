import React from "react";

const ProfitComparisonModal = ({
  isOpen,
  onClose,
  comparison,
  businessAdvice,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-[36px] bg-white shadow-2xl">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[4px]">
                AI Business Intelligence
              </p>
              <h2 className="mt-2 text-4xl font-black">
                Profit Comparison Report
              </h2>
              <p className="mt-4 max-w-2xl text-green-100">
                Our AI compared investment, market demand, risk, revenue and ROI
                to estimate the profitability of each recommended crop.
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl transition hover:bg-red-500"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="space-y-8 p-8">
          
          {/* Cards */}
          {comparison.map((crop, index) => (
            <div
              key={crop.crop}
              className="rounded-[30px] border border-green-100 bg-white p-8 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-black text-gray-900">
                    {index === 0 ? "🥇 " : index === 1 ? "🥈 " : "🥉 "}
                    {crop.crop}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    AI Estimated Profitability
                  </p>
                </div>
                <div className="rounded-2xl bg-green-100 px-6 py-4">
                  <p className="text-sm text-green-700">ROI</p>
                  <h2 className="text-3xl font-black text-green-700">
                    {crop.roi}%
                  </h2>
                </div>
              </div>

              {/* KPI */}
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-gray-500">Investment</p>
                  <h4 className="mt-2 text-2xl font-bold">
                    ₹{crop.investment.toLocaleString()}
                  </h4>
                </div>
                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-gray-500">Revenue</p>
                  <h4 className="mt-2 text-2xl font-bold">
                    ₹{crop.revenue.toLocaleString()}
                  </h4>
                </div>
                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-gray-500">Profit</p>
                  <h4 className="mt-2 text-2xl font-bold text-green-700">
                    ₹{crop.profit.toLocaleString()}
                  </h4>
                </div>
                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-gray-500">Risk Level</p>
                  <h4 className="mt-2 text-2xl font-bold">{crop.risk}</h4>
                </div>
              </div>

              {/* ROI Bar */}
              <div className="mt-8">
                <div className="mb-2 flex justify-between">
                  <span className="font-medium">Return On Investment</span>
                  <span className="font-bold">{crop.roi}%</span>
                </div>
                <div className="h-4 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
                    style={{
                      width: `${Math.min(crop.roi, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}

          {/* AI Business Advisor */}
          <div className="rounded-[32px] border border-green-100 bg-gradient-to-r from-green-50 via-white to-green-50 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-2xl text-white">
                🤖
              </div>
              <div>
                <h3 className="text-3xl font-black text-gray-900">
                  AI Business Advisor
                </h3>
                <p className="mt-1 text-gray-500">
                  Personalized recommendation based on profitability analysis
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <p className="whitespace-pre-line leading-8 text-gray-700">
                {businessAdvice}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-gray-50 p-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900">
                AI Recommendation
              </h4>
              <p className="mt-2 text-gray-500">
                Focus on the crop with the highest ROI while balancing
                investment, market demand and cultivation risk.
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
            >
              Close Report
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfitComparisonModal;