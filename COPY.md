# Site copy — homepage, 404, video library, legal pages

Every word on the page, in the order it appears. **Edit this file freely** — change
the text in the right-hand column / quoted blocks, then tell me and I'll apply it to
the code.

Sections 0–11 are the homepage at `ultraendurant.com`, plus the footer and the
booking popup that appear on every page. Section 12 is the 404 page, shown for any
URL that doesn't exist. Both are live. Section 13 is the training video library at
`/videos` — built, but not published: nothing is filmed yet, so it's hidden from
search. Section 14 is the group-coaching waitlist landing page at `/waitlist` and
section 15 is the Shuffle Club landing page at `/newsletter`; both are live.
Sections 16 and 17 are the two legal pages, `/privacy` and `/terms`, linked from
the footer of every page.

⚠️ **The business was renamed to Ultra Endurant in September 2026.** Two names
appear in this file on purpose and are not interchangeable: **Ultra Endurant** is
the business — tab titles, the logo, the copyright line, the trading name on the
legal pages. **Jonathan Fors** is the person — photo descriptions, the bylines on
`/waitlist` and `/newsletter`, and anywhere the copy is about who an athlete
actually works with. Swapping one for the other changes the meaning.

⚠️ **Sections 16 and 17 are generated from the live pages**, not typed. Edit the
wording in them as freely as anywhere else — but the headings and the `#anchor`
names are structural, so leave those alone.

**Rewritten 23 Aug 2026** against one brief: human over sales, honesty over cool
claims, lead with facts, then go deeper with the feeling underneath them. What that
changed in practice is listed at the bottom under *What the rewrite changed*.

**How to read this**
- `▸ Field` — a label naming the slot, so we both know which bit we mean.
- Text in **bold** inside a line is set in the red "tape" or red highlight.
- 🔒 = a fact that also lives in `CONTEXT.md`. Change it here and it changes there too.
- Lengths matter where noted — some lines can't wrap without breaking the layout.

---

## 0 · Global

| ▸ Field | Current text |
| --- | --- |
| Browser tab title | Ultra Endurant — Ultramarathon Coaching with Jonathan Fors |
| Meta description | UESCA-certified ultra-endurance running coach. Remote 1:1 and small-group coaching that builds training around your life — from a first ultra to a hundred-miler. Free 30-minute intro call. |
| Email | jonathan@ultraendurant.com |
| Instagram | @jonathans.pov |
| Booking link | meet.jonathanfors.com/discovery |

### Navigation bar

The same bar on every page now — homepage, /waitlist, /newsletter, the video
library, the intake form and 404. Links 1–3 are homepage sections and jump home
from anywhere; links 4–5 are the two standalone pages, and whichever one you're
on is shown in red.

| ▸ Field | Current text |
| --- | --- |
| Logo, line 1 | ULTRA ENDURANT |
| Logo, line 2 | COACHING BY JONATHAN FORS |
| Logo alt text | Ultra Endurant — ultramarathon coaching with Jonathan Fors |
| Link 1 | Approach |
| Link 2 | How it works |
| Link 3 | Coaching |
| Link 4 | Group waitlist |
| Link 5 | Newsletter |
| Button (red) | Book a call |

Every booking button on the page now says what it actually is — free, and a
conversation rather than a purchase. The nav one stays short because the bar is
tight at small widths; the fuller "Book a free intro call" is used wherever
there's room.

Link 4 is "Group waitlist" rather than "Group coaching" so it can't be misread
as a second coaching offer sitting next to link 3 — it names the action. The
footer has room for the full "Group coaching waitlist".

### Chat widget

A round launcher pinned to the bottom-right corner of every page. It opens the
Ultra Endurant App's chat panel in an iframe from `app.ultraendurant.com`.

**None of this copy lives in the repo.** The widget is loaded from the app
(`chat-widget.js`, keyed by a token in `app/layout.tsx`) and draws its own
button and panel; the launcher's only text is a 💬 glyph and the aria-labels
\"Open chat\" / \"Close chat\". Everything inside the panel — greeting, prompts,
replies — is configured in the app, so changing it means changing it there,
not here.

Replaced the sticky WhatsApp card on 9 September 2026. That card said "WhatsApp
me / I usually reply in a few minutes" and opened a `wa.me` thread to the same
number 1:1 athletes text; it is gone, along with the response-time promise that
ran ahead of §15 of the terms. WhatsApp is still a coaching channel everywhere
it is described as one — it is just no longer the front door on the site.

⚠️ On /waitlist the launcher overlaps that page's sticky bottom bar. The old
card listened for the bar's height and lifted clear; the widget positions
itself and doesn't.

---

## 1 · Hero

