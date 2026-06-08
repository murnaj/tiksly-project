@AGENTS.md

# Tiksly — Project Context & Architecture

> **Persistent memory for AI sessions.** Every implementation decision, new component, or architectural change MUST be appended here so context is never lost across conversations.

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| Runtime | Bun | latest |
| Language | TypeScript | ^5 |
| React | React + React DOM | 19.2.4 |
| Styling | Tailwind CSS v4 | ^4 |
| Animation | Framer Motion | ^12.40.0 |
| Icons | Lucide React | ^1.16.0 |
| UI Primitives | shadcn + radix-ui | ^4.7.0 / ^1.4.3 |
| Utility | clsx + tailwind-merge (`cn`) | latest |
| Animation CSS | tw-animate-css | ^1.4.0 |
| Scroll | react-scroll | ^1.9.3 (installed, not yet used) |

---

## 🚀 Build Commands

```bash
bun run dev      # start dev server
bun run build    # production build
bun run start    # start production server
bun run lint     # eslint
```

> **Note**: Scripts use `next` directly (not `bun run` wrappers). The project uses npm's `package-lock.json` alongside `bun.lock` — always use `bun` to install packages.

---

## 📂 File & Folder Structure

```
app/
  (home)/
    page.tsx           ← Home page (route group, URL: /)
  layout.tsx           ← Root layout — Geist + Inter fonts on <html>
  globals.css          ← Tailwind v4 + tw-animate-css + shadcn CSS vars

components/
  features/            ← Page-level section components (one per section)
    nav-bar.tsx
    hero-section.tsx
    brand-logos.tsx
    reviews.tsx
    platform-features.tsx
    our-process.tsx
    case-studies.tsx
    faq-carousel.tsx
    footer-section.tsx
  ui/                  ← Atomic primitives (shadcn-generated)
    button.tsx
    card.tsx
    tabs.tsx
    carousel.tsx

lib/
  utils.ts             ← cn() helper (clsx + tailwind-merge)

public/
  Frame-1.webp         ← Left organic blob decoration (hero)
  Frame-2.webp         ← Right organic blob decoration (hero)
  new-hero.webp        ← Dashboard mockup screenshot (hero)
  logos/               ← Brand logo webps for marquee
    Zedge.webp
    Adore-me.webp
    Natural-Intelligence.webp
    GoodProtein.webp
    monday.com_.webp
    monday2.webp
    Udemy.webp
    Perplexity.webp
  process/             ← Dashboard screenshots for OurProcess tabs
    videoframe_554.png   (Track tab)
    videoframe_2364.png  (Pay tab)
    videoframe_3419.png  (Discover tab)
    videoframe_9629.png  (Manage tab)
```

---

## 🏗️ Architectural Rules

### Component Placement
- **`components/features/`** — every Home Page section lives here as its own file. One section = one file. Named after the section in kebab-case (e.g. `social-proof-section.tsx`).
- **`components/ui/`** — atomic, reusable primitives only (buttons, inputs, badges). Generated via shadcn CLI or hand-written to match the same CVA pattern.
- **Default exports** for feature components; **named exports** for UI primitives.

### Client vs Server
- Add `"use client"` only when the component requires: browser APIs, scroll listeners, `useState`/`useEffect`, or Framer Motion refs (`useAnimate`, `useRef`).
- Static/presentational sections (e.g. FooterSection) stay as Server Components — no directive needed.
- Currently, NavBar, HeroSection, BrandLogos, and OurProcess are all `"use client"`. FooterSection is a Server Component.

### Page Composition
```tsx
// app/(home)/page.tsx — current state
<div className="min-h-screen font-sans bg-white">
  <NavBar />
  <main>
    <HeroSection />
    <BrandLogos />
    <OurProcess />
  </main>
  <FooterSection />
</div>
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| Background | `bg-white` / `#F9F9F9` | Page bg / card surface |
| Foreground | `text-black` | Primary text |
| Muted text | `text-gray-500` / `text-gray-400` | Subtitles, captions |
| Accent — lime | `#BCF96A` | tiksly brand badge |
| Accent — blue | `#0081FB` | Hover states, link highlights |
| Hover surface | `#ECECEC` | Nav button hover bg |
| Process card bg | `#D9D0C1` | OurProcess tab card background (beige/tan) |

