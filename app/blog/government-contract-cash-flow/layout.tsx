import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contract Cash Flow: How to Survive 30–90 Day Payment Cycles (2026)',
  description: 'Federal payment cycles create a cash gap that kills profitable businesses. Learn about the Prompt Payment Act, accelerated payments, progress payments, and contract financing options.',
  keywords: 'government contract cash flow, federal contract payment delay, Prompt Payment Act, progress payments government contract, invoice factoring government contracts, SBA contract financing, Assignment of Claims Act, accelerated payments small business',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-cash-flow' },
  openGraph: {
    title: 'Government Contract Cash Flow: How to Survive 30–90 Day Payment Cycles (2026)',
    description: 'Federal payment cycles create a cash gap that kills profitable businesses. Learn about the Prompt Payment Act, accelerated payments, progress payments, and contract financing options.',
    url: 'https://capturepilot.com/blog/government-contract-cash-flow',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
