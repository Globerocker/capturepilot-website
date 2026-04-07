import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracts for Veteran-Owned Businesses (SDVOSB)",
  description: "Find SDVOSB and VOSB set-aside contracts matched to your veteran-owned business. 2,000+ opportunities waiting. AI-powered matching and proposals.",
  keywords: "SDVOSB contracts, veteran-owned business contracts, VOSB set-aside, veteran government contracts, service-disabled veteran contracts, VA contracts, military veteran business",
  alternates: { canonical: "https://capturepilot.com/for/veterans" },
  openGraph: {
    title: "Government Contracts for Veteran-Owned Businesses (SDVOSB)",
    description: "Find SDVOSB and VOSB set-aside contracts matched to your veteran-owned business. 2,000+ opportunities waiting. AI-powered matching and proposals.",
    url: "https://capturepilot.com/for/veterans",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
