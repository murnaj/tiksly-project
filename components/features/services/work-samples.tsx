"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const images = [
  { src: "/new-hero.webp", alt: "Work Sample 1" },
  { src: "/new-hero.webp", alt: "Work Sample 2" },
  { src: "/new-hero.webp", alt: "Work Sample 3" },
  { src: "/new-hero.webp", alt: "Work Sample 4" },
  { src: "/new-hero.webp", alt: "Work Sample 5" },
  { src: "/new-hero.webp", alt: "Work Sample 6" },
];

const marqueeImages = [...images, ...images];

export default function WorkSamples() {
  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] 2xl:text-[52px] font-black uppercase tracking-tighter text-black leading-[1.05]">
              Our Work{" "}
              <span className="inline-flex items-center bg-[#BCF96A] text-black rounded-full px-4 py-1 font-black">
                Samples
              </span>
            </h2>
            <p className="text-gray-500 text-[15px] mt-4 max-w-lg mx-auto leading-relaxed">
              Real campaigns, real results. A glimpse of what we&apos;ve built for brands like yours.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Full-width marquee */}
      <div className="relative w-full overflow-hidden mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-r from-[#F9F9F9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-linear-to-l from-[#F9F9F9] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 md:gap-5 w-max"
        >
          {marqueeImages.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[280px] md:w-[380px] lg:w-[440px] h-[190px] md:h-[250px] lg:h-[290px] rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] bg-white"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="440px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