Centred now, and with no photo — the portrait that used to sit beside the headline
is gone. What replaced it is the three key blocks below, which answer "what is this
coaching like" instead of "what does he look like".

> ▸ **Eyebrow**
> Ultra-endurance running coach · UESCA-certified

> ▸ **Headline** — two lines at two sizes. Line 2 sits on the red tape and **cannot wrap**, so keep it under ~16 characters.
> Go the distance
> **1:1 & group coaching**

> ▸ **Body**
> While most coaches focus on the details and lose track of the bigger picture – we do the opposite. Your life, work, family, and other obligations come first as we create a long-lasting training philosophy together.

| ▸ Field | Current text |
| --- | --- |
| Button 1 (red) | Start 1:1 coaching → opens the booking popup |
| Button 2 (outline) | Join group coaching → goes to /waitlist |

### The three keys (at the foot of the hero)

These replaced the old stat rail (UESCA / 744 km / 1:1). The figures didn't
disappear — they're in the record band, section 5, where there's room to say what
they mean.

| ▸ Title | ▸ Body |
| --- | --- |
| Human-only coaching | Jonathan Fors is the man behind the brand and is the only one doing the work. Because real, sustainable coaching requires a human-first approach. |
| Holistic approach | You're a whole person with a life to live. Family, work, illness and time off are counted from day one, not treated as things that got in the way. |
| A dedicated app | All your workouts, calls and messaging with your coach, and smart workout analytics are found in one app.  |

### Red scrolling ticker

Six items, repeated. Keep them short — they scroll past.

1. 1:1 Ultra Coaching
2. UESCA Certified
3. Human-only coaching
4. Holistic Health First
5. 744 km Across Portugal 🔒
6. Remote — Worldwide

---

## 2 · Section 01 — your coach

The introduction, in Jonathan's own voice, once and at length. This replaced the
old two-panel "The approach" section: the holistic-health argument is now a hero
key and a paragraph here, and the "who this is for" list grew into its own section.
What's left is the part that only works as one person talking.

| ▸ Field | Current text |
| --- | --- |
| Section number | 01 |
| Section label | your coach |

> ▸ **Headline** — the tape sits on "plan." and cannot wrap.
> You're a person, not a **plan.**

> ▸ **Paragraph 1** (the opening clause is bold on the page)
> **Ultra Endurant is run by me, Jonathan Fors** — a UESCA-certified coach with years of lived experience behind the certificate. There are plenty of coaches out there. Few of them see a person as a whole person with a life to live.

> ▸ **Paragraph 2**
> Most plans start with the schedule and expect your life to bend around it. I start at the other end. Your work, your family, the worries you're already carrying — all of it changes how your body handles training, so all of it gets counted before a single session is written. Rest, and everything else off the road, is part of the work rather than a gap in it.

> ▸ **Paragraph 3** 🔒
> I know what the other way costs. I've run 744 km down the coast of Portugal, and I've stopped at 480 km on the same route two years earlier because my body had had enough of being overruled. The second one is the line on the page. The first one is the reason any of this is worth listening to.

> ▸ **Paragraph 4** (first sentence bold)
> **A week you can repeat is worth more than a perfect week you manage once.** That's the whole method. Everything else is detail.

### Byline

| ▸ Field | Current text |
| --- | --- |
| Portrait | Jonathan Fors on a road in a running vest, hills behind him. |
| Name | Jonathan Fors |
| Role | Coach · Ultra Endurant |

---

## 3 · Section 02 — The app

New section. Every athlete works through the Ultra Endurant App, 1:1 and group
alike, so it sits before the prices rather than inside one of them.

⚠️ There is deliberately **no screenshot and no launch date** here — nothing about
the app's build has been decided, so this describes only what it does for an
athlete.

| ▸ Field | Current text |
| --- | --- |
| Section number | 02 |
| Section label | The app |

> ▸ **Headline**
> Everything in **one place.**

> ▸ **Body**
> Being coached by me means having full access to the Ultra Endurant App. One place for your workout plans, messaging, calls, smart analytics, and even call transcripts.

### Feature cards

| ▸ Title | ▸ Body |
| --- | --- |
| Your schedule | Every session, in order, with the week laid out — so what's next is never a question. |
| Workout analysis | Finished sessions get read back to you: what the numbers did, and what changed since last time. |
| Calls & messaging | All calls, 1:1 and group messaging happens directly in the app. |
| Look up anything | Analyse workouts, search through call transcripts, or find that one message from weeks ago. The smart AI assistant got you covered. |
| No context-switching | Plans, races, forms, whatever the week needs in one place instead of five. |

### The AI callout (solid red block)

