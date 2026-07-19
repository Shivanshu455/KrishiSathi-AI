from services.gemini_service import client


def generate_cultivation_plan(data):

    prompt = f"""
You are an expert agricultural advisor for Uttarakhand.

Generate a complete cultivation guide for the following farmer.

Crop: {data.crop}
District: {data.location}
Soil Type: {data.soil_type}
Farm Size: {data.farm_size}
Budget: {data.budget}

Generate the response using these headings:

🌱 Land Preparation

🌾 Recommended Seed Variety

💧 Irrigation Schedule

🌿 Fertilizer Plan

🐛 Pest & Disease Management

📅 Month-by-Month Timeline

📦 Expected Yield

💰 Estimated Cost

📈 Expected Profit

Guidelines:
- Keep the language simple.
- Use practical farming advice.
- Use bullet points where possible.
- Keep the total response under 600 words.
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:

        print("Cultivation Plan Error:", e)

        return "Unable to generate cultivation plan at the moment."