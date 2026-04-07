import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Capture2Proposal — AI Writes, Not Just Manages",
  description: "Capture2Proposal manages your proposal workflow. CapturePilot actually writes your proposals with AI. Compare features and pricing.",
  keywords: "CapturePilot vs Capture2Proposal, Capture2Proposal alternative, Capture2Proposal comparison, AI proposal writing, proposal management vs AI writing, GovCon proposal tools",
  alternates: { canonical: "https://capturepilot.com/vs/capture2proposal" },
  openGraph: {
    title: "CapturePilot vs Capture2Proposal — AI Writes, Not Just Manages",
    description: "Capture2Proposal manages your proposal workflow. CapturePilot actually writes your proposals with AI. Compare features and pricing.",
    url: "https://capturepilot.com/vs/capture2proposal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
