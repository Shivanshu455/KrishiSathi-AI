function Stack({
  children,
  spacing = "md",
  className = "",
}) {
  const spacingMap = {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
    "2xl": "gap-16",
  };

  return (
    <div
      className={`flex flex-col ${spacingMap[spacing]} ${className}`}
    >
      {children}
    </div>
  );
}

export default Stack;