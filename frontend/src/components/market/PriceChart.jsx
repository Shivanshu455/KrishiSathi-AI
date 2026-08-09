import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

function PriceChart({ data }) {
    const chartData = Array.isArray(data?.price_history)
        ? data.price_history
        : [];

    return (
        <section className="bg-white rounded-[35px] shadow-xl p-10">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-3xl font-bold">
                        📈 Price Trend
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Last 7 Days Market Price
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="px-5 py-2 rounded-xl bg-green-600 text-white">
                        7D
                    </button>

                    <button className="px-5 py-2 rounded-xl bg-gray-100">
                        30D
                    </button>

                    <button className="px-5 py-2 rounded-xl bg-gray-100">
                        90D
                    </button>
                </div>
            </div>

            {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height={420}>
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient
                                id="priceGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#16A34A"
                                    stopOpacity={0.45}
                                />

                                <stop
                                    offset="95%"
                                    stopColor="#16A34A"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            opacity={0.2}
                        />

                        <XAxis dataKey="day" />

                        <Tooltip />

                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#16A34A"
                            strokeWidth={4}
                            fill="url(#priceGradient)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            ) : (
                <div className="h-[420px] flex items-center justify-center text-gray-500">
                    No price history available for the selected market.
                </div>
            )}
        </section>
    );
}

export default PriceChart;