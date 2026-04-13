import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs Unison — Intelligence Over Marketplace",
  description: "CapturePilot is your capture intelligence engine. Unison is a marketplace. Compare features, pricing, and approach.",
  keywords: "CapturePilot vs Unison, Unison Marketplace alternative, Unison comparison, government contract marketplace, Unison competitor, GovCon platform comparison",
  alternates: { canonical: "https://www.capturepilot.com/vs/unison" },
  openGraph: {
    title: "CapturePilot vs Unison — Intelligence Over Marketplace",
    description: "CapturePilot is your capture intelligence engine. Unison is a marketplace. Compare features, pricing, and approach.",
    url: "https://www.capturepilot.com/vs/unison",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
