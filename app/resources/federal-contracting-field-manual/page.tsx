"use client";

import LeadMagnetPage from "../_components/LeadMagnetPage";

export default function FederalContractingFieldManualPage() {
  return (
    <LeadMagnetPage
      slug="federal-contracting-field-manual"
      assetTitle="Federal Contracting Field Manual"
      assetFileName="FLK_Field_Manual.pdf"
      hubspotSource="lead-magnet-federal-contracting-field-manual"
      seo={{
        title: "How to Bid on Federal Contracts: Field Manual",
        description:
          "Free 34-page PDF covers SAM.gov registration, finding opps, writing bids, and delivering — every stage with real templates. Download free.",
        keyword: "how to bid on federal contracts",
      }}
      hero={{
        headline: "The field manual for how to bid on federal contracts",
        subheadline:
          "34 pages covering every stage — SAM.gov setup, finding the right opportunities, writing a compliant bid, and delivering once you win. Real templates included, no filler.",
        bullets: [
          "SAM.gov registration walkthrough, start to active",
          "How to find solicitations before your competitors do",
          "What contracting officers actually look for in a bid",
          "Delivery and past performance basics for first-timers",
        ],
        pageCount: 34,
        format: "PDF",
      }}
      whatsInside={[
        "8-page SAM.gov registration walkthrough including CAGE assignment and annual renewal",
        "How to read a solicitation: Section L instructions, Section M evaluation, and the SOW — explained plainly",
        "NAICS code selection guide with the 20 most-awarded codes for small businesses",
        "Set-aside eligibility matrix: SDVOSB, WOSB, HUBZone, 8(a), and Small Business size standards",
        "5-step opportunity vetting checklist so you stop chasing contracts you can't win",
        "Bid/no-bid decision worksheet with scoring factors and go/no-go threshold",
        "Past performance bootstrap section for companies with zero federal references",
        "One-page capability statement template with real examples of what passes the 8-second skim",
        "Post-award basics: invoicing through IPP, CPARS ratings, and how to build a reference",
      ]}
      whyItExists={`I spent a lot of time on calls with small business owners who'd been trying to break into federal contracting for months — sometimes years — without winning anything. The common thread wasn't that they were bad at their actual work. It was that nobody had ever explained the process plainly. They were piecing it together from SAM.gov help docs, YouTube videos, and $2,000 boot camps that mostly recycled government PDFs.\n\nSo we wrote down everything we'd learned helping companies register, find the right solicitations, and actually submit bids — and turned it into something you could read in a couple of hours instead of a couple of months. Not a course, not a mastermind group. Just the process, in order, with the parts that trip people up flagged clearly.\n\nIf you're starting from nothing or you've been at it a while without traction, this is where I'd start. It won't replace doing the work, but it'll stop you from doing the wrong work.`}
      whoThisIsFor={[
        "Small businesses that haven't submitted a federal bid yet and want the full picture before starting",
        "Companies registered on SAM.gov but not seeing results — often a positioning or opportunity-selection problem",
        "SDVOSB, WOSB, or HUBZone firms who know their certifications are valuable but aren't sure how to use them",
        "Service companies (IT, facilities, construction, professional services) in the $500K–$10M revenue range",
        "Business owners who've been to a 'federal contracting workshop' and walked out more confused than when they went in",
        "Teams doing their first set-aside solicitation and want to know what a compliant response looks like",
      ]}
      whoItIsnt={[
        "8(a) firms with five or more years of federal past performance — you're past the foundation stage this covers",
        "Large businesses or companies chasing IDIQ vehicles over $50M — the basics here won't move the needle at that scale",
        "Anyone looking for shortcuts around compliance requirements — this manual explains what they are, not how to avoid them",
        "Companies that already have a dedicated capture team; this is for owners doing capture themselves",
      ]}
      exampleSnippet="Before you register on SAM.gov, get your UEI from SAM first — the system assigns it, you don't pick it. Most people try to start with the CAGE code and get stuck. The right order is: get your UEI, wait 24–48 hours for it to activate, then complete the full registration. SAM renewals must happen every 12 months or your registration lapses and you can't receive awards."
      faqs={[
        {
          q: "Is this actually free?",
          a: "Yes. You give us your email and we send you the PDF. No credit card, no free trial that converts, no drip campaign pitch. You'll get a few emails about CapturePilot's tools but there's an unsubscribe link in every one.",
        },
        {
          q: "How long is the manual?",
          a: "34 pages. It's written to be read in one or two sittings — maybe two hours if you stop and take notes. We kept it dense rather than padded, so there's not a lot of filler to skip.",
        },
        {
          q: "Is it current for FY2026?",
          a: "Yes. The SAM.gov section was updated in June 2026 to reflect the current registration flow, the UEI requirement, and the updated annual renewal process. The set-aside thresholds and size standards reflect the most recent SBA table.",
        },
        {
          q: "Can I share it with my team?",
          a: "Yes. We don't put DRM on it. Forward it, print it, share the PDF internally — whatever's useful.",
        },
        {
          q: "What if I'm not registered on SAM.gov yet?",
          a: "This is the right place to start. The manual opens with the registration walkthrough because nothing else in federal contracting works without an active SAM registration. Plan for 7–10 business days from submission to activation.",
        },
        {
          q: "What happens after I download?",
          a: "You get the PDF by email. We'll also send a few follow-up emails with related resources — the bid checklist, opportunity matching tips, that kind of thing. If you want to see your live matching opportunities, you can create a free CapturePilot account and run the Quick Checker on your website.",
        },
        {
          q: "Will you spam me?",
          a: "No. We send useful stuff about federal contracting and occasional news about CapturePilot. If you don't find it useful, one click unsubscribes you. We're not in the business of burning email lists.",
        },
      ]}
    />
  );
}
