"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabType = "UK Region" | "USA Region";

const images = {
  "UK Region": "/creators/uk-region.png",
  "USA Region": "/creators/us-region.png",
};

export default function UkUsaCreators() {
  const [activeTab, setActiveTab] = useState<TabType>("UK Region");

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Simple Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Meet Your Creator Content Agency
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[18px]">
            We handle the entire creator operations checklist so you can focus on growth.
          </p>
        </div>

        {/* Simple Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {(Object.keys(images) as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-black text-white border-2 border-black"
                  : "bg-white text-[#475569] border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm"
              }`}
            >
              {tab === "UK Region" ? "UK Creators" : "USA Creators"}
            </button>
          ))}
        </div>

        {/* Image Showcase Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-[32px] md:rounded-[40px] p-4 md:p-8 border border-gray-200/60 shadow-sm flex items-center justify-center min-h-[400px] md:min-h-[600px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Image Wrapper for proper scaling */}
                <div className="relative w-full max-w-[900px] aspect-[16/10]">
                  <Image
                    src={images[activeTab]}
                    alt={`${activeTab} dashboard`}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
