import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Rights in Government Contracts: Protect Your IP | CapturePilot',
  description: 'How to protect your IP in federal contracts: funding origin rule, rights tiers, marking requirements, SBIR 20-year protection, and FAR vs. DFARS differences. Updated 2026.',
  keywords: 'government contract data rights, DFARS data rights, FAR 52.227-14, SBIR data rights, limited rights government contract, restricted rights software government, government purpose rights, technical data rights federal contract, IP protection government contractor, DFARS 252.227-7013',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-data-rights' },
  openGraph: {
    title: 'Data Rights in Government Contracts: How to Protect Your IP When Working With Federal Agencies',
    description: 'The funding origin rule, four rights tiers, marking requirements, and the 2025 SBIR 20-year protection update — everything small business contractors need to keep their IP.',
    url: 'https://capturepilot.com/blog/government-contract-data-rights',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
