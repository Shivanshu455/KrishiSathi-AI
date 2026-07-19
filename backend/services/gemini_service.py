from google import genai
from dotenv import load_dotenv
import json
import os
import time

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def generate_ai_advice(data, result, weather, max_retries=3):

    prompt = f"""
You are KrishiSathi AI, an expert agricultural advisor.

The health score and recommendation have ALREADY been calculated by our prediction engine.

Health Score:
{result["health_score"]}

Recommendation:
{result["recommendation"]}

Treat these values as correct.

DO NOT recalculate the health score.
DO NOT disagree with the recommendation.
DO NOT mention contradictions.

Your task is only to explain the recommendation and provide practical farming advice.

Farm Details:

Crop: {data.crop}
Location: {data.location}
Month: {data.month}
Soil Type: {data.soil_type}
Current Weather:
Temperature: {data.temperature}°
Humidity: {weather["humidity"]}%
Weather: {weather.get("description", "Unknown")}
Wind Speed: {weather["wind_speed"]} m/s


Return ONLY valid JSON using this exact format:

{{
    "overall_health": "",
    "risk_level": "",
    "irrigation": "",
    "fertilizer": "",
    "pest_control": "",
    "summary": ""
}}

Do not include markdown.
Do not include ```json.
Do not explain anything.
Return only JSON.
"""

    for attempt in range(max_retries):

        try:
            
            print("===== GEMINI FUNCTION CALLED =====")
            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config={
                    "response_mime_type": "application/json"
                }
            )

            print("===== GEMINI RESPONSE =====")
            print(response.text)

            ai_response = json.loads(response.text)

            return ai_response

        except Exception as e:
            print("===== GEMINI ERROR =====")
            print(repr(e))

            error_msg = str(e)

            if "503" in error_msg and attempt < max_retries - 1:

                sleep_time = 2 ** attempt

                print(
                    f"Gemini server busy. Retrying in {sleep_time} seconds..."
                )

                time.sleep(sleep_time)

                continue

            return {
                "overall_health": "Unavailable",
                "risk_level": "Unknown",
                "irrigation": "N/A",
                "fertilizer": "N/A",
                "pest_control": "N/A",
                "summary": f"AI service unavailable: {error_msg}"
            }

def explain_crop_recommendation(crop, data):

    prompt = f"""
You are an experienced agricultural advisor for Indian farmers.

Farmer Profile

District: {data.location}
Soil Type: {data.soil_type}
Month: {data.month}

Current Weather

Temperature: {data.temperature}°C
Humidity: {data.humidity}%
Weather Condition: {data.weather_description}
Wind Speed: {data.wind_speed} m/s

Farm Details

Farm Size: {data.farm_size}
Budget: {data.budget}
Irrigation: {data.irrigation}
Goal: {data.goal}

Recommended Crop

Crop Name: {crop['crop']}
Category: {crop['category']}
Market Demand: {crop['market_demand']}
Profit Level: {crop['profit_level']}
Risk Level: {crop['risk']}
Growing Duration: {crop['duration']} days

Reasons Selected

{", ".join(crop["reasons"])}

Explain:

1. Why this crop suits the farmer.
2. How the current weather affects cultivation.
3. Advantages of growing this crop.
4. Possible risks.
5. One practical tip for improving yield.

Keep the answer under 180 words.
Use simple English.
"""

def generate_business_advice(comparison):

    prompt = f"""
You are an agricultural financial advisor.

Here is the crop comparison:

{comparison}

Analyze:

1. Which crop gives the highest profit?
2. Which crop has the best ROI?
3. Which crop has the lowest financial risk?
4. Which crop is best for a farmer with a limited budget?
5. Give one final recommendation.

Write in simple English.
Maximum 180 words.
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:

        return f"AI service unavailable: {str(e)}"