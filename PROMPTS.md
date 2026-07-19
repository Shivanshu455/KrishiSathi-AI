# PROMPTS.md

# KrishiSathi AI Prompt Engineering Log

This document records the prompt engineering process used for the AI features implemented in KrishiSathi.

---

# Prompt 1 – Crop Recommendation Explanation

## Objective

Explain why the recommended crop is suitable for the farmer based on farm details, weather conditions, soil type, and budget.

### Prompt

```text
You are an experienced agricultural advisor for Indian farmers.

Explain:

1. Why this crop suits the farmer.
2. How the current weather affects cultivation.
3. Advantages of growing this crop.
4. Possible risks.
5. One practical tip for improving yield.

Keep the answer under 180 words.
Use simple English.
```

### Example Input

- Crop: Potato
- Soil: Loamy
- Weather: 24°C
- Budget: ₹70,000

### Example Output

Potato is a suitable crop because loamy soil provides excellent drainage and supports healthy tuber growth. The current temperature is favourable for cultivation. Proper irrigation and timely pest monitoring can further improve yield.

### Result

✅ Worked well.

---

# Prompt 2 – AI Cultivation Plan

## Objective

Generate a complete cultivation roadmap for the recommended crop.

### Prompt

```text
Generate a detailed cultivation plan including:

- Land Preparation
- Seed Selection
- Irrigation Schedule
- Fertilizer Plan
- Pest Management
- Harvesting
- Storage Tips

Provide the answer in a structured format.
```

### Example Input

Crop: Wheat

### Example Output

Step-by-step cultivation plan covering preparation, irrigation, fertilization, pest management, harvesting, and storage.

### Result

✅ Produced structured and practical recommendations.

---

# Prompt 3 – AI Business Advisor

## Objective

Compare multiple recommended crops and provide financial guidance.

### Prompt

```text
You are an agricultural financial advisor.

Analyze:

1. Highest profit crop
2. Highest ROI
3. Lowest financial risk
4. Best crop for limited budget
5. Final recommendation

Maximum 180 words.
```

### Example Input

- Wheat
- Rice
- Potato

### Example Output

Potato provides the highest expected profit but requires greater investment. Wheat offers lower risk and is suitable for farmers with moderate budgets. Choose Potato when maximizing profit is the priority.

### Result

✅ Generated useful financial insights for crop selection.

---

# Best Prompt

The Business Advisor prompt produced the most valuable output because it combined profitability, ROI, financial risk, and investment into a single recommendation instead of comparing crops only by profit.

---

# AI Model Used

- Google Gemini 2.5 Flash

---

# Notes

Prompt engineering focused on:

- Simple English
- Practical recommendations
- Structured responses
- Concise outputs
- Farmer-friendly language