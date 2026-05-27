import { useState } from "react";

import {
  FiSearch,
  FiX,
  FiShield,
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiDownload,
} from "react-icons/fi";

import { getInsuranceByRefId } from "../../services/api";

const Verify = () => {
  const [refId, setRefId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!refId.trim()) {
      setError("Please enter Reference ID");
      return;
    }

    try {
      setLoading(true);

      setError("");
      setUser(null);

      const res = await getInsuranceByRefId(refId);

      setUser(res.data);

    } catch {
      setError("No policy record found");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] flex items-center justify-center px-6 py-20 overflow-hidden relative">

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">

            <FiShield />

            Secure Insurance Verification

          </div>

          {/* HEADING */}
          <div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">

              Verify Your
              <span className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] bg-clip-text text-transparent">
                {" "}Insurance Policy
              </span>

            </h1>

            <p className="text-gray-400 mt-8 text-lg leading-9 max-w-xl">

              Instantly verify insurance policy status,
              tracking progress, and official documents
              through Veltrix Global Insurance secure verification system.

            </p>

          </div>

          {/* FEATURE CARDS */}
          <div className="space-y-5">

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">

                  <FiCheckCircle className="text-green-400 text-2xl" />

                </div>

                <div>

                  <h3 className="text-white text-xl font-semibold">
                    Trusted & Secure
                  </h3>

                  <p className="text-gray-400 mt-3 leading-7">
                    Your insurance information is encrypted and securely protected with real-time verification updates.
                  </p>

                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">

                  <FiShield className="text-blue-400 text-2xl" />

                </div>

                <div>

                  <h3 className="text-white text-xl font-semibold">
                    Instant Policy Access
                  </h3>

                  <p className="text-gray-400 mt-3 leading-7">
                    Access policy status, documents, and verification details instantly using your reference ID.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.4)] relative overflow-hidden">

          {/* TOP GLOW */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

          {/* ICON */}
          <div className="flex justify-center mb-8 relative z-10">

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center shadow-2xl">

              <FiSearch className="text-white text-3xl" />

            </div>

          </div>

          {/* TITLE */}
          <div className="text-center mb-10 relative z-10">

            <h2 className="text-3xl font-bold text-white">
              Verify Policy
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Enter your insurance reference ID
            </p>

          </div>

          {/* INFO */}
          <div className="bg-[#0f172a]/80 border border-white/10 rounded-2xl p-5 text-gray-400 text-sm leading-7 mb-8 relative z-10">

            Use your official reference ID to verify
            insurance details, tracking progress, and policy documents securely.

          </div>

          {/* INPUT */}
          <div className="relative z-10">

            <label className="text-sm text-gray-400 mb-3 block">
              Reference ID
            </label>

            <input
              type="text"
              placeholder="Ex: VGI-10234"
              value={refId}
              onChange={(e) => setRefId(e.target.value)}
              className="w-full h-16 bg-[#0f172a]/80 border border-white/10 rounded-2xl px-6 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
            />

          </div>

          {/* BUTTON */}
          <button
            onClick={handleSearch}
            className="w-full mt-8 h-16 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition shadow-2xl relative z-10"
          >

            <FiSearch size={20} />

            Verify Policy

          </button>

          {/* ERROR */}
          {error && (
            <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-red-400 text-sm flex items-center gap-3">

              <FiAlertCircle />

              {error}

            </div>
          )}

          {/* LOADING */}
          {loading && (
            <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 text-blue-300 text-sm flex items-center gap-3">

              <FiClock />

              Checking policy verification...

            </div>
          )}

        </div>

      </div>

      {/* MODAL */}
      {user && (
        <div
          onClick={() => setUser(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center px-4 z-50"
        >

          <div
            onClick={(e) => e.stopPropagation()}
className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0b1120]/95 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_20px_100px_rgba(0,0,0,0.5)]"          >

            {/* HEADER */}
            <div className="px-6 py-5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">

              <div>

                <h2 className="text-2xl font-semibold text-white">
                  Policy Details
                </h2>

                <p className="text-gray-400 mt-1">
                  Verified insurance information
                </p>

              </div>

              <button
                onClick={() => setUser(null)}
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition flex items-center justify-center"
              >

                <FiX size={20} />

              </button>

            </div>

            {/* BODY */}
            <div className="p-6 md:p-7 space-y-6">

              {/* PROFILE */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                {/* AVATAR */}
                {user.image ? (
                  <img
                    src={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${user.image}`}
                    alt={user.name}
                    className="w-20 h-20 rounded-3xl object-cover border border-white/10"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                    {user.name?.charAt(0)?.toUpperCase()}
                  </div>
                )}

                {/* INFO */}
                <div className="flex-1">

                  <h3 className="text-2xl font-semibold text-white">
                    {user.name}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Policy Number: {user.policyNumber}
                  </p>

                </div>

                {/* STATUS */}
                <div>

                  <span
                    className={`px-5 py-3 rounded-2xl text-sm font-semibold
                    ${
                      user.status === "Approved"
                        ? "bg-green-500/10 text-green-400"
                        : user.status === "Pending"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {user.status}
                  </span>

                </div>

              </div>

              {/* INFO GRID */}
              <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

                  <p className="text-gray-400 text-sm">
                    Reference ID
                  </p>

                  <h3 className="text-white text-lg font-semibold mt-3">
                    {user.refId}
                  </h3>

                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5">

                  <p className="text-gray-400 text-sm">
                    Insurance Type
                  </p>

                  <h3 className="text-white text-lg font-semibold mt-3">
                    {user.insuranceType}
                  </h3>

                </div>

              </div>

              {/* PDF */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">

                    <FiFileText className="text-blue-400 text-2xl" />

                  </div>

                  <div>

                    <h3 className="text-white font-semibold">
                      Policy Document
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Secure PDF insurance file
                    </p>

                  </div>

                </div>

                {user.document ? (
                  <a
                    href={`${import.meta.env.VITE_API_URL.replace("/api", "")}/${user.document}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 px-6 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold flex items-center justify-center gap-2"
                  >

                    <FiDownload />

                    View PDF

                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">
                    Document not available
                  </span>
                )}

              </div>

              {/* TRACKING */}
              <div>

                <h4 className="text-white text-xl font-semibold mb-6">
                  Tracking Progress
                </h4>

                <div className="space-y-5">

                  {user.tracking?.map((step, i) => {
                    const done =
                      step.status === "Done";

                    return (
                      <div
                        key={i}
                        className="flex items-start gap-5"
                      >

                        <div
                          className={`w-5 h-5 rounded-full mt-1
                          ${
                            done
                              ? "bg-green-500"
                              : "bg-yellow-400"
                          }`}
                        ></div>

                        <div>

                          <h3 className="text-white font-medium">
                            {step.title}
                          </h3>

                          <p
                            className={`text-sm mt-1
                            ${
                              done
                                ? "text-green-400"
                                : "text-yellow-400"
                            }`}
                          >
                            {done
                              ? "Completed"
                              : "Pending"}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

            {/* FOOTER */}
            <div className="px-6 py-5 border-t border-white/10">

              <button
                onClick={() => setUser(null)}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold"
              >
                Close Window
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Verify;