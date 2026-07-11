import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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

    const result = await registerUser(formData);

    alert(result.message || result.detail);

    if (result.message) {
      navigate("/login");
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
        Register
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={inputStyle}
        />

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
          Register
        </button>

      </form>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd"
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

export default Register;