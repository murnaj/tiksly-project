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
        <div className="text-center max-w-3xl mx-auto mb-10 px-2">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-4">
            Onboarding Process
          </h2>
          <p className="text-neutral-500 text-[16px] md:text-[18px] font-medium">
            Four steps. One team. Zero guesswork.
          </p>
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
            <TabsList className="bg-[#111111] text-white rounded-full p-1.5 flex gap-1 w-fit border border-white/5 h-11.5!">
              {processTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-6 py-3 rounded-full text-[13px] md:text-[16px] font-semibold capitalize transition-all duration-300 text-neutral-400 hover:text-white data-[state=active]:bg-white! data-[state=active]:text-black! data-[state=active]:ring-2! data-[state=active]:ring-white! data-[state=active]:ring-offset-2! data-[state=active]:ring-offset-black! data-[state=active]:shadow-md! cursor-pointer"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Content Cards */}
          <div className="bg-[#f4f9e8] rounded-[2rem] p-6 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
              
              {/* Left Side: Content Column */}
              <div className="relative min-h-[300px] md:min-h-[260px] lg:min-h-[340px] flex items-center w-full">
                <div className="w-full">
                  <AnimatePresence mode="wait">
                    {processTabs.map(
                      (tab, index) =>
                        activeTab === tab.id && (
                          <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                          >
                            {/* Step Badge */}
                            <div className="inline-block px-3.5 py-1 bg-[#BCF96A] text-[11px] font-bold text-black rounded-full uppercase mb-5 tracking-wider">
                              STEP {index + 1}
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-black leading-tight mb-5">
                              {tab.label}
                            </h2>
                            <p className="text-black/75 text-[15px] md:text-[16px] 2xl:text-[17px] leading-relaxed max-w-md 2xl:max-w-xl mb-8">
                              {tab.description}
                            </p>
                            <a
                              href={tab.ctaLink}
                              className="px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-bold hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 inline-flex items-center gap-2 group w-fit"
                            >
                              <span>{tab.ctaText}</span>
                              <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                            </a>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Side: Mockup Image Frame */}
              <div className="relative min-h-[320px] lg:min-h-[400px] flex items-center justify-center w-full">
                <div className="w-full">
                  <AnimatePresence mode="wait">
                    {processTabs.map(
                      (tab) =>
                        activeTab === tab.id && (
                          <motion.div
                            key={tab.id}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full flex justify-center items-center"
                          >
                            <div className="w-full max-w-[480px] lg:max-w-full xl:max-w-[540px] bg-white rounded-[2rem] p-3 shadow-xl shadow-black/5 border border-black/5 overflow-hidden transition-all duration-300 hover:scale-[1.01]">
                              <div className="relative rounded-[1.5rem] overflow-hidden bg-[#F9F9F9]">
                                <Image
                                  src={tab.image}
                                  alt={tab.label}
                                  width={600}
                                  height={450}
                                  className="w-full h-auto block"
                                  priority
                                />
                              </div>
                            </div>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
