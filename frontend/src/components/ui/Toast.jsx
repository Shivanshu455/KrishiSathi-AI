function Toast({
  message = "Success",
  type = "success",
}) {
  const bg =
    type === "success"
      ? "#DCFCE7"
      : "#FEE2E2";

  const color =
    type === "success"
      ? "#166534"
      : "#991B1B";

  return (
    <div
      style={{
        position: "fixed",
        top: "25px",
        right: "25px",
        background: bg,
        color: color,
        padding: "14px 20px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,.15)",
        fontWeight: "600",
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
}

export default Toast;