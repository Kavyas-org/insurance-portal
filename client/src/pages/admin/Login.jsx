import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

import {
  FiMail,
  FiLock,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("All fields required");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post(
        "/api/admin/login",
        form
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/admin/dashboard");

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] grid lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#172554]">

        {/* GLOW EFFECTS */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-500/20 blur-3xl rounded-full"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-between p-14 w-full">


          {/* CENTER */}
          <div className="max-w-xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-8">

              <FiShield />

              Secure Insurance Portal

            </div>

            <h1 className="text-5xl font-bold leading-tight text-white">

              Veltrix Global
              <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
                {" "}Insurance
              </span>

            </h1>

            <p className="text-gray-300 text-lg leading-9 mt-8">

              Manage policy verification, customer records,
              insurance tracking, and document approvals
              through a secure and intelligent admin system.

            </p>

            {/* FEATURES */}
            <div className="space-y-5 mt-12">

              <div className="flex items-center gap-4 text-gray-200">

                <div className="w-11 h-11 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <FiCheckCircle className="text-green-400 text-xl" />
                </div>

                <span className="text-lg">
                  Secure policy management system
                </span>

              </div>

              <div className="flex items-center gap-4 text-gray-200">

                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <FiCheckCircle className="text-blue-400 text-xl" />
                </div>

                <span className="text-lg">
                  Real-time customer verification
                </span>

              </div>

              <div className="flex items-center gap-4 text-gray-200">

                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <FiCheckCircle className="text-cyan-400 text-xl" />
                </div>

                <span className="text-lg">
                  Intelligent insurance workflow tracking
                </span>

              </div>

            </div>

          </div>

          {/* FOOTER */}
          <div className="text-gray-500 text-sm">
            © 2026 Veltrix Global Insurance. All rights reserved.
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6 py-10 bg-[#020617]">

        <div className="w-full max-w-md">

          {/* MOBILE LOGO */}
          <div className="lg:hidden mb-10 text-center">

            <img
              src="/Logo.png"
              alt="Veltrix"
              className="h-12 mx-auto object-contain"
            />

          </div>

          {/* CARD */}
          <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-8 shadow-2xl">

  {/* BACK TO WEBSITE */}
  <button
    onClick={() => navigate("/")}
    className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
  >
    ← Back to Home
  </button>


            {/* TOP */}
            <div className="mb-8">

              <h2 className="text-4xl font-bold text-white">
                Welcome Back
              </h2>

              <p className="text-gray-400 mt-3 text-lg">
                Login to access the insurance admin portal
              </p>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >

              {/* EMAIL */}
              <div>

                <label className="text-sm text-gray-400 mb-3 block">
                  Email Address
                </label>

                <div className="relative">

                  <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full h-14 pl-14 pr-5 rounded-2xl bg-[#0f172a] border border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
                  />

                </div>

              </div>

              {/* PASSWORD */}
              <div>

                <label className="text-sm text-gray-400 mb-3 block">
                  Password
                </label>

                <div className="relative">

                  <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full h-14 pl-14 pr-5 rounded-2xl bg-[#0f172a] border border-[#1f2937] text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
                  />

                </div>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold text-lg shadow-xl"
              >
                {loading
                  ? "Logging in..."
                  : "Access Dashboard"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;