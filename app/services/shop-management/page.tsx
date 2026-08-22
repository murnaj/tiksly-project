"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Package,
  FileText,
  Check,
  User,
} from "lucide-react";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import BrandLogos from "@/components/features/brand-logos";
import CreatorRegions from "@/components/features/creator-regions";
import OurProcess from "@/components/features/our-process";
import CaseStudies from "@/components/features/case-studies";
import Testimonials from "@/components/features/testimonials";
import FaqCarousel from "@/components/features/faq-carousel";
import BookCall from "@/components/features/book-call";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ShopManagementPage() {
  return (
    <div className="min-h-screen  overflow-x-hidden">
      <NavBar />

      <main className="pt-24 md:pt-32 pb-20 select-none">
        {/* HERO SECTION - CLICKUP STYLE */}
        <section className="container mx-auto px-4 lg:px-6 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Values & Service Selector */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE }}
              className="flex flex-col gap-5"
            >
              {/* Animated Shop Management Pill Badge with moving colorful gradient border */}
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
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Inner Badge */}
                  <div className="relative bg-white px-3.5 py-1 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BCF96A] animate-pulse" />
                    <span className="text-[11.5px] md:text-[12px] font-extrabold uppercase tracking-wider text-black">
                      Shop Management
                    </span>
                  </div>
                </motion.div>
              </div>

              <h1 className="text-3xl md:text-[45px] lg:text-[50px] font-black text-black leading-[1.05] tracking-tighter uppercase">
                The complete
                <br />
                <span className="bg-[#BCF96A] text-black px-4 rounded-full inline-block font-black my-1">
                  operations
                </span>{" "}
                engine for tiktok shop
              </h1>

              <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed max-w-xl">
                Listing, creators, ads, and live sellin, all run by one team that treats your shop like its own money is on the line.
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

              {/* Divider and Service Selector */}
              <div className="border-t border-gray-200/80 pt-8 mt-4">
                <p className="text-[10px] font-black text-neutral-400 tracking-wider uppercase mb-4">
                  explore our services
                </p>

                {/* Outline Services Pills (Non-clickable) */}
                <div className="flex flex-wrap gap-2 max-w-xl">
                  {[
                    "Shop Management",
                    "Account Creation",
                    "Category Approval",
                    "Violation Removal",
                    "Affiliate & Creator Ops",
                    "UGC Content",
                    "TikTok Shop Ads",
                    "Live Streaming",
                    "Virtual Assistance",
                    "Automation",
                    "3PL & Fulfillment",
                    "Coaching & Consultation",
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-1.5 bg-white border border-gray-200/90 text-neutral-700 rounded-full text-[12px] md:text-[13px] font-semibold select-none cursor-default shadow-2xs hover:border-gray-300 transition-colors"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Banner Image with Bottom & Right Fade + Premium Glow */}
            <div className="relative flex items-center justify-center w-full h-full my-auto">
              {/* Subtle ambient gradient back-glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#BCF96A]/20 via-[#0081FB]/10 to-transparent rounded-[2.5rem] blur-2xl pointer-events-none -z-10" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                style={{
                  maskImage:
                    "radial-gradient(135% 120% at 0% 0%, rgba(0,0,0,1) 52%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(135% 120% at 0% 0%, rgba(0,0,0,1) 52%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 100%)",
                }}
                className="relative aspect-4/3 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-neutral-200/50 border border-gray-100/80 z-10 w-full"
              >
                <Image
                  src="/TikTok Shop Ads Services banner.jpg"
                  alt="TikTok Shop Ads Services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Bottom Fade Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
                {/* Right Fade Gradient Overlay */}
                <div className="absolute inset-y-0 right-0 w-28 md:w-44 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* BrandLogos */}
        <BrandLogos />

        {/* CreatorRegions */}
        <CreatorRegions />

        {/* NEW ROADMAP / TANGLE SECTION */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F6FED9] to-white select-none overflow-hidden">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tighter leading-[1.05]">
                <span className="text-black">
                  73% of TikTok Shops stall in 90
                </span>
                <br className="hidden md:block" />
                <span className="text-black">days — </span>
                <span className="text-[#BCF96A]">
                  because no one&apos;s running
                  <br className="hidden md:block" /> the whole thing
                </span>
              </h2>
              <p className="text-gray-500 text-[15px] md:text-[17px] mt-6 leading-relaxed max-w-3xl mx-auto font-medium">
                A freelancer here. A VA there. An &quot;influencer guy&quot; who ghosts.
                It&apos;s not a team, it&apos;s a tangle, and your sales are stuck in the
                knots.
              </p>
            </div>

            {/* The Illustration Area - Desktop (hidden md:flex) */}
            <div className="hidden md:flex relative w-full max-w-5xl mx-auto h-[400px] items-center justify-center mb-16">
              {/* Background Squiggly Lines (SVG) */}
              <svg
                className="absolute inset-0 w-full h-full text-neutral-200/80"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 1000 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50 220 Q 150 150, 200 250 T 300 250 T 400 220 T 500 250"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 80 280 Q 150 380, 250 250 T 350 150 T 450 280 T 500 250"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 20 180 Q 120 100, 180 200 T 320 350 T 420 180 T 500 250"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 500 250 L 900 240"
                  stroke="#BCF96A"
                  strokeWidth="14"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              {/* Floating Pills */}
              <div className="absolute top-[20%] left-[15%] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2 z-10 hover:-translate-y-1 transition-transform cursor-default">
                <div className="w-7 h-7 rounded bg-[#7B61FF] text-white flex items-center justify-center shadow-inner">
                  <User className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-[13px] font-extrabold text-black pr-2">
                  VA
                </span>
              </div>

              <div className="absolute top-[45%] left-[5%] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2 z-10 hover:-translate-y-1 transition-transform cursor-default">
                <div className="w-7 h-7 rounded bg-[#5D6B82] text-white flex items-center justify-center shadow-inner">
                  <User className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <span className="text-[13px] font-extrabold text-black pr-2">
                  Freelancer
                </span>
              </div>

              <div className="absolute top-[65%] left-[15%] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2 z-10 hover:-translate-y-1 transition-transform cursor-default">
                <div className="w-7 h-7 rounded bg-[#0081FB] text-white flex items-center justify-center shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                </div>
                <span className="text-[13px] font-extrabold text-black pr-2">
                  Influencer guy
                </span>
              </div>

              <div className="absolute top-[35%] left-[28%] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2 z-10 hover:-translate-y-1 transition-transform cursor-default">
                <div className="w-7 h-7 rounded bg-[#FF4D4D] text-white flex items-center justify-center shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line-icon lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                </div>
                <span className="text-[13px] font-extrabold text-black pr-2">
                  Ad manager
                </span>
              </div>

              <div className="absolute top-[70%] left-[32%] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2 z-10 hover:-translate-y-1 transition-transform cursor-default">
                <div className="w-7 h-7 rounded bg-[#00D084] text-white flex items-center justify-center shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-table-icon lucide-table"><path d="M12 3v18" /><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /></svg>
                </div>
                <span className="text-[13px] font-extrabold text-black pr-2">
                  Spreadsheet
                </span>
              </div>

              {/* Tiksly Black Pill with Animated Moving Colorful Gradient Border */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[45%] right-0 z-20 p-[2.5px] rounded-[1.35rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] group cursor-default"
              >
                {/* Rotating Colorful Gradient Border */}
                <motion.div
                  className="absolute -inset-[150%] rounded-full pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #BCF96A, #0081FB, #FF004F, #7B61FF, #00D084, #00F2EA, #BCF96A)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Outer Glow */}
                <motion.div
                  className="absolute -inset-[100%] rounded-full opacity-60 blur-md pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #BCF96A, #0081FB, #FF004F, #7B61FF, #00D084, #00F2EA, #BCF96A)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Black Card Content */}
                <div className="relative bg-[#121212] rounded-[1.2rem] px-8 py-6 flex flex-col items-center justify-center gap-1.5 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center gap-2.5">
                    <Image src="/branding/logo-white.svg" alt="Tiksly Logo" width={150} height={100} priority />
                  </div>
                  <span className="text-[#BCF96A] text-[11px] font-black uppercase tracking-wider mt-1">
                    one team, everything connected
                  </span>
                </div>
              </motion.div>
            </div>

            {/* The Illustration Area - Mobile View (md:hidden) */}
            <div className="flex flex-col items-center gap-5 md:hidden mb-12 px-2">
              {/* Scattered Badges Box */}
              <div className="w-full bg-neutral-50 border border-gray-200/80 rounded-3xl p-5 flex flex-col items-center gap-3">
                <p className="text-[10px] font-black text-neutral-400 tracking-wider uppercase mb-1">
                  scattered execution
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#7B61FF] text-white flex items-center justify-center">
                      <User className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[12px] font-extrabold text-black pr-1">
                      VA
                    </span>
                  </div>

                  <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#5D6B82] text-white flex items-center justify-center">
                      <User className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[12px] font-extrabold text-black pr-1">
                      Freelancer
                    </span>
                  </div>

                  <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#0081FB] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                    </div>
                    <span className="text-[12px] font-extrabold text-black pr-1">
                      Influencer guy
                    </span>
                  </div>

                  <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#FF4D4D] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line-icon lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                    </div>
                    <span className="text-[12px] font-extrabold text-black pr-1">
                      Ad manager
                    </span>
                  </div>

                  <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#00D084] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-table-icon lucide-table"><path d="M12 3v18" /><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /></svg>
                    </div>
                    <span className="text-[12px] font-extrabold text-black pr-1">
                      Spreadsheet
                    </span>
                  </div>
                </div>
              </div>

              {/* Connecting Down Arrow */}
              <div className="w-8 h-8 rounded-full bg-[#BCF96A] text-black flex items-center justify-center font-black text-sm shadow-md">
                ↓
              </div>

              {/* Tiksly Black Card (Mobile) with Animated Moving Colorful Gradient Border */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full relative p-[2.5px] rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Rotating Colorful Gradient Border */}
                <motion.div
                  className="absolute -inset-[150%] rounded-full pointer-events-none"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #BCF96A, #0081FB, #FF004F, #7B61FF, #00D084, #00F2EA, #BCF96A)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative w-full bg-[#121212] rounded-[0.9rem] p-5 flex flex-col items-center justify-center gap-1.5 text-center">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-[0.4rem] bg-[#BCF96A] text-black font-black flex items-center justify-center text-[16px]">
                      t
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tight">
                      Tiksly
                    </span>
                  </div>
                  <span className="text-[#BCF96A] text-[10px] font-black uppercase tracking-wider mt-1">
                    one team, everything connected
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Three Columns Bottom */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-[1000px] mx-auto pt-4 relative">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 relative pt-5">
                <div className="absolute top-0 left-0 w-10 h-[3px] bg-[#BCF96A]"></div>
                <h3 className="text-[22px] font-black text-black tracking-tight">
                  Scattered execution
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                  Five people, five tools,{" "}
                  <strong className="text-black font-extrabold">
                    zero coordination
                  </strong>
                  . Your creators, ads, and listings never pull in the same
                  direction.
                </p>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 relative pt-5 md:pl-10">
                {/* Desktop vertical divider */}
                <div className="hidden md:block absolute top-0 left-0 w-[1px] h-full bg-gray-100"></div>

                <div className="absolute top-0 left-0 md:left-10 w-10 h-[3px] bg-[#BCF96A]"></div>
                <h3 className="text-[22px] font-black text-black tracking-tight">
                  Wasted spend
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                  <strong className="text-black font-extrabold">
                    $1,000s burned
                  </strong>{" "}
                  on ads that don&apos;t convert and creators who take the sample and
                  vanish.
                </p>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4 relative pt-5 md:pl-10">
                {/* Desktop vertical divider */}
                <div className="hidden md:block absolute top-0 left-0 w-[1px] h-full bg-gray-100"></div>

                <div className="absolute top-0 left-0 md:left-10 w-10 h-[3px] bg-[#BCF96A]"></div>
                <h3 className="text-[22px] font-black text-black tracking-tight">
                  Lost momentum
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                  <strong className="text-black font-extrabold">
                    2 in 3 shops
                  </strong>{" "}
                  stall before they ever find traction, not from bad products,
                  from no system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <OurProcess />

        {/* FEATURES GRID SECTION */}
        <section className="bg-white py-16 md:py-24 border-y border-gray-100 select-none">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mx-auto mb-16 px-2">
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
                Full seller center operations
              </h2>
              <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">Tired of logging into the Seller Center, checking compliance
                strikes, mapping inventory levels, and reviewing creator
                messages? We take the entire operations checklist off your
                plate.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">
                  Compliance & Policy
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  We monitor account health 24/7, respond to policy violation
                  strikes, handle category approvals, and ensure your TikTok
                  Shop remains in good standing.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">
                  Product & Catalog Setup
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Optimized descriptions with keywords, high-quality images,
                  product variant setups, mapping category tags, and commission
                  rate integrations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></svg>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">
                  Logistics & 3PL Sync
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Syncing inventory levels from Shopify/ERP, tracking shipping
                  timeframes, managing courier connections, and solving courier
                  tracking update errors.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">
                  Affiliate Inbox Ops
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Triage chat messages from creators requesting free product
                  samples. Filter out low-value requests and ship samples to
                  creators that generate ROI.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">
                  Invoice & Tax Setup
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Handling tax settings inside Seller Center, managing customer
                  invoices, resolving dispute tickets, and filing payouts
                  reports.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">
                  Live & Ads Integration
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Scheduling streaming hosts, linking showcase accounts,
                  launching Shopping Ads, and optimizing campaign budgets for
                  maximum conversion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CaseStudies />
        <Testimonials />

        {/* PRICING SECTION */}
        <section className="bg-white py-16 md:py-24 select-none">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mx-auto mb-16 px-2">
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">Simple, transparent pricing
              </h2>
              <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">Get a full operations team for less than the cost of a single
                entry-level hire. No hidden fees.</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-12 rounded-[2.5rem] p-8 md:p-12 lg:p-16 bg-black border border-black text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]">
                {/* Badge */}
                <span className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-[#BCF96A] text-black text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full z-10">
                  All-in-one
                </span>

                {/* Left Column (Pricing & Info) */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-widest mb-6 text-gray-400">
                      Shop Management
                    </p>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-gray-400 text-xl font-bold mb-2">
                        from
                      </span>
                      <span className="text-[50px] lg:text-[72px] font-black tracking-tighter leading-none">
                        $1,500
                      </span>
                      <span className="text-[16px] mb-2 lg:mb-4 text-gray-400">
                        /mo
                      </span>
                    </div>
                    <p className="text-[15px] lg:text-[16px] leading-relaxed text-gray-400 font-medium max-w-sm">
                      Plus a performance-based rev-share to ensure we&apos;re
                      perfectly aligned on your growth.
                    </p>
                  </div>

                  {/* Guarantee Line - Desktop */}
                  <div className="hidden lg:flex bg-white/5 border border-white/10 rounded-2xl p-5 items-start gap-4 mt-12 max-w-md">
                    <ShieldCheck className="w-7 h-7 text-[#BCF96A] shrink-0 mt-0.5" />
                    <p className="text-[13px] text-gray-300 leading-relaxed font-medium">
                      <strong className="text-white block mb-1">
                        90-Day Guarantee
                      </strong>
                      If we don&apos;t increase your affiliate revenue within 90
                      days, we&apos;ll waive our retainer for the following month.
                    </p>
                  </div>
                </div>

                {/* Right Column (Features & CTA) */}
                <div className="flex-1 flex flex-col lg:border-l lg:border-white/10 lg:pl-12">
                  <p className="text-[18px] font-bold text-white mb-6">
                    Everything you need to scale:
                  </p>

                  <ul className="flex flex-col gap-4 mb-10 flex-1">
                    {[
                      "End-to-end TikTok Shop management",
                      "Daily affiliate outreach & inbox management",
                      "Campaign strategy & budget optimization",
                      "Listing optimization & compliance checks",
                      "Weekly reporting & Slack channel access",
                      "Dedicated account manager",
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
                      <strong className="text-white">90-Day Guarantee:</strong>{" "}
                      If we don&apos;t increase your affiliate revenue within 90
                      days, we&apos;ll waive our retainer for the following month.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-4 lg:py-5 rounded-full text-[16px] font-bold text-center transition-all duration-200 hover:scale-[1.03] active:scale-95 bg-[#BCF96A] text-black hover:bg-lime-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(188,249,106,0.15)]"
                  >
                    Book a consultation
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
