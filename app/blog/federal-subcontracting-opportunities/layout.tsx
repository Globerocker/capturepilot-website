import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Federal Subcontracting Opportunities for Small Businesses (2026 Guide) | CapturePilot',
  description: 'Find federal subcontracting opportunities with prime contractors. Learn FAR requirements, SUBNet, what primes look for, and how to convert sub work into prime past performance.',
  keywords: 'federal subcontracting opportunities small business, government subcontracting, subcontract prime contractor, FAR 52.219-9 subcontracting plan, SUBNet SBA subcontracting, small business subcontracting goals, government sub opportunities',
  alternates: { canonical: 'https://capturepilot.com/blog/federal-subcontracting-opportunities' },
  openGraph: {
    title: 'Federal Subcontracting Opportunities: How Small Businesses Win Work as Subs in 2026',
    description: 'Large federal primes are legally required to subcontract to small businesses. Here\'s how to find those opportunities, pitch primes, and turn sub work into prime past performance.',
    url: 'https://capturepilot.com/blog/federal-subcontracting-opportunities',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
