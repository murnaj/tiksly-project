"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProblemSection = () => {
  return (
    <section className="pt-14 md:pt-18 pb-14 md:pb-18 bg-gradient-to-b from-white via-[#F6FED9] to-white select-none overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tighter leading-[1.05]">
            <span className="text-black">73% of TikTok Shops stall in 90</span>
            <br className="hidden md:block" />
            <span className="text-black">days — </span>
            <span className="text-[#BCF96A]">
              because no one&apos;s running
              <br className="hidden md:block" /> the whole thing
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[17px] mt-6 leading-relaxed max-w-3xl mx-auto font-medium">
            A freelancer here. A VA there. An &quot;influencer guy&quot; who
            ghosts. It&apos;s not a team, it&apos;s a tangle, and your sales are
            stuck in the knots.
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-smartphone-icon lucide-smartphone"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
            <span className="text-[13px] font-extrabold text-black pr-2">
              Influencer guy
            </span>
          </div>

          <div className="absolute top-[35%] left-[28%] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2 z-10 hover:-translate-y-1 transition-transform cursor-default">
            <div className="w-7 h-7 rounded bg-[#FF4D4D] text-white flex items-center justify-center shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chart-line-icon lucide-chart-line"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <span className="text-[13px] font-extrabold text-black pr-2">
              Ad manager
            </span>
          </div>

          <div className="absolute top-[70%] left-[32%] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2.5 flex items-center gap-2 z-10 hover:-translate-y-1 transition-transform cursor-default">
            <div className="w-7 h-7 rounded bg-[#00D084] text-white flex items-center justify-center shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-table-icon lucide-table"
              >
                <path d="M12 3v18" />
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M3 15h18" />
              </svg>
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
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Outer Glow */}
            <motion.div
              className="absolute -inset-[100%] rounded-full opacity-60 blur-md pointer-events-none"
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

            {/* Inner Black Card Content */}
            <div className="relative bg-[#121212] rounded-[1.2rem] px-8 py-6 flex flex-col items-center justify-center gap-1.5 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/branding/logo-white.svg"
                  alt="Tiksly Logo"
                  width={150}
                  height={100}
                  priority
                />
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-smartphone-icon lucide-smartphone"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <span className="text-[12px] font-extrabold text-black pr-1">
                  Influencer guy
                </span>
              </div>

              <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#FF4D4D] text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chart-line-icon lucide-chart-line"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="m19 9-5 5-4-4-3 3" />
                  </svg>
                </div>
                <span className="text-[12px] font-extrabold text-black pr-1">
                  Ad manager
                </span>
              </div>

              <div className="bg-white rounded-xl shadow-xs border border-gray-100 p-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#00D084] text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-table-icon lucide-table"
                  >
                    <path d="M12 3v18" />
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M3 15h18" />
                  </svg>
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
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
              }}
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
              on ads that don&apos;t convert and creators who take the sample
              and vanish.
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
              stall before they ever find traction, not from bad products, from
              no system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
