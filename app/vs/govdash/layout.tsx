import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs GovDash — Affordable Full-Pipeline Alternative",
  description:
    "Compare CapturePilot vs GovDash. GovDash focuses on AI proposals for large teams. CapturePilot delivers a full capture pipeline — matching, proposals, capability statements, and consulting — at a fraction of the cost.",
  keywords:
    "CapturePilot vs GovDash, GovDash alternative, AI proposal writing, GovCon tools, government contract software, GovDash pricing",
  alternates: { canonical: "https://capturepilot.com/vs/govdash" },
  openGraph: {
    title: "CapturePilot vs GovDash — Affordable Full-Pipeline Alternative",
    description:
      "Compare CapturePilot vs GovDash. Full capture pipeline at a fraction of the price. See the feature-by-feature breakdown.",
    url: "https://capturepilot.com/vs/govdash",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
