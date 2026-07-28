import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Work Statement (PWS): Contractor Guide to Understanding & Responding | CapturePilot',
  description: 'A complete guide to Performance Work Statements: how PWS differs from SOW and SOO, what every PWS must contain, how QASPs work, and how to write proposals that win.',
  keywords: 'performance work statement, PWS government contract, PWS vs SOW vs SOO, quality assurance surveillance plan, QASP, acceptable quality level AQL, FAR 37.602, performance-based acquisition, PBSA, quality control plan government contract, performance work statement examples, how to respond to PWS',
  alternates: { canonical: 'https://capturepilot.com/blog/performance-work-statement' },
  openGraph: {
    title: 'Performance Work Statement (PWS): A Contractor\'s Guide to Understanding and Responding',
    description: 'Performance-based contracts produce 15% cost savings and 20% higher satisfaction — but only when contractors know how to read the PWS, match their QCP to the QASP, and write to outcomes rather than activities.',
    url: 'https://capturepilot.com/blog/performance-work-statement',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
