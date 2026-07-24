"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

type FormData = { name: string; email: string; phone: string; message: string };
type FormErrors = Partial<FormData>;

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^\+?[\d\s\-().]{7,20}$/.test(form.phone)) errors.phone = "Enter a valid phone number.";
  if (!form.message.trim()) errors.message = "Please write a message.";
  else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

function GMVCounter() {
  const [count, setCount] = useState(0.0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp: number | null = null;
    const duration = 1500; // 1.5s animation duration
    const target = 1.4;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      
      setCount(easeProgress * target);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView]);

  return (
    <span ref={ref}>
      ${count.toFixed(1)}M
    </span>
  );
}

export default function BookCall() {
  const containerVariants = {
    hidden: { opacity: 1, y: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <>
      <section className="bg-white py-14 md:py-20 select-none">
        <div className="container mx-auto px-3 lg:px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <Card className="bg-[#c3fd03] border-none rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-visible shadow-xl shadow-lime-955/5">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">

                {/* Left side: Custom HTML/CSS Mockup Graphic */}
                <div className="relative flex items-center justify-center w-full max-w-[360px] md:max-w-[400px] lg:max-w-none aspect-[1.15/1] mx-auto min-h-[380px] md:min-h-[420px] select-none z-10">

                  {/* Phone Mockup */}
                  <div className="absolute left-2 md:left-6 bottom-4 w-[130px] md:w-[155px] aspect-[9/18] bg-[#131313] rounded-[2rem] border-[3.5px] border-[#222] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col items-center justify-center -rotate-6 z-0 transition-transform duration-500 hover:rotate-0">
                    {/* Speaker notch */}
                    <div className="absolute top-2 w-12 h-2.5 bg-black rounded-full" />

                    {/* Inside screen content */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-xs hover:scale-110 active:scale-95 transition-all cursor-pointer">
                        <svg className="w-3.5 h-3.5 fill-current text-white ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom badge overlay in phone */}
                    <div className="absolute bottom-4 left-3 right-3 bg-[#c3fd03] text-black text-[9px] font-black py-1.5 px-2 rounded-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
                      <span>ShopStats</span>
                    </div>
                  </div>

                  {/* Portrait Card */}
                  <div className="absolute left-[100px] md:left-[130px] bottom-8 w-[190px] md:w-[220px] aspect-[4/5] bg-[#c3fd03] rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden rotate-3 z-10 transition-transform duration-500 hover:rotate-0">
                    {/* Portrait Image */}
                    <div className="absolute inset-0 w-full h-full bg-white">
                      <Image
                        src="/avatars/ahmed.png"
                        alt="Ahmad"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>

                    {/* Bottom White Profile Strip */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-3 shadow-md flex items-center gap-2 z-20">
                      {/* Checkmark circle */}
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                        <svg className="w-3 h-3 fill-none stroke-current stroke-[3] text-[#c3fd03]" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-[11px] font-extrabold text-black leading-none">Ahmad</span>
                          <svg className="w-3.5 h-3.5 text-[#0081FB] fill-current shrink-0" viewBox="0 0 24 24">
                            <title>Verified</title>
                            <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7 3.1 5.52l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21.04l3.4 1.46 1.89-3.2 3.61-.82-.34-3.7L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-bold text-neutral-400 mt-0.5 leading-none">Founder · TikTok Shop Partner</span>
                      </div>
                    </div>
                  </div>

                  {/* GMV Status Card (Floating) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-3 right-0 md:right-4 bg-white rounded-2xl p-3.5 shadow-xl border border-black/5 flex flex-col z-20 w-[125px] md:w-[135px] rotate-3 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-center gap-1 mb-1">
                      {/* Icon */}
                      <svg className="w-3 h-3 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-tight whitespace-nowrap">GMV this shop</span>
                    </div>
                    <span className="text-[18px] font-black text-black leading-none"><GMVCounter /></span>
                    <span className="text-[8px] font-bold text-emerald-500 mt-1 flex items-center gap-0.5">
                      ↑ 12 months, from zero
                    </span>
                  </motion.div>

                  {/* Active Creators Badge */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-2 -right-4 bg-[#111] text-[#c3fd03] text-[9px] font-bold py-1.5 px-3 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5 z-20 w-fit -rotate-3 hover:scale-105 transition-transform duration-300"
                  >
                    <span className="w-1.5 h-1.5 bg-[#c3fd03] rounded-full animate-pulse" />
                    <span className="text-white">247 creators active</span>
                  </motion.div>

                </div>

                {/* Right Copy */}
                <motion.div variants={itemVariants} className="flex flex-col gap-6 text-left max-w-xl lg:max-w-none">
                  <h2 className="text-[32px] md:text-[44px] xl:text-[50px] font-extrabold text-black leading-[1.1] tracking-tight">
                    Let&apos;s build the shop your{" "}
                    <span className="bg-white/90 px-2 py-0.5 rounded-lg inline-block shadow-xs">competitors</span>{" "}
                    <span className="bg-white/90 px-2 py-0.5 rounded-lg inline-block shadow-xs">wish</span>{" "}
                    they had.
                  </h2>
                  <p className="text-[15px] md:text-[17px] text-[#212120]/80 font-medium leading-relaxed">
                    Book a free growth call. We'll audit your shop, show you exactly where the money is leaking, and hand you a plan whether you work with us or not. Twenty minutes and zero pressure.
                  </p>

                  <div className="flex flex-col gap-3 pt-2">
                    <Link
                      href="/contact"
                      className="px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-bold hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 inline-flex items-center gap-2 group w-fit cursor-pointer"
                    >
                      <span>Get my free growth plan</span>
                      <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                    </Link>
                  </div>
                </motion.div>

              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
