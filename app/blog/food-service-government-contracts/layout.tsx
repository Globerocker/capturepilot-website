import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Service Government Contracts: Military Bases & Federal Facilities (2026)',
  description: 'How to win food service government contracts at military bases, VA hospitals, and federal facilities. NAICS codes, DLA prime vendor programs, set-asides, and step-by-step entry.',
  keywords: 'food service government contracts, military base catering contracts, DLA Troop Support food service, NAICS 722310 government contracts, federal food service contracts small business',
  alternates: { canonical: 'https://capturepilot.com/blog/food-service-government-contracts' },
  openGraph: {
    title: 'Food Service Government Contracts: Catering to Military Bases and Federal Facilities',
    description: 'How to win food service government contracts at military bases, VA hospitals, and federal facilities. DLA programs, set-asides, and a step-by-step entry path.',
    url: 'https://capturepilot.com/blog/food-service-government-contracts',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
