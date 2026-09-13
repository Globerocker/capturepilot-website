import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contract Novation: How to Transfer a Federal Contract After an Acquisition | CapturePilot',
  description: 'Selling or acquiring a business with federal contracts? Learn exactly how government contract novation works under FAR 42.12, what documents you need, and how long it takes.',
  keywords: 'government contract novation, FAR 42.12 novation, contract novation agreement, transfer government contract, successor in interest government contract, novation process federal contracts, FAR 42.1204, GovCon M&A',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-novation-guide' },
  openGraph: {
    title: 'Government Contract Novation: How to Transfer a Federal Contract When Your Business Is Acquired',
    description: 'Selling or acquiring a business with federal contracts? Learn exactly how government contract novation works under FAR 42.12, what documents you need, and how long it takes.',
    url: 'https://capturepilot.com/blog/government-contract-novation-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
