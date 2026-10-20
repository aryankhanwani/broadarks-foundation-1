/**
 * Homepage copy, kept out of the components so the two approved copy
 * directions can be swapped without touching layout or motion.
 *
 * Direction 1 — "Compliance & Impact-First" (corporate, results-driven)
 * Direction 2 — "Human-Centric & Community-Led"
 *
 * Switch with NEXT_PUBLIC_COPY_DIRECTION=1 | 2 (defaults to 1).
 */

type Link = { href: string; label: string };
type Metric = { value: number; suffix: string; label: string };

export type HomeCopy = {
  hero: {
    eyebrow: string;
    /** Plain lines, then the italic serif accent line. */
    lines: string[];
    accent: string;
    lead: string;
    primary: Link;
    secondary: Link;
    badge: { value: string; label: string };
  };
  /** Key highlights bar, run through the ticker under the hero. */
  ticker: string[];
  grassroots: { eyebrow: string; title: string; sub: string; body: string; link: Link };
  principles: { title: string; items: { n: string; title: string; text: string }[] };
  stats: {
    eyebrow: string;
    title: string;
    sub: string;
    items: (Metric & { note: string })[];
    note: string;
  };
  programs: {
    eyebrow: string;
    title: string;
    accent: string;
    sub: string;
    body: string;
    /** Pillar card copy, in PROGRAMS order. Falls back to PROGRAMS when absent. */
    cards?: { kicker: string; title: string; blurb: string; metrics: { k: string; v: string }[] }[];
    /** Closing link at the end of the run. Falls back to "All five, in detail". */
    link?: string;
  };
  stories: { eyebrow: string; title: string; sub: string; body: string; tag: string; link: string };
  gallery: { eyebrow: string; title: string; sub: string; body: string; caption: { k: string; v: string } };
  partners: { eyebrow: string; title: string; sub: string; body: string; metrics: Metric[] };
  cta: { eyebrow: string; title: string; sub: string; lead: string; primary: Link; secondary: Link };
};

