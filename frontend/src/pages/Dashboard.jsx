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
import StatCard from "../components/dashboard/StatCard";
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

      <div className="mb-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {kpiData.map((kpi, index) => (
          <StatCard
            key={index}
            icon={kpi.icon}
            title={kpi.title}
            value={kpi.value}
            trend={kpi.trend}
            color={
              index === 0
                ? "from-green-500 to-green-600"
                : index === 1
                ? "from-emerald-500 to-green-500"
                : index === 2
                ? "from-red-500 to-red-600"
                : index === 3
                ? "from-blue-500 to-indigo-600"
                : index === 4
                ? "from-yellow-500 to-orange-500"
                : "from-purple-500 to-violet-600"
            }
          />
        ))}
      </div>

      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg transition hover:shadow-xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">📈 Farm Health Trend</h2>
              <p className="mt-1 text-gray-500">Last 7 Days Performance</p>
            </div>
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Live
            </span>
          </div>
          <HealthChart farms={farms} />
        </div>
        <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg transition hover:shadow-xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">💰 Profit Trend</h2>
              <p className="mt-1 text-gray-500">Revenue Analytics</p>
            </div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Updated
            </span>
          </div>
          <ProfitTrendChart farms={farms} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Market Intelligence */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="px-8 py-6 border-b border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  📊 Market Intelligence
                </h2>
                <p className="text-gray-500 mt-2">
                  Best selling opportunity
                </p>
              </div>
              <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
                Live
              </span>
            </div>
          </div>
          <div className="p-8">
            <MarketWidget farms={farms} />
          </div>
        </div>

        {/* Weather */}
        <div className="bg-white rounded-3xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="px-8 py-6 border-b border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  🌤 Current Weather
                </h2>
                <p className="text-gray-500 mt-2">
                  Live weather conditions
                </p>
              </div>
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
                Live API
              </span>
            </div>
          </div>
          <div className="p-8">
            <WeatherWidget farms={farms} />
          </div>
        </div>
      </div>

      <div className="mb-14">
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-green-100
            shadow-lg
            overflow-hidden
          "
        >
          <div className="flex items-center justify-between px-8 py-7 border-b border-green-100">
            <div>
              <h2 className="text-4xl font-bold">
                🤖 AI Crop Intelligence
              </h2>
              <p className="text-gray-500 mt-2">
                Powered by Gemini AI
              </p>
            </div>
            <div
              className="
                h-24
                w-24
                rounded-full
                bg-gradient-to-br
                from-green-500
                to-green-600
                text-white
                flex
                flex-col
                items-center
                justify-center
                shadow-xl
              "
            >
              <span className="text-2xl font-bold">
                96%
              </span>
              <span className="text-xs">
                Confidence
              </span>
            </div>
          </div>
          <div className="p-8">
            <AIInsights farms={farms} />
          </div>
        </div>
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
        <div className="rounded-[36px] border border-dashed border-green-200 bg-white py-20 shadow-lg">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-100 text-6xl">
              🌱
            </div>
            <h2 className="mt-8 text-4xl font-black text-gray-900">
              No Farms Yet
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-gray-600">
              Start your smart farming journey by creating your first farm analysis.
              KrishiSathi AI will generate crop recommendations, weather insights, market intelligence and profitability reports.
            </p>
            <button
              onClick={() => navigate("/analysis")}
              className="mt-10 rounded-2xl bg-green-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-green-700"
            >
              🚀 Analyze My First Farm
            </button>
          </div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
          <div className="w-full max-w-2xl overflow-hidden rounded-[36px] bg-white shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[4px]">
                    Farm Management
                  </p>
                  <h2 className="mt-3 text-4xl font-black">
                    🌾 Edit Farm
                  </h2>
                  <p className="mt-3 text-green-100">
                    Update your farm information.
                  </p>
                </div>
                <button
                  onClick={() => setEditingFarm(null)}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl transition hover:bg-red-500"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6 p-8">
              <div>
                <label className="mb-2 block font-semibold">
                  📍 Location
                </label>
                <input
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-600"
                  value={editForm.location}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      location: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold">
                  🌾 Crop
                </label>
                <input
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-600"
                  value={editForm.crop}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      crop: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold">
                    📅 Month
                  </label>
                  <input
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-600"
                    value={editForm.month}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        month: e.target.value,
                      })
                    }
                />
                </div>
                <div>
                  <label className="mb-2 block font-semibold">
                    🌡 Temperature
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-600"
                    value={editForm.temperature}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        temperature: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-semibold">
                  🌱 Soil Type
                </label>
                <input
                  className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-green-600"
                  value={editForm.soil_type}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      soil_type: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Footer */}
            <div className="border-t bg-gray-50 p-6">
              <div className="flex gap-5">
                <button
                  onClick={() => setEditingFarm(null)}
                  className="flex-1 rounded-2xl border border-gray-300 py-4 font-semibold transition hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="flex-1 rounded-2xl bg-green-600 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700"
                >
                  💾 Save Changes
                </button>
              </div>
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