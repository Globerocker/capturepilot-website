"use client";

import LeadMagnetPage from "../_components/LeadMagnetPage";

export default function CparsPastPerformanceGuidePage() {
  return (
    <LeadMagnetPage
      slug="cpars-past-performance-guide"
      assetTitle="CPARS Guide — How to Get Exceptional Past Performance Ratings"
      assetFileName="FLK_11_CPARS_Past_Performance_Guide.pdf"
      hubspotSource="lead-magnet-cpars-past-performance-guide"
      seo={{
        title: "CPARS Ratings Guide: How to Get Exceptional",
        description:
          "Free 18-page PDF explains every CPARS rating, what evaluators actually read, and how to manage your record from day one. Download free — no credit card.",
        keyword: "cpars ratings",
      }}
      hero={{
        headline: "Your CPARS rating follows you. Here's how to own it.",
        subheadline:
          "Most small businesses treat CPARS as paperwork. The ones who win second and third contracts treat it like a second proposal process. This 18-page guide shows exactly how they do it.",
        bullets: [
          "All 5 rating areas and how SSEBs weight each one",
          "Word-for-word comment language that contextualizes bad ratings",
          "Day-1 setup practices that separate Exceptional from Satisfactory",
          "The 8 most common reasons contractors get Marginal — and how to avoid them",
        ],
        pageCount: 18,
        format: "PDF",
      }}
      whatsInside={[
        "Why CPARS matters more than your win rate — how a Marginal on a $200K contract can kill a $5M bid",
        "Coverage threshold table: which contract types and dollar thresholds trigger a CPARS assessment under FAR 42.1502",
        "The 5 rating areas broken down — Quality, Schedule, Cost Control, Management, and Small Business Subcontracting — with what evaluators actually test in each",
        "Full rating scale with the official FAR 42.1503 definition, what evaluators actually read into each rating, and its source selection impact",
        "The three-year clock: how long each rating stays visible in PPIRS and why that window matters for every bid you submit",
        "Section 04 — your 14-day contractor comment right, with example language for both accurate ratings you want to contextualize and factually wrong ratings you need to rebut",
        "Section 05 — how to set yourself up for Exceptional from day one: kickoff documentation, monthly status reports, mid-year informal check-ins, and above-and-beyond documentation cadence",
        "Section 06 — the top 8 causes of Marginal and Unsatisfactory ratings, each with the root pattern and how to catch it before the assessment",
        "Section 07 — the CPARS appeal process: ASBCA, agency IG complaints, and SBA's role in small business disputes",
        "Section 08 — how to build a CPARS narrative log from day one so your 14-day comment window is a structured rebuttal, not a scramble",
      ]}
      whyItExists={`We kept seeing the same pattern when companies came to us after losing a re-compete: they'd done good work, the customer liked them, and they still lost because a competitor had three Exceptional ratings and they had two Satisfactories and a Marginal from a job that went sideways two years ago. The CPARS record told a different story than the people who'd actually worked with them.\n\nThe problem isn't that the system is unfair — it's that most small contractors don't know it exists until they're already losing evaluations because of it. Nobody tells you at contract kickoff that every deliverable acceptance letter, every proactive problem notification, every CO email is evidence that will be weighed against you in future competitions. You find out when you get a debrief.\n\nSo we wrote down the playbook: what evaluators actually look for in each rating area, how to build the paper trail that earns Exceptional, how to use your comment rights when the AO gets something wrong, and how to recover when they don't. If you've got one federal contract under your belt and you're chasing the next one, this is the piece most people skip — and it's the one that costs them the re-compete.`}
      whoThisIsFor={[
        "Small businesses with one or more active federal contracts who've never seriously managed their CPARS record",
        "Contractors who've received a Marginal or Satisfactory rating and want to understand their options before the comment window closes",
        "8(a), SDVOSB, WOSB, and HUBZone firms building toward a re-compete where past performance carries 20–30% of the evaluation weight",
        "Program managers and project leads who are the ones actually interfacing with the CO — and whose daily behavior drives the rating",
        "Companies that just won their first federal contract and want to set up the right practices before the first assessment",
        "Business development staff preparing past performance narratives for proposals and wanting to understand what the underlying CPARS record shows",
      ]}
      whoItIsnt={[
        "Firms with five or more years of Exceptional ratings who already have a CPARS management process — you're past what this covers",
        "Companies looking for ways to dispute accurate ratings they simply don't like — the guide is honest that well-documented accurate ratings usually stand",
        "Large businesses chasing IDIQ vehicles over $50M with a dedicated contracts team — the basics here are aimed at owner-operators doing this themselves",
        "Anyone who hasn't won a federal contract yet — your CPARS record starts at award, so come back to this once you're in performance",
      ]}
      exampleSnippet="CPARS isn't a report card. It's a sales asset — or a liability. Every contract you perform is either building or eroding your competitive position on the next contract. Most small contractors treat it as administrative overhead. The ones who win consistently treat it as a second proposal process."
      faqs={[
        {
          q: "Is this actually free?",
          a: "Yes. Enter your email and we send you the PDF. No credit card, no trial that converts. You'll get a handful of follow-up emails from CapturePilot about federal contracting resources — one click unsubscribes you from any of them.",
        },
        {
          q: "How long is it?",
          a: "18 pages. Dense but not padded — we cut the filler. Most people read it in one sitting, maybe 45 minutes if you stop to take notes on the parts that apply to a contract you're currently on.",
        },
        {
          q: "Is it current for FY2026?",
          a: "Yes. The FAR coverage thresholds and rating definitions reflect FAR 42.1502 and 42.1503 as current through June 2026. The CPARS Policy Guide section references reflect the current version of the guide published on cpars.gov.",
        },
        {
          q: "I already have a Marginal rating. Can this help me?",
          a: "It depends on timing. If you're still in the 14-day contractor comment window, yes — Section 04 covers exactly how to write a rebuttal or contextualizing comment that travels with the rating. If the window has closed and the rating is accurate, the guide covers the appeal path and how to build a stronger record going forward that offsets it.",
        },
        {
          q: "Can I share it with my project team?",
          a: "Please do. The practices in Section 05 only work if the people doing the work — the PM, the COR liaison, whoever is logging deliverable acceptances — actually know about them. Forward the PDF to whoever's running the contract.",
        },
        {
          q: "What if I haven't been rated yet but I'm in performance now?",
          a: "That's the best time to read this. Section 05 is specifically about what to do from day one of performance, before any assessment is written. The earlier you set up the paper trail, the easier the comment window is if you need it.",
        },
        {
          q: "What happens after I download?",
          a: "You get the PDF by email. We'll follow up with a few related resources — past performance narratives, the proposal template, the Quick Checker for your company profile. If you want to see your live contract matches and run a fit analysis, you can create a free CapturePilot account at app.capturepilot.com.",
        },
      ]}
    />
  );
}
