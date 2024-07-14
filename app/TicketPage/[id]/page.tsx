import { TaskForm } from "@/app/(components)/TaskForm";
import React from "react";

const getDataBasedOnId = async (id: number) => {
  const res = await fetch(`/api/Task/${id}`, {
    cache: "no-store",
  });
  console.log({ res });
  if (res.ok) {
    return res.json();
  }
};

async function TicketPage({ params }: any) {
  console.log({ params });
  const editMode = params.id !== "new" ? true : false;
  if (editMode) {
    const ticketData = await getDataBasedOnId(params.id);
    console.log({ ticketData });
  }
  return (
    <div>
      <TaskForm />
    </div>
  );
}

export default TicketPage;
