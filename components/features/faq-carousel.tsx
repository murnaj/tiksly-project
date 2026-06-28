"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const EASE = [0.22, 1, 0.36, 1] as const;

const FAQ_DATA = [
  {
    id: "faq-1",
    question: "1. What exactly does your TikTok Shop Agency do for my business?",
    answer: "We handle everything required to launch, scale, and manage your TikTok Shop. This includes creator outreach and product seeding, producing high-converting UGC video ads, managing your shop operations, optimizing affiliate plans, and running targeted TikTok Shop Ads to drive consistent sales.",
  },
  {
    id: "faq-2",
    question: "2. How much does your TikTok Shop Agency cost?",
    answer: "Our pricing is structured based on the size of your catalog and the scale of distribution required. We offer transparent monthly retainer plans alongside performance incentives, ensuring our goals are fully aligned with your revenue growth. Get in touch for a custom quote.",
  },
  {
    id: "faq-3",
    question: "3. How fast will I see results from your TikTok Shop Agency?",
    answer: "Most brands see their first set of creator videos and initial sales within the first 14 to 21 days of launching. As the TikTok algorithm begins to optimize and our creator seeding program scales, compound growth typically accelerates around month 2 and 3.",
  },
  {
    id: "faq-4",
    question: "4. Why does your TikTok Shop Agency only take 12 clients?",
    answer: "We limit our client roster to exactly 12 brands at any given time to maintain the highest quality of service. This allows our dedicated team of video editors, creator outreach specialists, and media buyers to act as a true extension of your in-house team.",
  },
  {
    id: "faq-5",
    question: "5. What businesses work best with your TikTok Shop Agency?",
    answer: "We drive the best results for DTC brands in Beauty & Cosmetics, Apparel & Fashion, Health & Wellness, Home & Kitchen, and consumer gadgets. Having an active inventory, an appealing product offering, and margins that support affiliate commissions are key indicators of success.",
  },
  {
    id: "faq-6",
    question: "6. Does your TikTok Shop Agency guarantee results?",
    answer: "While we cannot guarantee exact sales figures due to variables in market demand and stock availability, we guarantee the delivery of high-quality assets, active creator partnerships, and optimized ad accounts. Our performance-based structures show our commitment to your ROI.",
  },
];

export default function FaqCarousel() {
  // Entrance Animation Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="w-full bg-white pt-16 md:pt-24 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.1] text-black mb-5"
          >
            Questions About Our TikTok Shop Agency?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed max-w-sm md:max-w-lg lg:max-w-2xl mx-auto"
          >
            We know picking the right TikTok Shop Agency is important. Here are the questions we hear most from businesses like yours – and our honest answers.
          </motion.p>
        </motion.div>

        {/* Accordion Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto px-2 md:px-0"
        >
          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_DATA.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-[#F9F9F9]/80 border border-gray-100/50 rounded-[1.5rem] mb-4 overflow-hidden border-b-0"
                >
                  <AccordionTrigger className="*:data-[slot=accordion-trigger-icon]:hidden px-6 py-5 text-[15px] md:text-[16px] lg:text-[17px] font-bold text-black hover:no-underline flex items-center justify-between group outline-none cursor-pointer">
                    <span className="tracking-tight text-left leading-snug">{item.question}</span>
                    <Plus className="w-5 h-5 shrink-0 text-black/60 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45 group-aria-expanded/accordion-trigger:text-black ml-4" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-[14px] md:text-[15px] text-gray-500 font-medium leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
