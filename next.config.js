/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // The case-study OG images render per request and read their fonts from
    // assets/fonts with fs, which the tracer can't see; ship them explicitly.
    outputFileTracingIncludes: {
      "/work/[slug]/opengraph-image": ["./assets/fonts/**"],
      "/opengraph-image": ["./assets/fonts/**"],
    },
  },
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
