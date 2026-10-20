import { IMG } from "./images";

export const SITE = {
  name: "Broadarks Foundation",
  short: "Broadarks",
  tagline: "A wider arc of opportunity.",
  description:
    "Broadarks Foundation works alongside under-served communities across India — building learning, health, livelihood and food systems that outlast us.",
  email: "info@broadarks.com",
  careersEmail: "Careers@broadarks.com",
  phones: ["0755 3553372", "0755 4566266"],
  address: [
    "CP-02, 7th Floor, Block C1",
    "Sagar Premium Tower Phase-1",
    "JK Hospital Road, Kolar",
    "Bhopal 462042, Madhya Pradesh",
  ],
  regd: "Registered under Section 8 · CSR-1 · 80G · FCRA",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/broadarksfoundation/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/broadarks-foundation/posts/" },
    { label: "Facebook", href: "https://www.facebook.com/broadarksfoundation" },
    { label: "X", href: "https://x.com/BroadArks_org" },
  ],
};

/** Landline as a dialable tel: href, e.g. "0755 3553372" → "tel:+917553553372". */
export const tel = (n: string) => `tel:+91${n.replace(/\s/g, "").replace(/^0/, "")}`;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "The Work", href: "/work" },
  { label: "Impact Stories", href: "/impact" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 128, suffix: "K+", label: "Lives touched", note: "since 2014" },
  { value: 412, suffix: "", label: "Villages & wards", note: "across 9 states" },
  { value: 63, suffix: "", label: "Learning centres", note: "running daily" },
  { value: 91, suffix: "%", label: "Of every rupee", note: "reaches the field" },
];

export type Program = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  blurb: string;
  /** The Work page: headline, sub-headline and body. */
  headline: string;
  sub: string;
  detail: string;
  image: string;
  secondary: string;
  metrics: { k: string; v: string }[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "learning",
    index: "01",
    title: "Learning that travels",
    kicker: "Education",
    blurb:
      "Neighbourhood learning centres, bridge classes and libraries that meet a child where they already are.",
    headline: "Accessible learning infrastructure and bridge education",
    sub: "Settlement-based learning centres enabling school re-entry and continuous growth.",
    detail:
      "Children previously out of school for two to three years complete specialized bridge classes to re-enter government schools at their age-appropriate grade. Each centre integrates a community lending library and is staffed by local educators residing within walking distance.",
    image: IMG.classroomFloor,
    secondary: IMG.library,
    metrics: [
      { k: "Centres", v: "63" },
      { k: "Children enrolled", v: "9,400" },
      { k: "Re-entry to school", v: "87%" },
    ],
  },
  {
    slug: "health",
    index: "02",
    title: "Care within a kilometre",
    kicker: "Health",
    blurb:
      "Mobile clinics, community health workers and maternal care that arrives before the emergency does.",
    headline: "Preventive healthcare infrastructure and primary medical access",
    sub: "Mobile medical units and community health networks delivering last-mile care.",
    detail:
      "Four mobile units serve wards located over an hour from the nearest medical facility. The operations focus on structured preventive care: antenatal consultations, anaemia screenings, vaccination tracking, and a reliable secondary referral pipeline.",
    image: IMG.clinicianPhone,
    secondary: IMG.careHands,
    metrics: [
      { k: "Health workers", v: "180" },
      { k: "Consults / year", v: "54,000" },
      { k: "Antenatal coverage", v: "94%" },
    ],
  },
  {
    slug: "livelihood",
    index: "03",
    title: "Work with dignity attached",
    kicker: "Livelihood",
    blurb:
      "Skilling, self-help collectives and market linkage — so income outlives the training certificate.",
    headline: "Market-linked vocational training and independent enterprise aggregation",
    sub: "Sustainable income frameworks building self-reliant community cooperatives.",
    detail:
      "Cohorts complete specialized training before transitioning directly into formal employment or registered producer collectives equipped with banking access and established market linkages. Women's producer groups across Jharkhand and Bihar now independently manage commercial negotiations and trade pricing.",
    image: IMG.workshop,
    secondary: IMG.collaborate,
    metrics: [
      { k: "Trained", v: "6,200" },
      { k: "Placed or self-employed", v: "71%" },
      { k: "Collectives registered", v: "48" },
    ],
  },
  {
    slug: "nutrition",
    index: "04",
    title: "The meal before the lesson",
    kicker: "Nutrition",
    blurb:
      "Community kitchens, ration support and growth monitoring for the first thousand days.",
    headline: "Upstream nutritional security and early childhood growth support",
    sub: "Community-run kitchens and vital nutritional interventions for foundational development.",
    detail:
      "Nutrition sits upstream of every intervention we deploy. Community kitchens managed by local women provide hot meals directly at our learning centres, while active growth monitoring identifies and reverses nutritional wasting in its earliest stages.",
    image: IMG.foodRelief,
    secondary: IMG.reliefTruck,
    metrics: [
      { k: "Meals served", v: "2.1M" },
      { k: "Kitchens", v: "27" },
      { k: "Wasting reversed", v: "1,900 kids" },
    ],
  },
  {
    slug: "climate",
    index: "05",
    title: "Villages that keep their light on",
    kicker: "Climate & Energy",
    blurb:
      "Solar micro-grids, water stewardship and green livelihoods built and maintained by the village itself.",
    headline: "Decentralized energy infrastructure and rural water stewardship",
    sub: "Community-managed clean energy and water systems engineered for long-term autonomy.",
    detail:
      "We deploy solar micro-grids, rooftop installations for schools and clinics, and rainwater harvesting structures, each fully transferred to trained village committees responsible for ongoing maintenance.",
    image: IMG.solar,
    secondary: IMG.sunsetFriends,
    metrics: [
      { k: "Micro-grids", v: "34" },
      { k: "Households lit", v: "11,700" },
      { k: "Water structures", v: "212" },
    ],
  },
];

