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

// Working examples database matching images in public/case-study/
const WORKING_EXAMPLES_DATA = [
  {
    id: "cs-1",
    image: "/case-study/3.webp",
  },
  {
    id: "cs-2",
    image: "/case-study/2.webp",
  },
  {
    id: "cs-3",
    image: "/case-study/1.webp",
  },
  {
    id: "cs-4",
    image: "/case-study/4.webp",
  },
  {
    id: "cs-5",
    image: "/case-study/5.webp",
  },
  {
    id: "cs-6",
    image: "/case-study/6.webp",
  },
];

const WorkingExamples = () => {
  const [api, setApi] = useState<CarouselApi>();

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
    <section className="bg-gradient-to-b from-white via-[#F6FED9] to-white w-full pb-14 md:pb-18 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mx-auto mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6"
          >
            Working Examples
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto"
          >
            See some of the successful shop verifications and real documents we
            process daily.
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
              {WORKING_EXAMPLES_DATA.map((example) => (
                <CarouselItem
                  key={example.id}
                  className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3 flex"
                >
                  <Card className="bg-[#0D0D0D]  rounded-[2rem] overflow-hidden flex flex-col justify-between w-full h-full  transition-all duration-300 hover:scale-[1.01]">
                    {/* Visual Mockup Area */}
                    <div className="relative aspect-10/9 w-full overflow-hidden bg-[#0D0D0D] select-none rounded-t-[2rem]">
                      <Image
                        src={example.image}
                        alt={example.image}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
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
};

export default WorkingExamples;
