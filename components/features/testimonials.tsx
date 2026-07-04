"use client";

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const EASE = [0.22, 1, 0.36, 1] as const;

// Decorative wave lines mapping the visual design
function LeftWavyLine() {
  return (
    <svg width="120" height="45" viewBox="0 0 120 45" fill="none" className="text-gray-300 hidden md:block shrink-0">
      <path
        d="M5,35 C30,5 50,45 80,15 C95,5 105,25 115,20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        fill="none"
      />
    </svg>
  );
}

function RightWavyLine() {
  return (
    <svg width="120" height="45" viewBox="0 0 120 45" fill="none" className="text-gray-300 hidden md:block shrink-0">
      <path
        d="M5,20 C15,25 25,5 40,15 C70,45 90,5 115,35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        fill="none"
      />
    </svg>
  );
}

// Shopper Approved Custom SVG Logo Representation
function ShopperApprovedLogo() {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <div className="relative flex items-center justify-center bg-[#0F2244] p-1 rounded-md">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.8 8.2L21.6 9L16.5 13.6L18 20.3L12 16.8L6 20.3L7.5 13.6L2.4 9L9.2 8.2L12 2Z" fill="#FFA500" />
          <path d="M7.5 11.5L10.5 14.5L17.5 7.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex flex-col items-start leading-none text-left">
        <span className="text-[12px] font-extrabold text-[#0D0D0D] tracking-tighter">Shopper</span>
        <span className="text-[10px] font-bold text-[#FFA500] tracking-tight uppercase">Approved</span>
      </div>
    </div>
  );
}

const TESTIMONIALS_DATA = [
  {
    id: "t-1",
    date: "22 days ago",
    text: "Easy to order",
    reviewer: "Nadeem Ghori",
  },
  {
    id: "t-2",
    date: "22 days ago",
    text: "easy ui. fingers crossed!",
    reviewer: "Tamas Kalman",
  },
  {
    id: "t-3",
    date: "23 days ago",
    text: "it was super easy to place an order.",
    reviewer: "Austin Sorb",
  },
  {
    id: "t-4",
    date: "24 days ago",
    text: "Outstanding service and clean dashboard UI.",
    reviewer: "Sarah Jenkins",
  },
  {
    id: "t-5",
    date: "25 days ago",
    text: "Got connected with creators in less than a day! Highly recommend.",
    reviewer: "Marcus Vance",
  },
  {
    id: "t-6",
    date: "26 days ago",
    text: "The easiest influencer marketing execution we have ever done.",
    reviewer: "Elena Rostova",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  // Autoplay config: scroll every 10 seconds (10000ms) with drag/swipe interaction safety listeners
  useEffect(() => {
    if (!api) return;

    let intervalId: NodeJS.Timeout;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        api.scrollNext();
      }, 6000);
    };

    const stopAutoplay = () => {
      clearInterval(intervalId);
    };

    startAutoplay();

    api.on("pointerDown", stopAutoplay);
    api.on("pointerUp", startAutoplay);

    return () => {
      stopAutoplay();
      api.off("pointerDown", stopAutoplay);
      api.off("pointerUp", startAutoplay);
    };
  }, [api]);

  // Entrance Animations
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
    <section className="w-full  pt-16 md:pt-24 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Title Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4 leading-tight"
          >
            What our customers think.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed max-w-sm md:max-w-xl mx-auto"
          >
            Read feedback from Agencies, In-House Marketing Teams & Individuals just like you!
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2 lg:gap-8 items-center justify-center mb-16 max-w-5xl mx-auto"
        >
          {/* Left Metric: 95% Rating */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left px-2">
            <span className="text-[50px] md:text-[56px] lg:text-[64px] font-semibold text-black leading-none tracking-tighter">
              95%
            </span>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-61.25 font-medium">
              of customers that buy from this merchant give them a 4 or 5-star rating
            </p>
          </motion.div>

          {/* Middle Metric: Overall Rating with Wavy lines */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
            <LeftWavyLine />
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Overall Rating
              </span>
              <div className="flex gap-0.5 text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <RightWavyLine />
          </motion.div>

          {/* Right Metric: 4.8/5 breakdown progress bars */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start px-2">
            <span className="text-[45px] md:text-[50px] lg:text-[58px] font-semibold text-black leading-none tracking-tighter">
              4.8/5
            </span>
            <div className="hidden sm:flex flex-col gap-1.5 w-full max-w-42.5">
              {[
                { stars: "5 Stars", pct: 90 },
                { stars: "4 Stars", pct: 8 },
                { stars: "3 Stars", pct: 1 },
                { stars: "2 Stars", pct: 0.5 },
                { stars: "1 Stars", pct: 0.5 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center text-[10px] font-bold text-gray-500 gap-2.5">
                  <span className="w-9 text-right shrink-0 whitespace-nowrap">{row.stars}</span>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-black h-full rounded-full" style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Content Row: Static Excellent Card + Reviews Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 items-stretch max-w-5xl mx-auto">
          {/* Static Card */}
          <div className="flex">
            <Card className="border border-gray-100 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center  w-full min-h-55 select-none">
              <span className="text-[20px] font-bold text-[#0D0D0D] mb-1.5">Excellent</span>
              <div className="flex gap-0.5 mb-2 text-[#FFA500]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[12px] font-semibold text-gray-400 mb-6">
                Based on 1612 reviews
              </span>
              <ShopperApprovedLogo />
            </Card>
          </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden select-none flex items-center">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3">
                {TESTIMONIALS_DATA.map((review) => (
                  <CarouselItem
                    key={review.id}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex"
                  >
                    <Card className=" border border-gray-100 rounded-[2rem] p-6 flex flex-col justify-between w-full h-full ">
                      <div className="flex flex-col">
                        {/* Rating & Date Row */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex gap-0.5 text-[#FFA500]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <span className="text-[11px] text-gray-400 font-semibold">
                            {review.date}
                          </span>
                        </div>
                        {/* Review Content */}
                        <p className="text-[14px] font-semibold text-neutral-800 leading-relaxed mb-6 line-clamp-4">
                          &quot;{review.text}&quot;
                        </p>
                      </div>
                      {/* Reviewer Name */}
                      <div className="text-[13px] font-bold text-black border-t border-gray-100/80 pt-3">
                        {review.reviewer}
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
