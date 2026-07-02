import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blanket Purchase Agreements (BPAs): How to Win Predictable Government Revenue | CapturePilot',
  description: 'Learn how blanket purchase agreements work, the dollar thresholds that govern them, and how small businesses can win BPA awards for recurring federal revenue.',
  keywords: 'blanket purchase agreement BPA, government BPA contracts, GSA schedule BPA, FAR 8.405-3, FAR Part 13 BPA, schedule BPA small business, multi-award BPA, BPA annual review, government charge account vendor, blanket purchase order government',
  alternates: { canonical: 'https://capturepilot.com/blog/blanket-purchase-agreements' },
  openGraph: {
    title: 'Blanket Purchase Agreements: How BPAs Create Predictable Government Revenue',
    description: 'BPAs let agencies order from you repeatedly without new competitions. Learn the two types, the dollar thresholds, and how to win a spot as a small business.',
    url: 'https://capturepilot.com/blog/blanket-purchase-agreements',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
