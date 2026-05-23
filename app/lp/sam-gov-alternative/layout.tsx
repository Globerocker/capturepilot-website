import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAM.gov Alternative: AI-Matched Contracts | CapturePilot",
  description: "SAM.gov search is slow and undirected. CapturePilot scores 40,000+ federal contracts against your business automatically. Free check, no signup.",
  alternates: { canonical: "https://www.capturepilot.com/lp/sam-gov-alternative" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "A Better Way to Find Government Contracts Than SAM.gov",
    description: "Stop searching SAM.gov manually. CapturePilot matches contracts to your business automatically.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
