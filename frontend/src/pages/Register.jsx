import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("accounts/register/", form);
      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-teal-400">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-[400px] text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/20 focus:bg-white/30 outline-none"
            onChange={handleChange}
            required
          />
          <button className="w-full bg-gradient-to-r from-purple-500 to-teal-400 p-3 rounded-lg font-semibold hover:opacity-90">
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-teal-200 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
