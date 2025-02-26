import { Suspense } from "react";
import Loading from "./loading";
import BlogDetailClient from "@/components/BlogDetailContent"; // Client Component

export default function BlogDetailPage() {
  return (
    <Suspense fallback={<Loading />}>
      <BlogDetailClient /> {/* สร้าง Client Component เพื่อรับ `params` */}
    </Suspense>
  );
}
