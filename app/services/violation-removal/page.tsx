"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import BrandLogos from "@/components/features/brand-logos";
import Testimonials from "@/components/features/testimonials";
import FaqCarousel from "@/components/features/faq-carousel";
import BookCall from "@/components/features/book-call";
import ComparisonTable from "@/components/features/comparison-table";
import ViolationFinder from "@/components/features/violation-finder";

const EASE = [0.22, 1, 0.36, 1] as const;

const regions = [
  { name: "United States", icon: "/flags/usa.jpg" },
  { name: "United Kingdom", icon: "/flags/uk.jpg" },
  { name: "Germany", icon: "/flags/germany.jpg" },
  { name: "France", icon: "/flags/france.jpg" },
  { name: "Spain", icon: "/flags/spain.jpg" },
  { name: "Italy", icon: "/flags/italy.jpg" },
  { name: "Ireland", icon: "/flags/ireland.jpg" },
  { name: "Netherlands", icon: "/flags/netherland.jpg" },
  { name: "Singapore", icon: "/flags/singapore.jpg" },
  { name: "Malaysia", icon: "/flags/malaysia.jpg" },
  { name: "Philippines", icon: "/flags/philippines.jpg" },
  { name: "Thailand", icon: "/flags/thailand.jpg" },
  { name: "Vietnam", icon: "/flags/vietnam.jpg" },
  { name: "Indonesia", icon: "/flags/indonesia.jpg" },
  { name: "Mexico", icon: "/flags/mexio.jpg" },
];

export default function ViolationRemovalPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />

      <main className="pt-24 md:pt-32 pb-20 select-none">
        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden mb-16 md:mb-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.25fr] gap-12 lg:gap-8 items-center">
              {/* LEFT COLUMN: Content & Country Flag Marquee */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: EASE }}
                className="flex flex-col gap-5 z-10"
              >
                {/* Animated Account Creation Badge with moving colorful gradient border */}
                <div className="inline-flex items-center self-start mb-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="relative p-[1.5px] rounded-full overflow-hidden shadow-xs cursor-default"
                  >
                    {/* Rotating Conic Gradient Border */}
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

                    {/* Inner Badge */}
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
                  Get your official TikTok Shop registered, identity-verified,
                  and approved to sell without the bureaucratic delays,
                  paperwork rejections, or account locks.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    href="/book-a-meeting"
                    className="mb-4 inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
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

                {/* Country Flags Marquee Embedded in Left Column */}
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
                        {regions.map((region, idx) => (
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

                      {/* Second Loop */}
                      <motion.div
                        className="flex items-center gap-2.5 flex-nowrap shrink-0 pr-2.5"
                        animate={{ x: [0, "-100%"] }}
                        transition={{
                          ease: "linear",
                          duration: 25,
                          repeat: Infinity,
                        }}
                      >
                        {regions.map((region, idx) => (
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

              {/* RIGHT COLUMN: ClickUp Style Dashboard Showcase */}
              <div className="relative flex items-center justify-start w-full my-auto lg:-mr-32 xl:-mr-48 2xl:-mr-72">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
                  className="relative w-full lg:w-[135%] xl:w-[145%] 2xl:w-[155%] max-w-none"
                >
                  {/* Product Card Container with ClickUp-style Bottom Fade */}
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

                    {/* Gradient Overlay for bottom melt */}
                    <div className="absolute inset-x-0 bottom-0 h-44 md:h-72 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <BrandLogos />

        <ComparisonTable />

        <ViolationFinder />

        <Testimonials />

        {/* PRICING SECTION */}
        <section className="bg-white py-16 md:py-24 select-none">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mx-auto mb-16 px-2">
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
                Clear, upfront appeal pricing
              </h2>
              <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
                No hidden fees. We handle the entire violation removal process
                with a transparent pricing model and an approval guarantee.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-12 rounded-[2.5rem] p-8 md:p-12 lg:p-16 bg-black border border-black text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]">
                {/* Badge */}
                <span className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-[#BCF96A] text-black text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full z-10">
                  Risk-Free
                </span>

                {/* Left Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-6 text-gray-400">
                      Violation Removal Package
                    </p>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-[50px] lg:text-[72px] font-black tracking-tighter leading-none">
                        $950
                      </span>
                      <span className="text-[16px] mb-2 lg:mb-4 text-gray-400 font-semibold">
                        per appeal
                      </span>
                    </div>
                    <p className="text-[15px] lg:text-[16px] leading-relaxed text-gray-400 font-medium max-w-sm">
                      Complete end-to-end audit, evidence compilation, and
                      legal-style appeal submission.
                    </p>
                  </div>

                  {/* Guarantee Line - Desktop */}
                  <div className="hidden lg:flex bg-white/5 border border-white/10 rounded-2xl p-5 items-start gap-4 mt-12 max-w-md">
                    <ShieldCheck className="w-7 h-7 text-[#BCF96A] shrink-0 mt-0.5" />
                    <p className="text-[13px] text-gray-300 leading-relaxed font-medium">
                      <strong className="text-white block mb-1">
                        100% Reinstatement Guarantee
                      </strong>
                      If your TikTok Shop violation is not successfully removed,
                      we issue a full 100% refund immediately.
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col lg:border-l lg:border-white/10 lg:pl-12">
                  <p className="text-[18px] font-bold text-white mb-6">
                    What&apos;s included in the service:
                  </p>

                  <ul className="flex flex-col gap-4 mb-10 flex-1">
                    {[
                      "Deep audit of the violation and store health",
                      "Evidence compilation and formatting",
                      "Drafting a professional, legal-style appeal letter",
                      "Submission and direct communication with TikTok",
                      "Follow-ups and secondary appeals if required",
                      "Actionable advice to prevent future violations",
                    ].map((f, j) => (
                      <li key={j} className="flex items-start gap-3.5">
                        <span className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-[#BCF96A]">
                          <Check
                            className="w-3.5 h-3.5 text-black"
                            strokeWidth={3}
                          />
                        </span>
                        <span className="text-[15px] leading-relaxed text-gray-200 font-medium">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Guarantee Line - Mobile */}
                  <div className="flex lg:hidden bg-white/5 border border-white/10 rounded-2xl p-4 items-start gap-3 mb-10">
                    <ShieldCheck className="w-6 h-6 text-[#BCF96A] shrink-0 mt-0.5" />
                    <p className="text-[13px] text-gray-300 leading-relaxed font-medium">
                      <strong className="text-white">100% Guarantee:</strong> If
                      the violation is not removed, we issue a full refund.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-4 lg:py-5 rounded-full text-[16px] font-bold text-center transition-all duration-200 hover:scale-[1.03] active:scale-95 bg-[#BCF96A] text-black hover:bg-lime-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(188,249,106,0.15)]"
                  >
                    Start your appeal
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqCarousel />
        <BookCall />
      </main>

      <FooterSection />
    </div>
  );
}
