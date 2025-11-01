import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // SimpleJWT expects username + password
      const res = await API.post("accounts/login/", {
        username,
        password,
      });

      // Save both tokens
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);

      alert("Login successful!");
      navigate("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="block w-full mb-4 p-2 rounded bg-white/10 border border-white/40"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full mb-4 p-2 rounded bg-white/10 border border-white/40"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
