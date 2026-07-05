function MarketWidget({ farms }) {

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
        No market data available
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
          marginBottom: "20px",
          color: "#008C3A"
        }}
      >
        🏪 Market Intelligence
      </h2>

      <p>
        🌾 <strong>Crop:</strong>
        {" "}
        {latestFarm.crop}
      </p>

      <p>
        📍 <strong>Best Market:</strong>
        {" "}
        {latestFarm.recommended_market}
      </p>

      <p>
        💵 <strong>Market Price:</strong>
        {" "}
        ₹{latestFarm.market_price}
      </p>

      <p>
        💰 <strong>Expected Profit:</strong>
        {" "}
        ₹{latestFarm.expected_profit}
      </p>

      <p>
        🚚 <strong>Travel Time:</strong>
        {" "}
        {latestFarm.travel_time} hrs
      </p>

      <p>
        ⛽ <strong>Fuel Cost:</strong>
        {" "}
        ₹{latestFarm.fuel_cost}
      </p>
    </div>
  );
}

export default MarketWidget;