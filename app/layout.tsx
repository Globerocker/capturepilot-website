import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CapturePilot — Win Government Contracts. Faster.",
  description: "CapturePilot matches your small business with federal government contracts you can actually win. Built for veteran-owned, women-owned, and small businesses. 40,000+ opportunities. AI-powered matching.",
  keywords: "government contracts, SAM.gov, federal contracting, SDVOSB, WOSB, small business, veteran owned, capability statement, proposal writer",
  openGraph: {
    title: "CapturePilot — Win Government Contracts. Faster.",
    description: "Find and win federal contracts matched to your business. AI-powered matching for veteran-owned and small businesses.",
    type: "website",
    url: "https://capturepilot.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
