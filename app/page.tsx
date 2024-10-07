"use client";
import { useEffect, useState } from "react";
import TicketCard from "./(components)/TicketCard";
import TaskSchema from "./interface/Task";
import BotIcon from "./assets/svgs";
import Icons from "./assets/svgs";

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
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const { BotIcon } = Icons;

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    const loadTasks = async () => {
      setLoading(true);
      const data = await fetchTasks();
      setTasks(data.task);
      setLoading(false);
    };

    checkAuth();
    if (isLoggedIn) {
      loadTasks();
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center mt-[260px]">
        <BotIcon className="w-14 h-14 mb-4" />
        <h2 className="text-xl text-white font-bold">
          Welcome to Task Manager
        </h2>
        <p className="mt-2 text-[#b4b0b0]">Please login to view tasks.</p>
      </div>
    );
  }

  const filteredTasks =
    selectedDepartment === "All"
      ? tasks
      : tasks.filter((task) => task.department === selectedDepartment);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="m-10">
      {/* <h3 className="text-[#fff] font-semibold text-[24px] mb-4">Tasks</h3> */}
      <select
        className="mb-4 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        onChange={(e) => setSelectedDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="Development">Development</option>
        <option value="Design">Design</option>
        <option value="QA">QA</option>
        <option value="Sales">Sales</option>
      </select>

      {["Development", "Design", "QA", "Sales"].map((department) => {
        const departmentTasks = filteredTasks.filter(
          (task) => task.department === department
        );

        return (
          <div key={department} className="mb-8">
            <h3 className="text-[#fff] font-semibold text-[24px] mb-2">
              {department}
            </h3>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {departmentTasks.length > 0 ? (
                departmentTasks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                  >
                    <TicketCard item={item} />
                  </div>
                ))
              ) : (
                <div className="text-[#b4b0b0]">No tasks available</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
