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

            <div className="flex items-center gap-4 md:gap-6">
              <Image
                src="/logos/meta.svg"
                alt="Meta"
                width={85}
                height={22}
                className="h-5 md:h-6 w-auto object-contain"
              />
              <Image
                src="/logos/tiktok-shop.svg"
                alt="Tiktok Shop"
                width={95}
                height={22}
                className="h-5 md:h-6 w-auto object-contain"
              />
              <Image
                src="/logos/youtube.svg"
                alt="Youtube Shorts"
                width={95}
                height={22}
                className="h-5 md:h-6 w-auto object-contain"
              />
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
                <span>UK TSP: 7494315872973719280</span>
              </div>

              {/* USA TSP Badge */}
              <div className="inline-flex items-center gap-2 text-[13px] font-medium text-black">
                <svg className="w-5 h-5 rounded-full overflow-hidden shrink-0 shadow-2xs" viewBox="0 0 60 30">
                  <rect width="60" height="30" fill="#B22234" />
                  <path d="M0,4.6h60M0,11.5h60M0,18.5h60M0,25.4h60" stroke="#fff" strokeWidth="2.3" />
                  <rect width="24" height="16.2" fill="#3C3B6E" />
                </svg>
                <span>USA TSP: 7494489601127056460</span>
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
