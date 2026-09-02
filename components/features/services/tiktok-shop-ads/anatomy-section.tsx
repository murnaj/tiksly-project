"use client";

import { motion } from "framer-motion";
import { HlsVideo } from "@/components/features/common/hls-video";

export default function AnatomySection() {
  const EASE = [0.22, 1, 0.36, 1] as const;

  const features = [
    {
      id: 1,
      title: "A hook that stops the scroll",
      description:
        "The first 2 seconds decide everything. We test hooks relentlessly.",
      positionClass: "-right-4 top-12",
    },
    {
      id: 2,
      title: "Proven creator creative",
      description:
        "We only scale content already converting organically, never cold ads.",
      positionClass: "-left-4 top-[35%]",
    },
    {
      id: 3,
      title: "Precise audience targeting",
      description: "Your budget reaches ready buyers, not random scrollers.",
      positionClass: "-right-4 top-[60%]",
    },
    {
      id: 4,
      title: "A clear path to buy",
      description:
        "Native Shop integration so viewers check out without leaving TikTok.",
      positionClass: "-left-4 bottom-8",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#F6FED9] to-white w-full pt-14 md:pt-18 pb-14 md:pb-18 overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="text-[#84CC16] text-[13px] md:text-[14px] font-extrabold tracking-wider uppercase mb-3 block">
              Why Our Ads Win
            </span>
            <h2 className="text-3xl md:text-[45px] lg:text-[50px] font-black text-black leading-[1.05] tracking-tighter mb-4 uppercase">
              The anatomy of a winning TikTok <br className="hidden md:block" />
              Shop ad
            </h2>
            <p className="text-gray-500 text-[15px] md:text-[17px] max-w-2xl mx-auto">
              Great ads aren&apos;t luck. Every winner we run has these four things
              dialed in.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Mobile Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex justify-center items-center py-4"
          >
            {/* Phone Container */}
            <div className="relative w-[280px] sm:w-[300px] md:w-[320px] aspect-[9/18] shrink-0">
              {/* Phone Outer Shell */}
              <div className="relative w-full h-full bg-black rounded-[48px] p-3 border-[6px] border-[#1f2123] shadow-2xl overflow-hidden flex flex-col">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center gap-1.5">
                  <div className="w-2.5 h-2.5 bg-[#141414] rounded-full" />
                  <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full" />
                </div>

                {/* Screen Inner */}
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-gray-900">
                  <HlsVideo
                    videoId="ce3082f8b2b1151137c5b9a82aa9b342"
                    active={true}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 pointer-events-none z-10" />

                  {/* TikTok UI Bar (Right Icons) */}
                  <div className="absolute right-3 bottom-24 flex flex-col items-center gap-3.5 text-white z-20">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold mt-1">124.5K</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold mt-1">1,892</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold mt-1">4.2K</span>
                    </div>
                  </div>

                  {/* TikTok Caption */}
                  <div className="absolute left-3 right-16 bottom-20 text-white z-20 text-left">
                    <p className="text-[12px] font-bold drop-shadow">@tiksly_official</p>
                    <p className="text-[10px] text-gray-200 line-clamp-2 mt-0.5 drop-shadow">
                      This product literally changed my routine! 🚀 #TikTokShop
                    </p>
                  </div>

                  {/* Shop Now Button */}
                  <div className="absolute bottom-4 left-3 z-20">
                    <div className="bg-[#BCF96A] text-black text-[11px] md:text-[12px] font-extrabold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                      <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.89-2-2-2z"/>
                      </svg>
                      Shop now
                    </div>
                  </div>
                </div>
              </div>

              {/* Number Badges */}
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`absolute w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#BCF96A] text-black font-extrabold flex items-center justify-center text-[14px] md:text-[15px] z-40 shadow-lg border-2 border-white ${feature.positionClass}`}
                >
                  {feature.id}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Features List */}
          <div className="flex flex-col gap-4 md:gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
                className="bg-white p-5 md:p-7 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 md:gap-5"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#BCF96A] text-black font-extrabold flex items-center justify-center text-[14px] md:text-[15px] shrink-0 mt-0.5">
                  {feature.id}
                </div>
                <div>
                  <h3 className="text-black font-bold text-[16px] md:text-[18px] mb-1.5 md:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
