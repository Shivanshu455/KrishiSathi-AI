import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  CloudSun,
  TrendingUp,
  Sprout,
  Sparkles,
} from "lucide-react";
import heroImage from "../../assets/images/about/hero-farmer.png";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      
      {/* Left Blur */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-300/20 blur-[150px]" />

      {/* Right Blur */}
      <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-[180px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold text-green-700 shadow-sm">
              <Sparkles size={16} />
              AI Powered Agriculture Platform
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
              Empowering Farmers
              <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Through AI &
              </span>
              Smart Agriculture
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              KrishiSathi is an AI-powered agriculture platform helping farmers make smarter decisions using weather intelligence, AI recommendations, cultivation planning and market insights.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700"
              >
                Explore Dashboard
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/market"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-600"
              >
                View Features
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow">
                <Brain size={18} className="text-green-600" />
                AI Advisor
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow">
                <CloudSun size={18} className="text-green-600" />
                Live Weather
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow">
                <TrendingUp size={18} className="text-green-600" />
                Market Insight
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow">
                <Sprout size={18} className="text-green-600" />
                Smart Planning
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            {/* Glow Behind Image */}
            <div className="absolute h-[520px] w-[520px] rounded-full bg-green-400/20 blur-[160px]" />

            {/* Hero Image Container */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/60 bg-white/70 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <img
                src={heroImage}
                alt="Farmer using AI"
                className="h-[650px] w-[500px] rounded-[30px] object-cover object-center"
              />
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -left-12 top-10 rounded-3xl border border-white/60 bg-white/70 p-5 shadow-2xl backdrop-blur-xl"
            >
              <h2 className="text-3xl font-black text-green-600">5000+</h2>
              <p className="mt-1 text-sm text-slate-500">
                AI Recommendations
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-10 top-1/3 rounded-3xl border border-white/60 bg-white/70 p-5 shadow-2xl backdrop-blur-xl"
            >
              <CloudSun className="mb-2 text-yellow-500" size={28} />
              <h3 className="text-xl font-bold">26°C</h3>
              <p className="text-sm text-slate-500">Live Weather</p>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-10 left-8 rounded-3xl border border-white/60 bg-white/70 p-5 shadow-2xl backdrop-blur-xl"
            >
              <TrendingUp className="mb-2 text-green-600" size={28} />
              <h3 className="text-xl font-bold text-green-600">+12%</h3>
              <p className="text-sm text-slate-500">Market Growth</p>
            </motion.div>

            {/* Floating Card 4 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5.5 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-8 bottom-16 rounded-3xl border border-white/60 bg-white/70 p-5 shadow-2xl backdrop-blur-xl"
            >
              <Sprout className="mb-2 text-green-600" size={28} />
              <h3 className="text-xl font-bold">Healthy</h3>
              <p className="text-sm text-slate-500">Smart Farming</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;