# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
bun dev          # Start Next.js dev server (port 3000)
bun build        # Production build
bun start        # Start production server
bun lint         # Run ESLint (eslint.config.mjs)
```

The project uses **Bun** as the package manager (bun.lock present). Use `bun add <pkg>` for new dependencies.

## Architecture Overview

**Tiksly** is a TikTok Shop agency marketing site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

### Routing

Two parallel route structures exist:
- `app/(home)/...` — marketing pages under a route group (about-us, blog, case-studies, contact, services, etc.). All share the same layout with NavBar + FooterSection.
- `app/services/shop-management/page.tsx` — standalone service detail page that composes its own NavBar/Footer directly (does **not** live under the `(home)` group).

New service pages follow the pattern in `app/services/shop-management/page.tsx`: `"use client"`, compose shared components (NavBar, FooterSection, BrandLogos, CreatorRegions, OurProcess, CaseStudies, Testimonials, FaqCarousel, BookCall), add a custom hero section.

### Component organization

```
components/
  features/         # Page-level sections and full features
    about-us/       # Sub-sections for the About Us page
    blogs/          # Blog list, post detail, author profile + blog-data.ts
    case-studies/   # Case study list, detail, client profile + case-study-data.ts
    contact/        # Multi-step contact flow
    get-demo/       # Multi-step book-a-demo flow (schedule, form, confirmation)
    services/       # Reusable service page sections (hero, pricing, work samples)
    nav-bar.tsx     # Global nav with mega-menu dropdown (Services) + mobile overlay
    footer-section.tsx
    book-call.tsx   # CTA section used on most pages
    reviews.tsx     # Customer reviews with SVG flags
    ...
  ui/               # shadcn/ui primitives (accordion, button, calendar, carousel, etc.)
```

Data for blogs and case studies lives in co-located `.ts` files (`blog-data.ts`, `case-study-data.ts`) — no external CMS or API.

### Styling conventions

- **Brand color**: `#BCF96A` (lime green) — used for icon backgrounds, highlights, and accents throughout.
- `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge) — use for all conditional class names.
- Tailwind v4 with `@tailwindcss/postcss`. No `tailwind.config.js` — configuration is in `postcss.config.mjs`.
- Framer Motion is used extensively for entrance animations on service/landing pages. Follow the existing `EASE = [0.22, 1, 0.36, 1]` constant pattern.
- The root layout adds `no-js` class to `<html>` and removes it via inline script, allowing CSS-only fallbacks for animations.

### Path aliases

`@/*` maps to the project root. Use `@/components/...`, `@/lib/utils`, etc.

### Key dependencies

| Package | Purpose |
|---|---|
| `framer-motion` | Page/section entrance animations |
| `@cloudflare/stream-react` + `hls.js` | Video playback (`hls-video.tsx`) |
| `@lottiefiles/dotlottie-react` | Lottie animations |
| `react-hook-form` + `zod` | Form validation |
| `embla-carousel-react` / `swiper` | Carousels |
| `react-day-picker` | Calendar in get-demo flow |
| `radix-ui` | Headless UI primitives (wrapped by shadcn components) |

### Image configuration

Remote images from `customer-wyu58i20r3viufsr.cloudflarestream.com` and `videodelivery.net` are allowed in `next.config.ts`.
