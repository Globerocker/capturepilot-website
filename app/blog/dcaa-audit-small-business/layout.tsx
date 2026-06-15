import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DCAA Audit Preparation for Small Business Government Contractors | CapturePilot',
  description: 'Everything small business government contractors need to know about DCAA audits — SF 1408 pre-award reviews, incurred cost submissions, 2025 rule changes, and how to build a compliant accounting system.',
  keywords: 'DCAA audit small business, DCAA compliance, SF 1408 pre-award audit, incurred cost submission, DCAA accounting system requirements, government contractor accounting, DFARS 252.242-7006, DCAA compliant timekeeping, FAR Part 31 cost principles, DCAA audit preparation',
  alternates: { canonical: 'https://capturepilot.com/blog/dcaa-audit-small-business' },
  openGraph: {
    title: 'DCAA Audit Preparation: What Small Business Government Contractors Must Know',
    description: 'DCAA examined $599.8B in contract costs in FY2024 and found $15.9B in exceptions. Here is how small businesses build the accounting system, timekeeping processes, and documented policies that pass the audit.',
    url: 'https://capturepilot.com/blog/dcaa-audit-small-business',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
