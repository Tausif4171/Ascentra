import React from "react";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

function TicketCard() {
  return (
    <div className=" bg-white rounded-xl h-auto p-4 hover:bg-slate-50 cursor-pointer">
      <div className="flex justify-between">
        <PriorityDisplay />
        <DeleteBlock />
      </div>
      <h2 className="mt-2">Title goes here</h2>
      <hr className=" h-px text-sky-300 w-full"></hr>
      <p className="mt-2">Description goes here</p>
      <p className="mt-2">12/05/2024 12:40 PM</p>
      <div
        className="flex justify-between w-full mt-2"
        style={{ alignItems: "center" }}
      >
        <div className="w-64">
          <ProgressDisplay />
        </div>
        <div className="">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
