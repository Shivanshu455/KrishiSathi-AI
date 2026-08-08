import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import storyImage from "../../assets/images/about/story-farmer.jpg";

function StorySection() {
  return (
    <section className="bg-slate-50 py-32">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity:0,x:-60 }}
          whileInView={{ opacity:1,x:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
        >

          <img
            src={storyImage}
            alt="Farmer"
            className="rounded-[40px] shadow-2xl"
          />

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity:0,x:60 }}
          whileInView={{ opacity:1,x:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
        >

          <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">

            Our Story

          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight">

            Why

            <span className="block text-green-600">

              KrishiSathi

            </span>

            Exists

          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">

            Agriculture is evolving faster than ever,
            yet millions of farmers still struggle to access
            reliable weather forecasts, market trends and
            intelligent cultivation guidance.

          </p>

          <p className="mt-6 text-lg leading-9 text-slate-600">

            KrishiSathi was built to bridge that gap by combining
            Artificial Intelligence with practical farming insights,
            empowering farmers to make faster, smarter and
            data-driven decisions every day.

          </p>

          <button className="mt-10 flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-green-700">

            Learn More

            <ArrowRight size={20}/>

          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default StorySection;