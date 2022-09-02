module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer && false) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
        "react/jsx-runtime": "preact/compat/jsx-runtime",
      });
    }

    return config;
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [200, 400, 640, 750, 828, 1080, 1200, 1440, 1920],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 7200,
  },
  i18n: {
    locales: ["af"],
    defaultLocale: "af",
  },
  async redirects() {
    return [
      {
        source:
          "/artikel/liefdesbrief-aan-lettertipes-i-die-herout-i-en-die-dinge-waaraan-ons-kan-vaskloue",
        destination:
          "/artikel/liefdesbrief-aan-lettertipes-i-die-herout-i-en-die-dinge-waaraan-ons-kan-vasklou",
        permanent: true,
      },
    ];
  },
};
