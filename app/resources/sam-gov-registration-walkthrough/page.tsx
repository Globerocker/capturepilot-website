import type { Metadata } from "next";
import LeadMagnetPage from "@/app/resources/_components/LeadMagnetPage";

export const metadata: Metadata = {
  title: "SAM.gov Registration Walkthrough — Every Screen, Step by Step",
  description:
    "Free 31-page PDF walks every SAM.gov registration screen in order, with plain answers for every field. Stop stalling on CAGE, UEI, and entity validation.",
};

export default function SamGovRegistrationWalkthroughPage() {
  return (
    <LeadMagnetPage
      slug="sam-gov-registration-walkthrough"
      assetTitle="SAM.gov Registration Walkthrough — Every Screen, In Order"
      assetFileName="FLK_01_SAM_Registration_Walkthrough.pdf"
      hero={{
        headline: "Register on SAM.gov Without the Guesswork",
        subheadline:
          "This 31-page PDF walks every screen of the SAM.gov registration process — in order, with the right answer for each field. No more stalling on \"what does this field mean.\"",
        bullets: [
          "Every registration screen shown in sequence",
          "Plain-language answers for the confusing CAGE and UEI fields",
          "Common mistakes that delay activation — and how to skip them",
          "Works for new registrations and annual renewals",
        ],
        pageCount: 31,
        format: "PDF",
      }}
      whatsInside={[
        "31-page annotated walkthrough of every SAM.gov registration screen",
        "What to enter in the CAGE code and UEI fields — and when they auto-populate",
        "The exact order of the registration sections so you don't lose progress",
        "Entity validation step explained — what triggers a delay and what doesn't",
        "Annual renewal vs. first-time registration: what's different, what's the same",
        "Common rejection reasons and how to fix each one before you hit Submit",
        "Points of Contact section guide — who to list, what titles matter",
        "Representations and Certifications overview — which boxes trip up first-timers",
      ]}
      whyItExists={`I built this because I watched a $4M firm spend three weeks stuck on SAM.gov registration. Not because anything was broken — because nobody explained what the fields meant. The site doesn't explain it. The help text doesn't explain it. And every Google result either points to a YouTube from 2018 or a consulting firm that wants $500 to do it for you.\n\nWe went screen by screen and documented exactly what you're looking at and what to type. That's the whole thing. No upsell, no course. Just the walkthrough.\n\nIf you're a small business owner trying to get on SAM.gov so you can actually bid on federal contracts, this is the thing you needed six weeks ago.`}
      whoThisIsFor={[
        "Small business owners registering on SAM.gov for the first time",
        "Firms trying to get their annual renewal done without breaking anything",
        "SDVOSB or 8(a) applicants who need active SAM.gov status first",
        "Office managers handed the SAM.gov task without any guidance",
        "Veteran-owned firms entering federal contracting with revenue under $5M",
        "Anyone who's opened SAM.gov, gotten confused, and closed the tab",
      ]}
      whoItIsnt={[
        "Large primes or firms with a dedicated contracts manager — they've got this handled",
        "8(a) or HUBZone firms mid-application looking for certification guidance — this covers registration only, not the certification layer on top",
        "Firms whose SAM.gov is already active and just need to find opportunities",
      ]}
      exampleSnippet="The CAGE code field will usually auto-populate once your UEI is validated. If it's blank after 24 hours, don't create a new registration — call the Federal Service Desk at 866-606-8220 and give them your UEI. Starting over resets your activation clock."
      faqs={[
        {
          q: "Is this really free?",
          a: "Yes. No credit card, no trial, no hidden paid tier. You give us your email, we send you the PDF.",
        },
        {
          q: "How long is it?",
          a: "31 pages. Most people finish it in one sitting alongside their actual SAM.gov tab.",
        },
        {
          q: "Will you spam me?",
          a: "No. We'll send you the PDF and occasional federal contracting tips — roughly monthly. Unsubscribe is one click and we honor it immediately.",
        },
        {
          q: "Is it current for FY2026?",
          a: "Yes. We rebuilt it in June 2026 against the live SAM.gov interface. SAM.gov does update its UI occasionally — if something looks different on your screen, email us and we'll update the guide.",
        },
        {
          q: "Can I share it with my team?",
          a: "Absolutely. Share it with whoever's doing the registration. There's no license restriction.",
        },
        {
          q: "What if I haven't started my SAM.gov registration yet?",
          a: "That's exactly who this is for. Start here before you open SAM.gov and you'll move straight through without stalling.",
        },
        {
          q: "What happens after I download?",
          a: "You get the PDF in your inbox, usually within a few minutes. We'll follow up once with a short email about CapturePilot — the tool we built to help small businesses find and win federal contracts. That's it.",
        },
      ]}
      seo={{
        title: "SAM.gov Registration Walkthrough — Every Screen, Step by Step",
        description:
          "Free 31-page PDF walks every SAM.gov registration screen in order, with plain answers for every field. Stop stalling on CAGE, UEI, and entity validation.",
        keyword: "sam.gov registration",
      }}
      hubspotSource="lead-magnet-sam-gov-registration-walkthrough"
    />
  );
}
