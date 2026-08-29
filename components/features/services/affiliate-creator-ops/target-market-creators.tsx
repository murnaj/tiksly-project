"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RegionsData from "@/data/regions";
import { WorldMapSvg } from "@/components/features/common/world-map";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animate one by one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  },
};

export default function TargetMarketCreators() {
  const regions = RegionsData();

  return (
    <section className="w-full bg-white pb-14 md:pb-18 overflow-hidden relative">
      <div className="container md:max-w-6xl">
        <div className="text-center mx-auto mb-10 px-2">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-4">
            Find Creators For Your Target Market
          </h2>
        </div>

        <div className="relative w-full rounded-[32px] bg-gradient-to-b from-[#F2F5FF] to-[#EAEFFF] pt-12 md:pt-20 px-4 md:px-8 shadow-sm flex flex-col items-center">
          {/* Decorative Background (Dotted pattern) */}
          <div className="absolute inset-0 overflow-hidden rounded-[32px] opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #9CA3AF 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            ></div>
          </div>

          {/* Decorative Map Area with Floating Pins */}
          <div className="relative z-0 w-full max-w-4xl h-[280px] md:h-[400px] mb-8 md:mb-12 mx-auto">
            {/* Actual World Map SVG */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.25]">
               <div className="w-[120%] md:w-full h-full flex items-center justify-center">
                  <WorldMapSvg />
               </div>
            </div>

            {/* Map Pins */}
            {[
              {
                name: "Canada",
                icon: "/flags/canada.jpg",
                top: "20%",
                left: "20%",
                delay: 0,
              },
              {
                name: "USA",
                icon: "/flags/usa.jpg",
                top: "35%",
                left: "22%",
                delay: 0.2,
              },
              {
                name: "UK",
                icon: "/flags/uk.jpg",
                top: "25%",
                left: "48%",
                delay: 0.4,
              },
              {
                name: "France",
                icon: "/flags/france.jpg",
                top: "32%",
                left: "49%",
                delay: 0.5,
              },
              {
                name: "Germany",
                icon: "/flags/germany.jpg",
                top: "28%",
                left: "53%",
                delay: 0.6,
              },
              {
                name: "Spain",
                icon: "/flags/spain.jpg",
                top: "38%",
                left: "48%",
                delay: 0.7,
              },
              {
                name: "Italy",
                icon: "/flags/italy.jpg",
                top: "35%",
                left: "55%",
                delay: 0.8,
              },
              {
                name: "Australia",
                icon: "/flags/australia.jpg",
                top: "65%",
                left: "80%",
                delay: 0.9,
              },
            ].map((pin, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: pin.delay,
                }}
                className="absolute flex flex-col items-center group cursor-pointer z-10"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="relative w-8 h-10 md:w-10 md:h-12 drop-shadow-lg hover:scale-110 transition-transform origin-bottom">
                  {/* Pin Shape */}
                  <svg
                    viewBox="0 0 40 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-white"
                  >
                    <path
                      d="M20 0C8.954 0 0 8.954 0 20C0 35 20 50 20 50C20 50 40 35 40 20C40 8.954 31.046 0 20 0Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* Flag inside Pin */}
                  <div className="absolute top-[3px] left-[3px] md:top-[4px] md:left-[4px] w-[26px] h-[26px] md:w-[32px] md:h-[32px] rounded-full overflow-hidden">
                    <Image
                      src={pin.icon}
                      alt={pin.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback if flag doesn't exist
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Locations Grid Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-[95%] max-w-5xl bg-white rounded-[24px] p-6 md:p-10 shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-wrap justify-center gap-3 md:gap-4 -mb-12 md:-mb-16"
          >
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 px-3 md:px-4 py-2 md:py-2.5 bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all cursor-default"
              >
                <div className="w-5 h-4 relative overflow-hidden rounded-[2px] shadow-sm">
                  <Image
                    src={region.icon}
                    alt={region.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[12px] md:text-[13px] font-semibold text-black">
                  {region.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Spacer to account for the negative margin of the white card */}
        <div className="h-12 md:h-16"></div>
      </div>
    </section>
  );
}
