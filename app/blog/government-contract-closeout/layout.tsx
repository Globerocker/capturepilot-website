import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contract Closeout: How to Finish and Get Final Payment | CapturePilot',
  description: 'Step-by-step guide to the government contract closeout process — FAR timelines, final invoice, release of claims, DCAA audits, and how to get your final payment without delays.',
  keywords: 'government contract closeout, contract closeout process, FAR 4.804, final invoice government contract, release of claims government contract, DCAA closeout audit, quick closeout FAR 42.708, contract completion statement, government contract final payment, CPARS performance rating closeout',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-closeout' },
  openGraph: {
    title: 'Government Contract Closeout: How to Finish a Contract and Get Your Final Payment',
    description: 'The complete guide to government contract closeout — FAR timelines by contract type, what documents to submit, how to handle DCAA audits, and how to use quick closeout to speed up final payment.',
    url: 'https://capturepilot.com/blog/government-contract-closeout',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
