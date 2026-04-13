import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Matching Engine — Find Contracts You Can Win",
  description: "CapturePilot's proprietary matching engine scores 40,000+ federal opportunities against your NAICS codes, certifications, and location. See your best matches daily.",
  keywords: "government contract matching, NAICS code matching, federal opportunity scoring, contract finder, SAM.gov matching, smart matching engine, GovCon matching",
  alternates: { canonical: "https://www.capturepilot.com/features/matching" },
  openGraph: {
    title: "Smart Matching Engine — Find Contracts You Can Win",
    description: "CapturePilot's proprietary matching engine scores 40,000+ federal opportunities against your NAICS codes, certifications, and location. See your best matches daily.",
    url: "https://www.capturepilot.com/features/matching",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
