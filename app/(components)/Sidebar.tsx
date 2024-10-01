"use client";
import React, { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";

function Sidebar({ isOpen, onClose, children, data, editMode }: any) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, [editMode]);

  return (
    <div
      className={`fixed top-0 text-[#000] right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ width: "500px" }}
    >
      <div className="p-4">
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="text-red-500 float-right"
        >
          Close
        </button>
        <TaskForm data={data} editMode={editMode} />
      </div>
    </div>
  );
}

export default Sidebar;
