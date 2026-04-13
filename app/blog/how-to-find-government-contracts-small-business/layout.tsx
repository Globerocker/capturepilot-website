import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find Government Contracts for Small Business (2026 Guide) | CapturePilot",
  description: "Step-by-step guide to finding government contracts for small business. SAM.gov search, set-asides, NAICS codes, and pipeline strategies that actually win.",
  keywords: "how to find government contracts for small business, SAM.gov opportunities, small business set-aside contracts, federal contracting guide, government contract search, NAICS codes government contracts",
  alternates: { canonical: "https://www.capturepilot.com/blog/how-to-find-government-contracts-small-business" },
  openGraph: {
    title: "How to Find Government Contracts for Small Business (2026 Guide) | CapturePilot",
    description: "Step-by-step guide to finding government contracts for small business. SAM.gov search, set-asides, NAICS codes, and pipeline strategies that actually win.",
    url: "https://www.capturepilot.com/blog/how-to-find-government-contracts-small-business",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