export type Story = {
  slug: string;
  name: string;
  age: string;
  place: string;
  program: string;
  headline: string;
  pull: string;
  body: string[];
  portrait: string;
  scene: string;
};

export const STORIES: Story[] = [
  {
    slug: "razia",
    name: "Razia",
    age: "16",
    place: "Seelampur, Delhi",
    program: "Education",
    headline: "Three years out of school. One year to catch up.",
    pull: "“Nobody asked me what I wanted to do until the centre did.”",
    body: [
      "Razia stopped going to school in class six, when her mother fell ill and the household needed a second pair of hands. For three years her day was water, cooking, younger siblings — and a growing conviction that the classroom had moved on without her.",
      "The bridge class at our Seelampur centre starts where the learner is, not where the syllabus says she should be. Razia joined a group of eleven girls, all of them re-learning fractions in the evenings after their work at home was done.",
      "She re-entered a government school in class nine — the correct grade for her age — and now tutors the younger bridge cohort twice a week. She wants to sit for the nursing entrance in two years.",
    ],
    portrait: IMG.p6,
    scene: IMG.library,
  },
  {
    slug: "sunita",
    name: "Sunita Devi",
    age: "34",
    place: "Gumla, Jharkhand",
    program: "Livelihood",
    headline: "The collective that set its own price.",
    pull: "“We used to take whatever the trader offered. Now he waits for our number.”",
    body: [
      "Sunita's self-help group started with eleven women and a shared ledger. They were already making lac bangles; what they didn't have was a bank account, a registration, or any idea what their work fetched two districts away.",
      "Over eighteen months the group registered as a producer collective, opened a current account, and learned to cost their own product. The first order they quoted for themselves was for 400 pieces.",
      "Forty-eight collectives now operate on the same model across Jharkhand and Bihar. Sunita trains the new ones.",
    ],
    portrait: IMG.p7,
    scene: IMG.workshop,
  },
  {
    slug: "imran",
    name: "Imran",
    age: "27",
    place: "Malegaon, Maharashtra",
    program: "Health",
    headline: "The health worker who knows every door.",
    pull: "“A stranger in a white coat gets one visit. I get a hundred.”",
    body: [
      "Imran was a loom worker before he trained as a community health worker. He covers 340 households in a ward where the nearest primary health centre is a forty-minute walk and a half-day of lost wages.",
      "Most of his work is follow-through: making sure a pregnant woman completes four antenatal visits, that an anaemia course is finished, that an immunisation date doesn't quietly pass.",
      "Antenatal coverage in his ward went from 51% to 94% in three years. He is careful to point out that this is not one person's doing.",
    ],
    portrait: IMG.p1,
    scene: IMG.volunteerBack,
  },
  {
    slug: "meera",
    name: "Meera",
    age: "11",
    place: "Barmer, Rajasthan",
    program: "Nutrition",
    headline: "A hot meal at noon changed the attendance sheet.",
    pull: "“She used to sleep through the afternoon class. Now she asks questions.”",
    body: [
      "Meera's village kitchen opened in 2022, run by six women from the same settlement. It serves 140 children a hot meal at the learning centre every weekday.",
      "The change teachers noticed first wasn't nutritional — it was attention. Afternoon attendance rose 38% in the first term, and stayed there.",
      "Meera's growth chart crossed back over the median line last spring. Her mother now cooks at the kitchen two days a week.",
    ],
    portrait: IMG.p8,
    scene: IMG.kidsBackpacks,
  },
  {
    slug: "arun",
    name: "Arun",
    age: "41",
    place: "Koraput, Odisha",
    program: "Climate & Energy",
    headline: "The village that fixes its own grid.",
    pull: "“The panel is ours. So the spanner has to be ours too.”",
    body: [
      "When the micro-grid went up in Arun's village, the handover plan mattered more than the hardware. Six residents were trained to clean, test and repair the array; the village committee set a monthly tariff of forty rupees a household.",
      "That fund has paid for two inverter replacements without a single call to us.",
      "Eleven thousand seven hundred households are now lit by grids on this model. The five-year test is one we are still running — and so far, passing.",
    ],
    portrait: IMG.p5,
    scene: IMG.solar,
  },
];

