function Badge({
  children,
  className = "",
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-green-100 border border-green-200 px-5 py-2 text-sm font-semibold text-green-700 ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;