// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";
import type { Configuration, ExternalItemFunctionData } from "webpack";

const isProduction = process.env.NODE_ENV === "production";
const isStorybook = process.env.STORYBOOK === "true";

const nextConfig: NextConfig = {
  webpack: (config: Configuration, { isServer }) => {
    if (isProduction && isServer) {
      config.externals = config.externals || [];

      if (Array.isArray(config.externals)) {
        config.externals.push((data: ExternalItemFunctionData, callback: (err?: Error | null, result?: string | boolean | string[] | { [index: string]: any } | undefined) => void) => {
          if (data.request && data.request.match(/stories\/|\.stories\.(tsx|ts|js|jsx)$/)) {
            return callback(null, "commonjs " + data.request);
          }
          callback();
        });
      }
    }

    return config;
  },
};

export default nextConfig;