function StatCard({
  title,
  value,
  icon,
  color
}) {

  return (
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.08)",
        minWidth: "220px",
        flex: 1
      }}
    >
      <div
        style={{
          fontSize: "40px",
          marginBottom: "15px"
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          color: "#666",
          marginBottom: "10px"
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color: color,
          fontSize: "38px"
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;