import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function HealthChart({ farms }) {

    const chartData = farms.map((farm) => ({
    name: farm.created_at
      ? new Date(
          farm.created_at
        ).toLocaleDateString()
      : "Unknown",

    health: farm.health_score
  }));

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.08)",
        flex: 1
      }}
    >
      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        📈 Farm Health Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="health"
            stroke="#008C3A"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HealthChart;