The one claim on the page that's an argument rather than a feature, which is why
it gets its own block instead of becoming a sixth card.

| ▸ Field | Current text |
| --- | --- |
| Label | why ultra endurant has its own app |

> ▸ **Heading**
> to provide the best possible coaching experience for you

> ▸ **Body**
> While we could split things into a WhatsApp chat, a Skool community, and a separate workout calendar the reality is that would be a pretty horrible experience. Keeping everything under one roof means you'll find what you're looking for quicker, and I can coach you much better.

---

## 4 · Section 03 — Who this is for

New section, grown out of the three-line list that used to sit under the approach.
Four boxes for who it's for (black, red marks) and three for who it isn't (muted,
outlined). The negative column is deliberately the quieter one — turning people
away only works if it doesn't read as a boast.

| ▸ Field | Current text |
| --- | --- |
| Section number | 03 |
| Section label | Who this is for |

> ▸ **Headline** — the tape sits on "early." and cannot wrap.
> I'd rather say no **early.**

> ▸ **Body**
> Coaching only works when the fit is right, and a bad fit wastes your money and my time. So here it is both ways round, before you book anything.

### This is for you if

| ▸ Title | ▸ Body |
| --- | --- |
| You want someone who sees the full picture | Metrics and numbers matter, but ultimately the big picture is what makes the difference. Consistency over one-off perfection. |
| You're in it for the long game | Anyone can push hard once or twice, but fewer can do it for a lifetime. You're training for a lifelong active, strong body. |
| You have a busy life outside of running | Running means a lot, but so does your family, work, friends, and other obligations.  |
| You want a coach who's proactive | Your coach should be someone who's in it with you, not someone you chase for days just to get a response. |

### This isn't for you if

| ▸ Title | ▸ Body |
| --- | --- |
| You want just a workout calendar | If what you want is a PDF and no conversation, I'm the wrong coach and an expensive way to get one. There are cheaper places. |
| You want the fastest route, whatever it costs | If the answer to every setback is push harder, we'll spend the whole time arguing. I'll ask you to back off, and I'll mean it. |
| All your focus on are the metrics | Someone once said numbers don't lie, well... in running sometimes they do and looking at the bigger picture is equally important. |

> ▸ **Closing line under the "isn't" column** ("book the call" is a link that opens the booking popup)
> If you read that list and recognised yourself, no hard feelings — genuinely. And if you're not sure which column you're in, **book the call** and I'll tell you straight.

---

## 5 · Section 04 — The program

Unchanged from the previous version of the page apart from its number (was 02).

| ▸ Field | Current text |
| --- | --- |
| Section number | 04 |
| Section label | The program |

> ▸ **Headline**
> The plan will change, because **in 4 steps**

### The four steps

| ▸ No. | ▸ Title | ▸ Body |
| --- | --- | --- |
| 01 | The intro call | 20 minutes, free. You tell me where you are and what you're aiming at; I tell you whether I think I can help. |
| 02 | Your full picture | A short intake about your running history, your work, your sleep and who depends on you — not just your splits. |
| 03 | A plan that fits | Training mapped onto the week you actually have, with the load and the rest balanced for you rather than for an average runner. |
| 04 | Every week after | We talk weekly. When work, travel or a bad run of sleep changes what's possible, the plan changes with it. That's normal, not failure. |

### Red callout at the foot of the section

> ▸ **Heading**
> Let's chat, I promise I won't pitch anything.

> ▸ **Body**
> 20 minutes, free, and you leave with my honest read on where you are and what your race actually needs. If I'm not the right coach for it, I'll tell you on the call.

| ▸ Field | Current text |
| --- | --- |
| Button | Book a free intro call |

---

## 6 · The record band (photo, full width)

Reframed from the old Portugal band. Portugal is still here and still ends on the
failed attempt — but it's now the last of three credentials rather than the whole
case, so the section answers "is he any good" before the prices arrive.

⚠️ **The ITRA and MDS claims have no source on file.** They're the strongest and
most checkable statements on the site, and neither links to a profile or a result
page. Worth fixing. The MDS line also uses your own phrasing, "placed among the
elites", which could mean *finished among them* or *raced alongside them* —
confirm the actual placing before making it more specific.

| ▸ Field | Current text |
| --- | --- |
| Eyebrow | The record |

> ▸ **Headline**
> I ask you to do it because **I've done it.**

### Record plates

| ▸ Figure | ▸ Label |
| --- | --- |
| Top 5% | Ranked worldwide on ITRA |
| MDS | Finished with the elite runners in MDS Legendary 2025 |
| 744 km 🔒 | Longest run — Portugal's coast |

### Project Portugal, underneath

