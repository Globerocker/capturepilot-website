import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Government Proposal Writing Tips That Win Contracts",
  description: "Proven tips for writing winning government proposals. Compliance, pricing strategy, past performance, and how AI can help you draft faster.",
  keywords: "government proposal writing tips, how to write government proposal, winning proposal tips, RFP response tips, federal proposal best practices, proposal compliance, government bid writing",
  alternates: { canonical: "https://www.capturepilot.com/blog/proposal-writing-tips" },
  openGraph: {
    title: "10 Government Proposal Writing Tips That Win Contracts",
    description: "Proven tips for writing winning government proposals. Compliance, pricing strategy, past performance, and how AI can help you draft faster.",
    url: "https://www.capturepilot.com/blog/proposal-writing-tips",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
