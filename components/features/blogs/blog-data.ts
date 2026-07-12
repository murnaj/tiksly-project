import { Sparkles, Share2, Megaphone, type LucideIcon } from "lucide-react";

export type Theme = "dark" | "blue" | "lime";

export const themeStyles: Record<
  Theme,
  { bg: string; icon: string; badge: string }
> = {
  dark: {
    bg: "bg-[#0D0D0D]",
    icon: "text-[#BCF96A]",
    badge: "bg-white/10 text-[#BCF96A]",
  },
  blue: {
    bg: "bg-linear-to-br from-[#DCEEFF] to-[#EAF3FF]",
    icon: "text-[#0081FB]",
    badge: "bg-[#0081FB]/10 text-[#0081FB]",
  },
  lime: {
    bg: "bg-[#BCF96A]",
    icon: "text-black",
    badge: "bg-black/10 text-black",
  },
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
};

export type PostSection = {
  id: string;
  heading: string;
  body: string[];
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  authorSlug: string;
  theme: Theme;
  icon: LucideIcon;
  updatedAt: string;
  shares: number;
  excerpt: string;
  sections: PostSection[];
};

export const authors: Author[] = [
  {
    slug: "alexis",
    name: "Alexis Rivera",
    role: "Head of Creator Partnerships, tiksly",
    avatar: "/Alexis_California.webp",
    bio: "Alexis leads creator partnerships at tiksly, working with hundreds of brands to turn UGC briefs into ads that actually convert. She has spent the last six years scaling influencer programs for DTC brands.",
    linkedin: "#",
    twitter: "#",
  },
  {
    slug: "jonah",
    name: "Jonah Whitfield",
    role: "Content Strategist, tiksly",
    avatar: "/Jonah_Nebraska.webp",
    bio: "Jonah writes about content strategy and discovery at tiksly. He researches how brands earn visibility across search, social, and AI answer engines.",
    linkedin: "#",
    twitter: "#",
  },
  {
    slug: "chelsea",
    name: "Chelsea Moore",
    role: "Growth & Attribution Lead, tiksly",
    avatar: "/Chelsea.webp",
    bio: "Chelsea owns growth and measurement at tiksly, helping performance teams connect creator spend to real revenue with clean, defensible attribution.",
    linkedin: "#",
    twitter: "#",
  },
];

