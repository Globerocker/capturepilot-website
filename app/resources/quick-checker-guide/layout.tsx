import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Government Contract Eligibility Checker",
  description: "Check if your business qualifies for government contracts — free. Get NAICS codes, SAM status, and matching opportunities in 30 seconds.",
  keywords: "government contract eligibility checker, free contract eligibility check, am I eligible for government contracts, NAICS code finder, SAM.gov status check, GovCon eligibility",
  alternates: { canonical: "https://www.capturepilot.com/resources/quick-checker-guide" },
  openGraph: {
    title: "Free Government Contract Eligibility Checker",
    description: "Check if your business qualifies for government contracts — free. Get NAICS codes, SAM status, and matching opportunities in 30 seconds.",
    url: "https://www.capturepilot.com/resources/quick-checker-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
