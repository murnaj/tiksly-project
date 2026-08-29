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

        <div className="relative w-full rounded-[32px] pt-12 md:pt-20 px-4 md:px-8 shadow-sm flex flex-col items-center" style={{ background: 'radial-gradient(ellipse at center, #FFFFFF 0%, #F0F4FF 50%, #E0E7FF 100%)' }}>
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
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[120%] md:w-full h-full flex items-center justify-center">
                  <WorldMapSvg />
               </div>
            </div>

            {/* Map Pins */}
            {RegionsData().map((region, i) => {
              // Map coordinates lookup - Spread out to prevent clustering/overlap
              const coords: Record<string, { top: string; left: string }> = {
                "United States": { top: "35%", left: "22%" },
                "Canada": { top: "20%", left: "20%" },
                "Mexico": { top: "45%", left: "18%" },
                "Brazil": { top: "65%", left: "30%" },
                
                "United Kingdom": { top: "22%", left: "46%" },
                "Ireland": { top: "18%", left: "42%" },
                "France": { top: "32%", left: "44%" },
                "Spain": { top: "42%", left: "41%" },
                "Germany": { top: "25%", left: "51%" },
                "Netherlands": { top: "18%", left: "54%" },
                "Belgium": { top: "28%", left: "48%" },
                "Italy": { top: "38%", left: "53%" },
                "Poland": { top: "24%", left: "58%" },
                
                "Singapore": { top: "65%", left: "72%" },
                "Malaysia": { top: "55%", left: "70%" },
                "Thailand": { top: "48%", left: "73%" },
                "Vietnam": { top: "52%", left: "78%" },
                "Philippines": { top: "60%", left: "84%" },
                "Indonesia": { top: "72%", left: "78%" },
                "Japan": { top: "35%", left: "88%" },
                "Australia": { top: "75%", left: "85%" },
              };

              // Fallback deterministic coordinate based on name length/chars if not in lookup
              let hash = 0;
              for (let j = 0; j < region.name.length; j++) {
                hash = region.name.charCodeAt(j) + ((hash << 5) - hash);
              }
              const absHash = Math.abs(hash);
              const position = coords[region.name] || {
                top: `${(absHash % 40) + 20}%`,
                left: `${((absHash >> 2) % 60) + 20}%`,
              };

              return (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0], 
                    scale: [0, 1, 1, 0], 
                    y: [20, 0, 0, 20] 
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    delay: i * 0.4, 
                    ease: "easeInOut" 
                  }}
                  className="absolute flex flex-col items-center group z-10"
                  style={{ top: position.top, left: position.left }}
                >
                  <div className="relative w-8 h-10 md:w-10 md:h-12 drop-shadow-lg">
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
                    <div className="absolute top-[3px] left-[3px] md:top-[4px] md:left-[4px] w-[26px] h-[26px] md:w-[32px] md:h-[32px] rounded-full overflow-hidden bg-gray-100">
                      <Image
                        src={region.icon}
                        alt={region.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
