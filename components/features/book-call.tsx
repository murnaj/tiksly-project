"use client";

// import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function BookCall() {
  // Initialize to June 23, 2026 as shown in the mockup
  // const [date, setDate] = useState<Date | undefined>(new Date(2026, 5, 23));

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="bg-white py-14 md:py-20 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Scroll-triggered Animated Card container with user bg color #D5FF40 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Card className="bg-[#B4F656] bg-[radial-gradient(71.9%_62.07%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(253,249,249,0.6)_100%)] border-none rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-visible ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Avatar & Overlays */}
              <div className="relative flex items-center justify-center w-full max-w-[480px] mx-auto">
                
                {/* Avatar Box Background */}
                <motion.div 
                  variants={itemVariants}
                  className="w-full z-10"
                >
                  {/* Tom Avatar Image */}
                  <Image
                    src="/demo.webp"
                    alt="Tom - Product Manager at Tiksly"
                    width={480}
                    height={380}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </motion.div>

                {/* Overlay 1: "Meeting Confirmed" Pill */}
                {/* <motion.div 
                  variants={itemVariants}
                  animate={{
                    y: [-4, 4],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.2,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "absolute top-8 -right-4 sm:-right-6 md:-right-8",
                    "bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)] border border-slate-100",
                    "rounded-full px-4 py-2.5 flex items-center gap-2 z-20",
                    "cursor-pointer select-none"
                  )}
                >
                  <div className="bg-[#8B5CF6] p-0.5 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />
                  </div>
                  <span className="text-[12px] md:text-[13px] font-bold text-[#212120] tracking-tight whitespace-nowrap">
                    Meeting Confirmed
                  </span>
                </motion.div> */}

                {/* Overlay 2: Calendar Card */}
                {/* <motion.div 
                  variants={itemVariants}
                  animate={{
                    y: [4, -4],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.2,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className={cn(
                    "absolute bottom-40 -left-4 sm:-left-6 md:-left-18",
                    " p-4 z-20 w-[240px] md:w-[260px] h-30 ",
                    "cursor-pointer select-none "
                  )}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="p-2  rounded-xl"
                    classNames={{
                      day_button: "data-[selected-single=true]:!bg-[#8B5CF6] data-[selected-single=true]:!text-white hover:!bg-[#F3E8FF] hover:!text-[#8B5CF6] rounded-md transition-all text-xs font-medium w-full aspect-square flex items-center justify-center cursor-pointer",
                      today: "text-[#8B5CF6] font-bold rounded-md",
                      month_caption: "flex h-7 items-center justify-center px-3 bg-[#F3E8FF] text-[#8B5CF6] rounded-full font-bold text-[11px] w-max mx-auto mb-3",
                      nav: "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
                      button_previous: "hover:bg-slate-100 rounded-full text-slate-600 size-6 p-0 flex items-center justify-center cursor-pointer",
                      button_next: "hover:bg-slate-100 rounded-full text-slate-600 size-6 p-0 flex items-center justify-center cursor-pointer",
                    }}
                  />
                </motion.div> */}

              </div>

              {/* Right Column: Copy & Actions */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col gap-6 text-left max-w-xl lg:max-w-none"
              >
                <h2 className="text-[28px] md:text-[42px] xl:text-[48px] font-semibold text-[#212120] leading-[1.12] tracking-tight">
                  Want to see Tiksly in action? Get a quick demo.
                </h2>
                
                <p className="text-[14px] md:text-[16px] text-[#212120]/80 font-medium leading-relaxed">
                  Hey, I&apos;m Tom! If you&apos;re curious about Tiksly, let&apos;s hop on a brief demo call. I&apos;ll show
                  you how to turn any product link into instant video briefs and find creators for your
                  category. Just pick a time that works for you and let&apos;s get started.
                </p>

                <div className="pt-2">
                  <button 
                    className={cn(
                      "px-7 py-3.5 bg-[#212120] text-white rounded-full text-[15px] font-semibold",
                      "hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95  cursor-pointer"
                    )}
                  >
                    Book a call
                  </button>
                </div>
              </motion.div>

            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
