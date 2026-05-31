import Link from "next/link";
import { Apple, ArrowUpRight } from "lucide-react";

/* ── SVG Icons ───────────────────────────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.23 8.23 0 0 0 4.79 1.52V6.7a4.85 4.85 0 0 1-1.02-.01z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

function MetaFooterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function TikTokFooterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.23 8.23 0 0 0 4.79 1.52V6.7a4.85 4.85 0 0 1-1.02-.01z"
      />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
      <path fill="#EA4335" d="M1.22 23.99L13.56 11.65 1.22.01C.49.34 0 1.08 0 1.94v20.12c0 .86.49 1.6 1.22 1.93z" />
      <path fill="#FBBC04" d="M21.76 9.77L18.2 7.76 14.97 11l3.23 3.24 3.57-2.01A2.03 2.03 0 0 0 23 11a2.03 2.03 0 0 0-1.24-1.23z" />
      <path fill="#34A853" d="M1.22 23.99l12.34-12.34 3.64 3.64-13.5 7.59a2.08 2.08 0 0 1-2.48-.89z" />
      <path fill="#4285F4" d="M1.22.01l12.34 12.34-3.64 3.64L1.22.01z" />
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────────────────── */

const businessLinks = [
  { label: "For brands", href: "#" },
  { label: "For agencies", href: "#" },
];

const featureLinks = [
  { label: "Partnerships hub", href: "#" },
  { label: "CreativeOps", href: "#" },
];

const resourceLinks = [
  { label: "Creators", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Success stories", href: "#" },
  { label: "Creative insider", href: "#" },
];

const blogLinks = [
  { label: "Ad performance", href: "#" },
  { label: "Tiksly news", href: "#" },
  { label: "Creator Resources", href: "#" },
  { label: "eCommerce marketing", href: "#" },
  { label: "Influencer Marketing", href: "#" },
  { label: "Paid Social News", href: "#" },
  { label: "Social media marketing", href: "#" },
  { label: "User-Generated Content", href: "#" },
];

const socialLinks: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "TikTok", href: "#", icon: <TikTokIcon /> },
  { label: "X", href: "#", icon: <XIcon /> },
  { label: "Facebook", href: "#", icon: <FacebookIcon /> },
  { label: "YouTube", href: "#", icon: <YouTubeIcon /> },
];

/* ── FooterLink — left-to-right underline on hover ────────────────────── */

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[15px] text-gray-800 relative w-fit after:content-[''] after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-gray-800 hover:after:w-full after:transition-all after:duration-300 after:ease-out"
    >
      {children}
    </Link>
  );
}

/* ── Component ────────────────────────────────────────────────────────── */

export default function FooterSection() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main grid */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1.4fr_1fr_1.5fr] gap-10">

          {/* Col 1 — Platform */}
          <div>
            <p className="text-[13px] text-gray-400 mb-4">By business type</p>
            <ul className="flex flex-col gap-3 mb-8">
              {businessLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-gray-400 mb-4">By feature</p>
            <ul className="flex flex-col gap-3">
              {featureLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — Resources */}
          <div>
            <p className="text-[13px] text-gray-400 mb-4">Resources</p>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Blog */}
          <div>
            <p className="text-[13px] text-gray-400 mb-4 flex items-center gap-1">
              Blog <ArrowUpRight className="w-3.5 h-3.5" />
            </p>
            <ul className="flex flex-col gap-3">
              {blogLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Company + Contact */}
          <div>
            <p className="text-[13px] text-gray-400 mb-4">Company</p>
            <ul className="flex flex-col gap-3 mb-8">
              <li><FooterLink href="#">About us</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
            </ul>
            <p className="text-[13px] text-gray-400 mb-4">Contact us</p>
            <ul className="flex flex-col gap-3">
              <li><FooterLink href="#">Book a call</FooterLink></li>
              <li><FooterLink href="mailto:hello@tiksly.app">hello@tiksly.app</FooterLink></li>
            </ul>
          </div>

          {/* Col 5 — Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-4">
            <span className="text-[30px] font-extrabold tracking-tighter text-black leading-none">
              tiksly.
            </span>

            <p className="text-gray-500 text-[15px] leading-snug max-w-60">
              Turn creator marketing into your most profitable growth channel
            </p>

            <hr className="border-gray-200" />

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-gray-500 text-[14px]">Experts in</span>
              <span className="flex items-center gap-1.5 font-bold text-[15px] text-[#1877F2]">
                <MetaFooterIcon /> Meta
              </span>
              <span className="flex items-center gap-1.5 font-bold text-[15px] text-gray-900">
                <TikTokFooterIcon /> TikTok
              </span>
            </div>

            <Link
              href="#"
              className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-black transition-colors w-fit"
            >
              Become a creator <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2.5 hover:bg-black hover:border-gray-900 hover:text-white transition-all text-gray-800"
              >
                <Apple className="w-4 h-4 shrink-0" />
                <span className="text-[13px] font-semibold whitespace-nowrap">App store</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2.5 hover:bg-black hover:border-gray-900 hover:text-white transition-all text-gray-800"
              >
                <GooglePlayIcon />
                <span className="text-[13px] font-semibold whitespace-nowrap">Play store</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            {/* Social icons — outlined circles */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Legal — two stacked lines, right-aligned */}
            <div className="flex flex-col items-end gap-1.5">
              <div className="flex items-center gap-2">
                <Link href="#" className="text-[13px] text-gray-600 hover:text-black transition-colors">
                  Terms of service
                </Link>
                <span className="text-gray-400 text-[13px]">•</span>
                <Link href="#" className="text-[13px] text-gray-600 hover:text-black transition-colors">
                  Privacy policy
                </Link>
              </div>
              <p className="text-[13px] text-gray-400">
                584 Castro St. 2163 San Francisco, CA 94114
                <span className="mx-1.5">•</span>
                © 2026 By Tiksly. All Rights Reserved.
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
