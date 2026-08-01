import { CheckCircle2 } from "lucide-react";

function OptionButton({

  text,

  selected,

  onClick,

}) {

  return (

    <button

      onClick={onClick}

      className={`group flex w-full items-center justify-between rounded-2xl border-2 px-6 py-5 text-left transition-all duration-300

      ${
        selected
          ? "border-green-600 bg-green-50 shadow-lg shadow-green-100"
          : "border-gray-200 bg-white hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
      }`}

    >

      {/* Left */}

      <div className="flex items-center gap-4">

        <div

          className={`flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all

          ${
            selected
              ? "border-green-600 bg-green-600"
              : "border-gray-300 group-hover:border-green-500"
          }`}

        >

          {selected && (

            <CheckCircle2

              size={16}

              className="text-white"

            />

          )}

        </div>

        <span

          className={`text-lg font-semibold transition-colors

          ${
            selected
              ? "text-green-700"
              : "text-gray-800 group-hover:text-green-700"
          }`}

        >

          {text}

        </span>

      </div>

    </button>

  );

}

export default OptionButton;