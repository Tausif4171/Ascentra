"use client";
import { useEffect, useState } from "react";
import TicketCard from "./(components)/TicketCard";
import TaskSchema from "./interface/Task";

const fetchTasks = async () => {
  try {
    const res = await fetch("/api/Task", {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return { task: [] };
  }
};

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState<TaskSchema[]>([]);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };

    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data.task);
    };

    checkAuth();
    if (isLoggedIn) {
      loadTasks();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <div>Please login to view tasks.</div>;
  }

  return (
    <div className="m-10">
      <h3 className="text-[#fff] font-semibold text-[24px] mb-4">Software</h3>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-8">
        {tasks
          ?.filter((data) => data.category === "Software")
          .map((item, index) => (
            <TicketCard item={item} key={index} />
          ))}
      </div>

      <h3 className="text-[#fff] font-semibold text-[24px] mb-4">Hardware</h3>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-8">
        {tasks
          ?.filter((data) => data.category === "Hardware")
          .map((item, index) => (
            <TicketCard item={item} key={index} />
          ))}
      </div>
    </div>
  );
}
