import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Section L and Section M of Government RFPs: Complete Guide | CapturePilot',
  description: 'How to use Section L (instructions) and Section M (evaluation factors) of a federal RFP to structure a winning proposal. Compliance matrix, factor weighting, LPTA vs. best value.',
  keywords: 'section L section M government proposal, RFP section L instructions, RFP section M evaluation factors, federal proposal evaluation criteria, compliance matrix government proposal, LPTA vs best value proposal, FAR 15.304 evaluation factors, uniform contract format UCF, government proposal structure, federal RFP instructions',
  alternates: { canonical: 'https://capturepilot.com/blog/section-l-section-m-guide' },
  openGraph: {
    title: 'Section L and Section M: How to Use an RFP\'s Own Instructions to Build a Winning Proposal',
    description: 'Every federal RFP tells you exactly how it will be evaluated. Most contractors skim it. The ones who win read Section L and Section M first — then structure every word around what the government said it\'s scoring.',
    url: 'https://capturepilot.com/blog/section-l-section-m-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
