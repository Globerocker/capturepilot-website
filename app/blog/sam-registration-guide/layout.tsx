import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAM.gov Registration Guide: Step-by-Step (2026)",
  description: "Complete guide to registering on SAM.gov. Prerequisites, step-by-step process, common issues, timeline, and renewal requirements.",
  keywords: "SAM.gov registration, how to register on SAM.gov, SAM registration guide, SAM.gov account setup, SAM.gov UEI, SAM.gov renewal, government contractor registration",
  alternates: { canonical: "https://capturepilot.com/blog/sam-registration-guide" },
  openGraph: {
    title: "SAM.gov Registration Guide: Step-by-Step (2026)",
    description: "Complete guide to registering on SAM.gov. Prerequisites, step-by-step process, common issues, timeline, and renewal requirements.",
    url: "https://capturepilot.com/blog/sam-registration-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
