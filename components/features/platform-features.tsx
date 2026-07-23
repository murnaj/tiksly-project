"use client";

import { motion } from "framer-motion";
import { Store, Users, Megaphone, GraduationCap, Radio, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

const cardData = [
  {
    id: "shop-management",
    title: "Shop Management",
    description:
      "Manage your entire tiktok shop inside Tiksly. List products, create collections, and fulfill orders without ever leaving the platform.",
    buttonText: "Learn more",
    theme: "light",
    icon: Store,
  },
  {
    id: "creativeops",
    title: "Affiliate & Creator Management",
    description:
      "Manage your entire tiktok shop inside Tiksly. List products, create collections, and fulfill orders without ever leaving the platform.",
    buttonText: "Learn more",
    theme: "lime",
    icon: Users,
  },
  {
    id: "tiktok-shop-ads",
    title: "TikTok Shop Ads",
    description:
      "Monitor your return on ad spend (ROAS) and creator performance in real-time. Link Meta and TikTok ads managers directly to track impressions, conversions, and actual campaign profitability.",
    buttonText: "Learn more",
    theme: "dark",
    icon: Megaphone,
  },
  {
    id: "coaching-consultation",
    title: "Coaching & Consultation",
    description:
      "Monitor your return on ad spend (ROAS) and creator performance in real-time. Link Meta and TikTok ads managers directly to track impressions, conversions, and actual campaign profitability.",
    buttonText: "Learn more",
    theme: "lime",
    icon: GraduationCap,
  },
  {
    id: "live-streaming",
    title: "Live Streaming",
    description:
      "Boost your sales with real-time live streaming commerce. Engage with your audience directly and drive conversions instantly during your live sessions.",
    buttonText: "Learn more",
    theme: "dark",
    icon: Radio,
  },
  {
    id: "ugc-content-creation",
    title: "UGC Content Creation",
    description:
      "Leverage authentic User Generated Content to build trust and increase engagement. Easily manage and track your UGC campaigns for maximum impact.",
    buttonText: "Learn more",
    theme: "light",
    icon: Video,
  },
];

export default function PlatformFeatures() {
  return (
    <section className="w-full bg-white pt-16 lg:pt-20  overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
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

        {/* 3-Column Card Grid (2 Rows of 3 Cards = 6 Cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cardData.map((card) => {
            const isLime = card.theme === "lime";
            const isDark = card.theme === "dark";
            const Icon = card.icon;

            return (
              <motion.div key={card.id} variants={itemVariants} className="flex h-full">
                <Card
                  className={`relative flex flex-col justify-between w-full px-4 py-6 md:px-6 md:py-6 rounded-[2rem] border transition-all duration-300  ${isLime
                    ? "bg-[#BCF96A] border-none text-black"
                    : isDark
                      ? "bg-[#0D0D0D] border-gray-800 text-white"
                      : "bg-[#F9F9F9] border-gray-100 text-black"
                    }`}
                >
                  <div>
                    {/* Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xs ${isLime
                          ? "bg-black text-white"
                          : isDark
                            ? "bg-[#BCF96A] text-black"
                            : "bg-[#BCF96A] text-black"
                        }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <h3
                        className={`text-2xl md:text-3xl font-bold tracking-tight ${isDark ? "text-white" : "text-black"
                          }`}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-[14px] md:text-[15px] leading-relaxed mb-8 ${isLime ? "text-black/80" : isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                      {card.description}
                    </p>

                    {/* Button */}
                    <div className="mb-10">
                      <Button
                        variant={isDark ? "outline" : "default"}
                        className={`rounded-full px-7 py-5 font-semibold text-[15px] cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-95 border-none shadow-none ${isDark
                          ? "bg-white text-black hover:bg-gray-150"
                          : "bg-black text-white hover:bg-gray-800"
                          }`}
                      >
                        {card.buttonText}
                      </Button>
                    </div>
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
