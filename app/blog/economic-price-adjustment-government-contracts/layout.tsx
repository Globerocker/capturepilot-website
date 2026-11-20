import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Economic Price Adjustment Clauses in Government Contracts (2026 Guide) | CapturePilot',
  description: 'Protect your margins with EPA clauses in federal contracts. Learn FAR 52.216-4 thresholds, the 3% floor, 10% cap, and how to request EPA before you sign a fixed-price contract.',
  keywords: 'economic price adjustment government contract, EPA clause FAR, FAR 52.216-4, fixed price contract inflation protection, government contract price escalation, economic price adjustment clause, federal contract cost risk, FAR 16.203 EPA',
  alternates: { canonical: 'https://capturepilot.com/blog/economic-price-adjustment-government-contracts' },
  openGraph: {
    title: 'Economic Price Adjustment Clauses: How to Protect Your Margins From Inflation in Federal Contracts',
    description: 'Steel prices spike. Labor rates jump. Without an EPA clause in your government contract, you absorb every dollar. Learn how EPA clauses work and how to get one before you sign.',
    url: 'https://capturepilot.com/blog/economic-price-adjustment-government-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
