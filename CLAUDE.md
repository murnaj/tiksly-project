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
| UI Primitives | shadcn/ui (Radix UI) | ^4.7.0 |
| Utility | clsx + tailwind-merge (`cn`) | latest |
| Scroll | react-scroll | ^1.9.3 |

---

## 🚀 Build Commands

```bash
bun run dev      # start dev server
bun run build    # production build
bun run start    # start production server
bun run lint     # eslint
```

---

## 📂 File & Folder Structure

```
app/
  (home)/
    page.tsx           ← Home page (route group, URL: /)
  layout.tsx           ← Root layout — font variables injected on <html>
  globals.css          ← Tailwind v4 imports + CSS variable theme definitions

components/
  features/            ← Page-level section components (one per section)
    nav-bar.tsx
    hero-section.tsx
    footer-section.tsx
  ui/                  ← Atomic primitives (shadcn-generated)
    button.tsx

lib/
  utils.ts             ← cn() helper (clsx + tailwind-merge)

public/
  Frame-1.webp         ← Left organic blob decoration (hero)
  Frame-2.webp         ← Right organic blob decoration (hero)
  new-hero.webp        ← Dashboard mockup screenshot (hero)
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

### Page Composition
```tsx
// app/(home)/page.tsx pattern
<div className="min-h-screen font-sans bg-white">
  <NavBar />
  <main>
    <SectionA />
    <SectionB />
    {/* ... */}
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

### Typography
- **Primary font**: `Inter` (loaded via `next/font/google`, applied as `inter.className` on `<html>`)
- **Logo / brand text**: `text-3xl font-extrabold tracking-tighter` (28–30px)
- **Section headlines**: `text-[52px] md:text-[30px] font-semibold tracking-tight leading-[1.12]`
- **Body / nav links**: `text-[15px] font-medium`
- **Captions / meta**: `text-[13px]` or `text-[14px]`
- **Footer headings**: `text-[16px] font-semibold tracking-tight`
- Prefer explicit pixel sizes (`text-[15px]`) over Tailwind scale steps for precision.

### Spacing & Layout
- **Page container**: `container mx-auto px-2 lg:px-4` — always.
- **Section padding**: `pt-40 pb-32` (hero); `py-16` (footer grid).
- **Border radius motif**: `rounded-full` for pills/buttons; `rounded-[2rem]` for cards, navbar, dropdowns; `rounded-3xl` for feature cards.

### Shadows
- Card / dropdown: `shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]`
- Hero image: `shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]`

### Buttons (inline — not using `<Button>` primitive for CTAs)
```tsx
// Primary CTA
"px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"

// Nav pill button
"px-5 py-1 hover:bg-[#ECECEC] rounded-full text-[15px] font-medium transition-colors text-black"
```

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
Used for the floating `tiksly` badge in HeroSection. Badge is absolutely positioned inside the `<h1>`, with `x`/`y` driven by `badgeAnimate()` to hop between word refs on a timer.

---

## 🧩 Existing Components

### `NavBar` (`components/features/nav-bar.tsx`)
- `"use client"` — needs scroll + state
- Fixed position, `z-50`, shrinks padding on scroll (`scrolling` state via `window.scrollY > 10`)
- Navbar container: `bg-[#F9F9F9]/90 rounded-[2rem]`
- Desktop: hover-triggered mega-menu dropdowns (`Platform` and `Contact`) with `opacity/translate-y` CSS transitions
- Mobile: full-screen overlay with accordion `Platform` sub-menu (CSS grid `grid-rows` collapse trick)
- Nav links: Platform (dropdown), Creators, Success stories, Contact
- CTA: `Contact` button (black pill) → dropdown with "I'm a brand" / "I'm a creator"

### `HeroSection` (`components/features/hero-section.tsx`)
- `"use client"` — framer-motion + refs
- Full-viewport section (`min-h-screen flex items-center`)
- Left/right decorative `.webp` blobs (absolute, `hidden lg:block`)
- Platform logos: inline SVGs for Meta, TikTok, Shorts — "Experts in" badge row
- Animated headline with floating `#BCF96A` tiksly badge cycling over 4 word refs
- Subheadline, single CTA (`Book a demo`), dashboard mockup image
- Entrance animation: container/item stagger pattern

### `FooterSection` (`components/features/footer-section.tsx`)
- Server Component (no directive)
- 5-column grid: Logo+address | Services | Resources | Earn Money | Company
- Bottom black bar: copyright (left), social icons (center), legal links (right)
- Social icons: inline SVG components (Facebook, Instagram, LinkedIn, X, YouTube)
- Link columns driven by data arrays (easy to extend)

### `Button` (`components/ui/button.tsx`)
- CVA-based with `variant` (default, outline, secondary, ghost, destructive, link) and `size` (xs, sm, default, lg, icon variants)
- `asChild` prop via `Slot.Root` from radix-ui
- Note: Hero/Nav CTAs use inline Tailwind classes, not this primitive

---

## 🗺️ Home Page Section Map

```
/ (Home)
├── <NavBar />              ← fixed header, always visible
├── <main>
│   └── <HeroSection />     ← full-viewport hero with animated headline
└── <FooterSection />       ← 5-col grid footer + black bottom bar
```

**Sections yet to be built** (append here as they are added):
- [ ] Social Proof / Logos strip
- [ ] Features / Platform section
- [ ] How it Works
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
