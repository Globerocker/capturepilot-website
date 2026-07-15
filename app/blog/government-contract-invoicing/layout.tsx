import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Invoice a Government Agency: Getting Paid on Federal Contracts (2026)',
  description: 'Step-by-step guide to federal invoicing: IPP vs WAWF, the 10 elements of a proper invoice, Prompt Payment Act rights, and the mistakes that delay payment.',
  keywords: 'how to invoice government agency, federal contract invoicing, IPP invoice processing platform, WAWF wide area workflow, proper invoice FAR 52.232-25, Prompt Payment Act, government contract billing, DoD invoice submission',
  alternates: { canonical: 'https://capturepilot.com/blog/government-contract-invoicing' },
  openGraph: {
    title: 'How to Invoice a Government Agency: Getting Paid on Federal Contracts (2026)',
    description: 'Step-by-step guide to federal invoicing: IPP vs WAWF, the 10 elements of a proper invoice, Prompt Payment Act rights, and the mistakes that delay payment.',
    url: 'https://capturepilot.com/blog/government-contract-invoicing',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
