import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Competitors — Government Contract Software Comparison",
  description:
    "Compare CapturePilot to GovWin, GovTribe, BGOV, HigherGov, Federal Compass, Unison, Capture2Proposal, Sweetspot, GovDash, and SAM.gov. See features, pricing, and why small businesses choose CapturePilot.",
  keywords:
    "CapturePilot alternatives, GovCon software comparison, government contract tools, GovWin alternative, GovTribe alternative, BGOV alternative, federal contracting platform comparison",
  alternates: { canonical: "https://capturepilot.com/vs" },
  openGraph: {
    title: "CapturePilot vs Competitors — Government Contract Software Comparison",
    description:
      "Side-by-side comparison of CapturePilot against every major GovCon platform. Features, pricing, and real differences.",
    url: "https://capturepilot.com/vs",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
