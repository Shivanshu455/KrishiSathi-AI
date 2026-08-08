import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-green-700 to-lime-700 py-32">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-32 h-[400px] w-[400px] rounded-full bg-white/10 blur-[180px]" />
      <div className="absolute -bottom-40 -right-32 h-[400px] w-[400px] rounded-full bg-white/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 backdrop-blur-md">

            <Leaf size={18} className="text-green-100" />

            <span className="font-semibold text-white">
              Join The Future of Agriculture
            </span>

          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

            Ready to Transform

            <span className="block">

              Your Farming Journey?

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100">

            Experience AI-powered crop planning, weather intelligence,
            market analysis and smart farming recommendations —
            all in one intelligent platform.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-green-700 transition-all duration-300 hover:-translate-y-1"
            >
              Explore Dashboard

              <ArrowRight size={20} />

            </Link>

            <Link
              to="/market"
              className="rounded-full border border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-green-700"
            >
              View Market Insights
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default CTASection;