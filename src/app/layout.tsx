import type { Metadata } from "next";
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
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
