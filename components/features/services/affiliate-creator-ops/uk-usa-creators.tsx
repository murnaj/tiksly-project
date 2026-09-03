"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabType = "UK Region" | "USA Region";

const images = {
  "UK Region": "/creators/uk-agent.png",
  "USA Region": "/creators/us-agent.png",
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

        {/* Tabs with Country Flags */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {/* UK Tab */}
          <button
            onClick={() => setActiveTab("UK Region")}
            className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "UK Region"
                ? "bg-black text-white border-2 border-black shadow-md"
                : "bg-white text-[#475569] border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm"
            }`}
          >
            <svg
              className="w-5 h-5 rounded-full overflow-hidden shrink-0 shadow-xs"
              viewBox="0 0 60 30"
            >
              <clipPath id="uk-flag-agency-tab">
                <path d="M0,0 v30 h60 v-30 z" />
              </clipPath>
              <clipPath id="uk-t-agency-tab">
                <path d="M30,15 h30 v15 z M30,15 h-30 v-15 z M30,15 h-30 v15 z M30,15 h30 v-15 z" />
              </clipPath>
              <g clipPath="url(#uk-flag-agency-tab)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path
                  d="M0,0 L60,30 M60,0 L0,30"
                  stroke="#fff"
                  strokeWidth="6"
                />
                <path
                  d="M0,0 L60,30 M60,0 L0,30"
                  clipPath="url(#uk-t-agency-tab)"
                  stroke="#C8102E"
                  strokeWidth="4"
                />
                <path
                  d="M30,0 v30 M0,15 h60"
                  stroke="#fff"
                  strokeWidth="10"
                />
                <path
                  d="M30,0 v30 M0,15 h60"
                  stroke="#C8102E"
                  strokeWidth="6"
                />
              </g>
            </svg>
            <span>UK Creators</span>
          </button>

          {/* USA Tab */}
          <button
            onClick={() => setActiveTab("USA Region")}
            className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "USA Region"
                ? "bg-black text-white border-2 border-black shadow-md"
                : "bg-white text-[#475569] border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm"
            }`}
          >
            <svg
              className="w-5 h-5 rounded-full overflow-hidden shrink-0 shadow-xs"
              viewBox="0 0 60 30"
            >
              <rect width="60" height="30" fill="#B22234" />
              <path
                d="M0,4.6h60M0,11.5h60M0,18.5h60M0,25.4h60"
                stroke="#fff"
                strokeWidth="2.3"
              />
              <rect width="24" height="16.2" fill="#3C3B6E" />
            </svg>
            <span>USA Creators</span>
          </button>
        </div>

        {/* Image Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50/80 rounded-[32px] md:rounded-[40px] p-4 sm:p-6 md:p-10 border border-gray-200/60 shadow-sm flex items-center justify-center min-h-[380px] md:min-h-[560px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Image Wrapper for proper scaling */}
                <div className="relative w-full max-w-[720px] aspect-[667/587]">
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
