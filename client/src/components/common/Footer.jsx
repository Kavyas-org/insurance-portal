import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0f172a]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">

        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* ABOUT */}
          <div className="bg-[#ffffff] border border-white/5 rounded-2xl p-8">

            {/* LOGO */}
            <img
              src="/Logo.png"
              alt="WorldCare"
              className="h-10 object-contain mb-8"
            />

            {/* TEXT */}
            <p className="text-black leading-9 text-lg">
Veltrix Global Insurance is committed to providing reliable insurance solutions for individuals, families, and businesses. We help protect what matters most through transparent policies, fast support, and trusted coverage plans.            </p>

            {/* SOCIAL */}
            <div className="flex  gap-4 mt-10">

              <a
                href="/"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2563eb] hover:border-[#2563eb] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2563eb] hover:border-[#2563eb] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2563eb] hover:border-[#2563eb] transition"
              >
                <FaTwitter />
              </a>

            </div>

          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">

  <div className="flex gap-5">
    <div className="w-14 h-14 rounded-full bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center">
      <FaMapMarkerAlt />
    </div>

    <div>
      <h4 className="font-semibold mb-1">
        Office Address
      </h4>

      <p className="text-gray-400">
        Global Insurance Services
        <br />
        Corporate Office
      </p>
    </div>
  </div>

  <div className="flex gap-5">
    <div className="w-14 h-14 rounded-full bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center">
      <FaEnvelope />
    </div>

    <div>
      <h4 className="font-semibold mb-1">
        Email Support
      </h4>

      <p className="text-gray-400">
        support@veltrixglobal.com
      </p>
    </div>
  </div>

  <div className="flex gap-5">
    <div className="w-14 h-14 rounded-full bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center">
      <FaPhoneAlt />
    </div>

    <div>
      <h4 className="font-semibold mb-1">
        Customer Support
      </h4>

      <p className="text-gray-400">
        Monday - Saturday
        <br />
        24/7 Assistance
      </p>
    </div>
  </div>

</div>

          {/* COMPANY LINKS */}
        <div className="flex flex-col gap-5">

  <Link to="/about" className="text-gray-400 hover:text-[#38bdf8]">
    About Us
  </Link>

  <Link to="/services" className="text-gray-400 hover:text-[#38bdf8]">
    Insurance Services
  </Link>

  <Link to="/verify" className="text-gray-400 hover:text-[#38bdf8]">
    Verify Policy
  </Link>

  <Link to="/contact" className="text-gray-400 hover:text-[#38bdf8]">
    Contact Us
  </Link>

</div>

          {/* NEWSLETTER */}
          <div>

  <h3 className="text-3xl font-semibold mb-6">
    Need Assistance?
  </h3>

  <p className="text-gray-400 leading-8 mb-8">
    Verify your insurance policy, request support, or contact our team for personalized assistance.
  </p>

  <Link
    to="/verify"
    className="inline-flex items-center justify-center w-full h-14 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] font-semibold"
  >
    Verify Policy
  </Link>

  <Link
    to="/contact"
    className="inline-flex items-center justify-center w-full h-14 rounded-xl border border-white/10 mt-4 hover:border-[#38bdf8]"
  >
    Contact Support
  </Link>

</div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

         <p className="text-gray-500 text-sm">
  © 2026 Veltrix Global Insurance. All Rights Reserved.
</p>

          {/* BACK TO TOP */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center hover:scale-105 transition"
          >
            ↑
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;