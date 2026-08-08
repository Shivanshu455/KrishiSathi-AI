import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Brain,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    techs: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    techs: ["FastAPI", "Python", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-lime-500",
    techs: ["MongoDB Atlas"],
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    techs: ["Gemini AI", "Prompt Engineering"],
  },
  {
    title: "Cloud & APIs",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
    techs: ["Weather API", "Geolocation API"],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    color: "from-slate-700 to-slate-900",
    techs: ["JWT", "Google OAuth"],
  },
];

function TechStack() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Powered By
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Modern Technology Stack
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Built using scalable technologies to deliver an intelligent,
            secure and responsive farming experience.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {technologies.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={item.title}

                initial={{ opacity: 0, y: 40 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ delay: index * 0.1 }}

                viewport={{ once: true }}

                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}

                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg"

              >

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} p-4 text-white`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">

                  {item.techs.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default TechStack;