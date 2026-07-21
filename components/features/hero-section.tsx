"use client";

import { motion, type Variants } from "framer-motion";
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
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Left side decoration & ID cards */}
      <div className="absolute left-0 top-0 bottom-0 w-80 lg:w-96 xl:w-[460px] pointer-events-none select-none hidden lg:block z-0">
        {/* Top-Left Primary Green Dotted Arrow & Sparkles */}
        <svg className="absolute -top-4 -left-4 w-80 lg:w-96 xl:w-[420px] h-[400px] pointer-events-none opacity-95" viewBox="0 0 400 400" fill="none">
          {/* Main Outer Dotted Curve */}
          <path
            d="M 30 30 C 220 10 340 120 160 260 C 80 320 20 250 60 170 C 80 130 140 120 180 150"
            stroke="#BCF96A"
            strokeWidth="2.5"
            strokeDasharray="6 7"
            strokeLinecap="round"
          />
          {/* Arrowhead 1 */}
          <path d="M 172 142 L 182 151 L 169 157 Z" fill="#BCF96A" />

          {/* Inner Secondary Loop */}
          <path
            d="M 100 60 C 260 80 300 220 200 320"
            stroke="#A3E635"
            strokeWidth="1.8"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          {/* Arrowhead 2 */}
          <path d="M 191 313 L 200 320 L 207 311 Z" fill="#A3E635" />

          {/* Primary Green Sparkles & Glow Nodes */}
          <path d="M 180 25 L 183 L 192 L 183 L 180 35 L 177 L 168 L 177 Z" fill="#BCF96A" />
          <path d="M 300 130 L 302.5 L 310 L 302.5 L 300 138 L 297.5 L 290 L 297.5 Z" fill="#BCF96A" />
          <path d="M 90 280 L 92 L 98 L 92 L 90 286 L 88 L 82 L 88 Z" fill="#BCF96A" />
          <circle cx="270" cy="80" r="4" fill="#BCF96A" />
          <circle cx="140" cy="210" r="3" fill="#A3E635" />
          <circle cx="40" cy="120" r="4" fill="#BCF96A" />
        </svg>

        {/* Bottom-Left Primary Green Dotted Arrow */}
        <svg className="absolute bottom-4 left-0 w-80 lg:w-96 h-[340px] pointer-events-none opacity-90" viewBox="0 0 360 340" fill="none">
          <path
            d="M 30 70 C 130 150 310 170 240 300"
            stroke="#BCF96A"
            strokeWidth="2.5"
            strokeDasharray="6 7"
            strokeLinecap="round"
          />
          <path d="M 230 290 L 240 300 L 249 292 Z" fill="#BCF96A" />

          <path
            d="M 60 180 C 140 220 200 240 310 210"
            stroke="#84CC16"
            strokeWidth="1.8"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <path d="M 300 202 L 310 210 L 302 218 Z" fill="#84CC16" />

          <path d="M 180 170 L 183 L 192 L 183 L 180 180 L 177 L 168 L 177 Z" fill="#BCF96A" />
          <circle cx="100" cy="120" r="3.5" fill="#BCF96A" />
          <circle cx="280" cy="270" r="4" fill="#BCF96A" />
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
          className="absolute top-[14%] left-[4%] xl:left-[12%] w-[230px] lg:w-[285px] xl:w-[300px] drop-shadow-[0_12px_25px_rgba(188,249,106,0.5)] z-10"
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
          className="absolute top-[48%] left-[2%] xl:left-[10%] w-[230px] lg:w-[285px] xl:w-[300px] drop-shadow-[0_12px_25px_rgba(188,249,106,0.5)] z-10"
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
        {/* Top-Right Primary Green Dotted Arrow & Sparkles */}
        <svg className="absolute -top-4 -right-4 w-80 lg:w-96 xl:w-[420px] h-[400px] pointer-events-none opacity-95" viewBox="0 0 400 400" fill="none">
          <path
            d="M 370 30 C 180 10 60 120 240 260 C 320 320 380 250 340 170 C 320 130 260 120 220 150"
            stroke="#BCF96A"
            strokeWidth="2.5"
            strokeDasharray="6 7"
            strokeLinecap="round"
          />
          <path d="M 228 142 L 218 151 L 231 157 Z" fill="#BCF96A" />

          <path
            d="M 300 60 C 140 80 100 220 200 320"
            stroke="#A3E635"
            strokeWidth="1.8"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <path d="M 209 313 L 200 320 L 193 311 Z" fill="#A3E635" />

          <path d="M 220 25 L 217 L 208 L 217 L 220 35 L 223 L 232 L 223 Z" fill="#BCF96A" />
          <path d="M 100 130 L 97.5 L 90 L 97.5 L 100 138 L 102.5 L 110 L 102.5 Z" fill="#BCF96A" />
          <path d="M 310 280 L 308 L 302 L 308 L 310 286 L 312 L 318 L 312 Z" fill="#BCF96A" />
          <circle cx="130" cy="80" r="4" fill="#BCF96A" />
          <circle cx="260" cy="210" r="3" fill="#A3E635" />
          <circle cx="360" cy="120" r="4" fill="#BCF96A" />
        </svg>

        {/* Bottom-Right Primary Green Dotted Arrow */}
        <svg className="absolute bottom-4 right-0 w-80 lg:w-96 h-[340px] pointer-events-none opacity-90" viewBox="0 0 360 340" fill="none">
          <path
            d="M 330 70 C 230 150 50 170 120 300"
            stroke="#BCF96A"
            strokeWidth="2.5"
            strokeDasharray="6 7"
            strokeLinecap="round"
          />
          <path d="M 130 290 L 120 300 L 111 292 Z" fill="#BCF96A" />

          <path
            d="M 300 180 C 220 220 160 240 50 210"
            stroke="#84CC16"
            strokeWidth="1.8"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <path d="M 60 202 L 50 210 L 58 218 Z" fill="#84CC16" />

          <path d="M 180 170 L 177 L 168 L 177 L 180 180 L 183 L 192 L 183 Z" fill="#BCF96A" />
          <circle cx="260" cy="120" r="3.5" fill="#BCF96A" />
          <circle cx="80" cy="270" r="4" fill="#BCF96A" />
        </svg>
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
          className="absolute top-[14%] right-[4%] xl:right-[8%] w-[230px] lg:w-[285px] xl:w-[300px] drop-shadow-[0_12px_25px_rgba(188,249,106,0.5)] z-10"
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
          className="absolute top-[48%] right-[2%] xl:right-[6%] w-[230px] lg:w-[285px] xl:w-[300px] drop-shadow-[0_12px_25px_rgba(188,249,106,0.5)] z-10"
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
            className="flex items-center justify-center gap-4 mb-7 flex-wrap"
          >
            <span className="text-gray-500 text-[14px] md:text-[15px] font-medium">
              Official Partners:
            </span>

            <div className="flex items-center gap-2">
              <Image
                src="/logos/meta.svg"
                alt="Meta"
                width={85}
                height={22}
                className="h-4 w-auto object-contain"
              />
              <Image
                src="/logos/tiktok-shop.svg"
                alt="Tiktok Shop"
                width={95}
                height={22}
                className="h-5 w-auto object-contain"
              />
              <Image
                src="/logos/youtube.svg"
                alt="Youtube Shorts"
                width={95}
                height={22}
                className="h-4 w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="relative md:text-[48px] xl:text-[52px] text-[30px] font-semibold tracking-tighter text-black leading-[1.12] mb-7 max-w-4xl mx-auto"
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
              href="/book-a-meeting"
              className="mb-6 inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Book a meeting
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
            className="relative w-full max-w-5xl mx-auto"
          >
            <Image
              src="/home-banner.jpg"
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
