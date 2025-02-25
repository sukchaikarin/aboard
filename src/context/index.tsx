"use client";

import { User } from "@/types/user";
import React, { createContext, useState, useContext, useEffect } from "react";

// ประกาศ Type สำหรับ Context
interface AppContextType {
  user: User | null; // user สามารถเป็น `User` หรือ `null`
  login: (userData: User) => void; // กำหนด function login
  logout: () => void; // กำหนด function logout
}

// สร้าง Context พร้อมกำหนดประเภท
const AppContext = createContext<AppContextType | undefined>(undefined);

// สร้าง Provider
export function UseContext({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null); // กำหนดประเภท user เป็น `User | null`

  // โหลดข้อมูลจาก localStorage เมื่อ Component เริ่มต้น
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser) as User); // แปลงข้อมูล JSON -> User
    }
  }, []);

  // ฟังก์ชันสำหรับการ Login
  const login = (userData: User) => {
    setUser(userData); // ตั้งค่าผู้ใช้ใน state
    localStorage.setItem("user", JSON.stringify(userData)); // บันทึกข้อมูลใน localStorage
  };

  // ฟังก์ชันสำหรับ Logout
  const logout = () => {
    setUser(null); // ล้างสถานะผู้ใช้
    localStorage.removeItem("user"); // ลบข้อมูลผู้ใช้จาก localStorage
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook สำหรับเรียกใช้ Context
export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}
