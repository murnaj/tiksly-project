"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen lg:h-screen lg:max-h-[960px] lg:min-h-[720px] flex items-center justify-center">
      {/* Left side decoration & ID cards */}
      <div className="absolute left-0 top-0 bottom-0 w-80 lg:w-96 xl:w-[460px] pointer-events-none select-none hidden lg:block z-0">
        {/* Left Side Animated Flowing Vector */}
        <svg
          className="absolute top-16 left-0 w-full h-[85%] pointer-events-none opacity-80"
          viewBox="0 0 450 700"
          fill="none"
        >
          {/* Main Flowing Dotted Path around cards */}
          <motion.path
            d="M 40 40 C 220 20 380 140 220 280 C 80 400 60 520 260 620"
            stroke="#BCF96A"
            strokeWidth="2.2"
            strokeDasharray="6 8"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, -28] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* Secondary Accent Path */}
          <motion.path
            d="M 120 20 C 320 60 340 320 120 440 C 40 500 120 640 340 660"
            stroke="#A3E635"
            strokeWidth="1.6"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity={0.6}
            animate={{ strokeDashoffset: [0, 20] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />

          {/* Animated Sparkle Stars */}
          <motion.g
            animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            style={{ transformOrigin: "210px 30px" }}
          >
            <path d="M 210 20 L 213 27 L 220 30 L 213 33 L 210 40 L 207 33 L 200 30 L 207 27 Z" fill="#BCF96A" />
          </motion.g>

          <motion.g
            animate={{ scale: [1, 0.7, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.5 }}
            style={{ transformOrigin: "320px 220px" }}
          >
            <path d="M 320 210 L 322.5 217.5 L 330 220 L 322.5 222.5 L 320 230 L 317.5 222.5 L 310 220 L 317.5 217.5 Z" fill="#84CC16" />
          </motion.g>

          <motion.g
            animate={{ scale: [0.85, 1.3, 0.85], opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            style={{ transformOrigin: "90px 480px" }}
          >
            <path d="M 90 470 L 92.5 477.5 L 100 480 L 92.5 482.5 L 90 490 L 87.5 482.5 L 80 480 L 87.5 477.5 Z" fill="#BCF96A" />
          </motion.g>

          {/* Decorative Glowing Dots */}
          <circle cx="160" cy="140" r="3.5" fill="#BCF96A" />
          <circle cx="280" cy="460" r="3" fill="#A3E635" />
          <circle cx="50" cy="300" r="4" fill="#BCF96A" opacity="0.7" />
        </svg>

        {/* Top-Left ID Card */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 10, rotate: -4 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
            rotate: -4,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3, ease: EASE },
            x: { duration: 0.8, delay: 0.3, ease: EASE },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[16%] left-[4%] xl:left-[10%] w-[210px] lg:w-[260px] xl:w-[280px] drop-shadow-[0_15px_30px_rgba(188,249,106,0.25)] z-10"
        >
          <Image
            src="/id-cards/left-side-1.png"
            alt="Creator Card 1"
            width={400}
            height={200}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Bottom-Left ID Card */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 10, rotate: 3 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, 10, 0],
            rotate: 3,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5, ease: EASE },
            x: { duration: 0.8, delay: 0.5, ease: EASE },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[52%] left-[2%] xl:left-[8%] w-[210px] lg:w-[260px] xl:w-[280px] drop-shadow-[0_15px_30px_rgba(188,249,106,0.25)] z-10"
        >
          <Image
            src="/id-cards/left-side-2.png"
            alt="Creator Card 2"
            width={400}
            height={200}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Right side decoration & ID cards */}
      <div className="absolute right-0 top-0 bottom-0 w-80 lg:w-96 xl:w-[460px] pointer-events-none select-none hidden lg:block z-0">
        {/* Right Side Animated Flowing Vector */}
        <svg
          className="absolute top-16 right-0 w-full h-[85%] pointer-events-none opacity-80"
          viewBox="0 0 450 700"
          fill="none"
        >
          {/* Main Flowing Dotted Path around cards */}
          <motion.path
            d="M 410 40 C 230 20 70 140 230 280 C 370 400 390 520 190 620"
            stroke="#BCF96A"
            strokeWidth="2.2"
            strokeDasharray="6 8"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, -28] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />

          {/* Secondary Accent Path */}
          <motion.path
            d="M 330 20 C 130 60 110 320 330 440 C 410 500 330 640 110 660"
            stroke="#A3E635"
            strokeWidth="1.6"
            strokeDasharray="4 6"
            strokeLinecap="round"
            opacity={0.6}
            animate={{ strokeDashoffset: [0, 20] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          />

          {/* Animated Sparkle Stars */}
          <motion.g
            animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            style={{ transformOrigin: "240px 30px" }}
          >
            <path d="M 240 20 L 243 27 L 250 30 L 243 33 L 240 40 L 237 33 L 230 30 L 237 27 Z" fill="#BCF96A" />
          </motion.g>

          <motion.g
            animate={{ scale: [1, 0.7, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.5 }}
            style={{ transformOrigin: "130px 220px" }}
          >
            <path d="M 130 210 L 132.5 217.5 L 140 220 L 132.5 222.5 L 130 230 L 127.5 222.5 L 120 220 L 127.5 217.5 Z" fill="#84CC16" />
          </motion.g>

          <motion.g
            animate={{ scale: [0.85, 1.3, 0.85], opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            style={{ transformOrigin: "360px 480px" }}
          >
            <path d="M 360 470 L 362.5 477.5 L 370 480 L 362.5 482.5 L 360 490 L 357.5 482.5 L 350 480 L 357.5 477.5 Z" fill="#BCF96A" />
          </motion.g>

          {/* Decorative Glowing Dots */}
          <circle cx="290" cy="140" r="3.5" fill="#BCF96A" />
          <circle cx="170" cy="460" r="3" fill="#A3E635" />
          <circle cx="400" cy="300" r="4" fill="#BCF96A" opacity="0.7" />
        </svg>

        {/* Top-Right ID Card */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 10, rotate: 4 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
            rotate: 4,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4, ease: EASE },
            x: { duration: 0.8, delay: 0.4, ease: EASE },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[16%] right-[4%] xl:right-[6%] w-[210px] lg:w-[260px] xl:w-[280px] drop-shadow-[0_15px_30px_rgba(188,249,106,0.25)] z-10"
        >
          <Image
            src="/id-cards/right-side-1.png"
            alt="Creator Card 3"
            width={400}
            height={200}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Bottom-Right ID Card */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 10, rotate: -3 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, 8, 0],
            rotate: -3,
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6, ease: EASE },
            x: { duration: 0.8, delay: 0.6, ease: EASE },
            y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[52%] right-[2%] xl:right-[4%] w-[210px] lg:w-[260px] xl:w-[280px] drop-shadow-[0_15px_30px_rgba(188,249,106,0.25)] z-10"
        >
          <Image
            src="/id-cards/right-side-2.png"
            alt="Creator Card 4"
            width={400}
            height={200}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Center content */}
      <div className="relative z-10 w-full pt-20 pb-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto px-6 text-center"
        >
          {/* Expert platform badges */}
          <motion.div
            variants={item}
            className="flex items-center justify-center gap-4 mb-4 flex-wrap"
          >
            <span className="text-gray-500 text-[13px] md:text-[14px] font-medium">
              Official Partners:
            </span>

            <div className="flex items-center gap-2">
              <Image
                src="/logos/meta.svg"
                alt="Meta"
                width={85}
                height={22}
                className="h-3.5 w-auto object-contain"
              />
              <Image
                src="/logos/tiktok-shop.svg"
                alt="Tiktok Shop"
                width={95}
                height={22}
                className="h-4 w-auto object-contain"
              />
              <Image
                src="/logos/youtube.svg"
                alt="Youtube Shorts"
                width={95}
                height={22}
                className="h-3.5 w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="relative md:text-[44px] xl:text-[48px] text-[28px] font-semibold tracking-tighter text-black leading-[1.12] mb-4 max-w-4xl mx-auto"
          >
            Turn creator marketing into{" "}
            <br className="hidden md:inline" /> your most profitable growth{" "}
            channel
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed mb-6 max-w-[620px] mx-auto"
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
            className="mb-8"
          >
            <Link
              href="/book-a-meeting"
              className="mb-4 inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              Book a meeting
            </Link>

            <motion.div
              variants={item}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              {/* UK TSP Badge */}
              <div className="inline-flex items-center gap-2 text-[12px] font-medium text-black">
                <svg className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 shadow-2xs" viewBox="0 0 60 30">
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
              <div className="inline-flex items-center gap-2 text-[12px] font-medium text-black">
                <svg className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 shadow-2xs" viewBox="0 0 60 30">
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
            className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-t border-x border-gray-200/60"
          >
            <Image
              src="/home-banner.jpg"
              alt="Tiksly Dashboard Overview"
              width={1200}
              height={750}
              className="w-full object-cover object-top"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
