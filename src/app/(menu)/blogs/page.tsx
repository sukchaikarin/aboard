"use client";
import { blogs } from "@/data/blog";
import { Select } from "antd";
import Link from "next/link";

export default function BlogOverview() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <main className="p-6">
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <h1 className="text-2xl font-bold mb-6">All Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link
              href={`/blogs/${blog.id}`}
              className="block p-4 border border-gray-300 rounded-md shadow-md hover:bg-gray-100 transition"
            >
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
