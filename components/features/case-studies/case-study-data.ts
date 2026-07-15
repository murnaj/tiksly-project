export type Client = {
  slug: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
};

export type CaseStudySection = {
  id: string;
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  tag: string;
  image: string;
  clientSlug: string;
  updatedAt: string;
  shares: number;
  excerpt: string;
  sections: CaseStudySection[];
};

export const clients: Client[] = [
  {
    slug: "priya-shah",
    name: "Priya Shah",
    role: "Marketing Lead",
    company: "Pink-Jobs",
    avatar: "/Alexis_California.webp",
    bio: "Priya leads marketing at Pink-Jobs, a 14-year-old job board for the LGBTQ+ community. She partnered with tiksly to rebuild organic visibility that had plateaued for years.",
    linkedin: "#",
    twitter: "#",
  },
  {
    slug: "marcus-webb",
    name: "Marcus Webb",
    role: "Growth Marketer",
    company: "Nova Fitness Gear",
    avatar: "/Brie_Tennessee.webp",
    bio: "Marcus runs growth for Nova Fitness Gear and uses tiksly as his team's ongoing link-building and outreach partner for competitive fitness keywords.",
    linkedin: "#",
    twitter: "#",
  },
  {
    slug: "elena-cruz",
    name: "Elena Cruz",
    role: "Founder",
    company: "The Gift Studio",
    avatar: "/Chelsea.webp",
    bio: "Elena founded The Gift Studio, a personalised-gifts ecommerce brand, and worked with tiksly to turn organic traffic growth into a fivefold revenue increase.",
    linkedin: "#",
    twitter: "#",
  },
  {
    slug: "ravi-patel",
    name: "Ravi Patel",
    role: "Head of Content",
    company: "KitchenCraft",
    avatar: "/Jonah_Nebraska.webp",
    bio: "Ravi owns content and demand generation at KitchenCraft, a cooking products brand that doubled its lead volume in three months with a consistent guest posting program.",
    linkedin: "#",
    twitter: "#",
  },
  {
    slug: "sophie-lindqvist",
    name: "Sophie Lindqvist",
    role: "Creative Director",
    company: "PitchDeck Studio",
    avatar: "/josh.webp",
    bio: "Sophie built PitchDeck Studio's presentation design practice from scratch and used tiksly to take the site from zero organic leads to a steady monthly pipeline.",
    linkedin: "#",
    twitter: "#",
  },
  {
    slug: "jordan-blake",
    name: "Jordan Blake",
    role: "Site Owner",
    company: "SaveWise",
    avatar: "/tom-avatar.png",
    bio: "Jordan runs SaveWise, a consumer money-saving website, and worked with tiksly on a backlink-only strategy that grew organic traffic from zero to consistent daily visits.",
    linkedin: "#",
    twitter: "#",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "tiksly-got-us-to-page-1",
    title: "tiksly Got Us To Page 1",
    tag: "Blogger Outreach",
    image: "/case-study/3.webp",
    clientSlug: "priya-shah",
    updatedAt: "Jul 2, 2026",
    shares: 412,
    excerpt:
      "Pink-jobs.com is 14 years old, but it wasn't until we used tiksly's blogger outreach to improve our rankings and get onto page 1 for our most competitive terms.",
    sections: [
      {
        id: "the-challenge",
        heading: "The Challenge",
        body: [
          "Pink-Jobs had a strong domain history but a rankings profile that had stalled for years. Competitive job-board keywords stayed stuck on page two no matter how much on-site work the team did.",
        ],
      },
      {
        id: "the-approach",
        heading: "The Approach",
        body: [
          "tiksly ran a targeted blogger outreach campaign, matching Pink-Jobs with relevant LGBTQ+ and career-focused publishers rather than chasing volume across unrelated sites.",
        ],
      },
      {
        id: "the-execution",
        heading: "The Execution",
        body: [
          "Placements were staged over eight weeks, with anchor text and linking pages varied deliberately to keep the profile looking organic and durable.",
        ],
      },
      {
        id: "the-results",
        heading: "The Results",
        body: [
          "Priya's core keyword set moved onto page one within the campaign window, and the gains have held steady in the months since launch.",
        ],
      },
    ],
  },
  {
    slug: "quality-links-and-easy-to-use",
    title: "Quality Links And Easy To Use",
    tag: "Blogger Outreach",
    image: "/case-study/2.webp",
    clientSlug: "marcus-webb",
    updatedAt: "Jun 24, 2026",
    shares: 298,
    excerpt:
      "We've been using tiksly as our link-building partner to help improve and maintain our rankings for highly competitive keywords in fitness.",
    sections: [
      {
        id: "the-challenge",
        heading: "The Challenge",
        body: [
          "Nova Fitness Gear competes in one of the most contested keyword categories online, where rankings can slip within weeks without consistent link acquisition.",
        ],
      },
      {
        id: "the-approach",
        heading: "The Approach",
        body: [
          "Rather than a one-off campaign, Marcus's team set up an ongoing monthly outreach cadence through tiksly to keep pace with competitors' own link velocity.",
        ],
      },
      {
        id: "the-execution",
        heading: "The Execution",
        body: [
          "Each month's placements were reviewed against a shared quality bar before going live, keeping approval friction low for the in-house team.",
        ],
      },
      {
        id: "the-results",
        heading: "The Results",
        body: [
          "Rankings for Nova's priority terms have stayed stable through two major algorithm updates, which the team credits to the steady drip of quality links.",
        ],
      },
    ],
  },
  {
    slug: "revenue-quintupled",
    title: "Revenue Quintupled",
    tag: "Blogger Outreach and Niche Edits",
    image: "/case-study/1.webp",
    clientSlug: "elena-cruz",
    updatedAt: "Jun 18, 2026",
    shares: 587,
    excerpt:
      "For our ecommerce site specialising in personalised gifts, we experienced a significant increase in organic traffic and revenue — both quintupled.",
    sections: [
      {
        id: "the-challenge",
        heading: "The Challenge",
        body: [
          "The Gift Studio had a healthy product catalog but almost no organic discovery outside branded search, capping growth to paid channels alone.",
        ],
      },
      {
        id: "the-approach",
        heading: "The Approach",
        body: [
          "tiksly combined fresh blogger outreach placements with niche edits on existing gift-guide content already ranking for high-intent seasonal terms.",
        ],
      },
      {
        id: "the-execution",
        heading: "The Execution",
        body: [
          "Niche edits were prioritized on pages with existing traffic, giving Elena's team faster signal on what was working before scaling the outreach side.",
        ],
      },
      {
        id: "the-results",
        heading: "The Results",
        body: [
          "Organic traffic and revenue both grew roughly fivefold over the engagement, with gift-guide season now the brand's strongest quarter.",
        ],
      },
    ],
  },
  {
    slug: "lead-generation-doubled-in-3-months",
    title: "Lead Generation More Than Doubled In 3 Months",
    tag: "Blogger Outreach",
    image: "/case-study/4.webp",
    clientSlug: "ravi-patel",
    updatedAt: "Jun 10, 2026",
    shares: 344,
    excerpt:
      "In the cooking products industry, regular guest blog posting has increased our site's exposure on Google dramatically.",
    sections: [
      {
        id: "the-challenge",
        heading: "The Challenge",
        body: [
          "KitchenCraft's content team could produce guest posts but lacked the outreach relationships to place them on sites that actually moved rankings.",
        ],
      },
      {
        id: "the-approach",
        heading: "The Approach",
        body: [
          "tiksly handled placement and relationship management while Ravi's team kept ownership of the writing, keeping the brand voice consistent across every post.",
        ],
      },
      {
        id: "the-execution",
        heading: "The Execution",
        body: [
          "A steady cadence of two to three placements per week built momentum without triggering the spikes that often draw scrutiny.",
        ],
      },
      {
        id: "the-results",
        heading: "The Results",
        body: [
          "Lead generation more than doubled within three months, with the compounding effect continuing well past the initial campaign period.",
        ],
      },
    ],
  },
  {
    slug: "zero-to-12-leads-per-month",
    title: "0 Leads To 12 Leads Per Month",
    tag: "Blogger Outreach and Niche Edits",
    image: "/case-study/5.webp",
    clientSlug: "sophie-lindqvist",
    updatedAt: "Jun 3, 2026",
    shares: 219,
    excerpt:
      "PitchDeck Studio went from a website generating zero monthly leads a year ago to a steady, predictable pipeline today.",
    sections: [
      {
        id: "the-challenge",
        heading: "The Challenge",
        body: [
          "As a newer presentation design agency, PitchDeck Studio had no organic footprint and relied entirely on referrals for new business.",
        ],
      },
      {
        id: "the-approach",
        heading: "The Approach",
        body: [
          "tiksly built the site's authority from scratch, blending outreach placements with niche edits on established design and business blogs.",
        ],
      },
      {
        id: "the-execution",
        heading: "The Execution",
        body: [
          "Early months focused entirely on foundational authority before shifting weight toward pages tied directly to booking a consultation.",
        ],
      },
      {
        id: "the-results",
        heading: "The Results",
        body: [
          "The site now converts roughly a dozen qualified leads a month from organic search alone, up from zero a year prior.",
        ],
      },
    ],
  },
  {
    slug: "zero-to-50-visits-per-day",
    title: "0 To 50 Visits Per Day",
    tag: "Blogger Outreach and Niche Edits",
    image: "/case-study/6.webp",
    clientSlug: "jordan-blake",
    updatedAt: "May 27, 2026",
    shares: 176,
    excerpt:
      "SaveWise has gone from zero to around 50 organic visitors a day, using tiksly for backlinks alone.",
    sections: [
      {
        id: "the-challenge",
        heading: "The Challenge",
        body: [
          "SaveWise launched with strong content but no backlink profile, leaving it invisible against established money-saving publishers.",
        ],
      },
      {
        id: "the-approach",
        heading: "The Approach",
        body: [
          "tiksly ran outreach and niche edits exclusively, with no other SEO work involved, to isolate exactly how much lift link building alone could deliver.",
        ],
      },
      {
        id: "the-execution",
        heading: "The Execution",
        body: [
          "Placements targeted personal finance and consumer advice sites with real editorial standards rather than low-quality bulk directories.",
        ],
      },
      {
        id: "the-results",
        heading: "The Results",
        body: [
          "Daily organic visits climbed from zero to roughly fifty within the campaign window, validating link building as Jordan's next investment area.",
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getClientBySlug(slug: string): Client | undefined {
  return clients.find((client) => client.slug === slug);
}

export function getClientForCaseStudy(study: CaseStudy): Client {
  const client = getClientBySlug(study.clientSlug);
  if (!client) {
    throw new Error(`No client found for slug "${study.clientSlug}"`);
  }
  return client;
}

export function getCaseStudiesByClient(clientSlug: string): CaseStudy[] {
  return caseStudies.filter((study) => study.clientSlug === clientSlug);
}