### Typography
- **Fonts loaded in `layout.tsx`**: Geist Sans (`--font-geist-sans`), Geist Mono (`--font-geist-mono`), and Inter — all three applied to `<html>` as `${geistSans.variable} ${geistMono.variable} ${inter.className} h-full antialiased`. Inter is the effective body/UI font since it's applied directly as a class.
- **Logo / brand text**: `text-3xl font-extrabold tracking-tighter` (nav: 30px; footer: 28px)
- **Hero headline**: `text-[30px] md:text-[48px] xl:text-[52px] font-semibold tracking-tight leading-[1.12]`
- **Process section title**: `text-3xl md:text-4xl lg:text-[46px] 2xl:text-[52px] font-black uppercase tracking-tighter`
- **Body / nav links**: `text-[15px] font-medium`
- **Captions / meta**: `text-[13px]` or `text-[14px]`
- **Footer headings**: `text-[16px] font-semibold tracking-tight`
- Prefer explicit pixel sizes (`text-[15px]`) over Tailwind scale steps for precision.

### Spacing & Layout
- **Page container**: `container mx-auto px-3 lg:px-4` — standard across all sections (note: some older instances use `px-2 lg:px-4`; prefer `px-3 lg:px-4`).
- **Section padding**: `pt-40 pb-32` (hero content block); `py-16 md:py-24` (OurProcess); `py-16` (footer grid).
- **Border radius motif**: `rounded-full` for pills/buttons; `rounded-[2rem]` for cards, navbar, dropdowns; `rounded-3xl` for feature cards; `rounded-2xl` for image frames in process section.

### Shadows
- Card / dropdown: `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]`
- Hero image: `shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]`

### Buttons (inline — not using `<Button>` primitive for CTAs)
```tsx
// Primary CTA (hero, process section)
"px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"

// Nav pill button (desktop, hover trigger)
"px-5 py-1 hover:bg-[#ECECEC] rounded-full text-[15px] font-medium transition-colors text-black"

// Nav CTA (black pill)
"px-6 py-3 bg-black text-white rounded-full text-[15px] font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
```

### CSS Variables (globals.css)
- Tailwind v4 is configured via `@import "tailwindcss"` + `@import "tw-animate-css"` + `@import "shadcn/tailwind.css"`.
- shadcn CSS vars are mapped in `@theme inline {}` and defined on `:root` using `oklch()` color space (not hex). Dark mode class `.dark` is also defined.
- Base radius: `--radius: 0.625rem`.

---

## ✨ Animation System

### Shared Ease Curve
```ts
const EASE = [0.22, 1, 0.36, 1] as const; // all motion transitions use this
```

### Entrance Stagger Pattern (Framer Motion)
```ts
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
// Usage: wrap section in <motion.div variants={container} initial="hidden" animate="show">
// Each child: <motion.div variants={item}>
```

### Imperative Animation (useAnimate)
Used in HeroSection for the floating `tiksly` badge. Badge is `position: absolute` inside `<h1>`, driven by `badgeAnimate()` to hop between 4 word `ref`s (channel → most → into → creator → repeat) on a 1800ms timer. Starts 1200ms after mount (waits for stagger entrance to finish). Opacity starts at 0 and is set to 1 on first tick.

