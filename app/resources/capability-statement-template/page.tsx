"use client";

import LeadMagnetPage from "@/app/resources/_components/LeadMagnetPage";

export default function CapabilityStatementTemplatePage() {
  return (
    <LeadMagnetPage
      slug="capability-statement-template"
      assetTitle="How to Write a Federal Capability Statement (with examples)"
      assetFileName="FLK_02_How_to_Write_Capability_Statement.pdf"
      hubspotSource="lead-magnet-capability-statement-template"
      seo={{
        title: "Capability Statement Template for Federal Contracts (Free PDF)",
        description:
          "Free capability statement template used by federal contractors. See the exact 1-page format COs expect — with 4 worked examples. Download now.",
        keyword: "capability statement template",
      }}
      hero={{
        headline: "The federal capability statement format that actually works",
        subheadline:
          "Contracting officers skim these in 8 seconds. This 12-page PDF shows the exact layout they look for — plus 4 worked examples across different industries you can copy directly.",
        bullets: [
          "The 6 fields every CO checks in the first 8 seconds",
          "4 real examples: IT, facilities, construction, and professional services",
          "Common mistakes that get you binned before they read your bid",
          "What to list under past performance if you're just starting out",
        ],
        pageCount: 12,
        format: "PDF",
      }}
      whatsInside={[
        "Why federal capability statements differ from commercial company profiles — and what happens when you hand a CO a commercial one",
        "A labeled anatomy diagram of a one-page capability statement with every required field called out",
        "4 worked examples: an IT firm (NAICS 541511), a janitorial company (561720), a construction sub (238220), and an 8(a) management consulting firm (541611)",
        "The 8-second skim test: the exact order COs scan a cap statement and where most small businesses lose them",
        "How to write past performance bullets when you only have commercial work — the format that transfers credibly",
        "What to put in core competencies (verbs, not adjectives) with before/after rewrites",
        "NAICS and CAGE/UEI placement rules — where these go and what happens if they're missing",
        "A set-aside certification display guide: which certs to show, how to show them, and what to do if you're pending",
        "File-naming and version-control conventions COs actually notice",
        "A 10-point self-audit checklist to score your current capability statement before you print another copy",
      ]}
      whyItExists={`I've reviewed hundreds of capability statements across CapturePilot onboarding calls, and the same problem shows up constantly. The work is real, the past performance is solid, the SAM registration is active — but the capability statement is formatted like a brochure. Mission statement up top, adjectives everywhere, NAICS buried in paragraph three, no dollar amounts on past performance. Contracting officers bin those in under ten seconds.\n\nThe format federal buyers expect is specific. There are conventions that aren't written anywhere official but every experienced CO understands — where your NAICS goes, how past performance bullets should read, why set-aside certification badges matter more than a logo. I spent a while pulling those conventions together into something teachable.\n\nThis PDF is the result. It's not a long read. Twelve pages, four examples, one checklist. If you're writing your first capability statement or rewriting a bad one, it's the thing I'd want you to have before you send anything to a CO.`}
      whoThisIsFor={[
        "Small business owners who've never written a federal capability statement and want to get the format right the first time",
        "SDVOSB, WOSB, HUBZone, or 8(a) firms that have the certifications but aren't showcasing them correctly on paper",
        "Companies with solid commercial work history that need to translate it into federal-readable past performance",
        "Service-disabled veteran-owned businesses registering on SAM.gov for the first time and building their materials from scratch",
        "Subcontractors trying to get on a prime's teaming list who need to hand over something professional",
        "Owners who've been bidding for a year with no wins and suspect the capability statement is part of the problem",
        "Anyone who's gotten a 'your capability statement doesn't meet our needs' response and isn't sure why",
      ]}
      whoItIsnt={[
        "8(a) firms with five-plus years of federal past performance who've already won contracts — you don't need the basics, and this won't tell you anything new",
        "Large businesses or prime contractors with a dedicated BD team — this is written for owners doing it themselves",
        "Companies looking for proposal writing guidance — this covers the capability statement only, not full proposal volumes",
        "Anyone who already has a one-pager with clear NAICS codes, dollar-amount past performance, and named certifications that's getting them into conversations",
      ]}
      exampleSnippet={`Under past performance, most firms write 'provided janitorial services to various federal clients.' Contracting officers can't evaluate that. What actually works looks like: '$180K · Department of Veterans Affairs, Hampton VAMC · 84,000 sq ft of clinical and administrative space, 5-day/week service, zero corrective action requests over 18 months.' Same facts, readable format, and it tells the CO exactly what they need to know to score you.`}
      faqs={[
        {
          q: "Is this really free?",
          a: "Yes. You give us your email, we send the PDF. No credit card, no trial, no paywall inside the document. The whole 12 pages are yours.",
        },
        {
          q: "How long is it?",
          a: "12 pages. It reads in about 20 minutes. There are four full worked examples, a labeled diagram, and a 10-point self-audit checklist at the end.",
        },
        {
          q: "Will you spam me?",
          a: "No. You'll get the PDF, and occasionally a short email when we publish something directly relevant to federal contracting. We don't sell lists and every email has an unsubscribe link.",
        },
        {
          q: "Is it current for FY2026?",
          a: "Yes. The capability statement format hasn't changed in years. The fields contracting officers look for are stable — NAICS, set-asides, past performance, core competencies, UEI/CAGE, POC. SBA certification thresholds update occasionally, but we note where that applies.",
        },
        {
          q: "Can I share it with my team?",
          a: "Yes. Forward the PDF to whoever is working on your BD materials. It's not a licensed product — it's a free resource and we want it to be useful.",
        },
        {
          q: "What if I'm not on SAM.gov yet?",
          a: "The PDF is still worth reading — it explains what fields you'll need and why, which helps you set up your SAM registration with the right information. Just know that SAM registration is required before you can get paid on a federal contract, so that's the next step after you finish the PDF.",
        },
        {
          q: "What happens after I download?",
          a: "You get the PDF in your inbox. You can read it, use the checklist on your current capability statement, and rewrite whatever's broken. If you want a second set of eyes, you can email your capability statement to hello@capturepilot.com and we'll send back a short teardown. Free, no pitch.",
        },
      ]}
    />
  );
}
