"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const processTabs = [
  {
    id: "discover",
    label: "Discover",
    title: "DISCOVER",
    description:
      "We tear apart your shop, your product, and your market, then build a plan around your actual numbers instead of a recycled template. No fluff. No guesswork.",
    ctaText: "Get my free growth plan",
    ctaLink: "#",
    image: "/process/discover.png",
  },
  {
    id: "manage",
    label: "Manage",
    title: "MANAGE",
    description:
      "Our team takes over the heavy lifting. Creators, content, ads, and daily ops. You approve, we execute, the shop runs.",
    ctaText: "Get my free growth plan",
    ctaLink: "#",
    image: "/process/manage.png",
  },
  {
    id: "track",
    label: "Track",
    title: "TRACK",
    description:
      "Real dashboards. Real ROAS. Real GMV. You always know exactly what's working and exactly what it's making you.",
    ctaText: "Get my free growth plan",
    ctaLink: "#",
    image: "/process/track.png",
  },
  {
    id: "results",
    label: "Results",
    title: "RESULTS",
    description:
      "Consistent, compounding revenue. The kind that quietly turns TikTok Shop into your number one channel while everyone else is still guessing.",
    ctaText: "Get my free growth plan",
    ctaLink: "#",
    image: "/process/results.png",
  },
];

export default function OurProcess() {
  const [activeTab, setActiveTab] = useState(processTabs[0].id);

  return (
    <section className="w-full bg-white pt-14 md:pt-20 ">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-2">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
            Onboarding Process
          </h2>
        </div>
        {/* Shadcn Tabs Root */}
        <Tabs
          defaultValue={processTabs[0].id}
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full gap-0"
        >
          {/* Tab Selector Bar */}
          <div className="flex justify-center mb-12">
            <TabsList className="bg-black text-white rounded-full py-5 flex gap-0 md:gap-3 w-fit h-auto border-none">
              {processTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-6 py-4 rounded-full text-[12px] md:text-[18px] font-semibold capitalize transition-all duration-300 text-gray-400 hover:text-white data-[state=active]:bg-white! data-[state=active]:text-black! data-[state=active]:border-black! data-[state=active]:shadow-sm cursor-pointer"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content Cards */}
          <div className="relative min-h-[500px] lg:min-h-[450px]">
            <AnimatePresence mode="wait">
              {processTabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <TabsContent
                      key={tab.id}
                      value={tab.id}
                      forceMount
                      className="mt-0 outline-none"
                    >
                      <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#D9D0C1] rounded-[2rem] p-4 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center"
                      >
                        {/* Left Side: Content */}
                        <div className="flex flex-col items-center lg:items-start text-left">
                          <h2 className="text-2xl md:text-3xl lg:text-[40px] 2xl:text-[48px] font-black uppercase tracking-tighter text-black leading-none mb-5">
                            {tab.title}
                          </h2>
                          <p className="text-black/75 text-[14px] md:text-[15px] 2xl:text-[17px] leading-relaxed max-w-md 2xl:max-w-xl mb-8">
                            {tab.description}
                          </p>
                          <a
                            href={tab.ctaLink}
                            className="px-6 py-3 bg-black text-white rounded-full text-[13px] font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
                          >
                            {tab.ctaText}
                          </a>
                        </div>

                        {/* Right Side: Mockup Image Frame */}
                        <div className="w-full flex justify-center">
                          <div className="w-full max-w-[480px] 2xl:max-w-[560px] bg-white rounded-2xl  border border-black/5 overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                            <Image
                              src={tab.image}
                              alt={tab.title}
                              width={480}
                              height={360}
                              className="w-full h-auto block"
                              priority
                            />
                          </div>
                        </div>
                      </motion.div>
                    </TabsContent>
                  )
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
