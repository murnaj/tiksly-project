"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import regions from "@/data/regions";

const HeroSection = () => {
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <section className="flex flex-col justify-center items-center relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#F6FED9] pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 2xl:pt-48 2xl:pb-36 min-h-[90vh] 2xl:min-h-[750px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.25fr] gap-12 lg:gap-8 items-center">
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
                      Done for your tiktok shop account creation
                    </span>
                  </div>
                </motion.div>
              </div>

              <h1 className="text-3xl md:text-[45px] lg:text-[50px] font-black text-black leading-[1.05] tracking-tighter uppercase">
                <span className="bg-[#BCF96A] text-black px-4 rounded-full inline-block font-black my-1">
                  TikTok Shop
                </span>
                Account Setup & Approval Services
              </h1>

              <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed max-w-xl">
                Get your official TikTok Shop registered, identity-verified, and
                approved to sell without the bureaucratic delays, paperwork
                rejections, or account locks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/book-a-meeting"
                  className="mb-4 inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-center justify-center"
                >
                  Get my free growth plan
                </Link>
              </div>

              <div className="flex gap-4 mb-4 flex-wrap">
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
              </div>

              <div className="border-t border-gray-200/80 pt-6 mt-2 max-w-xl overflow-hidden">
                <p className="text-[10px] font-black text-neutral-400 tracking-wider uppercase mb-3">
                  Available in all official TikTok Shop regions:
                </p>

                <div className="relative w-full overflow-hidden py-1">
                  <div className="flex flex-nowrap w-max">
                    {/* First Loop */}
                    <motion.div
                      className="flex items-center gap-2.5 flex-nowrap shrink-0 pr-2.5"
                      animate={{ x: [0, "-100%"] }}
                      transition={{
                        ease: "linear",
                        duration: 25,
                        repeat: Infinity,
                      }}
                    >
                      {regions().map((region, idx) => (
                        <div
                          key={`${region.name}-loop1-${idx}`}
                          className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-gray-200/90 rounded-full shadow-2xs select-none"
                        >
                          <Image
                            src={region.icon}
                            alt={region.name}
                            width={18}
                            height={18}
                            className="w-4 h-4 rounded-full object-cover shrink-0"
                          />
                          <span className="text-[12px] font-semibold text-neutral-800 whitespace-nowrap">
                            {region.name}
                          </span>
                        </div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-2.5 flex-nowrap shrink-0 pr-2.5"
                      animate={{ x: [0, "-100%"] }}
                      transition={{
                        ease: "linear",
                        duration: 25,
                        repeat: Infinity,
                      }}
                    >
                      {regions().map((region, idx) => (
                        <div
                          key={`${region.name}-loop2-${idx}`}
                          className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-gray-200/90 rounded-full shadow-2xs select-none"
                        >
                          <Image
                            src={region.icon}
                            alt={region.name}
                            width={18}
                            height={18}
                            className="w-4 h-4 rounded-full object-cover shrink-0"
                          />
                          <span className="text-[12px] font-semibold text-neutral-800 whitespace-nowrap">
                            {region.name}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative flex items-center justify-start w-full my-auto lg:-mr-32 xl:-mr-48 2xl:-mr-72">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
                className="relative w-full lg:w-[135%] xl:w-[145%] 2xl:w-[155%] max-w-none"
              >
                <div
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                  }}
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] bg-white"
                >
                  <Image
                    src="/services/account-creation.jpg"
                    alt="TikTok Shop Operations Dashboard"
                    width={1300}
                    height={850}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />

                  <div className="absolute inset-x-0 bottom-0 h-44 md:h-72 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </section>
    </>
  );
};

export default HeroSection;
