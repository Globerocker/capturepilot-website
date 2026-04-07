import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Bid Checklist: Never Miss a Step",
  description: "Complete 17-step checklist for government contract bids. Pre-bid, preparation, review, and submission phases covered.",
  keywords: "government bid checklist, federal contract bid steps, RFP checklist, proposal submission checklist, government contract bid process, bid preparation checklist, GovCon checklist",
  alternates: { canonical: "https://capturepilot.com/resources/bid-checklist" },
  openGraph: {
    title: "Government Bid Checklist: Never Miss a Step",
    description: "Complete 17-step checklist for government contract bids. Pre-bid, preparation, review, and submission phases covered.",
    url: "https://capturepilot.com/resources/bid-checklist",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