### Tab Transition (AnimatePresence)
Used in OurProcess. Each `TabsContent` wraps a `motion.div` with `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, `exit={{ opacity: 0, y: -20 }}`, duration 0.45s, ease `[0.22, 1, 0.36, 1]`. `AnimatePresence mode="wait"` ensures exit before enter.

### Infinite Marquee (BrandLogos)
Two identical `motion.div` rows, each animating `x: [0, "-100%"]` with `ease: "linear"`, `duration: 25`, `repeat: Infinity`. Each logo also has an individual vertical float animation (`y` oscillating between `yRange` values) with `repeatType: "reverse"` and `ease: "easeInOut"`.

---

## 🧩 Existing Components

### `NavBar` (`components/features/nav-bar.tsx`)
- `"use client"` — scroll state + dropdown state
- Fixed position, `z-50`, shrinks padding on scroll (`scrolling` state: `window.scrollY > 10` → `py-3 px-3` vs `px-2 py-5`)
- Navbar inner: `container mx-auto bg-[#F9F9F9]/90 rounded-[2rem] py-2`
- **Desktop**: hover-triggered mega-menu dropdowns using `opacity/translate-y` CSS transitions (no JS animation)
  - `Platform` dropdown: 2-column grid — "By feature" (Partnerships hub, CreativeOps) | "By business" (For Brands, For Agencies). A commented-out 3rd column (CreativeOps card) exists but is hidden.
  - `Contact` dropdown: "I'm a brand" (Store icon) + "I'm a creator" (User icon)
- **Mobile**: full-screen white overlay (`fixed inset-0`), translate-x slide-in. Platform accordion uses CSS `grid-rows-[0fr/1fr]` collapse trick.
- Nav links (desktop): Platform (dropdown), Creators, Success stories, Contact (plain links, no dropdown)
- Login button is commented out in both desktop and mobile views.
- Imports: `Menu, X, ChevronDown, Store, User` from lucide-react; `Link` from next/link; `cn` from `@/lib/utils`.

### `HeroSection` (`components/features/hero-section.tsx`)
- `"use client"` — framer-motion + refs + useAnimate
- Full-viewport section (`min-h-screen flex items-center`)
- Left/right decorative `.webp` blobs: `absolute`, full height, `w-70 lg:w-85 xl:w-100`, `hidden lg:block`
- **"Experts in" row**: inline SVGs for Meta (with gradient fill), TikTok, and YouTube Shorts logos
- **Headline**: "Turn creator marketing into your most profitable growth channel" — floating `#BCF96A` tiksly badge animates over 4 `<span ref>` words
- **Subheadline**: "Tiksly is a unified, data-fed system for producing, testing, and scaling creator ads..."
- **CTA**: Single "Book a demo" black pill button
- **Hero image**: `new-hero.webp`, `max-w-5xl`, `rounded-[2rem]`, with shadow
- Entrance: container/item stagger pattern (container delays 0.25s, children stagger 0.12s, each 0.7s duration)

### `BrandLogos` (`components/features/brand-logos.tsx`)
- `"use client"` — Framer Motion
- Subtitle: "Trusted by 22,000+ brands worldwide"
- 7 logos: Zedge, Adore Me, Natural Intelligence, GoodProtein, monday.com, Udemy, Perplexity — loaded from `public/logos/*.webp`
- Each logo: `grayscale hover:grayscale-0 opacity-70 hover:opacity-100` + individual float animation
- Left/right gradient fade overlays: `w-20 md:w-40 bg-linear-to-r/l from-white to-transparent`
- Infinite marquee: two duplicate rows scrolling left at `duration: 25`
- Section: `bg-white pt-4 pb-8 border-b border-gray-50`

### `PlatformFeatures` (`components/features/platform-features.tsx`)
- `"use client"` — Framer Motion entrance staggered animations
- Heading: "Launch with creators. Win using data."
- Renders 3 responsive Cards with distinct style profiles:
  - **Partnerships Hub** (Light theme): gray card, green ticks
  - **CreativeOps** (Lime theme): brand lime `#BCF96A` background, white/black ticks
  - **Campaign ROI** (Dark theme): dark charcoal `#0D0D0D` background, blue/white ticks
- Inside each card, renders a subtitle, a paragraph description, a pill button ("Learn more"), and a 2-column list of 4 sub-features with animated ticks
- Section: `bg-white py-20 lg:py-24 border-b border-gray-50`

### `OurProcess` (`components/features/our-process.tsx`)
- `"use client"` — useState + Framer Motion + shadcn Tabs
- 4 tabs: **Manage** (videoframe_9629), **Discover** (videoframe_3419), **Track** (videoframe_554), **Pay** (videoframe_2364) — default active: `"pay"`
- **Tab bar**: `bg-black text-white rounded-md py-5`, active tab: `bg-white text-black` (using `data-[state=active]:` selectors with `!` override)
- **Card**: `bg-[#D9D0C1] rounded-[2rem] p-8 md:p-12 lg:p-16` — 2-col grid (`1.1fr 0.9fr`) on lg+
- **Left col**: uppercase title (`font-black uppercase tracking-tighter`), description, CTA pill button
- **Right col**: `bg-white rounded-2xl` image frame with `hover:scale-[1.02]`
- Tab switch: `AnimatePresence mode="wait"` with y-axis fade
- Section: `bg-white py-16 md:py-24 border-b border-gray-50`

### `FooterSection` (`components/features/footer-section.tsx`)
- **Server Component** (no directive)
- 5-column grid: `grid-cols-[1.5fr_1fr_1fr_1fr_1fr]` on lg — Logo+address | Services | Resources | Earn Money | Company
- Logo: `text-[28px] font-extrabold tracking-tighter`, address text below
- Link data arrays: `servicesLinks`, `resourceLinks`, `earnMoneyLinks`, `companyLinks` — easy to extend
- Bottom bar: `bg-black` — copyright (left, order-3 md:order-1), social icons (center, order-1 md:order-2), legal links (right, order-2 md:order-3)
- Social icons: inline SVG function components (Facebook, Instagram, LinkedIn, X, YouTube)
- Contact email: `hello@tiksly.app`

### `Button` (`components/ui/button.tsx`)
- CVA-based, variants: `default | outline | secondary | ghost | destructive | link`
- Sizes: `xs | sm | default | lg | icon | icon-xs | icon-sm | icon-lg`
- `asChild` prop via `Slot.Root` from `radix-ui`
- **Not used** for hero/nav CTAs — those use inline Tailwind classes directly

### `Tabs` (`components/ui/tabs.tsx`)
- `"use client"` — wraps `radix-ui` `Tabs` primitive
- Exports: `Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants`
- `TabsList` variant prop: `default` (muted bg) | `line` (transparent, underline active indicator)
- Supports horizontal (default) and vertical orientation via `data-orientation`
- Used by OurProcess with heavy className overrides via `!` important suffix

---

## 🗺️ Home Page Section Map

```
/ (Home)
├── <NavBar />              ← fixed header, always visible
├── <main>
│   ├── <HeroSection />     ← full-viewport hero, animated headline + badge
│   ├── <BrandLogos />      ← infinite marquee of 7 brand logos
│   ├── <Reviews />         ← premium interactive UGC video reviews carousel
│   ├── <PlatformFeatures />← 3 stylized feature boxes (Partnerships Hub, CreativeOps, Campaign ROI)
│   ├── <OurProcess />      ← 4-tab platform showcase with mockup images
│   ├── <CaseStudies />     ← responsive black case-study cards carousel (1 mobile, 2 tablet, 3 desktop)
│   └── <FaqCarousel />     ← resources/FAQ cards carousel with navigation arrows (1 mobile, 2 tablet, 3 desktop)
└── <FooterSection />       ← 5-col grid footer + black bottom bar
```

**Sections yet to be built** (append here as they are added):
- [ ] How it Works / Step-by-step
- [ ] Testimonials / Success Stories
- [ ] Pricing
- [ ] Final CTA / Contact

---

## 📝 Implementation Log

> Append a new entry below each time a component is built or a significant change is made.

### 2026-06-04 — Initial CLAUDE.md created
- Analyzed full codebase: `app/(home)/page.tsx`, `layout.tsx`, `globals.css`, all 3 feature components, `button.tsx`
- Documented design system, animation patterns, component APIs, and page section map
- No new components written — context training pass only

### 2026-06-06 — Full codebase re-analysis, CLAUDE.md updated
- Discovered 2 new feature components built since initial pass: `brand-logos.tsx`, `our-process.tsx`
- Discovered new UI primitive: `tabs.tsx` (shadcn Tabs wrapping radix-ui)
- Updated page composition, file structure, design tokens (added `#D9D0C1` process card bg), typography (corrected font loading — Geist + Inter all on `<html>`), animation patterns (marquee + AnimatePresence tab transitions)
- Corrected tech stack: added `tw-animate-css`, `radix-ui ^1.4.3`; noted `react-scroll` installed but unused
- Updated section map: BrandLogos and OurProcess now built; removed Social Proof from "yet to build" list
- Corrected `globals.css` description: imports `tw-animate-css` and `shadcn/tailwind.css`; uses `oklch()` color space for CSS vars

### 2026-06-06 — Built PlatformFeatures & Card Components
- Created shadcn Card primitive at `components/ui/card.tsx`.
- Created PlatformFeatures section at `components/features/platform-features.tsx` containing three stylized boxes (Partnerships Hub, CreativeOps, Campaign ROI) using shadcn Card and Button components.
- Integrated the PlatformFeatures component into the Home Page (page.tsx) between BrandLogos and OurProcess.

### 2026-06-08 — Built Case Studies Carousel Component
- Built the new Case Studies carousel section at [case-studies.tsx](file:///g:/next-js/tiksly-project/components/features/case-studies.tsx).
- Configured a responsive, autoplaying layout via the Shadcn Carousel (Embla API) without navigation arrows.
- Designed custom interaction-aware autoplay logic (pauses on pointer down, resumes on pointer up) with a 4-second loop cycle.
- Integrated the Case Studies component into [page.tsx](file:///g:/next-js/tiksly-project/app/(home)/page.tsx) between OurProcess and BookCall.

### 2026-06-08 — Built FAQ/Learn Carousel Component
- Built the new resources/FAQ carousel section at [faq-carousel.tsx](file:///g:/next-js/tiksly-project/components/features/faq-carousel.tsx).
- Configured a responsive layout showing white cards with deep blue left borders, category icons, dates, and authors.
- Configured left/right circular arrow navigation overlay buttons (`CarouselPrevious` and `CarouselNext`).
- Set up loop autoplay scrolling every 4 seconds, with custom pointer drag-pause handlers on Embla events.
- Integrated the component into [page.tsx](file:///g:/next-js/tiksly-project/app/(home)/page.tsx) between CaseStudies and BookCall.
