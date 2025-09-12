import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Michael Bush — Portfolio",
  description: "Minimal Next.js + Tailwind portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* shared navbar */}
        <Navbar />
        {/* shared centered column */}
        <div className="container">{children}</div>
      </body>
    </html>
  );
}