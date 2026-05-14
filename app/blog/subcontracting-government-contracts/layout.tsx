import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subcontracting Government Contracts: Your First Step Into Federal (2026 Guide)',
  description: 'Learn how to win subcontracting opportunities on federal contracts. Covers SUB-Net, prime contractor outreach, $86B market, compliance rules, and the path to prime.',
  keywords: 'subcontracting government contracts, federal subcontracting, small business subcontracting, SUB-Net, prime contractor subcontracting plan, government subcontractor, FAR 52.219-14, ostensible subcontractor rule',
  alternates: { canonical: 'https://capturepilot.com/blog/subcontracting-government-contracts' },
  openGraph: {
    title: 'Subcontracting on Government Contracts: Your First Step Into Federal',
    description: 'The federal government put $86 billion into small business subcontractors in FY2023. Learn how to find opportunities, approach primes, and stay compliant.',
    url: 'https://capturepilot.com/blog/subcontracting-government-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
