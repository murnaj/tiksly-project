"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HlsVideo } from "@/components/features/common/hls-video";

interface AdTypeData {
  id: string;
  tabTitle: string;
  tabBadge: string;
  tabBadgeColor: string;
  tabDescription: string;
  stepNumber: string;
  title: string;
  description: string;
  videoId: string;
  handle: string;
  caption: string;
  points: {
    id: number;
    title: string;
    description: string;
    badgePosition: string;
  }[];
  bestFor: string;
}

const AD_TYPES: AdTypeData[] = [
  {
    id: "spark-ads",
    tabTitle: "Spark Ads",
    tabBadge: "Boost a post",
    tabBadgeColor: "bg-[#DCFCE7] text-[#166534]",
    tabDescription: "Put budget behind a proven organic video",
    stepNumber: "1 — BOOST A PROVEN POST",
    title: "Spark Ads",
    description:
      "Take a real organic video that's already working and put ad budget behind it. It runs from the original handle and stays 100% native.",
    videoId: "ce3082f8b2b1151137c5b9a82aa9b342",
    handle: "@yourbrand",
    caption: "Take the trip. 30% off this week only ✨",
    points: [
      {
        id: 1,
        title: "Runs from your real handle",
        description:
          "The ad posts as your brand (or a creator), not a faceless ad account.",
        badgePosition: "-left-4 top-[25%]",
      },
      {
        id: 2,
        title: "Keeps its real engagement",
        description:
          "All the likes, comments, and shares carry over, so it looks organic and trusted.",
        badgePosition: "-right-4 top-[55%]",
      },
      {
        id: 3,
        title: "Amplifies a winner",
        description:
          "You're scaling content that already converts, not gambling on cold creative.",
        badgePosition: "-left-4 bottom-14",
      },
    ],
    bestFor: "scaling creator or organic videos that are already getting sales.",
  },
  {
    id: "gmv-max",
    tabTitle: "GMV Max",
    tabBadge: "Let AI run it",
    tabBadgeColor: "bg-[#FEF9C3] text-[#854D0E]",
    tabDescription: "TikTok automates the whole campaign",
    stepNumber: "2 — AI AUTOMATED CAMPAIGN",
    title: "GMV Max",
    description:
      "TikTok's AI automatically finds buyers, optimizes bids, and scales budget to maximize Gross Merchandise Value across your product catalog.",
    videoId: "ab807060990361a8baeca01ee02fca85",
    handle: "@tiksly_shop",
    caption: "Trending TikTok Shop find! Grab yours before sell out 🔥",
    points: [
      {
        id: 1,
        title: "AI-driven targeting & bidding",
        description:
          "TikTok optimizes audience reach and bidding strategy automatically in real time.",
        badgePosition: "-left-4 top-[25%]",
      },
      {
        id: 2,
        title: "Automated creative rotation",
        description:
          "Tests different creator videos to find the top performing combinations automatically.",
        badgePosition: "-right-4 top-[55%]",
      },
      {
        id: 3,
        title: "Maximized ROI & GMV",
        description:
          "Designed specifically for e-commerce shops to drive direct sales at scale.",
        badgePosition: "-left-4 bottom-14",
      },
    ],
    bestFor:
      "hands-off scaling when you want TikTok's algorithm to optimize for maximum sales.",
  },
  {
    id: "partnership-ads",
    tabTitle: "Partnership Ads",
    tabBadge: "Post as a creator",
    tabBadgeColor: "bg-[#FCE7F3] text-[#9D174D]",
    tabDescription: "Run ads from a creator's handle",
    stepNumber: "3 — CREATOR HANDLE ADS",
    title: "Partnership Ads",
    description:
      "Run ads directly from an influencer's or creator's TikTok handle to leverage their social proof, trust, and established follower base.",
    videoId: "ced34f0b20b4edf473a0055a73b9d71b",
    handle: "@creator_partner",
    caption: "Honest review of my favorite shop product! Link below 👇",
    points: [
      {
        id: 1,
        title: "Creator handle authorization",
        description:
          "Ads display directly from the creator's username for authentic social proof.",
        badgePosition: "-left-4 top-[25%]",
      },
      {
        id: 2,
        title: "Direct shop integration",
        description:
          "Viewers can click straight to your product page from the creator's ad.",
        badgePosition: "-right-4 top-[55%]",
      },
      {
        id: 3,
        title: "Seamless collaboration",
        description:
          "Easily manage Spark Code permissions and creator partner access.",
        badgePosition: "-left-4 bottom-14",
      },
    ],
    bestFor:
      "leveraging creator authority and driving high-converting influencer campaigns.",
  },
];

export default function AdTypesSection() {
  const [activeTab, setActiveTab] = useState<string>("spark-ads");
  const EASE = [0.22, 1, 0.36, 1] as const;

  const activeData =
    AD_TYPES.find((type) => type.id === activeTab) || AD_TYPES[0];

  return (
    <section className="w-full bg-white pb-14 md:pb-18 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-[12px] md:text-[13px] font-bold tracking-widest uppercase mb-3 block"
          >
            TikTok Shop Ads, Explained
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-3xl sm:text-4xl md:text-[48px] font-black text-black leading-[1.08] tracking-tight mb-4"
          >
            Spark Ads vs GMV Max vs <br className="hidden sm:block" />
            Partnership Ads
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-gray-500 text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed"
          >
            Three ways to run TikTok Shop ads, each with a different job. Here&apos;s
            exactly how each one works and when to use it.
          </motion.p>
        </div>

        {/* 3 Top Cards / Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {AD_TYPES.map((type) => {
            const isSelected = activeTab === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`text-left p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-[#F9FBEA] border-[#BCF96A] shadow-md scale-[1.02]"
                    : "bg-[#F9FAFA] border-gray-100 hover:border-gray-200 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className={`text-[11px] md:text-[12px] font-bold px-3 py-1 rounded-full ${type.tabBadgeColor}`}
                  >
                    {type.tabBadge}
                  </span>
                  <span className="text-black font-extrabold text-[16px] md:text-[18px]">
                    {type.tabTitle}
                  </span>
                </div>
                <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                  {type.tabDescription}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Tab Detailed Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-4"
          >
            {/* Left: Mobile Phone Mockup with Moving Video */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-[260px] sm:w-[280px] md:w-[300px] h-[520px] sm:h-[560px] md:h-[600px] shrink-0">
                {/* Phone Outer Frame */}
                <div className="relative w-full h-full bg-black rounded-[46px] p-3 border-[6px] border-[#1b1c1e] shadow-2xl overflow-hidden flex flex-col">
                  {/* Camera Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center gap-1.5">
                    <div className="w-2.5 h-2.5 bg-[#141414] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full" />
                  </div>

                  {/* Screen Container */}
                  <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-gray-900">
                    {/* Top "For You" Bar */}
                    <div className="absolute top-6 left-0 right-0 z-20 flex justify-center text-white text-[12px] font-bold tracking-wide pointer-events-none drop-shadow">
                      <span>For You</span>
                    </div>

                    {/* Active HLS Video (Moving Video) */}
                    <HlsVideo videoId={activeData.videoId} active={true} />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none z-10" />

                    {/* TikTok Right Action Bar */}
                    <div className="absolute right-3 bottom-24 flex flex-col items-center gap-3.5 text-white z-20">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                          <svg className="w-5 h-5 fill-red-500" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                        <span className="text-[10px] font-bold mt-1">25.3K</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                          </svg>
                        </div>
                        <span className="text-[10px] font-bold mt-1">3.4K</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
                          </svg>
                        </div>
                        <span className="text-[10px] font-bold mt-1">1.2K</span>
                      </div>
                    </div>

                    {/* TikTok Caption */}
                    <div className="absolute left-3 right-16 bottom-20 text-white z-20 text-left">
                      <div className="flex items-center gap-1.5 mb-1">
                        <p className="text-[12px] font-bold drop-shadow">
                          {activeData.handle}
                        </p>
                        <span className="text-[9px] bg-white/30 backdrop-blur-xs px-1.5 py-0.5 rounded text-white font-semibold">
                          Sponsored
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-200 line-clamp-2 drop-shadow">
                        {activeData.caption}
                      </p>
                    </div>

                    {/* Shop Now Button */}
                    <div className="absolute bottom-4 left-3 right-3 z-20">
                      <div className="bg-[#BCF96A] text-black text-[12px] font-extrabold py-2 rounded-xl flex items-center justify-center gap-1.5 shadow-md w-full">
                        <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.89-2-2-2z" />
                        </svg>
                        Shop now
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number Badges around mobile */}
                {activeData.points.map((pt) => (
                  <div
                    key={pt.id}
                    className={`absolute w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#BCF96A] text-black font-extrabold flex items-center justify-center text-[14px] md:text-[15px] z-40 shadow-lg border-2 border-white ${pt.badgePosition}`}
                  >
                    {pt.id}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Detailed Description & Points */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-gray-400 text-[11px] md:text-[12px] font-extrabold tracking-wider uppercase mb-2 block">
                {activeData.stepNumber}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-4">
                {activeData.title}
              </h3>
              <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed mb-8">
                {activeData.description}
              </p>

              {/* Numbered Points */}
              <div className="flex flex-col gap-6 mb-8">
                {activeData.points.map((pt) => (
                  <div key={pt.id} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#BCF96A] text-black font-extrabold flex items-center justify-center text-[13px] shrink-0 mt-0.5">
                      {pt.id}
                    </div>
                    <div>
                      <h4 className="text-black font-bold text-[15px] md:text-[16px] mb-1">
                        {pt.title}
                      </h4>
                      <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Best For Footer Box */}
              <div className="bg-[#F8FBEA] border border-[#E2F89E] p-4 md:p-5 rounded-2xl">
                <p className="text-black text-[13px] md:text-[14px]">
                  <span className="font-extrabold">Best for:</span>{" "}
                  <span className="text-gray-700">{activeData.bestFor}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
