import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-5">

      {/* Primary Button */}

      <Link
        to="/register"
        className="
          inline-flex
          items-center
          gap-2
          bg-green-600
          hover:bg-green-700
          text-white
          px-8
          py-4
          rounded-2xl
          font-semibold
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        Get Started

        <ArrowRight size={18} />

      </Link>

      {/* Secondary Button */}

      <Link
        to="/about"
        className="
          inline-flex
          items-center
          gap-3
          bg-white
          border
          border-gray-200
          hover:border-green-600
          text-gray-800
          px-8
          py-4
          rounded-2xl
          font-semibold
          shadow-md
          hover:shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
        "
      >
        <Play size={18} />

        Learn More

      </Link>

    </div>
  );
}

export default HeroButtons;