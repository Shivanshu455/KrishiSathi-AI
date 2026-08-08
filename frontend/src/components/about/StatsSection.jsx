import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Brain,
  CloudSun,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

// Custom Framer Motion Counter (Replaces react-countup)
function Counter({ end, duration = 2.5 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, end, { duration });
    return controls.stop;
  }, [count, end, duration]);

  return <motion.span>{rounded}</motion.span>;
}

const stats = [
  {
    icon: Brain,
    value: 5000,
    suffix: "+",
    title: "AI Recommendations",
    color: "text-green-600",
  },
  {
    icon: CloudSun,
    value: 15000,
    suffix: "+",
    title: "Weather Forecasts",
    color: "text-sky-500",
  },
  {
    icon: TrendingUp,
    value: 3200,
    suffix: "+",
    title: "Market Analysis",
    color: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    value: 99.9,
    suffix: "%",
    title: "Platform Availability",
    color: "text-emerald-600",
  },
];

function StatsSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-green-200/30 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            Trusted Platform
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Trusted by Modern Farmers
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Combining Artificial Intelligence, weather intelligence and market
            insights to support smarter agricultural decisions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-[30px] border border-slate-200 bg-white/70 p-8 shadow-xl backdrop-blur-xl transition-all"
              >
                <div
                  className={`inline-flex rounded-2xl bg-slate-100 p-4 ${item.color} transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-50`}
                >
                  <Icon size={38} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-5xl font-black">
                  {/* Replaced CountUp with our custom Framer Motion Counter */}
                  <Counter end={item.value} duration={2.5} />
                  {item.suffix}
                </h3>

                <p className="mt-3 text-slate-500">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;