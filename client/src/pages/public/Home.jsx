import {
  FiHeart,
  FiShield,
  FiGlobe,
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";


const Home = () => {
  return (
    <div className="bg-[#0f172a]">

      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] overflow-hidden flex items-center">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-family.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#0f172a]/75"></div>

        </div>

        {/* BLUE GLOW EFFECTS */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2563eb]/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0ea5e9]/10 blur-[120px] rounded-full"></div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-[#2563eb]/20 border border-[#2563eb]/30 text-[#60a5fa] px-4 py-2 rounded-full text-sm mb-6">
                Trusted Insurance Protection
              </div>

              {/* HEADING */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">

                Protect Your <br />

                <span className="text-[#38bdf8]">
                  Family & Future
                </span>

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-lg leading-8 mt-8 max-w-xl">
                Secure your health, travel, and financial future with reliable insurance solutions built for modern families and businesses.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">

                <button className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition">
                  Get Started
                </button>

                <button className="border border-white/20 hover:border-[#38bdf8] hover:bg-[#38bdf8]/10 text-white px-8 py-4 rounded-xl font-semibold transition">
                  Verify Policy
                </button>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg">

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    25K+
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Active Policies
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    98%
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Client Satisfaction
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    24/7
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Support Service
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE CARD */}
            <div className="hidden lg:flex justify-end">

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl">

                <h3 className="text-white text-2xl font-semibold mb-6">
                  Quick Verification
                </h3>

                <p className="text-gray-300 text-sm leading-7 mb-8">
                  Instantly verify your insurance policy status and access your official documents securely.
                </p>

                {/* INPUT */}
                <input
                  type="text"
                  placeholder="Enter Reference ID"
                  className="w-full bg-[#0f172a]/70 border border-white/10 text-white p-4 rounded-xl outline-none focus:border-[#38bdf8]"
                />

                {/* BUTTON */}
                <button className="w-full mt-5 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition">
                  Verify Now
                </button>

                {/* FEATURES */}
                <div className="space-y-4 mt-8">

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                    Secure document verification
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                    Real-time policy tracking
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                    24/7 customer assistance
                  </div>

                </div>

              </div>

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
          At WorldCare Insurance, we provide reliable coverage plans for individuals, families, and businesses with fast verification, trusted support, and secure policy management.
        </p>

      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src="/insurance-team.jpg"
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
            src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop"
            alt="Family Insurance"
            className="w-full h-[620px] object-cover"
          />

        </div>

        {/* SMALL FLOATING IMAGE */}
        <div className="absolute -bottom-10 right-0 w-56 rounded-[30px] overflow-hidden border-4 border-[#0ea5e9] shadow-2xl bg-white">

          <img
            src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1200&auto=format&fit=crop"
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
          WorldCare Insurance helps individuals and families secure their future with trusted coverage plans, fast policy verification, and reliable customer support tailored for modern needs.
        </p>

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
        <button className="mt-12 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 text-white px-10 py-4 rounded-xl text-lg font-semibold transition shadow-lg">
          Get Started Now
        </button>

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
          WorldCare Insurance provides trusted protection plans designed to secure your family, health, travel, and future with complete confidence and professional support.
        </p>

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