| ▸ Field | Current text |
| --- | --- |
| Eyebrow 🔒 | I ran the length of Portugal (744 km) |

> ▸ **Paragraph 1** 🔒 (every number here is a real fact)
> The entire coastline of Portugal, in 10 days, with my partner Niki crewing support. 2025 was the second attempt after the first one got us only half way.

> ▸ **Paragraph 2**
> The second one is the line on the page. The first one is the reason it's worth anything: I know what it is to do the work, do it properly, and still have to stop — and then to decide whether you go back.

---

## 7 · Section 05 — Ways to work with me

**Redesigned, and the two offers have swapped places.** Group used to be the big
black block with 1:1 as a slim bar underneath. That showed a waitlist first to
someone ready to start today, so 1:1 now takes the black block and the size, and
group sits beside it as the smaller outlined card.

| ▸ Field | Current text |
| --- | --- |
| Section number | 05 |
| Section label | Ways to work with me |

> ▸ **Headline** — the tape sits on "together." and cannot wrap.
> Two ways to work **together.**

### 1:1 coaching — the primary block (black, red header bar)

| ▸ Field | Current text |
| --- | --- |
| Header label | 1:1 Coaching |
| Header badge | Open now |
| Price 🔒 | €200 /mo |
| Beside the price | No minimum period |

> ▸ **Body**
> We set the goals together — ones that fit your life and the direction you want it to go — then work at them week by week. A call every week, and direct access to message me any time you need it. First marathon, ultra, or pushing for elite placements.

| ▸ What's included 🔒 |
| --- |
| Call & message me anytime in the Ultra Endurant App |
| A weekly 1:1 call |
| Custom workout plans made only for you |
| Detailed video library showing every workout movement |
| No minimum period. Cancel anytime |

| ▸ Field | Current text |
| --- | --- |
| Button | Start 1:1 coaching |
| Under the button | Starts with a free 30-minute call |

### Group coaching — the secondary card (outlined)

| ▸ Field | Current text |
| --- | --- |
| Header label | Group coaching |
| Header badge 🔒 | end of September |
| Price 🔒 | €50 /mo |

> ▸ **Body** 🔒 (the bold part is the whole point — never write "free, then €50/mo", which reads as a trial)
> **Free forever for 5 athletes**, drawn at random from the waitlist when the group opens. Signing up early is no advantage — it just puts you in the draw.

| ▸ Points 🔒 |
| --- |
| Small groups of 5 people |
| Matched on goals and constraints |
| Mixed on level, on purpose |

| ▸ Field | Current text |
| --- | --- |
| Form heading | Join the waitlist |
| Form fields 🔒 | First name · Experience level · Email |
| Button | Notify me |

> ▸ **Note under the section** (small, grey)
> Worth saying plainly: I certified in 2026 and I'm building this practice now, so there are no testimonials on this page. I'd rather show you the running I've actually done and let you judge the coaching on a conversation.

---

## 8 · Section 06 — The free newsletter

**Redesigned to read as an email newsletter.** The old version opened on a 320px
Shuffle Club lockup and the line "Three editions a week", which reads as a
magazine or a club before it reads as email. The word *newsletter* is now in the
label, the logo is byline-sized, and the subscriber count is on the page.

| ▸ Field | Current text |
| --- | --- |
| Section number | 06 |
| Section label | The free newsletter |
| Beside the logo | An email newsletter |
| Subscriber count 🔒 | 250+ · Runners already reading |

> ▸ **Headline**
> Three emails a week. **Free forever.**

> ▸ **Body**
> One subject a week, from three sides: what the research actually says, what I think about it after running on it, and whatever you send back. It lands in your inbox — no fee, nothing to buy at the end of it, and one click to leave.

🔒 **The subscriber number is real and rounded down.** beehiiv reported 266 active
subscribers on 8 September 2026; the page says 250 so ordinary churn can't make it
false. Re-check beehiiv before raising it, and don't round up.

### The week

| ▸ Day | ▸ Title | ▸ Body |
| --- | --- | --- |
| Tuesday | The science | What the research actually says. |
| Friday | My take | The same subject from the road, in my own words. |
| Sunday | Your questions | Reader questions, answered. |

### Signup panel

| ▸ Field | Current text |
| --- | --- |
| Heading | Get it by email |
| Body | Tuesdays, Fridays and Sundays. Unsubscribe whenever you like. |
| Button | Subscribe |

---

## 9 · Closing call to action (red section)

| ▸ Field | Current text |
| --- | --- |
| Eyebrow | UESCA-certified |

> ▸ **Headline**
> Tell me about your goals.

> ▸ **Body**
> 20 minutes, free, and nothing to buy at the end. If we're a fit, we build from there. If we're not, you'll still leave knowing what your next step is.

