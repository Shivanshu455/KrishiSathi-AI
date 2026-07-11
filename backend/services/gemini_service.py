from google import genai
from dotenv import load_dotenv
import json
import os
import time

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_ai_advice(data, result, max_retries=3):

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
Temperature: {data.temperature}°C
Soil Type: {data.soil_type}

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

            response = client.models.generate_content(
                model="gemini-2.5-flash",
                contents=prompt,
                config={
                    "response_mime_type": "application/json"
                }
            )

            ai_response = json.loads(response.text)

            return ai_response

        except Exception as e:

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