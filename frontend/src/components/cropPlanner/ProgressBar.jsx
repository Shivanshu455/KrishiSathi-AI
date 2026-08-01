import { Sparkles } from "lucide-react";

function ProgressBar({
  currentStep,
  totalSteps,
}) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-12">

      {/* Header */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">

            <Sparkles
              size={16}
              className="text-green-600"
            />

            <span className="text-sm font-semibold text-green-700">

              AI Crop Planner

            </span>

          </div>

          <h1 className="mt-5 text-4xl font-black text-gray-900">

            Let's Find The Perfect Crop

          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-8 text-gray-600">

            Answer a few simple questions and our AI will
            analyse your farm to recommend the most suitable
            and profitable crop.

          </p>

        </div>

        {/* Step Badge */}

        <div className="rounded-3xl border border-green-200 bg-green-50 px-8 py-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">

            Step

          </p>

          <h2 className="mt-2 text-4xl font-black text-green-700">

            {currentStep}

            <span className="text-gray-400">

              /{totalSteps}

            </span>

          </h2>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-10">

        <div className="flex justify-between text-sm font-semibold text-gray-600">

          <span>

            Progress

          </span>

          <span>

            {Math.round(progress)}% Complete

          </span>

        </div>

        <div className="mt-3 h-4 overflow-hidden rounded-full bg-gray-200">

          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default ProgressBar;