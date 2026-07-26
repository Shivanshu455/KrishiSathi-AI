function MarketWidget({ farms }) {
  const latestFarm =
    farms.length > 0 ? farms[farms.length - 1] : null;

  if (!latestFarm) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "22px",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          textAlign: "center",
          color: "#6b7280",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>
          🏪 Market Intelligence
        </h2>

        <p>No market data available.</p>
      </div>
    );
  }

  const infoCard = {
    background: "#f8fafc",
    padding: "16px",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    border: "1px solid #e5e7eb",
  };

  const label = {
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const value = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#111827",
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "22px",
        boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        transition: ".3s",
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
              color: "#008C3A",
            }}
          >
            🏪 Market Intelligence
          </h2>

          <p
            style={{
              marginTop: "6px",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Best selling opportunity
          </p>
        </div>

        <span
          style={{
            background: "#dcfce7",
            color: "#15803d",
            padding: "8px 14px",
            borderRadius: "20px",
            fontWeight: "700",
          }}
        >
            Live
        </span>
      </div>

      {/* Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        <div style={infoCard}>
          <span style={label}>🌾 Crop</span>
          <span style={value}>{latestFarm.crop}</span>
        </div>

        <div style={infoCard}>
          <span style={label}>📍 Best Market</span>
          <span style={value}>
            {latestFarm.recommended_market}
          </span>
        </div>

        <div style={infoCard}>
          <span style={label}>💵 Market Price</span>
          <span style={value}>
            ₹{latestFarm.market_price}
          </span>
        </div>

        <div style={infoCard}>
          <span style={label}>💰 Expected Profit</span>
          <span
            style={{
              ...value,
              color: "#16a34a",
            }}
          >
            ₹{latestFarm.expected_profit}
          </span>
        </div>

        <div style={infoCard}>
          <span style={label}>🚚 Travel Time</span>
          <span style={value}>
            {latestFarm.travel_time} hrs
          </span>
        </div>

        <div style={infoCard}>
          <span style={label}>⛽ Fuel Cost</span>
          <span style={value}>
            ₹{latestFarm.fuel_cost}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarketWidget;