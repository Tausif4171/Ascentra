import React from "react";
import Icons from "../assets/svgs";

function Navbar() {
  const { HomeIcon, TaskIcon, LogoutIcon } = Icons;
  return (
    <div className=" bg-lime-100 flex justify-between py-4 px-6">
      <div className="flex gap-x-4">
        <div className="icon">
          <HomeIcon />
        </div>
        <div className="icon">
          <TaskIcon />
        </div>
      </div>
      <div>
        <LogoutIcon />
      </div>
    </div>
  );
}

export default Navbar;
