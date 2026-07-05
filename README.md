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

## Current Features

### 🌱 Farm Analysis
- Crop selection analysis
- Temperature-based health assessment
- Soil suitability analysis
- Season compatibility analysis

### 🤖 AI Recommendation Engine
- Crop health score generation
- Confidence score generation
- Intelligent recommendations
- Analysis factor generation

### 📊 Analytics Dashboard
- Total Farms Monitoring
- Healthy Farm Detection
- High Risk Farm Identification
- Average Temperature Tracking
- Average Health Monitoring
- Profit Analytics
- Health Trend Visualization
- Profit Trend Visualization

### 💰 Market Intelligence
- Market price estimation
- Recommended market selection
- Expected profit calculation
- Travel cost estimation
- Fuel cost estimation

### 🌦 Weather Intelligence
- Temperature monitoring
- Humidity monitoring
- Wind speed monitoring
- Environmental condition analysis

### ☁ Cloud Database
- MongoDB Atlas integration
- Persistent storage
- Real-time retrieval
- Cloud-hosted data management

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
- Rule-Based Recommendation Engine
- Gemini AI Integration (Planned)

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

# 🔮 Future Roadmap

## Week 6
- Gemini AI Integration
- Explainable AI Responses

## Week 7
- Historical Trend Analytics
- Smart Alert System

## Week 8
- User Authentication
- Personalized Dashboards

## Week 9
- Interactive Farm Map
- Deployment and Cloud Hosting

---

# 👨‍💻 Author

**Shivanshu**

AI Assisted Full Stack Development Internship Project

Graphic Era University TBI Summer Internship Program 2026

---

# 📄 License

This project is developed for academic and internship purposes.