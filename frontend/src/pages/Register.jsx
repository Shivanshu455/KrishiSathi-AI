import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import {
  User,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

import farmerLogin from "../assets/images/login/farmer-login.jpg";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registerUser(formData);

    alert(result.message || result.detail);

    if (result.message) {
      navigate("/login");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    // You can implement your Google Register logic here
    console.log("Google Token:", credentialResponse.credential);
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

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Cinematic Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Decorative Blur */}
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-green-500/30 blur-[120px]" />
          <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-green-400/20 blur-[120px]" />

          {/* Content Wrapper pinned to bottom */}
          <div className="relative flex h-full flex-col justify-between p-10 lg:p-14 text-white">
            {/* Logo at Top */}
            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur-md">
                🌾 KrishiSathi AI
              </span>
            </div>

            {/* Information Area at Bottom (Netflix Style) */}
            <div className="mt-auto max-w-xl pb-6">
              <h1 className="text-5xl font-black leading-tight">
                Start Your
                <span className="mt-1 block text-green-400">
                  Smart Farming
                </span>
                Journey
              </h1>

              {/* 5 Clean Feature Rows */}
              <div className="mt-8 space-y-3.5">
                {[
                  "AI Crop Advisor",
                  "Live Weather",
                  "Disease Detection",
                  "Yield Prediction",
                  "Market Insights"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    <span className="text-lg font-medium tracking-wide text-white/95">
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
        <div className="flex items-center justify-center bg-white px-6 py-8 lg:px-12">
          {/* Scaled down max-width for desktop proportions */}
          <div className="w-full max-w-[420px]"> 
            <div>
              <p className="text-base font-medium text-gray-500">
                Join the platform 🌱
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-tight text-gray-900">
                Create your
                <span className="block text-green-600">
                  Account
                </span>
              </h2>
            </div>

            {/* Scaled down gaps */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              
              {/* Username */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-sm font-semibold text-gray-700 ml-1">
                  Full Name
                </label>
                {/* Standard 50px input height */}
                <div className="flex h-[50px] items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
                  <User size={18} className="text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="ml-3 w-full bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0px_1000px_white_inset]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-sm font-semibold text-gray-700 ml-1">
                  Email Address
                </label>
                <div className="flex h-[50px] items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
                  <Mail size={18} className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="ml-3 w-full bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0px_1000px_white_inset]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="block text-sm font-semibold text-gray-700 ml-1">
                  Password
                </label>
                <div className="flex h-[50px] items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition-all duration-300 focus-within:border-green-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-green-100">
                  <Lock size={18} className="text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    required
                    className="ml-3 w-full bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0px_1000px_white_inset]"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center mt-1">
                <label className="flex items-center gap-2.5 text-xs text-gray-600 ml-1 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                  />
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              {/* Register Button - Scaled height */}
              <button
                type="submit"
                className="mt-2 flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-green-600 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-green-500/30"
              >
                Create Account
                <ArrowRight size={20} />
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center">
              <div className="h-px flex-1 bg-gray-200"></div>
              <span className="mx-4 text-xs font-medium uppercase tracking-wider text-gray-400">
                Or sign up with
              </span>
              <div className="h-px flex-1 bg-gray-200"></div>
            </div>

            {/* Google Signup Wrapper */}
            <div className="flex justify-center">
              <div className="flex w-full items-center justify-center rounded-xl border border-gray-200 p-1.5 transition-colors hover:bg-gray-50">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => {
                    alert("Google Signup Failed");
                  }}
                  text="signup_with"
                />
              </div>
            </div>

            {/* Login Redirect */}
            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-600 transition hover:text-green-700"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;