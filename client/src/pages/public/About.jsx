import { Link } from "react-router-dom";
import {
  FiShield,
  FiDollarSign,
  FiTrendingUp,
  FiPhoneCall,
} from "react-icons/fi";

const About = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[420px] md:h-[520px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0f172a]/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-2xl">

            <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              Trusted Insurance Partner
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              About Veltrix Global Insurance
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              Protecting families, businesses, and futures with reliable
              insurance solutions designed for modern life.
            </p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                alt="About Insurance"
                className="rounded-[32px] shadow-2xl w-full h-[500px] object-cover"
              />

              {/* FLOATING CARD */}
              <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 w-[240px] border border-gray-100">

                <h3 className="text-4xl font-bold text-[#2563eb]">
                  10K+
                </h3>

                <p className="text-gray-600 mt-2 leading-7">
                  Happy clients trust our insurance services worldwide.
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                About Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
                Insurance Solutions Built For Your Future
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">
                Veltrix Global Insurance provides reliable and flexible
                insurance solutions for individuals, families, and
                businesses. We focus on delivering trust, financial
                protection, and long-term security through innovative
                insurance services.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                {/* ITEM */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:-translate-y-1 transition">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">

                    <FiShield className="text-[#2563eb] text-2xl" />

                  </div>

                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    Wealth Protection
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    Secure your future with trusted coverage and protection plans.
                  </p>

                </div>

                {/* ITEM */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:-translate-y-1 transition">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">

                    <FiDollarSign className="text-[#0ea5e9] text-2xl" />

                  </div>

                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    Financial Security
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    Smart insurance plans designed for long-term stability.
                  </p>

                </div>

                {/* ITEM */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:-translate-y-1 transition">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">

                    <FiTrendingUp className="text-[#2563eb] text-2xl" />

                  </div>

                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    Growth & Trust
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    Building long-term relationships through reliable support.
                  </p>

                </div>

                {/* ITEM */}
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:-translate-y-1 transition">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">

                    <FiPhoneCall className="text-[#0ea5e9] text-2xl" />

                  </div>

                  <h3 className="text-xl font-semibold text-[#0f172a]">
                    24/7 Assistance
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    Dedicated support team ready to help anytime you need.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0f172a]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              Need Assistance?
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Get Professional Insurance Consultation Today
            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              Our experts are ready to help you choose the right insurance
              plan for your future, family, and business protection.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/contact"
                className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold flex items-center justify-center"
              >
                Contact Us
              </Link>

              <Link
                to="/verify"
                className="h-14 px-8 rounded-2xl border border-white/20 hover:bg-white/10 transition text-white font-semibold flex items-center justify-center"
              >
                Verify Policy
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;