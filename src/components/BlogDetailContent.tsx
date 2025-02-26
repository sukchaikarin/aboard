"use client"; // ระบุว่าเป็น Client Component

import { blogs } from "@/data/blog";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

// ดึงข้อมูล Blog (Mock)

export default function BlogDetailClient() {
  const params = useParams(); // ใช้ useParams() เพื่ออ่าน [id]
  console.log("Params from useParams:", params);

  const blogId = parseInt(params.id as string, 10); // แปลง id เป็น Number
  const blog = blogs.find((b) => b.id === blogId); // หา Blog ในข้อมูล

  // หากไม่พบ Blog ให้โยน 404
  if (!blog) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <a href="/home" className="text-sm font-semibold text-blue-500">
        ← Back to Blogs
      </a>
    </div>
  );
}