export type Post = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readTime: string;
  category: string;
  author: { name: string; role: string; avatar: string };
  cover: string;
  inline: string;
  body: { type: "p" | "h2" | "quote" | "list"; text?: string; items?: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "what-we-learned-from-63-learning-centres",
    title: "What 63 learning centres taught us about dropping out",
    dek: "Children rarely leave school in one decision. They leave in small increments — and that is exactly where an intervention can work.",
    date: "2026-08-14",
    readTime: "7 min read",
    category: "Field notes",
    author: { name: "Nandini Roy", role: "Head of Programmes", avatar: IMG.p9 },
    cover: IMG.classroomTeacher,
    inline: IMG.kidsBoots,
    body: [
      {
        type: "p",
        text: "Ask an education dataset why a child dropped out and you will get a clean category: economic, migration, marriage, illness. Ask the child and you will get a sequence — a bad term, a missed exam, a teacher who stopped calling the name, a morning where staying home was simply easier than walking back in.",
      },
      {
        type: "p",
        text: "Across our 63 centres, we started recording that sequence instead of the category. Four patterns came up often enough to design around.",
      },
      { type: "h2", text: "1. The gap is academic before it is economic" },
      {
        type: "p",
        text: "By the time a family cites money, the child has usually already fallen two grade levels behind. The financial reason is real, but it is the last domino, not the first. Bridge classes that close the academic gap make the economic argument for staying much easier to win.",
      },
      { type: "h2", text: "2. Distance is measured in confidence, not kilometres" },
      {
        type: "p",
        text: "A centre 400 metres away inside the settlement gets attendance that a better-resourced school two kilometres away does not. Familiar streets, familiar faces, a teacher who is somebody's neighbour — these are not soft factors. They are the whole margin.",
      },
      {
        type: "quote",
        text: "The most effective thing we do is also the least fundable: we keep showing up in the same place, at the same time, for years.",
      },
      { type: "h2", text: "3. Re-entry needs a grade, not a gesture" },
      {
        type: "p",
        text: "Putting a fourteen-year-old back into class six because that is where she left is a slow second dropout. Age-appropriate re-entry — with the catch-up work done first — is the difference between a photograph and an outcome.",
      },
      { type: "h2", text: "4. The first month decides the year" },
      {
        type: "p",
        text: "Eighty-one percent of the children who complete their first thirty days with us are still enrolled twelve months later. So we spend a disproportionate share of our attention on those thirty days: daily contact, a meal, one adult who knows the child's name and uses it.",
      },
      {
        type: "list",
        items: [
          "Track the sequence, not the category.",
          "Put the centre inside the settlement, not near it.",
          "Close the academic gap before the re-entry, never after.",
          "Over-invest in the first thirty days.",
        ],
      },
      {
        type: "p",
        text: "None of this is novel. It is simply what the sequence tells you to do, once you start writing it down.",
      },
    ],
  },
  {
    slug: "the-five-year-test",
    title: "The five-year test: what happens after we leave",
    dek: "We stopped measuring our programmes at handover and started measuring them sixty months later. The results reordered our priorities.",
    date: "2026-06-02",
    readTime: "6 min read",
    category: "How we work",
    author: { name: "Kabir Menon", role: "Director, Strategy", avatar: IMG.p3 },
    cover: IMG.solar,
    inline: IMG.townhall,
    body: [
      {
        type: "p",
        text: "Most development reporting ends at the ribbon-cutting. A structure is built, a cohort graduates, a photograph is taken, and the metric is filed. We did this too, for years, and it flattered us.",
      },
      {
        type: "p",
        text: "In 2021 we introduced a single internal rule: no intervention counts as successful until it has been audited five years after our exit. It is an uncomfortable standard. It has also been the most useful thing we have ever done.",
      },
      { type: "h2", text: "What failed the test" },
      {
        type: "p",
        text: "Hardware handed to an institution rather than a committee. Training delivered without a maintenance fund. Anything that depended on a single motivated individual — a headmaster, a sarpanch, one of our own field staff — rather than on a structure that survives a transfer.",
      },
      {
        type: "quote",
        text: "If it needs us in year six, we built it wrong in year one.",
      },
      { type: "h2", text: "What passed" },
      {
        type: "p",
        text: "The common thread in what survived was local ownership of money. Not consultation, not participation — a tariff, a ledger, a bank account, a spanner kept in somebody's house. Micro-grids with a forty-rupee monthly contribution are still running. Identical grids gifted for free are not.",
      },
      { type: "h2", text: "How it changed our budget" },
      {
        type: "p",
        text: "We now spend roughly 14% of each programme budget on the handover itself: training the committee, seeding the maintenance fund, writing the operating manual in the local language. That line used to be under 2%. It is the least photogenic money we spend and the highest-returning.",
      },
      {
        type: "p",
        text: "Our next honest step is publishing the failures at the same volume as the successes. The 2026 impact report will carry both.",
      },
    ],
  },
  {
    slug: "where-your-rupee-actually-goes",
    title: "Where your rupee actually goes",
    dek: "A line-by-line account of how a single ₹1,000 donation moves through the organisation — including the parts nobody puts on a poster.",
    date: "2026-04-21",
    readTime: "5 min read",
    category: "Transparency",
    author: { name: "Aisha Qureshi", role: "Head of Finance", avatar: IMG.p2 },
    cover: IMG.coinsChange,
    inline: IMG.handsReaching,
    body: [
      {
        type: "p",
        text: "Every organisation in this sector quotes an overhead figure, and almost none of them explain it. Here is ours, with the arithmetic shown.",
      },
      { type: "h2", text: "₹910 to the field" },
      {
        type: "p",
        text: "Teacher and health-worker salaries, meals, materials, transport, clinic supplies, hardware. This is the number most donors mean when they ask what proportion reaches the ground.",
      },
      { type: "h2", text: "₹54 to the people who make the field work possible" },
      {
        type: "p",
        text: "Monitoring staff, data systems, the audit, the finance team. We are sceptical of any organisation claiming this number is near zero — it usually means the measurement isn't happening, or somebody else is quietly subsidising it.",
      },
      {
        type: "quote",
        text: "An overhead of zero is not efficiency. It is an accounting choice, and usually a fragile one.",
      },
      { type: "h2", text: "₹36 to raising the next ₹1,000" },
      {
        type: "p",
        text: "Fundraising costs, donor communication, the report you are reading. On our current ratio, that ₹36 brings in approximately ₹1,340 over the following year.",
      },
      { type: "h2", text: "What a rupee buys" },
      {
        type: "list",
        items: [
          "₹1,000 — a month of learning-centre place for one child, meal included.",
          "₹2,500 — a full antenatal cycle: four visits, supplements, delivery support.",
          "₹6,000 — a skilling cohort seat, through to placement.",
          "₹18,000 — a solar home system, installed, with committee training.",
        ],
      },
      {
        type: "p",
        text: "Our audited statements and FCRA returns are published in full each October. If a number here does not reconcile with a number there, we would genuinely like to hear from you.",
      },
    ],
  },
];

