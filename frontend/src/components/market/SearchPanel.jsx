import { useState } from "react";

function SearchPanel({ onAnalyze, loading }) {
  const [crop, setCrop] = useState("Wheat");
  const [location, setLocation] = useState("Dehradun");

  return (
    <div className="-mt-20 relative z-20">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-[32px] border border-gray-200">
        <div className="grid lg:grid-cols-4 gap-8 p-8">
          
          {/* Crop */}
          <div>
            <label className="block text-sm font-semibold text-gray-500 mb-3">
              🌾 Crop
            </label>
            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-lg font-medium focus:ring-4 focus:ring-green-200 focus:border-green-500 outline-none transition"
            >
              <option value="Wheat">Wheat</option>
              <option value="Rice">Rice</option>
              <option value="Maize">Maize</option>
              <option value="Mustard">Mustard</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-500 mb-3">
              📍 Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-lg font-medium focus:ring-4 focus:ring-green-200 focus:border-green-500 outline-none transition"
            >
              <option value="Dehradun">Dehradun</option>
              <option value="Haridwar">Haridwar</option>
              <option value="Roorkee">Roorkee</option>
            </select>
          </div>

          {/* Today's Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-500 mb-3">
              📅 Date
            </label>
            <div className="bg-slate-100 rounded-2xl px-5 py-4 text-lg font-semibold text-gray-700">
              {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Button */}
          <div className="flex items-end">
            <button
              onClick={() => onAnalyze(crop, location)}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-4 rounded-2xl text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-300 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? "⏳ Analyzing..." : "🔍 Analyze Market"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchPanel;