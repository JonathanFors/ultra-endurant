import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SlashMark from "@/components/SlashMark";
import SubscribeForm from "@/components/club/SubscribeForm";
import StickyWaitlistBar from "@/components/club/StickyWaitlistBar";
import ClubProofBand from "@/components/club/ClubProofBand";
import ClubFit from "@/components/club/ClubFit";
import { InstagramIcon, MailIcon } from "@/components/icons";
import { brand, facts, groupCoaching, legal, legalPages, siteLinks, subscribeSource } from "@/lib/site";

/**
 * Group coaching waitlist — a standalone landing page for one action: getting an
 * email address onto the waitlist.
 */

const title = "Group coaching waitlist";
const shareImage = "/images/hero-coast-road.jpg";
const shareImageAlt =
  "A runner on a winding coastal road above the Atlantic in Portugal.";
const description = `Five athletes get my group coaching free, forever — drawn at random from the waitlist when the group opens at the ${groupCoaching.launch}. Everyone else pays ${groupCoaching.price}${groupCoaching.period}. Three questions to join.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteLinks.waitlist },
  openGraph: {
    title: `${title} — ${brand.name}`,
    description,
    url: `https://ultraendurant.com${siteLinks.waitlist}`,
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

/** The three terms defining the launch and the draw */
const TERMS = [
  {
    figure: "Free",
    title: "Free forever",
    body: "The five drawn places never pay. Not a free trial, not a discounted first month — free for as long as you stay in the group.",
  },
  {
    figure: `0${groupCoaching.freeSpots}`,
    title: "Drawn at random",
    body: "Not the first five to sign up. Everyone on the waitlist when the group opens has the same chance, so joining now and joining tonight are worth exactly the same.",
  },
  {
    figure: "Sept",
    title: "Opens end of September",
    body: `That's when the group starts and the draw happens. If you're not one of the five, it's ${groupCoaching.price}${groupCoaching.period} and you can walk away — nothing is owed for being on a list.`,
  },
] as const;

/** What is included in group coaching — 4 comprehensive pillars */
const INCLUDED_PILLARS = [
  {
    index: "01",
    tag: "Individual programming",
    title: "A bespoke training plan, written for you",
    body: "Every single session is written by me specifically for your life, schedule, and race target. No generic AI templates, no recycled spreadsheets. When work, travel, or fatigue alters your week, your plan adjusts to fit reality.",
    extra: "Includes full access to the training movement video library — so you can see every exercise performed with proper form.",
  },
  {
    index: "02",
    tag: "Weekly review",
    title: "Weekly live group coaching call",
    body: "We meet as a group on a live call every single week. We review the week behind you, break down training hurdles, and preview what's ahead. You get your questions answered, and learn just as much from the answers given to your peers.",
    extra: "All calls are kept interactive and concise — real discussion, no drawn-out lectures.",
  },
  {
    index: "03",
    tag: "Continuous support",
    title: "Direct WhatsApp access with Jonathan",
    body: "You get direct messaging access to the same WhatsApp number my 1:1 athletes text. If a question comes up on a Tuesday night or your legs feel shredded before a key session, you don't wait days for an answer.",
    extra: "Direct communication with your actual coach whenever you need a fast adjustment.",
  },
  {
    index: "04",
    tag: "The squad",
    title: "A private group channel",
    body: "A dedicated community channel strictly for your group. A private space to log workouts, share trail conditions, celebrate wins, and stay accountable between our weekly calls. A huge part of the endurance journey happens right here.",
    extra: "Built to keep you connected and motivated with runners pursuing the same milestones.",
  },
] as const;

/** How the groups work / structure */
const GROUP_DYNAMICS = [
  {
    numeral: "~5",
    title: "Around five runners per group",
    body: "Deliberately kept small so nobody gets lost in the crowd. I know what your personal week looks like, your specific training volume, and everyone in the circle knows your name.",
  },
  {
    numeral: "Fit",
    title: "Matched by goals & constraints",
    body: "You aren't dropped into a random chat. Groups are formed around similar race distances, timelines, and life pressures — so the conversation is genuinely relevant to your reality.",
  },
  {
    numeral: "Push",
    title: "Mixed on level, on purpose",
    body: "Close enough in pace to relate to, but far enough apart to challenge each other. Some weeks you're being pulled along; other weeks you're the one setting the standard.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://ultraendurant.com${siteLinks.waitlist}#group-coaching`,
  name: "Group ultra-running coaching",
  serviceType: "Ultra-endurance running coaching",
  description:
    "Small-group ultra-running coaching, built around the athlete's whole life. Five places are free, drawn at random from the waitlist.",
  provider: {
    "@type": "Person",
    name: brand.coach,
    jobTitle: "Ultra-Endurance Running Coach",
    url: "https://ultraendurant.com",
  },
  areaServed: "Worldwide (remote)",
  offers: {
    "@type": "Offer",
    price: "50",
    priceCurrency: "EUR",
    availability: "https://schema.org/PreOrder",
    url: `https://ultraendurant.com${siteLinks.waitlist}`,
  },
};

export default function WaitlistPage() {
  return (
    <div className="club club-on-ink pt-16 sm:pt-[4.5rem] bg-ink text-snow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* =============================================================
            HERO: The Draw & Primary Form
            ============================================================= */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="club-slashes pointer-events-none absolute -right-16 -top-16 h-[50vw] max-h-[34rem] w-[55vw] max-w-[40rem] text-red/[0.13] [--bar:12px] [--gap:40px] sm:-right-28 sm:[--bar:20px] sm:[--gap:66px]"
          />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 py-12 sm:px-8 sm:py-14">
            <div className="flex items-center gap-3">
              <SlashMark className="h-4 w-[1.1rem] shrink-0 text-red" />
              <p className="club-label text-snow-dim">
                Waitlist · Opens {groupCoaching.launch}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="font-club text-[clamp(2.5rem,7vw,4.25rem)] text-snow">
                  <span className="block">
                    {groupCoaching.freeSpots} people get
                  </span>
                  <span className="mt-2.5 block text-[clamp(2.1rem,6.4vw,4rem)] leading-[1.2]">
                    <span className="club-tape">coached free.</span>
                  </span>
                  <span className="mt-2.5 block">Forever.</span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-relaxed text-snow-dim">
                  Group coaching opens at the {groupCoaching.launch}. Five
                  places are free — drawn at random from this waitlist, and free
                  for as long as those five athletes want them. Everyone else
                  pays {groupCoaching.price}
                  {groupCoaching.period}.
                </p>

                <div
                  data-waitlist-anchor
                  className="mt-7 max-w-xl border-2 border-snow/25 p-5 sm:p-6"
                >
                  <p className="club-label text-snow">Join the waitlist</p>
                  <SubscribeForm
                    action="Join"
                    utmMedium={subscribeSource.groupWaitlist}
                    waitlistDetails
                    location="waitlist-hero"
                    note="Your name, roughly where you're at, and an email — that's the whole signup. No payment details, no commitment — unsubscribe whenever you like."
                    successNote={`You're on the list. The draw happens when the group opens at the ${groupCoaching.launch} — I'll email you either way, and nothing before then.`}
                    className="mt-4"
                  />
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9 lg:self-center">
                <div className="border-2 border-red/40 p-6 sm:p-8">
                  <p
                    aria-hidden="true"
                    className="club-numeral club-hollow text-[clamp(5rem,17vw,11rem)] text-red-bright"
                    style={{ WebkitTextStrokeWidth: "clamp(2px, 0.4vw, 4px)" }}
                  >
                    0{groupCoaching.freeSpots}
                  </p>
                  <p className="club-label mt-4 text-[0.66rem] text-snow-dim">
                    Free places, drawn at random
                  </p>
                  <p className="mt-4 border-t border-snow/20 pt-4 text-sm leading-relaxed text-snow-dim">
                    Free means free. Those five never pay for group coaching,
                    for as long as they stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================================
            TERMS: Launch Date & Selection
            ============================================================= */}
        <section className="club border-t-2 border-red bg-paper text-ink">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-ink">
                What you&apos;re joining
              </span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <dl className="mt-10 grid grid-cols-1 border-t-2 border-ink sm:grid-cols-3">
              {TERMS.map(({ figure, title: term, body }, i) => (
                <Reveal
                  key={term}
                  delay={i * 80}
                  className={`flex flex-col gap-3 py-8 sm:px-7 sm:first:pl-0 ${
                    i > 0
                      ? "border-t-2 border-ink/15 sm:border-l-2 sm:border-t-0"
                      : ""
                  }`}
                >
                  <dt className="club-numeral text-[2.75rem] leading-none text-red">
                    {figure}
                  </dt>
                  <dd>
                    <p className="font-club-upright text-lg text-ink">{term}</p>
                    <p className="mt-2.5 leading-relaxed text-ink-soft">
                      {body}
                    </p>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* =============================================================
            WHO YOU'D WORK WITH: Alternate split layout
            ============================================================= */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-snow">
                Who you&apos;d work with
              </span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <div className="mt-12 grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Image card with badge */}
              <Reveal className="lg:col-span-5" delay={60}>
                <div className="club-cut-br relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden border-2 border-snow/20 bg-night-2">
                  <Image
                    src="/images/coach-trail.jpg"
                    alt="Jonathan Fors standing on a coastal path above the Atlantic in Portugal."
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-[52%_45%]"
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
                      {brand.name} is one coach doing the work. Real, sustainable
                      training built around a whole human life.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Story & Philosophy */}
              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <Reveal delay={80}>
                    <h2 className="font-club text-club-lg max-w-[18ch] text-snow">
                      You&apos;re a person, not a{" "}
                      <span className="club-tape">plan.</span>
                    </h2>
                  </Reveal>

                  <Reveal className="mt-8 space-y-6 text-lg leading-relaxed text-snow-dim" delay={110}>
                    <p>
                      <strong className="text-snow">
                        Most coaching plans start with the schedule and expect your life to bend around it.
                      </strong>{" "}
                      I start at the other end. Your work, your family, your sleep, and the stress you&apos;re
                      already carrying — all of it dictates how your body actually adapts to training.
                    </p>
                    <p>
                      Rest, recovery, and life outside running aren&apos;t interruptions to the training; they are
                      the foundation of it. A week you can repeat week after week is worth infinitely more than
                      a textbook week you survive once before burning out or breaking down.
                    </p>
                    <p>
                      I know what the rigid way costs. I ran {facts.ranKm} km down the coastline of Portugal,
                      and I was stopped at {facts.previousKm} km two years earlier because my body gave out from
                      being overruled. The finish is on the website; the failure is why my coaching method works.
                    </p>
                  </Reveal>
                </div>

                <Reveal className="mt-10 border-l-2 border-red pl-5 sm:mt-12" delay={140}>
                  <p className="font-club-upright text-lg text-snow">
                    &ldquo;A week you can repeat is worth more than a perfect week you manage once.&rdquo;
                  </p>
                  <p className="club-label mt-2 text-[0.66rem] text-snow-dim">
                    — {brand.coach}, Ultra Endurant
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* =============================================================
            THE RECORD: Running credentials as proof
            ============================================================= */}
        <ClubProofBand />

        {/* =============================================================
            WHAT IS INCLUDED: 4 interactive cards with visual punch
            ============================================================= */}
        <section className="club border-t-2 border-red bg-paper text-ink">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-ink">What is included</span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <Reveal className="mt-8" delay={60}>
              <h2 className="font-club text-club-lg max-w-[20ch] text-ink">
                Built for results.{" "}
                <span className="club-tape">Not a generic course.</span>
              </h2>
            </Reveal>

            <Reveal className="mt-7 max-w-2xl" delay={90}>
              <p className="text-lg leading-relaxed text-ink-soft">
                Everything in the group coaching program is structured around
                direct feedback, personal adaptation, and active peer support. Here is
                exactly what you get:
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
              {INCLUDED_PILLARS.map(({ index, tag, title: itemTitle, body, extra }, i) => (
                <Reveal
                  key={index}
                  delay={i * 80}
                  className="club-cut-br flex flex-col justify-between border-2 border-ink bg-white p-7 sm:p-9 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-ink/15 pb-4">
                      <span className="club-numeral text-4xl text-red sm:text-5xl">
                        {index}
                      </span>
                      <span className="club-label text-[0.66rem] text-ink-faint">
                        {tag}
                      </span>
                    </div>

                    <h3 className="font-club-upright mt-6 text-xl text-ink sm:text-2xl">
                      {itemTitle}
                    </h3>
                    <p className="mt-4 leading-relaxed text-ink-soft">
                      {body}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="flex items-start gap-2.5 text-sm text-ink-faint">
                      <SlashMark className="h-3.5 w-[0.9rem] shrink-0 translate-y-0.5 text-red" />
                      <span>{extra}</span>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =============================================================
            HOW IT WORKS: Group dynamics & composition
            ============================================================= */}
        <section className="bg-ink py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-4">
              <span className="club-label shrink-0 text-snow">
                How group coaching works
              </span>
              <span
                aria-hidden="true"
                className="club-slashes h-6 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <Reveal className="mt-8" delay={60}>
              <h2 className="font-club text-club-lg max-w-[24ch] text-snow">
                A tight collective.{" "}
                <span className="text-red-bright">Not an open chat room.</span>
              </h2>
            </Reveal>

            <Reveal className="mt-7 max-w-2xl" delay={90}>
              <p className="text-lg leading-relaxed text-snow-dim">
                Group coaching only delivers when every member is active, seen, and
                consistently supported. We deliberately cap and balance each unit.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {GROUP_DYNAMICS.map(({ numeral, title: dynTitle, body }, i) => (
                <Reveal
                  key={dynTitle}
                  delay={i * 70}
                  className="club-cut-br border-2 border-snow/20 bg-snow/[0.03] p-7 transition-colors hover:border-red/60"
                >
                  <p className="club-numeral text-4xl text-red-bright sm:text-5xl">
                    {numeral}
                  </p>
                  <h3 className="font-club-upright mt-4 text-lg text-snow sm:text-xl">
                    {dynTitle}
                  </h3>
                  <p className="mt-3 leading-relaxed text-snow-dim">
                    {body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =============================================================
            WHO THIS IS FOR / FIT: Clear criteria
            ============================================================= */}
        <ClubFit />

        {/* =============================================================
            BOTTOM DRAW CTA: Second signup form
            ============================================================= */}
        <section className="club border-t-2 border-red bg-paper text-ink">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid grid-cols-1 items-center gap-x-12 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <h2 className="font-club text-club-md max-w-[16ch] text-ink">
                    <span className="block leading-[1.2]">
                      Get in the <span className="club-tape">draw.</span>
                    </span>
                  </h2>
                </Reveal>
                <Reveal className="mt-5" delay={60}>
                  <p className="max-w-md leading-relaxed text-ink-soft">
                    Five free places, drawn when the group opens at the{" "}
                    {groupCoaching.launch}. Signing up early is no advantage —
                    it just puts you in the draw.
                  </p>
                </Reveal>
              </div>
              <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}>
                <div data-waitlist-anchor>
                  <SubscribeForm
                    action="Join the waitlist"
                    utmMedium={subscribeSource.groupWaitlist}
                    waitlistDetails
                    location="waitlist-footer"
                    tone="paper"
                    successNote={`You're on the list — I'll email you when the group opens at the ${groupCoaching.launch}.`}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <StickyWaitlistBar />

      {/* Footer */}
      <footer className="border-t-2 border-snow/15 bg-ink">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-5 py-8 text-sm text-snow-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            Don&apos;t want to wait?{" "}
            <Link
              href="/#coaching-options"
              className="text-snow underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red-bright"
            >
              1:1 coaching is open now
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