| ▸ Field | Current text |
| --- | --- |
| Button | Book a free intro call |

---

## 10 · Footer

| ▸ Field | Current text |
| --- | --- |
| Blurb | Ultra-endurance running coach, UESCA-certified. Remote coaching built around your whole life, not just your training. |
| Column 1 heading | Page |
| Column 1 links | Approach · How it works · Coaching |
| Column 2 heading | Start |
| Column 2 links | Book a free call · Group coaching waitlist · Shuffle Club newsletter |
| Column 3 heading | Elsewhere |
| Column 3 links | Email · Instagram · LinkedIn |
| Copyright | © 2026 Ultra Endurant. All rights reserved. |
| Attribution | Ultra Endurant is one coach: Jonathan Fors. |
| Right-hand line 🔒 | I'll hold you accountable :) |

Split by what a link *is*, not where it goes: column 1 is the homepage's own
sections, column 2 is the three things you can actually do, column 3 is
everything that leaves the site. Email moved from Start to Elsewhere to make
room for the two signup pages.

---

## 11 · Booking popup

Opens full-screen when any "Book a call" or "Start 1:1 coaching" button is pressed.

| ▸ Field | Current text |
| --- | --- |
| Eyebrow | Free · 30 minutes |
| Heading | Book an intro call |
| Close button | Close |
| Loading text | Loading the calendar… |

The calendar itself is now the **Ultra Endurant App's own booking page**
(`app.ultraendurant.com`), replacing TidyCal on 8 September 2026 — so its wording,
durations and availability are set in the app, not here. It's dark rather than
light, which is why the popup's sheet is black now instead of cream.
---

## 12 · 404 page

Shown for any URL that doesn't exist — mistyped links, old addresses, anything
removed. Untouched by the 23 Aug rewrite apart from the button label, aligned
with the rest of the site.

| ▸ Field | Current text |
| --- | --- |
| Browser tab title | Page not found — Ultra Endurant |
| Eyebrow | Page not found |

> ▸ **Headline** — \"off the map.\" is in red.
> You've run **off the map.**

> ▸ **Body**
> This page isn't here — it may have moved, or the link that brought you may be wrong. Nothing's broken. Head back and start from the top.

| ▸ Field | Current text |
| --- | --- |
| Button 1 (red) | Back to the homepage |
| Button 2 (outline) | Book a free call |
| Footer copyright | © 2026 Ultra Endurant. All rights reserved. |
| Footer links | Email · Instagram |

The big outlined **404** is the section-index numeral treatment from the homepage,
scaled up — it's decorative and hidden from screen readers, so the \"Page not found\"
eyebrow is what actually gets read out.

The page now carries the site nav, which is what its own wordmark bar and
\"Error 404\" label used to stand in for — the nav's section links are absolute,
so they lead home rather than landing on nothing. Still no newsletter signup: a
dead end is the wrong place to ask for an email.

---

## 13 · Video library (`/videos`)

A separate page holding the training videos, plus one page per movement at
`/videos/<slug>` — that per-movement URL is what you send an athlete. Not linked
from the homepage or the nav; like the athlete intake form, you share the link
yourself.

**One clip per movement, not per session.** These are the individual exercises a
plan names, so an athlete can see one done properly before doing it.

**Nothing is filmed yet.** All 21 movements below are your real list, but every
card is empty and the whole page is hidden from search until they exist. That
lifts itself once each entry has a video — nothing to remember to switch off.

**The blurbs are my first draft, not your words.** Each one guesses at what the
clip will cover (setup, common errors, regressions). Reword freely — that's what
this file is for.

### The page itself

| ▸ Field | Current text |
| --- | --- |
| Browser tab title | Training videos — Ultra Endurant |
| Header label | Video library |
| Header button (red) | Book a call |
| Eyebrow | For my athletes |

> ▸ **Headline** — \"library.\" is in red.
> The video **library.**

> ▸ **Body**
> One movement per clip — strength work, core, mobility drills and stretches. Not whole sessions: these are the exercises your plan names, so you can see one done properly before you do it. Search it, or filter by what you're looking for.

| ▸ Field | Current text |
| --- | --- |
| Search placeholder | Search the library |
| First filter button | All |
| Result count | 21 videos · \"3 videos of 21\" when filtered |
| Clear button | Clear filters |
| Card badge (unfilmed) | Not filmed yet |
| Empty-state heading | Nothing matches that. |
| Empty-state body | Try a shorter phrase, or clear the filters and browse the whole library. |
| Empty-state button | Show all videos |

The warning shown while the library is unfilmed:

