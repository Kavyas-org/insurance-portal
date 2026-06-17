import { useParams, Link } from "react-router-dom";
import {
  FiShield,
  FiCheckCircle,
  FiPhoneCall,
  FiChevronRight,
} from "react-icons/fi";

const serviceData = {
  "home-insurance": {
    title: "Home Insurance",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop",
    description:
      "Protect your property, belongings, and peace of mind with comprehensive home insurance coverage.",
    benefits: [
      "Property Protection",
      "Fire Coverage",
      "Natural Disaster Protection",
      "Personal Liability Coverage",
    ],
  },

  "life-insurance": {
    title: "Life Insurance",
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1920&auto=format&fit=crop",
    description:
      "Provide long-term financial security and protection for your loved ones.",
    benefits: [
      "Family Protection",
      "Income Security",
      "Long-Term Planning",
      "Financial Stability",
    ],
  },

  "health-insurance": {
    title: "Health Insurance",
    image:
"https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1920&auto=format&fit=crop",
    description:
      "Comprehensive medical coverage designed to support your healthcare needs.",
    benefits: [
      "Hospital Coverage",
      "Emergency Support",
      "Medical Assistance",
      "Preventive Care",
    ],
  },

  "travel-insurance": {
    title: "Travel Insurance",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1920&auto=format&fit=crop",
    description:
      "Travel with confidence knowing you're protected against unexpected events.",
    benefits: [
      "Trip Protection",
      "Emergency Assistance",
      "Medical Support Abroad",
      "Travel Security",
    ],
  },

  "vehicle-insurance": {
    title: "Vehicle Insurance",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop",
    description:
      "Reliable protection for personal and commercial vehicles.",
    benefits: [
      "Accident Coverage",
      "Vehicle Protection",
      "Roadside Assistance",
      "Liability Coverage",
    ],
  },

  "business-insurance": {
    title: "Business Insurance",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop",
    description:
      "Protect your business operations, assets, and future growth.",
    benefits: [
      "Asset Protection",
      "Business Continuity",
      "Liability Coverage",
      "Operational Security",
    ],
  },
};

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">
          Service Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-hidden">

      {/* HERO */}
      <section
        className="relative h-[450px] md:h-[550px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <span className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm mb-6">
            Insurance Services
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl">
            {service.title}
          </h1>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl">
            {service.description}
          </p>

        </div>
      </section>

<section className="bg-white border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6 py-5">

    <div className="flex items-center flex-wrap gap-2 text-sm">

      <Link
        to="/"
        className="text-gray-500 hover:text-[#2563eb]"
      >
        Home
      </Link>

      <FiChevronRight className="text-gray-400" />

      <Link
        to="/services"
        className="text-gray-500 hover:text-[#2563eb]"
      >
        Services
      </Link>

      <FiChevronRight className="text-gray-400" />

      <span className="text-[#2563eb] font-semibold">
        {service.title}
      </span>

    </div>

  </div>
</section>


      {/* ABOUT */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-[#2563eb] font-semibold uppercase tracking-wider">
                About Coverage
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mt-5">
                Comprehensive Protection You Can Trust
              </h2>

              <p className="text-gray-600 leading-8 text-lg mt-8">
                Veltrix Global Insurance delivers reliable insurance
                solutions tailored to protect your assets, health,
                family, and future. We focus on transparency,
                security, and customer confidence.
              </p>

            </div>

            <img
              src={service.image}
              alt={service.title}
              className="rounded-[32px] h-[500px] w-full object-cover shadow-xl"
            />

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="inline-block bg-[#0ea5e9] text-white px-4 py-2 rounded-full text-sm mb-6">
              Coverage Benefits
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
              Key Benefits Included
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 shadow-lg border border-gray-100"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-[#2563eb] text-3xl mb-6">
                  <FiShield />
                </div>

                <h3 className="text-xl font-semibold text-[#0f172a]">
                  {benefit}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
              Why Choose Veltrix Global Insurance
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Trusted Insurance Solutions",
              "Fast Policy Verification",
              "Dedicated Customer Support",
              "Secure Documentation Process",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#f8fafc] rounded-3xl p-6"
              >
                <FiCheckCircle className="text-[#2563eb] text-2xl" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f172a]">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center text-white text-4xl mx-auto mb-8">
            <FiPhoneCall />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Need Assistance?
          </h2>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Speak with our team and discover the right insurance
            solution for your needs.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              to="/contact"
              className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white font-semibold flex items-center"
            >
              Contact Us
            </Link>

            <Link
              to="/verify"
              className="h-14 px-8 rounded-2xl border border-white/20 text-white font-semibold flex items-center"
            >
              Verify Policy
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ServiceDetails;