import LeadMagnetPage from "@/app/resources/_components/LeadMagnetPage";

export default function PwinCalculatorPage() {
  return (
    <LeadMagnetPage
      slug="pwin-calculator"
      assetTitle="PWin Calculator (Probability of Win) — 12-Factor Federal Bid Score"
      assetFileName="FLK_04_PWin_Calculator.xlsx"
      hubspotSource="lead-magnet-pwin-calculator"
      seo={{
        title: "PWin Calculator: Federal Probability of Win Score",
        description:
          "Score any federal bid across 12 weighted factors in under 10 minutes. Free XLSX pwin calculator for government contractors. Stop chasing bids you can't win.",
        keyword: "pwin calculator",
      }}
      hero={{
        headline: "Know your PWin before you write a single page",
        subheadline:
          "This XLSX scores any federal bid across 12 weighted factors — customer relationship, past performance, competitive position, price-to-win, and eight more. Takes about 10 minutes. Works in Excel and Google Sheets.",
        bullets: [
          "12-factor scoring model used by capture managers at $100M+ firms",
          "Weighted formula you can adjust to your specific bid situation",
          "Instant go/no-go recommendation based on your total score",
          "Compatible with Excel 2016+ and Google Sheets — no macros needed",
        ],
        pageCount: 3,
        format: "XLSX",
      }}
      whatsInside={[
        "12 scored factors across four categories: customer knowledge, competitive position, solution fit, and operational readiness",
        "Pre-built weight formula — each factor carries a default percentage that sums to 100%; you can override any weight for your firm's priorities",
        "Go/no-bid threshold guide showing what scores typically warrant a full proposal effort vs. a quick pass",
        "Factor-level scoring rubric: for each of the 12 factors, a 0–5 scale with plain-English descriptions of what a 1 looks like vs. a 4",
        "Worked example tab with a realistic scored opportunity so you can see the model in action before touching your own data",
        "Notes column in every row for capturing the specific evidence behind each score",
        "Summary dashboard that rolls up your score, flags weak factors in red, and displays a final recommendation",
      ]}
      whyItExists={`I used to watch small firms spend four weeks writing proposals for contracts they had almost no shot at winning. Not because they were bad at their work — because nobody sat down before the RFP dropped and asked "do we actually have a real shot here?"\n\nPWin scoring is standard at large primes. A BD VP at a $2B firm isn't going to green-light a capture effort without a number. But most small and mid-sized businesses either skip the step entirely or do it with a gut check. The gut check fails in both directions: you bid on things you shouldn't, and you walk away from things you could've won.\n\nWe built this calculator because we wanted something a 3-person firm could run in a single morning meeting — no consulting engagement required. You fill in the 12 factors, the sheet does the math, and you walk away knowing whether the bid deserves your time. That's the whole idea.`}
      whoThisIsFor={[
        "Small businesses 1–50 employees that are starting to build a real BD pipeline and need a repeatable bid/no-bid process",
        "SDVOSB, 8(a), WOSB, or HUBZone firms evaluating whether a set-aside is worth pursuing vs. leaving on the table",
        "Capture managers and BD leads who want a defensible number to bring to leadership — not just a hunch",
        "Firms that have lost two or more proposals in a row and want to understand whether they're picking the wrong fights",
        "Consultants or proposal managers who need to give a client a quick read on an opportunity before committing resources",
        "Companies preparing their first GWAC or IDIQ task order response and unsure whether their position is strong enough",
      ]}
      whoItIsnt={[
        "8(a) sole-source shops that rarely compete on price — the competitive factors in the model are less relevant if you're working relationships, not evaluated proposals",
        "Firms that already have a mature gate review process with a dedicated capture team — you've probably got something more sophisticated already",
        "Anyone looking for a proposal template or section writer — this is a decision tool, not a writing tool",
        "Large primes or companies with a full Shipley or Miller Heiman process in place — this is built for the firm that doesn't have a process yet",
      ]}
      exampleSnippet={`Factor 7 — Price-to-Win: If you haven't done a should-cost analysis and don't know the incumbent's labor rates, score this a 1. A score of 3 means you have GSA schedule data and USASpending comparables for at least two similar awards. A 5 means you know the range to two decimal places and have a credible path to land inside it.`}
      faqs={[
        {
          q: "Is this really free?",
          a: "Yes. You give us your name, company, and email. We send you the file. That's it.",
        },
        {
          q: "How long does it take to score one opportunity?",
          a: "About 10 minutes if you know the contract well. Closer to 30 if you're doing it properly for a new agency or a recompete you haven't tracked. The worked-example tab in the file shows what a complete scoring session looks like.",
        },
        {
          q: "Will you spam me after I download?",
          a: "No. You'll get one email with the file and occasionally a resource or update if we publish something relevant to federal BD. You can unsubscribe from any email, no questions asked.",
        },
        {
          q: "Is this current for FY2026?",
          a: "Yes. The scoring factors and thresholds are based on current FAR evaluation criteria and how agencies are scoring proposals right now. We update the file when something material changes.",
        },
        {
          q: "Can I share it with my team or modify it?",
          a: "Absolutely. It's your file once you download it. You can share it internally, rename it, adjust the weights, add rows, whatever fits your process. Just don't redistribute it publicly.",
        },
        {
          q: "What if I'm not registered on SAM.gov yet?",
          a: "This calculator is still useful for planning, but you'll need an active SAM.gov registration before you can actually submit a federal bid. If you're not registered yet, our Quick Checker tool at app.capturepilot.com/check can walk you through what you need.",
        },
        {
          q: "What happens after I download?",
          a: "You get the XLSX in your inbox. You open it, run it on a real opportunity you're evaluating right now, and come away with a score and a decision. If you want, you can create a free CapturePilot account to get matched opportunities, track your pipeline, and run the PWin math inside the platform — but there's no pressure to do that.",
        },
      ]}
    />
  );
}
