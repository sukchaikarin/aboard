// /app/blogs/page.tsx
"use client";

import PostList from "@/components/PostList";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="mt-5  flex flex-col gap-6">
      <SearchBar />
      <PostList />
    </main>
  );
}
