import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await loginUser(formData);

    if (result.access_token) {
      localStorage.setItem(
        "token",
        result.access_token
      );

      alert("Login Successful!");

      navigate("/dashboard");
    } else {
      alert(result.detail);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/auth/google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            token: credentialResponse.credential
          })
        }
      );

      const result = await response.json();

      if (result.access_token) {
        localStorage.setItem(
          "token",
          result.access_token
        );

        alert("Google Login Successful!");

        navigate("/dashboard");
      } else {
        alert(result.detail || "Google Login Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Google Login Failed");
    }
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "80px auto",
        background: "white",
        padding: "35px",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0b8f3d"
        }}
      >
        Login
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          Login
        </button>
      </form>

      <div
        style={{
          margin: "25px 0",
          textAlign: "center",
          color: "#666"
        }}
      >
        <hr />
        <p
          style={{
            margin: "15px 0"
          }}
        >
          OR
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => {
            alert("Google Login Failed");
          }}
        />
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  marginTop: "20px",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  background: "#0b8f3d",
  color: "white",
  fontSize: "16px",
  cursor: "pointer"
};

export default Login;