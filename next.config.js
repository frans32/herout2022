module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./utils/sitemap.js");
    }

    return config;
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [200, 400, 640, 750, 828, 1080, 1200, 1440, 1920],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  async redirects() {
    return [
      {
        source:
          "/artikel/liefdesbrief-aan-lettertipes-i-die-herout-i-en-die-dinge-waaraan-ons-kan-vasklou\u0029",
        destination:
          "/artikel/liefdesbrief-aan-lettertipes-i-die-herout-i-en-die-dinge-waaraan-ons-kan-vasklou",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ogimg/:image*",
        destination: "/_next/image?url=:image*&w=750&q=75",
      },
    ];
  },
};
