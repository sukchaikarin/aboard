"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-full flex bg-green-100 text-gray-900">
      {/* Navbar */}
      <Navbar onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Content */}
      <main
        className={`flex-grow transition-all duration-300 ${
          !isSidebarOpen ? "ml-0 md:ml-64" : "ml-0"
        } pt-16 p-4`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
