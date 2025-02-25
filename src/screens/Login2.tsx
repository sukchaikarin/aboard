"use client";

import Star from "@/components/Star";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
const Login = () => {
  return (
    <div className="flex flex-col md:flex-row bg-green-500">
      <div className="md:order-2  bg-green-300 rounded-lg flex-1 p-4 ">
        asdasd
        <IoIosStarOutline />
        <IoIosStar className="text-golden lg:text-lg" />
        <Star />
        <Star isHightLight={true} />
      </div>

      <div className="md:order-1 bg-green-500 flex-1 p-4"></div>
    </div>
  );
};
export default Login;
