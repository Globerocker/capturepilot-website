import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs EZGovOpps — AI-Powered Alternative",
  description:
    "Compare CapturePilot vs EZGovOpps. EZGovOpps offers analyst-curated federal intel starting at $2,695/yr. CapturePilot adds AI proposals, capability statements, Quick Checker, and smart matching for less.",
  keywords:
    "CapturePilot vs EZGovOpps, EZGovOpps alternative, federal market intelligence, government contract tools, EZGovOpps pricing, IDIQ database",
  alternates: { canonical: "https://capturepilot.com/vs/ezgovopps" },
  openGraph: {
    title: "CapturePilot vs EZGovOpps — AI-Powered Alternative",
    description:
      "Compare CapturePilot vs EZGovOpps. AI-powered capture pipeline vs analyst-curated intel. See the full feature comparison.",
    url: "https://capturepilot.com/vs/ezgovopps",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
