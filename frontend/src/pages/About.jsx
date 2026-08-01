// Corrected About.jsx with a centered content container pattern

import { 
  CloudSun, 
  Sprout, 
  TrendingUp, 
  Truck, 
  Cpu, 
  BarChart3, 
  Database, 
  Sparkles, 
  Layers, 
  Globe, 
  Code2, 
  Server,
  ArrowUpRight
} from "lucide-react";

function About() {
  const coreFeatures = [
    {
      title: "Weather Intelligence",
      description: "Real-time meteorological data tracking to optimize planting and harvesting schedules.",
      icon: <CloudSun className="text-emerald-600" size={24} />,
    },
    {
      title: "Crop Health Analysis",
      description: "AI-driven diagnostics to detect early signs of plant diseases and nutrient deficiencies.",
      icon: <Sprout className="text-emerald-600" size={24} />,
    },
    {
      title: "Market Intelligence",
      description: "Up-to-date pricing insights to help farmers sell at the most profitable windows.",
      icon: <TrendingUp className="text-emerald-600" size={24} />,
    },
    {
      title: "Logistics Optimization",
      description: "Streamlined supply chain and transport planning to reduce post-harvest loss.",
      icon: <Truck className="text-emerald-600" size={24} />,
    },
    {
      title: "Explainable AI",
      description: "Transparent, data-backed recommendations so you understand every decision.",
      icon: <Cpu className="text-emerald-600" size={24} />,
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive visual metrics tracking farm productivity and financial yields.",
      icon: <BarChart3 className="text-emerald-600" size={24} />,
    },
  ];

  const techStack = [
    { category: "Frontend", techs: ["React 18", "Vite", "Tailwind CSS"], icon: <Code2 className="text-blue-500" size={20} /> },
    { category: "Backend", techs: ["FastAPI", "Python 3.11", "Uvicorn"], icon: <Server className="text-emerald-500" size={20} /> },
    { category: "Database", techs: ["MongoDB Atlas", "Mongoose"], icon: <Database className="text-green-600" size={20} /> },
    { category: "Visuals & Data", techs: ["Recharts", "Lucide React"], icon: <BarChart3 className="text-purple-500" size={20} /> },
    { category: "APIs & Services", techs: ["Open-Meteo", "Nominatim OSM"], icon: <Globe className="text-orange-500" size={20} /> },
  ];

  return (
    // CHANGE 1: Outer About wrapper should take full width for full-bleed backgrounds (e.g., if you add a banner color)
    <div className="w-full min-h-screen bg-slate-50/50 text-slate-800 pb-20">
      
      {/* CHANGE 2: Outer Hero Area */}
      <section className="w-full py-16 sm:py-20 lg:py-24">
        {/* Inner Centered Content Box (mx-auto max-w-7xl) is applied here */}
        <div className="w-full mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-700 shadow-sm">
            <Sparkles size={16} />
            About KrishiSathi
          </span>
          
          <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
            Empowering Agriculture Through <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Intelligence</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            An AI-powered decision support ecosystem designed to give modern farmers precision data, predictive insights, and actionable advisory.
          </p>
        </div>
      </section>

      {/* CHANGE 3: Outer Main Content Area */}
      <main className="w-full space-y-12 sm:space-y-16">
        
        {/* Inner Centered Container Pattern: Wraps the entire core content */}
        <div className="w-full mx-auto max-w-7xl px-6 lg:px-8 space-y-12 sm:space-y-16">
          
          {/* Mission Card: Stays dark gradient but now centered and contained */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950 p-8 sm:p-12 text-white shadow-xl">
            <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-300">Our Mission</h2>
              <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                KrishiSathi aims to bridge the gap between traditional farming and modern data science. By combining real-time weather analytics, computer vision diagnostics, and localized market signals, we equip growers with tools to optimize yield and minimize risks.
              </p>
            </div>
          </div>

          {/* Core Features Bento Grid */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <Layers className="text-emerald-600" size={22} />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Platform Capabilities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 transition-colors group-hover:bg-emerald-100">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                      {feature.title}
                      <ArrowUpRight size={18} className="opacity-0 transition-opacity group-hover:opacity-100 text-emerald-600" />
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="text-blue-600" size={22} />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Architecture & Stack</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-white p-2 shadow-sm border border-slate-200">
                      {stack.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">{stack.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {stack.techs.map((t, idx) => (
                      <span key={idx} className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Future Vision Card */}
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10 text-white shadow-xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-md">
                <Sparkles className="text-purple-300" size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">Future Roadmap</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl font-normal">
              Upcoming releases will introduce edge-based leaf disease classification models, automated IoT irrigation triggers, and personalized Generative AI advisory assistants tailored to regional dialects.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}

export default About;