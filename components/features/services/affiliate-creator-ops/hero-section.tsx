"use client";

import { motion } from "framer-motion";
import { HlsVideo } from "@/components/features/common/hls-video";

const HeroSection = () => {
  const EASE = [0.22, 1, 0.36, 1] as const;
  const videoId = "ce3082f8b2b1151137c5b9a82aa9b342";

  return (
    <section className="flex flex-col justify-center items-center relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#F6FED9] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 2xl:pt-48 2xl:pb-36 min-h-[90vh] 2xl:min-h-[750px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left Content */}
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
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative bg-white px-3.5 py-1 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#BCF96A] animate-pulse" />
                  <span className="text-[11.5px] md:text-[12px] font-extrabold uppercase tracking-wider text-black">
                    Affiliate & Creator Ops
                  </span>
                </div>
              </motion.div>
            </div>

            <h1 className="text-3xl md:text-[45px] lg:text-[50px] font-black text-black leading-[1.05] tracking-tighter uppercase">
              <span className="bg-[#BCF96A] text-black px-4 rounded-full inline-block font-black my-1">
                Creator Content
              </span>
              <br />
              Without Chaos
            </h1>

            <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed max-w-xl">
              Run UGC, influencer, seeding and text review briefs. All with
              brand-safety and compliance built in.
            </p>

            <div className="flex items-center justify-start gap-4 mb-4 flex-wrap">
              {/* UK TSP Badge */}
              <div className="inline-flex items-center gap-2">
                <svg
                  className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 shadow-sm"
                  viewBox="0 0 60 30"
                >
                  <clipPath id="uk-flag-affiliate">
                    <path d="M0,0 v30 h60 v-30 z" />
                  </clipPath>
                  <clipPath id="uk-t-affiliate">
                    <path d="M30,15 h30 v15 z M30,15 h-30 v-15 z M30,15 h-30 v15 z M30,15 h30 v-15 z" />
                  </clipPath>
                  <g clipPath="url(#uk-flag-affiliate)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                    <path
                      d="M0,0 L60,30 M60,0 L0,30"
                      stroke="#fff"
                      strokeWidth="6"
                    />
                    <path
                      d="M0,0 L60,30 M60,0 L0,30"
                      clipPath="url(#uk-t-affiliate)"
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
                <p className="text-gray-500 text-[13px] md:text-[14px] font-medium">
                  UK TSP: 7494315872973719280
                </p>
              </div>

              {/* USA TSP Badge */}
              <div className="inline-flex items-center gap-2">
                <svg
                  className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 shadow-sm"
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
                <p className="text-gray-500 text-[13px] md:text-[14px] font-medium">
                  USA TSP: 7494489601127056460
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Videos Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="relative flex gap-3 h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl ml-auto mask-image-linear"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
            }}
          >
            {/* Column 1 (Large Video) */}
            <div className="flex flex-col gap-3 w-[150px] md:w-[180px] pt-12 shrink-0">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 w-[130px] md:w-[150px] pt-4 shrink-0">
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3 w-[130px] md:w-[150px] pt-16 shrink-0">
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3 w-[130px] md:w-[150px] shrink-0">
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-3 w-[130px] md:w-[150px] pt-8 shrink-0">
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
              <div className="relative w-full aspect-[9/14] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoId} active={true} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;
