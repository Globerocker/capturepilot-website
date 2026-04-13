import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracts for Women-Owned Businesses (WOSB)",
  description: "Find WOSB and EDWOSB set-aside contracts. CapturePilot matches women-owned businesses with federal opportunities they qualify for.",
  keywords: "WOSB contracts, women-owned business contracts, EDWOSB set-aside, women government contracts, female-owned business federal, SBA WOSB program, women small business",
  alternates: { canonical: "https://www.capturepilot.com/for/women-owned" },
  openGraph: {
    title: "Government Contracts for Women-Owned Businesses (WOSB)",
    description: "Find WOSB and EDWOSB set-aside contracts. CapturePilot matches women-owned businesses with federal opportunities they qualify for.",
    url: "https://www.capturepilot.com/for/women-owned",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
