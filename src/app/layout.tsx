import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import FloatingActions from "@/components/layout/FloatingActions";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Industrial Furnaces, Ovens & Heating Systems | Industrial Furnace & Controls",
  description: "Industrial Furnace & Controls manufactures and supplies furnaces, industrial ovens, heating elements, control panels, thermocouples, RTDs, industrial heaters and customized heating systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#F7F7F4] text-[#15191C]`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
