import React, { useEffect, useState } from "react";
import API from "../api/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { AlertTriangle, Loader2 } from "lucide-react";
import "leaflet/dist/leaflet.css";

function DisasterList() {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const res = await API.get("disaster/list/");
        setDisasters(res.data);
      } catch (error) {
        console.error("Error fetching disasters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDisasters();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
        <AlertTriangle className="text-yellow-300" /> Active Disaster Requests
      </h2>

      {loading ? (
        <div className="flex flex-col items-center justify-center text-white">
          <Loader2 className="animate-spin mb-2" size={28} />
          <p>Loading disaster data...</p>
        </div>
      ) : disasters.length === 0 ? (
        <p className="text-white/90 text-lg font-medium">
          🎉 No active disaster requests right now.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {/* Left side: list */}
          <div className="bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-white/30 overflow-y-auto max-h-[80vh]">
            <ul className="space-y-4">
              {disasters.map((d) => (
                <li
                  key={d.id}
                  className="bg-white/20 rounded-xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {d.disaster_type}
                    </h3>
                    {d.is_urgent && (
                      <span className="px-2 py-1 text-xs font-bold text-red-100 bg-red-500 rounded-full shadow">
                        URGENT
                      </span>
                    )}
                  </div>
                  <p className="text-white/90 text-sm mb-2">{d.description}</p>
                  <p className="text-white/70 text-xs italic">
                    📍 Lat: {d.location_lat.toFixed(4)}, Lng:{" "}
                    {d.location_lng.toFixed(4)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Map */}
          <div className="bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl border border-white/30 overflow-hidden">
            <MapContainer
              center={[
                disasters[0]?.location_lat || 18.5204,
                disasters[0]?.location_lng || 73.8567,
              ]}
              zoom={8}
              scrollWheelZoom={true}
              className="h-[80vh] w-full rounded-2xl"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {disasters.map((d) => (
                <Marker
                  key={d.id}
                  position={[d.location_lat, d.location_lng]}
                >
                  <Popup>
                    <strong>{d.disaster_type}</strong>
                    <br />
                    {d.description}
                    <br />
                    {d.is_urgent && (
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        ⚠ URGENT
                      </span>
                    )}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisasterList;
