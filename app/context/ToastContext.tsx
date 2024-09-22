"use client";
import React, { createContext, useContext, useState } from "react";
import { Toast } from "../(components)/Toast"; // Import the Toast component

type ToastContextType = {
  showToast: (message: string, type: "success" | "error" | "warning") => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toastData, setToastData] = useState({
    message: "",
    type: "success",
    show: false,
  });

  const showToast = (
    message: string,
    type: "success" | "error" | "warning"
  ) => {
    setToastData({ message, type, show: true });
  };

  const handleClose = () => {
    setToastData((prev) => ({ ...prev, show: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={toastData.message}
        type={toastData.type}
        show={toastData.show}
        onClose={handleClose}
      />
    </ToastContext.Provider>
  );
};
