import {
  FiHeart,
  FiShield,
  FiGlobe,
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
 
} from "react-icons/fi";
import {
  FaShieldAlt,
  FaHandHoldingUsd,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#0f172a]">

      {/* HERO SECTION */}
<section
  className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: "url('home-imgs/hero-img.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* LIGHT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#d9f99d]/80 via-[#d9f99d]/60 to-[#67e8f9]/40"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

    {/* BADGE */}
    <span className="inline-flex items-center bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium text-[#2563eb] shadow-lg">
      Trusted Global Insurance Provider
    </span>

    {/* HEADING */}
    <h1 className="mt-8 text-5xl md:text-7xl font-bold text-[#0f172a] leading-tight">

      Protect Today For A Brighter

      <br />

      <span className="text-[#2563eb]">
        Tomorrow
      </span>

    </h1>

    {/* DESCRIPTION */}
    <p className="mt-8 text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
      Gain peace of mind with our trusted insurance solutions.
      Protect your loved ones, secure your future, and enjoy
      reliable coverage whenever you need it.
    </p>

    {/* PEOPLE + TRUST */}
    <div className="flex justify-center items-center gap-4 mt-8">

      <div className="flex -space-x-3">

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-10 h-10 rounded-full border-2 border-white"
        />

        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="w-10 h-10 rounded-full border-2 border-white"
        />

        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          className="w-10 h-10 rounded-full border-2 border-white"
        />

      </div>

      <div className="text-left">

        <h4 className="font-bold text-[#0f172a]">
          9,675+
        </h4>

        <p className="text-sm text-gray-600">
          Happy Customers
        </p>

      </div>

    </div>

    {/* BUTTONS */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

    <Link
  to="/services"
  className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
>
  Explore Plans
</Link>

     <Link
  to="/verify"
  className="bg-white text-[#0f172a] px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
>
  Verify Policy
</Link>

    </div>

  </div>

</section>

<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* IMAGE SIDE */}
      <div className="relative">

        {/* BLUE SHAPE */}
        <div className="absolute -top-6 -left-6 w-[85%] h-full bg-gradient-to-b from-[#2563eb] to-[#0ea5e9] -z-10"></div>

        {/* IMAGE */}
        <img
          src="home-imgs\about-img.png"
          alt="Insurance Family"
          className="w-full h-[600px] object-cover"
        />

        {/* EXPERIENCE CARD */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-lg px-10 py-8 text-center">

          <h3 className="text-5xl font-bold text-[#2563eb]">
            25+
          </h3>

          <p className="text-gray-800 font-semibold mt-2">
            Years Experience
          </p>

        </div>

      </div>

      {/* CONTENT SIDE */}
      <div>

        {/* TAG */}
        <span className="text-[#2563eb] font-semibold uppercase tracking-wider">
          About Veltrix Global Insurance
        </span>

        {/* HEADING */}
        <h2 className="text-4xl lg:text-6xl font-bold text-[#0f172a] leading-tight mt-5">

          Insurance Protection

          <br />

          You Can Trust

        </h2>

        {/* TEXT */}
        <p className="mt-8 text-gray-600 leading-8 text-lg">
          Veltrix Global Insurance helps individuals, families,
          and businesses protect what matters most. Our
          insurance solutions are designed to provide financial
          security, peace of mind, and dependable support when
          you need it most.
        </p>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 pb-10 border-b border-gray-200">

          <div className="flex items-start gap-4">

            <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563eb] text-2xl">
              <FaShieldAlt />
            </div>

            <div>
              <h4 className="font-bold text-xl text-[#0f172a]">
                Secure Protection
              </h4>

              <p className="text-gray-600 mt-2">
                Reliable coverage for health, life, travel, and business needs.
              </p>
            </div>

          </div>

          <div className="flex items-start gap-4">

            <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563eb] text-2xl">
              <FaHandHoldingUsd />
            </div>

            <div>
              <h4 className="font-bold text-xl text-[#0f172a]">
                Financial Security
              </h4>

              <p className="text-gray-600 mt-2">
                Protect your future with comprehensive insurance plans.
              </p>
            </div>

          </div>

        </div>

        {/* DESCRIPTION */}
        <p className="mt-8 text-gray-600 leading-8">
          We are committed to delivering transparent policies,
          fast claim support, and exceptional customer service
          backed by years of industry experience.
        </p>

        {/* BUTTON */}
        <button className="mt-10 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition">
          Learn More
        </button>

      </div>

    </div>

  </div>
