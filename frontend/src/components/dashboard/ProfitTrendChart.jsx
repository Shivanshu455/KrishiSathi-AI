import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function ProfitTrendChart({ farms }) {

  const chartData = farms.map((farm) => ({
    date: farm.created_at
      ? new Date(
          farm.created_at
        ).toLocaleDateString()
      : "Unknown",

    profit: farm.expected_profit || 0
  }));

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
      <h2>
        💰 Profit Trend Over Time
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="profit"
            stroke="#f59e0b"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProfitTrendChart;