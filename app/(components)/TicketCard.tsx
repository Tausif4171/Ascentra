import React from "react";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

function TicketCard({ item, index }: any) {
  console.log('check',item)
  return (
    <div className=" bg-white rounded-xl h-auto p-4 hover:bg-slate-50 cursor-pointer">
      <div className="flex justify-between">
        <PriorityDisplay priority={item.priority} />
        <DeleteBlock />
      </div>
      <h2 className="mt-2">{item.title}</h2>
      <hr className=" h-px text-sky-300 w-full"></hr>
      <p className="mt-2">{item.description}</p>
      <p className="mt-2">1{item.createdAt}</p>
      <div
        className="flex justify-between w-full mt-2"
        style={{ alignItems: "center" }}
      >
        <div className="w-64">
          <ProgressDisplay progress={item.progress} />
        </div>
        <div className="">
          <StatusDisplay status={item.status} />
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
