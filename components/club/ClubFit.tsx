import Reveal from "@/components/Reveal";
import SlashMark from "@/components/SlashMark";
import { CloseIcon } from "@/components/icons";
import { siteLinks } from "@/lib/site";

const FOR = [
  [
    "You want someone who sees the full picture",
    "Metrics and numbers matter, but ultimately the big picture is what makes the difference. Consistency over one-off perfection.",
  ],
  [
    "You're in it for the long game",
    "Anyone can push hard once or twice, but fewer can do it for a lifetime. You're training for a lifelong active, strong body.",
  ],
  [
    "You have a busy life outside of running",
    "Running means a lot, but so does your family, work, friends, and other obligations. ",
  ],
  [
    "You want a coach who's proactive",
    "Your coach should be someone who's in it with you, not someone you chase for days just to get a response.",
  ],
] as const;

const NOT_FOR = [
  [
    "You want just a workout calendar",
    "If what you want is a PDF and no conversation, I'm the wrong coach and an expensive way to get one. There are cheaper places.",
  ],
  [
    "You want the fastest route, whatever it costs",
    "If the answer to every setback is push harder, we'll spend the whole time arguing. I'll ask you to back off, and I'll mean it.",
  ],
  [
    "All your focus on are the metrics",
    "Someone once said numbers don't lie, well... in running sometimes they do and looking at the bigger picture is equally important.",
  ],
] as const;

/**
 * Who the coaching is and isn't for — stated in two columns so the reader can
 * find themselves in one of them quickly.
 *
 * The two sides are weighted differently on purpose. "For" is set on ink with a
 * red mark: solid, and the thing you're meant to land on. "Not for" is set on
 * paper with muted type — present, readable, but not competing. Turning the
 * wrong people away only works if it's easy to read and doesn't feel like a
 * boast, so the negative column is the quieter one.
 */
export default function ClubFit() {
  return (
    <section
      id="fit"
      className="club relative scroll-mt-16 bg-paper sm:scroll-mt-[4.5rem]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex items-center gap-5">
          <span className="club-numeral club-hollow shrink-0 text-6xl text-ink sm:text-7xl">
            03
          </span>
          <span className="club-label shrink-0 text-ink">Who this is for</span>
          <span
            aria-hidden="true"
            className="club-slashes h-7 flex-1 text-red [--bar:5px] [--gap:13px]"
          />
        </Reveal>

        <Reveal className="mt-10 sm:mt-12">
          <h2 className="font-club text-club-lg max-w-[20ch] text-ink">
            I&apos;d rather say no{" "}
            <span className="club-tape">early.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Coaching only works when the fit is right, and a bad fit wastes your
            money and my time. So here it is both ways round, before you book
            anything.
          </p>
        </Reveal>

        {/* Two columns. `items-start` so the shorter column doesn't stretch to
            match the taller one — 4 items against 3 would leave a hanging box. */}
        <div className="mt-14 grid grid-cols-1 items-start gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* ---- For ------------------------------------------------- */}
          <div>
            <Reveal className="flex items-center gap-3">
              <SlashMark className="h-4 w-[1.1rem] shrink-0 text-red" />
              <h3 className="club-label text-ink">This is for you if</h3>
            </Reveal>

            <ul className="club-on-ink mt-6 flex flex-col gap-px bg-ink/15">
              {FOR.map(([title, body], i) => (
                <Reveal
                  key={title}
                  as="li"
                  delay={i * 50}
                  className="bg-ink p-6 text-snow sm:p-7"
                >
                  <div className="flex items-baseline gap-3.5">
                    <SlashMark className="h-3.5 w-[1rem] shrink-0 translate-y-0.5 text-red-bright" />
                    <h4 className="font-club-upright text-club-sm text-snow">
                      {title}
                    </h4>
                  </div>
                  <p className="mt-3 leading-relaxed text-snow-dim">{body}</p>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* ---- Not for --------------------------------------------- */}
          <div>
            <Reveal className="flex items-center gap-3">
              <CloseIcon className="h-4 w-4 shrink-0 text-ink-faint" />
              <h3 className="club-label text-ink-faint">
                This isn&apos;t for you if
              </h3>
            </Reveal>

            <ul className="mt-6 flex flex-col gap-4">
              {NOT_FOR.map(([title, body], i) => (
                <Reveal
                  key={title}
                  as="li"
                  delay={i * 50}
                  className="border-2 border-ink/15 bg-paper-dim p-6 sm:p-7"
                >
                  <div className="flex items-baseline gap-3.5">
                    <CloseIcon className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-ink-faint" />
                    <h4 className="font-club-upright text-club-sm text-ink-soft">
                      {title}
                    </h4>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-faint">{body}</p>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-7" delay={160}>
              <p className="leading-relaxed text-ink-faint">
                If you read that list and recognised yourself, no hard feelings
                — genuinely. And if you&apos;re not sure which column you&apos;re
                in,{" "}
                <a
                  href={siteLinks.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="book-intro-call"
                  data-cta-location="fit"
                  className="font-medium text-ink underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red"
                >
                  book the call
                </a>{" "}
                and I&apos;ll tell you straight.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
