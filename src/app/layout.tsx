import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Providers } from "@/context/Providers";

export const metadata: Metadata = {
  title: "Morris Kehbel | Portfolio",
  description:
    "My Web Developer Portfolio featuring innovative full-stack projects built with Next.js, TypeScript, Express.js and other modern web technologies.",
  icons: {
    icon: [
      {
        url: "/logo_light.png",
        media: "(prefers-color-scheme: light)",
        rel: "icon",
        type: "image/png",
      },
      {
        url: "/logo_dark.png",
        media: "(prefers-color-scheme: dark)",
        rel: "icon",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="light"
      style={{ backgroundColor: "var(--color-neutral)" }}
    >
      <body>
        <Script id="theme-loader" strategy="beforeInteractive">
          {`
            (function() {
              const saved = localStorage.getItem('darkMode');
              if (saved) {
                document.documentElement.setAttribute('data-theme', saved === "true" ? "dark" : "light");
              } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.setAttribute('data-theme', prefersDark ? "dark" : "light");
              }
            })()
          `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