export const posts: Post[] = [
  {
    slug: "creator-brief-fan-out",
    title: "Creator Brief Fan-Out: How One Hook Becomes 20 Winning Ad Variants",
    category: "Playbooks",
    authorSlug: "alexis",
    theme: "dark",
    icon: Sparkles,
    updatedAt: "Jul 8, 2026",
    shares: 1284,
    excerpt:
      "A single creator hook rarely stays a single ad for long. The brands winning on paid social today are the ones that turn one strong brief into a whole tree of variants, then let the data pick the winners.",
    sections: [
      {
        id: "why-one-hook-isnt-enough",
        heading: "Why One Hook Isn't Enough",
        body: [
          "Fatigue sets in fast on paid social. A hook that performs for a week can flatline by the next, and creators who lean on a single angle burn through their most engaged audience quickly.",
          "Treating a brief as the start of a tree, not a finished ad, is what separates teams that keep a steady stream of winners from teams re-briefing from scratch every sprint.",
        ],
      },
      {
        id: "mapping-the-fan-out-tree",
        heading: "Mapping the Fan-Out Tree",
        body: [
          "Start from the core hook and branch it three ways: a different opening line, a different pacing, and a different proof point. Each branch should still feel native to the creator, not templated.",
          "Keep the product claim constant across branches so you can isolate what actually moved performance — the delivery, not the offer.",
        ],
      },
      {
        id: "briefing-for-variation",
        heading: "Briefing Creators for Variation, Not Repetition",
        body: [
          "Give creators a menu of angles instead of a script. tiksly briefs typically include the core message, three optional openers, and a tone reference, leaving delivery to the creator.",
          "This keeps every variant authentic while still giving your team a controlled set of comparable ads to test.",
        ],
      },
      {
        id: "testing-without-burning-budget",
        heading: "Testing Variants Without Burning Budget",
        body: [
          "Launch fan-out variants into a shared testing campaign with equal spend caps, and let the algorithm allocate budget once early signal appears rather than picking winners manually on day one.",
        ],
      },
      {
        id: "reading-winners-back",
        heading: "Reading the Winners Back Into Your Playbook",
        body: [
          "Every winning variant should update your next brief. Log which opener, pacing, and proof point combinations outperform, and retire the angles that consistently underperform across creators.",
        ],
      },
      {
        id: "where-to-go-from-here",
        heading: "Where to Go From Here",
        body: [
          "Fan-out only compounds if it's systematic. Build a lightweight scorecard for every campaign so the next brief starts from evidence, not guesswork.",
        ],
      },
    ],
  },
  {
    slug: "topical-authority-ai-search",
    title:
      "How to Build Topical Authority for Your Brand in the AI Search Era (7 Steps)",
    category: "Content Strategy",
    authorSlug: "jonah",
    theme: "blue",
    icon: Share2,
    updatedAt: "Jul 3, 2026",
    shares: 942,
    excerpt:
      "Search isn't just a list of links anymore. It's answers, summaries, and recommendations pulled from wherever a brand shows up most consistently. Here's how to earn that consistency on purpose.",
    sections: [
      {
        id: "map-your-core-topic-cluster",
        heading: "Map Your Core Topic Cluster",
        body: [
          "List every question your audience asks around your category, then group them into three or four pillar themes. Everything you publish should trace back to one of those pillars.",
        ],
      },
      {
        id: "audit-what-ai-engines-say",
        heading: "Audit What AI Engines Already Say About You",
        body: [
          "Run your brand and category terms through the major AI answer engines and note what gets cited. Gaps and outdated mentions tell you exactly where to focus next.",
        ],
      },
      {
        id: "fill-the-coverage-gaps",
        heading: "Fill the Coverage Gaps With Original Research",
        body: [
          "Generic explainer content rarely earns a citation anymore. Original benchmarks, surveys, and case studies do — they give answer engines something specific to quote.",
        ],
      },
      {
        id: "interlink-around-pillar-pages",
        heading: "Interlink Content Around Pillar Pages",
        body: [
          "Every supporting article should link back to its pillar page, and pillar pages should link out to the strongest supporting pieces. This structure signals topical depth, not just volume.",
        ],
      },
      {
        id: "earn-citations-not-just-backlinks",
        heading: "Earn Citations, Not Just Backlinks",
        body: [
          "Pitch data and quotes to journalists and creators directly, in a format they can paste straight into their own work. Citations in AI-era search behave more like PR than classic link building.",
        ],
      },
      {
        id: "track-visibility-across-answers",
        heading: "Track Visibility Across Search and AI Answers",
        body: [
          "Rank tracking alone misses half the picture now. Pair it with regular spot-checks of AI answer summaries so you catch visibility shifts before they show up in traffic.",
        ],
      },
      {
        id: "where-to-go-from-here",
        heading: "Where to Go From Here",
        body: [
          "Topical authority compounds slowly, then all at once. Pick one pillar, go deep for a quarter, and expand from there rather than spreading thin across every theme at once.",
        ],
      },
    ],
  },
  {
    slug: "paid-social-creator-attribution",
    title:
      "Paid Social and Creator ROI: How to Build Attribution That Actually Holds Up",
    category: "Attribution & ROI",
    authorSlug: "chelsea",
    theme: "lime",
    icon: Megaphone,
    updatedAt: "Jun 27, 2026",
    shares: 761,
    excerpt:
      "Creator spend is easy to justify when a campaign goes viral and impossible to defend when it doesn't. Building attribution that holds up under scrutiny means going beyond last-click.",
    sections: [
      {
        id: "why-last-click-breaks",
        heading: "Why Last-Click Attribution Breaks for Creator Ads",
        body: [
          "Creator content influences buyers well before the final click — often across platforms you can't track with a single pixel. Last-click systematically undercounts that influence.",
        ],
      },
      {
        id: "creator-level-utms",
        heading: "Setting Up Creator-Level UTMs That Survive Handoffs",
        body: [
          "Standardize UTM parameters per creator and per variant before content goes live, not after. Retrofitting tracking onto a live campaign is where most attribution data quietly breaks.",
        ],
      },
      {
        id: "blending-mmm-with-platform-data",
        heading: "Blending MMM With Platform Data",
        body: [
          "Platform-reported conversions and marketing mix modeling tend to disagree. Treat platform data as a directional signal and let MMM correct for the overlap between channels.",
        ],
      },
      {
        id: "isolating-lift-with-holdouts",
        heading: "Isolating Creator Lift With Holdout Tests",
        body: [
          "Geo or audience holdouts remain the cleanest way to prove incremental lift from creator spend, independent of whatever the ad platform's own dashboard reports.",
        ],
      },
      {
        id: "reporting-roi-your-cfo-trusts",
        heading: "Reporting ROI Your CFO Will Actually Trust",
        body: [
          "Report a range, not a single number, and show your methodology alongside the result. A defensible estimate earns more budget than an inflated one that doesn't survive questioning.",
        ],
      },
      {
        id: "where-to-go-from-here",
        heading: "Where to Go From Here",
        body: [
          "Start with one holdout test this quarter. A single clean read on incrementality is worth more than a dashboard full of unreliable last-click numbers.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

export function getAuthorForPost(post: Post): Author {
  const author = getAuthorBySlug(post.authorSlug);
  if (!author) {
    throw new Error(`No author found for slug "${post.authorSlug}"`);
  }
  return author;
}

export function getPostsByAuthor(authorSlug: string): Post[] {
  return posts.filter((post) => post.authorSlug === authorSlug);
}
