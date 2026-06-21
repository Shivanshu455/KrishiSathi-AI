import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

function Navbar() {

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
          to="/login"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Login
        </Link>

        <Link
          to="/components"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
Components
</Link>


        {/* Week 3 Dark Light Toggle */}

        <ThemeToggle />

      </div>

    </nav>

  )
}

export default Navbar