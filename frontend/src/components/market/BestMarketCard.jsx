function BestMarketCard() {

    return (

        <section className="bg-white rounded-[35px] shadow-xl overflow-hidden">

            {/* Header */}

            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-8 text-white">

                <div className="flex justify-between items-center">

                    <div>

                        <p className="uppercase tracking-widest text-blue-100">

                            Recommended Market

                        </p>

                        <h2 className="text-4xl font-extrabold mt-2">

                            🏆 Dehradun Mandi

                        </h2>

                    </div>

                    <div className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl">

                        ⭐ Highest Price

                    </div>

                </div>

            </div>

            {/* Body */}

            <div className="grid lg:grid-cols-2 gap-10 p-10">

                {/* Left */}

                <div>

                    <div className="grid grid-cols-2 gap-5">

                        <div className="bg-slate-50 rounded-2xl p-6">

                            <div className="text-3xl">

                                💰

                            </div>

                            <p className="text-gray-500 mt-3">

                                Market Price

                            </p>

                            <h3 className="text-3xl font-bold mt-2 text-green-700">

                                ₹3,280

                            </h3>

                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6">

                            <div className="text-3xl">

                                📍

                            </div>

                            <p className="text-gray-500 mt-3">

                                Distance

                            </p>

                            <h3 className="text-3xl font-bold mt-2">

                                12 km

                            </h3>

                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6">

                            <div className="text-3xl">

                                🚗

                            </div>

                            <p className="text-gray-500 mt-3">

                                Travel Time

                            </p>

                            <h3 className="text-3xl font-bold mt-2">

                                24 min

                            </h3>

                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6">

                            <div className="text-3xl">

                                ⛽

                            </div>

                            <p className="text-gray-500 mt-3">

                                Fuel Cost

                            </p>

                            <h3 className="text-3xl font-bold mt-2 text-red-500">

                                ₹180

                            </h3>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="flex flex-col justify-between">

                    <div>

                        <h3 className="text-3xl font-bold">

                            Why This Market?

                        </h3>

                        <p className="mt-6 text-gray-600 leading-8 text-lg">

                            Dehradun Mandi is currently offering the highest
                            selling price for wheat among nearby markets.

                            Transportation cost is low,
                            travel time is short,
                            and demand remains consistently high.

                            This provides the best overall profit opportunity.

                        </p>

                    </div>

                    <div className="mt-10 flex gap-5">

                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition">

                            📍 View on Map

                        </button>

                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold transition">

                            🚚 Start Transport

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default BestMarketCard;