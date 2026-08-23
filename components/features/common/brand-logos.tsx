"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandLogosData } from "@/data/brand-logos";

export default function BrandLogos() {
  return (
    <section className="w-full bg-white overflow-hidden pb-14 md:pb-18">
      <div className="container mx-auto mb-10">
        <p className="text-[#212120]/80 text-[15px] font-semibold tracking-tight text-center">
          The brands already winning with us
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="flex flex-nowrap w-max">
          <motion.div
            className="flex items-center gap-16 md:gap-24 flex-nowrap shrink-0 pr-16 md:pr-24"
            animate={{ x: [0, "-100%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {BrandLogosData.map((logo, idx) => (
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

          <motion.div
            className="flex items-center gap-16 md:gap-24 flex-nowrap shrink-0 pr-16 md:pr-24"
            animate={{ x: [0, "-100%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {BrandLogosData.map((logo, idx) => (
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
