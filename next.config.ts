import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
  reactStrictMode: true,
    images: {
        unoptimized: true, // Agar gambar bisa di-load di Netlify tanpa optimasi Next.js
      },
};

export default nextConfig;
