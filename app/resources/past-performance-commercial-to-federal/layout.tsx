import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement Past Performance for Federal Bids (PDF)",
  description:
    "Free 13-page PDF: translate commercial past performance into the format federal evaluators expect. 3 worked examples + fill-in template. Download free.",
  keywords:
    "capability statement past performance, past performance template, past performance questionnaire, past performance examples, writing past performance for government contracts, commercial past performance federal contract",
  alternates: {
    canonical:
      "https://www.capturepilot.com/resources/past-performance-commercial-to-federal",
  },
  openGraph: {
    title: "Capability Statement Past Performance for Federal Bids (PDF)",
    description:
      "Most small firms have great commercial work but write it up wrong for federal evaluators. This 13-page PDF shows the exact format + 3 worked examples.",
    url: "https://www.capturepilot.com/resources/past-performance-commercial-to-federal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
