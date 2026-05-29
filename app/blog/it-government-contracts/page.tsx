"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  ChevronRight,
  DollarSign,
  Target,
  Zap,
  TrendingUp,
  Users,
  FileText,
  Award,
  BarChart3,
  Shield,
  XCircle,
  Cpu,
  Lock,
  Globe,
  Server,
  Search,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "market-size", label: "The $102 Billion Federal IT Market" },
  { id: "naics-codes", label: "NAICS Codes for Federal IT Work" },
  { id: "gwacs", label: "GWACs: The Contract Vehicles That Matter Most" },
  { id: "set-asides", label: "Set-Aside Programs for IT Companies" },
  { id: "dod-cyber-ai", label: "DoD Cybersecurity and AI Opportunities" },
  { id: "evaluation", label: "How Federal IT Proposals Are Evaluated" },
  { id: "step-by-step", label: "Your Path to First IT Contract" },
  { id: "clearances", label: "Security Clearances: What You Actually Need" },
  { id: "mistakes", label: "Mistakes IT Companies Make Entering Federal" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
    red: "bg-red-50 border-red-200 text-red-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
    red: "text-red-600",
  };
  return (
    <div className={`rounded-2xl border p-6 my-8 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconColors[color]}`} />
        <p className="font-bold text-sm">{title}</p>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SectionHeading({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 mb-6 pt-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function ITGovernmentContractsPage() {
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = articleRef.current?.querySelectorAll(".animate-on-scroll");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-in-up");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">
              IT Government Contracts
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <Cpu className="w-4 h-4" /> Industries
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            IT Government Contracts:{" "}
            <span className="gradient-text">How Tech Companies Win Federal Work</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            The federal government spent{" "}
            <strong className="text-stone-700">$102.31 billion on IT in FY2025</strong> — and
            that number is rising. Cybersecurity, AI, cloud modernization, and legacy system
            replacement are driving spending across every agency. Small IT companies that know
            how to navigate contract vehicles, NAICS codes, and set-aside programs are winning
            work they could not have accessed five years ago. Here is the actual path in.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published May 29, 2026</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-stone-600" />
              <h2 className="font-bold text-stone-900">Table of Contents</h2>
            </div>
            <nav className="grid sm:grid-cols-2 gap-2">
              {TOC.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-sm text-stone-600 hover:text-blue-700 transition-colors py-1"
                >
                  <span className="text-blue-600 font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article ref={articleRef} className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Section 1 */}
          <SectionHeading
            id="market-size"
            number="01"
            title="The $102 Billion Federal IT Market"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The federal government is the largest single buyer of IT services and products on
              earth. In FY2025, civilian agencies and defense departments collectively invested
              $102.31 billion in information technology — everything from cloud infrastructure and
              cybersecurity to AI development, legacy modernization, and help desk support. That
              figure has grown every year for the past decade, and FY2026 is tracking higher still.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              What makes this market exceptional for small businesses is not just the size — it is
              the structure. Federal law mandates that agencies spend a percentage of contract dollars
              with small businesses. Congress sets annual small business prime contracting goals.
              Agencies that miss those goals face scrutiny. The result is a market where being
              small is a procurement advantage, not a liability.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The recompete pipeline is enormous. Research firm Deltek estimates{" "}
              <strong className="text-stone-800">$180 billion in federal recompetes</strong> are
              hitting the market in FY2025-2026. Every one of those is an opportunity for a
              qualified challenger to unseat an incumbent — or for a new entrant to take market
              share by teaming with a prime that needs small business partners to meet its
              subcontracting plan goals.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                {
                  icon: DollarSign,
                  stat: "$102B",
                  label: "Federal IT spending in FY2025, up from prior years and still growing",
                  color: "text-blue-600 bg-blue-50 border-blue-100",
                },
                {
                  icon: TrendingUp,
                  stat: "$180B",
                  label: "In federal recompetes hitting the market in FY2025-2026",
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  icon: Shield,
                  stat: "$32B",
                  label: "In AI, cloud, and cybersecurity contract ceilings in the first half of FY2026 alone",
                  color: "text-violet-600 bg-violet-50 border-violet-100",
                },
              ].map(({ icon: Icon, stat, label, color }) => (
                <div
                  key={stat}
                  className={`animate-on-scroll rounded-xl border p-5 hover-lift ${color}`}
                >
                  <Icon className="w-5 h-5 mb-3" />
                  <p className="text-2xl font-black mb-1">{stat}</p>
                  <p className="text-xs font-medium leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              The agencies driving the most IT contract spending are DoD (by far the largest),
              DHS, HHS, VA, NASA, and the intelligence community. But civilian agencies at every
              level — from USDA field offices to the Social Security Administration — procure IT
              services continuously. The market is not concentrated; it is distributed across
              hundreds of buyers, which means opportunities exist for specialists who know a
              single agency&apos;s systems as well as for generalists competing on vehicle task orders.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              If your commercial IT company has not looked at federal contracts, the question is
              not whether there is demand. It is whether you know how to access it. Read the{" "}
              <Link
                href="/blog/federal-spending-trends-2026"
                className="text-blue-700 hover:underline"
              >
                2026 federal spending trends
              </Link>{" "}
              guide for a broader picture of where agency budgets are flowing this year.
            </p>
          </div>

          {/* Section 2 */}
          <SectionHeading
            id="naics-codes"
            number="02"
            title="NAICS Codes for Federal IT Work"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Your NAICS code determines which solicitations you can bid on, which set-aside pools
              you qualify for, and whether you meet the SBA size standard for a given contract. IT
              companies often make the mistake of registering only one code — usually the broadest
              one — and missing solicitations that fall under adjacent codes.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Unlike many service industries where one NAICS code covers nearly all federal work,
              federal IT is spread across half a dozen codes. Each has its own size standard and
              its own competitive dynamics. Know which ones apply to your work, and register all
              of them on SAM.gov.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      NAICS Code
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      What It Covers
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Size Standard
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      FY2024 Federal Spend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      541512
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Computer Systems Design Services — full-stack development, enterprise architecture, system integration
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $34M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-medium">
                      $68.4B
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      541511
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Custom Computer Programming — software development, app modernization, custom code
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $34M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-medium">
                      $24.2B
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      541519
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Other Computer Related Services — cybersecurity, IT infrastructure, network operations, help desk
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $34M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-medium">
                      High (catch-all for small biz)
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      518210
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Data Processing, Hosting, and Related Services — cloud hosting, managed services, data center ops
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $47M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-medium">
                      Growing rapidly
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      541513
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Computer Facilities Management Services — IT operations management, NOC/SOC support
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $34M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-medium">
                      Moderate, less competed
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-mono text-blue-700 font-bold">
                      611420
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Computer Training — IT workforce training, certification prep, cybersecurity awareness
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      $16.5M avg. annual receipts
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600 font-medium">
                      Niche, low competition
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              <strong className="text-stone-800">541519 is the code most small IT companies
              should lead with.</strong> It is broad enough to cover a wide range of IT support
              services while being specific enough that solicitations under it are routinely
              set aside for small businesses. Cybersecurity services, network infrastructure
              support, IT helpdesk, and systems administration all commonly land under 541519.
              Competition is lower than 541512, and the small business set-aside rate is higher.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              541512 has the highest total federal spend of any IT code, but it also draws the
              most competition — large primes dominate the unrestricted awards. Your path into
              541512 work is typically through set-aside awards first, then growing into prime
              positions on unrestricted vehicles. For a broader guide to picking your codes, see{" "}
              <Link
                href="/blog/best-naics-codes-small-business"
                className="text-blue-700 hover:underline"
              >
                The 10 Best NAICS Codes for Small Business Government Contractors
              </Link>
              .
            </p>

            <Callout icon={Lightbulb} color="amber" title="Register Multiple NAICS Codes on SAM.gov">
              Register every NAICS code that applies to your capabilities — there is no cost and
              no downside to registering multiple codes. Most IT companies legitimately qualify
              for 541511, 541512, and 541519 simultaneously. Each registered code expands the
              solicitations you appear in when agencies search for small businesses, and expands
              which task orders you can compete for on contract vehicles like Polaris and SEWP.
              Add your codes to your{" "}
              <Link
                href="/features/capability-statement"
                className="text-blue-700 underline font-medium"
              >
                capability statement
              </Link>{" "}
              as well — contracting officers search by NAICS when evaluating subcontractor
              candidates.
            </Callout>
          </div>

          {/* Section 3 */}
          <SectionHeading
            id="gwacs"
            number="03"
            title="GWACs: The Contract Vehicles That Matter Most"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Government-Wide Acquisition Contracts (GWACs) are pre-competed, indefinite-delivery
              vehicles that allow any federal agency to purchase IT services from approved vendors.
              Getting on a GWAC is a significant event for an IT company — it means agencies can
              buy from you without running a full competitive procurement from scratch. Once you
              are on the vehicle, every task order is a tractable competition against a limited pool
              of qualified vendors, not the entire federal marketplace.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Three vehicles dominate the federal IT GWAC landscape and deserve your full attention.
            </p>

            <div className="space-y-5 my-8">
              {[
                {
                  name: "Polaris",
                  manager: "GSA",
                  ceiling: "$28 billion",
                  term: "Through 2031",
                  icon: Globe,
                  color: "border-l-blue-500 bg-blue-50",
                  iconColor: "text-blue-600",
                  detail:
                    "Polaris is GSA's small business-exclusive GWAC for IT services, structured around four socioeconomic pools: Small Business, SDVOSB, HUBZone, and WOSB/EDWOSB. The WOSB pool received its Notice to Proceed in March 2026. If your company holds any of these certifications, Polaris is your clearest path to a $28B vehicle. Task order competitions are restricted to pool members, which dramatically reduces field size versus unrestricted awards.",
                },
                {
                  name: "SEWP VI",
                  manager: "NASA",
                  ceiling: "$90 billion",
                  term: "Through 2035",
                  icon: Server,
                  color: "border-l-emerald-500 bg-emerald-50",
                  iconColor: "text-emerald-600",
                  detail:
                    "Solutions for Enterprise-Wide Procurement (SEWP) VI is NASA's IT products and hardware vehicle, carrying a $90 billion ceiling through 2035. SEWP is the go-to vehicle for IT product procurement — hardware, software licenses, and product-based solutions. If your company resells or integrates IT products (servers, networking gear, software), SEWP VI holder status opens procurement channels across every federal agency.",
                },
                {
                  name: "CIO-SP4",
                  manager: "NIH NITAAC",
                  ceiling: "Multi-billion",
                  term: "Awards expected 2026",
                  icon: FileText,
                  color: "border-l-violet-500 bg-violet-50",
                  iconColor: "text-violet-600",
                  detail:
                    "Chief Information Officer Solutions and Partners 4 is managed by the NIH Information Technology Acquisition and Assessment Center. CIO-SP4 covers advanced IT, health IT, and biomedical research systems — making it the primary vehicle for health agency IT work at HHS, NIH, FDA, and VA. Awards are expected in 2026. If your company does health IT or has HHS experience, this vehicle positions you for a significant slice of health agency IT spending.",
                },
              ].map(({ name, manager, ceiling, term, icon: Icon, color, iconColor, detail }) => (
                <div
                  key={name}
                  className={`animate-on-scroll rounded-xl p-5 border-l-4 ${color}`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 ${iconColor} shrink-0 mt-0.5`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <p className="font-black text-stone-900">{name}</p>
                        <span className="text-xs text-stone-500">Managed by {manager}</span>
                        <span className="text-xs font-bold text-stone-700 bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                          Ceiling: {ceiling}
                        </span>
                        <span className="text-xs text-stone-500">{term}</span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Beyond GWACs, GSA&apos;s Multiple Award Schedule (MAS) IT Category is the other primary
              on-ramp. The MAS schedule is always open for new offerors, making it accessible to
              companies that missed GWAC on-ramp periods. MAS is less powerful than a GWAC for
              high-value IT services — it lacks the GWAC exemption from competition requirements
              — but it gives you a vehicle, a SAM.gov profile that signals federal readiness, and
              a starting point for agency relationships.
            </p>

            <Callout icon={Target} color="sky" title="GWAC Strategy for Small IT Companies">
              Getting on a GWAC is a competitive process — not all applicants qualify. Before
              you apply, audit your past performance record. GWACs require demonstrated experience
              at relevant scope and scale. If your commercial experience is strong but your federal
              record is thin, build that record first through{" "}
              <Link
                href="/blog/subcontracting-government-contracts"
                className="text-blue-700 underline font-medium"
              >
                subcontracting on federal IT contracts
              </Link>
              , then apply to the next GWAC on-ramp. Applying before you are ready wastes the
              opportunity — missed on-ramps can mean waiting years for the next cycle.
            </Callout>

            {/* CTA 1 */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 my-10 text-white animate-on-scroll">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-blue-200 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">
                    Check Your Eligibility for IT Set-Aside Vehicles
                  </p>
                  <p className="text-blue-100 text-sm mb-4">
                    Find out which certifications your IT company qualifies for — SDVOSB, WOSB,
                    HUBZone, or 8(a) — and which GWAC pools those certifications open for you.
                  </p>
                  <a
                    href={CHECK_URL}
                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                  >
                    Check your eligibility free <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="set-asides"
            number="04"
            title="Set-Aside Programs for IT Companies"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Set-aside programs matter just as much in IT as in any other federal market — maybe
              more, because competition on unrestricted IT contracts is ferocious. The large primes
              (Leidos, SAIC, Booz Allen, GDIT, Peraton) have incumbency, clearances, and deep
              agency relationships on the open market. Set-aside pools are where small companies
              compete against each other, on a level playing field.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  cert: "8(a) Business Development",
                  req: "SBA-certified socially and economically disadvantaged small business; nine-year program",
                  advantage:
                    "Sole-source IT contracts up to $4.5M without competition. Agencies actively use 8(a) for IT modernization projects where they want a trusted small business and do not want to run a full competition. 8(a) firms can also receive sole-source task orders on GWAC vehicles.",
                  linkHref: "/blog/8a-sole-source-contracts",
                  linkLabel: "8(a) Sole Source Contracts Guide",
                  borderColor: "border-l-blue-500",
                  bgColor: "bg-blue-50",
                },
                {
                  cert: "SDVOSB / VOSB",
                  req: "51%+ owned, controlled, and operated by a service-disabled veteran",
                  advantage:
                    "VA IT contracts are the primary target — VA is legally mandated to use SDVOSB and VOSB sources first (Veterans First Contracting). Polaris has a dedicated SDVOSB pool. Sole-source IT contracts up to $5M across other agencies. VA spent $26B+ in FY2024 and a significant portion went to veteran-owned IT firms.",
                  linkHref: "/blog/sdvosb-contracts-guide",
                  linkLabel: "SDVOSB Contracts Guide",
                  borderColor: "border-l-emerald-500",
                  bgColor: "bg-emerald-50",
                },
                {
                  cert: "WOSB / EDWOSB",
                  req: "51%+ woman-owned and controlled; EDWOSB adds SBA-verified economic disadvantage",
                  advantage:
                    "Polaris launched a dedicated WOSB pool (NTP March 2026) — a $28B vehicle exclusively for women-owned IT firms. WOSB set-asides are available when SBA designates the NAICS code as underrepresented by women-owned firms. Verify your target codes on the current SBA WOSB program list.",
                  linkHref: "/blog/wosb-certification-guide",
                  linkLabel: "WOSB Certification Guide",
                  borderColor: "border-l-violet-500",
                  bgColor: "bg-violet-50",
                },
                {
                  cert: "HUBZone",
                  req: "Principal office in a HUBZone; 35% of employees reside in a HUBZone",
                  advantage:
                    "HUBZone set-asides plus a 10% price evaluation preference in full-and-open IT competitions. Polaris has a dedicated HUBZone pool. Remote-work-friendly IT companies may qualify if their principal office is in a HUBZone even if employees work remotely from non-HUBZone areas — verify residency rules carefully with SBA.",
                  linkHref: "/blog/hubzone-program-guide",
                  linkLabel: "HUBZone Program Guide",
                  borderColor: "border-l-amber-500",
                  bgColor: "bg-amber-50",
                },
              ].map(({ cert, req, advantage, linkHref, linkLabel, borderColor, bgColor }) => (
                <div
                  key={cert}
                  className={`animate-on-scroll rounded-xl p-5 border-l-4 ${borderColor} ${bgColor}`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-stone-900 text-sm mb-1">
                        <Link href={linkHref} className="text-blue-700 hover:underline">
                          {linkLabel}
                        </Link>
                      </p>
                      <p className="text-stone-600 text-xs mb-1">
                        <strong>Requirement:</strong> {req}
                      </p>
                      <p className="text-stone-600 text-xs">
                        <strong>IT advantage:</strong> {advantage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              IT companies benefit from stacking certifications more than almost any other industry.
              An SDVOSB that qualifies for HUBZone can bid the Polaris SDVOSB pool, the Polaris
              HUBZone pool, and standard small business set-asides simultaneously — triple the
              opportunity access of an uncertified competitor with identical technical capabilities.
              All major certifications are managed through{" "}
              <a
                href="https://certify.sba.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                certify.sba.gov
              </a>
              . Applications are free. For a complete breakdown of which certifications matter
              most, see{" "}
              <Link
                href="/blog/federal-contracting-certifications"
                className="text-blue-700 hover:underline"
              >
                Federal Contracting Certifications: Which Ones Actually Help You Win
              </Link>
              .
            </p>
          </div>

          {/* Section 5 */}
          <SectionHeading
            id="dod-cyber-ai"
            number="05"
            title="DoD Cybersecurity and AI Opportunities"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              The Department of Defense is the federal government&apos;s largest IT buyer, and right now
              it is spending at historic levels on three priorities: cybersecurity, artificial
              intelligence, and cloud modernization. DoD sought{" "}
              <strong className="text-stone-800">$13.4 billion for autonomy and AI systems</strong>{" "}
              in its FY2026 budget request, along with{" "}
              <strong className="text-stone-800">$16 billion-plus in cybersecurity</strong>{" "}
              across the services and agencies.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Those are headline numbers. What matters for small IT companies is that this spending
              is distributed — it flows through contracting offices at Army, Navy, Air Force, Marine
              Corps, SOCOM, DISA, NSA, and dozens of other defense components. DoD does not issue
              one giant IT contract. It issues thousands of smaller ones, many of which are
              specifically structured for small businesses.
            </p>

            <Callout icon={Lock} color="violet" title="CMMC 2.0: Your Cybersecurity Market Ticket">
              The Cybersecurity Maturity Model Certification (CMMC) 2.0 is DoD&apos;s framework for
              verifying that defense contractors handle Controlled Unclassified Information (CUI)
              securely. As CMMC becomes a formal contract requirement across DoD solicitations,
              companies that can either achieve CMMC Level 2/3 certification themselves or help
              defense contractors achieve and maintain it are sitting on a significant market
              opportunity. DoD suppliers who cannot achieve certification will need help from
              specialized IT firms — creating a managed services niche that is explicitly tied to
              contract compliance. Third-party assessment organization (C3PAO) accreditation is
              another path for cybersecurity firms looking to build a federal practice around CMMC.
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              Zero Trust Architecture is another mandatory spending driver. A 2022 DoD Zero Trust
              Strategy mandated that all DoD components achieve &quot;Target Level&quot; Zero Trust
              implementation by FY2027. That deadline is creating procurement urgency across the
              services — identity management, micro-segmentation, endpoint detection and response,
              and continuous monitoring are all areas where small cybersecurity firms are winning
              task orders on existing vehicles and winning new small business set-aside contracts.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  area: "AI and Machine Learning Services",
                  opportunity:
                    "$13.4B DoD request for autonomy and AI; DoD SBIR programs consistently include AI/ML topics across all service branches",
                  entry: "SBIR Phase I (up to $314,363), Phase II (up to $2,095,748), or task orders on AI-enabled GWACs",
                },
                {
                  area: "Cybersecurity and Zero Trust",
                  opportunity:
                    "$16B+ in DoD cybersecurity spending; CMMC compliance services creating a new managed-service market",
                  entry: "Polaris, CIO-SP4, agency-specific BPAs, CMMC C3PAO assessment services",
                },
                {
                  area: "Cloud Migration and Managed Services",
                  opportunity:
                    "DoD cloud strategy driving agency-by-agency migrations; Army's $5.6B Missionforce enterprise SaaS deal illustrates scale of cloud demand",
                  entry: "SEWP VI for cloud products, Polaris and CIO-SP4 for cloud professional services",
                },
                {
                  area: "Software Development and Modernization",
                  opportunity:
                    "Billions in legacy system modernization; DoD $150M for legacy system replacement alone in FY2026 budget",
                  entry: "GWAC task orders, 8(a) sole-source modernization awards, DIU prototype agreements",
                },
              ].map(({ area, opportunity, entry }) => (
                <div
                  key={area}
                  className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200 animate-on-scroll"
                >
                  <Cpu className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-stone-800 text-sm mb-1">{area}</p>
                    <p className="text-stone-600 text-xs mb-1">
                      <strong>Opportunity:</strong> {opportunity}
                    </p>
                    <p className="text-stone-500 text-xs">
                      <strong>Entry path:</strong> {entry}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For small companies without an existing DoD foothold, the{" "}
              <strong className="text-stone-800">Defense Innovation Unit (DIU)</strong> and
              service-specific innovation offices (Army DEVCOM, Air Force AFWERX, Navy NavalX)
              offer non-traditional agreements like Other Transaction Authority (OTA) contracts.
              OTAs do not require registration on SAM.gov as a prerequisite, move faster than
              FAR-based awards, and explicitly target commercial companies that have not done
              federal work before. They are a legitimate and often underutilized first step into
              DoD for innovative IT companies.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The VA is the other major buyer worth targeting. VA IT spending has grown sharply as
              the agency modernizes its electronic health record systems and expands digital services
              for veterans. SDVOSB and VOSB firms get mandatory preference on VA IT solicitations.
              Read the full{" "}
              <Link href="/blog/va-contracts-guide" className="text-blue-700 hover:underline">
                VA contracts guide
              </Link>{" "}
              for details on the Veterans First Contracting program and how it applies to IT work.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="evaluation"
            number="06"
            title="How Federal IT Proposals Are Evaluated"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Federal IT contracts are almost universally evaluated on a Best Value basis — lowest
              price technically acceptable (LPTA) is rare in IT because the performance risk of
              getting it wrong is too high for agencies. Best Value means your technical approach,
              past performance, and management plan matter as much as — sometimes more than —
              your price.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Evaluation Factor
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      Typical Weighting
                    </th>
                    <th className="text-left p-3 font-bold text-stone-800 border border-stone-200">
                      What Evaluators Look For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-stone-200 font-medium text-stone-700">
                      Technical Approach
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      35–40%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Architecture decisions, technology choices, methodology (Agile/DevSecOps), security posture, and evidence you understand the agency&apos;s specific environment
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-medium text-stone-700">
                      Past Performance
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      25–30%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Recent and relevant contracts at similar scope, complexity, and technology stack; CPARS ratings; verifiable references with contract officers who will respond
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 font-medium text-stone-700">
                      Management Plan
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      15–20%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Key personnel qualifications and retention strategy, subcontractor management, transition plan, risk mitigation
                    </td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="p-3 border border-stone-200 font-medium text-stone-700">
                      Price / Cost
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      15–25%
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Completeness of labor categories and rates, price realism for T&M/cost-plus contracts, total evaluated price for FFP
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-stone-200 font-medium text-stone-700">
                      Small Business Plan (if prime)
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Pass/Fail or weighted
                    </td>
                    <td className="p-3 border border-stone-200 text-stone-600">
                      Specific subcontracting goals by business type, named small business partners, history of meeting SB goals on prior contracts
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              Key personnel is where many small IT companies lose competitive ground they did not
              expect to lose. Federal IT solicitations frequently require specific personnel —
              a Program Manager, a Lead Systems Architect, a Security Officer — and those key
              personnel must be committed at time of proposal submission. If your top technical
              staff are currently on contract elsewhere, you have an availability problem that
              evaluators will flag. Plan your key personnel before you commit to a bid.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              Technical approach is where you win or lose. Generic IT proposals — &quot;we will use
              Agile methodology to deliver high-quality software that meets your requirements&quot; —
              score Acceptable at best. Proposals that demonstrate specific understanding of
              the agency&apos;s technology stack, integration constraints, security requirements,
              and operational environment score Outstanding. The distinguishing question is:
              does this proposal prove we understand the problem, or does it prove we can
              write about software development in general? Evaluators know the difference
              immediately.
            </p>

            <Callout icon={Search} color="blue" title="Use Sources Sought Notices to Shape Your Approach">
              Before a federal IT solicitation is formally released, agencies often post Sources
              Sought or Request for Information (RFI) notices to survey the market and refine
              their requirements. Responding to these early signals is one of the most powerful
              things you can do. Your response gets read by the program office, establishes your
              presence before competition begins, and can directly influence how the solicitation
              is written — including whether it is set aside for small businesses. Read the{" "}
              <Link
                href="/blog/sources-sought-notice"
                className="text-blue-700 underline font-medium"
              >
                complete Sources Sought guide
              </Link>{" "}
              to understand how to use these notices effectively.
            </Callout>

            {/* CTA 2 */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 my-10 text-white animate-on-scroll">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-emerald-200 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">Build Proposals That Score Outstanding</p>
                  <p className="text-emerald-100 text-sm mb-4">
                    CapturePilot&apos;s{" "}
                    <Link
                      href="/features/proposals"
                      className="text-emerald-200 hover:text-white underline"
                    >
                      proposal tools
                    </Link>{" "}
                    help you structure technical volumes, compliance matrices, and management plans
                    aligned to federal evaluation criteria — so your proposal reads the way
                    evaluators are trained to score, not the way consultants write in general.
                  </p>
                  <a
                    href={SIGNUP_URL}
                    className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-50 transition-colors"
                  >
                    Start your 30-day free trial <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="step-by-step"
            number="07"
            title="Your Path to First IT Contract"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Nine concrete steps. They are sequential for a reason — skipping ahead creates gaps
              that will surface at the worst possible time.
            </p>

            <div className="space-y-5 my-6">
              {[
                {
                  step: "01",
                  title: "Register on SAM.gov and add all applicable NAICS codes",
                  body: "Active SAM.gov registration is required before any federal IT contract can be awarded. Register your entity and add every NAICS code that applies to your capabilities: 541511, 541512, 541519, 518210, and any other applicable codes. Renew annually — lapses in SAM registration disqualify you from award regardless of proposal quality.",
                },
                {
                  step: "02",
                  title: "Apply for every certification you qualify for",
                  body: "If your company meets the requirements for 8(a), SDVOSB, WOSB, EDWOSB, or HUBZone, apply now at certify.sba.gov. Do not wait until you find a specific solicitation. Certification timelines run 30–90+ days, and you will need the certification in hand before you can compete on set-aside solicitations or vehicle pools like Polaris.",
                },
                {
                  step: "03",
                  title: "Build a federal-facing capability statement",
                  body: "Your capability statement is a one-page summary for contracting officers, program managers, and large prime business development teams. Include NAICS codes, size standard confirmation, certifications, clearance levels (if any), core competencies, differentiators, and 3–5 past performance references with contract numbers. CapturePilot's capability statement tool generates professional versions formatted for federal audiences.",
                },
                {
                  step: "04",
                  title: "Target a specific agency and build that relationship before a solicitation drops",
                  body: "Successful federal IT companies do not spray proposals at every solicitation. They pick an agency or program office where their capabilities are a natural fit, study that agency's IT modernization roadmap (every major agency publishes one), and build familiarity with the program staff before competition starts. Agency OSBU (Office of Small and Disadvantaged Business Utilization) offices facilitate introductions and can direct you to upcoming procurement opportunities.",
                },
                {
                  step: "05",
                  title: "Respond to Sources Sought and RFIs in your target agency",
                  body: "When your target agency posts a Sources Sought notice or RFI, respond — even if the scope does not perfectly match your current capabilities. A quality response shows technical credibility, establishes your name with the contracting office, and can influence whether the resulting solicitation is set aside for small businesses. It is the lowest-cost, highest-leverage activity in federal business development.",
                },
                {
                  step: "06",
                  title: "Consider subcontracting first if you lack federal IT past performance",
                  body: "If your federal past performance record is thin or nonexistent, subcontracting under a large prime is the fastest path to documented federal experience. Large IT prime contractors — Leidos, GDIT, Accenture Federal, SAIC — have active small business subcontracting programs and face SB subcontracting goals they are contractually obligated to meet. Present your capability statement to their small business program offices.",
                },
                {
                  step: "07",
                  title: "Get on a contract vehicle",
                  body: "A GSA MAS Schedule IT Category award is the most accessible starting point for most small IT companies — the on-ramp is always open, and the process is manageable. Once you have MAS, you can compete for task orders while you build the past performance and revenue needed to pursue GWACs like Polaris in the next on-ramp cycle.",
                },
                {
                  step: "08",
                  title: "Identify expiring contracts in your target agency",
                  body: "Every federal IT contract expires, and the recompete is your best opportunity. Incumbents are vulnerable — they may be over-staffed relative to current requirements, complacent about innovation, or carrying rate structures that have grown uncompetitive. CapturePilot's contract intelligence surfaces expiring IT contracts 30–90 days before recompete, with incumbent data and historical award value.",
                },
                {
                  step: "09",
                  title: "Submit your first competitive bid — with full compliance matrix",
                  body: "When you bid, every solicitation requirement needs a traceable response in your proposal. Build a compliance matrix before you start writing: list every Section L requirement (instructions) and map your proposal sections to each one. Then map your proposal content to Section M evaluation criteria. Evaluators score against criteria — a brilliant technical approach that does not address what the solicitation asks for still scores low.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 animate-on-scroll">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                    {step}
                  </div>
                  <div className="flex-1 pb-5 border-b border-stone-100 last:border-0">
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-600 leading-relaxed mb-4">
              For a broader look at how federal contracting fits into a go-to-market strategy,
              read{" "}
              <Link
                href="/blog/government-contracting-for-startups"
                className="text-blue-700 hover:underline"
              >
                Government Contracting for Startups: Is Federal Revenue Right for You?
              </Link>
              . And if you are evaluating contract vehicle strategy in depth, the{" "}
              <Link href="/blog/idiq-contracts-explained" className="text-blue-700 hover:underline">
                IDIQ contracts guide
              </Link>{" "}
              covers task order competition mechanics in detail.
            </p>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="clearances"
            number="08"
            title="Security Clearances: What You Actually Need"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-4">
              Security clearances are the most misunderstood barrier in federal IT contracting.
              Many IT companies assume they need cleared staff before they can compete on DoD
              contracts. Many assume they cannot get clearances without existing contracts. Both
              beliefs prevent companies from pursuing work they could legitimately win.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              The reality is more nuanced. A significant share of federal IT work — especially
              civilian agency IT, cloud infrastructure work, and software development for
              unclassified systems — does not require personal security clearances at all. The
              work is on unclassified networks. The requirement is IT-2 or Public Trust background
              investigations, not full Secret or Top Secret clearances.
            </p>

            <Callout icon={Shield} color="sky" title="The Three Tiers of Federal IT Access Requirements">
              <ul className="space-y-2 mt-1">
                <li>
                  <strong>Public Trust (IT-1 / IT-2):</strong> Required for most civilian agency
                  IT work involving sensitive but unclassified information. Background check,
                  fingerprints, credit check. No access to classified information. Most
                  commercial IT professionals can obtain Public Trust within 30–60 days.
                </li>
                <li>
                  <strong>Secret Clearance:</strong> Required for access to classified national
                  security information at the Secret level. Typically 3–6 months to adjudicate
                  for new applicants. Required for much DoD IT support work on classified networks.
                  Can be sponsored by an agency or prime contractor once you have a contract.
                </li>
                <li>
                  <strong>Top Secret / SCI:</strong> Required for intelligence community and
                  Special Access Program work. Polygraph may be required for some billets.
                  18–36 months to adjudicate. This tier limits market entry for companies
                  without existing cleared staff.
                </li>
              </ul>
            </Callout>

            <p className="text-stone-600 leading-relaxed mb-4">
              The practical path for a small IT company without cleared staff: start with
              civilian agency work and Public Trust requirements. Build past performance, revenue,
              and agency relationships in that space. If you hire staff who happen to hold
              existing Secret clearances (many veterans and former government employees do),
              sponsor them for facility clearance (FCL) once you win a classified contract.
              Your FCL — the authorization for your company to hold and use classified information
              — can only be granted in connection with a specific contract requirement. Win
              the contract, then get the clearance. Not the other way around.
            </p>
            <p className="text-stone-600 leading-relaxed mb-4">
              For IT companies targeting DoD, a practical near-term focus is NIPR (unclassified)
              work on DoD&apos;s non-classified networks — significant IT work happens there, including
              much of the Zero Trust implementation, endpoint management, and application
              modernization the department is currently funding heavily.
            </p>

            <Callout icon={AlertTriangle} color="amber" title="Watch the CMMC Compliance Requirement">
              Starting with some DoD solicitations and expanding in FY2026-2027, contractors
              handling Controlled Unclassified Information (CUI) must demonstrate CMMC Level 2
              compliance — verified by a third-party assessor (C3PAO), not self-attestation.
              If you are pursuing DoD IT work that touches CUI, start your CMMC readiness
              assessment now. The assessment and remediation timeline for companies without
              mature cybersecurity practices can run 6–18 months, and non-compliant companies
              will be ineligible to bid on covered acquisitions regardless of their technical
              qualifications.
            </Callout>
          </div>

          {/* Section 9 */}
          <SectionHeading
            id="mistakes"
            number="09"
            title="Mistakes IT Companies Make Entering Federal"
          />
          <div className="prose-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              These are not academic cautions — they are recurring patterns from debrief data and
              BD teams who have watched capable IT companies stumble on preventable problems.
            </p>

            <div className="space-y-4">
              {[
                {
                  mistake: "Bidding before building a federal past performance record",
                  detail:
                    "Technical capability alone does not win federal IT contracts. Past performance is typically scored on a five-point scale (Exceptional, Very Good, Satisfactory, Marginal, Unsatisfactory), and a first-time bidder with no verifiable federal references typically receives a Neutral rating — which means you cannot compete against incumbents with strong CPARS ratings. Build your past performance through subcontracting or OTA agreements before bidding as a prime on competitive solicitations.",
                },
                {
                  mistake: "Pursuing GWACs before you are ready",
                  detail:
                    "GWAC on-ramps have defined windows. Missing one means waiting years for the next cycle. Applying before your company has relevant scale of past performance typically results in rejection. A better sequence: get on GSA MAS, win a few task orders, build CPARS, then apply to the next GWAC on-ramp with a strong record. Polaris, for example, required relevant IT services experience at meaningful contract values.",
                },
                {
                  mistake: "Ignoring the compliance matrix",
                  detail:
                    "Federal IT solicitations are long — often 100+ pages of requirements across Sections L and M. Proposals that do not explicitly trace every requirement to a proposal response can receive automatic disqualification or low scores on individual factors even when the technical content is excellent. Build a compliance matrix before you start writing, not after.",
                },
                {
                  mistake: "Treating key personnel as an afterthought",
                  detail:
                    "Many IT companies scramble to name key personnel only after they decide to bid. Federal evaluators treat key personnel commitments seriously — they will verify availability, check resumes against stated qualifications, and may require personnel to remain on contract through transition. Name your key personnel early, confirm their availability, and make sure their resumes reflect the specific requirements the solicitation asks for.",
                },
                {
                  mistake: "Underestimating the cost of capture",
                  detail:
                    "Competitive federal IT proposals — especially on GWACs or agency-specific contracts valued above $5M — require significant pre-proposal investment. Agency research, site visits, incumbent analysis, technical writing, pricing, and review can consume 200–500 person-hours for a single proposal. Companies that treat federal proposals as a cost-free marketing exercise consistently underprice this investment and either submit poor proposals or run out of capacity to pursue other revenue.",
                },
                {
                  mistake: "Competing on price instead of technical differentiation",
                  detail:
                    "IT companies from competitive commercial markets often default to price competition. Federal IT Best Value evaluations are different — the technical score frequently outweighs price by a significant factor. A proposal that scores Outstanding on technical approach and Acceptable on past performance will usually beat a proposal that scores Acceptable on technical and outstanding on price. Invest your proposal effort in technical differentiation, not discounting.",
                },
                {
                  mistake: "Not engaging before the solicitation drops",
                  detail:
                    "By the time a federal IT solicitation appears on SAM.gov, the agency has usually been planning the acquisition for 12–24 months. The technical requirements, evaluation criteria, and contract structure reflect months of internal debate. Companies that engage during that pre-solicitation period — through Sources Sought responses, industry days, and relationship building — understand the requirement in a way that cold bidders cannot. Late engagement is a structural disadvantage.",
                },
              ].map(({ mistake, detail }) => (
                <div
                  key={mistake}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 animate-on-scroll"
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-900 text-sm mb-1">{mistake}</p>
                    <p className="text-red-700 text-xs leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA block */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white animate-on-scroll">
              <div className="flex items-start gap-3 mb-3">
                <BarChart3 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                <h3 className="text-2xl font-black">
                  Federal IT rewards companies that do the pre-work.
                </h3>
              </div>
              <p className="text-stone-300 leading-relaxed mb-6">
                The companies winning federal IT work are not necessarily the most technically
                capable — they are the ones who identified the opportunity early, built
                relationships before the solicitation dropped, and submitted proposals that
                proved they understood the agency&apos;s specific problem. CapturePilot gives you{" "}
                <Link href="/features/intelligence" className="text-blue-300 hover:underline">
                  contract intelligence
                </Link>{" "}
                to find expiring contracts before recompete,{" "}
                <Link href="/features/matching" className="text-blue-300 hover:underline">
                  opportunity matching
                </Link>{" "}
                tuned to your NAICS codes and certifications, and{" "}
                <Link href="/features/proposals" className="text-blue-300 hover:underline">
                  proposal tools
                </Link>{" "}
                that keep your bids compliant and competitive from first draft to submission.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SIGNUP_URL}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                  Start free trial <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={CHECK_URL}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-white/20 transition-colors border border-white/20"
                >
                  Check your eligibility <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
