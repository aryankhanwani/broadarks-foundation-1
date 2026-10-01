# Broadarks Foundation

Scroll-driven marketing site for a (fictional) Indian non-profit, built with
Next.js 16 (App Router), Tailwind v4, Motion and Lenis.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm run start
```

## Pages

| Route            | What's on it                                                        |
| ---------------- | ------------------------------------------------------------------- |
| `/`              | Hero, ticker, mission, stats, pinned horizontal programmes, sticky story stack, parallax gallery, partners, journal preview, CTA |
| `/about`         | Founder letter, values, timeline, team                              |
| `/work`          | The five programme pillars in detail + method + numbers             |
| `/impact`        | Five long-form impact stories                                       |
| `/blog`          | Journal index                                                       |
| `/blog/[slug]`   | Three hardcoded posts with a reading-progress bar                   |
| `/contact`       | Animated form (client-side only), offices, FAQ                      |
| `/donate`        | Interactive amount picker with live giving summary, fund split, FAQ |

## Where to change things

- **All copy and data** — `lib/content.ts` (programmes, stories, posts, team, FAQs, giving tiers, nav, org details).
- **All photography** — `lib/images.ts`. Every image is one Unsplash photo id in
  the `IMG` map; swap an id for your own CDN path (or a local `/public` file) and
  it updates everywhere it's used. `img(id, width)` builds the URL.
  These are placeholders — replace with real field photography before launch.
- **Colours** — `app/globals.css` (`@theme` block). Brand is `#27aae1`
  (`brand`), text is `#062a3c` (`ink`), plus `sand`, `sky-*` tints.
- **Type** — three classes in `globals.css`, applied deliberately:
  - `.display` — Instrument Sans. Every heading and all UI. This carries the reading.
  - `.serif` — Instrument Serif. Accent only: the lifted phrase in a headline,
    pull quotes, the wordmark, the marquees. Never a whole paragraph.
  - `.numeral` — Instrument Serif figures, so statistics and rupee amounts read
    as a highlight rather than as UI.

  Body copy is Geist Sans; eyebrow labels are Geist Mono (`.eyebrow`).
- **Motion primitives** — `components/motion/`: `Reveal`, `SplitWords`,
  `RevealImage`, `Parallax`, `Counter`, `Marquee`, `Magnetic`, `ScrollProgress`.

## Not wired up yet

- The contact form doesn't post anywhere — it fakes a success state.
- The donate button doesn't take payments — connect Razorpay or Stripe.
- Social links point at bare domains.
