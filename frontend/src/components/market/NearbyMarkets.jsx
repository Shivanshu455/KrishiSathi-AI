function NearbyMarkets({ data }) {
    const markets = data?.nearby_markets ?? [];

    return (
        <section>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-4xl font-bold">
                        📍 Nearby Markets
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Compare nearby mandis before making your selling decision.
                    </p>
                </div>
            </div>
            
            <div className="space-y-6">
                {markets.map((market, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[28px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-8"
                    >
                        <div className="grid lg:grid-cols-6 gap-6 items-center">
                            {/* Market */}
                            <div>
                                <h3 className="text-2xl font-bold">
                                    {market.market}
                                </h3>
                                <p className="text-gray-500 mt-2">
                                    Nearby Agricultural Market
                                </p>
                            </div>

                            {/* Price */}
                            <div>
                                <p className="text-gray-500">
                                    Price
                                </p>
                                <h3 className="text-3xl font-bold text-green-600">
                                    {market.price}
                                </h3>
                            </div>

                            {/* Distance */}
                            <div>
                                <p className="text-gray-500">
                                    Distance
                                </p>
                                <h3 className="text-xl font-bold">
                                    {market.distance}
                                </h3>
                            </div>

                            {/* Travel */}
                            <div>
                                <p className="text-gray-500">
                                    Travel
                                </p>
                                <h3 className="text-xl font-bold">
                                    {market.travel}
                                </h3>
                            </div>

                            {/* Trend */}
                            <div>
                                <p className="text-gray-500">
                                    Trend
                                </p>
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                                    {market.trend}
                                </span>
                            </div>

                            {/* Button */}
                            <div>
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-bold transition">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NearbyMarkets;