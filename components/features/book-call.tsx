"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown, CalendarDays, MessageSquare, CheckCircle } from "lucide-react";

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

export default function BookCall() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-3 lg:px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <Card className="bg-[#B4F656] bg-[radial-gradient(71.9%_62.07%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(253,249,249,0.6)_100%)] border-none rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left image */}
                <div className="relative flex items-center justify-center w-full max-w-120 mx-auto">
                  <motion.div variants={itemVariants} className="w-full z-10">
                    <Image src="/demo.webp" alt="Tom - Tiksly" width={480} height={380} priority className="w-full h-auto object-contain" />
                  </motion.div>
                </div>

                {/* Right copy */}
                <motion.div variants={itemVariants} className="flex flex-col gap-6 text-left max-w-xl lg:max-w-none">
                  <h2 className="text-[28px] md:text-[42px] xl:text-[48px] font-semibold text-[#212120] leading-[1.12] tracking-tight">
                    Want to see Tiksly in action? Get a quick demo.
                  </h2>
                  <p className="text-[14px] md:text-[16px] text-[#212120]/80 font-medium leading-relaxed">
                    Hey, I&apos;m Tom! If you&apos;re curious about Tiksly, let&apos;s hop on a brief demo call. I&apos;ll show you how to turn any product link into instant video briefs and find creators for your category.
                  </p>

                  {/* Dropdown button */}
                  <div className="pt-2">
                    <Link href={"/contact"} className="px-6 py-3 bg-black cursor-pointer text-white rounded-full text-[15px] font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
                      Contact
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
