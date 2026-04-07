import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Intelligence — See Who Wins Government Contracts | CapturePilot",
  description: "Track agency spending, competitor wins, and market trends. Powered by USASpending and SAM.gov data. Know your market before you bid.",
  keywords: "government contract intelligence, federal spending data, competitor analysis GovCon, USASpending data, agency spending trends, market intelligence federal, incumbent tracking",
  alternates: { canonical: "https://capturepilot.com/features/intelligence" },
  openGraph: {
    title: "Market Intelligence — See Who Wins Government Contracts | CapturePilot",
    description: "Track agency spending, competitor wins, and market trends. Powered by USASpending and SAM.gov data. Know your market before you bid.",
    url: "https://capturepilot.com/features/intelligence",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