const DIRECTION_1: HomeCopy = {
  hero: {
    eyebrow: "Since 2014 · 9 states · 412 communities",
    lines: ["Building sustainable systems", "in education, healthcare,"],
    accent: "and livelihoods across India.",
    lead:
      "Since 2014, BroadArks Foundation has partnered with communities and corporate leaders to deliver ground-level CSR programmes. We design, implement, and transition self-sustaining projects across underserved regions ensuring full compliance, complete transparency, and measurable social impact.",
    primary: { href: "/contact", label: "Partner with us" },
    secondary: { href: "/impact", label: "Explore our impact" },
    badge: { value: "128,000+", label: "Lives impacted" },
  },

  ticker: [
    "Active reach: 9 states · 412 communities",
    "Certifications: 12A certified · 80G certified · CSR-1 registered NGO",
    "Alignment: Schedule VII Companies Act India compliant",
  ],

  grassroots: {
    eyebrow: "Who we are",
    title: "Local ownership, ground-level execution.",
    sub: "Sustainable impact begins with community-embedded teams.",
    body:
      "BroadArks Foundation builds capacity directly inside the communities we serve. Nine out of ten of our teachers, healthcare professionals, and support staff are hired locally and live within walking distance of their work. This local-first approach ensures deep trust, operational efficiency, and sustainable project handovers that align with Schedule VII CSR goals.",
    link: { href: "/about", label: "Discover our model" },
  },

  principles: {
    title: "Our operational principles",
    items: [
      {
        n: "01",
        title: "Depth over distance",
        text: "Rather than maintaining a nominal presence across widespread locations, we deploy focused resources directly on the ground to deliver measurable social outcomes.",
      },
      {
        n: "02",
        title: "Exit-driven program design",
        text: "Every CSR programme is designed backwards from day one with a clear transition roadmap. Every initiative becomes fully self-sustaining over time.",
      },
      {
        n: "03",
        title: "Complete transparency & accountability",
        text: "Our annual impact disclosures highlight operational challenges and key learnings alongside our successes ensuring total transparency for our partners and funders.",
      },
      {
        n: "04",
        title: "Grassroots execution",
        text: "We hire local talent to drive our ground operations. Nine out of ten of our educators, healthcare workers, and project team members live within walking distance of their workplace.",
      },
    ],
  },

  stats: {
    eyebrow: "The arithmetic",
    title: "Verified impact & financial transparency.",
    sub:
      "Accountability in numbers. Every CSR rupee invested with BroadArks Foundation is tracked for maximum ground impact and long-term sustainability.",
    items: [
      { value: 128000, suffix: "+", label: "Lives impacted", note: "Sustainable change across education, healthcare, and livelihoods since 2014." },
      { value: 412, suffix: "", label: "Villages & wards", note: "Active CSR delivery across 9 states with strong local footprints in regions like Madhya Pradesh." },
      { value: 63, suffix: "", label: "Daily learning centres", note: "Operational hubs driving primary education and youth skill creation every day." },
      { value: 91, suffix: "%", label: "Direct field allocation", note: "91 paise of every rupee goes straight into ground-level execution and community projects." },
    ],
    note:
      "Every project is re-audited 5 years after we hand it over to the local community. We publish non-performing outcomes at the same level as our successes ensuring compliance, transparency, and data you can trust.",
  },

  programs: {
    eyebrow: "The work",
    title: "Five pillars,",
    accent: "one interconnected arc.",
    sub: "Comprehensive solutions for long-term community empowerment.",
    body:
      "Our core interventions are not isolated projects running in parallel. They are part of a fully integrated delivery model where each component reinforces the next: a nutritious meal sustains a focused child in class, and quality education builds the foundation for long-term employability.",
  },

  stories: {
    eyebrow: "Impact stories",
    title: "Measuring progress through real lives.",
    sub: "Real-world case studies from our ground-level interventions.",
    body:
      "Explore how our integrated CSR interventions create long-term social value and self-sufficiency across Education, Healthcare, and Employability.",
    tag: "Education & Child Development",
    link: "View all case studies →",
  },

  gallery: {
    eyebrow: "From the field",
    title: "Authentic field execution: a day across our centres.",
    sub: "Transparent, day-to-day project operations in action.",
    body:
      "Take an unfiltered look into everyday operations across our learning and healthcare centres where local teams deliver structured, measurable outcomes on the ground every single day.",
    caption: {
      k: "Operational reality",
      v: "Unscripted, everyday implementation across our 412 communities.",
    },
  },

  partners: {
    eyebrow: "Who funds this",
    title: "Supported by corporate leaders and individual visionaries.",
    sub: "A diversified funding structure for long-term independence and stability.",
    body:
      "Our operations are sustained through a balanced funding ecosystem. We are trusted by 28 institutional and corporate CSR partners, alongside a growing network of over 11,000 individual monthly contributors giving under ₹1,000.",
    metrics: [
      { value: 28, suffix: "", label: "Institutional & CSR partners" },
      { value: 11000, suffix: "+", label: "Individual monthly donors" },
    ],
  },

  cta: {
    eyebrow: "Take part",
    title: "Maximizing the impact of every contribution.",
    sub: "Clear returns on social investment for individuals and corporate partners.",
    lead:
      "A contribution of ₹1,000 provides a child with a full month of quality education, daily nutritious weekday meals, learning resources, and dedicated support from certified local educators. Your investment drives sustainable growth across underserved communities.",
    primary: { href: "/donate", label: "Donate now (Tax exempt under 80G)" },
    secondary: { href: "/contact", label: "Connect with our CSR team" },
  },
};

