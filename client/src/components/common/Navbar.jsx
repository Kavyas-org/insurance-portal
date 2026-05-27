import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Verify", link: "/verify" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 lg:px-10 py-4 bg-[#0f172a] border-b border-[#1f2937]">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/Logo.png"
              alt="WorldCare"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center bg-white rounded-sm overflow-hidden">

            {/* LINKS */}
            <nav className="flex items-center px-6">

              {navLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="px-5 py-6 text-sm font-medium text-[#111827] hover:text-[#2563eb] transition"
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            {/* CTA */}
            <div className="px-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 text-white px-6 py-4 rounded-xl text-sm font-semibold transition"
              >
                Let's Talk
              </Link>
            </div>

          </div>

          {/* RIGHT SUPPORT */}
          <div className="hidden xl:flex items-center gap-4 text-white">

            <div className="w-12 h-12 rounded-full bg-[#2563eb] flex items-center justify-center">
              <FiPhone size={18} />
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Need any help?
              </p>

              <p className="font-semibold">
                Call: +1 (210) 123-451
              </p>
            </div>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white"
          >
            <FiMenu size={26} />
          </button>

        </div>

      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>

        {/* SIDEBAR */}
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#111827] border-l border-[#1f2937] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* TOP */}
          <div className="flex items-center justify-between p-6 border-b border-[#1f2937]">

            <img
              src="/Logo.png"
              alt="WorldCare"
              className="h-9 object-contain"
            />

            <button
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <FiX size={24} />
            </button>

          </div>

          {/* LINKS */}
          <div className="p-6 flex flex-col">

            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-[#1f2937] text-gray-300 hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white py-3 rounded-xl text-center font-medium"
            >
              Let's Talk
            </Link>

          </div>

        </div>

      </div>

      {/* SPACER */}
      <div className="h-[90px]"></div>
    </>
  );
};

export default Navbar;