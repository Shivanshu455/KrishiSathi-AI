import { motion } from "framer-motion";
import {
  Brain,
  CloudSun,
  TrendingUp,
  Sprout,
  Wallet,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Crop Advisor",
    description:
      "Receive intelligent crop recommendations tailored to your farm conditions.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: CloudSun,
    title: "Weather Intelligence",
    description:
      "Real-time forecasts help farmers plan irrigation and harvesting efficiently.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description:
      "Track market trends and make informed selling decisions.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Sprout,
    title: "Cultivation Planner",
    description:
      "Step-by-step cultivation guidance powered by AI.",
    color: "from-lime-500 to-green-500",
  },
  {
    icon: Wallet,
    title: "Profit Simulator",
    description:
      "Estimate potential profit before planting your crop.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Protected with JWT authentication and Google Sign-In.",
    color: "from-slate-700 to-slate-900",
  },
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            Platform Features
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Why Choose KrishiSathi
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Everything you need to make smarter agricultural decisions,
            powered by Artificial Intelligence and real-time data.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${feature.color} p-4 text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-green-600 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;