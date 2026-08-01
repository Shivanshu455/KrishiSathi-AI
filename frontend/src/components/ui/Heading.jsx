function Heading({
  children,
  className = "",
}) {
  return (
    <h2
      className={`text-4xl lg:text-5xl font-extrabold text-gray-900 ${className}`}
    >
      {children}
    </h2>
  );
}

export default Heading;