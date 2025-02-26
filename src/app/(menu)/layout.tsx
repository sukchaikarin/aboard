"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState, useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ฟังก์ชันตรวจสอบขนาดหน้าจอ
  const handleResize = () => {
    const isScreenDesktop = window.matchMedia("(min-width: 768px)").matches;
    setIsSidebarOpen(isScreenDesktop); // เปิด Sidebar หากเป็น Desktop
  };

  // ตั้งค่า Event Listener
  useEffect(() => {
    handleResize(); // เรียกใช้ตอนโหลดครั้งแรก
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // ลบ Listener เมื่อ Component ถูก unmount
    };
  }, []);

  return (
    <div className="h-screen flex bg-gray-100 text-gray-800">
      {/* Navbar */}
      <Navbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <main
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        } pt-16 p-4`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
