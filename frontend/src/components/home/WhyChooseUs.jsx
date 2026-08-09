import {
  CheckCircle2,
  ShieldCheck,
  BrainCircuit,
  CloudSun,
  Smartphone,
  BarChart3,
} from "lucide-react";

import farmerImage from "../../assets/images/hero/hero-main2.png";

const benefits = [
  {
    icon: BrainCircuit,
    title: "AI Powered Decisions",
    description:
      "Advanced AI helps farmers make smarter and faster decisions.",
  },
  {
    icon: CloudSun,
    title: "Live Weather Intelligence",
    description:
      "Real-time weather forecasts and alerts for better planning.",
  },
  {
    icon: BarChart3,
    title: "Data Driven Insights",
    description:
      "Understand crop health, soil conditions and yield predictions.",
  },
  {
    icon: Smartphone,
    title: "Easy To Use",
    description:
      "Simple interface designed for every farmer.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "Your farm data is protected with secure authentication.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted Recommendations",
    description:
      "Recommendations backed by AI and agricultural best practices.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative">

            <img
              src={farmerImage}
              alt="Farmer"
              className="rounded-[36px] shadow-2xl"
            />

            <div className="absolute -bottom-8 left-8 rounded-3xl bg-white px-8 py-6 shadow-xl">

              <p className="text-4xl font-black text-green-600">

                98%

              </p>

              <p className="mt-2 font-semibold text-gray-700">

                AI Prediction Accuracy

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

              Why Choose KrishiSathi

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">

              Built For

              <span className="block text-green-600">

                Modern Agriculture

              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              KrishiSathi combines Artificial Intelligence,
              precision agriculture and weather intelligence
              into one smart platform that helps farmers make
              better decisions every day.

            </p>

            <div className="mt-12 space-y-7">

              {benefits.map((item) => {
                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex gap-5"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

                      <Icon
                        size={28}
                        className="text-green-600"
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-gray-900">

                        {item.title}

                      </h3>

                      <p className="mt-2 text-gray-600 leading-7">

                        {item.description}

                      </p>

                    </div>

                  </div>

                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;