function About() {
  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "1200px",
        margin: "auto"
      }}
    >
      <h1
        style={{
          color: "#008C3A",
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        🌾 About KrishiSathi
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          marginBottom: "50px",
          color: "#555"
        }}
      >
        AI-Powered Smart Crop Advisory and Agricultural
        Decision Support Platform
      </p>

      {/* Mission */}

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: "30px"
        }}
      >
        <h2 style={{ color: "#008C3A" }}>
          🎯 Our Mission
        </h2>

        <p>
          KrishiSathi aims to empower farmers using
          Artificial Intelligence, weather intelligence,
          market insights, and logistics optimization to
          improve crop productivity and maximize profits.
        </p>
      </div>


      {/* Features */}

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: "30px"
        }}
      >
        <h2 style={{ color: "#008C3A" }}>
          🚀 Core Features
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>🌦 Weather Intelligence</li>
          <li>🌾 Crop Health Analysis</li>
          <li>💰 Market Intelligence</li>
          <li>🚚 Logistics Optimization</li>
          <li>🤖 Explainable AI Recommendations</li>
          <li>📊 Analytics Dashboard</li>
          <li>☁ MongoDB Cloud Storage</li>
        </ul>
      </div>


      {/* Tech Stack */}

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          marginBottom: "30px"
        }}
      >
        <h2 style={{ color: "#008C3A" }}>
          🛠 Technology Stack
        </h2>

        <ul style={{ lineHeight: "2" }}>
          <li>Frontend: React + Vite</li>
          <li>Backend: FastAPI</li>
          <li>Database: MongoDB Atlas</li>
          <li>Charts: Recharts</li>
          <li>Weather API: Open-Meteo</li>
          <li>Geocoding: OpenStreetMap Nominatim</li>
        </ul>
      </div>


      {/* Vision */}

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          borderLeft: "6px solid #008C3A",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
        }}
      >
        <h2 style={{ color: "#008C3A" }}>
          🔮 Future Vision
        </h2>

        <p>
          Future versions of KrishiSathi will include
          real-time satellite monitoring, AI-powered
          chatbot assistance, predictive crop disease
          detection, and personalized farmer dashboards
          using Generative AI.
        </p>
      </div>
    </div>
  );
}

export default About;