> ▸ **Notice** — disappears on its own once every entry has a video.
> **Not filmed yet.** The 21 movements below are the list — none of them are filmed yet, so every card is still empty. This page stays hidden from search until they are.

### A single movement's page

| ▸ Field | Current text |
| --- | --- |
| Back link | ← All *[category]* videos |
| Equipment heading | What you need |
| Related heading | Watch next |
| Related button | Back to the library |
| Stand-in player label | Video coming |
| Stand-in player body | This one hasn't been filmed yet. The player will appear here. |

### The four categories

Split by what a movement is *for*, not by body part — body parts are handled by
tags instead, so searching \"glutes\" or \"hips\" crosses all four.

Strength (11) · Core & trunk (3) · Mobility (3) · Stretches (4)

### The 21 movements

Titles use the most widely recognised name; where I changed what you wrote, the
reason is in the last column. Anything you'd search instead is kept as a tag, so
the old name still finds it.

| ▸ Category | Title | Blurb | Kit | ▸ Renamed from |
| --- | --- | --- | --- | --- |
| Strength | Squat | The pattern most of the rest is built on. Foot position, depth, and keeping the weight through the whole foot. | Dumbbell, kettlebell or band (optional) | — |
| Strength | Bulgarian split squat | Back foot raised, one leg doing the work. Setup, how far forward to stand, and the torso position that keeps it honest. | A bench, chair or step; dumbbells optional | — |
| Strength | ATG split squat | The long-stride, full-depth split squat. How far to reach the front foot, how low to go, and where to start if the range isn't there yet. | — | — |
| Strength | Forward walking lunge | Stepping through the lunge rather than returning to the start. Stride length, where the front knee tracks, and staying tall between steps. | Dumbbells (optional) | \"forward walking lounges\" — typo |
| Strength | Reverse walking lunge | The same walk, stepping backwards. Where the load shifts compared with the forward version, and why the step back takes more control. | Dumbbells (optional) | \"backward walking lounges\" — \"reverse lunge\" is the standard term |
| Strength | Glute bridge | Both feet down, hips to full extension. Foot placement, and what to change if you feel it in your hamstrings or your lower back instead. | Resistance band (optional, above the knees) | — |
| Strength | Single-leg glute bridge | The same movement on one leg. Keeping the hips level and the ribs down instead of arching to get higher. | Resistance band (optional) | — |
| Strength | Banded lateral walk | Sideways steps against a band. Where to put the band, how low to stay, and keeping the steps deliberate rather than bouncing along. | Resistance band | — |
| Strength | Single-leg Romanian deadlift | Hinging on one leg. Hips square, spine long, and how to stop it turning into a balance test instead of a hamstring exercise. | Dumbbell or kettlebell (optional) | capitalised \"Romanian\" |
| Strength | Single-leg calf raise | One leg, through the whole range at both ends. Where most people quietly cut it short, and how to load it once bodyweight is easy. | A step or kerb (optional) | hyphenated \"single-leg\" |
| Strength | Single-leg hip flexor hold | One leg held up under tension from the hip flexor. Position, height, and how long to hold it for. | Resistance band (optional) | ⚠️ kept your name — see below |
| Core & trunk | Side plank | Stacked, straight, and held. Elbow position, hip height, and what to drop back to when it starts to sag. | — | — |
| Core & trunk | Copenhagen plank raise | Side plank with the top leg supported and the bottom leg lifting to meet it. The easier versions to build from first. | A bench, chair or sofa | dropped \"side\" — \"Copenhagen plank\" is the common form |
| Core & trunk | Bird-dog | Opposite arm and leg from all fours, without the hips rolling. Slower and through less range than most people use. | — | — |
| Mobility | Leg swings | Front-to-back and side-to-side. What to hold on to, how far to swing, and how many before it stops doing anything. | Something to hold on to | — |
| Mobility | 90/90 hip switches | Seated, rotating between the two 90/90 positions. Internal and external rotation, and where to stop rather than force it. | — | — |
| Mobility | Rocking frog stretch | Knees wide, rocking back and forward instead of holding still. How wide to set up and where the limit is. | — | — |
| Stretches | Head-to-knee forward bend | Seated with one leg out, folding over it. Where the fold should come from, and what to do when the hamstring locks up early. | — | — |
| Stretches | Lizard stretch | Deep lunge with the hands inside the front foot, plus the shallower versions to work back from. | — | — |
| Stretches | Standing quad stretch | Heel towards the backside, standing. Keeping the hips square and the knee under you rather than drifting behind. | — | — |
| Stretches | Reclined figure-4 stretch | On your back, ankle across the opposite thigh. Where to pull from, and what to change if the hip pinches instead of stretching. | — | — |

### ⚠️ One to confirm

