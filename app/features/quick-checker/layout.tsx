import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Government Contract Eligibility Check",
  description: "Enter your website and get instant NAICS codes, SAM.gov status, set-aside eligibility, and matching opportunities. Free, no account required.",
  keywords: "government contract eligibility, free NAICS lookup, SAM.gov status check, set-aside eligibility, government contract checker, small business eligibility, GovCon readiness",
  alternates: { canonical: "https://capturepilot.com/features/quick-checker" },
  openGraph: {
    title: "Free Government Contract Eligibility Check",
    description: "Enter your website and get instant NAICS codes, SAM.gov status, set-aside eligibility, and matching opportunities. Free, no account required.",
    url: "https://capturepilot.com/features/quick-checker",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
