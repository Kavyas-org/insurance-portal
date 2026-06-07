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
     <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">

  <div className="max-w-7xl mx-auto px-6">

    <div className="h-20 flex items-center justify-between">

      {/* LOGO */}
      <Link to="/">
        <img
          src="/Logo.png"
          alt="Veltrix Global Insurance"
          className="h-11 object-contain"
        />
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden lg:flex items-center gap-10">

        {navLinks.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="text-[15px] font-medium text-gray-700 hover:text-[#2563eb] transition"
          >
            {item.name}
          </Link>
        ))}

      </nav>

      {/* CTA */}
      <div className="hidden lg:block">

        <Link
          to="/contact"
          className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white px-7 py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Let's Talk
        </Link>

      </div>

      {/* MOBILE */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden text-[#111827]"
      >
        <FiMenu size={26} />
      </button>

    </div>

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