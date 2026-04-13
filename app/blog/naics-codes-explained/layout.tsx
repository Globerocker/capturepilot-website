import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAICS Codes Explained: How to Find Your Business Codes",
  description: "What are NAICS codes and why do they matter for government contracting? Find your codes, understand size standards, and match to opportunities.",
  keywords: "NAICS codes explained, what are NAICS codes, find my NAICS code, NAICS code lookup, NAICS size standards, government contracting NAICS, SBA NAICS codes",
  alternates: { canonical: "https://www.capturepilot.com/blog/naics-codes-explained" },
  openGraph: {
    title: "NAICS Codes Explained: How to Find Your Business Codes",
    description: "What are NAICS codes and why do they matter for government contracting? Find your codes, understand size standards, and match to opportunities.",
    url: "https://www.capturepilot.com/blog/naics-codes-explained",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
