"use client";

import LeadMagnetPage from "@/app/resources/_components/LeadMagnetPage";

export default function FarClauseQuickReferencePage() {
  return (
    <LeadMagnetPage
      slug="far-clause-quick-reference"
      assetTitle="FAR Clauses Quick-Reference Decoder — The 50 Most-Cited"
      assetFileName="FLK_09_FAR_Clause_Quick_Reference_Decoder.pdf"
      hubspotSource="lead-magnet-far-clause-quick-reference"
      seo={{
        title: "FAR Clauses Quick Reference: 50 Most-Cited Decoded",
        description:
          "Free PDF decoder for the 50 FAR clauses on small-business contracts. Plain-English breakdowns, red flags, and what to negotiate. Download free now.",
        keyword: "far clauses",
      }}
      hero={{
        headline: "50 FAR clauses, decoded in plain English",
        subheadline:
          "The Federal Acquisition Regulation has 1,800+ clauses. This PDF covers the 50 you'll actually see on a small-business contract — what each one means, what to watch for, and when to push back.",
        bullets: [
          "Each clause explained in 2–3 sentences, no legalese",
          "Red-flag language that signals risk to your firm",
          "Which clauses are negotiable and which aren't",
          "DFARS variants called out where they differ from FAR",
        ],
        pageCount: 16,
        format: "PDF",
      }}
      whatsInside={[
        "50-clause reference table with plain-English summaries of what each clause actually requires from you",
        "Red-flag callouts for clauses that limit your subcontracting, cap your markups, or expose you to audits",
        "Clause 52.219-14 (Limitations on Subcontracting) broken down by contract type — fixed-price vs. T&M",
        "Termination clauses (52.249 series) explained — what 'for convenience' really costs you",
        "Payment and prompt-pay clauses (52.232 series) and how to use them when an agency is slow to pay",
        "DFARS variants for DoD contracts — where the defense version differs from the civilian FAR",
        "Ethics and compliance clauses (52.203 series) with notes on what triggers a violation",
        "A one-page 'which clauses to read first' priority map by contract type",
      ]}
      whyItExists={`Every time I reviewed a new federal contract, I'd end up in the same loop: grep for clause number, open acquisition.gov, read three screens of regulatory text, still not sure what it means in practice. There was no plain-English translation layer anywhere.\n\nI built this because the FAR is written by lawyers for lawyers. The 1,800-clause structure is genuinely necessary for a $700B procurement system. But the 50 clauses that show up on 90% of small-business contracts can be explained in plain English without losing anything important. That's this document.\n\nIt's not a substitute for your attorney on a $10M contract. It's the thing you read before that conversation so you're not starting from zero. If you've ever signed a federal contract without fully understanding what you agreed to — this is the decoder you should've had first.`}
      whoThisIsFor={[
        "Small-business owners signing their first few federal contracts and want to understand what's in them",
        "8(a), SDVOSB, WOSB, and HUBZone firms chasing set-aside awards under $5M where legal review isn't always in the budget",
        "Capture managers who need to brief a CEO on contract risk before they sign",
        "Subcontractors who receive flow-down clauses from a prime and need to know which ones bite",
        "GovCon proposal writers who want to understand the compliance baseline before writing Section L/M responses",
        "Anyone who's looked at a clause like 52.222-26 and had no idea what it required of them",
      ]}
      whoItIsnt={[
        "Large primes with in-house legal — your counsel already covers this, in more depth",
        "Firms pursuing IDIQ vehicles over $50M where clause-specific legal review is non-negotiable",
        "Anyone looking for a DIY legal opinion they can cite in a dispute — this isn't that",
        "Contractors in classified or ITAR-heavy programs where DFARS supplements have their own complexity beyond what's here",
      ]}
      exampleSnippet={`FAR 52.219-14 (Limitations on Subcontracting) says you must perform at least 50% of the cost of the contract with your own employees on a services set-aside. That sounds simple until you realize 'cost of the contract' excludes materials and subcontractor costs — so the math is different than the percentage in the clause text suggests. If you subcontract too much of the labor, you're in violation even if you hit 50% of total contract value.`}
      faqs={[
        {
          q: "Is this really free?",
          a: "Yes. You give us your name and work email, we send you the PDF. That's the whole transaction. You'll get an occasional email from CapturePilot — you can unsubscribe any time, one click.",
        },
        {
          q: "How long is it?",
          a: "16 pages. It's a reference document, not a read-cover-to-cover guide. You'll use it with a contract open in front of you, looking up specific clauses as you go.",
        },
        {
          q: "Will you spam me?",
          a: "No. We send useful things — new resources, product updates, the occasional federal contracting tip. Most people tell us the frequency is low. Unsubscribe is one click.",
        },
        {
          q: "Is it current for FY2026 contracts?",
          a: "Yes. The core FAR clauses in this decoder haven't changed substantially in several years. We flag the handful that were updated in the FY2025–2026 rulemaking cycle. If you're reviewing a contract with an amendment date post-2025, always verify the exact clause text on acquisition.gov.",
        },
        {
          q: "Can I share this with my team?",
          a: "Yes. No restrictions. Print it, pass it around, put it in your new-employee onboarding folder. The more people on your team who understand what they're signing, the better.",
        },
        {
          q: "What if I'm not registered on SAM.gov yet?",
          a: "This resource is still useful. Understanding what's in a contract is valuable before you're even eligible to receive one. That said, if you're starting from scratch on SAM, our SAM.gov Registration Walkthrough is probably a better first download.",
        },
        {
          q: "What happens after I download?",
          a: "You get the PDF in your inbox, usually within a few minutes. After that, we'll send you a few follow-up emails about federal contracting resources — tips, new guides, and occasionally information about CapturePilot. Nothing pushy. You can unsubscribe whenever.",
        },
      ]}
    />
  );
}
