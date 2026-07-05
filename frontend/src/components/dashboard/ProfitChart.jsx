import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function ProfitChart({ farms }) {

  const chartData = farms.map((farm, index) => ({
    crop: farm.crop,
    profit: farm.expected_profit || 0
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
        💰 Expected Profit by Crop
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="crop" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="profit"
            fill="#22c55e"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProfitChart;