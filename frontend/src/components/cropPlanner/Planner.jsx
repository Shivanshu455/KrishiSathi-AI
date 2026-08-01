import { useState } from "react";

import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import LoadingScreen from "./LoadingScreen";
import PlannerResult from "./PlannerResult";
import plannerQuestions from "../../data/plannerQuestions";

import { recommendCrops, getWeather } from "../../services/api";

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
      [currentQuestion.id]: answer,
    };

    setAnswers(updatedAnswers);

    // Fetch live weather when location is selected
    if (currentQuestion.id === "location") {
      try {
        const weatherData = await getWeather(answer);
        setWeather(weatherData);
      } catch (error) {
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
      month: new Date().toLocaleString("default", { month: "long" }),
      temperature: weather?.temperature ?? 25,
      humidity: weather?.humidity ?? 50,
      weather_description: weather?.description ?? "",
      wind_speed: weather?.wind_speed ?? 0,
      farm_size: answers.farmSize,
      irrigation: answers.irrigation,
      budget: answers.budget,
      goal: answers.goal,
    };

    try {
      const data = await recommendCrops(plannerData);
      if (data.recommendations) {
        setResults(data.recommendations);
      } else {
        setResults(data);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to generate crop recommendations.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  if (results) {
    return <PlannerResult results={results} weather={weather} />;
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <ProgressBar
          currentStep={step + 1}
          totalSteps={plannerQuestions.length}
        />
        <div className="mt-12 grid gap-8 xl:grid-cols-[2fr_1fr]">
          {/* LEFT */}
          <div>
            <QuestionCard
              title={currentQuestion.title}
              subtitle={currentQuestion.subtitle}
              options={currentQuestion.options}
              selected={answers[currentQuestion.id]}
              onSelect={handleAnswer}
            />
            <div className="mt-10 flex justify-between">
              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
                className="rounded-2xl border border-gray-300 bg-white px-8 py-4 font-semibold transition hover:border-green-600 hover:text-green-700 disabled:opacity-40"
              >
                ← Previous
              </button>
              <button
                onClick={nextQuestion}
                disabled={!answers[currentQuestion.id]}
                className="rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700 disabled:bg-gray-300"
              >
                {step === plannerQuestions.length - 1
                  ? "🌱 Generate Crop Plan"
                  : "Continue →"}
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Weather */}
            <div className="rounded-[28px] bg-white p-6 shadow-xl">
              <h3 className="text-xl font-bold">🌦 Live Weather</h3>
              {weather ? (
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between">
                    <span>Temperature</span>
                    <b>{weather.temperature}°C</b>
                  </div>
                  <div className="flex justify-between">
                    <span>Humidity</span>
                    <b>{weather.humidity}%</b>
                  </div>
                  <div className="flex justify-between">
                    <span>Wind</span>
                    <b>{weather.wind_speed} m/s</b>
                  </div>
                  <div className="flex justify-between">
                    <span>Condition</span>
                    <b>{weather.description}</b>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-gray-500">
                  Select your location to load weather.
                </p>
              )}
            </div>

            {/* AI */}
            <div className="rounded-[28px] bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">
                  🤖
                </div>
                <h3 className="text-xl font-bold">AI Insight</h3>
              </div>
              <p className="mt-5 leading-8 text-gray-600">
                Based on your answers, our AI evaluates soil, weather, budget,
                farm size, and irrigation to recommend the most profitable
                crops.
              </p>
            </div>

            {/* Summary */}
            <div className="rounded-[28px] bg-white p-6 shadow-xl">
              <h3 className="text-xl font-bold">📍 Farm Summary</h3>
              <div className="mt-5 space-y-4">
                <div className="flex justify-between">
                  <span>Location</span>
                  <b>{answers.location || "--"}</b>
                </div>
                <div className="flex justify-between">
                  <span>Soil</span>
                  <b>{answers.soil || "--"}</b>
                </div>
                <div className="flex justify-between">
                  <span>Farm Size</span>
                  <b>{answers.farmSize || "--"}</b>
                </div>
                <div className="flex justify-between">
                  <span>Budget</span>
                  <b>{answers.budget || "--"}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planner;