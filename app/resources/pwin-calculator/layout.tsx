import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PWin Calculator: Federal Probability of Win Score",
  description:
    "Score any federal bid across 12 weighted factors in under 10 minutes. Free XLSX pwin calculator for government contractors. Stop chasing bids you can't win.",
  keywords:
    "pwin calculator, pwin formula, how to calculate pwin, bid decision matrix, probability of win federal contracting, federal bid score",
  alternates: {
    canonical: "https://www.capturepilot.com/resources/pwin-calculator",
  },
  openGraph: {
    title: "PWin Calculator: Federal Probability of Win Score",
    description:
      "Score any federal bid across 12 weighted factors in under 10 minutes. Free XLSX for government contractors.",
    url: "https://www.capturepilot.com/resources/pwin-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
