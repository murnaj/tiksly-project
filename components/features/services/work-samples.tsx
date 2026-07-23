"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

interface WorkSample {
  image: string;
  avatar: string;
  brand: string;
  brandColor: string;
  tag: string;
  name: string;
  location: string;
  flag: string;
}

const SAMPLES: WorkSample[] = [
  { image: "/process/videoframe_1.png", avatar: "/Alexis_California.webp", brand: "Dream With Us", brandColor: "bg-emerald-100 text-emerald-700", tag: "Testimonial", name: "Alexis", location: "Adelaide", flag: "🇦🇺" },
  { image: "/process/videoframe_2.png", avatar: "/josh.webp", brand: "Mini Melts", brandColor: "bg-purple-100 text-purple-700", tag: "Meta Ad", name: "Josh", location: "Orlando", flag: "🇺🇸" },
  { image: "/process/videoframe_3.png", avatar: "/Chelsea.webp", brand: "Hello Eve", brandColor: "bg-rose-100 text-rose-700", tag: "B-roll", name: "Jessica", location: "London", flag: "🇬🇧" },
  { image: "/process/videoframe_4.png", avatar: "/Brie_Tennessee.webp", brand: "Waterdrop", brandColor: "bg-blue-100 text-blue-700", tag: "Unboxing", name: "Brie", location: "Miami", flag: "🇺🇸" },
  { image: "/process/videoframe_5.png", avatar: "/Jonah_Nebraska.webp", brand: "Moonboon", brandColor: "bg-amber-100 text-amber-800", tag: "Testimonial", name: "Jonah", location: "Montreal", flag: "🇨🇦" },
  { image: "/process/videoframe_6.png", avatar: "/Alexis_California.webp", brand: "Shape Republic", brandColor: "bg-orange-100 text-orange-700", tag: "Meta Ad", name: "Alexis", location: "Adelaide", flag: "🇦🇺" },
];

const DISPLAY_SAMPLES = [...SAMPLES, ...SAMPLES];

export default function WorkSamples() {
  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-12 text-center"
        >
          <p className="text-[13px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] 2xl:text-[52px] font-black uppercase tracking-tighter text-black leading-[1.05]">
            Our Work{" "}
            <span className="inline-flex items-center bg-[#BCF96A] text-black rounded-full px-4 py-1 font-black">
              Samples
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] mt-4 max-w-lg mx-auto leading-relaxed">
            Real creator videos, real results. A glimpse of what we&apos;ve produced for brands like yours.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll row of video cards */}
      <div className="relative w-full overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-5 px-4 md:px-8 w-max pb-2">
          {DISPLAY_SAMPLES.map((sample, i) => (
            <div
              key={`${sample.brand}-${i}`}
              className={cn(
                "relative shrink-0 w-[200px] md:w-[230px] rounded-3xl p-2.5 bg-white border border-gray-100",
                "shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]",
                "hover:-translate-y-1.5 transition-all duration-300"
              )}
            >
              {/* Video/image area */}
              <div className="relative aspect-9/14 w-full overflow-hidden rounded-[1.25rem] bg-slate-900">
                <Image
                  src={sample.image}
                  alt={`${sample.brand} - ${sample.tag}`}
                  fill
                  className="object-cover"
                  sizes="230px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-black/10 z-10" />

                {/* Top-left brand badge */}
                <div className="absolute top-2.5 left-2.5 bg-white px-2 py-0.5 rounded-full flex items-center gap-1 z-20">
                  <div className={cn("w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-black uppercase shrink-0", sample.brandColor)}>
                    {sample.brand.charAt(0)}
                  </div>
                  <span className="text-[9px] font-bold text-black tracking-tight whitespace-nowrap">
                    {sample.brand}
                  </span>
                </div>

                {/* Bottom-left tag */}
                <div className="absolute bottom-2.5 left-2.5 bg-white/95 px-2.5 py-1 rounded-[6px] z-20">
                  <span className="text-[8px] font-extrabold text-black tracking-tight uppercase whitespace-nowrap">
                    {sample.tag}
                  </span>
                </div>
              </div>

              {/* Profile row */}
              <div className="flex items-center gap-2 pt-3 pb-0.5 px-1 text-left">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-100 relative bg-slate-50 shrink-0">
                  <Image src={sample.avatar} alt={sample.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[12px] font-bold text-black leading-none truncate">
                    {sample.name}
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-[9px] text-gray-400 font-semibold leading-none">
                    <span className="truncate max-w-[90px]">{sample.location}</span>
                    <span className="shrink-0">{sample.flag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
