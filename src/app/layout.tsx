import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghost rider - Faceless AI Video Generator",
  description: "Create videos without showing your face, recording footage, or editing manually. Start with a topic and generate a complete faceless short.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-black`}>
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
