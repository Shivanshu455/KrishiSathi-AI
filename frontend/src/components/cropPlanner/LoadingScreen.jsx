import { Loader2, BrainCircuit, CloudSun, Sprout, TrendingUp } from "lucide-react";

function LoadingScreen() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6">

      <div className="w-full max-w-3xl rounded-[36px] bg-white p-12 shadow-2xl border border-green-100">

        {/* AI Badge */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2">

            <BrainCircuit
              size={18}
              className="text-green-600"
            />

            <span className="font-semibold text-green-700">

              AI Analysis In Progress

            </span>

          </div>

        </div>

        {/* Animated Icon */}

        <div className="mt-10 flex justify-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-green-100">

            <Loader2
              size={60}
              className="animate-spin text-green-600"
            />

          </div>

        </div>

        {/* Heading */}

        <h1 className="mt-10 text-center text-4xl font-black text-gray-900">

          Planning Your Perfect Crop

        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-gray-600">

          Our AI is analysing your farm conditions,
          weather, soil type, irrigation,
          budget and profitability to generate
          personalized crop recommendations.

        </p>

        {/* Analysis Steps */}

        <div className="mt-12 space-y-5">

          <div className="flex items-center justify-between rounded-2xl bg-green-50 px-6 py-4">

            <div className="flex items-center gap-4">

              <CloudSun className="text-green-600" />

              <span className="font-medium">

                Analysing Weather Conditions

              </span>

            </div>

            <Loader2
              size={18}
              className="animate-spin text-green-600"
            />

          </div>

          <div className="flex items-center justify-between rounded-2xl bg-green-50 px-6 py-4">

            <div className="flex items-center gap-4">

              <Sprout className="text-green-600" />

              <span className="font-medium">

                Evaluating Soil Compatibility

              </span>

            </div>

            <Loader2
              size={18}
              className="animate-spin text-green-600"
            />

          </div>

          <div className="flex items-center justify-between rounded-2xl bg-green-50 px-6 py-4">

            <div className="flex items-center gap-4">

              <TrendingUp className="text-green-600" />

              <span className="font-medium">

                Calculating Profitability

              </span>

            </div>

            <Loader2
              size={18}
              className="animate-spin text-green-600"
            />

          </div>

        </div>

        {/* Progress */}

        <div className="mt-12">

          <div className="flex justify-between text-sm font-semibold text-gray-600">

            <span>AI Processing</span>

            <span>Please Wait...</span>

          </div>

          <div className="mt-3 h-4 overflow-hidden rounded-full bg-gray-200">

            <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />

          </div>

        </div>

        {/* Footer */}

        <p className="mt-8 text-center text-gray-500">

          This usually takes only a few seconds...

        </p>

      </div>

    </section>
  );
}

export default LoadingScreen;