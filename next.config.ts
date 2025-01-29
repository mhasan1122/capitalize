import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "res.cloudinary.com", // Add this line
    ],
  },
};

export default nextConfig;