import React from "react";
import Icons from "../assets/svgs";
import Link from "next/link";

function Navbar() {
  const { HomeIcon, TaskIcon, LogoutIcon } = Icons;
  return (
    <div className=" bg-lime-100 flex justify-between py-4 px-6">
      <div className="flex gap-x-4">
        <Link href="/">
          <div className="icon">
            <HomeIcon />
          </div>
        </Link>
        <Link href="/TicketPage/123">
          <div className="icon">
            <TaskIcon />
          </div>
        </Link>
      </div>
      <div>
        <LogoutIcon />
      </div>
    </div>
  );
}

export default Navbar;
