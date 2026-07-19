function OptionButton({

    text,

    selected,

    onClick

}) {

    return (

        <button

            onClick={onClick}

            className={`

                w-full

                text-left

                px-6

                py-5

                rounded-2xl

                border-2

                transition-all

                duration-300

                hover:scale-[1.02]

                ${

                    selected

                        ? "bg-green-600 text-white border-green-600"

                        : "bg-white border-gray-300 hover:border-green-500"

                }

            `}

        >

            {text}

        </button>

    );

}

export default OptionButton;