</section>

{/* SERVICES SECTION */}
<section className="relative bg-[#f8fafc] py-24 overflow-hidden">

  {/* BACKGROUND PATTERN */}
  <div
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage: "url('/pattern-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

    {/* TOP */}
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT */}
      <div>

        {/* BADGE */}
        <div className="inline-block bg-[#0ea5e9] text-white text-sm font-semibold px-4 py-2 rounded-md mb-6">
          WHAT WE PROVIDE
        </div>

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-[#111827] leading-tight">
          Insurance Solutions <br />
          Designed To Protect <br />
          Your Future
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg leading-9 mt-8 max-w-xl">
At Veltrix Global Insurance, we provide trusted insurance solutions for individuals, families, and businesses with secure policy verification, reliable support, and comprehensive protection plans.        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src="./home-imgs/img-1.png"
          alt="Insurance Consultation"
          className="w-full rounded-md object-cover shadow-xl"
        />
      </div>

    </div>

    {/* SERVICE CARDS */}
    <div className="grid md:grid-cols-3 mt-20">

      {/* CARD 1 */}
      <div className="bg-white border border-gray-200 p-14 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#e0f2fe] flex items-center justify-center mb-10">
          <FiGlobe className="text-[#0ea5e9] text-3xl" />
        </div>

        <h3 className="text-3xl font-semibold text-[#111827] mb-6">
          Travel Insurance
        </h3>

        <p className="text-gray-600 text-lg leading-8">
          Stay protected during international travel with emergency medical coverage, trip protection, and secure travel assistance services.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="bg-white border border-gray-200 p-14 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#dbeafe] flex items-center justify-center mb-10">
          <FiShield className="text-[#2563eb] text-3xl" />
        </div>

        <h3 className="text-3xl font-semibold text-[#111827] mb-6">
          Life Insurance
        </h3>

        <p className="text-gray-600 text-lg leading-8">
          Ensure long-term financial security for your family with flexible life insurance plans built around your future goals.
        </p>

      </div>

      {/* CARD 3 */}
      <div className="bg-white border border-gray-200 p-14 hover:shadow-2xl transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-[#dcfce7] flex items-center justify-center mb-10">
          <FiHeart className="text-[#16a34a] text-3xl" />
        </div>

        <h3 className="text-3xl font-semibold text-[#111827] mb-6">
          Health Insurance
        </h3>

        <p className="text-gray-600 text-lg leading-8">
          Get access to trusted healthcare coverage with plans that support medical expenses, hospitalization, and preventive care.
        </p>

      </div>

    </div>

  </div>

</section>


{/* ABOUT SECTION */}
<section className="bg-white py-24 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT IMAGE */}
      <div className="relative">

        {/* MAIN IMAGE */}
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#0ea5e9]">

          <img
            src="home-imgs\img-2.png"
            alt="Family Insurance"
            className="w-full h-[620px] object-cover"
          />

        </div>

        {/* SMALL FLOATING IMAGE */}
        <div className="absolute -bottom-10 right-0 w-56 rounded-[30px] overflow-hidden border-4 border-[#0ea5e9] shadow-2xl bg-white">

          <img
            src="home-imgs\img-3.png"
            alt="Happy Family"
            className="w-full h-56 object-cover"
          />

        </div>

        {/* DECORATION */}
        <div className="absolute -top-6 -left-6 w-20 h-20 border-l-[10px] border-t-[10px] border-[#0ea5e9] rounded-tl-3xl"></div>

      </div>

      {/* RIGHT CONTENT */}
      <div>

        {/* BADGE */}
        <div className="inline-block bg-[#0ea5e9] text-white text-sm font-semibold px-4 py-2 rounded-md mb-6">
          ABOUT US
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">

          We Provide The Best <br />

          <span className="text-[#2563eb]">
            Insurance Policy
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg leading-9 mt-8">
Veltrix Global Insurance helps individuals, families, and businesses protect what matters most through reliable coverage, transparent policies, and exceptional customer support.        </p>

        {/* STATS */}
        <div className="flex flex-col sm:flex-row gap-10 mt-12">

          {/* STAT 1 */}
          <div className="pr-10 border-r border-gray-200">

            <h3 className="text-5xl font-bold text-[#2563eb]">
              12K+
            </h3>

            <p className="text-xl font-semibold text-[#111827] mt-3">
              Insurance Policies
            </p>

          </div>

          {/* STAT 2 */}
          <div>

            <h3 className="text-5xl font-bold text-[#0ea5e9]">
              10K+
            </h3>

            <p className="text-xl font-semibold text-[#111827] mt-3">
              Happy Clients
            </p>

          </div>

        </div>

        {/* BUTTON */}
      <Link
  to="/contact"
  className="mt-10 inline-block bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white px-10 py-4 rounded-xl font-semibold"
>
  Get A Free Quote
</Link>

      </div>

    </div>

  </div>

</section>

{/* BENEFITS SECTION */}
<section className="bg-[#f8fafc] py-24 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* TOP */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <div className="relative">

        {/* CIRCLE DECORATION */}
        <div className="absolute -top-10 -left-10 w-56 h-56 border border-[#dbeafe] rounded-full"></div>

        <div className="absolute -top-4 left-10 w-40 h-40 border border-[#dbeafe] rounded-full"></div>

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop"
          alt="Happy Family"
          className="relative z-10 w-full h-[420px] object-cover rounded-md shadow-xl"
        />

      </div>

      {/* RIGHT CONTENT */}
      <div>

        {/* BADGE */}
        <div className="inline-block bg-[#0ea5e9] text-white text-sm font-semibold px-4 py-2 rounded-md mb-6">
          YOUR BENEFIT
        </div>

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-[#111827] leading-tight">

          With Experience <br />

          Comes Excellence.

        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg leading-9 mt-8 max-w-xl">
Veltrix Global Insurance provides comprehensive insurance solutions designed to protect your health, family, travel, business, and financial future with confidence.        </p>

        {/* BUTTON */}
        <button className="mt-10 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 text-white px-10 py-4 rounded-xl text-lg font-semibold transition shadow-lg">
          Get Started Now
        </button>

      </div>

    </div>

    {/* FEATURE CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

      {/* CARD 1 */}
      <div className="relative bg-white p-8 shadow-sm hover:shadow-2xl transition duration-300 group overflow-hidden">

        {/* NUMBER */}
        <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100">
          01
        </span>

        {/* ICON */}
        <div className="w-14 h-14 rounded-xl bg-[#dbeafe] flex items-center justify-center mb-8">
          <FiShield className="text-[#2563eb] text-3xl" />
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-semibold text-[#111827]">
          Choice & Value
        </h3>

        {/* LINE */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] scale-x-0 group-hover:scale-x-100 origin-left transition duration-300"></div>

      </div>

      {/* CARD 2 */}
      <div className="relative bg-white p-8 shadow-sm hover:shadow-2xl transition duration-300 group overflow-hidden">

        <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100">
          02
        </span>

        <div className="w-14 h-14 rounded-xl bg-[#dcfce7] flex items-center justify-center mb-8">
          <FiDollarSign className="text-[#16a34a] text-3xl" />
        </div>

        <h3 className="text-2xl font-semibold text-[#111827]">
          Money Saving
        </h3>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] scale-x-0 group-hover:scale-x-100 origin-left transition duration-300"></div>

      </div>

      {/* CARD 3 */}
      <div className="relative bg-white p-8 shadow-sm hover:shadow-2xl transition duration-300 group overflow-hidden">

        <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100">
          03
        </span>

        <div className="w-14 h-14 rounded-xl bg-[#ede9fe] flex items-center justify-center mb-8">
          <FiUsers className="text-[#7c3aed] text-3xl" />
        </div>

        <h3 className="text-2xl font-semibold text-[#111827]">
          Flexible Plans
        </h3>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] scale-x-0 group-hover:scale-x-100 origin-left transition duration-300"></div>

      </div>

      {/* CARD 4 */}
      <div className="relative bg-white p-8 shadow-sm hover:shadow-2xl transition duration-300 group overflow-hidden">

        <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100">
          04
        </span>

        <div className="w-14 h-14 rounded-xl bg-[#fef3c7] flex items-center justify-center mb-8">
          <FiCheckCircle className="text-[#f59e0b] text-3xl" />
        </div>

        <h3 className="text-2xl font-semibold text-[#111827]">
          Secure Future
        </h3>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] scale-x-0 group-hover:scale-x-100 origin-left transition duration-300"></div>

      </div>

    </div>

  </div>

</section>
    </div>
  );
};

export default Home;