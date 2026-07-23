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
    question: "I've been burned by an agency before. Why is Tiksly any different?",
    answer: "Because most agencies chase followers and post pretty screenshots while your bank account stays flat. We chase GMV. Everything we do ties back to one number, the revenue in your shop, and you see it in a live dashboard so we've got nowhere to hide. If it's not making you money, we're not doing it.",
  },
  {
    id: "faq-2",
    question: "What exactly do you handle, and what's left for me?",
    answer: "We handle the whole channel. Shop setup, listings, creators, affiliates, UGC, ads, live selling, compliance, and daily ops. What's left for you is approving the big calls and doing what you do best, which is running your business. No learning TikTok's back end at midnight. No chasing creators who ghost.",
  },
  {
    id: "faq-3",
    question: "How much does it cost?",
    answer: "Depends on what you need, and we won't pretend otherwise. Management retainers, creator programs, and project work are all priced differently. You'll see clear starting prices on each service page and we'll quote your exact scope on the call. No surprise invoices and no getting locked into something you didn't ask for.",
  },
  {
    id: "faq-4",
    question: "I'm just starting out. Am I too small for you?",
    answer: "No. We've taken shops from literally zero, and one of our sellers built a $5,000 a month business on an $800 budget. If you're serious and you've got a product people actually want, we can work with you. If you're already doing volume, even better, we'll pour fuel on it.",
  },
  {
    id: "faq-5",
    question: "How fast will I actually see results?",
    answer: "Most brands see their first real sales inside 30 days, with the bigger growth landing over 60 to 90 days as the creator and content engine compounds. Ads can move quicker. We'll give you an honest timeline for your specific product on day one, not a fantasy to close the deal.",
  },
  {
    id: "faq-6",
    question: "Does this work for my niche?",
    answer: "If it sells on TikTok, it works. We've driven results across fashion, beauty, health and wellness, home, collectibles, food and beverage, and more. On the call we'll tell you straight whether your product is a fit, because putting you in a program that won't work helps nobody.",
  },
  {
    id: "faq-7",
    question: "Do I stay in control of my shop and my brand?",
    answer: "Completely. It stays your shop, your brand, your account, your data. We operate inside it, you keep the keys, and everything we run stays on brand. You approve, we execute.",
  },
  {
    id: "faq-8",
    question: "Do you work with brands outside the US and UK?",
    answer: "Yes. We're TSP verified in the US and UK and we actively run shops across Europe and Southeast Asia. If TikTok Shop is live in your market, we can help you win in it.",
  },
  {
    id: "faq-9",
    question: "Are you actually a verified TikTok Shop Partner?",
    answer: "Yes, in both the US and UK. Ask us for our TSP IDs on the call and we'll show them on the spot. No smoke, no mirrors.",
  },
  {
    id: "faq-10",
    question: "I run an agency. Can you do this under my brand?",
    answer: "We can. We white label the entire operation, work under an NDA, and deliver branded reporting your clients never know isn't in house. Reach out through the agency option and we'll send you the partner details.",
  },
];

export default function FaqCarousel() {
  // Entrance Animation Stagger Variants
  const containerVariants = {
    hidden: { opacity: 1, y: 0 },
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
    hidden: { opacity: 1, y: 0 },
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
            The questions you're actually thinking. Answered straight.
          </motion.h2>
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
