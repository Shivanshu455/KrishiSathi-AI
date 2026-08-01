import { ArrowUpRight } from "lucide-react";

function StatCard({
  icon,
  title,
  value,
  trend,
  color = "from-green-500 to-green-600",
}) {
  return (
    <div
      className="
      group
      bg-white/80
      backdrop-blur-xl
      rounded-3xl
      border
      border-green-100
      p-6
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      cursor-pointer
    "
    >
      <div className="flex items-start justify-between">

        <div
          className={`
            h-14
            w-14
            rounded-2xl
            bg-gradient-to-br
            ${color}
            flex
            items-center
            justify-center
            text-3xl
            shadow-lg
          `}
        >
          {icon}
        </div>

        <ArrowUpRight
          size={20}
          className="
            text-gray-300
            group-hover:text-green-600
            transition
          "
        />
      </div>

      <h3 className="mt-6 text-gray-500 font-medium">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold text-gray-900">
        {value}
      </p>

      <div className="mt-4">
        <span className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
          {trend}
        </span>
      </div>
    </div>
  );
}

export default StatCard;