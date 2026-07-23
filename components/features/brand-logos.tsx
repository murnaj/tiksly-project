"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    name: "canva",
    src: "/logos/canva.svg",
    width: 100,
    height: 30,
    floatDuration: 3.2,
    floatDelay: 0.1,
    yRange: [-4, 4],
  },
  {
    name: "capcut",
    src: "/logos/capcut.svg",
    width: 110,
    height: 30,
    floatDuration: 3.5,
    floatDelay: 0.3,
    yRange: [4, -4],
  },
  {
    name: "chalovelo",
    src: "/logos/chalovelo.svg",
    width: 140,
    height: 40,
    floatDuration: 2.9,
    floatDelay: 0.5,
    yRange: [-3, 3],
  },
  {
    name: "exsivia",
    src: "/logos/exsivia.svg",
    width: 120,
    height: 32,
    floatDuration: 3.6,
    floatDelay: 0.2,
    yRange: [3, -3],
  },
  {
    name: "feedoopet",
    src: "/logos/feedoopet.svg",
    width: 120,
    height: 30,
    floatDuration: 3.1,
    floatDelay: 0.4,
    yRange: [-5, 5],
  },
  {
    name: "magnetopia",
    src: "/logos/magnetopia.svg",
    width: 85,
    height: 30,
    floatDuration: 3.4,
    floatDelay: 0.6,
    yRange: [5, -5],
  },
  {
    name: "medicube",
    src: "/logos/medicube.svg",
    width: 115,
    height: 32,
    floatDuration: 3.0,
    floatDelay: 0.2,
    yRange: [-4, 4],
  },
  {
    name: "skin1004",
    src: "/logos/skin1004.svg",
    width: 115,
    height: 32,
    floatDuration: 3.0,
    floatDelay: 0.2,
    yRange: [-4, 4],
  },
  {
    name: "temu",
    src: "/logos/temu.svg",
    width: 115,
    height: 32,
    floatDuration: 3.0,
    floatDelay: 0.2,
    yRange: [-4, 4],
  },
  {
    name: "terrapaw",
    src: "/logos/terrapaw.svg",
    width: 115,
    height: 32,
    floatDuration: 3.0,
    floatDelay: 0.2,
    yRange: [-4, 4],
  },
  {
    name: "the-gut-gummy",
    src: "/logos/the-gut-gummy.svg",
    width: 115,
    height: 32,
    floatDuration: 3.0,
    floatDelay: 0.2,
    yRange: [-4, 4],
  },
  {
    name: "veet",
    src: "/logos/veet.svg",
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
        <p className="text-[#212120]/80 text-[15px] font-semibold tracking-tight text-center">
         The brands already winning with us
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
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
