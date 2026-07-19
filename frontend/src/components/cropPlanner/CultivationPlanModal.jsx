function CultivationPlanModal({ open, onClose, plan }) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-3xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">

                <div className="flex justify-between items-center p-6 border-b">

                    <h2 className="text-3xl font-bold text-green-700">
                        🌾 AI Cultivation Roadmap
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-3xl hover:text-red-500"
                    >
                        ×
                    </button>

                </div>

                <div className="p-8 whitespace-pre-line leading-8 text-gray-700">

                    {plan}

                </div>

            </div>

        </div>

    );

}

export default CultivationPlanModal;