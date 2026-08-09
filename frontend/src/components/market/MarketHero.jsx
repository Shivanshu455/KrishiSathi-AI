function MarketHero({ data }) {
    const crop = data?.crop ?? "Selected Crop";

    const marketPrice = data?.best_market?.price
        ? `₹${data.best_market.price}`
        : "₹--";

    const governmentMSP = data?.government_msp?.msp
        ? `₹${data.government_msp.msp}`
        : "₹--";

    const priceChange = data?.price_change
        ? `${data.price_change}% Today`
        : "-- Today";

    const action = data?.recommended_action ?? "AWAITING DATA";

    return (
        <section className="relative overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-emerald-500"></div>

            {/* Decorative Circles */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}
                    <div>

                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full mb-6">

                            <span>📈</span>

                            <span className="font-medium">
                                AI Powered Market Intelligence
                            </span>

                        </div>

                        <h1 className="text-6xl font-extrabold text-white leading-tight">

                            Sell Your Crops

                            <br />

                            <span className="text-yellow-300">
                                At The Best Price
                            </span>

                        </h1>

                        <p className="mt-8 text-green-100 text-xl leading-9 max-w-xl">

                            Analyze mandi prices, compare Government MSP,
                            discover the best market, estimate profit,
                            and receive AI-powered selling recommendations
                            before making your next decision.

                        </p>

                        <div className="flex gap-5 mt-10">

                            <button className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition">
                                Start Analysis →
                            </button>

                            <button className="border border-white text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition">
                                Learn More
                            </button>

                        </div>

                    </div>

                    {/* Right */}
                    <div className="flex justify-center">

                        <div className="bg-white/15 backdrop-blur-xl rounded-[35px] p-8 w-full max-w-md border border-white/20 shadow-2xl">

                            <div className="flex justify-between items-center mb-8">

                                <h3 className="text-white text-2xl font-bold">
                                    Market Overview
                                </h3>

                                <div className="bg-green-400 text-white px-3 py-1 rounded-full text-sm">
                                    LIVE
                                </div>

                            </div>

                            <div className="space-y-6">

                                {/* Market Price */}
                                <div className="bg-white rounded-2xl p-5">

                                    <p className="text-gray-500">
                                        Today's {crop} Price
                                    </p>

                                    <h2 className="text-4xl font-bold text-green-700">
                                        {marketPrice}
                                    </h2>

                                    <p className="text-green-600 mt-2">
                                        ▲ {priceChange}
                                    </p>

                                </div>

                                {/* MSP + AI Advice */}
                                <div className="grid grid-cols-2 gap-4">

                                    <div className="bg-white rounded-2xl p-5">

                                        <p className="text-gray-500">
                                            Govt MSP
                                        </p>

                                        <h3 className="text-2xl font-bold">
                                            {governmentMSP}
                                        </h3>

                                    </div>

                                    <div className="bg-white rounded-2xl p-5">

                                        <p className="text-gray-500">
                                            AI Advice
                                        </p>

                                        <h3 className="text-green-600 font-bold">
                                            {action}
                                        </h3>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default MarketHero;