"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function AnatomySection() {
  const EASE = [0.22, 1, 0.36, 1] as const;

  const features = [
    {
      id: 1,
      title: "A hook that stops the scroll",
      description:
        "The first 2 seconds decide everything. We test hooks relentlessly.",
      top: "15%",
      left: "95%",
    },
    {
      id: 2,
      title: "Proven creator creative",
      description:
        "We only scale content already converting organically, never cold ads.",
      top: "45%",
      left: "0%",
    },
    {
      id: 3,
      title: "Precise audience targeting",
      description: "Your budget reaches ready buyers, not random scrollers.",
      top: "65%",
      left: "95%",
    },
    {
      id: 4,
      title: "A clear path to buy",
      description:
        "Native Shop integration so viewers check out without leaving TikTok.",
      top: "80%",
      left: "0%",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9F6] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="text-[#BCF96A] text-[13px] md:text-[14px] font-extrabold tracking-wider uppercase mb-3 block">
              Why Our Ads Win
            </span>
            <h2 className="text-3xl md:text-[45px] lg:text-[50px] font-black text-black leading-[1.05] tracking-tighter mb-4">
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
          {/* Left Side: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex justify-center relative"
          >
            <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-[#161718] rounded-[40px] border-8 border-black shadow-2xl flex flex-col justify-between items-center py-8">
              {/* Play Button Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1">
                  <Play className="w-8 h-8 text-black fill-black" />
                </div>
              </div>

              {/* Shop Now Button Bottom Left */}
              <div className="absolute bottom-8 left-8">
                <div className="bg-[#BCF96A] text-black text-[12px] md:text-[14px] font-bold px-4 py-2 rounded-lg flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  Shop now
                </div>
              </div>

              {/* Numbers around the phone */}
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="absolute w-8 h-8 rounded-full bg-[#BCF96A] text-black font-extrabold flex items-center justify-center text-[14px] transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
                  style={{ top: feature.top, left: feature.left }}
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
