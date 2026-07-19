# 🌾 KrishiSathi AI

An AI-Powered Smart Agriculture Decision Support Platform designed to help farmers make better farming decisions using crop intelligence, market analysis, weather insights, and AI-driven recommendations.

---

# 📌 Project Overview

Agriculture faces several challenges including unpredictable weather conditions, fluctuating market prices, inefficient crop selection, and lack of data-driven decision making.

KrishiSathi aims to address these challenges by providing:

- Crop Health Analysis
- AI-based Recommendations
- Market Intelligence
- Weather Insights
- Profit Estimation
- Agricultural Analytics Dashboard

The system combines Full Stack Development with Artificial Intelligence to build an intelligent farming assistant.

---

# 🚀 Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Google OAuth Login
- Protected Routes

---

## 🌱 AI Crop Recommendation

- AI-powered crop recommendation
- Crop suitability scoring
- Weather-aware recommendations
- Soil compatibility analysis
- Budget-aware suggestions

---

## 🌦 Weather Intelligence

- Real-time weather information
- Temperature
- Humidity
- Wind Speed
- Weather Conditions

---

## 🌾 AI Cultivation Planner

Generate a complete cultivation roadmap including:

- Land Preparation
- Seed Selection
- Irrigation Schedule
- Fertilizer Planning
- Pest Management
- Harvesting Guide
- Storage Tips

Powered by Google Gemini 2.5 Flash.

---

## 📈 Profit Simulator

Compare multiple recommended crops based on:

- Investment
- Revenue
- Profit
- ROI
- Market Demand
- Financial Risk

---

## 🤖 AI Business Advisor

Uses Gemini AI to analyze:

- Highest Profit Crop
- Best ROI
- Lowest Risk
- Budget Friendly Crop
- Final Recommendation

---

## 📊 Farm Management

- Farm Analysis
- Save Farm Records
- Search Farms
- Update Farms
- Delete Farms
- Dashboard Analytics

---

## ☁ Cloud Storage

- MongoDB Atlas
- Persistent Storage
- Cloud Database

---

# 🛠 Technology Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Recharts

## Backend
- FastAPI
- Pydantic
- Uvicorn

## Database
- MongoDB Atlas
- PyMongo

## Development Tools
- Postman
- Git
- GitHub
- VS Code

## AI Technologies
- Google Gemini 2.5 Flash
- Prompt Engineering
- Rule-Based Recommendation Engine
- AI Business Advisor
- AI Cultivation Planner

---

# 🏗 System Architecture

```text
User Input
    ↓
React Frontend
    ↓
FastAPI REST API
    ↓
AI Recommendation Engine
    ↓
MongoDB Atlas
    ↓
Dashboard Analytics
```

---

# 🗄 Database Choice

KrishiSathi uses MongoDB Atlas as its primary database.

MongoDB was selected because agricultural datasets are semi-structured and continuously evolving. New features such as weather intelligence, disease prediction, satellite imagery analysis, and AI-generated insights can be added without requiring rigid schema migrations.

The document-oriented architecture of MongoDB provides flexibility and scalability for future enhancements.

---

# 📂 Database Schema

## Farm Collection Fields

| Field | Type |
|-------|------|
| _id | ObjectId |
| location | String |
| crop | String |
| month | String |
| temperature | Float |
| soil_type | String |
| health_score | Integer |
| confidence | Integer |
| recommendation | String |
| analysis_factors | Array |
| best_market | String |
| market_price | Integer |
| recommended_market | String |
| expected_profit | Integer |
| travel_time | Float |
| fuel_cost | Integer |
| created_at | DateTime |

---

## Schema Diagram

![Schema Diagram](./docs/schema_diagram.png)

---

# 🔌 API Endpoints

## Farm APIs

### Create Farm Analysis
```http
POST /farm/analyze
```

### Get All Farms
```http
GET /farm
```

### Get Single Farm
```http
GET /farm/{farm_id}
```

### Update Farm
```http
PUT /farm/update/{farm_id}
```

### Delete Farm
```http
DELETE /farm/delete/{farm_id}
```

### Search Farms
```http
GET /farm/search?crop=wheat
```
## Authentication APIs

POST /auth/register
POST /auth/login
POST /auth/google
GET /auth/me

## AI APIs

POST /recommend-crops
POST /generate-cultivation-plan
POST /profit-simulation

## Weather API
GET /weather/{city}
---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Shivanshu455/KrishiSathi-AI/tree/main
```

---

## Backend Setup

```bash
cd backend
```

Create:

```text
.env
```

Add:

```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# 🔐 Environment Variables

Create:

```text
backend/.env
```

Required variables:

```env
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

Example file:

```text
backend/.env.example
```

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/krishisathi
GEMINI_API_KEY=your_api_key_here
```

---

# 📈 Week 5 Deliverables

Completed deliverables:

- MongoDB Atlas Integration
- Persistent Cloud Storage
- Full CRUD Operations
- Schema Design
- CRUD Verification
- Dashboard Analytics
- Environment Variable Configuration
- Database Documentation

---

# 🚀 Future Enhancements

- Disease Detection using Computer Vision
- AI Farm Digital Twin
- Seasonal Crop Prediction
- Market Price Forecasting
- Satellite Image Analysis
- Smart Irrigation Recommendation
- AI Chat Assistant
- PDF Report Generation
- Mobile Application
- Interactive Farm Map
- Deployment and Cloud Hosting

# 📷 Screenshots
Coming Soon

- Login Page
- Dashboard
- Crop Recommendation
- Weather Analysis
- AI Cultivation Plan
- Profit Comparison
- AI Business Advisor

---

# 👨‍💻 Author

**Shivanshu**

AI Assisted Full Stack Development Internship Project

Graphic Era University TBI Summer Internship Program 2026

---

# 📄 License

This project is developed for academic and internship purposes.