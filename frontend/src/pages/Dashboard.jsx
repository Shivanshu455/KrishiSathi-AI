import { useEffect, useState } from "react";
import { getAllFarms } from "../services/api";

import StatCard from "../components/dashboard/StatCard";
import HealthChart from "../components/dashboard/HealthChart";
import ProfitChart from "../components/dashboard/ProfitChart";
import MarketWidget from "../components/dashboard/MarketWidget";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import AIInsights from "../components/dashboard/AIInsights";
import RecentAnalysis from "../components/dashboard/RecentAnalysis";
import ProfitTrendChart from "../components/dashboard/ProfitTrendChart";
function Dashboard() {

  const [farms, setFarms] = useState([]);

  const totalFarms = farms.length;

  const averageHealth =
    farms.length > 0
      ? Math.round(
          farms.reduce(
            (sum, farm) =>
              sum + farm.health_score,
            0
          ) / farms.length
        )
      : 0;

  const averageTemp =
    farms.length > 0
      ? Math.round(
          farms.reduce(
            (sum, farm) =>
              sum + farm.temperature,
            0
          ) / farms.length
        )
      : 0;

  const highRisk =
    farms.filter(
      farm => farm.health_score < 70
    ).length;

  const healthyFarms =
    farms.filter(
      farm => farm.health_score >= 85
    ).length;

  const totalProfit =
    farms.reduce(
      (sum, farm) =>
        sum + (farm.expected_profit || 0),
      0
    );

  useEffect(() => {

    const fetchFarms = async () => {

      try {

        const data =
          await getAllFarms();

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
        minHeight: "100vh",
        background: "#f4f7f9"
      }}
    >

      <h1
        style={{
          fontSize: "48px",
          color: "#008C3A",
          marginBottom: "40px",
          textAlign: "center",
          fontWeight: "700"
        }}
      >
        🌾 KrishiSathi Dashboard
      </h1>

      {/* KPI Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px"
        }}
      >

        <StatCard
          title="Total Farms"
          value={totalFarms}
          icon="🌾"
          color="#008C3A"
        />

        <StatCard
          title="Healthy Farms"
          value={healthyFarms}
          icon="💚"
          color="#22c55e"
        />

        <StatCard
          title="High Risk Farms"
          value={highRisk}
          icon="⚠️"
          color="#ef4444"
        />

        <StatCard
          title="Average Health"
          value={`${averageHealth}%`}
          icon="📈"
          color="#3b82f6"
        />

        <StatCard
          title="Expected Profit"
          value={`₹${totalProfit}`}
          icon="💰"
          color="#f59e0b"
        />

        <StatCard
          title="Average Temp"
          value={`${averageTemp}°C`}
          icon="🌡️"
          color="#8b5cf6"
        />

      </div>

      {/* Charts */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "20px",
          marginBottom: "40px"
        }}
      >

        <HealthChart farms={farms} />

        <ProfitTrendChart farms={farms} />

      </div>

      {/* Recent Analysis Table */}

  <RecentAnalysis farms={farms} />


  {/* Existing Farm Cards */}

  {
    farms.length === 0 ? (
      <p>No farm data available</p>
    ) : (
      farms.map((farm) => (
        <div
          key={farm._id}
          style={{
            padding: "25px",
            marginTop: "20px",
            borderRadius: "20px",
            background: "white",
            boxShadow:
              "0 4px 20px rgba(0,0,0,0.08)"
          }}
        >
          ...
        </div>
      ))
    )
  }

      {/* Intelligence Widgets */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "20px",
          marginBottom: "40px"
        }}
      >

        <MarketWidget farms={farms} />

        <WeatherWidget farms={farms} />

      </div>

      {/* AI Insights */}

      <div
        style={{
          marginBottom: "40px"
        }}
      >

        <AIInsights farms={farms} />

      </div>

      {/* Farm Cards */}

      {farms.length === 0 ? (

        <div
          style={{
            textAlign: "center",
            padding: "50px",
            background: "white",
            borderRadius: "20px",
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.08)"
          }}
        >
          <h2>
            No farm data available
          </h2>
        </div>

      ) : (

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(380px,1fr))",
            gap: "25px"
          }}
        >

          {farms.map((farm) => {

            let healthColor = "#22c55e";
            let healthStatus = "Healthy";

            if (farm.health_score < 70) {

              healthColor = "#f59e0b";
              healthStatus =
                "Moderate Risk";

            }

            if (farm.health_score < 50) {

              healthColor = "#ef4444";
              healthStatus =
                "High Risk";

            }

            return (

              <div
                key={farm._id}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow:
                    "0 5px 20px rgba(0,0,0,0.08)"
                }}
              >

                <h2
                  style={{
                    color: "#008C3A",
                    marginBottom: "20px"
                  }}
                >
                  🌾 {farm.crop}
                </h2>

                <p>
                  📍 <strong>Location:</strong>
                  {" "}
                  {farm.location}
                </p>

                <p>
                  🌡️ <strong>Temperature:</strong>
                  {" "}
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

                <hr
                  style={{
                    margin: "20px 0"
                  }}
                />

                <p>
                  🏪 <strong>Market Price:</strong>
                  {" "}
                  ₹{farm.market_price}
                </p>

                <p>
                  📍 <strong>Recommended Market:</strong>
                  {" "}
                  {farm.recommended_market}
                </p>
                
                <p>
                  🤖 <strong>AI Advice:</strong>
                  {" "}
                  {farm.ai_explanation}
                </p>

                <p>
                  💰 <strong>Expected Profit:</strong>
                  {" "}
                  ₹{farm.expected_profit}
                </p>

                <p>
                  🚚 <strong>Travel Time:</strong>
                  {" "}
                  {farm.travel_time} hrs
                </p>

                <p>
                  ⛽ <strong>Fuel Cost:</strong>
                  {" "}
                  ₹{farm.fuel_cost}
                </p>

                <hr
                  style={{
                    margin: "20px 0"
                  }}
                />

                <p>
                  💡 <strong>Recommendation:</strong>
                  {" "}
                  {farm.recommendation}
                </p>

              </div>

            );

          })}

        </div>

      )}

    </div>

  );

}

export default Dashboard;