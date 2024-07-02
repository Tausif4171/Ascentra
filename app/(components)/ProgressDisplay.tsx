import React from "react";

function ProgressDisplay({progress}:any) {
  return (
    <div className=" bg-slate-200 rounded-full w-full">
      <div className={` bg-emerald-200 w-[${progress}%] rounded-full`}>
        <div className="text-emerald-200">s</div>
      </div>
    </div>
  );
}

export default ProgressDisplay;
