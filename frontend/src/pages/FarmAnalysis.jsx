import { useEffect, useState } from "react";
import { createFarm } from "../services/api";
import { useNavigate } from "react-router-dom";

import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function FarmAnalysis() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

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
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f4fff6,#eef7ff)"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#008C3A",
          marginBottom: "10px",
          fontSize: "38px"
        }}
      >
        🌱 AI Farm Analysis
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "40px"
        }}
      >
        Smart crop recommendations powered by AI, weather intelligence and market insights.
      </p>

      {showToast && (
        <Toast message="Farm analysis completed successfully!" />
      )}

      {loading && <Loader />}

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >

        {/* LEFT PANEL */}

        <div
          style={{
            width: "420px",
            background: "#fff",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 8px 30px rgba(0,0,0,.08)"
          }}
        >
          <h2
            style={{
              marginBottom: "25px",
              color: "#008C3A"
            }}
          >
            🚜 Farm Details
          </h2>
          
          <p
            style={{
              color: "#777",
              marginTop: "-10px",
              marginBottom: "25px"
            }}
          >
            Fill in your farm information to receive an AI recommendation.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >

            <label>📍 Location</label>

            <input
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd"
              }}
            />

            <label>🌾 Crop</label>

            <select
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd"
              }}
            >
              <option value="">Select Crop</option>
              <option value="Wheat">Wheat</option>
              <option value="Rice">Rice</option>
              <option value="Maize">Maize</option>
              <option value="Potato">Potato</option>
            </select>

            <label>📅 Month</label>

            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd"
              }}
            >
              <option value="">Select Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>

            <label>🌡️ Temperature (°C)</label>

            <input
              type="number"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="Enter temperature"
              required
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd"
              }}
            />

            <label>🌱 Soil Type</label>

            <select
              name="soil_type"
              value={formData.soil_type}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #ddd"
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
                padding: "16px",
                background: "linear-gradient(90deg,#008C3A,#1FAE5B)",
                color: "#fff",
                border: "none",
                borderRadius: "14px",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: "0 5px 18px rgba(0,140,58,.3)"
              }}
            >
              ✨ Analyze with AI
            </button>

          </form>

        </div>

        {/* RIGHT PANEL */}

        <div
          style={{
            flex: 1,
            minWidth: "600px",
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 30px rgba(0,0,0,.08)"
          }}
        >

          {!result ? (

            <div
              style={{
                textAlign: "center",
                padding: "60px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%"
              }}
            >

              <div
                style={{
                  fontSize: "70px"
                }}
              >
                🌾
              </div>

              <h2
                style={{
                  color: "#008C3A"
                }}
              >
                AI Analysis Ready
              </h2>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                  maxWidth: "500px",
                  margin: "20px auto"
                }}
              >
                Enter your farm information to receive AI-powered crop recommendations, health score, confidence analysis, market pricing, expected profit, travel cost, and smart business insights.
              </p>

            </div>

          ) : (

            <>
              <h2
                style={{
                  color: "#008C3A",
                  marginBottom: "20px"
                }}
              >
                🤖 AI Farm Insights
              </h2>

              {/* STEP 1: ANALYSIS COMPLETED BANNER */}
              <div
                style={{
                  background: "linear-gradient(90deg,#008C3A,#1FAE5B)",
                  color: "white",
                  borderRadius: "18px",
                  padding: "20px",
                  marginBottom: "25px"
                }}
              >
                <h2 style={{ margin: 0, fontSize: "22px" }}>
                  ✅ Analysis Completed
                </h2>
                <p style={{ marginTop: "8px", marginBottom: 0, opacity: ".9", lineHeight: "22px" }}>
                  AI successfully analyzed your farm and generated recommendations based on soil, season, temperature and market conditions.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                  gap: "20px",
                  marginBottom: "30px"
                }}
              >

                <div
                  style={{
                    background: "#fff",
                    border: "1px solid #E5E7EB",
                    padding: "22px",
                    borderRadius: "16px",
                    boxShadow: "0 4px 15px rgba(0,0,0,.05)",
                    transition: "0.3s"
                  }}
                >
                  <div style={{ fontSize: "34px" }}>🌾</div>

                  <p
                    style={{
                      marginTop: "10px",
                      color: "#555",
                      marginBottom: "5px"
                    }}
                  >
                    Recommended Crop
                  </p>
                  <h2
                    style={{
                      margin: "0",
                      color: "#008C3A"
                    }}
                  >
                    {result.crop}
                  </h2>
                </div>

                <div
                  style={{
                    background: "#FFF3E0",
                    padding: "22px",
                    borderRadius: "16px"
                  }}
                >
                  <h4>❤️ Health Score</h4>
                  <h2>{result.health_score}</h2>
                </div>

                <div
                  style={{
                    background: "#E3F2FD",
                    padding: "20px",
                    borderRadius: "15px"
                  }}
                >
                  <h4>🤖 AI Confidence</h4>
                  <h2>{result.confidence}%</h2>
                </div>

                <div
                  style={{
                    background: "#F3E5F5",
                    padding: "20px",
                    borderRadius: "15px"
                  }}
                >
                  <h4>💰 Profit</h4>
                  <h2>₹{result.expected_profit}</h2>
                </div>

              </div>

              {/* STEP 2: MARKET INTELLIGENCE GRID */}
              <div
                style={{
                  background: "#fafafa",
                  borderRadius: "15px",
                  padding: "25px",
                  marginBottom: "25px",
                  border: "1px solid #eee"
                }}
              >
                <h3
                  style={{
                    color: "#008C3A",
                    margin: 0
                  }}
                >
                  📈 Market Intelligence
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginTop: "20px"
                  }}
                >
                  <div>
                    <h4 style={{ margin: "0 0 5px 0", color: "#666" }}>🏪 Market</h4>
                    <p style={{ margin: 0, fontWeight: "600", fontSize: "16px", color: "#222" }}>{result.recommended_market}</p>
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 5px 0", color: "#666" }}>💰 Price</h4>
                    <p style={{ margin: 0, fontWeight: "600", fontSize: "16px", color: "#222" }}>₹{result.market_price}/quintal</p>
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 5px 0", color: "#666" }}>🚚 Travel</h4>
                    <p style={{ margin: 0, fontWeight: "600", fontSize: "16px", color: "#222" }}>{result.travel_time} hrs</p>
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 5px 0", color: "#666" }}>⛽ Fuel Cost</h4>
                    <p style={{ margin: 0, fontWeight: "600", fontSize: "16px", color: "#222" }}>₹{result.fuel_cost}</p>
                  </div>
                </div>

              </div>

              {/* STEP 3: AI EXPERT RECOMMENDATION CARD */}
              <div
                style={{
                  background: "#F8FFF5",
                  borderLeft: "6px solid #008C3A",
                  padding: "25px",
                  borderRadius: "15px",
                  marginBottom: "25px"
                }}
              >
                <h3
                  style={{
                    color: "#008C3A",
                    marginTop: 0,
                    marginBottom: "15px"
                  }}
                >
                  🤖 AI Expert Recommendation
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "15px"
                  }}
                >
                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "#008C3A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      color: "white",
                      flexShrink: 0
                    }}
                  >
                    🤖
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "17px", color: "#222" }}>
                      KrishiSathi AI
                    </h3>
                    <p style={{ margin: 0, color: "#777", fontSize: "13px" }}>
                      Agricultural Recommendation Engine
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    lineHeight: "28px",
                    color: "#333",
                    fontSize: "16px"
                  }}
                >
                  <div>
                    <strong>🌱 Overall Health:</strong><br />
                    {result.overall_health}
                  </div>

                  <div>
                    <strong>⚠️ Risk Level:</strong><br />
                    {result.risk_level}
                  </div>

                  <div>
                    <strong>💧 Irrigation Advice:</strong><br />
                    {result.irrigation}
                  </div>

                  <div>
                    <strong>🌿 Fertilizer Recommendation:</strong><br />
                    {result.fertilizer}
                  </div>

                  <div>
                    <strong>🐛 Pest Control:</strong><br />
                    {result.pest_control}
                  </div>

                  <div
                    style={{
                      background: "#F8FFF6",
                      border: "1px solid #B7E4C7",
                      borderLeft: "5px solid #2E7D32",
                      borderRadius: "12px",
                      padding: "18px",
                      border: "1px solid #d9f2dc"
                    }}
                  >
                    <strong>🤖 Gemini AI Summary</strong>

                    <p
                      style={{
                        marginTop: "10px",
                        color: "#555",
                        lineHeight: "28px"
                      }}
                    >
                      {result.summary}
                    </p>
                  </div>
                </div>

              </div>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap"
                }}
              >

                <button
                  onClick={() => navigate("/cultivation")}
                  style={{
                    flex: 1,
                    minWidth: "220px",
                    padding: "16px",
                    background: "#008C3A",
                    color: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: "600"
                  }}
                >
                  🌱 Generate Cultivation Plan
                </button>

                <button
                  onClick={() => navigate("/business-advisor")}
                  style={{
                    flex: 1,
                    minWidth: "220px",
                    padding: "16px",
                    background: "#1565C0",
                    color: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: "600"
                  }}
                >
                  💹 View Business Insights
                </button>

              </div>
            </>

          )}

        </div>

      </div>

      {/* STEP 4: POWERED BY FOOTER */}
      <div
        style={{
          marginTop: "50px",
          paddingTop: "20px",
          borderTop: "1px solid #e0e0e0",
          textAlign: "center",
          color: "#777",
          fontSize: "14px"
        }}
      >
        Powered by <strong>Gemini AI • Weather API • Market Analytics</strong>
      </div>

    </div>
  );
}

export default FarmAnalysis;