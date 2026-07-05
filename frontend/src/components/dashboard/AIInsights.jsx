function AIInsights({ farms }) {

  const latestFarm =
    farms.length > 0
      ? farms[farms.length - 1]
      : null;

  if (!latestFarm) {
    return (
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.08)"
        }}
      >
        No AI insights available
      </div>
    );
  }

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.08)"
      }}
    >
      <h2
        style={{
          color: "#008C3A",
          marginBottom: "20px"
        }}
      >
        🤖 AI Insights
      </h2>

      {
        latestFarm.analysis_factors?.map(
          (factor, index) => (
            <p key={index}>
              ⚠ {factor}
            </p>
          )
        )
      }

      <hr
        style={{
          margin: "20px 0"
        }}
      />

      <p>
        💡 <strong>Recommendation:</strong>
      </p>

      <p>
        {latestFarm.recommendation}
      </p>

      <p
        style={{
          marginTop: "20px",
          color: "#008C3A",
          fontWeight: "bold"
        }}
      >
        Confidence:
        {" "}
        {latestFarm.confidence}%
      </p>
    </div>
  );
}

export default AIInsights;