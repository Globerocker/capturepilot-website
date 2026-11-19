import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal Grant vs Contract for Small Business: What\'s the Difference? | CapturePilot',
  description: 'Federal grant vs contract for small business: understand the legal, financial, and competitive differences and discover which federal funding path your business should pursue.',
  keywords: 'federal grant vs contract small business, government grant vs contract difference, SBIR grants small business, federal contract set-aside, SAM.gov grants.gov difference, 2 CFR 200 FAR compliance, government contracting vs grants, small business federal funding',
  alternates: { canonical: 'https://capturepilot.com/blog/federal-grant-vs-contract' },
  openGraph: {
    title: 'Federal Grant vs Contract: What\'s the Difference and Which Should Your Business Pursue',
    description: 'Most small businesses should pursue contracts, not grants. Here\'s why — and how to decide which federal funding path fits your business.',
    url: 'https://capturepilot.com/blog/federal-grant-vs-contract',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
