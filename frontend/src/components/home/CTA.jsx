import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-28 bg-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 px-10 py-20 text-center shadow-[0_25px_80px_rgba(22,163,74,0.35)] lg:px-24">

          {/* Background Blur */}

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur">

              🚀 Start Your Smart Farming Journey

            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">

              Ready To Transform

              <span className="block">

                Your Farming?

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-50">

              Join thousands of farmers using Artificial Intelligence,
              real-time weather insights, disease detection and smart
              crop recommendations to increase productivity and profits.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                to="/register"
                className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg transition-all duration-300 hover:scale-105"
              >

                Get Started

                <ArrowRight size={20} />

              </Link>

              <Link
                to="/about"
                className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >

                <PhoneCall size={20} />

                Contact Us

              </Link>

            </div>

            {/* Bottom Stats */}

            <div className="mt-16 grid grid-cols-2 gap-8 text-white md:grid-cols-4">

              <div>

                <h3 className="text-3xl font-black">

                  5K+

                </h3>

                <p className="mt-2 text-green-100">

                  Farmers

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-black">

                  98%

                </h3>

                <p className="mt-2 text-green-100">

                  AI Accuracy

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-black">

                  120+

                </h3>

                <p className="mt-2 text-green-100">

                  Crop Types

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-black">

                  24/7

                </h3>

                <p className="mt-2 text-green-100">

                  Support

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;