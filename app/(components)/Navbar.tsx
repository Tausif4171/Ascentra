"use client";
import React from "react";
import Icons from "../assets/svgs";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const { HomeIcon, TaskIcon, LogoutIcon } = Icons;
  const token = localStorage.getItem("token");
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");

    router.push("/auth/Login");
    router.refresh();
  }

  return (
    <div className=" bg-lime-100 flex justify-between py-4 px-10">
      <div className="flex gap-x-4">
        <Link href="/">
          <div className="icon">
            <HomeIcon />
          </div>
        </Link>
        <Link href="/TicketPage/new">
          <div className="icon">
            <TaskIcon />
          </div>
        </Link>
      </div>
      {/* <div>
        <LogoutIcon />
      </div> */}

      {token ? (
        <h4 className="font-medium cursor-pointer" onClick={handleLogout}>
          Log out
        </h4>
      ) : (
        <Link href={"/auth/Login"}>
          <h4 className="font-medium cursor-pointer">Log in</h4>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
