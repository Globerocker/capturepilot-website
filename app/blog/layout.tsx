import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Government Contracting Guides & Strategies",
  description: "Learn government contracting with practical guides on NAICS codes, SAM.gov registration, set-aside programs, proposal writing, and capability statements. Written for small businesses.",
  keywords: "government contracting blog, GovCon guides, small business federal contracts, NAICS codes, SAM.gov, set-aside programs, proposal writing",
  alternates: { canonical: "https://capturepilot.com/blog" },
  openGraph: {
    title: "Blog — Government Contracting Guides & Strategies",
    description: "Practical guides for small businesses breaking into federal contracting.",
    url: "https://capturepilot.com/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
