import { useState } from "react";
import { createFarm } from "../services/api";

import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function FarmAnalysis() {
  const [formData, setFormData] = useState({
    location: "",
    crop: "",
    month: "",
    temperature: "",
    soil_type: ""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await createFarm({
        ...formData,
        temperature: Number(formData.temperature)
      });

      setResult(response);

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "50px",
        minHeight: "80vh"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#008C3A"
        }}
      >
        AI Farm Analysis
      </h1>

      {showToast && (
        <Toast message="Farm analysis completed successfully!" />
      )}

      {loading && <Loader />}

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <label>Location</label>
        <input
          name="location"
          placeholder="Enter location"
          value={formData.location}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <label>Crop</label>
        <select
          name="crop"
          value={formData.crop}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">Select Crop</option>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
          <option value="Maize">Maize</option>
          <option value="Potato">Potato</option>
        </select>

        <label>Month</label>
        <select
          name="month"
          value={formData.month}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <label>Temperature (°C)</label>
        <input
          name="temperature"
          type="number"
          placeholder="Enter temperature"
          value={formData.temperature}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <label>Soil Type</label>
        <select
          name="soil_type"
          value={formData.soil_type}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">Select Soil Type</option>
          <option value="Loamy">Loamy</option>
          <option value="Clay">Clay</option>
          <option value="Sandy">Sandy</option>
          <option value="Black">Black</option>
        </select>

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#008C3A",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600"
          }}
        >
          Analyze Farm
        </button>
      </form>

      {result && (
        <div
          style={{
            maxWidth: "600px",
            margin: "40px auto",
            padding: "30px",
            borderRadius: "15px",
            background: "white",
            boxShadow: "0px 5px 20px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ color: "#008C3A" }}>
            Analysis Result
          </h2>

          <p>
            🌾 <strong>Crop:</strong> {result.crop}
          </p>

          <p>
            ❤️ <strong>Health Score:</strong> {result.health_score}
          </p>

          <p>
           🤖 <strong>AI Confidence:</strong>
               {" "}
               {result.confidence}%
          </p>

          <p>
            💡 <strong>Recommendation:</strong>
            {" "}
            {result.recommendation}
          </p>
        </div>
      )}
    </div>
  );
}

export default FarmAnalysis;