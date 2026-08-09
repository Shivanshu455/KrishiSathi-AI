import { useMemo, useState } from "react";

function ProfitCalculator({ data }) {
    const [quantity, setQuantity] = useState(25);

    const pricePerQuintal = Number(
        data?.best_market?.price ?? 0
    );

    const transportCost = Number(
        data?.best_market?.transport_cost ??
        data?.transport_cost ??
        0
    );

    const loadingCost = Number(
        data?.loading_cost ?? 0
    );

    const miscellaneous = Number(
        data?.miscellaneous_cost ?? 0
    );

    const revenue = useMemo(() => {
        return quantity * pricePerQuintal;
    }, [quantity, pricePerQuintal]);

    const totalExpenses =
        transportCost +
        loadingCost +
        miscellaneous;

    const netProfit = revenue - totalExpenses;

    return (
        <section className="bg-white rounded-[35px] shadow-xl overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-10 py-8 text-white">

                <h2 className="text-4xl font-extrabold">
                    💰 Profit Calculator
                </h2>

                <p className="mt-3 text-orange-100">
                    Estimate your earnings before selling your crop.
                </p>

            </div>

            <div className="grid lg:grid-cols-2 gap-12 p-10">

                {/* Left */}
                <div>

                    <label className="block text-lg font-semibold mb-5">
                        Quantity (Quintals)
                    </label>

                    <input
                        type="range"
                        min="1"
                        max="100"
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(Number(e.target.value))
                        }
                        className="w-full accent-green-600"
                    />

                    <div className="flex justify-between mt-4">
                        <span>1</span>

                        <span className="text-4xl font-bold text-green-700">
                            {quantity}
                        </span>

                        <span>100</span>
                    </div>

                    <div className="mt-10 bg-green-50 rounded-3xl p-8">

                        <p className="text-gray-500">
                            Revenue
                        </p>

                        <h2 className="text-5xl font-extrabold text-green-700 mt-3">
                            ₹{revenue.toLocaleString()}
                        </h2>

                    </div>

                </div>

                {/* Right */}
                <div className="space-y-5">

                    {/* Crop Revenue */}
                    <div className="flex justify-between bg-slate-50 rounded-2xl p-5">

                        <span>
                            Crop Revenue
                        </span>

                        <span className="font-bold">
                            ₹{revenue.toLocaleString()}
                        </span>

                    </div>

                    {/* Transport Cost */}
                    <div className="flex justify-between bg-slate-50 rounded-2xl p-5">

                        <span>
                            Transport Cost
                        </span>

                        <span className="font-bold text-red-500">
                            -₹{transportCost.toLocaleString()}
                        </span>

                    </div>

                    {/* Loading Charges */}
                    <div className="flex justify-between bg-slate-50 rounded-2xl p-5">

                        <span>
                            Loading Charges
                        </span>

                        <span className="font-bold text-red-500">
                            -₹{loadingCost.toLocaleString()}
                        </span>

                    </div>

                    {/* Miscellaneous */}
                    <div className="flex justify-between bg-slate-50 rounded-2xl p-5">

                        <span>
                            Miscellaneous
                        </span>

                        <span className="font-bold text-red-500">
                            -₹{miscellaneous.toLocaleString()}
                        </span>

                    </div>

                    {/* Net Profit */}
                    <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 text-white">

                        <p className="text-green-100">
                            Estimated Net Profit
                        </p>

                        <h2 className="text-5xl font-extrabold mt-4">
                            ₹{netProfit.toLocaleString()}
                        </h2>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProfitCalculator;