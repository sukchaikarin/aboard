"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import React Icons
import { FiHome, FiEdit } from "react-icons/fi"; // Feather Icons

// เมนูข้อมูล
const menuItems = [
  {
    label: "Home",
    icon: <FiHome />, // Feather Icon Home
    href: "/home", // เส้นทาง URL
  },
  {
    label: "Our Blog",
    icon: <FiEdit />, // Feather Icon Blog
    href: "/our-blog", // เส้นทาง URL
  },
];

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname(); // ดึง path ปัจจุบัน

  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-16 left-0 w-64 h-full  text-gray-800 transform transition-transform duration-300 z-30 md:translate-x-0 bg-green-100`}
    >
      <div className="p-4">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              {/* Button-style Link */}
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg transition ${
                  pathname === item.href
                    ? "font-bold"
                    : " text-gray-800 hover:bg-green-500 hover:text-white"
                }`}
              >
                {/* Icon */}
                <div
                  className={`text-xl ${
                    pathname === item.href ? "font-bold" : ""
                  }`}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <span
                  className={`${
                    pathname === item.href ? "font-bold" : "text-gray-800"
                  }hover:text-white`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
