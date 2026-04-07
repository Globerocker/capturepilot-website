import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracts for Small Businesses",
  description: "14,000+ small business set-aside contracts. SBA 8(a), HUBZone, SDB opportunities matched to your business profile.",
  keywords: "small business government contracts, SBA 8a contracts, HUBZone contracts, SDB set-aside, small business set-aside, federal contracts small business, government contracting SMB",
  alternates: { canonical: "https://capturepilot.com/for/small-business" },
  openGraph: {
    title: "Government Contracts for Small Businesses",
    description: "14,000+ small business set-aside contracts. SBA 8(a), HUBZone, SDB opportunities matched to your business profile.",
    url: "https://capturepilot.com/for/small-business",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
