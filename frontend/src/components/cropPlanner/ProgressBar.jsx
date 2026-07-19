function ProgressBar({

    currentStep,

    totalSteps

}) {

    const percentage =
        (currentStep / totalSteps) * 100;

    return (

        <div className="mb-10">

            <div className="flex justify-between mb-2">

                <p className="text-gray-600">

                    Step {currentStep} of {totalSteps}

                </p>

                <p className="font-semibold text-green-700">

                    {Math.round(percentage)}%

                </p>

            </div>

            <div
                className="w-full bg-gray-200 rounded-full h-3"
            >

                <div
                    className="bg-green-600 h-3 rounded-full transition-all duration-500"
                    style={{
                        width: `${percentage}%`
                    }}
                />

            </div>

        </div>

    );

}

export default ProgressBar;