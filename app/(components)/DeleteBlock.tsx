"use client";
import React from "react";
import Icons from "../assets/svgs";

function DeleteBlock({ id }: { id: string }) {
  const { CancelIcon } = Icons;

  async function deleteTask() {
    const res = await fetch(`/api/Task/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("Delete successfully!");
    } else {
      console.error("Delete failed!");
    }
  }

  return (
    <div>
      <CancelIcon onClick={deleteTask} />
    </div>
  );
}

export default DeleteBlock;