**Single-leg hip flexor hold** — there are a few different movements that go by
roughly this name (a supine knee-hold, a standing march hold, the ATG-style
banded raise). I've kept your wording and written a deliberately vague blurb
rather than guess at the wrong one. Tell me which you mean and I'll fix the title
and blurb.

### Resistance bands

Five movements can use one, and only **banded lateral walk** requires it. The
others — squat, glute bridge, single-leg glute bridge, single-leg hip flexor hold
— say \"(optional)\". Every one of them is tagged `band`, so searching \"band\" pulls
up the full set.

### How to fill it in

Everything above lives in one file, `lib/videos.ts`, with instructions at the
top. Per movement you need: a title, a blurb, a category, the YouTube or Vimeo
link, and a handful of **tags**. Tags never appear on the page but are searched —
so put the words an athlete would actually type in there, including ones you'd
never write in a title (\"rfess\", \"groin\", \"no gym\", \"fueling\" spelled the
American way). That's what makes the search feel like it reads your mind.

Two things worth knowing:

- **A movement's URL is permanent once you've sent it.** The slug in
  `/videos/<slug>` is what an athlete has in their messages; changing it breaks
  their link.
- **Runtimes are left blank on purpose.** They'll be filled in with the real
  ones — a card just doesn't show a duration until then.

---

## 14 · Group coaching waitlist page (`/waitlist`)

A standalone landing page whose only job is getting an email address onto the
waitlist — the link to put in your Instagram bio or a post.

It signs people up to **the same beehiiv list, with the same tag**
(`group-coaching-waitlist`) as the homepage form — so the draw is still one list,
not two. How many people arrive via this page is measured in Vercel Analytics
instead.

### Header

| ▸ Field | Current text |
| --- | --- |
| Left | The logo (links to the homepage) |
| Right | Group coaching |

### The offer

| ▸ Field | Current text |
| --- | --- |
| Eyebrow 🔒 | Waitlist · Opens end of September |

> ▸ **Headline** — three lines; the tape sits on \"coached free.\" and cannot wrap.
> 5 people get **coached free.** Forever.

> ▸ **Body** 🔒
> Group coaching opens at the end of September. Five places are free — drawn at random from this waitlist, and free for as long as those five athletes want them. Everyone else pays €50/mo.

**Signup box** (the first thing on the page you can interact with):

| ▸ Field | Current text |
| --- | --- |
| Heading | Join the waitlist |
| First name placeholder | First name |
| Experience level placeholder | Experience level |
| Experience level options | Beginner · Average · Experienced · Professional |
| Field placeholder | Enter your email |
| Button (red) | Join |
| Note under the field | Your name, roughly where you're at, and an email — that's the whole signup. No payment details, no commitment — unsubscribe whenever you like. |
| Success message | You're in — check your inbox |
| Success note 🔒 | You're on the list. The draw happens when the group opens at the end of September — I'll email you either way, and nothing before then. |

**The 05 panel** (right-hand side, big outlined numeral):

| ▸ Field | Current text |
| --- | --- |
| Figure 🔒 | 05 |
| Label 🔒 | Free places, drawn at random |
| Line under it 🔒 | Free means free. Those five never pay for group coaching, for as long as they stay. |

### What you're joining — three columns

| ▸ Figure | ▸ Title | ▸ Detail |
| --- | --- | --- |
| Free | Free forever 🔒 | The five drawn places never pay. Not a free trial, not a discounted first month — free for as long as you stay in the group. |
| 05 | Drawn at random 🔒 | Not the first five to sign up. Everyone on the waitlist when the group opens has the same chance, so joining now and joining tonight are worth exactly the same. |
| Sept | Opens end of September 🔒 | That's when the group starts and the draw happens. If you're not one of the five, it's €50/mo and you can walk away — nothing is owed for being on a list. |

### Who you'd work with (Alternate split layout)

| ▸ Field | Current text |
| --- | --- |
| Section label | Who you'd work with |
| Image | `coach-trail` — Jonathan Fors standing on a coastal path above the Atlantic |
| Image badge name | Jonathan Fors |
| Image badge credential 🔒 | UESCA-certified · Ultra Coach |
| Image card text | Ultra Endurant is one coach doing the work. Real, sustainable training built around a whole human life. |

> ▸ **Headline** — the tape sits on \"plan.\" and cannot wrap.
> You're a person, not a **plan.**

> ▸ **Paragraph 1** (opening bold)
> **Most coaching plans start with the schedule and expect your life to bend around it.** I start at the other end. Your work, your family, your sleep, and the stress you're already carrying — all of it dictates how your body actually adapts to training.

