"use client";
import React from "react";
import SignInbtn from "@/components/button/SignInbtn";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-green-500 h-full">
      <div className="flex flex-col items-center gap-4 justify-center sm:order-2 bg-green-300 rounded-b-[36px] sm:rounded-none sm:rounded-s-[36px]  flex-1 p-4">
        <Image
          src="/aboard.png"
          alt="Aboard Image"
          width={170} // ขนาด Default (สำหรับ Mobile)
          height={130}
          sizes="(max-width: 768px) 170px, 300px" // ความกว้างที่ปรับตามหน้าจอ
          className="object-contain sm:w-[300px] sm:h-[230px]" // Responsive ขนาด
        />

        <h1 className="text-white text-[24px] font-castoro  ">a Board</h1>
      </div>

      <div className="sm:order-1 flex-1 p-4   flex items-center justify-center  ">
        <div className="w-full  md:w-[384px]   ">
          <h2 className="text-white font-bold text-[28px]">Sign in</h2>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Username"
              className="p-2 border border-gray-300 rounded-md h-[40px]"
            />

            <SignInbtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
