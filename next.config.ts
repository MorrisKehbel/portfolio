import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/portfolio", permanent: false }];
  },
  images: {
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        // Next.js hashed assets — safe to cache forever
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Public images — cache 7 days, revalidate in background
        source: "/:path*(svg|jpg|jpeg|png|webp|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Fonts
        source: "/:path*(woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          // -----------------------
          // Content Security Policy
          // -----------------------
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
          // -----------------------
          // HTTP Strict Transport Security
          // -----------------------
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // -----------------------
          // Cross-Origin-Opener-Policy
          // -----------------------
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          // -----------------------
          // Clickjacking Protection
          // -----------------------
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // -----------------------
          // More Security Headers
          // -----------------------
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
