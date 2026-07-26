import { useEffect, useState } from "react";
import {
  getAllFarms,
  updateFarm,
  deleteFarm,
} from "../services/api";
import { useNavigate } from "react-router-dom";

import HealthChart from "../components/dashboard/HealthChart";
import ProfitChart from "../components/dashboard/ProfitChart";
import MarketWidget from "../components/dashboard/MarketWidget";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import AIInsights from "../components/dashboard/AIInsights";
import ProfitTrendChart from "../components/dashboard/ProfitTrendChart";
import FarmCard from "../components/dashboard/FarmCard";
import Toast from "../components/ui/Toast";
import Loader from "../components/ui/Loader"; 

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingFarm, setEditingFarm] = useState(null);
  const [editForm, setEditForm] = useState({
    location: "",
    crop: "",
    month: "",
    temperature: "",
    soil_type: "",
  });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({
      show: true,
      message,
      type,
    });
  
    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        type: "success",
      });
    }, 3000);
  };

  // ✅ Fix applied: useEffect moved ABOVE the early return
  useEffect(() => {
    const fetchFarms = async () => {
      try {
        setLoading(true);
        const data = await getAllFarms();
        setFarms(data);
      } catch (error) {
        console.error("Error fetching farms:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFarms();
  }, []);

  // ✅ Early return safely happens AFTER all hooks are declared
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    );
  }

  const totalFarms = farms.length;

  const averageHealth =
    farms.length > 0
      ? Math.round(
          farms.reduce(
            (sum, farm) => sum + farm.health_score,
            0
          ) / farms.length
        )
      : 0;

  const averageTemp =
    farms.length > 0
      ? Math.round(
          farms.reduce(
            (sum, farm) => sum + farm.temperature,
            0
          ) / farms.length
        )
      : 0;

  const highRisk = farms.filter(
    (farm) => farm.health_score < 70
  ).length;

  const healthyFarms = farms.filter(
    (farm) => farm.health_score >= 85
  ).length;

  const totalProfit = farms.reduce(
    (sum, farm) => sum + (farm.expected_profit || 0),
    0
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this farm?"
    );

    if (!confirmDelete) return;

    try {
      await deleteFarm(id);

      setFarms((prev) =>
        prev.filter((farm) => farm._id !== id)
      );

      showToast("🗑️ Farm deleted successfully.");
    } catch (error) {
      console.error(error);
      showToast("❌ Failed to delete farm.", "error");
    }
  };

  const handleUpdate = async () => {
    try {
      const updated = await updateFarm(
        editingFarm._id,
        editForm
      );
  
      setFarms((prev) =>
        prev.map((farm) =>
          farm._id === updated._id ? updated : farm
        )
      );
  
      setEditingFarm(null);
  
      showToast("✅ Farm updated successfully.");
  
    } catch (error) {
  
      console.error(error);
  
      showToast("❌ Update failed.", "error");
  
    }
  };

  const kpiData = [
    { title: "Total Farms", value: totalFarms, icon: "🌾", color: "#008C3A", trend: "+2 from last week" },
    { title: "Healthy Farms", value: healthyFarms, icon: "💚", color: "#22c55e", trend: totalFarms > 0 ? `${Math.round((healthyFarms / totalFarms) * 100)}% healthy` : "0% healthy" },
    { title: "High Risk Farms", value: highRisk, icon: "⚠️", color: "#ef4444", trend: "Needs attention" },
    { title: "Average Health", value: `${averageHealth}%`, icon: "📈", color: "#3b82f6", trend: "Excellent" },
    { title: "Expected Profit", value: `₹${totalProfit}`, icon: "💰", color: "#f59e0b", trend: "Steady growth" },
    { title: "Average Temp", value: `${averageTemp}°C`, icon: "🌡️", color: "#8b5cf6", trend: "Optimal" },
  ];

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f4f7f9",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "45px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            color: "#6b7280",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          👋 Welcome Back
        </div>

        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            color: "#0a8f3c",
            margin: "0",
          }}
        >
          🌾 KrishiSathi Dashboard
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginTop: "15px",
            fontSize: "18px",
            maxWidth: "700px",
            marginInline: "auto",
            lineHeight: "1.7",
          }}
        >
          Monitor crop health, AI insights, weather conditions, market
          intelligence and farm performance from one centralized dashboard.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {kpiData.map((kpi, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "28px",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              transition: "all .3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ fontSize: "42px", marginBottom: "15px" }}>
              {kpi.icon}
            </div>
            
            <div
              style={{
                fontSize: "42px",
                fontWeight: "800",
                color: kpi.color,
                lineHeight: "1.2",
              }}
            >
              {kpi.value}
            </div>
            
            <div style={{ fontSize: "16px", fontWeight: "600", color: "#374151", marginTop: "10px" }}>
              {kpi.title}
            </div>
            
            <div style={{ fontSize: "14px", color: "#9ca3af", marginTop: "5px" }}>
              {kpi.trend}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <HealthChart farms={farms} />
        <ProfitTrendChart farms={farms} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <MarketWidget farms={farms} />
        <WeatherWidget farms={farms} />
      </div>

      <div
        style={{
          marginBottom: "55px",
        }}
      >
        <AIInsights farms={farms} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "38px",
              fontWeight: "800",
              color: "#0a8f3c",
            }}
          >
            🌾 Your Farms
          </h2>

          <p
            style={{
              marginTop: "8px",
              color: "#6b7280",
              fontSize: "17px",
            }}
          >
            All AI-generated crop analyses in one place
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg,#22c55e,#16a34a)",
            color: "#fff",
            padding: "14px 24px",
            borderRadius: "999px",
            fontWeight: "700",
            boxShadow: "0 10px 25px rgba(34,197,94,.25)",
          }}
        >
          {farms.length} Farms
        </div>
      </div>

      {farms.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2>No farm data available</h2>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(380px,1fr))",
            gap: "25px",
          }}
        >
          {farms.map((farm) => (
            <FarmCard
              key={farm._id}
              farm={farm}
              onEdit={() => {
                setEditingFarm(farm);
                setEditForm({
                  location: farm.location,
                  crop: farm.crop,
                  month: farm.month,
                  temperature: farm.temperature,
                  soil_type: farm.soil_type,
                });
              }}
              onDelete={() => handleDelete(farm._id)}
            />
          ))}
        </div>
      )}

      {editingFarm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              width: "450px",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Edit Farm</h2>

            <input
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc" }}
              value={editForm.location}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  location: e.target.value,
                })
              }
              placeholder="Location"
            />

            <input
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc" }}
              value={editForm.crop}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  crop: e.target.value,
                })
              }
              placeholder="Crop"
            />

            <input
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc" }}
              value={editForm.month}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  month: e.target.value,
                })
              }
              placeholder="Month"
            />

            <input
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc" }}
              value={editForm.temperature}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  temperature: Number(e.target.value),
                })
              }
              placeholder="Temperature"
            />

            <input
              style={{ width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ccc" }}
              value={editForm.soil_type}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  soil_type: e.target.value,
                })
              }
              placeholder="Soil Type"
            />

            <div
              style={{
                display: "flex",
                gap: "15px",
              }}
            >
              <button
                style={{ flex: 1, padding: "12px", background: "#0a8f3c", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
                onClick={handleUpdate}
              >
                Save
              </button>

              <button
                style={{ flex: 1, padding: "12px", background: "#6b7280", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
                onClick={() =>
                  setEditingFarm(null)
                }
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
        />
      )}
    </div>
  );
}

export default Dashboard;