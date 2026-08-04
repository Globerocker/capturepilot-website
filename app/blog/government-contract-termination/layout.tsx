import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termination for Convenience: What Government Contractors Must Know | CapturePilot',
  description: 'The government terminated 13,000+ contracts in 2025. Learn your rights under FAR Part 49, what costs you can recover, and how to file a winning settlement proposal.',
  keywords: 'termination for convenience government contract, FAR 49, termination for convenience settlement, government contract termination rights, termination contracting officer, T4C settlement proposal, government contract terminated',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-termination' },
  openGraph: {
    title: 'Termination for Convenience: What Every Government Contractor Must Know',
    description: 'The government terminated 13,000+ contracts in 2025. Learn your rights under FAR Part 49, what costs you can recover, and how to file a winning settlement proposal.',
    url: 'https://capturepilot.com/blog/government-contract-termination',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
