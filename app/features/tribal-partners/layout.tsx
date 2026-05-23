import { breadcrumbJsonLd, softwareFeatureJsonLd, faqJsonLd } from "@/lib/schema";

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Certified Teaming", path: "/features/tribal-partners" },
  ]);

  const software = softwareFeatureJsonLd({
    name: "CapturePilot Certified Teaming Directory",
    url: "https://www.capturepilot.com/features/tribal-partners",
    description:
      "Curated directory of ~800 SBA-certified tribal, 8(a), HUBZone, WOSB, and SDVOSB firms. NAICS-overlap scoring, point-of-contact information, and one-click teaming shortlist export — built for primes and subs assembling JV partners for set-aside bids.",
  });

  const faq = faqJsonLd([
    {
      q: "How many certified firms are in the directory?",
      a: "Approximately 800 firms covering 8(a), HUBZone, WOSB, EDWOSB, SDVOSB, VOSB, and tribal/ANC entities. We seed from SBA's Dynamic Small Business Search, SAM.gov certifications, and curated tribal contractor lists, refreshed monthly.",
    },
    {
      q: "How does NAICS-overlap scoring work?",
      a: "When you set your primary NAICS codes in your profile, we rank partner firms by the number of overlapping codes — exact match first, then 4-digit prefix, then 2-digit prefix. A firm matching 3 of your 5 NAICS at 6-digit level scores higher than one matching only at 2-digit level. You can also filter by specific certifications (e.g. show only HUBZone+SDVOSB).",
    },
    {
      q: "Can I get contact information for SBLOs at large primes?",
      a: "Yes. The companion prime_sblos directory has Small Business Liaison Officer contacts at top-tier primes (BAE, Lockheed, Raytheon, GDIT, GE, Honeywell, Booz Allen, Leidos) for subcontracting outreach. SBLOs are the official channel primes use to source small-business teaming partners.",
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
