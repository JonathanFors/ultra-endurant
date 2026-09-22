import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SlashMark from "@/components/SlashMark";
import ClubProofBand from "@/components/club/ClubProofBand";
import ClubFit from "@/components/club/ClubFit";
import { ArrowIcon, InstagramIcon, MailIcon } from "@/components/icons";
import { brand, groupCoaching, legal, legalPages, siteLinks } from "@/lib/site";

const title = "Ultra Endurant Group Coaching — Personalized Plans in Small Squads";
const description =
  "Train for your ultramarathon in a small squad of ~5 athletes. Custom training plan personally written by Jonathan Fors, weekly live call, video library, and direct WhatsApp access.";
const shareImage = "/images/hero-coast-runner.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${brand.url}/group-coaching` },
  openGraph: {
    title,
    description,
    url: `${brand.url}/group-coaching`,
    siteName: brand.name,
    type: "website",
    locale: "en_US",
    images: [{ url: shareImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ultra Endurant Group Coaching",
  provider: {
    "@type": "Person",
    name: brand.coach,
    url: brand.url,
  },
  description,
  offers: {
    "@type": "Offer",
    price: "50",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${brand.url}/group-coaching`,
  },
};

const PILLARS = [
  {
    step: "01",
    label: "Custom Plan",
    title: "Written personally for your life and your target race",
    body: "No automated algorithms or generic templates. Every workout block is built specifically around your schedule, current mileage, injury history, and life constraints.",
  },
  {
    step: "02",
    label: "Weekly Squad Call",
    title: "One hour live each week with your group",
    body: "Review the week's training, discuss pacing and fuelling hurdles, and dial in the upcoming block. Groups are capped at ~5 runners so everyone gets individual focus.",
  },
  {
    step: "03",
    label: "Direct Access",
    title: "WhatsApp messaging directly with Jonathan",
    body: "Life happens, work runs late, or a niggle pops up. Message me whenever you need a workout adjusted or have a question between calls.",
  },
  {
    step: "04",
    label: "Movement Library",
    title: "Video tutorials for every workout movement",
    body: "Clear demonstrations of running-specific strength, trunk stability, mobility, and recovery routines so you execute every session with confidence.",
  },
] as const;

const SQUAD_STANDARDS = [
  "Strictly ~5 runners per cohort",
  "Matched on goals, target race date, and timezone",
  "Mixed on experience level so runners push and support each other",
  "Direct feedback and workout adjustments every week",
  "No long-term contracts — cancel or pause anytime",
] as const;

export default function GroupCoachingPage() {
  return (
    <div className="club club-on-ink min-h-screen bg-ink pt-16 text-snow sm:pt-[4.5rem]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* =============================================================
            HERO: Headline & Primary Action
            ============================================================= */}
        <header className="relative overflow-hidden border-b-2 border-red/40 bg-ink pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div
            aria-hidden="true"
            className="club-slashes pointer-events-none absolute -right-20 -top-20 h-[50vw] max-h-[36rem] w-[55vw] max-w-[42rem] text-red/[0.12] [--bar:14px] [--gap:44px]"
          />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <SlashMark className="h-4 w-[1.1rem] shrink-0 text-red" />
              <p className="club-label text-snow-dim">
                Group Coaching · Launching {groupCoaching.launch}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <h1 className="font-club text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.88] text-snow">
                  <span className="block">Group coaching.</span>
                  <span className="mt-3 block text-[clamp(2.1rem,6.2vw,4.25rem)] leading-[1.15]">
                    <span className="club-tape">Built around</span> your life.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-snow-dim sm:text-xl">
                  Train for your first 50k or your next hundred-miler in a tight squad of ~5
                  dedicated runners. Custom-written plans, weekly live calls, and direct
                  WhatsApp support.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={siteLinks.booking15Min}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-club btn-club-red club-label group inline-flex items-center justify-center gap-3 px-8 py-5 text-center"
                  >
                    <span className="inline-flex items-center gap-3">
                      Book a 15-min intro call
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>

                  <div className="border-2 border-snow/20 bg-ink/60 px-6 py-4">
                    <div className="flex items-baseline gap-2">
                      <span className="club-numeral text-4xl text-snow">€50</span>
                      <span className="club-numeral text-xl text-snow-dim">/mo</span>
                      <span className="club-label ml-3 text-[0.66rem] text-snow-dim">
                        No minimum period
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 lg:self-center">
                <div className="border-2 border-red/40 p-6 sm:p-8">
                  <p
                    aria-hidden="true"
                    className="club-numeral club-hollow text-[clamp(5rem,14vw,9rem)] text-red-bright"
                    style={{ WebkitTextStrokeWidth: "clamp(2px, 0.4vw, 4px)" }}
                  >
                    ~05
                  </p>
                  <p className="club-label mt-4 text-[0.66rem] text-snow-dim">
                    Athletes per squad
                  </p>
                  <p className="mt-4 border-t border-snow/20 pt-4 text-sm leading-relaxed text-snow-dim">
                    Capped strictly at ~5 runners. You get genuine individual attention and
                    squad camaraderie, never a faceless mass webinar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* =============================================================
            PILLARS: The 4 Core Pillars
            ============================================================= */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28 border-b-2 border-snow/15">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-5">
              <span className="club-numeral club-hollow shrink-0 text-6xl text-snow sm:text-7xl">
                01
              </span>
              <span className="club-label shrink-0 text-snow">The Framework</span>
              <span
                aria-hidden="true"
                className="club-slashes h-7 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <Reveal className="mt-10 sm:mt-12">
              <h2 className="font-club text-club-lg max-w-[22ch] text-snow">
                Everything you need to <span className="club-tape">reach the finish</span> line.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {PILLARS.map((pillar, i) => (
                <Reveal
                  key={pillar.step}
                  delay={i * 60}
                  className="border-2 border-snow/15 bg-ink p-8 transition-colors hover:border-red/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="club-numeral text-4xl text-red-bright">
                      {pillar.step}
                    </span>
                    <span className="club-label text-[0.66rem] text-snow-dim">
                      {pillar.label}
                    </span>
                  </div>
                  <h3 className="font-club-upright text-xl text-snow mt-4">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-snow-dim">
                    {pillar.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =============================================================
            COHORT DESIGN: Why Small Squads Work Better
            ============================================================= */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28 border-b-2 border-snow/15">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-5">
              <span className="club-numeral club-hollow shrink-0 text-6xl text-snow sm:text-7xl">
                02
              </span>
              <span className="club-label shrink-0 text-snow">Cohort Design</span>
              <span
                aria-hidden="true"
                className="club-slashes h-7 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <Reveal>
                  <h2 className="font-club text-club-lg text-snow">
                    Why small squads <span className="text-red-bright">work better</span>.
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-snow-dim">
                    Mass training programs hand you a generic PDF and leave you to figure it out
                    alone. In Ultra Endurant group coaching, cohorts are strictly capped at around
                    five athletes.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-snow-dim">
                    You get the accountability and shared grit of a squad with the individual
                    scrutiny and plan tailoring of a private coach.
                  </p>
                </Reveal>

                <Reveal className="mt-8" delay={80}>
                  <ul className="space-y-3.5 border-t border-snow/15 pt-6">
                    {SQUAD_STANDARDS.map((standard) => (
                      <li key={standard} className="flex items-baseline gap-3 text-base text-snow">
                        <SlashMark className="h-3 w-[0.85rem] shrink-0 translate-y-0.5 text-red-bright" />
                        <span>{standard}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="lg:col-span-5">
                <Reveal delay={100} className="club-cut-br border-2 border-red/40 bg-ink p-8 sm:p-10 text-center">
                  <p className="club-label text-[0.66rem] text-snow-dim">
                    Standard Membership
                  </p>
                  <div className="club-numeral text-6xl text-snow my-4">€50</div>
                  <p className="club-label text-[0.66rem] text-snow-dim">
                    per month · cancel anytime
                  </p>

                  <div className="my-6 border-t border-snow/15" />

                  <p className="text-sm text-snow-dim leading-relaxed text-left">
                    Before joining, we jump on a short 15-minute call to check your schedule,
                    running background, and place you in the right group.
                  </p>

                  <a
                    href={siteLinks.booking15Min}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-club btn-club-red club-label group mt-8 inline-flex w-full items-center justify-center gap-3 py-4 text-center"
                  >
                    <span className="inline-flex items-center gap-3">
                      Book 15-min call
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Band */}
        <ClubProofBand />

        {/* Who this is for / not for */}
        <ClubFit />

        {/* =============================================================
            FINAL CTA
            ============================================================= */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal>
              <div className="club-cut-br flex flex-col items-start justify-between gap-8 bg-red p-8 text-ink sm:flex-row sm:items-center sm:p-12">
                <div className="max-w-2xl">
                  <h3 className="font-club text-club-md">
                    Ready to build your race block?
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-base text-ink font-medium">
                    Book a quick 15-minute call with Jonathan to discuss your target race, confirm
                    call availability, and secure your place in an upcoming squad.
                  </p>
                </div>
                <a
                  href={siteLinks.booking15Min}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-club btn-club-ink club-label group inline-flex shrink-0 items-center justify-center gap-3 px-8 py-5 text-center text-sm"
                >
                  <span className="inline-flex items-center gap-3">
                    Schedule 15-min call
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-snow/15 bg-ink">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-5 py-8 text-sm text-snow-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            Looking for 1:1 coaching instead?{" "}
            <Link
              href={siteLinks.coaching}
              className="text-snow underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red-bright"
            >
              Explore 1:1 ultramarathon coaching
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
