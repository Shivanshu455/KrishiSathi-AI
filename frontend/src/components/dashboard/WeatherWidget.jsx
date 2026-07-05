function WeatherWidget({ farms }) {
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
        No weather data available
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
        🌦 Current Weather
      </h2>

      <p>
        📍 <strong>Location:</strong>{" "}
        {latestFarm.location}
      </p>

      <p>
        🌡 <strong>Temperature:</strong>{" "}
        {latestFarm.temperature}°C
      </p>

      <p>
        💧 <strong>Humidity:</strong>{" "}
        {latestFarm.humidity ?? "N/A"}%
      </p>

      <p>
        🌬 <strong>Wind Speed:</strong>{" "}
        {latestFarm.wind_speed ?? "N/A"} km/h
      </p>
    </div>
  );
}

export default WeatherWidget;