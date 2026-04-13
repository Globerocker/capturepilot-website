import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Sweetspot AI — Full Pipeline vs AI Search",
  description:
    "Compare CapturePilot vs Sweetspot AI. Both use AI for government contracting, but CapturePilot offers a full capture pipeline with consulting support, capability statement builder, and Quick Checker at competitive pricing.",
  keywords:
    "CapturePilot vs Sweetspot, Sweetspot AI alternative, AI government contracting, GovCon AI tools, Sweetspot pricing, government contract matching",
  alternates: { canonical: "https://www.capturepilot.com/vs/sweetspot" },
  openGraph: {
    title: "CapturePilot vs Sweetspot AI — Full Pipeline vs AI Search",
    description:
      "Compare CapturePilot vs Sweetspot AI. Full capture pipeline with consulting support vs AI-powered search. See the feature-by-feature breakdown.",
    url: "https://www.capturepilot.com/vs/sweetspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
