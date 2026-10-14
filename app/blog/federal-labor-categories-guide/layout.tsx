import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labor Categories in Federal Contracts: Build a Competitive Rate Structure | CapturePilot',
  description: 'Learn how labor categories (LCATs) work in federal contracts — qualification requirements, fully burdened rate calculation, GSA schedule pricing, and OASIS+ rules.',
  keywords: 'labor categories government contract, LCAT federal contracting, fully burdened labor rate, wrap rate government contractor, GSA schedule labor rates, OASIS plus labor categories, Service Contract Act wage determinations, government contractor pricing, labor category qualifications, federal proposal staffing plan',
  alternates: { canonical: 'https://capturepilot.com/blog/federal-labor-categories-guide' },
  openGraph: {
    title: 'Labor Categories in Federal Contracts: How to Build a Competitive Rate Structure',
    description: 'LCATs define who you can bill and at what rate on every federal service contract. Get your qualifications and pricing wrong and you lose the bid — or face a compliance audit after you win.',
    url: 'https://capturepilot.com/blog/federal-labor-categories-guide',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
