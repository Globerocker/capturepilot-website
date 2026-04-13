import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Government Contract Eligibility Checker — CapturePilot",
  description:
    "Check if your business qualifies for government contracts in 30 seconds. Free SAM.gov eligibility checker. Find your NAICS codes, set-aside status, and matching federal opportunities. No signup required.",
  keywords:
    "government contract eligibility check, can my business get government contracts, SAM.gov eligibility checker, NAICS code finder, small business government contracts, federal contract eligibility, SBA certification check, SDVOSB eligibility, WOSB eligibility, 8a certification check, government contract checker free",
  alternates: { canonical: "https://www.capturepilot.com/check" },
  openGraph: {
    title: "Free Government Contract Eligibility Checker — CapturePilot",
    description:
      "Enter your website. Get your NAICS codes, SAM status, and matching opportunities in 30 seconds. 100% free, no signup required.",
    url: "https://www.capturepilot.com/check",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Government Contract Eligibility Checker",
    description:
      "Check if your business qualifies for government contracts. Free NAICS, SAM.gov, and opportunity matching in 30 seconds.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
