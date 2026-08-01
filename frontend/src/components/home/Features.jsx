import {
  CloudSun,
  Sprout,
  ShieldCheck,
  TrendingUp,
  Landmark,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: CloudSun,
    title: "Weather Intelligence",
    description:
      "Real-time weather forecasts, rainfall prediction and farming alerts.",
  },
  {
    icon: Sprout,
    title: "AI Crop Advisor",
    description:
      "Receive intelligent crop recommendations based on soil, season and location.",
  },
  {
    icon: ShieldCheck,
    title: "Disease Detection",
    description:
      "Upload crop images and let AI identify diseases with treatment suggestions.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description:
      "Track market prices and identify the best time to sell your crops.",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description:
      "Discover subsidies, schemes and financial support available for farmers.",
  },
  {
    icon: Users,
    title: "Farmer Community",
    description:
      "Connect with farmers, share experiences and learn from experts.",
  },
];

function Features() {
  return (
    <section className="py-28 bg-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

            AI Powered Features

          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">

            Everything You Need For

            <span className="block text-green-600">

              Smart Farming

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            KrishiSathi combines Artificial Intelligence,
            weather forecasting, market analysis and
            precision agriculture into one platform.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-green-200 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition-all duration-300 group-hover:bg-green-600">

                  <Icon
                    size={30}
                    className="text-green-600 transition-all duration-300 group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  {feature.description}

                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-green-600 transition group-hover:gap-4">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Features;