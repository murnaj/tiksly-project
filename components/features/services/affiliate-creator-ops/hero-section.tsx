"use client";

import { motion } from "framer-motion";
import { FlippingVideoCard } from "./flipping-video-card";
import { HlsVideo } from "@/components/features/common/hls-video";
import Link from "next/link";

const HeroSection = () => {
  const EASE = [0.22, 1, 0.36, 1] as const;
  const videoIds = [
    "ce3082f8b2b1151137c5b9a82aa9b342",
    "ab807060990361a8baeca01ee02fca85",
    "ced34f0b20b4edf473a0055a73b9d71b",
    "11d8f8e7bae109fa8d663716d9796058",
    "472c8a404f7d396a08417a00d5507f1c",
    "0aaea0305aa72881f52d75978391efb9",
    "a4e66c51a879a405eba452d44017299b",
    "8880a052180933af96cb96020e560c85",
    "79e7cf49cdb4ab1729369b36e5afd8cc",
    "77ee39539df24d8b2221621ad13893b2",
    "9eeb72536d1b478e604752b4ef089d96",
    "894c688f6c8c83c71eef8a2e6dc18278",
    "9e7ad391188bbfeb730c75755e662845",
    "b1c7031bfed77c225dd2a2e657d3f4f6",
    "2384c4da51b3d5466e704f49b59f9137",
    "1851b7f14202fa484c2b024aa54d9c38",
    "2b7716ff7e2eb183741ff99fbf990be6",
  ];

  return (
    <section className="flex flex-col justify-center items-center relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#F6FED9] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 2xl:pt-48 2xl:pb-36 min-h-screen">
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-a-meeting"
                className="mb-4 inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-center justify-center"
              >
                Get my free growth plan
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Videos Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="relative flex gap-3 overflow-hidden rounded-2xl ml-auto w-full max-w-full mask-image-linear"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, black 80%, transparent 100%)",
            }}
          >
            {/* Column 1 (Large Video) */}
            <div className="flex flex-col justify-center gap-3 w-[150px] md:w-[180px] shrink-0">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoIds[0]} active={true} />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col justify-center gap-3 w-[130px] md:w-[150px] shrink-0">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoIds[1]} active={true} />
              </div>
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoIds[2]} active={true} />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col justify-center gap-3 w-[130px] md:w-[150px] shrink-0">
              <div className="relative w-full aspect-[9/16]">
                <FlippingVideoCard
                  videoIds={videoIds}
                  initialIndex={3}
                  delay={4500}
                  flipInterval={6500}
                />
              </div>
              <div className="relative w-full aspect-[9/16]">
                <FlippingVideoCard
                  videoIds={videoIds}
                  initialIndex={4}
                  delay={500}
                  flipInterval={5800}
                />
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col justify-center gap-3 w-[130px] md:w-[150px] shrink-0">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoIds[5]} active={true} />
              </div>
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoIds[6]} active={true} />
              </div>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col justify-center gap-3 w-[130px] md:w-[150px] shrink-0">
              <div className="relative w-full aspect-[9/16]">
                <FlippingVideoCard
                  videoIds={videoIds}
                  initialIndex={7}
                  delay={1000}
                  flipInterval={5000}
                />
              </div>
              <div className="relative w-full aspect-[9/16]">
                <FlippingVideoCard
                  videoIds={videoIds}
                  initialIndex={8}
                  delay={3500}
                  flipInterval={6800}
                />
              </div>
            </div>

            {/* Column 6 */}
            <div className="flex flex-col justify-center gap-3 w-[130px] md:w-[150px] shrink-0">
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoIds[9]} active={true} />
              </div>
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-sm bg-gray-100">
                <HlsVideo videoId={videoIds[10]} active={true} />
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
