import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CapturePilot — Veterans Helping Veterans Win Contracts",
  description: "Built by Americurial LLC, a veteran-owned digital agency. We built CapturePilot because small businesses deserve enterprise-grade intelligence.",
  keywords: "about CapturePilot, Americurial LLC, veteran-owned business, GovCon startup, government contract platform, who built CapturePilot",
  alternates: { canonical: "https://capturepilot.com/about" },
  openGraph: {
    title: "About CapturePilot — Veterans Helping Veterans Win Contracts",
    description: "Built by Americurial LLC, a veteran-owned digital agency. We built CapturePilot because small businesses deserve enterprise-grade intelligence.",
    url: "https://capturepilot.com/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
