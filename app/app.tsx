"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { setLocalStorage, getLocalStorage } from "./utils/localStorage"; // Adjust path as necessary
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar"; // Your Sidebar component
import { ToastProvider } from "./context/ToastContext"; // Adjust the import path as necessary

const SHOW_LOADER_KEY = "showLoader";
const THIRTY_MINUTES = 30 * 60 * 1000; // 30 minutes in milliseconds

export default function App({ children }: any) {
  const [showLoader, setShowLoader] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const searchParams = useSearchParams();
  const [editMode, setEditMode] = useState(false);

  const [ticketData, setTicketData] = useState(null); // To store the ticket data

  // Function to fetch ticket data based on ID
  const fetchTicketData = async (ticketId: string) => {
    const res = await fetch(`/api/Task/${ticketId}`);
    if (res.ok) {
      const data = await res.json();
      setTicketData(data.taskData); // Store the fetched ticket data
    }
  };

  // Detect URL parameter changes
  useEffect(() => {
    const taskId = searchParams.get("task"); // Get the 'task' param
    if (taskId === "new") {
      setIsSidebarOpen(true);
      setEditMode(false); // Open sidebar in create mode
    } else if (taskId) {
      setIsSidebarOpen(true);
      setEditMode(true); // Open sidebar in edit mode
      fetchTicketData(taskId); // Fetch ticket data for edit mode
    } else {
      setIsSidebarOpen(false); // Close sidebar if no 'task' param
    }
  }, [searchParams]);

  useEffect(() => {
    const loaderTime = getLocalStorage(SHOW_LOADER_KEY);
    const now = new Date().getTime();

    if (!loaderTime || now - parseInt(loaderTime) > THIRTY_MINUTES) {
      setShowLoader(true);
      setLocalStorage(SHOW_LOADER_KEY, now.toString()); // Store the current timestamp
    } else {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }

    if (showLoader) {
      const timer = setTimeout(() => setShowLoader(false), 3000); // Show loader for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  // // Detect query parameter changes and control the sidebar visibility
  // useEffect(() => {
  //   const taskParam = searchParams.get("task");
  //   if (taskParam === "new") {
  //     setIsSidebarOpen(true); // Open the sidebar if 'task=new' is in the URL
  //   } else {
  //     setIsSidebarOpen(false); // Close the sidebar if the param is not present
  //   }
  // }, [searchParams]);

  return (
    <div>
      {showLoader ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="text-white text-xl">Loading...</div>
        </div>
      ) : (
        <ToastProvider>
          <div className="flex flex-col h-screen max-h-screen">
            <Navbar />
            <div className="flex-grow overflow-y-auto bg-slate-600">
              {children}
            </div>
            {/* Render the sidebar based on the state */}

            {/* Render Sidebar based on the state */}
            {isSidebarOpen && <Sidebar data={ticketData} editMode={editMode} />}
            {/* Adjust editMode logic */}
          </div>
        </ToastProvider>
      )}
    </div>
  );
}
