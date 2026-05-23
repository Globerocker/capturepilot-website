import { breadcrumbJsonLd, softwareFeatureJsonLd, faqJsonLd } from "@/lib/schema";

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Recompete Radar", path: "/features/recompete-radar" },
  ]);

  const software = softwareFeatureJsonLd({
    name: "CapturePilot Recompete Radar",
    url: "https://www.capturepilot.com/features/recompete-radar",
    description:
      "Predict federal contract recompetes 3-18 months ahead. Scores expiring USAspending awards by recompete confidence (months-to-end, original competition type, incumbent size, agency cadence) so capture teams can position before the RFP drops.",
  });

  const faq = faqJsonLd([
    {
      q: "How far in advance can Recompete Radar predict a recompete?",
      a: "We surface candidates 3-18 months before period-of-performance end. The sweet spot is 6-12 months out, which scores a +0.2 confidence boost because that window aligns with typical agency RFP preparation time. Earlier and you risk premature engagement; later and the incumbent has already locked in their position.",
    },
    {
      q: "How is recompete confidence calculated?",
      a: "Base score 0.4, plus +0.2 if months-to-end is between 6 and 12 (sweet spot for RFP prep), +0.15 if the original award was competitive (not sole-source), +0.1 if the incumbent is a large prime (agencies often re-compete to SBs), +0.1 if the agency has historical recompete cadence in the same NAICS, and -0.1 if the incumbent recently received a contract modification extending the period of performance. High confidence ≥0.7, Medium 0.5-0.7, Low <0.5.",
    },
    {
      q: "Where does the recompete data come from?",
      a: "USASpending.gov contract award data, queried weekly for contracts with period-of-performance end dates in the next 3-18 months. We also cross-reference our existing opportunities table to match upcoming recompetes against any Sources Sought or RFI notices that may signal early agency engagement.",
    },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
