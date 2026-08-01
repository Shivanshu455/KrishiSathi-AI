function PageWrapper({
  children,
  className = "",
}) {
  return (
    <main
      className={`min-h-screen bg-white text-gray-900 ${className}`}
    >
      {children}
    </main>
  );
}

export default PageWrapper;