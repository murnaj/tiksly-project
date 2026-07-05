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

const charities = [
  { name: "Edhi Foundation", src: "/about-us/our-partners/edhi-1.webp" },
  { name: "Government Emblem", src: "/about-us/our-partners/govt-2.webp" },
  { name: "Shaukat Khanum", src: "/about-us/our-partners/Shaukat-Khanum-3.webp" },
  { name: "Saylani", src: "/about-us/our-partners/Saylani-4.webp" },
];

export default function OurPartners() {
  return (
    <div className="w-full">
      {/* Top Section: Partners */}
      <section className="w-full bg-[#131313] py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-3 lg:px-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Our Partners
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Tiksly isn&apos;t just a service provider. We&apos;re a growth partner for ambitious brands that want to win.
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
              {partnerLogos.map((logo, idx) => (
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

            {/* Second loop of logos */}
            <motion.div
              className="flex items-center gap-16 md:gap-24 flex-nowrap shrink-0 pr-16 md:pr-24"
              animate={{ x: [0, "-100%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {partnerLogos.map((logo, idx) => (
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

      {/* Bottom Section: Charity */}
      <section className="w-full bg-black py-20 md:py-28 text-center text-white">
        <div className="container mx-auto px-3 lg:px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
            Every month we donate a percentage of company profits to a charity chosen by one of our team.
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-xs md:text-sm mb-16">
            As well as monthly donations, we donate profits of our Swag to Cancer Research and our team regularly takes part in various charitable events.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {charities.map((charity, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl md:rounded-2xl flex items-center justify-center p-6 md:p-8 aspect-4/3 w-full"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={charity.src}
                    alt={`${charity.name} Logo`}
                    width={180}
                    height={100}
                    className="object-cover max-h-full max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
