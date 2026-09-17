import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SlashMark from "@/components/SlashMark";
import ClubProofBand from "@/components/club/ClubProofBand";
import ClubFit from "@/components/club/ClubFit";
import { ArrowIcon, InstagramIcon, MailIcon } from "@/components/icons";
import { brand, facts, legal, legalPages, oneToOne, siteLinks } from "@/lib/site";

const title = "1:1 Ultramarathon Coaching with Jonathan Fors";
const shareImage = "/images/hero-coast-road.jpg";
const shareImageAlt =
  "A runner on a winding coastal road above the Atlantic in Portugal.";
const description = `Direct, personal 1:1 ultra-endurance running coaching with Jonathan Fors. Custom plans built around your real life, weekly 1:1 calls, and continuous access in the Ultra Endurant App. ${oneToOne.price}${oneToOne.period}, no minimum contract.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteLinks.coaching },
  openGraph: {
    title: `${title} — ${brand.name}`,
    description,
    url: `https://ultraendurant.com${siteLinks.coaching}`,
    siteName: brand.name,
    type: "website",
    locale: "en_US",
    images: [{ url: shareImage, width: 1200, height: 630, alt: shareImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

/** Industry flaws vs Jonathan's approach */
const FLAWS_VS_FIX = [
  {
    numeral: "01",
    tag: "The Template Trap",
    flawTitle: "Recycled generic spreadsheets",
    flawBody:
      "Most online coaching is a recycled 16-week PDF with your name pasted at the top. When life gets chaotic or an injury flares, the spreadsheet has no answers.",
    fixTitle: "Plans written from scratch, adapted weekly",
    fixBody:
      "Every workout is authored personally by me for your physiology, terrain, and exact schedule. When your calendar changes, your training changes immediately.",
  },
  {
    numeral: "02",
    tag: "Life Blindness",
    flawTitle: "Ignoring your sleep, work, and family",
    flawBody:
      "Standard programs treat your life as a distraction from running. They expect you to hit high mileage regardless of 60-hour work weeks or poor sleep.",
    fixTitle: "Holistic adaptation over rigid volume",
    fixBody:
      "Your life stress and your training stress draw from the exact same recovery pool. We build a workload your body can actually absorb and repeat indefinitely.",
  },
  {
    numeral: "03",
    tag: "Ghost Coaches",
    flawTitle: "Waiting 48 hours for an email reply",
    flawBody:
      "Having a coach who only reviews your data once every two weeks means you're left guessing when your knee aches or race conditions shift.",
    fixTitle: "Continuous direct access in the app",
    fixBody:
      "You have direct messaging and weekly calls with me. When you have a doubt before a long run or need to adjust paces, you get an answer right away.",
  },
] as const;

/** The 4 Core 1:1 Pillars */
const PILLARS = [
  {
    index: "01",
    tag: "Weekly Programming",
    title: "100% Bespoke Training Architecture",
    body: "No generic templates or automated workouts. Every block is crafted around your target event — whether that is your first 50k or a hundred-miler. Altitude, heat, vert, nutrition, and night-running protocols are dialed into your exact race environment.",
    highlight: "Updated weekly to match your actual recovery and life commitments.",
  },
  {
    index: "02",
    tag: "Dedicated Consultation",
    title: "Weekly 1:1 Strategy & Video Calls",
    body: "We jump on a dedicated call every single week. We review your biometrics, analyze your workouts, troubleshoot niggles, and review tactical pacing. You never step onto the trail wondering why a workout was prescribed.",
    highlight: "All calls transcribed and searchable inside the Ultra Endurant App.",
  },
  {
    index: "03",
    tag: "Direct Access",
    title: "Real-Time Messaging With Jonathan",
    body: "Coaching doesn't happen in isolated weekly check-ins. When a workout feels unexpectedly tough, bad weather hits, or your legs feel beat up on a Thursday evening, you message me directly in the app to make quick decisions.",
    highlight: "Direct communication with your actual coach — not an assistant.",
  },
  {
    index: "04",
    tag: "Injury Prevention",
    title: "Movement & Strength Video Library",
    body: "Endurance running requires chassis durability. You receive targeted strength, core, and mobility drills specifically for trail resilience. You get access to individual movement video tutorials to ensure correct form.",
    highlight: "Full movement breakdown for every strength and mobility session.",
  },
] as const;

/** 4-Stage Athletic Roadmap */
const ROADMAP = [
  {
    step: "01",
    title: "Deep-Dive Discovery & Intake",
    description:
      "We start with a thorough audit of your past running history, previous injuries, weekly commitments, sleep habits, and race targets. We identify what worked, what failed, and what your life realistically accommodates.",
  },
  {
    step: "02",
    title: "Baseline Testing & Aerobic Foundation",
    description:
      "We determine your aerobic threshold, establish sustainable pacing zones, and identify muscular or mobility weaknesses. No junk miles — every run has an intentional physiological purpose.",
  },
  {
    step: "03",
    title: "Specific Race Simulation & Gut Training",
    description:
      "As race day nears, we train the race specifics: back-to-back long runs, sustained vertical climbing, technical descending, gear testing, and hourly carbohydrate/electrolyte digestion under fatigue.",
  },
  {
    step: "04",
    title: "Taper, Crew Strategy & Race Execution",
    description:
      "We build a minute-by-minute execution plan for race day: pacing splits, drop bag logistics, aid station checklists, mental contingency plans, and crew coordination so nothing is left to chance.",
  },
] as const;

/** Common FAQs */
const FAQS = [
  {
    q: "Do I need to be an experienced ultra runner to do 1:1 coaching?",
    a: "No. Many athletes I coach are stepping up to their first marathon, 50k, or 50-miler. What matters isn't your current weekly mileage — it's your commitment to consistent, honest communication and doing the work patiently.",
  },
  {
    q: "How are workouts delivered and analyzed?",
    a: "Everything runs through the Ultra Endurant App. Your schedule is laid out clearly, workout data syncs seamlessly, and you can message me, join calls, and view movement tutorials all in one single place without juggling multiple tools.",
  },
  {
    q: "What happens if I get sick, injured, or have a crazy work week?",
    a: "That's precisely why you have a 1:1 coach. Instead of stressing about 'missed sessions', we immediately restructure the training block. Rest and adaptation are part of the process, not interruptions.",
  },
  {
    q: "Is there a minimum contract or lock-in period?",
    a: "None. Coaching is billed month-to-month at €200/mo. You can cancel anytime without friction or awkward exit interviews. I want you working with me because you're getting undeniable value every single week.",
  },
  {
    q: "What happens on the free discovery call?",
    a: "It's an honest 20–30 minute chat. You share your running background and your goals; I ask questions about your lifestyle and tell you candidly how I'd approach your training. If we aren't a great fit, I'll point you in the right direction anyway.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ultraendurant.com/#jonathan",
      name: brand.coach,
      jobTitle: "Ultra-Endurance Running Coach",
      description:
        "UESCA-certified ultra-endurance running coach. Holistic coaching that builds training around an athlete's whole life.",
      url: "https://ultraendurant.com",
      email: `mailto:${siteLinks.email}`,
      sameAs: [siteLinks.instagram, siteLinks.linkedin],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "UESCA Ultrarunning Coach Certification",
      },
      award: `Ran ${facts.ranKm} km down the coast of Portugal in ${facts.ranDays} days for ${facts.cause}`,
    },
    {
      "@type": "Service",
      "@id": `https://ultraendurant.com${siteLinks.coaching}#one-to-one`,
      name: "1:1 Ultra-Endurance Running Coaching",
      serviceType: "Personal Ultra Running Coaching",
      brand: { "@type": "Brand", name: brand.name },
      provider: { "@id": "https://ultraendurant.com/#jonathan" },
      areaServed: "Worldwide (remote)",
      description:
        "Comprehensive 1:1 ultra-marathon coaching. Custom training plans adapted weekly, live weekly calls, and continuous coach access in the Ultra Endurant App.",
      offers: {
        "@type": "Offer",
        price: "200",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "200",
          priceCurrency: "EUR",
          unitCode: "MON",
        },
        availability: "https://schema.org/InStock",
        url: siteLinks.booking,
      },
    },
  ],
};

