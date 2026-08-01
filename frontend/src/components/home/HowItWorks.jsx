import {
  Camera,
  BrainCircuit,
  Sprout,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Upload Information",
    description:
      "Provide your farm location, crop details, soil information or upload crop images.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description:
      "Our AI analyzes weather, crop health, soil conditions and historical agricultural data.",
  },
  {
    icon: Sprout,
    title: "Smart Recommendations",
    description:
      "Receive personalized crop advice, irrigation schedules and disease prevention tips.",
  },
  {
    icon: BarChart3,
    title: "Monitor Growth",
    description:
      "Track crop performance, market trends and continuously improve farming decisions.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-green-50 py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

            Simple Process

          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">

            How KrishiSathi

            <span className="block text-green-600">

              Works

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Our intelligent platform makes farming decisions
            easier through a simple four-step workflow.

          </p>

        </div>

        {/* Steps */}

        <div className="relative mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-[30px] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

                  <Icon
                    size={30}
                    className="text-green-600"
                  />

                </div>

                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">

                  {index + 1}

                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">

                  {step.title}

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  {step.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;