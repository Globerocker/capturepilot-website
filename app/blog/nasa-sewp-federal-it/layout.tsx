import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NASA SEWP Contracts: The Complete Guide for Federal IT Contractors | CapturePilot",
  description:
    "NASA SEWP processed $12.1B in federal IT orders in FY2025 — 80% to small businesses. Learn how SEWP VI works, the 3 categories, and how to win task orders.",
  keywords:
    "NASA SEWP government contracts, SEWP VI, federal IT contract vehicles, GWAC IT contracts, Alliant 3, OASIS plus, STARS III, CIO-SP4, federal technology contracts, small business IT government contracts, SEWP task orders",
  alternates: {
    canonical: "https://capturepilot.com/blog/nasa-sewp-federal-it",
  },
  openGraph: {
    title: "NASA SEWP and Federal IT Contract Vehicles: The Complete Guide for Tech Contractors",
    description:
      "NASA SEWP processed $12.1B in federal IT orders in FY2025 — 80% to small businesses. Learn how SEWP VI works, the 3 categories, and how to win task orders.",
    url: "https://capturepilot.com/blog/nasa-sewp-federal-it",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
