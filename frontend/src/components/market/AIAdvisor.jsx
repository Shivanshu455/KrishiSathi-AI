function AIAdvisor() {

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

                        Confidence 92%

                    </div>

                </div>

            </div>

            {/* Body */}

            <div className="p-10 space-y-8">

                <div className="bg-green-50 border-l-4 border-green-600 rounded-2xl p-6">

                    <h3 className="text-2xl font-bold text-green-700 mb-4">

                        📢 Recommendation

                    </h3>

                    <p className="text-gray-700 leading-8 text-lg">

                        Wheat prices are currently well above the Government MSP.

                        Market demand is increasing across nearby mandis.

                        Based on recent price trends and expected profitability,

                        selling your crop within the next

                        <span className="font-bold text-green-700">

                            {" "}3–5 days

                        </span>

                        is recommended.

                    </p>

                </div>

                {/* Insights */}

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-slate-50 rounded-2xl p-6">

                        <div className="text-3xl mb-4">

                            📈

                        </div>

                        <h4 className="font-bold text-xl">

                            Market Trend

                        </h4>

                        <p className="mt-3 text-gray-600 leading-7">

                            Prices have increased steadily over the last week,

                            indicating healthy demand.

                        </p>

                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">

                        <div className="text-3xl mb-4">

                            💰

                        </div>

                        <h4 className="font-bold text-xl">

                            Profit Opportunity

                        </h4>

                        <p className="mt-3 text-gray-600 leading-7">

                            Current market prices are significantly higher than MSP,

                            offering an excellent selling opportunity.

                        </p>

                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">

                        <div className="text-3xl mb-4">

                            ⚠️

                        </div>

                        <h4 className="font-bold text-xl">

                            Risk Level

                        </h4>

                        <p className="mt-3 text-gray-600 leading-7">

                            Low market volatility is expected over the next few days,

                            reducing selling risk.

                        </p>

                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6">

                        <div className="text-3xl mb-4">

                            🚜

                        </div>

                        <h4 className="font-bold text-xl">

                            Suggested Action

                        </h4>

                        <p className="mt-3 text-gray-600 leading-7">

                            Transport your produce to the recommended mandi

                            for maximum returns.

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default AIAdvisor;