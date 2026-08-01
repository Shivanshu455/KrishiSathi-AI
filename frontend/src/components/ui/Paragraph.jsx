function Paragraph({
  children,
  className = "",
}) {
  return (
    <p
      className={`text-lg leading-8 text-gray-600 ${className}`}
    >
      {children}
    </p>
  );
}

export default Paragraph;