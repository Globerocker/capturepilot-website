import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPARS Explained: How Contractor Performance Ratings Shape Future Awards | CapturePilot',
  description: 'CPARS ratings follow you into every future bid. Learn how the 5-point rating scale works, evaluation thresholds, the 30-day response window, and how to protect your past performance record.',
  keywords: 'CPARS government contract, contractor performance assessment reporting system, CPARS ratings, past performance government contracts, PPIRS, FAR 42.15 contractor performance, CPARS evaluation categories, dispute CPARS rating, CPARS Exceptional Very Good Satisfactory, past performance source selection',
  alternates: { canonical: 'https://capturepilot.com/blog/cpars-contractor-performance' },
  openGraph: {
    title: 'CPARS Explained: How Contractor Performance Ratings Shape Future Awards',
    description: 'The federal government files roughly 120,000 CPARS evaluations per year. Every one follows a contractor into their next bid. Learn how the system works and how to protect your record.',
    url: 'https://capturepilot.com/blog/cpars-contractor-performance',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
