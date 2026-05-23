import { breadcrumbJsonLd, softwareFeatureJsonLd, faqJsonLd } from "@/lib/schema";

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Forecast Radar", path: "/features/forecast-radar" },
  ]);

  const software = softwareFeatureJsonLd({
    name: "CapturePilot Agency Forecast Radar",
    url: "https://www.capturepilot.com/features/forecast-radar",
    description:
      "Monitors VA, DoD, GSA, DOE, DHS, and other federal agency procurement forecasts for changes. NAICS-matched alerts fire when new line items appear or estimates shift, giving capture teams 6-12 months of lead time before solicitations.",
  });

  const faq = faqJsonLd([
    {
      q: "Which agencies does Forecast Radar monitor?",
      a: "VA (Veterans Affairs), DoD (Defense), GSA (General Services Administration), DOE (Energy), DHS (Homeland Security), and growing. Each agency publishes annual procurement forecasts with line items, NAICS, expected value bands, and target award quarters. We poll these on a daily cron and diff against the prior snapshot so we catch additions and revisions.",
    },
    {
      q: "How fast do I see new forecast items?",
      a: "Within 24 hours of the agency publishing the change. The change-detection cron runs at 06:30 UTC daily, computes a SHA-256 hash of the forecast page contents, and fires NAICS-matched alerts to any user whose profile overlaps.",
    },
    {
      q: "Why is the forecast more valuable than SAM.gov?",
      a: "Forecasts appear 6-18 months before a contract hits SAM.gov as a solicitation. This is the highest-leverage window for capture: you can shape requirements via Sources Sought / RFI, build teaming partnerships, develop past performance, and position your win themes — all before competitors even know the contract exists.",
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
