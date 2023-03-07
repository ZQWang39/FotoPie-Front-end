/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: true
  // },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.BACKEND_API}${process.env.BACKEND_PORT}/api/:path*`, // http://localhost:9090/ => api/
      },
    ];
  },
  env: {
    REQUEST_TIMEOUT: 10000,
  },
};
