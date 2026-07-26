function RecentAnalysis({ farms }) {
  const headerStyle = {
    textAlign: "left",
    color: "#6b7280",
    fontWeight: "700",
    fontSize: "15px",
    padding: "12px 18px",
  };

  const cellStyle = {
    padding: "18px",
    fontWeight: "500",
    color: "#374151",
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "32px",
        borderRadius: "22px",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        marginTop: "40px",
        overflowX: "auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "30px",
              color: "#111827",
            }}
          >
            📋 Recent Farm Analyses
          </h2>

          <p
            style={{
              marginTop: "8px",
              color: "#6b7280",
            }}
          >
            Latest AI-generated farm reports
          </p>
        </div>

        <div
          style={{
            background: "#ecfdf5",
            color: "#16a34a",
            padding: "10px 18px",
            borderRadius: "25px",
            fontWeight: "700",
          }}
        >
          {farms.length} Records
        </div>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: "0 12px",
        }}
      >
        <thead>
          <tr>
            <th style={headerStyle}>🌾 Crop</th>
            <th style={headerStyle}>📍 Location</th>
            <th style={headerStyle}>❤️ Health</th>
            <th style={headerStyle}>💰 Profit</th>
            <th style={headerStyle}>🏪 Market</th>
          </tr>
        </thead>

        <tbody>
          {farms
            .slice()
            .reverse()
            .slice(0, 5)
            .map((farm) => (
              <tr
                key={farm._id}
                style={{
                  background: "#f9fafb",
                  transition: "all .3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f9fafb";
                }}
              >
                <td
                  style={{
                    ...cellStyle,
                    borderRadius: "12px 0 0 12px",
                  }}
                >
                  🌾 <strong>{farm.crop}</strong>
                </td>

                <td style={cellStyle}>
                  📍 {farm.location}
                </td>

                <td style={cellStyle}>
                  <span
                    style={{
                      background:
                        farm.health_score >= 80
                          ? "#dcfce7"
                          : farm.health_score >= 60
                          ? "#fef9c3"
                          : "#fee2e2",

                      color:
                        farm.health_score >= 80
                          ? "#15803d"
                          : farm.health_score >= 60
                          ? "#ca8a04"
                          : "#dc2626",

                      padding: "8px 14px",
                      borderRadius: "20px",
                      fontWeight: "700",
                      display: "inline-block",
                      minWidth: "65px",
                      textAlign: "center",
                    }}
                  >
                    {farm.health_score}%
                  </span>
                </td>

                <td style={cellStyle}>
                  💰 ₹{farm.expected_profit}
                </td>

                <td
                  style={{
                    ...cellStyle,
                    borderRadius: "0 12px 12px 0",
                  }}
                >
                  🏪 {farm.recommended_market}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {farms.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            color: "#6b7280",
          }}
        >
          🌱 No farm analyses available yet.
        </div>
      )}
    </div>
  );
}

export default RecentAnalysis;