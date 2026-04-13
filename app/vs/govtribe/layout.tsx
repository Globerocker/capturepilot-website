import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs GovTribe — Search vs Win",
  description: "GovTribe helps you search. CapturePilot helps you win. AI proposals, smart matching, deal pipeline — everything GovTribe doesn't have.",
  keywords: "CapturePilot vs GovTribe, GovTribe alternative, GovTribe comparison, government contract search, GovTribe competitor, GovCon tools comparison",
  alternates: { canonical: "https://www.capturepilot.com/vs/govtribe" },
  openGraph: {
    title: "CapturePilot vs GovTribe — Search vs Win",
    description: "GovTribe helps you search. CapturePilot helps you win. AI proposals, smart matching, deal pipeline — everything GovTribe doesn't have.",
    url: "https://www.capturepilot.com/vs/govtribe",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
