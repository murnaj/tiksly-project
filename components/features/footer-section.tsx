"use client";

import { useRef } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── SVG Icons ───────────────────────────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.065-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.379-.293 1.189-.333 1.357-.053.225-.176.273-.406.165-1.513-.704-2.46-2.915-2.46-4.693 0-3.821 2.775-7.332 8.01-7.332 4.206 0 7.476 2.997 7.476 7.003 0 4.181-2.636 7.545-6.294 7.545-1.229 0-2.385-.639-2.78-1.392l-.758 2.888c-.274 1.054-1.018 2.374-1.517 3.183C9.691 23.87 10.824 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
      />
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────────────────── */

const servicesLinks = [
  { label: "Shop Management", href: "#" },
  { label: "Affiliate & Creator Management", href: "#" },
  { label: "TikTok Shop Ads", href: "#" },
  { label: "Coaching & Consultation", href: "#" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "#" },
  { label: "Checklists", href: "#" },
];

const companyLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Contact us", href: "#" },
];

const socialLinks: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: "Facebook", href: "https://www.facebook.com/tiksly", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/tiksly_services/", icon: <InstagramIcon /> },
  { label: "Pinterest", href: "https://www.pinterest.com/tiksly/", icon: <PinterestIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/tiksly/", icon: <LinkedInIcon /> },
  { label: "YouTube", href: "https://www.youtube.com/@Tiksly", icon: <YouTubeIcon /> },
];

/* ── Component ────────────────────────────────────────────────────────── */

export default function FooterSection() {
  const footerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.1, 0.4, 0.85]);

  return (
    <footer ref={footerRef} className="relative bg-[#0B0C0E] border-t border-gray-800/80 text-white w-full overflow-hidden">
      {/* Main grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-12">

          {/* Logo & Address / Contact */}
          <div className="flex flex-col gap-5">
            <div>
              {/* <div className="block mb-3">
                <Image
                  src="/branding/logo-green.svg"
                  alt="Logo"
                  width={110}
                  height={110}
                />
              </div> */}
              <p className="text-gray-400 text-[14px] leading-relaxed max-w-sm">
                Official TikTok Shop Partner & Creator Marketing Platform. Scaling e-commerce brands through high-converting UGC and performance ads.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-[14px]">
              {/* Email & Phone Contact Block */}
              <div className="flex flex-col gap-2.5">
                <a
                  href="mailto:sales@tiksly.com"
                  className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#BCF96A] transition-colors w-fit text-[14px]"
                >
                  <Mail className="w-4 h-4 text-[#BCF96A] shrink-0" />
                  <span>sales@tiksly.com</span>
                </a>

                <div className="flex flex-wrap items-center gap-3 text-[13px] text-gray-300">
                  <a
                    href="tel:+14092694915"
                    className="inline-flex items-center gap-1.5 hover:text-[#BCF96A] transition-colors"
                  >
                    <span className="font-bold text-[#BCF96A] text-xs">US</span>
                    <span>+1 (409) 269-4915</span>
                  </a>
                  <span className="text-gray-700">•</span>
                  <a
                    href="tel:+447412066394"
                    className="inline-flex items-center gap-1.5 hover:text-[#BCF96A] transition-colors"
                  >
                    <span className="font-bold text-[#BCF96A] text-xs">UK</span>
                    <span>+44 7412 066394</span>
                  </a>
                </div>
              </div>

              {/* Office Addresses - Clean stacked layout with left border accents */}
              <div className="flex flex-col gap-3.5 pt-2">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#BCF96A] uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5 text-[#BCF96A] shrink-0" />
                    <span>USA Headquarters</span>
                  </div>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    1001 S Main St, Suite 500, Kalispell, MT 59901, USA
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#BCF96A] uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-[#BCF96A] shrink-0" />
                    <span>UK Office</span>
                  </div>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    Unit 103 Chambers Business Centre, Chapel Road, Oldham OL8 4QQ, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 tracking-tight">Services</h3>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] text-gray-400 hover:text-[#BCF96A] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 tracking-tight">Resources</h3>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] text-gray-400 hover:text-[#BCF96A] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 tracking-tight">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] text-gray-400 hover:text-[#BCF96A] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Giant Parallax Watermark Logo Banner */}
      <div className="w-full overflow-hidden pt-8 pb-4 pointer-events-none select-none border-t border-gray-800/50 bg-gradient-to-b from-transparent via-[#14161B]/60 to-[#0B0C0E]">
        <motion.div
          style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
          className="flex justify-center items-center py-6"
        >
          <Image
            src="/branding/logo-green.svg"
            alt="Tiksly Brand Logo Parallax"
            width={720}
            height={220}
            className="w-[85%] max-w-[680px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(188,249,106,0.25)]"
          />
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#07080A] border-t border-gray-800/60 text-gray-400 px-4 w-full">
        <div className="container mx-auto py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Copyright */}
            <div className="text-[13px] text-gray-500 order-3 md:order-1">
              Copyright © 2026 tiksly. All rights reserved.
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-6 order-1 md:order-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-gray-400 hover:text-[#BCF96A] transition-colors duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div className="flex items-center gap-6 text-[13px] order-2 md:order-3">
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#BCF96A] transition-colors duration-200">
                Terms Of Service
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#BCF96A] transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
