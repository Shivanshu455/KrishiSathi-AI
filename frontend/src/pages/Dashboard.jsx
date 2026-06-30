import { useEffect, useState } from "react";
import { getAllFarms } from "../services/api";

function Dashboard() {
  const [farms, setFarms] = useState([]);

  const totalFarms = farms.length;

  const averageHealth =
    farms.length > 0
      ? Math.round(
          farms.reduce(
            (sum, farm) => sum + farm.health_score,
            0
          ) / farms.length
        )
      : 0;

  const averageTemp =
    farms.length > 0
      ? Math.round(
          farms.reduce(
            (sum, farm) => sum + farm.temperature,
            0
          ) / farms.length
        )
      : 0;

  const highRisk =
    farms.filter(
      (farm) => farm.health_score < 70
    ).length;

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const data = await getAllFarms();
        setFarms(data);
      } catch (error) {
        console.error(
          "Error fetching farms:",
          error
        );
      }
    };

    fetchFarms();
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "80vh"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#008C3A",
          marginBottom: "40px"
        }}
      >
        KrishiSathi Dashboard
      </h1>

      {/* Statistics Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px"
        }}
      >
        <div
          style={{
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0px 5px 20px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <h2>{totalFarms}</h2>
          <p>Total Farms</p>
        </div>

        <div
          style={{
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0px 5px 20px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <h2>{averageHealth}</h2>
          <p>Average Health</p>
        </div>

        <div
          style={{
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0px 5px 20px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <h2>{averageTemp}°C</h2>
          <p>Average Temperature</p>
        </div>

        <div
          style={{
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0px 5px 20px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <h2>{highRisk}</h2>
          <p>High Risk Farms</p>
        </div>
      </div>

      {/* Farm Cards */}

      {farms.length === 0 ? (
        <p>No farm data available</p>
      ) : (
        farms.map((farm) => {
          let healthColor = "green";
          let healthStatus = "Healthy";

          if (farm.health_score < 70) {
            healthColor = "orange";
            healthStatus = "Moderate Risk";
          }

          if (farm.health_score < 50) {
            healthColor = "red";
            healthStatus = "High Risk";
          }

          return (
            <div
              key={farm.id}
              style={{
                padding: "25px",
                marginBottom: "20px",
                borderRadius: "15px",
                boxShadow:
                  "0px 5px 20px rgba(0,0,0,0.1)"
              }}
            >
              <h2
                style={{
                  color: "#008C3A"
                }}
              >
                🌾 {farm.crop}
              </h2>

              <p>
                📍 <strong>Location:</strong>{" "}
                {farm.location}
              </p>

              <p>
                🌡 <strong>Temperature:</strong>{" "}
                {farm.temperature}°C
              </p>

              <p
                style={{
                  color: healthColor,
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                ❤️ Health Score:
                {" "}
                {farm.health_score}
                {" "}
                ({healthStatus})
              </p>

              <p>
  🤖 <strong>AI Confidence:</strong>
  {" "}
  {farm.confidence}%
</p>

<p>
  💡 <strong>Recommendation:</strong>
  {" "}
  {farm.recommendation}
</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Dashboard;