"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabType = "UK Region" | "USA Region";

const images = {
  "UK Region": "/creators/uk-region.png",
  "USA Region": "/creators/us-region.png",
};

const UK_PROMPTS = [
  "Find me top UGC creators in London...",
  "Looking for UK based TikTok shop affiliates...",
  "Search beauty influencers in Manchester...",
];

const USA_PROMPTS = [
  "Find me top UGC creators in Los Angeles...",
  "Looking for US based TikTok shop affiliates...",
  "Search beauty influencers in New York...",
];

export default function UkUsaCreators() {
  const [activeTab, setActiveTab] = useState<TabType>("UK Region");
  const [typedText, setTypedText] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prompts = activeTab === "UK Region" ? UK_PROMPTS : USA_PROMPTS;
    const currentPrompt = prompts[promptIndex];

    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (typedText === "") {
        setIsDeleting(false);
        setPromptIndex((prev) => (prev + 1) % prompts.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 30);
      }
    } else {
      if (typedText === currentPrompt) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setTypedText(currentPrompt.slice(0, typedText.length + 1));
        }, 80);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, promptIndex, activeTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setTypedText("");
    setPromptIndex(0);
    setIsDeleting(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Simple Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Meet Your Creator Content Agency
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[18px]">
            We handle the entire creator operations checklist so you can focus
            on growth.
          </p>
        </div>

        {/* Tabs with Country Flags */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {/* UK Tab */}
          <button
            onClick={() => handleTabChange("UK Region")}
            className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "UK Region"
                ? "bg-black text-white border-2 border-black shadow-md scale-105"
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
                <path d="M30,15 h30 v15 z M30,15 h-30 v-15 z M30,15 h-30 v-15 z M30,15 h30 v-15 z" />
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
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
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
            onClick={() => handleTabChange("USA Region")}
            className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[15px] font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "USA Region"
                ? "bg-black text-white border-2 border-black shadow-md scale-105"
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

        {/* Image Showcase Container with Primary Color Gradient */}
        <div className="max-w-5xl mx-auto relative">
          {/* Primary Color Gradient Halo / Glow */}
          <div className="absolute -inset-4 sm:-inset-8 md:-inset-12 bg-gradient-to-tr from-[#BCF96A]/35 via-[#84CC16]/15 to-[#BCF96A]/25 rounded-[48px] blur-3xl pointer-events-none opacity-80" />

          <div className="relative bg-gradient-to-b from-white via-[#F6FED9]/40 to-[#BCF96A]/10 rounded-[32px] md:rounded-[40px] p-4 md:p-8 border border-[#BCF96A]/30 shadow-[0_20px_60px_-15px_rgba(188,249,106,0.3)] flex items-center justify-center min-h-[400px] md:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full flex flex-col items-center justify-center"
              >
                <div className="w-[49%] md:w-[45%] h-[8%] md:h-[6.5%] z-10 flex items-center bg-white/60 backdrop-blur-sm rounded-full md:rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-[#BCF96A]/40 p-3 mb-4">
                  <div className="w-full flex items-center gap-2 md:gap-3 h-full">
                    <span className="text-[#84CC16] hidden sm:flex shrink-0">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </span>
                    <span className="text-gray-800 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base flex-1 truncate">
                      {typedText}
                      <span className="inline-block w-[2px] h-3 md:h-4 lg:h-5 bg-black ml-0.5 md:ml-1 animate-pulse align-middle rounded-full"></span>
                    </span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-[#BCF96A] to-[#84CC16] flex items-center justify-center shrink-0 shadow-sm cursor-pointer hover:scale-105 transition-transform">
                      <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
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
