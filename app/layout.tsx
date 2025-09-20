import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Michael Bush — Portfolio",
  description: "Minimal Next.js + Tailwind portfolio",
};

import BgStars from '@/components/BgStars';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="relative mx-auto px-6 max-w-xl">
          <BgStars />        {/* sits behind content inside main */}
          {children}
        </main>
      </body>
    </html>
  );
}