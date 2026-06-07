"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const cardData = [
  {
    id: "partnerships",
    title: "Partnerships Hub",
    subtitle: "Creator marketing and partnerships",
    description:
      "Partner with creators and create video ads at scale. Meet the growing demands for fresh creative with ease and build ongoing partnerships so your social and paid never run dry.",
    buttonText: "Learn more",
    theme: "light",
    features: [
      { title: "5,000+ creators", desc: "Access a vast network of vetted talent" },
      { title: "Organic reach", desc: "Post on creator profiles for authenticity" },
      { title: "Partnership ads", desc: "Run paid ads from creator handles" },
      { title: "Unified workflow", desc: "Everything you need, in one place" },
    ],
  },
  {
    id: "creativeops",
    title: "CreativeOps",
    subtitle: "The anti-guesswork data engine",
    description:
      "Access the first-ever creator marketing system for data-led growth, built on 326k ads with $500M in purchase value. Turn data insights into proven briefs, smarter creator picks, and scale what drives results.",
    buttonText: "Learn more",
    theme: "lime",
    features: [
      { title: "Script generator", desc: "Get data-led briefs in seconds" },
      { title: "Creator matching", desc: "Match with the best-fit creators" },
      { title: "Ad variations", desc: "Generate ad variations from existing footage" },
      { title: "Creative analytics", desc: "See performance data and next steps" },
    ],
  },
  {
    id: "campaign-roi",
    title: "Campaign ROI",
    subtitle: "Data-driven insights & integrations",
    description:
      "Monitor your return on ad spend (ROAS) and creator performance in real-time. Link Meta and TikTok ads managers directly to track impressions, conversions, and actual campaign profitability.",
    buttonText: "Learn more",
    theme: "dark",
    features: [
      { title: "Meta & TikTok sync", desc: "Real-time performance metrics via direct API" },
      { title: "Creator attribution", desc: "Identify exactly which creator is driving sales" },
      { title: "Automated reporting", desc: "Generate client-ready dashboards in one click" },
      { title: "Smart budgets", desc: "Optimize spending across top-performing assets" },
    ],
  },
];

export default function PlatformFeatures() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 border-b border-gray-50 overflow-hidden">
      <div className="container mx-auto px-2 lg:px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-2">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
            Launch with creators.
            <br />
            Win using data.
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
            Tiksly is the first-of-its-kind creator marketing stack, combining production and
            performance in a single seamless workflow.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6"
        >
          {cardData.map((card) => {
            const isLime = card.theme === "lime";
            const isDark = card.theme === "dark";

            return (
              <motion.div key={card.id} variants={itemVariants} className="flex h-full">
                <Card
                  className={`relative flex flex-col justify-between w-full p-8 md:p-10 rounded-[2rem] border transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] ${
                    isLime
                      ? "bg-[#BCF96A] border-none text-black"
                      : isDark
                      ? "bg-[#0D0D0D] border-gray-800 text-white"
                      : "bg-[#F9F9F9] border-gray-100 text-black"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <h3
                        className={`text-2xl md:text-3xl font-bold tracking-tight ${
                          isDark ? "text-white" : "text-black"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-lg md:text-xl font-normal mt-1 ${
                          isLime ? "text-black/60" : isDark ? "text-gray-400" : "text-[#6B7280]"
                        }`}
                      >
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-[14px] md:text-[15px] leading-relaxed mb-8 ${
                        isLime ? "text-black/80" : isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {card.description}
                    </p>

                    {/* Button */}
                    <div className="mb-10">
                      <Button
                        variant={isDark ? "outline" : "default"}
                        className={`rounded-full px-7 py-5 font-semibold text-[15px] cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-95 border-none shadow-none ${
                          isDark
                            ? "bg-white text-black hover:bg-gray-150"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                      >
                        {card.buttonText}
                      </Button>
                    </div>
                  </div>

                  {/* Feature Checklist Grid */}
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 border-t pt-8 ${
                      isLime ? "border-black/10" : isDark ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        {/* Checkmark Icon Container */}
                        <div
                          className={`w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isLime
                              ? "bg-white text-black"
                              : isDark
                              ? "bg-[#0081FB] text-white"
                              : "bg-[#BCF96A] text-black"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-3" />
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`text-[14px] font-semibold tracking-tight ${
                              isDark ? "text-white" : "text-black"
                            }`}
                          >
                            {feature.title}
                          </span>
                          <span
                            className={`text-[12px] leading-normal ${
                              isLime ? "text-black/60" : isDark ? "text-gray-400" : "text-[#6B7280]"
                            }`}
                          >
                            {feature.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
