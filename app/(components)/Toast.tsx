import { useState, useEffect } from "react";

type ToastProps = {
  message: string;
  type: string;
  show: boolean;
  onClose: () => void;
};

export const Toast = ({ message, type, show, onClose }: ToastProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Toast disappears after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  let bgColor = "";
  if (type === "success") bgColor = "bg-green-500";
  if (type === "error") bgColor = "bg-red-500";
  if (type === "warning") bgColor = "bg-yellow-500";

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded-lg text-white ${bgColor}`}
    >
      {message}
    </div>
  );
};
