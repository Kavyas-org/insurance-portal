import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#08121f] text-white overflow-hidden">

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
      <div className="absolute inset-0 bg-[#08121f]/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">

        {/* GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* ABOUT */}
          <div className="bg-[#0d1b2a] border border-white/5 rounded-2xl p-8">

            {/* LOGO */}
            <img
              src="/Logo.png"
              alt="WorldCare"
              className="h-10 object-contain mb-8"
            />

            {/* TEXT */}
            <p className="text-gray-300 leading-9 text-lg">
              WorldCare Insurance provides trusted protection plans for families, individuals, and businesses with secure and reliable coverage solutions.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-10">

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
          <div>

            <h3 className="text-3xl font-semibold mb-10">
              Contact Info
            </h3>

            <div className="space-y-8">

              {/* ADDRESS */}
              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-white text-[#2563eb] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-300 leading-8 text-lg">
                    30 Commercial Road <br />
                    Fratton, Australia
                  </p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-white text-[#2563eb] flex items-center justify-center shrink-0">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-300 leading-8 text-lg">
                    support@worldcare.com <br />
                    info@worldcare.com
                  </p>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-full bg-white text-[#2563eb] flex items-center justify-center shrink-0">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-300 leading-8 text-lg">
                    Mon - Sat: 8am - 5pm <br />
                    +1 (888) 452-1505
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* COMPANY LINKS */}
          <div>

            <h3 className="text-3xl font-semibold mb-10">
              Our Company
            </h3>

            <div className="flex flex-col gap-6 text-lg">

              <a href="/" className="text-gray-300 hover:text-[#38bdf8] transition">
                About Us
              </a>

              <a href="/" className="text-gray-300 hover:text-[#38bdf8] transition">
                Insurance Plans
              </a>

              <a href="/" className="text-gray-300 hover:text-[#38bdf8] transition">
                Policy Verification
              </a>

              <a href="/" className="text-gray-300 hover:text-[#38bdf8] transition">
                Customer Support
              </a>

              <a href="/" className="text-gray-300 hover:text-[#38bdf8] transition">
                Contact Us
              </a>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h3 className="text-3xl font-semibold mb-10">
              Subscribe Newsletter
            </h3>

            <div className="space-y-5">

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-16 bg-transparent border border-[#2563eb]/40 rounded-xl px-5 text-white outline-none focus:border-[#38bdf8]"
              />

              <button className="w-full h-16 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-lg font-semibold">
                Subscribe Now
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 WorldCare Insurance. All rights reserved.
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