> ▸ **Paragraph 2**
> Rest, recovery, and life outside running aren't interruptions to the training; they are the foundation of it. A week you can repeat week after week is worth infinitely more than a textbook week you survive once before burning out or breaking down.

> ▸ **Paragraph 3** 🔒
> I know what the rigid way costs. I ran 744 km down the coastline of Portugal, and I was stopped at 480 km two years earlier because my body gave out from being overruled. The finish is on the website; the failure is why my coaching method works.

> ▸ **Pull quote**
> “A week you can repeat is worth more than a perfect week you manage once.”
> — Jonathan Fors, Ultra Endurant

### The record band (reused from homepage)

- ITRA Top 5% worldwide
- MDS finished with elite runners
- 744 km coastline of Portugal

### What is included (4 interactive cards)

| ▸ No. | ▸ Tag | ▸ Title | ▸ Body | ▸ Extra |
| --- | --- | --- | --- | --- |
| 01 | Individual programming | A bespoke training plan, written for you | Every single session is written by me specifically for your life, schedule, and race target. No generic AI templates, no recycled spreadsheets. When work, travel, or fatigue alters your week, your plan adjusts to fit reality. | Includes full access to the training movement video library — so you can see every exercise performed with proper form. |
| 02 | Weekly review | Weekly live group coaching call | We meet as a group on a live call every single week. We review the week behind you, break down training hurdles, and preview what's ahead. You get your questions answered, and learn just as much from the answers given to your peers. | All calls are kept interactive and concise — real discussion, no drawn-out lectures. |
| 03 | Continuous support | Direct WhatsApp access with Jonathan | You get direct messaging access to the same WhatsApp number my 1:1 athletes text. If a question comes up on a Tuesday night or your legs feel shredded before a key session, you don't wait days for an answer. | Direct communication with your actual coach whenever you need a fast adjustment. |
| 04 | The squad | A private group channel | A dedicated community channel strictly for your group. A private space to log workouts, share trail conditions, celebrate wins, and stay accountable between our weekly calls. A huge part of the endurance journey happens right here. | Built to keep you connected and motivated with runners pursuing the same milestones. |

### How group coaching works (Group dynamics)

| ▸ Numeral | ▸ Title | ▸ Body |
| --- | --- | --- |
| ~5 | Around five runners per group | Deliberately kept small so nobody gets lost in the crowd. I know what your personal week looks like, your specific training volume, and everyone in the circle knows your name. |
| Fit | Matched by goals & constraints | You aren't dropped into a random chat. Groups are formed around similar race distances, timelines, and life pressures — so the conversation is genuinely relevant to your reality. |
| Push | Mixed on level, on purpose | Close enough in pace to relate to, but far enough apart to challenge each other. Some weeks you're being pulled along; other weeks you're the one setting the standard. |

### Who this is for (reused ClubFit)

- This is for you if...
- This isn't for you if...

### The field again, at the bottom

| ▸ Field | Current text |
| --- | --- |
| Headline | Get in the **draw.** |
| Body 🔒 | Five free places, drawn when the group opens at the end of September. Signing up early is no advantage — it just puts you in the draw. |
| First name placeholder | First name |
| Experience level placeholder | Experience level |
| Experience level options | Beginner · Average · Experienced · Professional |
| Field placeholder | Enter your email |
| Button (red) | Join the waitlist |
| Success note 🔒 | You're on the list — I'll email you when the group opens at the end of September. |

### The sticky bar

| ▸ Field | Current text |
| --- | --- |
| Label (phone) | 5 free places, drawn at random |
| Label (wider screens) 🔒 | 5 places free forever, drawn at random when the group opens at the end of September. |
| Button (red) | Join the waitlist |

### Footer

| ▸ Field | Current text |
| --- | --- |
| Left | Don't want to wait? **1:1 coaching is open now.** (links to the homepage) |
| Right | Email · Instagram |

### Search / share

| ▸ Field | Current text |
| --- | --- |
| Browser tab title | Group coaching waitlist — Ultra Endurant |
| Meta + share description 🔒 | Five athletes get my group coaching free, forever — drawn at random from the waitlist when the group opens at the end of September. Everyone else pays €50/mo. Three questions to join. |

---

## 15 · Shuffle Club newsletter page (`/newsletter`)

A standalone landing page with **one action on it: subscribe.** Same job as
`/waitlist` — the link to put in a bio, an Instagram post, or the foot of an
edition, where the homepage anchor buries the signup under three other sections.

Deliberately **no nav and no second offer.** Coaching isn't sold here at all:
every other link is a way to leave without subscribing, so the only ones on the
page are the wordmark (back to the homepage) and the footer's email/Instagram.
The email field is the first interactive thing on the page, and appears twice —
once in the hero, once at the bottom.