export default function CoachingPage() {
  return (
    <div className="club club-on-ink min-h-screen bg-ink pt-16 text-snow sm:pt-[4.5rem]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* =============================================================
            HERO: 1:1 Coaching Headline & Direct Action
            ============================================================= */}
        <section className="relative overflow-hidden border-b-2 border-red/40 bg-ink pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div
            aria-hidden="true"
            className="club-slashes pointer-events-none absolute -right-20 -top-20 h-[50vw] max-h-[36rem] w-[55vw] max-w-[42rem] text-red/[0.12] [--bar:14px] [--gap:44px]"
          />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <SlashMark className="h-4 w-[1.1rem] shrink-0 text-red" />
              <p className="club-label text-snow-dim">
                1:1 Coaching · Limited Roster
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <h1 className="font-club text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.88] text-snow">
                  <span className="block">One dedicated coach.</span>
                  <span className="mt-3 block text-[clamp(2.1rem,6.2vw,4.25rem)] leading-[1.15]">
                    <span className="club-tape">An ultra plan</span> that
                  </span>
                  <span className="mt-3 block">fits your real life.</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-snow-dim sm:text-xl">
                  Custom ultramarathon coaching from a first 50k to 100-milers.
                  No recycled PDFs, no ghosting, and no expecting your family and
                  career to bend around a rigid training schedule.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={siteLinks.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="book-intro-call"
                    data-cta-location="coaching-hero"
                    className="btn-club btn-club-red club-label group inline-flex items-center justify-center gap-3 px-8 py-5 text-center"
                  >
                    <span className="inline-flex items-center gap-3">
                      Book a free discovery call
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>

                  <a
                    href="#how-it-works"
                    className="btn-club btn-club-outline-light club-label inline-flex items-center justify-center px-7 py-5 text-center text-xs"
                  >
                    <span>How it works</span>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-snow-dim/80">
                  <p className="flex items-center gap-2">
                    <SlashMark className="h-3 w-[0.8rem] text-red-bright" />
                    Free 20–30 min consultation
                  </p>
                  <p className="flex items-center gap-2">
                    <SlashMark className="h-3 w-[0.8rem] text-red-bright" />
                    No sales pitch or pressure
                  </p>
                  <p className="flex items-center gap-2">
                    <SlashMark className="h-3 w-[0.8rem] text-red-bright" />
                    {oneToOne.price}
                    {oneToOne.period} · Cancel anytime
                  </p>
                </div>
              </div>

              {/* Price card badge */}
              <div className="lg:col-span-4 lg:self-center">
                <div className="club-cut-br border-2 border-red/50 bg-night-2 p-6 sm:p-8">
                  <div className="flex items-center justify-between border-b border-snow/15 pb-4">
                    <span className="club-label text-red-bright">
                      1:1 Membership
                    </span>
                    <span className="club-label text-[0.6rem] text-snow-dim">
                      Active Enrollment
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="club-numeral text-6xl text-snow sm:text-7xl">
                      {oneToOne.price}
                    </span>
                    <span className="club-numeral text-2xl text-snow-dim">
                      {oneToOne.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-snow-dim">
                    Direct access to Jonathan Fors. Every workout written
                    individually, reviewed weekly, and supported daily.
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-snow/15 pt-5 text-sm text-snow-dim">
                    {oneToOne.includes.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <SlashMark className="h-3.5 w-[0.9rem] shrink-0 translate-y-0.5 text-red-bright" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={siteLinks.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="book-intro-call"
                    data-cta-location="coaching-hero-card"
                    className="btn-club btn-club-red club-label mt-8 inline-flex w-full items-center justify-center py-4 text-center text-xs"
                  >
                    <span>Schedule intro call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================================
            THE INDUSTRY FLAWS: Why typical coaching breaks athletes
            ============================================================= */}
        <section className="club border-b-2 border-red bg-paper text-ink py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-ink">
                The standard problem
              </span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <Reveal className="mt-8" delay={60}>
              <h2 className="font-club text-club-lg max-w-[20ch] text-ink">
                Why most ultra coaching{" "}
                <span className="club-tape">fails runners.</span>
              </h2>
            </Reveal>

            <Reveal className="mt-6 max-w-2xl" delay={90}>
              <p className="text-lg leading-relaxed text-ink-soft">
                Most runners don&apos;t fail because they lack grit. They fail
                because rigid training programs treat human beings like machines.
                Here is what we do differently:
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {FLAWS_VS_FIX.map(
                ({ numeral, tag, flawTitle, flawBody, fixTitle, fixBody }, i) => (
                  <Reveal
                    key={tag}
                    delay={i * 80}
                    className="club-cut-br flex flex-col justify-between border-2 border-ink bg-white p-7 sm:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b-2 border-ink/15 pb-4">
                        <span className="club-numeral text-4xl text-red">
                          {numeral}
                        </span>
                        <span className="club-label text-[0.64rem] text-ink-faint">
                          {tag}
                        </span>
                      </div>

                      {/* The flaw */}
                      <div className="mt-6 border-l-2 border-ink/20 pl-4">
                        <p className="club-label text-[0.62rem] text-ink-faint">
                          The Industry Flaw
                        </p>
                        <h3 className="font-club-upright mt-1 text-lg text-ink-soft line-through decoration-red decoration-2">
                          {flawTitle}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                          {flawBody}
                        </p>
                      </div>

                      {/* The fix */}
                      <div className="mt-6 border-l-2 border-red pl-4">
                        <p className="club-label text-[0.62rem] text-red">
                          How Ultra Endurant Coaches
                        </p>
                        <h4 className="font-club-upright mt-1 text-lg text-ink">
                          {fixTitle}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                          {fixBody}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </section>

        {/* =============================================================
            PILLARS: What 1:1 Actually Delivers Week-to-Week
            ============================================================= */}
        <section id="how-it-works" className="py-20 sm:py-28 bg-ink">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-snow">
                What you receive
              </span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <Reveal className="mt-8" delay={60}>
              <h2 className="font-club text-club-lg max-w-[22ch] text-snow">
                The 4 pillars of{" "}
                <span className="text-red-bright">1:1 coaching.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
              {PILLARS.map(({ index, tag, title: pTitle, body, highlight }, i) => (
                <Reveal
                  key={index}
                  delay={i * 80}
                  className="club-cut-br border-2 border-snow/20 bg-night-2 p-8 transition-colors hover:border-red/60"
                >
                  <div className="flex items-center justify-between border-b border-snow/15 pb-4">
                    <span className="club-numeral text-4xl text-red-bright sm:text-5xl">
                      {index}
                    </span>
                    <span className="club-label text-[0.66rem] text-snow-dim">
                      {tag}
                    </span>
                  </div>

                  <h3 className="font-club-upright mt-6 text-xl text-snow sm:text-2xl">
                    {pTitle}
                  </h3>
                  <p className="mt-4 leading-relaxed text-snow-dim">
                    {body}
                  </p>

                  <div className="mt-6 border-t border-snow/15 pt-4">
                    <p className="flex items-start gap-2 text-xs font-semibold text-red-bright">
                      <SlashMark className="h-3 w-[0.8rem] shrink-0 translate-y-0.5" />
                      <span>{highlight}</span>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =============================================================
            COACH STORY & CREDIBILITY: Jonathan Fors
            ============================================================= */}
        <section className="club border-y-2 border-red bg-paper text-ink py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-ink">Your coach</span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <div className="mt-12 grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5" delay={60}>
                <div className="club-cut-br relative flex h-full min-h-[460px] flex-col justify-end overflow-hidden border-2 border-ink bg-black">
                  <Image
                    src="/images/coach-portrait.jpg"
                    alt="Jonathan Fors in running gear on the trail."
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-[50%_28%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-center gap-2">
                      <SlashMark className="h-3.5 w-[1rem] shrink-0 text-red-bright" />
                      <p className="club-label text-[0.66rem] text-snow">
                        {brand.coach}
                      </p>
                    </div>
                    <p className="club-label mt-1 text-[0.62rem] text-red-bright">
                      {facts.certification} · Ultra Coach
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-snow-dim">
                      Every single athlete works directly with Jonathan. No
                      sub-contractors, no outsourced assistants.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <Reveal delay={80}>
                    <h2 className="font-club text-club-lg max-w-[18ch] text-ink">
                      A week you repeat beats a{" "}
                      <span className="club-tape">perfect week.</span>
                    </h2>
                  </Reveal>

                  <Reveal className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft" delay={110}>
                    <p>
                      <strong className="text-ink">
                        Ultrarunning is won by patient consistency over years, not heroic burnout workouts over weeks.
                      </strong>{" "}
                      When I write your training, I am looking at your total human
                      load: career stress, sleep quantity, nutrition habits, and
                      family obligations.
                    </p>
                    <p>
                      I know what rigid training costs firsthand. In August 2026, I
                      ran {facts.ranKm} km down the entire coast of Portugal in 10
                      days. But two years earlier, I was stopped at {facts.previousKm} km
                      on that exact same route because I tried to push through
                      immune exhaustion.
                    </p>
                    <p>
                      That failure is why my coaching exists. You get an elite
                      training stimulus paired with realistic human recovery.
                    </p>
                  </Reveal>
                </div>

                <Reveal className="mt-10 border-l-2 border-red pl-5 sm:mt-12" delay={140}>
                  <p className="font-club-upright text-lg text-ink">
                    &ldquo;My athletes finish strong because we train for durability, not just spreadsheet compliance.&rdquo;
                  </p>
                  <p className="club-label mt-2 text-[0.66rem] text-ink-faint">
                    — {brand.coach}, Ultra Endurant
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================================
            RACING PROOF BAND: ITRA, MDS, Portugal
            ============================================================= */}
        <ClubProofBand />

        {/* =============================================================
            ROADMAP: From Discovery Call to Race Day
            ============================================================= */}
        <section className="bg-ink py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-snow">
                The athletic progression
              </span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <Reveal className="mt-8" delay={60}>
              <h2 className="font-club text-club-lg max-w-[20ch] text-snow">
                From discovery call to{" "}
                <span className="text-red-bright">finish line.</span>
              </h2>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ROADMAP.map(({ step, title: rTitle, description: rDesc }, i) => (
                <Reveal
                  key={step}
                  delay={i * 70}
                  className="club-cut-br border-2 border-snow/20 bg-snow/[0.02] p-7 transition-colors hover:border-red/60"
                >
                  <p className="club-numeral text-4xl text-red-bright sm:text-5xl">
                    {step}
                  </p>
                  <h3 className="font-club-upright mt-5 text-lg text-snow">
                    {rTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-snow-dim">
                    {rDesc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =============================================================
            WHO THIS IS FOR: Filter athletes upfront
            ============================================================= */}
        <ClubFit />

        {/* =============================================================
            FAQS: Answering objections
            ============================================================= */}
        <section className="club border-t-2 border-red bg-paper text-ink py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-ink">Common questions</span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <Reveal className="mt-8" delay={60}>
              <h2 className="font-club text-club-lg max-w-[18ch] text-ink">
                Everything you need to <span className="club-tape">know.</span>
              </h2>
            </Reveal>

            <div className="mt-14 max-w-4xl space-y-6">
              {FAQS.map(({ q, a }, i) => (
                <Reveal
                  key={q}
                  delay={i * 60}
                  className="border-2 border-ink bg-white p-6 sm:p-8"
                >
                  <h3 className="font-club-upright text-lg text-ink sm:text-xl">
                    {q}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {a}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =============================================================
            FINAL CALL TO ACTION: Schedule the call
            ============================================================= */}
        <section className="relative overflow-hidden bg-red py-20 text-ink sm:py-28">
          <div
            aria-hidden="true"
            className="club-slashes pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 text-ink/10 [--bar:20px] [--gap:60px]"
          />

          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="club-label text-ink">
                {facts.certification} · Ultra Endurant
              </p>
              <h2 className="font-club mt-6 text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] text-ink">
                Let&apos;s talk about your next finish line.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90 sm:text-xl">
                Book a free 20–30 minute discovery call. We&apos;ll discuss your
                goals, current mileage, and training constraints — completely
                free, no pitch, no strings attached.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={siteLinks.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="book-intro-call"
                  data-cta-location="coaching-footer"
                  className="btn-club btn-club-ink club-label group inline-flex items-center justify-center gap-3 px-10 py-5 text-center text-sm"
                >
                  <span className="inline-flex items-center gap-3">
                    Book your discovery call
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-snow/15 bg-ink">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-5 py-8 text-sm text-snow-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            Interested in group coaching instead?{" "}
            <Link
              href={siteLinks.waitlist}
              className="text-snow underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red-bright"
            >
              Join the group coaching waitlist
            </Link>
            .
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteLinks.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-red-bright"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
            <a
              href={siteLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-red-bright"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-5 pb-8 text-xs text-snow-dim/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved. —{" "}
            {legal.company}, {legal.address}
          </p>
          <nav aria-label="Legal" className="flex items-center gap-4">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="transition-colors hover:text-red-bright"
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
