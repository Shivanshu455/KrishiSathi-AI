import "./AIInsights.css";

function AIInsights({ farms }) {
  const latestFarm =
    farms.length > 0
      ? farms[farms.length - 1]
      : null;

  if (!latestFarm) {
    return (
      <div className="ai-card">
        <h2>🤖 AI Crop Intelligence</h2>
        <p>No AI recommendations available.</p>
      </div>
    );
  }

  return (
    <div className="ai-card">

      {/* Header */}

      <div className="ai-header">

        <div>
          <h2>🤖 AI Crop Intelligence</h2>
          <p>Powered by Gemini AI</p>
        </div>

        <div className="confidence-circle">
          <span>{latestFarm.confidence}%</span>
          <small>Confidence</small>
        </div>

      </div>

      {/* Recommendation */}

      <div className="recommendation-card">

        <h3>💡 Today's AI Recommendation</h3>

        <p>
          {latestFarm.summary || latestFarm.recommendation}
        </p>

      </div>

      {/* Quick Snapshot */}

      <div className="snapshot-grid">

        <div className="snapshot-card">
          <span>🌾 Crop</span>
          <h3>{latestFarm.crop}</h3>
        </div>

        <div className="snapshot-card">
          <span>📍 Location</span>
          <h3>{latestFarm.location}</h3>
        </div>

        <div className="snapshot-card">
          <span>❤️ Health</span>
          <h3>{latestFarm.health_score}%</h3>
        </div>

        <div className="snapshot-card">
          <span>💰 Profit</span>
          <h3>₹{latestFarm.expected_profit}</h3>
        </div>

      </div>

      <button className="analysis-btn">
        🚀 View Complete Farm Analysis
      </button>

    </div>
  );
}

export default AIInsights;