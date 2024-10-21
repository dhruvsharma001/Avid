/** @type {import('next').NextConfig} */

const path = require("path");
const isDev = process.env.NEXT_PUBLIC_APP_ENV === "development";

let devPackage;
if (isDev) {
  devPackage = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
}

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "content.typeframes.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    externalDir: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
};

// Check if devPackage is defined before calling it
module.exports = devPackage ? devPackage(nextConfig) : nextConfig;
