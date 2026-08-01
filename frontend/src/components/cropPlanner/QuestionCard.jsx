import { MapPin, Sparkles } from "lucide-react";
import OptionButton from "./OptionButton";

function QuestionCard({
  title,
  subtitle,
  options,
  selected,
  onSelect,
}) {
  return (
    <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl lg:p-12">

      {/* Question Badge */}

      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">

        <MapPin
          size={18}
          className="text-green-600"
        />

        <span className="text-sm font-semibold text-green-700">

          AI Question

        </span>

      </div>

      {/* Title */}

      <h2 className="text-4xl font-black leading-tight text-gray-900">

        {title}

      </h2>

      {/* Subtitle */}

      <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">

        {subtitle}

      </p>

      {/* Options */}

      <div className="mt-10 space-y-4">

        {options.map((option) => (

          <OptionButton
            key={option}
            text={option}
            selected={selected === option}
            onClick={() => onSelect(option)}
          />

        ))}

      </div>

      {/* AI Insight */}

      <div className="mt-10 flex gap-4 rounded-3xl border border-green-100 bg-green-50 p-6">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600">

          <Sparkles
            size={22}
            className="text-white"
          />

        </div>

        <div>

          <h3 className="font-bold text-gray-900">

            AI Insight

          </h3>

          <p className="mt-2 leading-7 text-gray-600">

            Your answers help our AI analyse
            weather conditions, soil suitability,
            crop compatibility and profitability
            to recommend the best crop for your farm.

          </p>

        </div>

      </div>

    </div>
  );
}

export default QuestionCard;