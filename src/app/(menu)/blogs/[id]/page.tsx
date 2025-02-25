// /app/blogs/[id]/page.tsx

import { blogs } from "@/data/blog";
import { notFound } from "next/navigation"; // ใช้สำหรับ handle กรณีไม่พบข้อมูล

interface BlogDetailProps {
  params: { id: string }; // Params ที่มาจาก dynamic route
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = blogs.find((b) => b.id === parseInt(params.id, 10)); // หาข้อมูลตาม ID

  if (!blog) {
    notFound(); // Redirect ไปยัง 404 Page หากไม่เจอ Blog ที่ระบุ
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      <a href="/blogs" className="text-sm font-semibold text-blue-500">
        ← Back to Blogs
      </a>
    </div>
  );
}
