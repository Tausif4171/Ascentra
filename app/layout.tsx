import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import { ToastProvider } from "./context/ToastContext"; // Adjust the import path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Watcher",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <div className="flex flex-col h-screen max-h-screen">
            <Navbar />
            <div className="flex-grow overflow-y-auto bg-slate-600">
              {children}
            </div>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
