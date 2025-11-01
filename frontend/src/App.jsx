// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DisasterForm from "./pages/DisasterForm";
import DisasterList from "./pages/DisasterList";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Top Navigation Bar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/disaster" element={<DisasterForm />} />
            <Route path="/disaster-list" element={<DisasterList />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>
            © 2025 Disaster-Relief system.  | Empowering Citizens for Change.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
