import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CapturePilot — Win Government Contracts. Faster.",
    template: "%s | CapturePilot",
  },
  description: "CapturePilot matches your small business with federal government contracts you can actually win. Built for veteran-owned, women-owned, and small businesses. 40,000+ opportunities. AI-powered matching.",
  keywords: "government contracts, SAM.gov, federal contracting, SDVOSB, WOSB, small business, veteran owned, capability statement, proposal writer",
  metadataBase: new URL("https://capturepilot.com"),
  verification: {
    google: "d0DbhX6VNRMZVVyi9TrVAZ-mqsL9k_tBIOvGhqGC95o",
  },
  openGraph: {
    title: "CapturePilot — Win Government Contracts. Faster.",
    description: "Find and win federal contracts matched to your business. AI-powered matching for veteran-owned and small businesses.",
    type: "website",
    url: "https://capturepilot.com",
    siteName: "CapturePilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "CapturePilot — Win Government Contracts. Faster.",
    description: "AI-powered federal contract matching for veteran-owned and small businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://capturepilot.com",
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
