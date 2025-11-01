import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-teal-500 via-purple-600 to-indigo-600 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-xl p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-6">Relief Dashboard</h1>
          <nav className="space-y-4">
            <a href="/profile" className="block hover:text-teal-200">
              👤 Profile
            </a>
            <a href="/disaster" className="block hover:text-teal-200">
              🆘 Submit Request
            </a>
            <a href="/disaster-list" className="block hover:text-teal-200">
              📋 View Requests
            </a>
          </nav>
        </div>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="bg-white/20 p-2 rounded-lg hover:bg-white/30"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10">
        <h2 className="text-4xl font-bold mb-8">Welcome to the Relief Portal</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-2">Total Requests</h3>
            <p className="text-3xl font-bold">42</p>
          </div>
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-2">Pending Approvals</h3>
            <p className="text-3xl font-bold">7</p>
          </div>
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-2">Completed</h3>
            <p className="text-3xl font-bold">35</p>
          </div>
        </div>
      </div>
    </div>
  );
}
