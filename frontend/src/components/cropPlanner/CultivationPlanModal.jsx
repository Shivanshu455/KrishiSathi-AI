import {
  BrainCircuit,
  BookOpen,
  Copy,
  Printer,
  X,
} from "lucide-react";

function CultivationPlanModal({
  open,
  onClose,
  plan,
}) {

  if (!open) return null;

  const copyPlan = () => {
    navigator.clipboard.writeText(plan);
    alert("Cultivation guide copied!");
  };

  const printPlan = () => {
    window.print();
  };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">

      <div className="w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-[36px] bg-white shadow-2xl">

        {/* Header */}

        <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 p-8 text-white">

          <div className="flex items-start justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">

                <BrainCircuit size={18} />

                <span className="font-semibold">

                  AI Generated Cultivation Guide

                </span>

              </div>

              <h2 className="mt-6 text-4xl font-black">

                🌾 Complete Cultivation Roadmap

              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-green-100">

                This roadmap has been generated using your
                crop selection, weather conditions,
                farm profile and AI agricultural analysis.

              </p>

            </div>

            <button

              onClick={onClose}

              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition hover:bg-red-500"

            >

              <X size={24} />

            </button>

          </div>

        </div>

        {/* Body */}

        <div className="max-h-[60vh] overflow-y-auto p-10">

          <div className="rounded-[28px] border border-green-100 bg-green-50 p-8">

            <div className="mb-8 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">

                <BookOpen size={24} />

              </div>

              <div>

                <h3 className="text-2xl font-bold">

                  AI Farming Guide

                </h3>

                <p className="text-gray-500">

                  Step-by-step cultivation recommendations

                </p>

              </div>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">

              <div className="whitespace-pre-line leading-9 text-gray-700">

                {plan}

              </div>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t bg-gray-50 p-6">

          <div className="flex flex-wrap justify-between gap-4">

            <div className="flex gap-4">

              <button

                onClick={copyPlan}

                className="flex items-center gap-2 rounded-2xl border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50"

              >

                <Copy size={18} />

                Copy Guide

              </button>

              <button

                onClick={printPlan}

                className="flex items-center gap-2 rounded-2xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"

              >

                <Printer size={18} />

                Print Guide

              </button>

            </div>

            <button

              onClick={onClose}

              className="rounded-2xl bg-green-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"

            >

              Done

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default CultivationPlanModal;