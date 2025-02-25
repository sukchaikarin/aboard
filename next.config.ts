import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"], // เพิ่มการ Optimize สำหรับ Chakra UI
  },
};

export default nextConfig;
