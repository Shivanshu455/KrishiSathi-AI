import "./AIInsights.css";

function AIInsights({ farms }) {

    const latestFarm =
        farms.length > 0
            ? farms[farms.length - 1]
            : null;

    if (!latestFarm) {
        return (
            <div className="ai-card">
                <h2>No AI Insights Available</h2>
            </div>
        );
    }

    const ai = latestFarm.ai_advice;
      const riskColor =
    ai.risk_level?.toLowerCase().includes("low")
      ? "#2ecc71"
      : ai.risk_level?.toLowerCase().includes("medium")
      ? "#f39c12"
      : "#e74c3c";

  const healthColor =
    ai.overall_health?.toLowerCase().includes("excellent")
      ? "#2ecc71"
      : ai.overall_health?.toLowerCase().includes("good")
      ? "#27ae60"
      : ai.overall_health?.toLowerCase().includes("moderate")
      ? "#f39c12"
      : "#e74c3c";


    return (

        <div className="ai-card">

            <div className="ai-header">

                <div>

                    <h2>🤖 AI Crop Intelligence</h2>

                    <p>Powered by Gemini AI</p>

                </div>

                <span className="confidence">
                    {latestFarm.confidence}%
                </span>

            </div>

            <div className="grid">

                <div className="info-box">

                    <h4>🟢 Overall Health</h4>

                      <p
      style={{
          color: healthColor,
          fontWeight: "bold",
          fontSize: "18px"
      }}
  >
      {ai.overall_health}
  </p>

                </div>

                <div className="info-box">

                    <h4>⚠ Risk Level</h4>

                      <p
      style={{
          color: riskColor,
          fontWeight: "bold",
          fontSize: "18px"
      }}
  >
      {ai.risk_level}
  </p>

                </div>

                <div className="info-box">

                    <h4>💧 Irrigation</h4>

                    <p>{ai.irrigation}</p>

                </div>

                <div className="info-box">

                    <h4>🌱 Fertilizer</h4>

                    <p>{ai.fertilizer}</p>

                </div>

                <div className="info-box">

                    <h4>🐛 Pest Control</h4>

                    <p>{ai.pest_control}</p>

                </div>

            </div>

            <div className="summary">

                <h3>📋 AI Summary</h3>

                <p>{ai.summary}</p>

            </div>

        </div>

    );

}

export default AIInsights;