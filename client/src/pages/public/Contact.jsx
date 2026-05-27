import { useState } from "react";

import {
  FiChevronDown,
  FiMapPin,
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How can I verify my insurance policy?",
      answer:
        "You can verify your insurance policy instantly using the official reference ID through our secure verification system.",
    },
    {
      question: "What insurance services do you provide?",
      answer:
        "We provide life, health, business, travel, vehicle, and property insurance solutions globally.",
    },
    {
      question: "How long does policy approval take?",
      answer:
        "Most insurance policies are processed and approved within 24 to 72 working hours depending on verification.",
    },
    {
      question: "Can I update my insurance information later?",
      answer:
        "Yes, policy holders can request profile or policy updates through our support team.",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[420px] md:h-[520px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920&auto=format&fit=crop')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0f172a]/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-2xl">

            <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              Contact Veltrix
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Contact Our Insurance Experts
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              Connect with our support and insurance specialists for
              assistance, policy guidance, and consultation services.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              Frequently Asked Questions
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
              Insurance FAQs
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              Find answers to the most common questions regarding
              insurance policies, approvals, and verification services.
            </p>

          </div>

          {/* FAQ GRID */}
          <div className="grid lg:grid-cols-2 gap-8">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] border border-gray-100 shadow-lg overflow-hidden"
              >

                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                  className={`w-full flex items-center justify-between px-8 py-6 text-left transition
                  ${
                    openFaq === index
                      ? "bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white"
                      : "bg-white text-[#0f172a]"
                  }`}
                >

                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>

                  <FiChevronDown
                    className={`text-xl transition-transform
                    ${
                      openFaq === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                {/* ANSWER */}
                {openFaq === index && (
                  <div className="px-8 py-6 text-gray-600 leading-8 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div>

              <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                Contact Information
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
                Get In Touch With Us
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-8 max-w-xl">
                Our insurance specialists are always ready to help you
                with policy guidance, support, and consultation services.
              </p>

              {/* INFO BOXES */}
              <div className="space-y-6 mt-12">

                {/* ADDRESS */}
                <div className="bg-[#f8fafc] border border-gray-100 rounded-[28px] p-6 flex gap-5 hover:shadow-xl transition">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center text-white text-2xl shrink-0">

                    <FiMapPin />

                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-[#0f172a]">
                      Office Address
                    </h3>

                    <p className="text-gray-600 mt-3 leading-8">
                      25 International Business Center,
                      <br />
                      New York, United States
                    </p>

                  </div>

                </div>

                {/* EMAIL */}
                <div className="bg-[#f8fafc] border border-gray-100 rounded-[28px] p-6 flex gap-5 hover:shadow-xl transition">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center text-white text-2xl shrink-0">

                    <FiMail />

                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-[#0f172a]">
                      Email Address
                    </h3>

                    <p className="text-gray-600 mt-3 leading-8">
                      support@veltrixglobal.com
                      <br />
                      info@veltrixglobal.com
                    </p>

                  </div>

                </div>

                {/* PHONE */}
                <div className="bg-[#f8fafc] border border-gray-100 rounded-[28px] p-6 flex gap-5 hover:shadow-xl transition">

                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center text-white text-2xl shrink-0">

                    <FiPhoneCall />

                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-[#0f172a]">
                      Phone Support
                    </h3>

                    <p className="text-gray-600 mt-3 leading-8">
                      +1 (800) 458-2451
                      <br />
                      +1 (800) 654-1254
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-[#f8fafc] border border-gray-100 rounded-[36px] p-8 md:p-10 shadow-xl">

              <span className="inline-block bg-[#0ea5e9] text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
                Send Message
              </span>

              <h2 className="text-4xl font-bold text-[#0f172a]">
                Let's Talk
              </h2>

              <p className="text-gray-600 leading-8 mt-6">
                Fill out the form below and our insurance experts will
                contact you shortly.
              </p>

              {/* FORM */}
              <form className="mt-10 space-y-6">

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-14 bg-white border border-gray-200 rounded-2xl px-5 outline-none focus:border-[#2563eb] transition"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-14 bg-white border border-gray-200 rounded-2xl px-5 outline-none focus:border-[#2563eb] transition"
                  />

                </div>

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 bg-white border border-gray-200 rounded-2xl px-5 outline-none focus:border-[#2563eb] transition"
                  />

                  <input
                    type="text"
                    placeholder="Insurance Type"
                    className="h-14 bg-white border border-gray-200 rounded-2xl px-5 outline-none focus:border-[#2563eb] transition"
                  />

                </div>

                {/* MESSAGE */}
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-white border border-gray-200 rounded-2xl p-5 outline-none focus:border-[#2563eb] transition resize-none"
                ></textarea>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold"
                >
                  Submit Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;