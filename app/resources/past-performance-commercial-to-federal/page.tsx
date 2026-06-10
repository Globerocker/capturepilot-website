import LeadMagnetPage from "../_components/LeadMagnetPage";

export default function PastPerformanceCommercialToFederalPage() {
  return (
    <LeadMagnetPage
      slug="past-performance-commercial-to-federal"
      assetTitle="How to Translate Commercial Past Performance for Federal Bids"
      assetFileName="FLK_06_Commercial_to_Federal_Past_Performance.pdf"
      hubspotSource="lead-magnet-past-performance-commercial-to-federal"
      seo={{
        title: "Capability Statement Past Performance for Federal Bids (PDF)",
        description:
          "Free 13-page PDF: translate commercial past performance into the format federal evaluators expect. 3 worked examples + fill-in template. Download free.",
        keyword: "capability statement past performance",
      }}
      hero={{
        headline: "Your past performance is real. Write it up right.",
        subheadline:
          "Federal evaluators aren't reading a LinkedIn endorsement — they're scoring a structured form. This 13-page PDF shows you the exact format they expect, with 3 worked examples you can lift directly.",
        bullets: [
          "Exact past performance format federal evaluators score against",
          "3 worked examples: commercial → federal translation",
          "Fill-in template you can complete in under an hour",
          "Common mistakes that knock small firms out on first review",
        ],
        pageCount: 13,
        format: "PDF",
      }}
      whatsInside={[
        "Side-by-side comparison of a commercial reference letter vs. a federal past performance write-up — same project, completely different framing",
        "The five required fields in every past performance submission: contract number, dollar value, period of performance, scope summary, and measurable outcomes",
        "Three worked examples translating commercial projects (commercial construction, IT services, facilities maintenance) into federal past performance narratives",
        "A fill-in-the-blank past performance template structured around the CPARS scoring criteria federal evaluators use",
        "How to handle 'no federal past performance yet' — what substitutes evaluators actually accept vs. what they don't",
        "What makes a past performance reference 'relevant' under FAR 15.305 — and how to argue relevance when your work is adjacent, not identical",
        "Tips for priming your POC references before the government calls — what they'll be asked and how to prepare them to answer",
        "How to present subcontractor and teaming experience when you weren't the prime",
      ]}
      whyItExists={`Every week we talk to small firms with five, ten, even fifteen years of solid commercial work — and they're losing federal evaluations because they can't describe it properly. Not because the work wasn't there. Because the format was wrong.\n\nFederal past performance isn't a testimonial. It's scored against criteria: relevance, recency, scope, dollar value, measurable outcomes. Evaluators fill out a rubric. If your write-up doesn't map to that rubric, the score suffers — even if the underlying project was excellent. Saying "we delivered a $2M facilities upgrade on time" in a paragraph is not the same as filling out the structure the CO is grading against.\n\nI built this because it's the single most fixable gap I see in small-business federal proposals. It doesn't require more experience — it requires knowing the format. This PDF shows you the format, walks through three real-world translations, and gives you a template you can complete before your next bid closes.`}
      whoThisIsFor={[
        "Small businesses with 2–10 years of commercial work that haven't won a federal prime contract yet",
        "SDVOSB, WOSB, and 8(a) firms preparing their first federal proposal and unsure how to present prior work",
        "Companies with strong commercial clients (Fortune 500s, municipalities, large GCs) who don't know how to frame that for federal evaluators",
        "Proposal managers at firms under $10M revenue who are putting together their first competitive past performance volume",
        "Subcontractors looking to move into prime contracting and needing to package their teaming history",
        "Business owners who've received an 'insufficient past performance' evaluation finding and want to understand why",
      ]}
      whoItIsnt={[
        "8(a) and other set-aside firms with five or more federal contracts already awarded — you know this format, this won't teach you anything new",
        "Large business contractors or those primarily pursuing GWACs and IDIQs where past performance is evaluated through formal CPARS records rather than narrative submissions",
        "Companies pursuing contracts under the simplified acquisition threshold ($250K) where past performance is rarely evaluated formally",
        "Proposal consultants or capture managers looking for advanced color-team guidance — this is foundational, not advanced strategy",
      ]}
      exampleSnippet="Commercial reference letter version: 'ABC Facilities was a pleasure to work with. They completed our office renovation on time and the team was professional.' Federal past performance version: 'Provided full-scope commercial renovation services for a 14,000 sq ft Class A office space. Contract value: $1.1M. Period of performance: March 2023 – August 2023. Delivered 11 days ahead of schedule. Zero safety incidents. Client POC: [name, title, direct phone].' Same project. Completely different score."
      faqs={[
        {
          q: "Is this really free?",
          a: "Yes. You give us your email and we send you the PDF. No credit card, no trial, no pitch call required.",
        },
        {
          q: "How long is it?",
          a: "13 pages. It's structured so you can work through it in one sitting — intro, worked examples, template, and a short checklist at the end.",
        },
        {
          q: "Will you spam me after I download it?",
          a: "No. You'll get the PDF and occasional emails from CapturePilot when we publish something relevant to federal contracting. Unsubscribe from any email, instantly.",
        },
        {
          q: "Is this up to date for FY2026?",
          a: "Yes. The past performance evaluation framework under FAR 15.305 hasn't changed materially in years — what changes is how evaluators weight it. This guide reflects current best practices for competitive proposals in FY2026.",
        },
        {
          q: "Can I share this with my team?",
          a: "Yes — share it with your proposal team, your BD lead, or your teaming partners. We ask that you don't republish it publicly as your own, but internal sharing is completely fine.",
        },
        {
          q: "What if I have zero federal past performance?",
          a: "The guide covers this specifically. There are accepted substitutes — state and local government contracts, large commercial contracts with government-adjacent clients, and subcontractor experience — and we walk through how to present each one.",
        },
        {
          q: "What happens after I download?",
          a: "You get the PDF in your inbox. If you want to see which federal opportunities are actively soliciting in your NAICS codes right now, you can run a free search in CapturePilot — no obligation, no card, just a fast look at what's bidding.",
        },
      ]}
    />
  );
}
