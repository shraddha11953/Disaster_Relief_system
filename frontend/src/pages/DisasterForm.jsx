import React, { useState, useEffect } from "react";
import API from "../api/api";
import { AlertTriangle, MapPin, Send } from "lucide-react";

function DisasterForm() {
  const [disasterType, setDisasterType] = useState("Flood");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [message, setMessage] = useState("");

  // 🌍 Get user geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("disaster/create/", {
        disaster_type: disasterType,
        description,
        location_lat: location.lat,
        location_lng: location.lng,
        is_urgent: isUrgent,
      });
      setMessage("✅ Request submitted successfully!");
      setDescription("");
      setIsUrgent(false);
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to submit request.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 via-purple-500 to-indigo-600 p-6">
      <div className="bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-white/30">
        <h2 className="text-2xl font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
          <AlertTriangle className="text-yellow-300" /> Disaster Help Request
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white font-semibold mb-2">
              Disaster Type:
            </label>
            <select
              value={disasterType}
              onChange={(e) => setDisasterType(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <option value="Flood">Flood</option>
              <option value="Earthquake">Earthquake</option>
              <option value="Storm">Storm</option>
              <option value="Fire">Fire</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Description:
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="3"
              placeholder="Describe the situation..."
              className="w-full px-3 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-300"
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
              className="w-5 h-5 text-teal-400 border-gray-300 rounded focus:ring-teal-400"
            />
            <label className="text-white font-medium">Mark as Urgent</label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg"
          >
            <Send size={18} /> Submit Request
          </button>
        </form>

        {location.lat && location.lng && (
          <p className="mt-4 text-center text-white/90 text-sm flex items-center justify-center gap-1">
            <MapPin className="text-red-300" size={16} />
            Detected Location:{" "}
            <span className="font-semibold">
              {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            </span>
          </p>
        )}

        {message && (
          <p className="mt-4 text-center text-white font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
}

export default DisasterForm;
