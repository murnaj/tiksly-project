"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimate, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/* ── Official Brand Partner SVGs ───────────────────────────────────────── */

function MetaLogoSVG() {
  return (
    <div className="flex items-center gap-1.5 font-bold text-black select-none">
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" className="h-5 md:h-6 w-auto shrink-0">
        <path
          d="M12.65 1.13C11.59 2.02 10.67 3.33 9.87 4.51L8.73 6.21C8.05 7.22 7.05 8.82 6.19 9.96C5.13 11.39 4.57 11.53 3.97 11.53C3.5 11.53 3.04 11.33 2.73 10.84C2.5 10.48 2.32 9.87 2.32 9.08H0C0 10.22 0.25 11.29 0.76 12.1C1.38 13.1 2.38 13.77 3.97 13.77C5.31 13.77 6.32 13.19 7.52 11.66C8.19 10.78 8.54 10.25 9.9 7.93L10.57 6.77C11.19 5.72 11.73 4.78 12.27 4.02C13.27 2.58 14.16 1.77 15.27 1.77C16.29 1.77 17.23 2.43 17.94 3.5C18.96 5.01 19.42 7.12 19.42 9.03C19.42 10.36 19.09 11.53 17.77 11.53V13.77C19.31 13.77 20.22 12.98 20.69 12.2C21.18 11.39 21.46 10.36 21.46 8.96C21.46 6.61 20.85 4.34 19.6 2.53C18.45 0.88 16.95 0 15.38 0C14.45 0 13.51 0.4 12.65 1.13Z"
          fill="#0081FB"
        />
      </svg>
      <span className="tracking-tight text-black font-extrabold text-[14px] md:text-[15px]">Meta</span>
    </div>
  );
}

function TikTokShopSVG() {
  return (
    <div className="flex items-center gap-1.5 font-bold text-black select-none">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="h-4 md:h-5 w-auto shrink-0">
        <path
          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 3.208-4.508V9.41a6.34 6.34 0 0 0-1.042-.087 6.34 6.34 0 1 0 6.342 6.342V8.92a8.213 8.213 0 0 0 4.908 1.593v-3.827z"
          fill="#000000"
        />
      </svg>
      <span className="tracking-tight text-black font-extrabold text-[14px] md:text-[15px]">TikTok Shop</span>
    </div>
  );
}

function YouTubeShortsSVG() {
  return (
    <div className="flex items-center gap-1.5 font-bold text-black select-none">
      <svg width="20" height="24" viewBox="0 0 24 28" fill="none" className="h-4 md:h-5 w-auto shrink-0">
        <path
          d="M17.77 10.32l-1.2-.5 1.2-.5c1.74-.72 2.91-2.47 2.91-4.42 0-2.62-2.13-4.75-4.75-4.75-1.03 0-2.02.34-2.82.96L4.54 7.42C2.96 8.64 2 10.55 2 12.58c0 1.94.88 3.76 2.41 4.99l1.2.5-1.2.5C2.67 19.29 1.5 21.04 1.5 22.99c0 2.62 2.13 4.75 4.75 4.75 1.03 0 2.02-.34 2.82-.96l8.57-6.31c1.58-1.22 2.54-3.13 2.54-5.16 0-1.94-.88-3.76-2.41-4.99zM9.5 16.5v-9l7 4.5-7 4.5z"
          fill="#FF0000"
        />
      </svg>
      <span className="tracking-tight text-black font-extrabold text-[14px] md:text-[15px]">YouTube Shorts</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-visible min-h-screen flex items-center">
      {/* Left organic shape — full height so it reaches behind the fixed navbar */}
      <div className="absolute left-0 top-0 bottom-0 w-70 lg:w-85 xl:w-100 pointer-events-none select-none hidden lg:block">
        <Image
          src="/Frame-1.webp"
          alt=""
          fill
          className="object-contain object-top"
          sizes="(max-width: 1280px) 340px, 400px"
          priority
        />
      </div>

      {/* Right organic shape — full height so it reaches behind the fixed navbar */}
      <div className="absolute right-0 top-0 bottom-0 w-70 lg:w-85 xl:w-100 pointer-events-none select-none hidden lg:block">
        <Image
          src="/Frame-2.webp"
          alt=""
          fill
          className="object-contain object-top"
          sizes="(max-width: 1280px) 340px, 400px"
          priority
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto px-6 pt-40 pb-32 text-center"
        >
          {/* Expert platform badges */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 md:gap-6 mb-7 flex-wrap"
          >
            <span className="text-gray-500 text-[14px] md:text-[15px] font-medium">
              Official Partners:
            </span>

            <div className="flex items-center gap-5 md:gap-7">
              <MetaLogoSVG />
              <TikTokShopSVG />
              <YouTubeShortsSVG />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="relative md:text-[48px] xl:text-[52px] text-[30px] font-normal tracking-tighter text-black leading-[1.12] mb-7 max-w-4xl mx-auto"
          >
            Turn creator marketing into{" "}
            <br className="hidden md:inline" /> your most profitable growth{" "}
            channel
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-500 text-[14px] md:text-[18px] leading-relaxed mb-10 max-w-[660px] mx-auto"
          >
            Tiksly is a unified, data-fed system for producing, testing, and{" "}
            <br className="hidden md:inline" />
            scaling creator ads that drive revenue, from creative{" "}
            <br className="hidden md:inline" />
            collaboration to precision performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="mb-16"
          >
            <Link
              href="/get-demo"
              className="mb-6 inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Book a demo
            </Link>

            <motion.div
              variants={item}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              {/* UK TSP Badge */}
              <div className="inline-flex items-center gap-2 text-[13px] font-medium text-black">
                <svg className="w-5 h-5 rounded-full overflow-hidden shrink-0 shadow-2xs" viewBox="0 0 60 30">
                  <clipPath id="uk-flag">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <clipPath id="uk-t">
                    <path d="M30,15 h30 v15 z M30,15 h-30 v-15 z M30,15 h-30 v15 z M30,15 h30 v-15 z" />
                  </clipPath>
                  <g clipPath="url(#uk-flag)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                  </g>
                </svg>
                <span>UK TSP: <strong className=" text-black">7494315872973719280</strong></span>
              </div>

              {/* USA TSP Badge */}
              <div className="inline-flex items-center gap-2 text-[13px] font-medium text-black">
                <svg className="w-5 h-5 rounded-full overflow-hidden shrink-0 shadow-2xs" viewBox="0 0 60 30">
                  <rect width="60" height="30" fill="#B22234" />
                  <path d="M0,4.6h60M0,11.5h60M0,18.5h60M0,25.4h60" stroke="#fff" strokeWidth="2.3" />
                  <rect width="24" height="16.2" fill="#3C3B6E" />
                </svg>
                <span>USA TSP: <strong className=" text-black">7494489601127056460</strong></span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Preview */}
          <motion.div
            variants={item}
            className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] bg-[#F9F9F9]"
          >
            <Image
              src="/new-hero.webp"
              alt="Tiksly Dashboard Overview"
              width={1200}
              height={750}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
