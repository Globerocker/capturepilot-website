import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contract Pipeline Management: From Discovery to Award | CapturePilot',
  description: 'Learn how to build and manage a government contract pipeline — from opportunity discovery through award. Includes pipeline math, PWin scoring, and bid/no-bid frameworks.',
  keywords: 'government contract pipeline, federal contracting pipeline management, capture management pipeline, bid pipeline government, PWin scoring, bid no bid decision, federal contract opportunity tracking',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-pipeline-management' },
  openGraph: {
    title: 'Managing Your Government Contract Pipeline: From Discovery to Award',
    description: 'Build a federal contracting pipeline that forecasts revenue — not just tracks bids. Covers pipeline stages, PWin math, bid/no-bid decisions, and weekly review cadence.',
    url: 'https://capturepilot.com/blog/government-contract-pipeline-management',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
