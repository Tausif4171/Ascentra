"use client";
import { useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "./utils/localStorage"; // Adjust path as necessary
import Navbar from "./(components)/Navbar";
import { ToastProvider } from "./context/ToastContext"; // Adjust the import path as necessary

const SHOW_LOADER_KEY = "showLoader";
const THIRTY_MINUTES = 30 * 60 * 1000; // 30 minutes in milliseconds

export default function App({ children }: any) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const loaderTime = getLocalStorage(SHOW_LOADER_KEY);
    const now = new Date().getTime();

    // Check if it's been more than 30 minutes since the last loader display
    if (!loaderTime || now - parseInt(loaderTime) > THIRTY_MINUTES) {
      setShowLoader(true);
      setLocalStorage(SHOW_LOADER_KEY, now.toString()); // Store the current timestamp
    } else {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }

    // Hide loader after 3 seconds
    if (showLoader) {
      const timer = setTimeout(() => setShowLoader(false), 3000); // Show for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

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
          </div>
        </ToastProvider>
      )}
    </div>
  );
}
