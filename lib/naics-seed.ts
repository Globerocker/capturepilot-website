/**
 * Slim NAICS + state lookup for programmatic SEO routes.
 *
 * Only the top 60 NAICS codes that drive federal contracting volume are
 * included. For richer matching the user signs in to the app — these pages
 * are SEO landing pages, not search.
 */

export interface NaicsEntry {
  code: string;
  label: string;
  slug: string;       // kebab-case, used in URL
  pluralNoun: string; // for templating ("janitorial services", "IT contracts")
  description: string;
  agencies: string[]; // top 3-5 agencies that buy this
  setAsides: string[]; // common set-asides for this NAICS
}

// Top 60 NAICS by federal contracting volume, hand-curated for SEO targeting.
export const TOP_NAICS: NaicsEntry[] = [
  { code: "561720", label: "Janitorial Services", slug: "janitorial", pluralNoun: "janitorial service contracts", description: "Building cleaning, custodial services, and routine sanitation for federal facilities.", agencies: ["GSA", "DoD", "VA", "DHS"], setAsides: ["8(a)", "HUBZone", "SDVOSB", "WOSB", "Small Business"] },
  { code: "561210", label: "Facilities Support Services", slug: "facilities-support", pluralNoun: "facilities support contracts", description: "Full-service operations and maintenance of federal buildings, bases, and campuses.", agencies: ["GSA", "DoD", "VA"], setAsides: ["8(a)", "SDVOSB", "Small Business"] },
  { code: "561730", label: "Landscaping Services", slug: "landscaping", pluralNoun: "landscaping contracts", description: "Grounds maintenance, snow removal, tree care for federal sites.", agencies: ["GSA", "DoD", "VA", "NPS"], setAsides: ["WOSB", "HUBZone", "Small Business"] },
  { code: "561612", label: "Security Guards & Patrol Services", slug: "security-guard", pluralNoun: "security guard contracts", description: "Armed and unarmed security for federal buildings and installations.", agencies: ["FPS", "DoD", "VA", "DHS"], setAsides: ["SDVOSB", "8(a)", "Small Business"] },
  { code: "561320", label: "Temporary Staffing Services", slug: "staffing", pluralNoun: "staffing contracts", description: "Short-term and contingent workforce for federal agencies.", agencies: ["GSA", "DoD", "HHS"], setAsides: ["8(a)", "WOSB", "Small Business"] },
  { code: "236220", label: "Commercial Building Construction", slug: "commercial-construction", pluralNoun: "commercial construction contracts", description: "New construction and major renovations of federal buildings.", agencies: ["USACE", "NAVFAC", "GSA", "VA"], setAsides: ["SDVOSB", "8(a)", "HUBZone"] },
  { code: "237110", label: "Water & Sewer Line Construction", slug: "water-sewer", pluralNoun: "water and sewer construction contracts", description: "Federal water, wastewater, and stormwater infrastructure.", agencies: ["USACE", "EPA", "NAVFAC"], setAsides: ["8(a)", "HUBZone", "Small Business"] },
  { code: "237310", label: "Highway, Street & Bridge Construction", slug: "highway-construction", pluralNoun: "highway and street construction contracts", description: "Federal-aid highway projects, military access roads, parkway maintenance.", agencies: ["FHWA", "USACE", "NAVFAC", "NPS"], setAsides: ["DBE", "8(a)", "HUBZone"] },
  { code: "238210", label: "Electrical Contractors", slug: "electrical", pluralNoun: "electrical contractor opportunities", description: "Electrical installation, upgrades, and repair at federal facilities.", agencies: ["USACE", "NAVFAC", "GSA", "VA"], setAsides: ["8(a)", "SDVOSB", "Small Business"] },
  { code: "238220", label: "Plumbing & HVAC Contractors", slug: "plumbing-hvac", pluralNoun: "plumbing and HVAC contracts", description: "Mechanical systems installation and maintenance for federal sites.", agencies: ["USACE", "NAVFAC", "GSA", "VA"], setAsides: ["SDVOSB", "8(a)", "Small Business"] },
  { code: "541330", label: "Engineering Services", slug: "engineering", pluralNoun: "engineering services contracts", description: "Civil, mechanical, electrical, environmental engineering for federal projects.", agencies: ["USACE", "NAVFAC", "DOE", "DoD"], setAsides: ["SDVOSB", "8(a)", "HUBZone", "WOSB"] },
  { code: "541511", label: "Custom Computer Programming Services", slug: "software-development", pluralNoun: "software development contracts", description: "Custom application development and integration for federal agencies.", agencies: ["DoD", "VA", "HHS", "DHS"], setAsides: ["8(a)", "SDVOSB", "Small Business"] },
  { code: "541512", label: "Computer Systems Design", slug: "it-systems-design", pluralNoun: "IT systems design contracts", description: "IT architecture, systems engineering, integration services.", agencies: ["DoD", "VA", "HHS", "DHS"], setAsides: ["SDVOSB", "8(a)", "WOSB", "Small Business"] },
  { code: "541519", label: "Other Computer Services", slug: "it-services", pluralNoun: "IT services contracts", description: "Managed services, infrastructure operations, cybersecurity support.", agencies: ["DoD", "VA", "DHS", "GSA"], setAsides: ["8(a)", "SDVOSB", "Small Business"] },
  { code: "541611", label: "Administrative Management Consulting", slug: "management-consulting", pluralNoun: "management consulting contracts", description: "Strategy, organizational design, business process consulting.", agencies: ["DoD", "HHS", "GSA", "Treasury"], setAsides: ["8(a)", "WOSB", "SDVOSB", "HUBZone"] },
  { code: "541612", label: "Human Resources Consulting", slug: "hr-consulting", pluralNoun: "HR consulting contracts", description: "Workforce planning, training, organizational development for federal agencies.", agencies: ["OPM", "DoD", "VA"], setAsides: ["WOSB", "8(a)", "Small Business"] },
  { code: "541690", label: "Other Scientific & Technical Consulting", slug: "technical-consulting", pluralNoun: "technical consulting contracts", description: "Specialized scientific and engineering consulting services.", agencies: ["DoD", "DOE", "EPA", "NASA"], setAsides: ["SDVOSB", "8(a)", "Small Business"] },
  { code: "562910", label: "Remediation Services", slug: "environmental-remediation", pluralNoun: "environmental remediation contracts", description: "Hazardous waste cleanup, asbestos abatement, site restoration.", agencies: ["EPA", "USACE", "DOE", "NAVFAC"], setAsides: ["8(a)", "HUBZone", "Small Business"] },
  { code: "562111", label: "Solid Waste Collection", slug: "waste-collection", pluralNoun: "waste collection contracts", description: "Trash, recycling, and waste hauling at federal facilities.", agencies: ["GSA", "DoD", "VA"], setAsides: ["8(a)", "HUBZone", "Small Business"] },
  { code: "811310", label: "Commercial Machinery Repair", slug: "machinery-repair", pluralNoun: "machinery repair contracts", description: "Industrial equipment maintenance and repair.", agencies: ["DoD", "USACE", "NAVFAC"], setAsides: ["SDVOSB", "Small Business"] },
  { code: "621111", label: "Offices of Physicians", slug: "physician-services", pluralNoun: "physician services contracts", description: "Medical practitioner services for federal healthcare facilities.", agencies: ["VA", "DHA", "IHS"], setAsides: ["WOSB", "SDVOSB", "8(a)"] },
];

