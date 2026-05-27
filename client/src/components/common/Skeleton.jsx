const Skeleton = () => {
  return (
    <div className="space-y-6 animate-pulse">

      {/* CARD */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6">

        {/* TOP */}
        <div className="flex items-center gap-4 mb-6">

          {/* AVATAR */}
          <div className="w-14 h-14 rounded-full bg-[#1f2937]"></div>

          {/* TEXT */}
          <div className="flex-1 space-y-3">
            <div className="h-4 rounded bg-[#1f2937] w-40"></div>
            <div className="h-3 rounded bg-[#1f2937] w-28"></div>
          </div>

        </div>

        {/* CONTENT */}
        <div className="space-y-4">

          <div className="h-4 rounded bg-[#1f2937] w-full"></div>

          <div className="h-4 rounded bg-[#1f2937] w-[90%]"></div>

          <div className="h-4 rounded bg-[#1f2937] w-[75%]"></div>

        </div>

        {/* BUTTON */}
        <div className="mt-8 h-11 rounded-xl bg-[#1f2937] w-36"></div>

      </div>

      {/* CARD */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-2xl p-6">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-full bg-[#1f2937]"></div>

          <div className="flex-1 space-y-3">
            <div className="h-4 rounded bg-[#1f2937] w-52"></div>
            <div className="h-3 rounded bg-[#1f2937] w-32"></div>
          </div>

        </div>

        <div className="space-y-4">

          <div className="h-4 rounded bg-[#1f2937] w-full"></div>

          <div className="h-4 rounded bg-[#1f2937] w-[85%]"></div>

          <div className="h-4 rounded bg-[#1f2937] w-[70%]"></div>

        </div>

        <div className="mt-8 h-11 rounded-xl bg-[#1f2937] w-40"></div>

      </div>

    </div>
  );
};

export default Skeleton;