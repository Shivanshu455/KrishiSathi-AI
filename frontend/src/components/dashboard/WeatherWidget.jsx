import { useEffect, useState } from "react";
import { getWeather } from "../../services/api";

function WeatherWidget({ farms }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const latestFarm =
    farms.length > 0 ? farms[farms.length - 1] : null;
  console.log("Latest Farm:", latestFarm);

  useEffect(() => {
    if (!latestFarm?.location) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getWeather(latestFarm.location);

        console.log("Live Weather:", data);

        setWeather(data);

      } catch (err) {
        console.error("Weather API Error:", err);
        setError("Unable to fetch live weather.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

  }, [latestFarm]);

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
          🌤 Current Weather
        </h2>

        <p>No weather data available.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "22px",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          textAlign: "center",
        }}
      >
        <h2>🌤 Current Weather</h2>
        <p>Fetching live weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "22px",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          textAlign: "center",
          color: "red",
        }}
      >
        <h2>🌤 Current Weather</h2>
        <p>{error}</p>
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
    letterSpacing: ".5px",
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
            🌤 Current Weather
          </h2>

          <p
            style={{
              marginTop: "6px",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Live weather conditions
          </p>
        </div>

        <span
          style={{
            background: "#dbeafe",
            color: "#2563eb",
            padding: "8px 14px",
            borderRadius: "20px",
            fontWeight: "700",
          }}
        >
          {weather ? "Live API" : "Stored"}
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
          <span style={label}>📍 Location</span>
          <span style={value}>
            {latestFarm.location}
          </span>
        </div>

        <div style={infoCard}>
          <span style={label}>🌡 Temperature</span>
          <span style={value}>
            {weather?.temperature ?? latestFarm.temperature}°C
          </span>
        </div>

        <div style={infoCard}>
          <span style={label}>💧 Humidity</span>
          <span style={value}>
            {weather?.humidity ?? latestFarm.humidity}%
          </span>
        </div>

        <div style={infoCard}>
          <span style={label}>💨 Wind Speed</span>
          <span style={value}>
            {weather?.wind_speed ?? latestFarm.wind_speed} km/h
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;