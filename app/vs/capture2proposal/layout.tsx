import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Capture2Proposal — AI Drafts, Not Just Manages",
  description: "Capture2Proposal manages your proposal workflow. CapturePilot actually drafts your proposals with AI. Compare features and pricing.",
  keywords: "CapturePilot vs Capture2Proposal, Capture2Proposal alternative, Capture2Proposal comparison, AI proposal drafting, proposal management vs AI drafting, GovCon proposal tools",
  alternates: { canonical: "https://www.capturepilot.com/vs/capture2proposal" },
  openGraph: {
    title: "CapturePilot vs Capture2Proposal — AI Drafts, Not Just Manages",
    description: "Capture2Proposal manages your proposal workflow. CapturePilot actually drafts your proposals with AI. Compare features and pricing.",
    url: "https://www.capturepilot.com/vs/capture2proposal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
