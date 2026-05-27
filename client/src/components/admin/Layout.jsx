import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import { FiHome, FiUserPlus, FiUsers, FiLogOut, FiMenu } from "react-icons/fi";
import { useState } from "react";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#111827] border-r border-[#1f2937] flex flex-col justify-between z-50 transform transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >

        {/* TOP */}
        <div className="p-6">

          {/* LOGO */}
          <div className="flex items-center gap-2 mb-10">
            <img
              src="/Logo.png"
              alt="WorldCare"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* NAV */}
          <nav className="space-y-2">

            <Link
              to="/admin/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                isActive("/admin/dashboard")
                  ? "bg-[#2563eb] text-white"
                  : "text-gray-300 hover:bg-[#1f2937]"
              }`}
            >
              <FiHome /> Dashboard
            </Link>

            <Link
to="/admin/add-policy"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
isActive("/admin/add-policy")  
                ? "bg-[#2563eb] text-white"
                  : "text-gray-300 hover:bg-[#1f2937]"
              }`}
            >
              <FiUserPlus /> Add Insurance
            </Link>

            <Link
to="/admin/policies"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
isActive("/admin/policies")
                  ? "bg-[#2563eb] text-white"
                  : "text-gray-300 hover:bg-[#1f2937]"
              }`}
            >
              <FiUsers /> All Policies
            </Link>

          </nav>
        </div>

        {/* LOGOUT */}
        <div className="p-6 border-t border-[#1f2937]">
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm text-red-400 hover:text-red-500 transition"
          >
            <FiLogOut /> Logout
          </button>
        </div>

      </div>

      {/* MAIN */}
      <div className=" flex-1 flex flex-col lg:ml-64">

        {/* HEADER */}
        <div className="bg-[#111827] border-b border-[#1f2937] px-6 py-4 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-gray-300"
              onClick={() => setOpen(true)}
            >
              <FiMenu size={20} />
            </button>

            <h1 className="text-lg font-semibold">
              Admin Dashboard
            </h1>
          </div>

          {/* RIGHT */}
          <div className="text-sm text-gray-400">
            Welcome, Admin
          </div>

        </div>

        {/* CONTENT */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>

        {/* FOOTER */}
        <div className="bg-[#111827] border-t border-[#1f2937] p-3 text-center text-xs text-gray-500">
          © 2026 WorldCare Insurance. All rights reserved.
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;