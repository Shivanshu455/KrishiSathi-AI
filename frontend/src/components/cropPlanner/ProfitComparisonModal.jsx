import React from "react";

const ProfitComparisonModal = ({
    isOpen,
    onClose,
    comparison,
    businessAdvice
}) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto p-6">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">
                        📈 Profit Comparison
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-red-600 font-bold text-xl"
                    >
                        ✕
                    </button>

                </div>

                <table className="w-full border">

                    <thead>

                        <tr className="bg-green-600 text-white">

                            <th className="p-3">Crop</th>
                            <th>Investment</th>
                            <th>Revenue</th>
                            <th>Profit</th>
                            <th>ROI</th>
                            <th>Risk</th>

                        </tr>

                    </thead>

                    <tbody>

                        {comparison.map((crop) => (

                            <tr
                                key={crop.crop}
                                className="border-b text-center"
                            >

                                <td className="p-3 font-semibold">
                                    {crop.crop}
                                </td>

                                <td>
                                    ₹{crop.investment.toLocaleString()}
                                </td>

                                <td>
                                    ₹{crop.revenue.toLocaleString()}
                                </td>

                                <td className="text-green-700 font-bold">
                                    ₹{crop.profit.toLocaleString()}
                                </td>

                                <td>

                                    <div className="flex items-center gap-2">

                                        <div className="w-full bg-gray-200 rounded-full h-2">

                                            <div
                                                className="bg-green-600 h-2 rounded-full"
                                                style={{
                                                    width: `${Math.min(crop.roi, 100)}%`
                                                }}
                                            />

                                        </div>

                                        <span>
                                            {crop.roi}%
                                        </span>

                                    </div>

                                </td>

                                <td>
                                    {crop.risk}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

                {/* AI Business Advisor */}

                <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">

                    <h3 className="text-xl font-bold text-green-700 mb-4">
                        🤖 AI Business Advisor
                    </h3>

                    <p className="text-gray-700 whitespace-pre-line leading-7">
                        {businessAdvice}
                    </p>

                </div>

            </div>

        </div>
    );

};

export default ProfitComparisonModal;