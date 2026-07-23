"use client";

import { motion } from "framer-motion";
import { FileText, Video, Target, BarChart2, Users, DollarSign } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const needs = [
  {
    icon: FileText,
    title: "Brand Brief",
    desc: "Your brand story, tone of voice, target audience, and key messaging so we can represent you accurately across every creative.",
  },
  {
    icon: Video,
    title: "Raw Content & Assets",
    desc: "Product images, videos, or existing UGC footage we can work with to build high-converting ad creatives.",
  },
  {
    icon: Target,
    title: "Campaign Goals",
    desc: "Whether it's sales, awareness, or app installs — clear KPIs help us optimize campaigns toward what matters most.",
  },
  {
    icon: BarChart2,
    title: "Ad Account Access",
    desc: "TikTok Ads Manager access so we can set up, launch, and manage your campaigns directly without delays.",
  },
  {
    icon: Users,
    title: "Creator Preferences",
    desc: "Any creator niches, styles, or audience demographics you'd like us to target when building creator partnerships.",
  },
  {
    icon: DollarSign,
    title: "Budget & Timeline",
    desc: "Your monthly ad spend and desired launch window so we can plan the right resources and deliverables for you.",
  },
];

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function WhatWeNeed() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-50">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-12"
        >
          <p className="text-[13px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Getting Started
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] 2xl:text-[52px] font-black uppercase tracking-tighter text-black leading-[1.05]">
              What We Need
              <br className="hidden md:block" />
              <span className="text-gray-300"> From You</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm md:mb-1">
              To get started, have these 6 things ready and we can launch your first campaign within days.
            </p>
          </div>
        </motion.div>

        {/* 3 × 2 Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {needs.map((need, i) => {
            const Icon = need.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group bg-[#F9F9F9] hover:bg-black rounded-[2rem] p-8 flex flex-col gap-5 transition-colors duration-300 cursor-default border border-transparent hover:border-black"
              >
                <div className="w-11 h-11 rounded-2xl bg-white group-hover:bg-[#BCF96A] flex items-center justify-center transition-colors duration-300 shadow-sm shrink-0">
                  <Icon className="w-5 h-5 text-black" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-black group-hover:text-white mb-2 transition-colors duration-300 tracking-tight">
                    {need.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-300">
                    {need.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
