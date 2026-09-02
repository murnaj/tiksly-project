"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { HlsVideo } from "@/components/features/common/hls-video";
import { ChatAnimation } from "@/components/features/common/chat-animation";

const HeroSection = () => {
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <section className="relative flex flex-col justify-center items-center relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#F6FED9] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 2xl:pt-48 2xl:pb-36 min-h-[90vh] 2xl:min-h-[750px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.25fr] gap-12 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE }}
              className="flex flex-col gap-5 z-10"
            >
              <div className="inline-flex items-center self-start mb-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative p-[1.5px] rounded-full overflow-hidden shadow-xs cursor-default"
                >
                  <motion.div
                    className="absolute -inset-[150%] rounded-full pointer-events-none"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #BCF96A, #0081FB, #FF004F, #7B61FF, #00D084, #00F2EA, #BCF96A)",
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BCF96A] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-black">
                      UGC CONTENT CREATION
                    </span>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
                className="flex items-center justify-start gap-4 mb-2 flex-wrap"
              >
                <span className="text-gray-500 text-[13px] md:text-[14px] font-medium">
                  Official Partners:
                </span>

                <div className="flex items-center gap-2">
                  <Image
                    src="/logos/meta.svg"
                    alt="Meta"
                    width={85}
                    height={22}
                    className="h-3.5 w-auto object-contain"
                  />
                  <Image
                    src="/logos/tiktok-shop.svg"
                    alt="Tiktok Shop"
                    width={95}
                    height={22}
                    className="h-4 w-auto object-contain"
                  />
                  <Image
                    src="/logos/youtube.svg"
                    alt="Youtube Shorts"
                    width={95}
                    height={22}
                    className="h-3.5 w-auto object-contain"
                  />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                className="text-[40px] leading-[1.05] sm:text-[48px] md:text-[56px] lg:text-[64px] font-black text-black tracking-[-0.03em] max-w-[900px]"
              >
                HIGH-CONVERTING{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BCF96A] to-[#84CC16]">
                  UGC VIDEO
                </span>{" "}
                ADS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                className="text-base sm:text-lg text-gray-500 font-medium max-w-xl leading-relaxed mt-2"
              >
                Get authentic, scroll-stopping user-generated content from our
                network of 7,000+ vetted creators. Boost your engagement, build
                trust, and scale your sales on TikTok, Meta, and more.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
                className="flex items-center justify-start gap-3 flex-wrap"
              >
                {/* UK TSP Badge */}
                <div className="inline-flex items-center gap-2 text-[12px] font-medium text-black">
                  <svg
                    className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 shadow-2xs"
                    viewBox="0 0 60 30"
                  >
                    <clipPath id="uk-flag">
                      <path d="M0,0 v30 h60 v-30 z" />
                    </clipPath>
                    <clipPath id="uk-t">
                      <path d="M30,15 h30 v15 z M30,15 h-30 v-15 z M30,15 h-30 v15 z M30,15 h30 v-15 z" />
                    </clipPath>
                    <g clipPath="url(#uk-flag)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                      <path
                        d="M0,0 L60,30 M60,0 L0,30"
                        stroke="#fff"
                        strokeWidth="6"
                      />
                      <path
                        d="M0,0 L60,30 M60,0 L0,30"
                        clipPath="url(#uk-t)"
                        stroke="#C8102E"
                        strokeWidth="4"
                      />
                      <path
                        d="M30,0 v30 M0,15 h60"
                        stroke="#fff"
                        strokeWidth="10"
                      />
                      <path
                        d="M30,0 v30 M0,15 h60"
                        stroke="#C8102E"
                        strokeWidth="6"
                      />
                    </g>
                  </svg>
                  <span>UK TSP: 7494315872973719280</span>
                </div>

                {/* USA TSP Badge */}
                <div className="inline-flex items-center gap-2 text-[12px] font-medium text-black">
                  <svg
                    className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 shadow-2xs"
                    viewBox="0 0 60 30"
                  >
                    <rect width="60" height="30" fill="#B22234" />
                    <path
                      d="M0,4.6h60M0,11.5h60M0,18.5h60M0,25.4h60"
                      stroke="#fff"
                      strokeWidth="2.3"
                    />
                    <rect width="24" height="16.2" fill="#3C3B6E" />
                  </svg>
                  <span>USA TSP: 7494489601127056460</span>
                </div>
              </motion.div>

               <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="/book-a-meeting"
                  className="mb-4 inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-center justify-center"
                >
                  Get my free growth plan
                </Link>
              </div>
            </motion.div>

            {/* Right Column: S-Shape Videos Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="relative w-full h-[400px] sm:h-[600px] lg:h-[700px] flex items-center justify-center mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-[280px] min-[400px]:max-w-[320px] sm:max-w-[500px] h-full mx-auto">
                {/* Left/Top Video (Back) */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="absolute left-0 -top-[35px] sm:top-10 w-[190px] sm:w-[220px] md:w-[260px] aspect-[9/16] h-[300px] sm:h-auto rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-[4px] sm:border-[6px] border-white/80 bg-black z-10"
                >
                  <HlsVideo 
                    videoId="ce3082f8b2b1151137c5b9a82aa9b342" 
                    active={true} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>

                {/* Right/Bottom Video (Front) */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="absolute right-0 bottom-0 sm:bottom-10 w-[190px] sm:w-[220px] md:w-[260px] h-[300px] sm:h-auto sm:aspect-[9/16] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-[4px] sm:border-[6px] border-white/80 bg-black z-20"
                >
                  <ChatAnimation />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </section>
    </>
  );
};

export default HeroSection;