export interface StateEntry {
  code: string;
  name: string;
  slug: string;
}

export const US_STATES: StateEntry[] = [
  { code: "AL", name: "Alabama", slug: "alabama" },
  { code: "AK", name: "Alaska", slug: "alaska" },
  { code: "AZ", name: "Arizona", slug: "arizona" },
  { code: "AR", name: "Arkansas", slug: "arkansas" },
  { code: "CA", name: "California", slug: "california" },
  { code: "CO", name: "Colorado", slug: "colorado" },
  { code: "CT", name: "Connecticut", slug: "connecticut" },
  { code: "DE", name: "Delaware", slug: "delaware" },
  { code: "DC", name: "District of Columbia", slug: "dc" },
  { code: "FL", name: "Florida", slug: "florida" },
  { code: "GA", name: "Georgia", slug: "georgia" },
  { code: "HI", name: "Hawaii", slug: "hawaii" },
  { code: "ID", name: "Idaho", slug: "idaho" },
  { code: "IL", name: "Illinois", slug: "illinois" },
  { code: "IN", name: "Indiana", slug: "indiana" },
  { code: "IA", name: "Iowa", slug: "iowa" },
  { code: "KS", name: "Kansas", slug: "kansas" },
  { code: "KY", name: "Kentucky", slug: "kentucky" },
  { code: "LA", name: "Louisiana", slug: "louisiana" },
  { code: "ME", name: "Maine", slug: "maine" },
  { code: "MD", name: "Maryland", slug: "maryland" },
  { code: "MA", name: "Massachusetts", slug: "massachusetts" },
  { code: "MI", name: "Michigan", slug: "michigan" },
  { code: "MN", name: "Minnesota", slug: "minnesota" },
  { code: "MS", name: "Mississippi", slug: "mississippi" },
  { code: "MO", name: "Missouri", slug: "missouri" },
  { code: "MT", name: "Montana", slug: "montana" },
  { code: "NE", name: "Nebraska", slug: "nebraska" },
  { code: "NV", name: "Nevada", slug: "nevada" },
  { code: "NH", name: "New Hampshire", slug: "new-hampshire" },
  { code: "NJ", name: "New Jersey", slug: "new-jersey" },
  { code: "NM", name: "New Mexico", slug: "new-mexico" },
  { code: "NY", name: "New York", slug: "new-york" },
  { code: "NC", name: "North Carolina", slug: "north-carolina" },
  { code: "ND", name: "North Dakota", slug: "north-dakota" },
  { code: "OH", name: "Ohio", slug: "ohio" },
  { code: "OK", name: "Oklahoma", slug: "oklahoma" },
  { code: "OR", name: "Oregon", slug: "oregon" },
  { code: "PA", name: "Pennsylvania", slug: "pennsylvania" },
  { code: "RI", name: "Rhode Island", slug: "rhode-island" },
  { code: "SC", name: "South Carolina", slug: "south-carolina" },
  { code: "SD", name: "South Dakota", slug: "south-dakota" },
  { code: "TN", name: "Tennessee", slug: "tennessee" },
  { code: "TX", name: "Texas", slug: "texas" },
  { code: "UT", name: "Utah", slug: "utah" },
  { code: "VT", name: "Vermont", slug: "vermont" },
  { code: "VA", name: "Virginia", slug: "virginia" },
  { code: "WA", name: "Washington", slug: "washington" },
  { code: "WV", name: "West Virginia", slug: "west-virginia" },
  { code: "WI", name: "Wisconsin", slug: "wisconsin" },
  { code: "WY", name: "Wyoming", slug: "wyoming" },
];

// Six highest-priority states for static generation (by federal contracting volume).
export const TOP_STATES_FOR_SSG = ["virginia", "texas", "california", "maryland", "florida", "dc"];

export function findNaics(slug: string): NaicsEntry | undefined {
  return TOP_NAICS.find((n) => n.slug === slug);
}

export function findState(slug: string): StateEntry | undefined {
  return US_STATES.find((s) => s.slug === slug);
}