export const TIMELINE = [
  { year: "2014", title: "Initial community intervention", text: "BroadArks Foundation originated in Seelampur, East Delhi, serving forty children through a three-volunteer team in a single rented facility." },
  { year: "2017", title: "Mobile health infrastructure launch", text: "Deployment of our initial mobile healthcare unit, deploying a nursing professional across an eleven-ward bi-weekly service route." },
  { year: "2019", title: "Multi-state operational expansion", text: "Geographic reach expanded into Jharkhand and Rajasthan, scaling permanent operational staff past fifty team members." },
  { year: "2021", title: "Institutionalization of post-exit auditing", text: "Implementation of mandatory five-year post-exit evaluations, establishing public disclosures for non-performing outcomes alongside successful metrics." },
  { year: "2023", title: "Transition to independent community governance", text: "Successful handover and formal registration of forty-eight women-led producer collectives operating with full financial and administrative independence." },
  { year: "2026", title: "Current scale and handover pipeline", text: "Operations active across 412 communities in nine states, encompassing 63 learning centres structured for complete local ownership transfer." },
];

export const VALUES = [
  {
    n: "01",
    title: "Proximity over scale",
    text: "We prioritize deep, localized implementation over superficial geographic reach, focusing resources directly within targeted settlements rather than establishing nominal coverage across multiple areas.",
  },
  {
    n: "02",
    title: "Hand it over",
    text: "Every programme is engineered with an exit-driven design from inception. If an initiative requires our ongoing management after five years, the framework failed to build adequate local autonomy.",
  },
  {
    n: "03",
    title: "Publish the failures",
    text: "Our annual disclosures detail operational challenges and non-performing outcomes at the same volume as our successes, ensuring data integrity, compliance, and actionable governance metrics for institutional partners.",
  },
  {
    n: "04",
    title: "Local first, always",
    text: "Teachers, healthcare professionals, and field staff are recruited directly from the communities they serve. Nine out of ten field team members live within walking distance of their primary work location.",
  },
];

