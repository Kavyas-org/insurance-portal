import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInsuranceById, updateInsurance } from "../../services/api";
import toast from "react-hot-toast";

const UserTracking = () => {
  const { id } = useParams();
  const [tracking, setTracking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getInsuranceById(id);
        setTracking(res.data.tracking || []);
      } catch {
        toast.error("Failed to load tracking");
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (index, value) => {
    const updated = [...tracking];
    updated[index].status = value;
    setTracking(updated);
  };

  const handleSave = async () => {
    try {
      await updateInsurance(id, { tracking });
      toast.success("Tracking updated");
    } catch {
      toast.error("Update failed");
    }
  };

  const completed = tracking.filter(t => t.status === "Done").length;
  const progress = tracking.length
    ? (completed / tracking.length) * 100
    : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Tracking Timeline
        </h1>
        <p className="text-gray-400 text-sm">
          Manage and update policy progress
        </p>
      </div>

      {/* CARD */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6">

        {/* PROGRESS */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress</span>
            <span>{completed} / {tracking.length}</span>
          </div>

          <div className="w-full bg-[#0f172a] h-2 rounded-full">
            <div
              className="bg-[#10b981] h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="space-y-8">

          {tracking.map((step, index) => {
            const isDone = step.status === "Done";

            return (
              <div key={index} className="flex gap-5">

                {/* LEFT */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                    ${isDone ? "bg-[#10b981] text-white" : "bg-[#1f2937] text-gray-400"}
                  `}>
                    {isDone ? "✓" : index + 1}
                  </div>

                  {index !== tracking.length - 1 && (
                    <div className={`w-[2px] flex-1 mt-2
                      ${isDone ? "bg-[#10b981]" : "bg-[#1f2937]"}
                    `}></div>
                  )}
                </div>

                {/* CARD */}
                <div className="flex-1 bg-[#0f172a] border border-[#1f2937] rounded-xl p-5">

                  <div className="flex justify-between items-center">

                    <div>
                      <h3 className="text-white text-sm font-semibold">
                        {step.title}
                      </h3>

                      <p className={`text-xs mt-1 ${
                        isDone ? "text-green-400" : "text-gray-500"
                      }`}>
                        {isDone ? "Completed" : "Pending"}
                      </p>
                    </div>

                    <select
                      value={step.status}
                      onChange={(e) =>
                        handleChange(index, e.target.value)
                      }
                      className="bg-[#111827] border border-[#1f2937] text-white px-3 py-1 rounded-lg text-sm"
                    >
                      <option>Pending</option>
                      <option>Done</option>
                    </select>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* SAVE */}
        <button
          onClick={handleSave}
          className="w-full mt-8 bg-[#2563eb] hover:bg-[#1d4ed8] py-3 rounded-lg text-white font-medium"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
};

export default UserTracking;