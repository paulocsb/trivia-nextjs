/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        net: false,
        tls: false,
        fs: false,
        child_process: false,
        dgram: false,
        canvas: false,
      };
    } else {
      config.externals = ["json-server", ...config.externals];
    }

    return config;
  },
};

export default nextConfig;
