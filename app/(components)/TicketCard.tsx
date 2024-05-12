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
      <h2>Title goes here</h2>
      <hr className=" h-px text-sky-300 w-full"></hr>
      <p>Description goes here</p>
      <p>12/05/2024 12:40 PM</p>
      <div className="flex justify-between">
        <ProgressDisplay />
        <StatusDisplay />
      </div>
    </div>
  );
}

export default TicketCard;
