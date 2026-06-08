"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { BookOpen, Globe, Cpu, Search, Calendar } from "lucide-react";

// Design ease curve consistent with other project features
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

// FAQ/Learn mockup data from screenshot designs
const LEARN_DATA = [
  {
    id: "learn-1",
    category: "Agency Advice",
    icon: "BookOpen",
    title: "How To Outsource SEO: The Whitelabel Guide For Agencies",
    description:
      "Here's how the most successful marketing agencies are outsourcing SEO for their clients. These are the steps you need to take!",
    date: "Apr 17, 2026",
    author: "Joe Davies",
    avatar: "/tom-avatar.png",
  },
  {
    id: "learn-2",
    category: "Digital PR",
    icon: "Globe",
    title: "Case Study: fatjoe x Wolf River Electric PR Campaign",
    description:
      "Pull back the curtain on the digital PR campaign process that secured incredible results for Wolf River Electric. An 85% increase in organic traffic is just the start...",
    date: "Jun 20, 2025",
    author: "Daniel Trick",
    avatar: "/tom-avatar.png",
  },
  {
    id: "learn-3",
    category: "AI",
    icon: "Cpu",
    title: "AI SEO: How To Rank In AI Overviews Responses And Appear In AI",
    description:
      'AI SEO: the secret to appearing in AI responses and ranking in AI overviews. Is it "Generative Engine Optimization"... Or just SEO?',
    date: "Apr 10, 2026",
    author: "Daniel Trick",
    avatar: "/tom-avatar.png",
  },
  {
    id: "learn-4",
    category: "Agency Advice",
    icon: "BookOpen",
    title: "40+ Ways To Get SEO Leads & Win Clients",
    description:
      "Looking for new SEO clients & leads? Well here are 40+ ways to source SEO leads, win tons of new clients, and be an awesome SEO Agency.",
    date: "Nov 28, 2025",
    author: "Joe Davies",
    avatar: "/tom-avatar.png",
  },
  {
    id: "learn-5",
    category: "AI",
    icon: "Cpu",
    title:
      "How To Appear In AI Using Community and Brand Mentions (Case Study)",
    description:
      "Brand Mentions and Community Mentions are vital for AI SEO, but how do they actually work to influence AI? We break it down with real examples.",
    date: "Sep 12, 2025",
    author: "Daniel Trick",
    avatar: "/tom-avatar.png",
  },
  {
    id: "learn-6",
    category: "SEO",
    icon: "Search",
    title: "Is SEO Worth It In 2026? These Stats Prove It Is!",
    description:
      "Showing SEO is worth it doesn't have to be difficult. We include stats and an infographic to prove SEO is worth it for businesses in 2026.",
    date: "Feb 24, 2026",
    author: "Daniel Trick",
    avatar: "/tom-avatar.png",
  },
];

// Map string icon names to Lucide icons
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "BookOpen":
      return BookOpen;
    case "Globe":
      return Globe;
    case "Cpu":
      return Cpu;
    case "Search":
      return Search;
    default:
      return BookOpen;
  }
};

export default function FaqCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  // Custom interaction-aware autoplay logic (4-second interval)
  useEffect(() => {
    if (!api) return;

    let intervalId: NodeJS.Timeout;

    const startAutoplay = () => {
      intervalId = setInterval(() => {
        api.scrollNext();
      }, 4000);
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

  return (
    <section className="w-full  pt-14 md:pt-16 lg:pt-20 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-left max-w-3xl mb-14 px-2"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.15] text-slate-900 mb-4"
          >
            Here to learn about SEO & marketing?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-[15px] md:text-[16px] font-medium leading-relaxed max-w-2xl"
          >
            We&apos;ll teach you about SEO & marketing with our video and blog
            training guides
          </motion.p>
        </motion.div>

        {/* Carousel Viewport Wrapper */}
        <div className="relative w-full select-none px-4 md:px-0">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full overflow-hidden"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {LEARN_DATA.map((item) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3 flex"
                  >
                    <Card className="bg-white border border-gray-100 rounded-2xl border-l-4 border-l-[#BCF96A] flex flex-col justify-between w-full h-full  transition-all duration-300  p-6 md:p-8">
                      {/* Top Content */}
                      <div>
                        {/* Category Row */}
                        <div className="flex items-center gap-2 text-[#BCF96A] font-semibold text-[13px] md:text-sm tracking-wide">
                          <IconComponent className="w-4 h-4 shrink-0" />
                          <span>{item.category}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-slate-900 text-[17px] md:text-lg lg:text-[19px] font-bold leading-snug tracking-tight mt-4 line-clamp-2 min-h-[52px]">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-500 text-[13px] md:text-[14px] leading-relaxed mt-4 font-normal line-clamp-3 min-h-[60px]">
                          {item.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="w-full border-t border-gray-100 my-6" />

                      {/* Footer Details */}
                      <div className="flex items-center justify-between">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4 shrink-0 stroke-[2.2]" />
                          <span className="text-[12px] font-semibold tracking-tight">
                            {item.date}
                          </span>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-2">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 bg-slate-100">
                            <Image
                              src={item.avatar}
                              alt={item.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-[12px] font-semibold text-slate-700 tracking-tight">
                            {item.author}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation Arrows positioned on desktop/tablet edges */}
            {/* <CarouselPrevious className="absolute left-2 md:-left-4 lg:-left-1 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 shadow-md size-10 flex items-center justify-center rounded-full z-10 cursor-pointer disabled:opacity-50 transition-all hover:scale-105 active:scale-95" />
            <CarouselNext className="absolute right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 shadow-md size-10 flex items-center justify-center rounded-full z-10 cursor-pointer disabled:opacity-50 transition-all hover:scale-105 active:scale-95" /> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
