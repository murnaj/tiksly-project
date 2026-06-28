"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    name: "Zedge",
    src: "/logos/Zedge.webp",
    width: 100,
    height: 30,
    floatDuration: 3.2,
    floatDelay: 0.1,
    yRange: [-4, 4],
  },
  {
    name: "Adore Me",
    src: "/logos/Adore-me.webp",
    width: 110,
    height: 30,
    floatDuration: 3.5,
    floatDelay: 0.3,
    yRange: [4, -4],
  },
  {
    name: "Natural Intelligence",
    src: "/logos/Natural-Intelligence.webp",
    width: 140,
    height: 40,
    floatDuration: 2.9,
    floatDelay: 0.5,
    yRange: [-3, 3],
  },
  {
    name: "GoodProtein",
    src: "/logos/GoodProtein.webp",
    width: 120,
    height: 32,
    floatDuration: 3.6,
    floatDelay: 0.2,
    yRange: [3, -3],
  },
  {
    name: "monday.com",
    src: "/logos/monday.com_.webp",
    width: 120,
    height: 30,
    floatDuration: 3.1,
    floatDelay: 0.4,
    yRange: [-5, 5],
  },
  {
    name: "Udemy",
    src: "/logos/Udemy.webp",
    width: 85,
    height: 30,
    floatDuration: 3.4,
    floatDelay: 0.6,
    yRange: [5, -5],
  },
  {
    name: "Perplexity",
    src: "/logos/Perplexity.webp",
    width: 115,
    height: 32,
    floatDuration: 3.0,
    floatDelay: 0.2,
    yRange: [-4, 4],
  },
];

export default function BrandLogos() {
  return (
    <section className="w-full bg-white pb-4 border-b border-gray-50 overflow-hidden">
      {/* Subtitle */}
      <div className="container mx-auto  mb-10">
        <p className="text-center text-gray-500 text-sm font-medium tracking-wide">
          Trusted by 22,000+ brands worldwide
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient Mask Overlays (Left/Right) for premium fade effect */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" /> */}

        {/* Marquee Row */}
        <div className="flex flex-nowrap w-max">
          {/* First loop of logos */}
          <motion.div
            className="flex items-center gap-16 md:gap-24 flex-nowrap shrink-0 pr-16 md:pr-24"
            animate={{ x: [0, "-100%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {logos.map((logo, idx) => (
              <motion.div
                key={`${logo.name}-loop1-${idx}`}
                className="relative flex items-center justify-center shrink-0 pointer-events-auto"
                animate={{
                  y: logo.yRange,
                }}
                transition={{
                  duration: logo.floatDuration,
                  delay: logo.floatDelay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <div className="relative h-6 md:h-7 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain w-auto h-full max-h-7"
                    priority
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second loop of logos (identical duplicate for seamless scrolling) */}
          <motion.div
            className="flex items-center gap-16 md:gap-24 flex-nowrap shrink-0 pr-16 md:pr-24"
            animate={{ x: [0, "-100%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {logos.map((logo, idx) => (
              <motion.div
                key={`${logo.name}-loop2-${idx}`}
                className="relative flex items-center justify-center shrink-0 pointer-events-auto"
                animate={{
                  y: logo.yRange,
                }}
                transition={{
                  duration: logo.floatDuration,
                  delay: logo.floatDelay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <div className="relative h-6 md:h-7 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain w-auto h-full max-h-7"
                    priority
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
