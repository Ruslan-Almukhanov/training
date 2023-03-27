/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "image2.jdomni.in",
      "image3.jdomni.in",
      "localhost",
      "fakestoreapi.com",
    ],
  },
};

module.exports = nextConfig;
