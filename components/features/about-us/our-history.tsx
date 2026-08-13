"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const historyData = [
  {
    year: "2022",
    title: "Launch of Reearm",
    description: "After years of dedication, we officially launched Reearm, our first agency specializing in SEO, eBay, Amazon, and OnBuy. A team of passionate young minds came together, turning expertise into a full-scale service.",
    image: "/about-us/our-history/1.webp"
  },
  {
    year: "2023",
    title: "Recognizing the TikTok Shop Wave",
    description: "We identified TikTok Shop as the next big player in eCommerce. Seeing its potential to rival major marketplaces, we pivoted our focus, preparing for an expansion into this fast-growing space.",
    image: "/about-us/our-history/2.webp"
  },
  {
    year: "2024",
    title: "Birth of Tiksly",
    description: "Driven by vision and experience, we launched Tiksly, assembling a powerhouse team of 20+ professionals dedicated to scaling brands and managing high-performing TikTok Shop accounts globally.",
    image: "/about-us/our-history/3.webp"
  },
  {
    year: "2025",
    title: "Global Expansion & Scaling",
    description: "We expanded our reach to international markets, managing over 50+ major brands and establishing Tiksly as a premier official partner for TikTok Shop scaling and operations.",
    image: "/about-us/our-history/4.webp"
  },
  {
    year: "2026",
    title: "Today & Beyond",
    description: "Tiksly continues to push boundaries, driving success for brands worldwide. And this is just the beginning—our journey of growth, innovation, and excellence is far from over.",
    image: "/about-us/our-history/5.png"
  }
];

export default function OurHistory() {
  const [activeYear, setActiveYear] = useState(historyData[0].year);
  
  const activeItem = historyData.find(item => item.year === activeYear) || historyData[0];

  return (
    <section className="bg-white pb-16 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950">
            Our History
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 md:mb-20">
          <div className="flex bg-[#111111] rounded-full p-1.5 md:p-2 overflow-x-auto max-w-full no-scrollbar border border-white/5">
            {historyData.map((item) => {
              const isActive = activeYear === item.year;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={cn(
                    "relative px-6 md:px-10 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer",
                    isActive ? "text-black" : "text-neutral-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabHistory"
                      className="absolute inset-0 bg-white rounded-full ring-2 ring-white ring-offset-2 ring-offset-black shadow-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.year}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Section with Animation */}
        <div className="max-w-6xl mx-auto relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.year}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Left Column: Text */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                  <span className="text-zinc-500 mr-2">{activeItem.year} —</span> 
                  {activeItem.title}
                </h3>
                <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="order-1 lg:order-2">
                <div className="relative w-full aspect-4/3 rounded-[2rem] overflow-hidden bg-zinc-100 shadow-xs border border-zinc-200/50 p-2 md:p-3">
                  <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-white">
                    <Image
                      src={activeItem.image}
                      alt={`${activeItem.year} - ${activeItem.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
