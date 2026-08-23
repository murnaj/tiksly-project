"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Store } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// type FormData = { name: string; email: string; phone: string; message: string };
// type FormErrors = Partial<FormData>;

// function validate(form: FormData): FormErrors {
//   const errors: FormErrors = {};
//   if (!form.name.trim()) errors.name = "Full name is required.";
//   if (!form.email.trim()) errors.email = "Email is required.";
//   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";
//   if (!form.phone.trim()) errors.phone = "Phone number is required.";
//   else if (!/^\+?[\d\s\-().]{7,20}$/.test(form.phone)) errors.phone = "Enter a valid phone number.";
//   if (!form.message.trim()) errors.message = "Please write a message.";
//   else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
//   return errors;
// }

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

  return <span ref={ref}>${count.toFixed(1)}M</span>;
}

export default function BookCall() {
  const containerVariants = {
    hidden: { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: EASE,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <>
      <section className="bg-white pb-24 md:pb-32">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <Card className="bg-[#c3fd03] border-none rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-visible shadow-xl shadow-lime-955/5">
              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
                {/* Left side: Custom HTML/CSS Mockup Graphic */}
                <div className="relative w-[300px] sm:w-[340px] md:w-[410px] aspect-[1/1.1] mx-auto select-none z-10">
                  {/* Phone Mockup */}
                  <div className="absolute left-[-15px] sm:left-[-25px] md:left-[-35px] top-[60px] md:top-[80px] w-[110px] sm:w-[130px] md:w-[155px] aspect-[9/18] bg-[#131313] rounded-[2rem] border-[3.5px] border-[#222] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col items-center justify-center -rotate-6 z-0 transition-transform duration-500 hover:rotate-0">
                    {/* Speaker notch */}
                    <div className="absolute top-2 w-12 h-2.5 bg-black rounded-full" />

                    {/* Lottie Animation fills phone screen */}
                    <div className="absolute inset-0 w-full h-full">
                      <DotLottieReact
                        src="https://lottie.host/a9807c32-ed46-4f73-96fb-d37775c892ae/kEBONTJRLo.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>

                  {/* Portrait Card */}
                  <div className="absolute left-[65px] sm:left-[80px] md:left-[95px] top-[40px] md:top-[50px] w-[190px] sm:w-[230px] md:w-[275px] aspect-[4/5] bg-[#d4d6cf] rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.02]">
                    {/* Portrait Image */}
                    <div className="absolute inset-0 w-full h-full bg-[#d4d6cf] flex items-center justify-center">
                      <Image
                        src="/avatars/ahmad.jpg"
                        alt="Ahmad"
                        width={500}
                        height={190}
                        priority
                      />
                    </div>

                    {/* Bottom White Profile Strip */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-3 shadow-md flex items-center gap-2 z-20">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="text-[11px] font-extrabold text-black leading-none">
                            Ahmad
                          </span>
                          <svg
                            className="w-3.5 h-3.5 text-[#0081FB] fill-current shrink-0"
                            viewBox="0 0 24 24"
                          >
                            <title>Verified</title>
                            <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.7 3.1 5.52l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21.04l3.4 1.46 1.89-3.2 3.61-.82-.34-3.7L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <span className="text-[8px] font-bold text-neutral-400 mt-0.5 leading-none">
                          TikTok Shop Agency Creator Partner (CAP)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* GMV Status Card (Floating) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="absolute right-[-15px] sm:right-[-25px] md:right-[-30px] top-[5px] md:top-[10px] bg-white rounded-2xl p-3.5 shadow-xl border border-black/5 flex flex-col z-20 w-[110px] sm:w-[130px] md:w-[145px] rotate-3 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="flex items-center gap-1 mb-1">
                      {/* Icon */}
                      <Store className="w-3 h-3 text-indigo-500 shrink-0" />
                      <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-tight whitespace-nowrap">
                        GMV this shop
                      </span>
                    </div>
                    <span className="text-[18px] font-black text-black leading-none">
                      <GMVCounter />
                    </span>
                    <span className="text-[8px] font-bold text-emerald-500 mt-1 flex items-center gap-0.5">
                      ↑ 12 months, from zero
                    </span>
                  </motion.div>

                  {/* Active Creators Badge */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-9 md:bottom-14 right-[-15px] sm:right-[-25px] md:right-[-35px] bg-[#111] text-[#c3fd03] text-[9px] font-bold py-1.5 px-3 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5 z-20 w-fit rotate-6 hover:scale-105 transition-transform duration-300"
                  >
                    <span className="w-1.5 h-1.5 bg-[#c3fd03] rounded-full animate-pulse" />
                    <span className="text-white">247 creators active</span>
                  </motion.div>
                </div>

                {/* Right Copy */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-6 text-left max-w-xl lg:max-w-none"
                >
                  <h2 className="text-[32px] md:text-[44px] xl:text-[50px] font-extrabold text-black leading-[1.1] tracking-tight">
                    Let&apos;s build the shop your{" "}
                    <span className="bg-white/90 px-2 py-0.5 rounded-lg inline-block shadow-xs">
                      competitors
                    </span>{" "}
                    <span className="bg-white/90 px-2 py-0.5 rounded-lg inline-block shadow-xs">
                      wish
                    </span>{" "}
                    they had.
                  </h2>
                  <p className="text-[15px] md:text-[17px] text-[#212120]/80 font-medium leading-relaxed">
                    Book a free growth call. We&apos;ll audit your shop, show
                    you exactly where the money is leaking, and hand you a plan
                    whether you work with us or not. Twenty minutes and zero
                    pressure.
                  </p>

                  <div className="flex flex-col gap-3 pt-2">
                    <Link
                      href="/contact"
                      className="px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-bold hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-95 inline-flex items-center gap-2 group w-fit cursor-pointer"
                    >
                      <span>Get my free growth plan</span>
                      <span className="transition-transform group-hover:translate-x-1 duration-200">
                        →
                      </span>
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
