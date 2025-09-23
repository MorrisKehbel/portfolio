import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
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
