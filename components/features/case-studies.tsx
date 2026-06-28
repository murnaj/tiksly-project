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

// Case studies database matching images in public/case-study/
const CASE_STUDIES_DATA = [
  {
    id: "cs-1",
    image: "/case-study/3.webp",
    tag: "Blogger Outreach",
    title: "fatjoe Got Us To Page 1",
    description:
      "\"Pink-jobs.com is 14 years old, but it wasn't until we used fatjoe's blogger outreach to improve our rankings and get onto the 1s...\"",
    buttonText: "View Case Study",
  },
  {
    id: "cs-2",
    image: "/case-study/2.webp",
    tag: "Blogger Outreach",
    title: "Quality Links And Easy To Use",
    description:
      '"We\'ve been using fatjoe as our link-building partner to help improve and/or maintain our rankings for highly competitive keywords in f..."',
    buttonText: "View Case Study",
  },
  {
    id: "cs-3",
    image: "/case-study/1.webp",
    tag: "Blogger Outreach and Niche Edits",
    title: "Revenue Quintupled",
    description:
      '"For our e-commerce site specialising in personalised gifts, we experienced a significant increase in organic traffic and revenue—both quintu..."',
    buttonText: "View Case Study",
  },
  {
    id: "cs-4",
    image: "/case-study/4.webp",
    tag: "Blogger Outreach",
    title: "Lead Generation More Than Doubled In 3 Months",
    description:
      '"This website is in the cooking products industry. With regular guest blog posting, the site\'s exposure on Google has increased dramati..."',
    buttonText: "View Case Study",
  },
  {
    id: "cs-5",
    image: "/case-study/5.webp",
    tag: "Blogger Outreach and Niche Edits",
    title: "0 Leads To 12 Leads Per Month",
    description:
      '"Presentation design agency. Helped build and establish from scratch. From a website that was generating 0 monthly leads one year ago to one..."',
    buttonText: "View Case Study",
  },
  {
    id: "cs-6",
    image: "/case-study/6.webp",
    tag: "Blogger Outreach and Niche Edits",
    title: "0 To 50 Visits Per Day",
    description:
      '"Website is a consumer money saving website, traffic has gone from zero to around 50 users per day organically, only used fatjoe for backlink..."',
    buttonText: "View Case Study",
  },
];

export default function CaseStudies() {
  const [api, setApi] = useState<CarouselApi>();

  // Custom Autoplay configuration (interaction-aware)
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

    // Pause autoplay on mouse drag or swipe interaction, resume on release
    api.on("pointerDown", stopAutoplay);
    api.on("pointerUp", startAutoplay);

    return () => {
      stopAutoplay();
      api.off("pointerDown", stopAutoplay);
      api.off("pointerUp", startAutoplay);
    };
  }, [api]);

  return (
    <section className="w-full  pt-20 md:pt-28  lg:pt-20  overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16 px-2"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6"
          >
            Real results.
            <br />
            Proven success stories.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto"
          >
            See how leading brands and fast-growing startups leverage our
            creator network and data-driven approach to dominate their markets.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full select-none">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full overflow-hidden"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {CASE_STUDIES_DATA.map((study) => (
                <CarouselItem
                  key={study.id}
                  className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3 flex"
                >
                  <Card className="bg-[#0D0D0D]  rounded-[2rem] overflow-hidden flex flex-col justify-between w-full h-full  transition-all duration-300 hover:scale-[1.01]">
                    {/* Visual Mockup Area */}
                    <div className="relative aspect-10/9 w-full overflow-hidden bg-[#0D0D0D] select-none rounded-t-[2rem]">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
                    </div>

                    {/* Divider Line */}
                    <div className="w-full border-t border-neutral-800/80" />

                    {/* Text Details Area */}
                    <div className="flex flex-col flex-1 p-6 md:p-4 justify-between bg-[#0D0D0D]">
                      <div className="flex flex-col mb-4">
                        {/* Tag */}
                        <span className="text-[12px] md:text-[13px] font-bold text-gray-500 uppercase tracking-wider">
                          {study.tag}
                        </span>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mt-2.5 line-clamp-2 min-h-[56px] leading-snug">
                          {study.title}
                        </h3>

                        {/* Quote Description */}
                        <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed mt-2 font-medium italic line-clamp-3 min-h-[60px]">
                          {study.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div>
                        <button className="w-full sm:w-auto px-6 py-2.5 bg-transparent border border-white/20 text-white rounded-full text-[14px] font-semibold hover:bg-white hover:text-black transition-all duration-200 cursor-pointer active:scale-95 shadow-sm">
                          {study.buttonText}
                        </button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
