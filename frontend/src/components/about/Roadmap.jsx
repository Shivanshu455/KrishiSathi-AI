import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const completed = [
  "AI Crop Recommendation",
  "Weather Intelligence",
  "Market Insights",
  "Smart Cultivation Planner",
  "Profit Simulation",
];

const upcoming = [
  "Disease Detection using Computer Vision",
  "Satellite Crop Monitoring",
  "Explainable AI Recommendations",
  "Voice-based AI Assistant",
  "Mobile Application",
  "IoT Smart Irrigation",
];

function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 py-32 text-white">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-[180px]" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 font-semibold backdrop-blur">

            Product Roadmap

          </span>

          <h2 className="mt-8 text-5xl font-black">

            Building The Future

            <span className="block">

              Of Smart Agriculture

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-50">

            KrishiSathi is continuously evolving with new AI capabilities,
            intelligent automation and modern agricultural technologies.

          </p>

        </div>

        {/* Timeline */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2">

          {/* Current */}

          <div className="rounded-[35px] bg-white/10 p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-bold">

              Available Today

            </h3>

            <div className="mt-10 space-y-6">

              {completed.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2
                    className="text-lime-300"
                    size={26}
                  />

                  <span className="text-lg">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Future */}

          <div className="rounded-[35px] bg-white/10 p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-bold">

              Coming Soon

            </h3>

            <div className="mt-10 space-y-6">

              {upcoming.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <Circle
                    className="text-white/70"
                    size={22}
                  />

                  <span className="text-lg">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* CTA */}

        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          className="mt-28 text-center"

        >

          <h2 className="text-5xl font-black">

            Ready to Experience

            <span className="block">

              AI Powered Agriculture?

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100">

            Join KrishiSathi and discover how Artificial Intelligence
            can help make smarter farming decisions.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-green-700 transition hover:-translate-y-1"
            >
              Explore Dashboard
              <ArrowRight size={20}/>
            </Link>

            <Link
              to="/market"
              className="rounded-full border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-green-700"
            >
              Explore Features
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Roadmap;