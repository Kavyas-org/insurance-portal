import { FiInbox } from "react-icons/fi";

const NoData = ({
  title = "No Data Found",
  description = "There is currently no data available to display.",
}) => {
  return (
    <div className="w-full flex items-center justify-center py-20">

      <div className="max-w-md w-full bg-[#111827] border border-[#1f2937] rounded-3xl p-10 text-center shadow-2xl">

        {/* ICON */}
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] flex items-center justify-center shadow-lg mb-6">

          <FiInbox className="text-white text-4xl" />

        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-4 leading-8 text-lg">
          {description}
        </p>

      </div>

    </div>
  );
};

export default NoData;