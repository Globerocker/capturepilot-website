import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDVOSB Contracts: Win $20B in Set-Asides | CapturePilot",
  description: "Service-Disabled Veteran-Owned Small Businesses get sole-source contracts up to $5M. See your matching SDVOSB opportunities — free, in 30 seconds.",
  alternates: { canonical: "https://www.capturepilot.com/lp/sdvosb-contracts" },
  robots: { index: false, follow: false }, // ad-only LP — keep out of organic SERP
  openGraph: {
    title: "SDVOSB Contracts: Win $20B in Veteran-Only Set-Asides",
    description: "Find SDVOSB-eligible federal contracts in 30 seconds. Free Quick Checker. No signup.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
