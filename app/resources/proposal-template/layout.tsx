import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Proposal Template: Free Structure Guide | CapturePilot",
  description: "Free government proposal template with 5 volumes. Cover letter, technical approach, past performance, management plan, and pricing structure.",
  keywords: "government proposal template, free proposal template, federal proposal structure, RFP response template, proposal volume template, government contract proposal format",
  alternates: { canonical: "https://capturepilot.com/resources/proposal-template" },
  openGraph: {
    title: "Government Proposal Template: Free Structure Guide | CapturePilot",
    description: "Free government proposal template with 5 volumes. Cover letter, technical approach, past performance, management plan, and pricing structure.",
    url: "https://capturepilot.com/resources/proposal-template",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
