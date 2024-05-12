import React from "react";
import Icons from "../assets/svgs";

function Navbar() {
  const { HomeIcon, TaskIcon } = Icons;
  return (
    <div className=" bg-lime-100 flex justify-between">
      <div className="flex gap-x-2">
        <HomeIcon />
        <TaskIcon />
      </div>
      <div>logout</div>
    </div>
  );
}

export default Navbar;
