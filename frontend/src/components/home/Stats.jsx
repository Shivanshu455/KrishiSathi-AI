import {
  Users,
  Target,
  Sprout,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    title: "Farmers Assisted",
    subtitle: "Across India",
  },
  {
    icon: Target,
    value: "98%",
    title: "AI Accuracy",
    subtitle: "Smart Predictions",
  },
  {
    icon: Sprout,
    value: "120+",
    title: "Crop Varieties",
    subtitle: "Supported",
  },
  {
    icon: Clock3,
    value: "24/7",
    title: "AI Support",
    subtitle: "Always Available",
  },
];

function Stats() {
  return (
    <section className="relative -mt-12 pb-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-[32px] border border-green-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

          <div className="grid grid-cols-1 divide-y divide-green-100 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group px-8 py-12 text-center transition-all duration-300 hover:bg-green-50"
                >
                  {/* Icon */}

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 transition-all duration-300 group-hover:bg-green-600">

                    <Icon
                      size={30}
                      className="text-green-600 transition-all duration-300 group-hover:text-white"
                    />

                  </div>

                  {/* Number */}

                  <h2 className="mt-6 text-4xl font-black text-gray-900">

                    {item.value}

                  </h2>

                  {/* Title */}

                  <p className="mt-3 text-lg font-semibold text-gray-800">

                    {item.title}

                  </p>

                  {/* Subtitle */}

                  <p className="mt-2 text-gray-500">

                    {item.subtitle}

                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;