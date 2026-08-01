import {
  ArrowRight,
  Play,
  Sparkles,
  CloudSun,
  ShieldCheck,
  Sprout,
  TrendingUp,
  Users,
  Wheat,
  BadgeCheck,
  CloudRain,
} from "lucide-react";

import heroFarmer from "../../assets/images/hero/hero-main.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute -left-44 top-0 h-[500px] w-[500px] rounded-full bg-green-100 blur-[130px] opacity-60" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-100 blur-[130px] opacity-60" />

      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">

              <Sparkles size={16} />

              AI Agriculture Assistant

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight text-gray-900 xl:text-7xl">

              AI That Helps Farmers

              <span className="block text-green-600">

                Grow Smarter,

              </span>

              <span className="block text-green-600">

                Earn More,

              </span>

              <span className="block text-green-600">

                Waste Less.

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

              KrishiSathi uses advanced Artificial Intelligence,
              weather intelligence and crop analysis to help
              farmers make accurate decisions for higher yield
              and better profits.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-green-700">

                Get Started

                <ArrowRight size={20} />

              </button>

              <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 shadow-md transition hover:border-green-600 hover:text-green-600">

                <Play size={18} />

                Watch Demo

              </button>

            </div>

            {/* Mini Features */}

            <div className="mt-14 grid grid-cols-2 gap-6 xl:grid-cols-4">

              <div className="flex items-center gap-2">

                <Users
                  size={20}
                  className="text-green-600"
                />

                <div>

                  <p className="text-sm font-semibold">

                    Farmers Assisted

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                <Wheat
                  size={20}
                  className="text-green-600"
                />

                <div>

                  <p className="text-sm font-semibold">

                    Crop Varieties

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                <BadgeCheck
                  size={20}
                  className="text-green-600"
                />

                <div>

                  <p className="text-sm font-semibold">

                    Prediction Accuracy

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                <CloudRain
                  size={20}
                  className="text-green-600"
                />

                <div>

                  <p className="text-sm font-semibold">

                    Weather Updates

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            {/* Image */}

            <div className="relative overflow-hidden rounded-[36px] shadow-[0_35px_80px_rgba(0,0,0,0.18)]">

              <img

                src={heroFarmer}

                alt="Farmer"

                className="h-[620px] w-full max-w-[620px] object-cover"

              />

            </div>

            {/* Weather */}

            <div className="absolute left-0 top-10 rounded-3xl bg-white p-5 shadow-2xl">

              <div className="flex items-center gap-3">

                <CloudSun className="text-blue-500" />

                <div>

                  <p className="text-xs text-gray-500">

                    Weather

                  </p>

                  <h4 className="font-bold">

                    26°C Sunny

                  </h4>

                  <p className="text-xs text-gray-400">

                    Humidity 60%

                  </p>

                </div>

              </div>

            </div>

            {/* Disease */}

            <div className="absolute right-0 top-16 rounded-3xl bg-white p-5 shadow-2xl">

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-green-600" />

                <div>

                  <p className="text-xs text-gray-500">

                    Disease Alert

                  </p>

                  <h4 className="font-bold text-green-600">

                    No Risk

                  </h4>

                  <p className="text-xs text-gray-400">

                    All Clear

                  </p>

                </div>

              </div>

            </div>

            {/* Crop */}

            <div className="absolute left-0 bottom-28 rounded-3xl bg-white p-5 shadow-2xl">

              <div className="flex items-center gap-3">

                <Sprout className="text-green-600" />

                <div>

                  <p className="text-xs text-gray-500">

                    Crop Health

                  </p>

                  <h4 className="font-bold text-green-600">

                    Excellent

                  </h4>

                  <p className="text-xs text-gray-400">

                    No Issues Detected

                  </p>

                </div>

              </div>

            </div>

            {/* AI */}

            <div className="absolute right-0 top-72 rounded-3xl bg-white p-5 shadow-2xl">

              <div className="flex items-center gap-3">

                <Sparkles className="text-purple-600" />

                <div>

                  <p className="text-xs text-gray-500">

                    AI Status

                  </p>

                  <h4 className="font-bold text-purple-600">

                    Ready

                  </h4>

                  <p className="text-xs text-gray-400">

                    Model Active

                  </p>

                </div>

              </div>

            </div>

            {/* Yield */}

            <div className="absolute bottom-16 right-6 rounded-3xl bg-white p-5 shadow-2xl">

              <div className="flex items-center gap-3">

                <TrendingUp className="text-green-600" />

                <div>

                  <p className="text-xs text-gray-500">

                    Yield Prediction

                  </p>

                  <h4 className="font-bold text-green-600">

                    +24%

                  </h4>

                  <p className="text-xs text-gray-400">

                    Higher Than Last Season

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;