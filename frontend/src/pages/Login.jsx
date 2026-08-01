import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import {
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

import farmerLogin from "../assets/images/login/farmer-login.jpg";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await loginUser(formData);

    if (result.access_token) {
      localStorage.setItem("token", result.access_token);
      navigate("/dashboard");
    } else {
      alert(result.detail);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: credentialResponse.credential,
        }),
      });

      const result = await response.json();

      if (result.access_token) {
        localStorage.setItem("token", result.access_token);
        navigate("/dashboard");
      } else {
        alert(result.detail || "Google Login Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Google Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="grid min-h-screen lg:grid-cols-2">
        
        {/* ===========================
            LEFT SIDE (Cinematic)
        ============================ */}
        <div className="relative hidden overflow-hidden lg:block">
          {/* Background Image */}
          <img
            src={farmerLogin}
            alt="Farmer using AI"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay (Upgraded to 55%) */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Cinematic Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Decorative Blur */}
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-green-500/30 blur-[140px]" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-green-400/20 blur-[140px]" />

          {/* Content Wrapper pinned to bottom */}
          <div className="relative flex h-full flex-col justify-between p-16 text-white">
            {/* Logo at Top */}
            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur-md">
                🌾 KrishiSathi AI
              </span>
            </div>

            {/* Information Area at Bottom (Netflix Style) */}
            <div className="mt-auto max-w-xl pb-10">
              <h1 className="text-6xl font-black leading-tight">
                Continue Your
                <span className="mt-2 block text-green-400">
                  Smart Farming
                </span>
                Journey
              </h1>

              {/* 5 Clean Feature Rows */}
              <div className="mt-10 space-y-5">
                {[
                  "AI Crop Advisor",
                  "Live Weather",
                  "Disease Detection",
                  "Yield Prediction",
                  "Market Insights"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-xl font-medium tracking-wide text-white/95">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===========================
            RIGHT SIDE (Form)
        ============================ */}
        <div className="flex items-center justify-center bg-white px-8 py-12 lg:px-20">
          <div className="w-full max-w-[620px]">
            <div>
              {/* Clean gray welcome text */}
              <p className="text-lg font-medium text-gray-500">
                Welcome Back 👋
              </p>
              {/* Scaled up to 6xl */}
              <h2 className="mt-4 text-6xl font-black tracking-tight text-gray-900">
                Login to
                <span className="block text-green-600">
                  KrishiSathi
                </span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="mt-12 space-y-9">
              {/* Email */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                {/* Taller input (62px), more padding (px-6), softer rounded corners (3xl) */}
                <div className="flex h-[62px] items-center rounded-3xl border border-gray-200 bg-gray-50 px-6 transition-all duration-300 focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
                  <Mail size={22} className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="ml-4 w-full bg-transparent text-lg text-gray-700 placeholder:text-gray-400 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0px_1000px_white_inset]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-3 block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="flex h-[62px] items-center rounded-3xl border border-gray-200 bg-gray-50 px-6 transition-all duration-300 focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
                  <Lock size={22} className="text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="ml-4 w-full bg-transparent text-lg text-gray-700 placeholder:text-gray-400 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0px_1000px_white_inset]"
                  />
                </div>
              </div>

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  Remember Me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-green-600 transition hover:text-green-700"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button: Taller (68px), larger text (xl), softer border (3xl) */}
              <button
                type="submit"
                className="flex h-[68px] w-full items-center justify-center gap-3 rounded-3xl bg-green-600 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-green-500/30"
              >
                Login
                <ArrowRight size={24} />
              </button>
            </form>

            {/* Divider */}
            <div className="my-10 flex items-center">
              <div className="h-px flex-1 bg-gray-200"></div>
              <span className="mx-5 text-sm font-medium uppercase tracking-wider text-gray-400">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* Google Login Wrapper */}
            <div className="flex justify-center">
              <div className="flex w-full items-center justify-center rounded-2xl border border-gray-200 p-2">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => {
                    alert("Google Login Failed");
                  }}
                />
              </div>
            </div>

            {/* Register */}
            <p className="mt-10 text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-green-600 transition hover:text-green-700"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;