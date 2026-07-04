import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Small Business Joint Ventures for Government Contracts: How to Structure a Deal That Wins | CapturePilot',
  description: 'Learn how small business joint ventures work in federal contracting — JV agreement requirements, the 40% work rule, SAM.gov registration, and how to avoid compliance traps.',
  keywords: 'small business joint venture government contracts, SBA joint venture rules, government contract JV agreement, joint venture set aside, mentor protege joint venture, 8a joint venture, SDVOSB joint venture, popular joint venture government contracting, JV work performance requirements, two year award restriction joint venture',
  alternates: { canonical: 'https://capturepilot.com/blog/joint-venture-government-contracts' },
  openGraph: {
    title: 'Small Business Joint Ventures: How to Structure a Government Contract Deal That Actually Wins',
    description: 'The complete guide to forming and running a small business joint venture for federal set-aside contracts — from JV agreement requirements and SAM.gov registration to the 40% work rule and two-year award restriction.',
    url: 'https://capturepilot.com/blog/joint-venture-government-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
