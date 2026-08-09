function SummaryCards({ data }) {
    const cards = [
        {
            title: "Today's Market Price",
            value: data?.best_market?.price
                ? `₹${data.best_market.price}`
                : "₹--",
            change: data?.price_change
                ? `${data.price_change}% Today`
                : "-- Today",
            icon: "📈",
            color: "text-green-600",
            bg: "bg-green-50",
        },
        {
            title: "Government MSP",
            value: data?.government_msp?.msp
                ? `₹${data.government_msp.msp}`
                : "₹--",
            change: data?.price_difference
                ? `+₹${data.price_difference} Above MSP`
                : "-- Above MSP",
            icon: "🏛",
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            title: "Expected Profit",
            value: data?.expected_profit
                ? `₹${data.expected_profit}`
                : "₹--",
            change: data?.roi
                ? `${data.roi}% ROI`
                : "-- ROI",
            icon: "💰",
            color: "text-yellow-600",
            bg: "bg-yellow-50",
        },
        {
            title: "Best Market",
            value: data?.best_market?.market || "--",
            change: data?.best_market?.distance
                ? `${data.best_market.distance} Away`
                : "-- Away",
            icon: "📍",
            color: "text-purple-600",
            bg: "bg-purple-50",
        },
    ];

    return (
        <section>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-3xl font-bold">
                        Market Summary
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Key insights for today's market conditions.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-[30px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                    >
                        <div className={`${card.bg} p-8`}>
                            <div className="flex justify-between items-center">
                                <div className="text-5xl">
                                    {card.icon}
                                </div>

                                <div
                                    className={`text-sm font-bold px-3 py-2 rounded-full bg-white ${card.color}`}
                                >
                                    LIVE
                                </div>
                            </div>

                            <h4 className="mt-8 text-gray-500 font-medium">
                                {card.title}
                            </h4>

                            <div
                                className={`mt-3 text-4xl font-extrabold ${card.color}`}
                            >
                                {card.value}
                            </div>

                            <div className="mt-4 text-gray-600 font-medium">
                                {card.change}
                            </div>
                        </div>

                        <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-400 to-blue-500"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SummaryCards;