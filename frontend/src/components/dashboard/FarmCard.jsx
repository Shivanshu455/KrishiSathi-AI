import React from "react";

function FarmCard({ farm, onEdit, onDelete }) {
  let healthColor = "#22c55e";
  let healthStatus = "Healthy";

  if (farm.health_score < 70) {
    healthColor = "#f59e0b";
    healthStatus = "Moderate";
  }

  if (farm.health_score < 50) {
    healthColor = "#ef4444";
    healthStatus = "High Risk";
  }

  const metrics = [
    {
      icon: "❤️",
      label: "Health",
      value: `${farm.health_score}%`,
    },
    {
      icon: "🌡️",
      label: "Temperature",
      value: `${farm.temperature}°C`,
    },
    {
      icon: "💰",
      label: "Profit",
      value: `₹${farm.expected_profit}`,
    },
    {
      icon: "🤖",
      label: "Confidence",
      value: `${farm.confidence}%`,
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(145deg,#eefcf4 0%,#dff7ea 100%)",
        borderRadius: "28px",
        padding: "28px",
        border: "1px solid rgba(34,197,94,.18)",
        boxShadow: "0 20px 45px rgba(34,197,94,.12)",
        transition: "all .35s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-8px) scale(1.015)";
        e.currentTarget.style.boxShadow =
          "0 35px 70px rgba(34,197,94,.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow =
          "0 20px 45px rgba(34,197,94,.12)";
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "8px",
          height: "100%",
          background:
            "linear-gradient(180deg,#22c55e,#15803d)",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "36px",
              fontWeight: "800",
              color: "#087443",
            }}
          >
            🌾 {farm.crop}
          </h2>

          <div
            style={{
              marginTop: "8px",
              color: "#64748b",
              fontSize: "16px",
            }}
          >
            📍 {farm.location}
          </div>
        </div>

        <div
          style={{
            background: healthColor + "20",
            color: healthColor,
            padding: "10px 18px",
            borderRadius: "999px",
            fontWeight: "700",
            fontSize: "15px",
          }}
        >
          {healthStatus}
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(135deg,#dcfce7,#f0fdf4)",
          padding: "18px",
          borderRadius: "18px",
          borderLeft: "5px solid #16a34a",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            fontWeight: "700",
            fontSize: "20px",
            color: "#15803d",
            marginBottom: "10px",
          }}
        >
          💡 Today's AI Recommendation
        </div>

        <div
          style={{
            color: "#374151",
            lineHeight: "1.7",
            fontSize: "15px",
          }}
        >
          {farm.recommendation}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "16px",
          marginBottom: "25px",
        }}
      >
        {metrics.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "18px",
              boxShadow:
                "0 8px 18px rgba(0,0,0,.05)",
            }}
          >
            <div
              style={{
                fontSize: "26px",
              }}
            >
              {item.icon}
            </div>

            <div
              style={{
                color: "#64748b",
                fontSize: "14px",
                marginTop: "8px",
              }}
            >
              {item.label}
            </div>

            <div
              style={{
                fontSize: "28px",
                fontWeight: "800",
                marginTop: "5px",
                color: "#111827",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <button
          onClick={onEdit}
          style={{
            flex: 1,
            border: "none",
            borderRadius: "16px",
            padding: "15px",
            background:
              "linear-gradient(135deg,#2563eb,#1d4ed8)",
            color: "#fff",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow:
              "0 10px 20px rgba(37,99,235,.25)",
          }}
        >
          ✏️ Edit Farm
        </button>

        <button
          onClick={onDelete}
          style={{
            flex: 1,
            border: "none",
            borderRadius: "16px",
            padding: "15px",
            background:
              "linear-gradient(135deg,#ef4444,#dc2626)",
            color: "#fff",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow:
              "0 10px 20px rgba(239,68,68,.25)",
          }}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default FarmCard;