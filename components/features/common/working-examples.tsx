"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WorkingExamples = () => {
  return (
    <div className="pb-14 md:pb-18 bg-gradient-to-b from-white via-[#F6FED9] to-white">
      <div className="text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-6">
          Working Examples
        </h3>
        <p className="text-gray-500 text-[15px] max-w-2xl mx-auto">
          See some of the successful shop verifications and real documents we
          process daily.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        {/* Fade overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div className="flex flex-nowrap w-max">
          {[0, 1].map((loopIdx) => (
            <motion.div
              key={loopIdx}
              className="flex items-center gap-6 md:gap-8 flex-nowrap shrink-0 pr-6 md:pr-8"
              animate={{ x: [0, "-100%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {[
                "/id-cards/left-side-1.png",
                "/id-cards/left-side-2.png",
                "/id-cards/right-side-1.png",
                "/id-cards/right-side-2.png",
              ].map((src, idx) => (
                <div
                  key={`${loopIdx}-${idx}`}
                  className="relative w-[280px] h-[180px] md:w-[320px] md:h-[200px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm shrink-0 bg-white"
                >
                  <Image
                    src={src}
                    alt="Working Example"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingExamples;
