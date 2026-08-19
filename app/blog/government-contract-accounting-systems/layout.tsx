import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DCAA-Compliant Accounting Systems: Which One You Need and When | CapturePilot',
  description: 'Which DCAA-compliant accounting system does your government contracting business actually need? Compare Deltek Costpoint, Unanet, PROCAS, and QuickBooks options.',
  keywords: 'government contract accounting system DCAA compliant, DCAA accounting system, SF 1408 pre-award audit, Deltek Costpoint, Unanet GovCon, PROCAS accounting, DCAA compliant software small business, cost-reimbursable contract accounting',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-accounting-systems' },
  openGraph: {
    title: 'DCAA-Compliant Accounting Systems: Which One You Need and When',
    description: 'Compare the top government contract accounting systems — Deltek Costpoint, Unanet, PROCAS, and QuickBooks — and know exactly when you need to upgrade.',
    url: 'https://capturepilot.com/blog/government-contract-accounting-systems',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
