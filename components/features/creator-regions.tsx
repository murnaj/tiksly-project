"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const regions = [
  { name: "United States", icon: "/flags/usa.jpg" },
  { name: "United Kingdom", icon: "/flags/uk.jpg" },
  { name: "Belgium", icon: "/flags/belgium.jpg" },
  { name: "Brazil", icon: "/flags/brazil.jpg" },
  { name: "France", icon: "/flags/france.jpg" },
  { name: "Germany", icon: "/flags/germany.jpg" },
  { name: "Indonesia", icon: "/flags/indonesia.jpg" },
  { name: "Ireland", icon: "/flags/ireland.jpg" },
  { name: "Italy", icon: "/flags/italy.jpg" },
  { name: "Japan", icon: "/flags/japan.jpg" },
  { name: "Malaysia", icon: "/flags/malaysia.jpg" },
  { name: "Mexico", icon: "/flags/mexio.jpg" },
  { name: "Netherlands", icon: "/flags/netherland.jpg" },
  { name: "Philippines", icon: "/flags/philippines.jpg" },
  { name: "Poland", icon: "/flags/poland.jpg" },
  { name: "Singapore", icon: "/flags/singapore.jpg" },
  { name: "Spain", icon: "/flags/spain.jpg" },
  { name: "Thailand", icon: "/flags/thailand.jpg" },
  { name: "Vietnam", icon: "/flags/vietnam.jpg" },
];

const marqueeItems = [...regions];

export default function CreatorRegions() {
  return (
    <section className="bg-white py-10 w-full overflow-hidden border-b border-gray-50/50">
      {/* Title */}
      <div className="container mx-auto mb-6 text-center">
        <span className="text-[#212120]/80 text-[15px] font-semibold tracking-tight">
          Making brands money across:
        </span>
      </div>

      {/* Infinite Marquee Container */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative w-full overflow-hidden py-2"
      >

        {/* Marquee Row */}
        <div className="flex flex-nowrap w-max">
          {/* First loop of regions */}
          <motion.div
            className="flex items-center gap-3 md:gap-4 flex-nowrap shrink-0 pr-3 md:pr-4"
            animate={{ x: [0, "-100%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((region, idx) => {
              return (
                <motion.div
                  key={`${region.name}-loop1-${idx}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 px-5 py-3 bg-[#F9F9F9]/80 hover:bg-white rounded-full border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 select-none"
                >
                  <Image
                    src={region.icon}
                    alt={region.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="text-[14px] md:text-[15px] font-semibold text-black tracking-tight leading-none">
                    {region.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Second loop of regions (identical duplicate for seamless scrolling) */}
          <motion.div
            className="flex items-center gap-3 md:gap-4 flex-nowrap shrink-0 pr-3 md:pr-4"
            animate={{ x: [0, "-100%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((region, idx) => {
              return (
                <motion.div
                  key={`${region.name}-loop2-${idx}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 px-5 py-3 bg-[#F9F9F9]/80 hover:bg-white rounded-full border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 select-none"
                >
                  <Image
                    src={region.icon}
                    alt={region.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="text-[14px] md:text-[15px] font-semibold text-black tracking-tight leading-none">
                    {region.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
