import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from '../components/common/Footer';
import Navbar from "@/components/common/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn Code",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF8F6]`}
      >
       <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