const DIRECTION_2: HomeCopy = {
  hero: {
    eyebrow: "Since 2014 · 9 states · 412 communities",
    lines: ["Creating lasting", "opportunities,"],
    accent: "together.",
    lead:
      "Real change happens when communities lead their own growth. BroadArks Foundation works alongside families in underserved regions across India to strengthen learning, healthcare, and employment opportunities. We build the tools, nurture local leadership, and hand over sustainable systems that thrive for generations.",
    primary: { href: "/donate", label: "Support our work" },
    secondary: { href: "/work", label: "See how we work" },
    badge: { value: "128,000+", label: "Lives touched" },
  },

  ticker: [
    "10+ years of growth: transforming lives across 9 states and 412 communities since 2014",
    "Trusted NGO partner: certified under 12A, 80G, and CSR-1 for seamless national partnerships",
    "Core focus areas: Quality education · Accessible healthcare · Youth employability",
  ],

  grassroots: {
    eyebrow: "Who we are",
    title: "Rooted in the heart of every community.",
    sub: "Real transformation starts from within.",
    body:
      "We focus our effort where support is needed most, working alongside families in remote and underserved areas across India. Rather than relying on outside visits, our strength comes from the people who live there. Nine out of ten teachers, health workers, and team members are hired directly from their own neighborhoods. By living and working in the same community, our teams build lasting trust and create solutions that belong to the people.",
    link: { href: "/about", label: "Read our story" },
  },

  principles: {
    title: "How we work",
    items: [
      {
        n: "01",
        title: "Proximity over scale",
        text: "We believe in showing up where it matters most. We would rather build a deep, meaningful presence right inside one community than simply be a name on a map across forty.",
      },
      {
        n: "02",
        title: "Built to be handed over",
        text: "Our ultimate goal is independence. From day one, every project is built so the community can run it on their own. If a programme still relies on us after five years, we know we haven't done our job right.",
      },
      {
        n: "03",
        title: "Honest & open reporting",
        text: "Trust is built on truth. In our annual reports, we share what didn't work just as openly as what did. Being honest about our challenges is the only way we can grow, improve, and stay accountable.",
      },
      {
        n: "04",
        title: "Local first, always",
        text: "The real experts are the people who live there. Our teachers, healthcare workers, and staff are hired directly from the neighborhoods they serve, with 90% of our field team living within walking distance of their daily work.",
      },
    ],
  },

  stats: {
    eyebrow: "The arithmetic",
    title: "Our impact in numbers.",
    sub: "Behind every statistic is a real story, a community transformed, and a promise kept.",
    items: [
      { value: 128000, suffix: "+", label: "Lives touched", note: "Creating real opportunities for families and youth across India since 2014." },
      { value: 412, suffix: "", label: "Villages & wards", note: "Deep grassroots connections across 9 states, starting right from our roots in Madhya Pradesh." },
      { value: 63, suffix: "", label: "Learning & skill hubs", note: "Daily spaces where children study, youth learn job skills, and families gather." },
      { value: 91, suffix: "%", label: "Straight to the field", note: "91% of every donation goes directly into hands-on community work." },
    ],
    note:
      "True progress requires complete honesty. Every project is re-checked five years after we exit. We share what didn't work just as openly as what did because maintaining your trust is the only way these numbers stay meaningful.",
  },

  programs: {
    eyebrow: "The what",
    title: "Five pillars,",
    accent: "one connected journey.",
    sub: "Supporting every step from daily meals to lifelong independence.",
    cards: [
      {
        kicker: "Education",
        title: "Learning that travels",
        blurb:
          "Bringing engaging, child-centered learning into spaces where children already gather, making education accessible to all.",
        metrics: [
          { k: "Centres", v: "53" },
          { k: "Children enrolled", v: "9,400" },
        ],
      },
      {
        kicker: "Health",
        title: "Care within a kilometre",
        blurb:
          "Bringing essential healthcare, preventative screenings, and local health workers right to the doorstep of every family.",
        metrics: [
          { k: "Health workers", v: "180" },
          { k: "Consults / year", v: "54,000" },
        ],
      },
      {
        kicker: "Livelihood",
        title: "Work with dignity attached",
        blurb:
          "Equipping local youth and adults with practical, market-ready skills that lead to steady jobs and economic freedom.",
        metrics: [
          { k: "Trained", v: "6,200" },
          { k: "Placed in jobs or self-employed", v: "71%" },
        ],
      },
      {
        kicker: "Nutrition",
        title: "The meal before the lesson",
        blurb:
          "Serving hot, freshly cooked, nutritious meals every weekday so no child has to study on an empty stomach.",
        metrics: [
          { k: "Meals served", v: "2.1M" },
          { k: "Kitchens", v: "27" },
        ],
      },
      {
        kicker: "Climate & Energy",
        title: "Villages that keep their light on",
        blurb:
          "Powering community spaces, health clinics, and schools with clean solar energy that stays reliable day and night.",
        metrics: [
          { k: "Micro-grids", v: "34" },
          { k: "Households powered", v: "11,700" },
        ],
      },
    ],
    link: "Explore all five pillars in detail",
    body:
      "Real life doesn't work in separate compartments, and neither do our programmes. A daily meal gives a child the energy to learn a lesson, and that lesson opens the door to a sustainable livelihood. Every part of a community's growth depends on the others. That is why we commit to supporting the entire chain from start to finish, because partial solutions rarely create lasting change.",
  },

  stories: {
    eyebrow: "Impact stories",
    title: "Every number has a name, face, and story.",
    sub: "Stories of hope, growth, and community resilience.",
    body:
      "Statistics help us measure our reach, but human lives give our work its true purpose. Every project begins and ends with a person, a student in a classroom, a patient receiving care, or a young adult learning a trade for life.",
    tag: "Learning & Early Education",
    link: "Read all impact stories →",
  },

  gallery: {
    eyebrow: "From the field",
    title: "Ordinary days, extraordinary dedication.",
    sub: "A glimpse into everyday life across our local centres.",
    body:
      "No staged photo-ops, no dramatic before-and-afters. Real community work happens in quiet, consistent steps. Here is what an ordinary Tuesday looks like across our centers, children learning, meals being served, and neighbors coming together to build a better future.",
    caption: {
      k: "Behind the scenes",
      v: "Everyday moments from the heart of our field operations.",
    },
  },

  partners: {
    eyebrow: "Who funds this",
    title: "Powered by partners and people who care.",
    sub: "Standing together with institutions and everyday citizens.",
    body:
      "Our work is made possible by a wide community of believers. From 28 institutional partners who sponsor large-scale projects, to 11,000 ordinary citizens who contribute small monthly amounts under ₹1,000, every contribution fuels real change on the ground. It takes a collective effort to build lasting systems, and we are proud to stand alongside every partner and donor who makes this journey possible.",
    metrics: [
      { value: 28, suffix: "", label: "Corporate & grant partners" },
      { value: 11000, suffix: "+", label: "Everyday monthly donors" },
    ],
  },

  cta: {
    eyebrow: "Take part",
    title: "What ₹1,000 can build.",
    sub: "Small monthly steps that create lifelong opportunities.",
    lead:
      "₹1,000 is more than just a donation. It is a full month of school for a child. It means a warm, healthy meal every weekday, a library card to explore new worlds, and a caring teacher who knows their name and encourages them every single day. Every child deserves a chance to learn and thrive. Join us in making that a reality.",
    primary: { href: "/donate", label: "Donate ₹1,000 today" },
    secondary: { href: "/contact", label: "Talk to us instead" },
  },
};

export const COPY_DIRECTIONS = { 1: DIRECTION_1, 2: DIRECTION_2 };

export const HOME_COPY: HomeCopy =
  process.env.NEXT_PUBLIC_COPY_DIRECTION === "2" ? DIRECTION_2 : DIRECTION_1;
