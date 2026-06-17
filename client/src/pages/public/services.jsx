import { Link } from "react-router-dom";
import {
  FiShield,
  FiHeart,
  FiHome,
  FiGlobe,
  FiTruck,
  FiActivity,
  FiPhoneCall,
  FiCheckCircle,
} from "react-icons/fi";

const Services = () => {
 const services = [
  {
    icon: <FiHome />,
    title: "Home Insurance",
    slug: "home-insurance",
    desc: "Protect your home and property..."
  },
  {
    icon: <FiHeart />,
    title: "Life Insurance",
    slug: "life-insurance",
    desc: "Ensure long-term financial protection..."
  },
  {
    icon: <FiActivity />,
    title: "Health Insurance",
    slug: "health-insurance",
    desc: "Comprehensive health plans..."
  },
  {
    icon: <FiGlobe />,
    title: "Travel Insurance",
    slug: "travel-insurance",
    desc: "Travel worldwide confidently..."
  },
  {
    icon: <FiTruck />,
    title: "Vehicle Insurance",
    slug: "vehicle-insurance",
    desc: "Reliable insurance solutions..."
  },
  {
    icon: <FiShield />,
    title: "Business Insurance",
    slug: "business-insurance",
    desc: "Secure your business assets..."
  }
];

  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[420px] md:h-[520px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0f172a]/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-2xl">

            <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              Insurance Services
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Reliable Insurance Solutions For Every Need
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              Veltrix Global Insurance provides modern protection plans
              for families, businesses, travel, health, and assets.
            </p>

          </div>

        </div>

      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              Our Services
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
              Explore Insurance Services
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              We offer comprehensive insurance plans designed to provide
              security, financial protection, and peace of mind.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <Link
  key={index}
  to={`/services/${service.slug}`}
  className="group bg-white rounded-[32px] p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 block"
>

                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-[#2563eb] text-3xl mb-8 group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#0ea5e9] group-hover:text-white transition">

                  {service.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-[#0f172a] mb-5">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 leading-8">
                  {service.desc}
                </p>

              </Link>
            ))}

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

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                Need Assistance?
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Get Expert Insurance Consultation
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-6">
                Our insurance specialists are ready to help you choose
                the right protection plan for your family, business,
                travel, and future security.
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

            {/* RIGHT CARD */}
            <div className="bg-white rounded-[32px] p-10 shadow-2xl">

              <div className="flex items-center gap-4 mb-8">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center text-white text-3xl">

                  <FiPhoneCall />

                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-[#0f172a]">
                    Need Quick Support?
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Our team is available for assistance
                  </p>

                </div>

              </div>

              {/* FEATURES */}
              <div className="space-y-5">

                <div className="flex items-center gap-4">

                  <FiCheckCircle className="text-[#2563eb] text-xl shrink-0" />

                  <p className="text-gray-700">
                    Fast policy approval process
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <FiCheckCircle className="text-[#2563eb] text-xl shrink-0" />

                  <p className="text-gray-700">
                    24/7 customer assistance support
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <FiCheckCircle className="text-[#2563eb] text-xl shrink-0" />

                  <p className="text-gray-700">
                    Secure and transparent documentation
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <FiCheckCircle className="text-[#2563eb] text-xl shrink-0" />

                  <p className="text-gray-700">
                    Trusted global insurance solutions
                  </p>

                </div>

              </div>

              {/* CONTACT */}
              <div className="mt-10 bg-[#f8fafc] rounded-2xl p-6 border border-gray-100">

                <p className="text-gray-500 text-sm mb-2">
                  Contact Number
                </p>

                <h3 className="text-3xl font-bold text-[#2563eb]">
                  +1 (800) 458-2451
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Services;