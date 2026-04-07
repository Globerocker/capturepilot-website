import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deal Pipeline — Track Contracts From Discovery to Award",
  description: "Kanban-style pipeline management for government contracts. Track every opportunity from discovery through bidding to award.",
  keywords: "government contract pipeline, deal tracking GovCon, opportunity management, contract pipeline tracker, kanban government contracts, bid tracking, capture management",
  alternates: { canonical: "https://capturepilot.com/features/pipeline" },
  openGraph: {
    title: "Deal Pipeline — Track Contracts From Discovery to Award",
    description: "Kanban-style pipeline management for government contracts. Track every opportunity from discovery through bidding to award.",
    url: "https://capturepilot.com/features/pipeline",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
