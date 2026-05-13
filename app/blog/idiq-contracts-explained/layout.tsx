import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IDIQ Contracts Explained: How to Get on a Multi-Year Contract Vehicle (2026)',
  description: '$72.4B flowed through IDIQ/GWAC vehicles in FY2025. Learn how IDIQ contracts work, how to win base contract positions, and how task order competition generates revenue.',
  keywords: 'IDIQ contracts, IDIQ contract explained, multiple award contract, GWAC, OASIS+, SEWP V, task order competition, government contract vehicle, IDIQ small business, MAC contract',
  alternates: { canonical: 'https://capturepilot.com/blog/idiq-contracts-explained' },
  openGraph: {
    title: 'IDIQ Contracts Explained: How to Get on a Multi-Year Contract Vehicle',
    description: '$72.4B flowed through IDIQ/GWAC vehicles in FY2025. Learn how IDIQ contracts work, how to win base contract positions, and how task order competition generates revenue.',
    url: 'https://capturepilot.com/blog/idiq-contracts-explained',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
