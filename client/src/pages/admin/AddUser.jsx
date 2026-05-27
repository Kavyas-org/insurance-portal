import { useState } from "react";
import {
  FiUploadCloud,
  FiFileText,
  FiImage,
  FiUser,
  FiShield,
  FiDollarSign,
  FiCalendar,
} from "react-icons/fi";

import { addInsurance } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    policyNumber: "",
    dob: "",
    insuranceType: "",
    premiumAmount: "",
    document: null,
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      await addInsurance(formData);

      toast.success("Policy added successfully");

      navigate("/admin/dashboard");

    } catch (err) {
      toast.error("Failed to add policy");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="mb-10">

        <div className="inline-flex items-center gap-2 bg-[#172554] text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20 mb-5">
          <FiShield />
          Insurance Management
        </div>

        <h1 className="text-4xl font-bold text-white">
          Add Insurance Policy
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Create and manage customer insurance records securely.
        </p>

      </div>

      {/* FORM CARD */}
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-8 md:p-10 shadow-2xl">

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-7">

            {/* NAME */}
            <div>

              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiUser />
                Full Name
              </label>

              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              />

            </div>

            {/* POLICY NUMBER */}
            <div>

              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiShield />
                Policy Number
              </label>

              <input
                type="text"
                name="policyNumber"
                onChange={handleChange}
                placeholder="Enter policy number"
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              />

            </div>

            {/* DOB */}
            <div>

              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiCalendar />
                Date Of Birth
              </label>

              <input
                type="date"
                name="dob"
                onChange={handleChange}
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              />

            </div>

            {/* INSURANCE TYPE */}
            <div>

              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiShield />
                Insurance Type
              </label>

              <select
                name="insuranceType"
                onChange={handleChange}
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              >
                <option value="">Select insurance type</option>
                <option value="Travel Insurance">
                  Travel Insurance
                </option>
                <option value="Health Insurance">
                  Health Insurance
                </option>
                <option value="Life Insurance">
                  Life Insurance
                </option>
                <option value="Business Insurance">
                  Business Insurance
                </option>
              </select>

            </div>

            {/* PREMIUM */}
            <div className="md:col-span-2">

              <label className="text-sm text-gray-400 flex items-center gap-2 mb-3">
                <FiDollarSign />
                Premium Amount
              </label>

              <input
                type="number"
                name="premiumAmount"
                onChange={handleChange}
                placeholder="Enter premium amount"
                className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
              />

            </div>

          </div>

          {/* FILE UPLOADS */}
          <div className="grid lg:grid-cols-2 gap-7">

            {/* PDF */}
            <div className="bg-[#0f172a] border border-dashed border-[#374151] rounded-3xl p-8 hover:border-[#2563eb] transition">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-2xl bg-[#172554] flex items-center justify-center">
                  <FiFileText className="text-blue-400 text-3xl" />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Policy Document
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Upload insurance PDF document
                  </p>
                </div>

              </div>

              <label className="flex flex-col items-center justify-center border border-[#1f2937] rounded-2xl p-8 cursor-pointer hover:bg-[#111827] transition">

                <FiUploadCloud className="text-5xl text-blue-400 mb-4" />

                <span className="text-white font-medium">
                  Upload PDF File
                </span>

                <span className="text-gray-500 text-sm mt-2">
                  PDF format only
                </span>

                <input
                  type="file"
                  name="document"
                  onChange={handleFile}
                  className="hidden"
                />

              </label>

              {form.document && (
                <p className="text-green-400 text-sm mt-4">
                  {form.document.name}
                </p>
              )}

            </div>

            {/* IMAGE */}
            <div className="bg-[#0f172a] border border-dashed border-[#374151] rounded-3xl p-8 hover:border-[#2563eb] transition">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-2xl bg-[#172554] flex items-center justify-center">
                  <FiImage className="text-blue-400 text-3xl" />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Customer Image
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Upload profile or policy image
                  </p>
                </div>

              </div>

              <label className="flex flex-col items-center justify-center border border-[#1f2937] rounded-2xl p-8 cursor-pointer hover:bg-[#111827] transition">

                <FiUploadCloud className="text-5xl text-blue-400 mb-4" />

                <span className="text-white font-medium">
                  Upload Image
                </span>

                <span className="text-gray-500 text-sm mt-2">
                  PNG, JPG supported
                </span>

                <input
                  type="file"
                  name="image"
                  onChange={handleFile}
                  className="hidden"
                />

              </label>

              {form.image && (
                <p className="text-green-400 text-sm mt-4">
                  {form.image.name}
                </p>
              )}

            </div>

          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-between items-center pt-6 border-t border-[#1f2937]">

            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              className="w-full sm:w-auto px-8 h-14 rounded-2xl border border-[#374151] text-gray-300 hover:bg-[#1f2937] transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 px-10 h-14 rounded-2xl text-white font-semibold shadow-lg transition"
            >
              Save Policy
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddUser;