"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabType = "UK Region" | "USA Region";

const images = {
  "UK Region": "/creators/uk-agent.png",
  "USA Region": "/creators/us-agent.png",
};

const UK_PROMPTS = [
  "Lock in Sophie's hook style for all UK briefs",
  "Find top UK beauty creators with >8% engagement",
  "Generate 5 UGC reaction scripts for TikTok Shop UK",
  "Schedule sample seeding for 20 verified UK creators",
];

const USA_PROMPTS = [
  "Lock in Ally's hook style for all future briefs",
  "Find top US TikTok Shop creators for vitamin launch",
  "Analyze best performing hooks by CTR across US Meta",
  "Scale UGC ad spend on Marcus's product demo",
];

export default function UkUsaCreators() {
  const [activeTab, setActiveTab] = useState<TabType>("UK Region");
  const [promptIndex, setPromptIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [customInput, setCustomInput] = useState("");

  const prompts = activeTab === "UK Region" ? UK_PROMPTS : USA_PROMPTS;

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setPromptIndex(0);
    setDisplayText("");
    setIsDeleting(false);
    setCustomInput("");
    setIsUserTyping(false);
  };

  // Live typewriter effect
  useEffect(() => {
    if (isUserTyping) return;

    let timeout: NodeJS.Timeout;
    const currentFullText = prompts[promptIndex % prompts.length];

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 45 + Math.random() * 35);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, 20);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setPromptIndex((prev) => (prev + 1) % prompts.length);
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, promptIndex, prompts, isUserTyping]);

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
        <div className="max-w-4xl mx-auto relative">
          {/* Primary Color Gradient Halo / Glow */}
          <div className="absolute -inset-4 sm:-inset-8 md:-inset-12 bg-gradient-to-tr from-[#BCF96A]/40 via-[#84CC16]/20 to-[#BCF96A]/30 rounded-[48px] blur-3xl pointer-events-none opacity-80" />
          
          <div className="relative bg-gradient-to-b from-white via-[#F6FED9]/40 to-[#BCF96A]/10 rounded-[32px] md:rounded-[40px] p-4 sm:p-6 md:p-10 border border-[#BCF96A]/40 shadow-[0_20px_60px_-15px_rgba(188,249,106,0.35)] flex items-center justify-center min-h-[380px] md:min-h-[560px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Image Wrapper with Relative Coordinates for Typing Input */}
                <div className="relative w-full max-w-[720px] aspect-[667/587] rounded-2xl overflow-hidden">
                  <Image
                    src={images[activeTab]}
                    alt={`${activeTab} dashboard`}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />

                  {/* Animated / Live Typing Input Overlay */}
                  <div className="absolute bottom-[5.8%] left-[36.5%] right-[2.6%] h-[7.8%] min-h-[32px] sm:min-h-[38px] md:min-h-[44px] bg-white rounded-xl sm:rounded-2xl border border-gray-200/90 shadow-md flex items-center px-2 sm:px-3.5 gap-2 z-20">
                    <button
                      type="button"
                      aria-label="Add question or prompt"
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <span className="text-xs font-bold leading-none mb-0.5">+</span>
                    </button>

                    <div className="flex-1 min-w-0 flex items-center">
                      <input
                        type="text"
                        value={isUserTyping ? customInput : displayText}
                        onChange={(e) => {
                          setIsUserTyping(true);
                          setCustomInput(e.target.value);
                        }}
                        onFocus={() => {
                          setIsUserTyping(true);
                          setCustomInput(displayText);
                        }}
                        onBlur={() => {
                          if (!customInput.trim()) {
                            setIsUserTyping(false);
                          }
                        }}
                        placeholder="Add question or prompt..."
                        className="w-full bg-transparent border-none outline-none text-[10px] sm:text-[12px] md:text-[13px] text-gray-800 font-medium placeholder-gray-400 p-0"
                      />
                      {!isUserTyping && (
                        <span className="inline-block w-[1.5px] h-3.5 sm:h-4 bg-[#BCF96A] animate-pulse ml-0.5 shrink-0" />
                      )}
                    </div>

                    <button
                      type="button"
                      aria-label="Send prompt"
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-gray-100 hover:bg-[#BCF96A] text-gray-700 hover:text-black transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-xs"
                    >
                      <span className="text-xs font-bold leading-none">→</span>
                    </button>
                  </div>

                  {/* Subtext Overlay */}
                  <div className="absolute bottom-[1.6%] left-[36.5%] right-[2.6%] text-center pointer-events-none z-20">
                    <p className="text-[8px] sm:text-[9.5px] md:text-[10px] text-gray-400 font-medium">
                      Tiksly AI is in beta, verify results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
