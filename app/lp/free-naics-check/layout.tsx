import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free NAICS Code Check for Your Business | CapturePilot",
  description: "Find every NAICS code your business qualifies for — and the federal contracts matched to them. Free, 30 seconds, no signup.",
  alternates: { canonical: "https://www.capturepilot.com/lp/free-naics-check" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Free NAICS Code Check + Federal Contract Match",
    description: "Identify your NAICS codes and see matching federal opportunities in 30 seconds.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
