"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type TabType = "UK Creators" | "USA Creators";

const content = {
  "UK Creators": {
    badge: "UK REGION",
    title: "Access UK Creators",
    description:
      "Tap into our exclusive network of top-performing TikTok Shop creators across the United Kingdom. Ready to scale your brand with authentic local content without the operational headache.",
    buttonText: "Get my free growth plan",
    image: "/creators/uk-region.png",
  },
  "USA Creators": {
    badge: "USA REGION",
    title: "Access USA Creators",
    description:
      "Reach massive audiences with our hand-picked American TikTok creators. We manage the entire process from seeding to final delivery, ensuring brand safety and maximum ROI.",
    buttonText: "Get my free growth plan",
    image: "/creators/us-region.png",
  },
};

export default function UkUsaCreators() {
  const [activeTab, setActiveTab] = useState<TabType>("UK Creators");

  return (
    <section className="pt-14 md:pt-18 pb-14 md:pb-18 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
            Meet Your Creator Content Agency
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
            Tired of logging into the Seller Center, checking compliance
            strikes, mapping inventory levels, and reviewing creator messages?
            We take the entire operations checklist off your plate.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#111111] rounded-full p-1.5 inline-flex items-center gap-1 shadow-sm">
            {(Object.keys(content) as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-2.5 rounded-full text-[14px] md:text-[15px] font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-white rounded-full"
                    style={{ zIndex: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Card Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#F6FED9]/80 rounded-[32px] p-8 md:p-12 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center"
              >
                {/* Left: Text */}
                <div className="flex flex-col items-start order-2 md:order-1">
                  <div className="bg-[#BCF96A] text-black px-4 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase mb-8">
                    {content[activeTab].badge}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6 leading-[1.1]">
                    {content[activeTab].title}
                  </h3>
                  
                  <p className="text-[#4B5563] text-[16px] md:text-[17px] leading-relaxed mb-10">
                    {content[activeTab].description}
                  </p>
                  
                  <button className="bg-black hover:bg-gray-900 text-white px-7 py-3.5 rounded-full text-[15px] font-semibold transition-all inline-flex items-center gap-2">
                    {content[activeTab].buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right: Unique Image Presentation */}
                <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center order-1 md:order-2">
                  {/* Decorative glowing blobs */}
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#BCF96A]/40 via-transparent to-blue-400/20 rounded-full blur-3xl z-0"
                  />
                  
                  {/* Main Image Container */}
                  <motion.div
                    animate={{ y: [-12, 12, -12] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full max-w-[90%] md:max-w-[85%] aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white/80 bg-white/50 backdrop-blur-sm z-10 group"
                  >
                    <Image
                      src={content[activeTab].image}
                      alt={content[activeTab].title}
                      fill
                      className="object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>

                  {/* Floating Badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-8 md:top-12 -right-2 md:right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full shadow-xl border border-white/50 z-20 flex items-center gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#BCF96A] shadow-[0_0_8px_#BCF96A] animate-pulse" />
                    <span className="text-[11px] md:text-[12px] font-black text-black uppercase tracking-wider">
                      {activeTab === "UK Creators" ? "UK Verified" : "USA Verified"}
                    </span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-12 md:bottom-16 -left-2 md:left-4 bg-[#111] px-5 py-3 rounded-full shadow-xl z-20 flex items-center gap-2"
                  >
                    <span className="text-[13px] md:text-[14px] font-bold text-white tracking-wide">Top 1% Creators</span>
                    <span className="text-yellow-400 text-lg">✨</span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
