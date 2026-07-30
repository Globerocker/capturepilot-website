import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contract Modifications: How Changes Work and What You Can Negotiate | CapturePilot',
  description: 'Learn how federal contract modifications work under FAR Part 43 — bilateral vs unilateral, equitable adjustments, REA process, cardinal changes, and what small businesses can negotiate.',
  keywords: 'government contract modification, contract modification FAR 43, equitable adjustment government contract, request for equitable adjustment REA, bilateral modification, unilateral modification, change order government contract, cardinal change doctrine, constructive change government contract, contract disputes act, SF-30 modification, FAR 52.243 changes clause',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-modification' },
  openGraph: {
    title: 'Contract Modifications: How Changes to Federal Contracts Work and What You Can Negotiate',
    description: 'A complete guide to government contract modifications under FAR Part 43 — types of mods, the Changes clause, equitable adjustments, REA filing, cardinal changes, and the Contract Disputes Act.',
    url: 'https://capturepilot.com/blog/government-contract-modification',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
