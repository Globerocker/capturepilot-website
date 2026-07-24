import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LPTA vs Best Value Government Contract: Strategy Guide | CapturePilot',
  description: 'Learn the difference between LPTA and Best Value Tradeoff source selection — and how to adapt your bidding strategy to win both types of federal contracts.',
  keywords: 'LPTA vs best value government contract, lowest price technically acceptable, best value tradeoff, source selection evaluation factors, FAR 15.101, government contract evaluation method, LPTA restrictions NDAA, DFARS 215.101, federal proposal strategy, Section M evaluation criteria',
  alternates: { canonical: 'https://capturepilot.com/blog/lpta-vs-best-value' },
  openGraph: {
    title: 'LPTA vs Best Value: Which Source Selection Method to Expect and How to Win Both',
    description: 'DoD used LPTA for 25% of competitive contracts over $5M — but restrictions are tightening. Know which evaluation method you face before you write a single proposal page.',
    url: 'https://capturepilot.com/blog/lpta-vs-best-value',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
