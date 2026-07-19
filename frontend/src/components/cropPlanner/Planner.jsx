import { useState } from "react";

import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import LoadingScreen from "./LoadingScreen";
import PlannerResult from "./PlannerResult";

import plannerQuestions from "../../data/plannerQuestions";

import {
    recommendCrops,
    getWeather
} from "../../services/api";

function Planner() {

    const [step, setStep] = useState(0);

    const [answers, setAnswers] = useState({});

    const [loading, setLoading] = useState(false);

    const [results, setResults] = useState(null);

    const [weather, setWeather] = useState(null);

    const currentQuestion = plannerQuestions[step];

    async function handleAnswer(answer) {

        const updatedAnswers = {
            ...answers,
            [currentQuestion.id]: answer
        };

        setAnswers(updatedAnswers);

        // Fetch live weather when location is selected
        if (currentQuestion.id === "location") {

            try {

                const weatherData = await getWeather(answer);

                setWeather(weatherData);

            }

            catch (error) {

                console.error("Weather Error:", error);

                setWeather(null);

            }

        }

    }

    async function nextQuestion() {

        if (step < plannerQuestions.length - 1) {

            setStep(step + 1);

            return;

        }

        setLoading(true);

        const plannerData = {

            location: answers.location,

            soil_type: answers.soil,

            month: new Date().toLocaleString(
                "default",
                { month: "long" }
            ),

            temperature: weather?.temperature ?? 25,

            humidity: weather?.humidity ?? 50,

            weather_description: weather?.description ?? "",

            wind_speed: weather?.wind_speed ?? 0,

            farm_size: answers.farmSize,

            irrigation: answers.irrigation,

            budget: answers.budget,

            goal: answers.goal

        };

        try {

            const data = await recommendCrops(plannerData);

            if (data.recommendations) {

                setResults(data.recommendations);

            }

            else {

                setResults(data);

            }

        }

        catch (error) {

            console.error(error);

            alert("Failed to generate crop recommendations.");

        }

        finally {

            setLoading(false);

        }

    }

    if (loading) {

        return <LoadingScreen />;

    }

    if (results) {

        return (

            <PlannerResult
                results={results}
                weather={weather}
            />

        );

    }

    return (

        <div className="max-w-3xl mx-auto py-10">

            <ProgressBar
                currentStep={step + 1}
                totalSteps={plannerQuestions.length}
            />

            <QuestionCard
                title={currentQuestion.title}
                subtitle={currentQuestion.subtitle}
                options={currentQuestion.options}
                selected={answers[currentQuestion.id]}
                onSelect={handleAnswer}
            />

            {/* Live Weather Card */}

            {currentQuestion.id === "location" && weather && (

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-5">

                    <h3 className="text-xl font-bold text-blue-700 mb-3">

                        🌦️ Live Weather

                    </h3>

                    <div className="grid grid-cols-2 gap-4 text-gray-700">

                        <p>🌡️ Temperature: <b>{weather.temperature}°C</b></p>

                        <p>💧 Humidity: <b>{weather.humidity}%</b></p>

                        <p>🌬️ Wind: <b>{weather.wind_speed} m/s</b></p>

                        <p>☁️ {weather.description}</p>

                    </div>

                </div>

            )}

            <div className="flex justify-between mt-8">

                <button

                    onClick={() => setStep(step - 1)}

                    disabled={step === 0}

                    className="px-8 py-3 rounded-xl border border-gray-300 disabled:opacity-40"

                >

                    ← Previous

                </button>

                <button

                    onClick={nextQuestion}

                    disabled={!answers[currentQuestion.id]}

                    className="bg-green-600 text-white px-8 py-3 rounded-xl disabled:bg-gray-300"

                >

                    {

                        step === plannerQuestions.length - 1

                            ? "🌱 Generate My Crop Plan"

                            : "Next →"

                    }

                </button>

            </div>

        </div>

    );

}

export default Planner;