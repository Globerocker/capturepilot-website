import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAR Clauses Quick Reference: 50 Most-Cited Decoded",
  description:
    "Free PDF decoder for the 50 FAR clauses you'll actually see on a small-business contract. Plain-English breakdowns, red flags, and what to negotiate. Download free.",
  keywords:
    "far clauses, far clause matrix, what is a far clause, far clauses list, far clause 52.219-14 limitations on subcontracting, far and dfar clauses, federal acquisition regulation clauses, far clause decoder",
  alternates: {
    canonical: "https://www.capturepilot.com/resources/far-clause-quick-reference",
  },
  openGraph: {
    title: "FAR Clauses Quick Reference: 50 Most-Cited Decoded",
    description:
      "Free PDF decoder for the 50 FAR clauses you'll actually see on a small-business contract. Plain-English breakdowns, red flags, and what to negotiate.",
    url: "https://www.capturepilot.com/resources/far-clause-quick-reference",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
