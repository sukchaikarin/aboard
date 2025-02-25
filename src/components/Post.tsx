import React from "react";
import Star from "./Star";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

interface PostProps {
  id: string;
  userName: string;
  category: string;
  title: string;
  description: string;
  comments: number;
  isStarred?: boolean;
  isLogin?: boolean;
  onEdit?: () => void; // Callback ฟังก์ชันสำหรับการแก้ไข
  onDelete?: () => void; // Callback ฟังก์ชันสำหรับการลบ
}

const Post: React.FC<PostProps> = ({
  userName,
  category,
  title,
  description,
  comments,
  isStarred,
  isLogin,
  onEdit,
  onDelete,
  id,
}) => {
  return (
    <Link href={`/blogs/${id}`}>
      <div className="w-full mx-auto bg-transparent p-[20px]  flex-col ">
        <div className="w-full flex justify-between relative">
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaUserCircle className="text-3xl" />
                <h3 className="text-lg text-gray-300">{userName}</h3>
              </div>

              {/* Conditional Rendering for Star or Edit/Delete Buttons */}
              {isLogin ? (
                // ถ้า Login (แสดงปุ่มแก้ไขและลบ)
                <div className="absolute top-0 right-2 flex gap-2">
                  <button
                    onClick={onEdit} // Callback ฟังก์ชันแก้ไข
                    className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={onDelete} // Callback ฟังก์ชันลบ
                    className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                // ถ้าไม่ Login (แสดง Star)
                <Star
                  isHightLight={isStarred}
                  className="absolute top-[-10px] right-[-8px]"
                />
              )}
            </div>
            <div>
              <span className="inline-block bg-slate-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full mt-1">
                {category}
              </span>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <h2 className="mt-3 text-gray-900 text-lg font-semibold">{title}</h2>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          <span>{comments} Comments</span>
        </div>
      </div>
    </Link>
  );
};

export default Post;
