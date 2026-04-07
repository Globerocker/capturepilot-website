import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find Government Contracts for Small Business (2026 Guide) | CapturePilot",
  description: "Find government contracts for your small business. SAM.gov search tips, set-aside programs, dollar thresholds, and the tools winning contractors use in 2026.",
  keywords: "how to find government contracts for small business, SAM.gov search, small business set aside, government contract opportunities, federal contracting small business 2026",
  alternates: { canonical: "https://capturepilot.com/blog/how-to-find-government-contracts-small-business" },
  openGraph: {
    title: "How to Find Government Contracts for Small Business (2026 Guide) | CapturePilot",
    description: "Find government contracts for your small business. SAM.gov search tips, set-aside programs, dollar thresholds, and the tools winning contractors use in 2026.",
    url: "https://capturepilot.com/blog/how-to-find-government-contracts-small-business",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
