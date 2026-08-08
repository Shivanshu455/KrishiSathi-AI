import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Lightbulb,
  Brain,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import developer from "../../assets/images/about/developer.jpg";

function MeetDeveloper() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-950 to-slate-900 py-32 text-white">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-500/20 blur-[180px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-[40px] border border-white/10 shadow-2xl">
            <img
              src={developer}
              alt="Developer"
              className="h-[650px] w-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold">
            The Mind Behind KrishiSathi
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight">
            Shivanshu
            <span className="block text-green-400">Dhiman</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            I'm a Computer Science Engineering student passionate about
            Artificial Intelligence, Full Stack Development and solving
            real-world problems through technology.
            <br /><br />
            KrishiSathi was built with the vision of making AI-powered
            agricultural decision support accessible, practical and easy
            to use for farmers.
          </p>

          {/* Achievement Cards */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <Award className="mb-3 text-green-400" />
              <h3 className="font-bold">3 Indian Patents</h3>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <GraduationCap className="mb-3 text-green-400" />
              <h3 className="font-bold">Scopus Publication</h3>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <Brain className="mb-3 text-green-400" />
              <h3 className="font-bold">IBM AI Certified</h3>
            </div>
            <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
              <Lightbulb className="mb-3 text-green-400" />
              <h3 className="font-bold">AI Research Enthusiast</h3>
            </div>
          </div>

          {/* Social */}
          <div className="mt-10 flex gap-5">
            <a href="#">
              <FaGithub
                className="transition hover:text-green-400"
                size={30}
              />
            </a>
            <a href="#">
              <FaLinkedin
                className="transition hover:text-green-400"
                size={30}
              />
            </a>
            <a href="#">
              <FaEnvelope
                className="transition hover:text-green-400"
                size={30}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MeetDeveloper;