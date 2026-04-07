import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracting 101: Complete Beginner's Guide (2026)",
  description: "Learn how to get government contracts as a small business. NAICS codes, SAM.gov registration, set-asides, contract types, and step-by-step instructions.",
  keywords: "government contracting 101, how to get government contracts, government contracting for beginners, federal contracting guide, small business government contracts, GovCon beginner",
  alternates: { canonical: "https://capturepilot.com/blog/government-contracting-101" },
  openGraph: {
    title: "Government Contracting 101: Complete Beginner's Guide (2026)",
    description: "Learn how to get government contracts as a small business. NAICS codes, SAM.gov registration, set-asides, contract types, and step-by-step instructions.",
    url: "https://capturepilot.com/blog/government-contracting-101",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
