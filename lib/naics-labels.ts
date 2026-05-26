/**
 * NAICS code → human-readable label + slug mappings.
 *
 * Built from CapturePilot's primary-NAICS coverage. Adding a NAICS here
 * also opens its public aggregator page at /contractors/in/<slug>. The
 * sitemap walker reads this file at build time to enumerate the routes.
 */

export interface NaicsEntry {
    code: string;
    label: string;
    slug: string;
    /** Short copy describing what the NAICS covers — appears in page hero. */
    blurb: string;
}

export const NAICS_LABELS: NaicsEntry[] = [
    { code: "336411", slug: "aircraft-manufacturing", label: "Aircraft Manufacturing",
      blurb: "Federal contractors building manned and unmanned aircraft for the Air Force, Navy, Army, and NASA. The most concentrated NAICS in federal procurement — top 10 firms capture > 95% of awards." },
    { code: "541512", slug: "computer-systems-design-services", label: "Computer Systems Design Services",
      blurb: "Firms that design, integrate, and operate custom IT systems for federal agencies. Mix of large primes (Accenture Federal, GDIT, Leidos) and specialized boutiques." },
    { code: "541330", slug: "engineering-services", label: "Engineering Services",
      blurb: "Engineering for defense, infrastructure, and government R&D. Includes shipbuilding (Electric Boat), naval engineering, and large multi-discipline firms (Booz Allen, SAIC)." },
    { code: "541715", slug: "research-and-development",            label: "R&D — Physical, Engineering, Life Sciences",
      blurb: "Federally funded R&D centers and FFRDCs. Top recipients include Fluor Marine Propulsion, Caltech, and The Aerospace Corporation." },
    { code: "236220", slug: "commercial-construction",            label: "Commercial and Institutional Building Construction",
      blurb: "Federal building construction — military housing, courthouses, embassies, federal facilities. Mix of national primes and joint ventures targeting set-asides." },
    { code: "541611", slug: "management-consulting",              label: "Administrative Management Consulting",
      blurb: "Strategic and operational consulting for federal agencies. Dominated by Big 4-style firms (Deloitte, Guidehouse) and specialty advisory shops." },
    { code: "517311", slug: "telecommunications",                  label: "Wired Telecommunications Carriers",
      blurb: "Federal voice + data infrastructure contractors. Carriers (Lumen, AT&T Government) and managed-service primes serving DoD networks." },
    { code: "541219", slug: "accounting-services",                 label: "Other Accounting Services",
      blurb: "Federal financial-audit and accounting firms — most often Big 4 + specialty federal-audit boutiques." },
    { code: "561210", slug: "facilities-support-services",         label: "Facilities Support Services",
      blurb: "Multi-discipline facility O&M contractors. Includes nuclear-weapons-complex prime contractors (Triad National Security, Sandia)." },
    { code: "541620", slug: "environmental-consulting",            label: "Environmental Consulting Services",
      blurb: "NEPA reviews, remediation engineering, climate-adaptation studies. EPA, DOE, and DoD environmental cleanup are the biggest customers." },
    { code: "561720", slug: "janitorial-services",                 label: "Janitorial Services",
      blurb: "Federal building cleaning + custodial. Heavy AbilityOne and small-business set-aside activity. 2.7B sq ft of federal real estate." },
    { code: "238210", slug: "electrical-contractors",              label: "Electrical Contractors",
      blurb: "Specialty electrical contracting on federal projects — power infrastructure, communications, fire alarm." },
    { code: "562112", slug: "hazardous-waste-collection",          label: "Hazardous Waste Collection",
      blurb: "EPA / DoD hazardous-waste handlers. Small specialized firms with high regulatory barriers to entry." },
    { code: "541214", slug: "payroll-services",                    label: "Payroll Services",
      blurb: "Federal payroll processing — narrower market dominated by State Street and a few national HR firms." },
    { code: "541310", slug: "architectural-services",              label: "Architectural Services",
      blurb: "A/E firms designing federal buildings, embassies, military facilities. WSP, Jacobs Government Services, AECOM are top primes." },
    { code: "238220", slug: "hvac-and-plumbing",                   label: "Plumbing, Heating, Air-Conditioning Contractors",
      blurb: "Specialty mechanical contractors on federal building projects. Mostly small-business set-asides + JV structures." },
    { code: "541618", slug: "other-management-consulting",         label: "Other Management Consulting",
      blurb: "Specialty consulting outside the Big 4 — clinical, audit, evaluation, program management for HHS / CMS / VA." },
    { code: "611310", slug: "universities",                        label: "Colleges, Universities, and Professional Schools",
      blurb: "Universities + medical centers receiving federal research grants. Princeton, Vanderbilt, MIT Lincoln Lab are top recipients." },
    { code: "541990", slug: "other-professional-services",         label: "Other Professional, Scientific, and Technical Services",
      blurb: "Catch-all for federally-funded technical work. Includes Battelle Energy Alliance, The MITRE Corporation, and other FFRDCs." },
];

export const NAICS_BY_SLUG: Record<string, NaicsEntry> = Object.fromEntries(
    NAICS_LABELS.map((n) => [n.slug, n]),
);

export const NAICS_BY_CODE: Record<string, NaicsEntry> = Object.fromEntries(
    NAICS_LABELS.map((n) => [n.code, n]),
);

export function naicsToSlug(code: string | null | undefined): string | null {
    if (!code) return null;
    return NAICS_BY_CODE[code]?.slug || null;
}

export function naicsToLabel(code: string | null | undefined): string | null {
    if (!code) return null;
    return NAICS_BY_CODE[code]?.label || null;
}
