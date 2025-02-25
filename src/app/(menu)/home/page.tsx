// /app/blogs/page.tsx
"use client";

import PostList from "@/components/PostList";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="p-6 ml-5 ">
      <SearchBar />

      <h1 className="text-2xl font-bold mb-6">All Blogs</h1>

      <PostList />
    </main>
  );
}
