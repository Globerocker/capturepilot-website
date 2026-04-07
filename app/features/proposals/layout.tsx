import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Proposal Writer — Write Government Proposals in Minutes | CapturePilot",
  description: "Generate tailored government proposals in 15 minutes with AI. Cover letters, technical approaches, past performance — all compliant and ready to submit.",
  keywords: "AI proposal writer, government proposal generator, federal proposal writing, RFP response AI, government bid writing, proposal automation, GovCon proposal tool",
  alternates: { canonical: "https://capturepilot.com/features/proposals" },
  openGraph: {
    title: "AI Proposal Writer — Write Government Proposals in Minutes | CapturePilot",
    description: "Generate tailored government proposals in 15 minutes with AI. Cover letters, technical approaches, past performance — all compliant and ready to submit.",
    url: "https://capturepilot.com/features/proposals",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
