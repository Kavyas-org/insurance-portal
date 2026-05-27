import { useEffect, useState } from "react";
import {
  getInsurance,
  deleteInsurance,
} from "../../services/api";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  FiEye,
  FiTrash2,
  FiPlus,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

import Skeleton from "../../components/common/Skeleton";
import NoData from "../../components/common/NoData";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await getInsurance({
        page: 1,
        limit: 50,
      });

      setData(res.data.data);

    } catch (err) {
      toast.error("Error fetching policies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // STATS
  const total = data.length;

  const approved = data.filter(
    (i) => i.status === "Approved"
  ).length;

  const pending = data.filter(
    (i) => i.status === "Pending"
  ).length;

  const rejected = data.filter(
    (i) => i.status === "Rejected"
  ).length;

  const recent = [...data].slice(0, 10);

 

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <div className="inline-flex items-center gap-2 bg-[#172554] border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-4">
            <FiShield />
            Insurance Dashboard
          </div>

          <h1 className="text-4xl font-bold text-white">
            Dashboard Overview
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Monitor and manage all insurance policies
          </p>

        </div>

        <button
          onClick={() => navigate("/admin/add-policy")}
          className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] hover:opacity-90 transition text-white font-semibold flex items-center justify-center gap-3 shadow-xl"
        >
          <FiPlus size={20} />
          Add Policy
        </button>

      </div>

      {/* STATS */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* TOTAL */}
        <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-7 shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Total Policies
              </p>

              <h2 className="text-4xl font-bold text-white mt-4">
                {total}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <FiShield className="text-blue-400 text-3xl" />
            </div>

          </div>

        </div>

        {/* APPROVED */}
        <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-7 shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Approved
              </p>

              <h2 className="text-4xl font-bold text-green-400 mt-4">
                {approved}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
              <FiCheckCircle className="text-green-400 text-3xl" />
            </div>

          </div>

        </div>

        {/* PENDING */}
        <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-7 shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Pending
              </p>

              <h2 className="text-4xl font-bold text-yellow-400 mt-4">
                {pending}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
              <FiClock className="text-yellow-400 text-3xl" />
            </div>

          </div>

        </div>

        {/* REJECTED */}
        <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-7 shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-400 text-sm">
                Rejected
              </p>

              <h2 className="text-4xl font-bold text-red-400 mt-4">
                {rejected}
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center">
              <FiXCircle className="text-red-400 text-3xl" />
            </div>

          </div>

        </div>

      </div>

      {/* TABLE CARD */}
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl shadow-2xl overflow-hidden">

        {/* TABLE HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 px-8 py-6 border-b border-[#1f2937]">

          <div>

            <h3 className="text-2xl font-semibold text-white">
              Recent Policies
            </h3>

            <p className="text-gray-400 mt-1">
              Latest insurance activities
            </p>

          </div>

          <button
            onClick={() => navigate("/admin/policies")}
            className="h-12 px-6 rounded-xl bg-[#1e293b] hover:bg-[#2563eb] transition text-white"
          >
            View All
          </button>

        </div>

        {/* CONTENT */}
        <div className="overflow-x-auto">

          {loading ? (
            <div className="p-8">
              <Skeleton />
            </div>
          ) : recent.length === 0 ? (
            <NoData
              title="No Policies Found"
              description="There are currently no insurance policies available."
            />
          ) : (
            <table className="w-full min-w-[900px]">

              <thead className="bg-[#0f172a]">

                <tr className="text-left text-gray-400 text-sm">

                  <th className="px-8 py-5 font-medium">
                    Customer
                  </th>

                  <th className="px-6 py-5 font-medium">
                    Policy Number
                  </th>

                  <th className="px-6 py-5 font-medium">
                    Ref ID
                  </th>

                  <th className="px-6 py-5 font-medium">
                    Status
                  </th>

                  <th className="px-8 py-5 font-medium text-center">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {recent.map((item) => (

                  <tr
                    key={item._id}
                    className="border-t border-[#1f2937] hover:bg-[#0f172a]/60 transition"
                  >

                    {/* CUSTOMER */}
                    <td className="px-8 py-5">

                      <div className="flex items-center gap-4">

                       <img
  src={
    item.image
      ? `${import.meta.env.VITE_API_URL.replace("/api", "")}/${item.image}`
      : `https://ui-avatars.com/api/?name=${item.name}&background=2563eb&color=fff`
  }
  alt={item.name}
  className="w-14 h-14 rounded-2xl object-cover border border-[#1f2937]"
/>

                        <div>

                          <p className="text-white font-semibold">
                            {item.name}
                          </p>

                          <p className="text-gray-500 text-sm mt-1">
                            {item.insuranceType}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* POLICY */}
                    <td className="px-6 py-5 text-gray-300 font-medium">
                      {item.policyNumber}
                    </td>

                    {/* REF ID */}
                    <td className="px-6 py-5 text-gray-400 font-mono">
                      {item.refId}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">

                      <span
                        className={`px-4 py-2 rounded-full text-xs font-semibold
                        ${
                          item.status === "Approved"
                            ? "bg-green-500/10 text-green-400"
                            : item.status === "Pending"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    {/* ACTIONS */}
                    <td className="px-8 py-5">

                      <div className="flex items-center justify-center gap-3">

                        {/* VIEW */}
                        <button
                          onClick={() =>
                            navigate(`/admin/policy/${item._id}`)
                          }
                          className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition flex items-center justify-center"
                        >
                          <FiEye size={18} />
                        </button>

                        {/* DELETE */}
                        <button
                          onClick={async () => {
                            if (
                              !window.confirm(
                                "Delete this policy?"
                              )
                            )
                              return;

                            await deleteInsurance(item._id);

                            toast.success("Policy deleted");

                            fetchData();
                          }}
                          className="w-11 h-11 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
                        >
                          <FiTrash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;