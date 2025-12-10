import { dirname } from "path";
import { fileURLToPath } from "url";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const __filename = fileURLToPath(import.meta.url);
const projectDir = dirname(__filename);

const baseConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  skipProxyUrlNormalize: true,
  trailingSlash: false,
  turbopack: {
    root: projectDir,
  },
};

export default function nextConfig(phase) {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...baseConfig,
      async rewrites() {
        return [
          {
            source: "/index.html",
            destination: "/",
          },
          {
            source: "/:path*.html",
            destination: "/:path*",
          },
        ];
      },
    };
  }

  return baseConfig;
}
