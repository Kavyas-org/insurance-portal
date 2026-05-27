import { useEffect, useState } from "react";

import {
  getInsurance,
  deleteInsurance,
} from "../../services/api";

import { useNavigate } from "react-router-dom";

import {
  FiSearch,
  FiEye,
  FiTrash2,
  FiPlus,
  FiShield,
} from "react-icons/fi";

import toast from "react-hot-toast";

import Skeleton from "../../components/common/Skeleton";
import NoData from "../../components/common/NoData";

const Users = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await getInsurance({
        page,
        limit: 8,
        search,
        status,
      });

      setData(res.data.data);
      setTotalPages(res.data.totalPages);

    } catch (err) {
      console.log(err);

      toast.error("Failed to load policies");

    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this policy?"
    );

    if (!confirmDelete) return;

    try {
      await deleteInsurance(id);

      toast.success("Deleted successfully");

      fetchData();

    } catch {
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search, status]);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <div className="inline-flex items-center gap-2 bg-[#172554] border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-4">

            <FiShield />

            Insurance Management

          </div>

          <h1 className="text-4xl font-bold text-white">
            Insurance Policies
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Manage and track all insurance policies
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

      {/* FILTER BAR */}
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl p-5 shadow-2xl">

        <div className="flex flex-col lg:flex-row gap-5">

          {/* SEARCH */}
          <div className="relative flex-1">

            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

            <input
              type="text"
              placeholder="Search by customer name or reference ID..."
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
              className="w-full h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl pl-14 pr-5 text-white placeholder:text-gray-500 focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition"
            />

          </div>

          {/* FILTER */}
          <select
            value={status}
            onChange={(e) => {
              setPage(1);

              setStatus(
                e.target.value === "All"
                  ? ""
                  : e.target.value
              );
            }}
            className="h-14 bg-[#0f172a] border border-[#1f2937] rounded-2xl px-5 text-white focus:border-[#2563eb] focus:ring-4 focus:ring-blue-500/10 outline-none transition min-w-[220px]"
          >
            <option value="">
              All Status
            </option>

            <option>
              Pending
            </option>

            <option>
              Approved
            </option>

            <option>
              Rejected
            </option>

          </select>

        </div>

      </div>

      {/* TABLE CARD */}
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-[#1f2937] rounded-3xl shadow-2xl overflow-hidden">

        {/* TABLE HEADER */}
        <div className="px-8 py-6 border-b border-[#1f2937]">

          <h3 className="text-2xl font-semibold text-white">
            Policy Records
          </h3>

          <p className="text-gray-400 mt-2">
            Complete list of customer insurance policies
          </p>

        </div>

        {/* CONTENT */}
        <div className="overflow-x-auto">

          {loading ? (
            <div className="p-8">
              <Skeleton />
            </div>
          ) : data.length === 0 ? (
            <NoData
              title="No Policies Found"
              description="No insurance policies matched your current search."
            />
          ) : (
            <table className="w-full min-w-[950px]">

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

                {data.map((item) => {

                  const imageUrl = item.image
                    ? `${import.meta.env.VITE_API_URL.replace("/api", "")}/${item.image}`
                    : `https://ui-avatars.com/api/?name=${item.name}&background=2563eb&color=fff`;

                  return (
                    <tr
                      key={item._id}
                      className="border-t border-[#1f2937] hover:bg-[#0f172a]/60 transition"
                    >

                      {/* CUSTOMER */}
                      <td className="px-8 py-5">

                        <div className="flex items-center gap-4">

                          <img
                            src={imageUrl}
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
                            onClick={() =>
                              handleDelete(item._id)
                            }
                            className="w-11 h-11 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
                          >
                            <FiTrash2 size={18} />
                          </button>

                        </div>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>
          )}

        </div>

      </div>

      {/* PAGINATION */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center gap-3 flex-wrap">

          {Array.from({
            length: totalPages,
          }).map((_, i) => (

            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-12 h-12 rounded-2xl text-sm font-semibold transition
              ${
                page === i + 1
                  ? "bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white shadow-lg"
                  : "bg-[#111827] border border-[#1f2937] text-gray-300 hover:bg-[#1f2937]"
              }`}
            >
              {i + 1}
            </button>

          ))}

        </div>
      )}

    </div>
  );
};

export default Users;