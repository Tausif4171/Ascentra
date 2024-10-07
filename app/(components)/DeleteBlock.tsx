"use client";
import React from "react";
import Icons from "../assets/svgs";
import { useToast } from "../context/ToastContext";

function DeleteBlock({ id }: { id: string }) {
  const { showToast } = useToast();
  const { CancelIcon } = Icons;

  async function deleteTask() {
    const res = await fetch(`/api/Task/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("Delete successfully!");
      showToast("Successfully deleted", "success");
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
