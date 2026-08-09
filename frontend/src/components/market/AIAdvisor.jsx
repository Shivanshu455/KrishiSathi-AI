function AIAdvisor({ data }) {
    const confidence = data?.confidence ?? 0;

    const recommendation =
        data?.ai_recommendation ??
        "Run a market analysis to generate AI-powered market recommendations.";

    const marketTrend =
        data?.market_trend ??
        "Market trend information is not available yet.";

    const profitOpportunity =
        data?.profit_opportunity ??
        "Profit opportunity information is not available yet.";

    const riskLevel =
        data?.risk_level ??
        "Risk information is not available yet.";

    const suggestedAction =
        data?.recommended_action ??
        "Run a market analysis to generate a suggested action.";

    return (
        <section className="bg-white rounded-[35px] shadow-xl overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-green-700 to-emerald-500 px-10 py-8">

                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-green-100 uppercase tracking-widest text-sm">
                            AI Assistant
                        </p>

                        <h2 className="text-4xl font-bold text-white mt-2">
                            🤖 Krishi AI Advisor
                        </h2>
                    </div>

                    <div className="bg-white/20 backdrop-blur-lg px-5 py-3 rounded-2xl text-white font-semibold">
                        Confidence {confidence}%
                    </div>

                </div>
            </div>

            {/* Body */}
            <div className="p-10 space-y-8">

                {/* Recommendation */}
                <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-6">

                    <h3 className="text-2xl font-bold text-green-700 mb-4">
                        📢 Recommendation
                    </h3>

                    <p className="text-gray-700 leading-8 text-lg">
                        {recommendation}
                    </p>

                </div>

                {/* Insights */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Market Trend */}
                    <div className="bg-slate-50 rounded-2xl p-6">

                        <div className="text-3xl mb-4">
                            📈
                        </div>

                        <h4 className="font-bold text-xl">
                            Market Trend
                        </h4>

                        <p className="mt-3 text-gray-600 leading-7">
                            {marketTrend}
                        </p>

                    </div>

                    {/* Profit Opportunity */}
                    <div className="bg-slate-50 rounded-2xl p-6">

                        <div className="text-3xl mb-4">
                            💰
                        </div>

                        <h4 className="font-bold text-xl">
                            Profit Opportunity
                        </h4>

                        <p className="mt-3 text-gray-600 leading-7">
                            {profitOpportunity}
                        </p>

                    </div>

                    {/* Risk Level */}
                    <div className="bg-slate-50 rounded-2xl p-6">

                        <div className="text-3xl mb-4">
                            ⚠️
                        </div>

                        <h4 className="font-bold text-xl">
                            Risk Level
                        </h4>

                        <p className="mt-3 text-gray-600 leading-7">
                            {riskLevel}
                        </p>

                    </div>

                    {/* Suggested Action */}
                    <div className="bg-slate-50 rounded-2xl p-6">

                        <div className="text-3xl mb-4">
                            🚜
                        </div>

                        <h4 className="font-bold text-xl">
                            Suggested Action
                        </h4>

                        <p className="mt-3 text-gray-600 leading-7">
                            {suggestedAction}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AIAdvisor;