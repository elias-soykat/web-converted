import { Analytics } from "@vercel/analytics/react";
import { Inter as FontSans } from "next/font/google";
import "../styles/global.css";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ReactNode } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Web Convert Application",
  metadataBase: new URL("https://webconverted.com"),
  description:
    "A user-friendly application designed to effortlessly convert videos to various formats.",
  openGraph: { images: "/apple-touch-icon.png" },
  keywords: ["Youtube", "Youtube to Video", "HD Video Download"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
