/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/storybook",
        destination: "https://dwest-storybook-deploy.vercel.app/",
        permanent: false,
      },
      {
        source: "/storybook/:path*",
        destination: "https://dwest-storybook-deploy.vercel.app/:path*",
        permanent: false,
      },
    ];
  },
};
module.exports = nextConfig;
