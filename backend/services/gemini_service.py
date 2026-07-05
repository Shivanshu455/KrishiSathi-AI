import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.0-flash"
)


def generate_ai_advice(data, result):

    prompt = f"""
    You are an expert agricultural advisor.

    Analyze the following farm information and provide a concise professional advisory.

    Crop: {data.crop}
    Location: {data.location}
    Month: {data.month}
    Temperature: {data.temperature}
    Soil Type: {data.soil_type}

    Health Score:
    {result['health_score']}

    Existing Recommendation:
    {result['recommendation']}

    Explain:
    1. Why this recommendation was given.
    2. Risks if conditions worsen.
    3. What the farmer should do next.

    Keep the response under 100 words.
    """

    response = model.generate_content(
        prompt
    )

    return response.text