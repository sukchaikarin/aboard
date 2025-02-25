import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

// Interface สำหรับบอกว่า Prop `isHightLight` เป็นค่าเลือกได้ (optional)
interface StarProps {
  isHightLight?: boolean; // ใช้ ? เพื่อบอกว่า prop นี้เป็น optional
  className?: string;
}

const Star: React.FC<StarProps> = ({ isHightLight = false , className }) => {
  return (
    <div className={className}>
      {isHightLight ? (
        <IoIosStar className="text-golden lg:text-lg" />
      ) : (
        <IoIosStarOutline className="text-gray-300 lg:text-lg" />
      )}
    </div>
  );
};

export default Star;
