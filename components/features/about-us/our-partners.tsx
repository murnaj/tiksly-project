"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partnerLogos = [
  {
    name: "AuthorityNode",
    src: "/about-us/our-partners/authority-node-1.webp",
    width: 140,
    height: 35,
    floatDuration: 3.2,
    floatDelay: 0.1,
    yRange: [-4, 4],
  },
  {
    name: "ProfileSpecialist",
    src: "/about-us/our-partners/2.webp",
    width: 150,
    height: 35,
    floatDuration: 3.5,
    floatDelay: 0.3,
    yRange: [4, -4],
  },
  {
    name: "SEMCOPY",
    src: "/about-us/our-partners/semcopy-3.webp",
    width: 130,
    height: 35,
    floatDuration: 2.9,
    floatDelay: 0.5,
    yRange: [-3, 3],
  },
  {
    name: "Reegrm",
    src: "/about-us/our-partners/reeram-4.webp",
    width: 100,
    height: 30,
    floatDuration: 3.6,
    floatDelay: 0.2,
    yRange: [3, -3],
  },
  {
    name: "DigitalBucks",
    src: "/about-us/our-partners/digital-buks-5.webp",
    width: 130,
    height: 35,
    floatDuration: 3.1,
    floatDelay: 0.4,
    yRange: [-5, 5],
  },
  {
    name: "LoadBasket",
    src: "/about-us/our-partners/load-basket-6.webp",
    width: 140,
    height: 35,
    floatDuration: 3.4,
    floatDelay: 0.6,
    yRange: [5, -5],
  },
];

export default function OurPartners() {
  const displayLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#F6FED9] to-white w-full overflow-hidden pb-14 md:pb-18">
      <div className="text-center mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
          Our Partners
        </h2>
        <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
          Tiksly isn&apos;t just a service provider. We&apos;re a growth partner
          for ambitious brands that want to win.
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
            {displayLogos.map((logo, idx) => (
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
                <div className="relative h-8 md:h-10 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain w-auto h-full max-h-10"
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
            {displayLogos.map((logo, idx) => (
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
                <div className="relative h-8 md:h-10 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain w-auto h-full max-h-10"
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
