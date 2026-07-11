import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav
      style={{
        background: "#008C3A",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      {/* Logo */}

      <h1
        style={{
          color: "white",
          fontSize: "2rem"
        }}
      >
        KrishiSathi 🌾
      </h1>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}
      >

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          About
        </Link>

        {isLoggedIn && (
          <>
            <Link
              to="/dashboard"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              Dashboard
            </Link>

            <Link
              to="/analysis"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              Farm Analysis
            </Link>
          </>
        )}

        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            style={{
              background: "#ffffff",
              color: "#008C3A",
              border: "none",
              padding: "8px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Logout
          </button>
        )}

        <ThemeToggle />

      </div>

    </nav>

  );

}

export default Navbar;