"use client";

import { motion } from "framer-motion";
import { Store, Users, Megaphone, GraduationCap, Radio, Video, Info, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      "We run your shop like our own money is on the line. Listings, pricing, promotions, affiliates, content, ads, compliance, and daily ops. You get the growth and the reports. We handle the rest, including clawing back the money TikTok owes you in reimbursements.",
    buttonText: "Explore Shop Management",
    theme: "light",
    icon: Store,
  },
  {
    id: "creativeops",
    title: "Affiliate & Creator Management",
    description:
      "Turn creators into your highest paid sales team that you never have to manage. We recruit, vet, sample, and run micro and mid tier creators at scale, from a handful to hundreds. Commissions, briefs, and the seeding strategy that gets your product ranking and selling. All done for you.",
    buttonText: "Explore Affiliate & Creator Management",
    theme: "lime",
    icon: Users,
  },
  {
    id: "tiktok-shop-ads",
    title: "TikTok Shop Ads",
    description:
      "Ads that make money, not noise. Spark Ads, GMV Max, and Partnership Ads run off your best performing creator content, so you're pouring fuel on proven winners instead of gambling on cold creative. Tracked, optimized, and tied to real ROAS.",
    buttonText: "Explore TikTok Shop Ads",
    theme: "dark",
    icon: Megaphone,
  },
  {
    id: "ugc-content-creation",
    title: "UGC Content Creation",
    description:
      "Scroll stopping video built to sell, not to win awards. Native TikTok content that looks organic and converts like a storefront. Demos, unboxings, testimonials, and trend native formats, produced at the volume the algorithm actually rewards",
    buttonText: "Explore UGC Content",
    theme: "lime",
    icon: GraduationCap,
  },
  {
    id: "live-streaming",
    title: "Live Streaming",
    description:
      "Go live. Sell more. Repeat. Fully managed TikTok Live selling with hosts, scripts, schedules, and offers. From your very first stream to a daily live commerce engine that prints sales in real time.",
    buttonText: "Explore Live Streaming",
    theme: "dark",
    icon: Radio,
  },
  {
    id: "coaching-consultation",
    title: "Coaching & Consultation",
    description:
      "Want to run it yourself? We'll hand you the playbook. One on one strategy and coaching from the team behind seven figure shops. A full audit, a clear roadmap, and the exact systems we use for clients, built around your product and your market",
    buttonText: "Explore Coaching & Consultation",
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
            One agency. Every piece of your TikTok Shop.

          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
           Right now you're probably stitching together a freelancer here, an influencer guy there, and a VA who ghosts you every other week. That's why it's not working. We do the whole thing under one roof, with one strategy and one team that actually picks up the phone.
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

        {/* Premium Note Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
          className="mt-12 w-full max-w-5xl mx-auto p-5 md:p-6 bg-[#F9F9F9] hover:bg-white border-l-4 border-[#BCF96A] rounded-r-3xl rounded-l-md shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
            <p className="text-[14px] md:text-[15px] font-medium text-gray-700 leading-relaxed">
              If you need account setup, category approval, violation removal, automation, 3PL, or reimbursements? We do all of that too. Please check our services dropdown
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
