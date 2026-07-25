import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contract Debriefings: How to Get Feedback After a Loss | CapturePilot',
  description: 'Learn how to request a government contract debriefing under FAR 15.506, what agencies must disclose, enhanced DoD debriefing rights, and how to use feedback to win next time.',
  keywords: 'government contract debriefing, FAR 15.506, postaward debriefing, bid protest, DFARS 215.506, DoD enhanced debriefing, proposal feedback, government contract loss, debriefing request',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-debriefing' },
  openGraph: {
    title: 'Government Contract Debriefings: How to Get Feedback After a Loss and Win Next Time',
    description: 'Learn how to request a government contract debriefing under FAR 15.506, what agencies must disclose, enhanced DoD debriefing rights, and how to turn feedback into wins.',
    url: 'https://capturepilot.com/blog/government-contract-debriefing',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