export const TEAM = [
  { name: "Nandini Roy", role: "Head of Programmes", img: IMG.p9, place: "Delhi" },
  { name: "Kabir Menon", role: "Director, Strategy", img: IMG.p3, place: "Bengaluru" },
  { name: "Aisha Qureshi", role: "Head of Finance", img: IMG.p2, place: "Delhi" },
  { name: "Thomas Iyer", role: "Field Director, East", img: IMG.p10, place: "Ranchi" },
  { name: "Leela Nair", role: "Health Lead", img: IMG.p7, place: "Malegaon" },
  { name: "Daniel Fernandes", role: "Partnerships", img: IMG.p1, place: "Mumbai" },
];

export const PARTNERS = [
  "Ashoka Trust",
  "Tata Capital CSR",
  "Aditi Foundation",
  "Nordic Aid",
  "Sattva Impact",
  "UNICEF India",
  "Godrej Give",
  "Azim Premji Fdn.",
];

export const FAQS = [
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. BroadArks Foundation holds registration under Section 80G of the Income Tax Act. Official tax receipts and 80G certificates are dispatched to your registered email within 48 hours of donation receipt.",
  },
  {
    q: "Can I fund a specific programme?",
    a: "Yes. You may select a designated focus area during transaction processing. For institutional allocations exceeding ₹2,00,000, we prepare and issue a detailed utilization framework prior to financial commitment.",
  },
  {
    q: "Do you accept foreign contributions?",
    a: "Yes. We maintain active registration under the Foreign Contribution (Regulation) Act (FCRA) and process all international transfers through our dedicated account at the State Bank of India, Main Branch, New Delhi.",
  },
  {
    q: "How do I know the money was used well?",
    a: "Audited financial statements, statutory FCRA filings, and our annual impact reports are published every October. Furthermore, every project undergoes an independent post-exit evaluation at five years, fully disclosing both operational achievements and limitations.",
  },
  {
    q: "Can I volunteer or intern?",
    a: "We onboard a select group of specialized contributors quarterly, primarily focusing on core technical domain gaps, including data analytics, legal review, graphic design, and translation. Applicants are invited to submit specific operational capabilities rather than observational interests.",
  },
];

export const GIVING_TIERS = [
  { amount: 1000, label: "A month of school", text: "One child's place at a learning centre for a month, hot meal included." },
  { amount: 2500, label: "A safe delivery", text: "A complete antenatal cycle — four visits, supplements and delivery support." },
  { amount: 6000, label: "A skilling seat", text: "One seat in a livelihood cohort, carried through to placement." },
  { amount: 18000, label: "Light for a home", text: "A solar home system installed, with village committee training included." },
];
