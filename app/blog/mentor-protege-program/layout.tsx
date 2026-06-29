import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SBA Mentor-Protégé Program: Find a Partner and Win Bigger Federal Contracts | CapturePilot',
  description: 'The SBA Mentor-Protégé Program lets small businesses form joint ventures with larger companies and compete for set-aside contracts. Here is how to use it.',
  keywords: 'SBA mentor protege program, mentor protege joint venture, SBA MPP, small business mentor protege, government contracting mentor protege, mentor protege agreement, SBA mentor protege eligibility, DoD mentor protege program, joint venture small business set aside, certify.sba.gov mentor protege',
  alternates: { canonical: 'https://capturepilot.com/blog/mentor-protege-program' },
  openGraph: {
    title: 'SBA Mentor-Protégé Program: How to Find a Partner and Win Bigger Contracts',
    description: 'The SBA Mentor-Protégé Program lets small businesses form joint ventures with established contractors and compete for set-asides they could not win alone. Here is how it works and how to apply.',
    url: 'https://capturepilot.com/blog/mentor-protege-program',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
