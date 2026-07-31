import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sole Source Justification Guide: Win Direct Awards Without Competition | CapturePilot',
  description: 'Learn how sole source justifications work under FAR 6.302, approval thresholds by dollar value, and 6 proven strategies to position your business for direct federal awards.',
  keywords: 'sole source justification government contract, FAR 6.302 exceptions, justification and approval J&A, sole source award federal, 8a sole source threshold, only one responsible source, sole source positioning strategy, FAR 6.304 approval thresholds, government contract sole source, federal sole source justification',
  alternates: { canonical: 'https://capturepilot.com/blog/sole-source-justification-guide' },
  openGraph: {
    title: 'Sole Source Justifications: How to Position Your Business for Direct Award Without Open Competition',
    description: '$271 billion in federal contracts bypassed competition in FY2025. Learn the 7 FAR exceptions, J&A approval tiers, and 6 strategies to become the only reasonable source.',
    url: 'https://capturepilot.com/blog/sole-source-justification-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
