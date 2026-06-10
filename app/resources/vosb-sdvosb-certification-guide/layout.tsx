import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VOSB & SDVOSB Certification Guide — VA CVE Walkthrough",
  description:
    "Free 14-page PDF: eligibility tests, document checklist, common rejection reasons, and the full VA CVE application path. Download and unlock veteran-owned federal contracting.",
  keywords:
    "vosb certification, sdvosb certification, service disabled veteran owned small business certification, sba veteran certification, veteran owned small business certification, va cve certification",
  alternates: {
    canonical:
      "https://www.capturepilot.com/resources/vosb-sdvosb-certification-guide",
  },
  openGraph: {
    title: "VOSB & SDVOSB Certification Guide — VA CVE Walkthrough",
    description:
      "Free 14-page PDF: eligibility tests, document checklist, common rejection reasons, and the full VA CVE application path for veteran-owned businesses.",
    url: "https://www.capturepilot.com/resources/vosb-sdvosb-certification-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
