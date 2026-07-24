"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

// Case studies database matching images in public/case-study/
const CASE_STUDIES_DATA = [
  {
    id: "cs-1",
    slug: "collectibles-brand",
    image: "/case-study/3.webp",
    // tag: "Blogger Outreach",
    title: "Collectibles brand",
    description:
      "Zero to $1.4M in 12 months We turned a struggling marketplace seller into a content driven TikTok Shop machine. Viral content, affiliate partnerships, and live selling built a seven figure channel from a standing start.",
    buttonText: "Read the full story",
  },
  {
    id: "cs-2",
    slug: "Raelenesa-handbag-brand",
    image: "/case-study/2.webp",
    // tag: "Blogger Outreach",
    title: "Raelenesa handbag brand",
    description: "$45.35K GMV in 90 days A fashion handbag brand went from nothing to 5,270 sales and a 4.6★ rating through category approval, creator seeding, and a live commerce strategy. And we were just warming up.",
    buttonText: "Read the full story",
  },
  {
    id: "cs-3",
    slug: "the-15-hour-side-hustle",
    image: "/case-study/1.webp",
    // tag: "Blogger Outreach and Niche Edits",
    title: "The 15 hour side hustle",
    description: "$38,142 in a single December on 15 hours a week A full time office worker built a holiday shop that netted 34% margins and held a 4.68★ store health score, powered entirely by creators and automation. No expensive ads. No burnout.",
    buttonText: "Read the full story",
  },
  {
    id: "cs-4",
    slug: "creator-seeding-launch",
    image: "/case-study/4.webp",
    // tag: "Blogger Outreach",
    title: "Creator seeding launch",
    description: "Zero to 1,000 orders in the first month A brand new shop with no reviews and no ranking hit its first 1,000 orders in 30 days through a micro creator seeding system publishing content at scale.",
    buttonText: "Read the full story",
  },
  {
    id: "cs-5",
    slug: "stay-at-home-mom-affiliate",
    image: "/case-study/5.webp",
    // tag: "Blogger Outreach and Niche Edits",
    title: "Stay at home mom, affiliate",
    description: "$800 startup to $5,000 a month Proof the model works at any size. Consistent content, smart product picks, and 5,000+ processed orders built a reliable home business in six months.",
    buttonText: "Read the full story",
  },
  {
    id: "cs-6",
    slug: "zero-to-50-visits-per-day",
    image: "/case-study/6.webp",
    // tag: "Blogger Outreach and Niche Edits",
    title: "0 To 50 Visits Per Day",
    description:
      "Website is a consumer money saving website, traffic has gone from zero to around 50 users per day organically, only used tiksly for backlink...",
    buttonText: "Read the full story",
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
            Real shops. Real numbers. Real receipts.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto"
          >
            We don't do vanity metrics or screenshots you can't verify. Here's what actually happens when brands and sellers hand us the wheel.
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
                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mt-2.5 line-clamp-2 leading-snug">
                          {study.title}
                        </h3>

                        {/* Quote Description */}
                        <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed mt-2 font-medium italic line-clamp-3 min-h-[60px]">
                          {study.description}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div>
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="inline-block w-full sm:w-auto text-center px-6 py-2.5 bg-transparent border border-white/20 text-white rounded-full text-[14px] font-semibold hover:bg-white hover:text-black! transition-all duration-200 active:scale-95 shadow-sm"
                        >
                          {study.buttonText}
                        </Link>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/case-studies"
            className="px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-bold hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>See all case studies</span>
            <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
