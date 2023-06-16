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
    }

    return config;
  }
};

export default nextConfig;
