function SellingMeter({ data }) {
    const score = data?.confidence ?? 0;
    const action = data?.recommended_action || "AWAITING DATA";

    const color =
        score >= 85
            ? "text-green-600"
            : score >= 60
            ? "text-yellow-500"
            : "text-red-500";

    const ring =
        score >= 85
            ? "stroke-green-500"
            : score >= 60
            ? "stroke-yellow-500"
            : "stroke-red-500";

    const circumference = 2 * Math.PI * 90;

    const offset =
        circumference -
        (score / 100) * circumference;

    return (
        <section className="grid lg:grid-cols-2 gap-10">
            {/* Left */}
            <div className="bg-white rounded-[35px] shadow-xl p-10">
                <h2 className="text-3xl font-bold mb-10">
                    🤖 AI Selling Score
                </h2>
                <div className="flex justify-center">
                    <div className="relative">
                        <svg
                            width="230"
                            height="230"
                            className="-rotate-90"
                        >
                            <circle
                                cx="115"
                                cy="115"
                                r="90"
                                stroke="#E5E7EB"
                                strokeWidth="16"
                                fill="none"
                            />
                            <circle
                                cx="115"
                                cy="115"
                                r="90"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                                className={ring}
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                style={{
                                    transition:
                                        "stroke-dashoffset 1.5s ease"
                                }}
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <span
                                className={`text-6xl font-extrabold ${color}`}
                            >
                                {score}%
                            </span>
                            <span className="text-gray-500 mt-2">
                                Confidence
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-[35px] shadow-xl p-10 text-white flex flex-col justify-center">
                <span className="uppercase tracking-widest text-green-100">
                    AI Decision
                </span>
                <h2 className="text-5xl font-extrabold mt-4">
                    {action}
                </h2>
                <p className="mt-8 text-green-100 leading-8 text-lg">
                    {data?.ai_recommendation || "Run a market analysis to generate AI recommendations and pricing strategies."}
                </p>
                <div className="mt-10 flex gap-4">
                    <div className="bg-white/20 rounded-2xl px-6 py-4">
                        📈 High Profit
                    </div>
                    <div className="bg-white/20 rounded-2xl px-6 py-4">
                        ⚡ Low Risk
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SellingMeter;