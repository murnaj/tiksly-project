<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Tiksly Project Context & Architecture

This document serves as the persistent memory, architectural blueprint, and context log for Antigravity. It is maintained across sessions to ensure consistency in component design, routing patterns, and technology stack.

## 🛠️ Project Stack & Configuration
- **Framework**: Next.js 16.2.6 (App Router)
- **Runtime**: Bun
- **React**: 19.2.4
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/postcss` & `globals.css` with CSS-in-JS theme definitions mapping CSS variables via `@theme inline`)
- **Animation**: `framer-motion` (v12.40.0)
- **Icons**: `lucide-react` (v1.16.0)
- **Helper Utilities**: `clsx`, `tailwind-merge` (`cn` helper in [utils.ts](file:///g:/next-js/tiksly-project/lib/utils.ts))

## 📂 Codebase & Component Structure

### Pages
- **Home Page**: [page.tsx](file:///g:/next-js/tiksly-project/app/(home)/page.tsx)
  - Layout Wrapper: [layout.tsx](file:///g:/next-js/tiksly-project/app/layout.tsx)
  - Features used: [NavBar](file:///g:/next-js/tiksly-project/components/features/nav-bar.tsx), [HeroSection](file:///g:/next-js/tiksly-project/components/features/hero-section.tsx), [BrandLogos](file:///g:/next-js/tiksly-project/components/features/brand-logos.tsx), [OurProcess](file:///g:/next-js/tiksly-project/components/features/our-process.tsx), [FooterSection](file:///g:/next-js/tiksly-project/components/features/footer-section.tsx)

### Components
- **Features (`components/features/`)**:
  - [nav-bar.tsx](file:///g:/next-js/tiksly-project/components/features/nav-bar.tsx): A sticky, responsive header navigation using local React state (`isOpen`, `isDropdownOpen`, `isContactDropdownOpen`) to control dropdown visibility. Includes dynamic styling when scrolling down (`scrolling` state).
  - [hero-section.tsx](file:///g:/next-js/tiksly-project/components/features/hero-section.tsx): Renders a centered headline with a custom floating "tiksly" badge that animates positions overlays using `useAnimate` from `framer-motion`. Integrates left and right static graphic ornaments (`/Frame-1.webp` and `/Frame-2.webp`) and a dashboard mockup image (`/new-hero.webp`).
  - [brand-logos.tsx](file:///g:/next-js/tiksly-project/components/features/brand-logos.tsx): Renders a seamless, infinite sliding marquee of brand logos (Zedge, Adore Me, Natural Intelligence, GoodProtein, Monday.com, Udemy, Perplexity) scrolling horizontally right-to-left. Logos maintain individual organic vertical floating animations. Transparent gradient fades are applied at both edges for smooth transition effects.
  - [our-process.tsx](file:///g:/next-js/tiksly-project/components/features/our-process.tsx): A process showcase component utilizing shadcn tabs to alternate between workflow stages, loading the custom screenshot mockups from public/process, and fading sections with AnimatePresence.
  - [footer-section.tsx](file:///g:/next-js/tiksly-project/components/features/footer-section.tsx): Organized footer layout containing service/resource menus, contact info, standard legal/copyright bar, and custom SVG social links.
- **UI Base (`components/ui/`)**:
  - [button.tsx](file:///g:/next-js/tiksly-project/components/ui/button.tsx): Atomic button component built on standard shadcn styling patterns.

## 🎨 Design & Layout Patterns
1. **Typography**: Root styling configures `Inter` as the primary sans-serif font family. Font scale utilizes heavy tracking adjustments on logos and headers (`tracking-tighter`, `tracking-tight`).
2. **Spacing & Wrapper Constraints**:
   - `container mx-auto px-2 lg:px-4` for horizontal page content alignment.
   - Distinct rounded borders (`rounded-[2rem]`, `rounded-3xl`) are used frequently across cards, dropdowns, and navbar containers.
3. **Animations**: Standard ease curves (`[0.22, 1, 0.36, 1]`) and staggered entrance timings are used to animate headers and structural elements seamlessly.
4. **Color Theme**: Uses default light-background style (`bg-white` and `bg-[#F9F9F9]`), with contrasting `black` text and accents in custom bright colors (`#BCF96A` lime green, `#0081FB` blue).
