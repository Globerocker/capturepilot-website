import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OASIS+ Contract Vehicle: How Small Businesses Win Task Orders | CapturePilot',
  description: 'Complete guide to OASIS+: six pools, 13 domains, self-scoring thresholds, and how to win task orders on GSA\'s premier professional services MAC. Updated 2026.',
  keywords: 'OASIS+ contract, OASIS plus contract vehicle, GSA OASIS+, OASIS+ small business, OASIS+ Phase II, OASIS+ task orders, GSA professional services IDIQ, OASIS+ eligibility, OASIS+ self-scoring',
  alternates: { canonical: 'https://capturepilot.com/blog/oasis-plus-contract-guide' },
  openGraph: {
    title: 'OASIS+ Contract Vehicle: How Small Businesses Get On and Win Task Orders',
    description: 'Complete guide to OASIS+: six pools, 13 domains, self-scoring thresholds, and how to win task orders on GSA\'s premier professional services MAC.',
    url: 'https://capturepilot.com/blog/oasis-plus-contract-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
