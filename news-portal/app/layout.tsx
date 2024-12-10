import React from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Urbanist } from "next/font/google";

const inter = Urbanist({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Header />
        <div className="bg-white max-w-6xl mx-auto container">{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
