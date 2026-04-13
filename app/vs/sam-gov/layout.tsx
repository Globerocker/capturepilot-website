import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs SAM.gov — Smart Layer on Top of SAM Data",
  description: "Same SAM.gov data, 10x better experience. Smart matching, scoring, AI proposals, and eligibility checks. Save 19+ hours per week.",
  keywords: "CapturePilot vs SAM.gov, SAM.gov alternative, SAM.gov better search, SAM.gov matching, federal contract search tool, SAM.gov AI layer",
  alternates: { canonical: "https://www.capturepilot.com/vs/sam-gov" },
  openGraph: {
    title: "CapturePilot vs SAM.gov — Smart Layer on Top of SAM Data",
    description: "Same SAM.gov data, 10x better experience. Smart matching, scoring, AI proposals, and eligibility checks. Save 19+ hours per week.",
    url: "https://www.capturepilot.com/vs/sam-gov",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
