import OptionButton from "./OptionButton";

function QuestionCard({

    title,

    subtitle,

    options,

    selected,

    onSelect

}) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-gray-800">

                {title}

            </h2>

            <p className="text-gray-500 mt-3 mb-8">

                {subtitle}

            </p>

            <div className="grid gap-4">

                {

                    options.map((option) => (

                        <OptionButton

                            key={option}

                            text={option}

                            selected={selected === option}

                            onClick={() => onSelect(option)}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default QuestionCard;