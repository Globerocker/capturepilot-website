import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proposal Color Team Reviews: Pink, Red, Gold — Complete Guide | CapturePilot',
  description: 'Learn how proposal color team reviews (Pink, Red, Gold) work in government contracting, when to run each, and how small businesses can implement them to win more.',
  keywords: 'proposal color team review, proposal color teams, pink team review, red team proposal, gold team review, government proposal review process, federal proposal review, proposal review process government contracting, color team proposal management, APMP proposal review',
  alternates: { canonical: 'https://capturepilot.com/blog/proposal-color-teams' },
  openGraph: {
    title: 'Proposal Color Teams: How Winning Contractors Review Bids Before Submission',
    description: 'Pink Team, Red Team, Gold Team — the structured review process that separates contractors who win consistently from the ones who finish second. A practical guide for small businesses.',
    url: 'https://capturepilot.com/blog/proposal-color-teams',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
