"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CreditCard } from "lucide-react";
import { Mail } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RequirementCard = {
  id: number;
  title: string;
  desc: string;
  badge: { text: string; type: "help" | "required" | "specific" };
  iconType: "document" | "id" | "bill" | "card" | "tax" | "contact";
};

const regionRequirements: Record<string, RequirementCard[]> = {
  "United States": [
    {
      id: 1,
      title: "LLC company",
      desc: "A registered US LLC. No LLC yet? We can set one up.",
      badge: { text: "We can help", type: "help" },
      iconType: "document",
    },
    {
      id: 2,
      title: "ID or passport",
      desc: "For identity verification",
      badge: { text: "Required", type: "required" },
      iconType: "id",
    },
    {
      id: 3,
      title: "Utility bill",
      desc: "As proof of address",
      badge: { text: "Required", type: "required" },
      iconType: "bill",
    },
    {
      id: 4,
      title: "Business bank account",
      desc: "For payouts. We can guide you through it.",
      badge: { text: "We can help", type: "help" },
      iconType: "card",
    },
    {
      id: 5,
      title: "SSN or EIN",
      desc: "Tax ID required for US verification",
      badge: { text: "US only", type: "specific" },
      iconType: "tax",
    },
    {
      id: 6,
      title: "Email & phone",
      desc: "For the account and notifications",
      badge: { text: "Required", type: "required" },
      iconType: "contact",
    },
  ],
  "United Kingdom": [
    {
      id: 1,
      title: "LTD company",
      desc: "A registered UK LTD. No LTD yet? We can set one up.",
      badge: { text: "We can help", type: "help" },
      iconType: "document",
    },
    {
      id: 2,
      title: "ID or passport",
      desc: "For identity verification",
      badge: { text: "Required", type: "required" },
      iconType: "id",
    },
    {
      id: 3,
      title: "Utility bill",
      desc: "As proof of address",
      badge: { text: "Required", type: "required" },
      iconType: "bill",
    },
    {
      id: 4,
      title: "Business bank account",
      desc: "For payouts. We can guide you through it.",
      badge: { text: "We can help", type: "help" },
      iconType: "card",
    },
    {
      id: 5,
      title: "UTR or VAT",
      desc: "Tax ID required for UK verification",
      badge: { text: "UK only", type: "specific" },
      iconType: "tax",
    },
    {
      id: 6,
      title: "Email & phone",
      desc: "For the account and notifications",
      badge: { text: "Required", type: "required" },
      iconType: "contact",
    },
  ],
  Netherlands: [
    {
      id: 1,
      title: "BV company or KVK",
      desc: "A registered Dutch entity. We can advise on setup.",
      badge: { text: "We can help", type: "help" },
      iconType: "document",
    },
    {
      id: 2,
      title: "ID or passport",
      desc: "For identity verification",
      badge: { text: "Required", type: "required" },
      iconType: "id",
    },
    {
      id: 3,
      title: "Utility bill",
      desc: "As proof of address",
      badge: { text: "Required", type: "required" },
      iconType: "bill",
    },
    {
      id: 4,
      title: "Business bank account",
      desc: "For payouts. We can guide you through it.",
      badge: { text: "We can help", type: "help" },
      iconType: "card",
    },
    {
      id: 5,
      title: "BTW (VAT) Number",
      desc: "Tax ID required for NL verification",
      badge: { text: "NL only", type: "specific" },
      iconType: "tax",
    },
    {
      id: 6,
      title: "Email & phone",
      desc: "For the account and notifications",
      badge: { text: "Required", type: "required" },
      iconType: "contact",
    },
  ],
};

const regions = ["United States", "United Kingdom", "Netherlands"];

export default function RequirementsSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("United States");

  const cards = regionRequirements[selectedRegion];

  const renderIcon = (type: RequirementCard["iconType"]) => {
    const iconContainerClass =
      "w-16 h-16 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center justify-center border border-gray-100";

    switch (type) {
      case "document":
        return (
          <div className={iconContainerClass}>
            <FileText className="w-8 h-8 text-[#BCF96A]" strokeWidth={1.5} />
          </div>
        );
      case "id":
        return (
          <div className={iconContainerClass}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-[#BCF96A]"
            >
              <path d="M16 10h2" />
              <path d="M16 14h2" />
              <path d="M6.17 15a3 3 0 0 1 5.66 0" />
              <circle cx="9" cy="11" r="2" />
              <rect x="2" y="5" width="20" height="14" rx="2" />
            </svg>
          </div>
        );
      case "bill":
        return (
          <div className={iconContainerClass}>
            <FileText className="w-8 h-8 text-[#BCF96A]" strokeWidth={1.5} />
          </div>
        );
      case "card":
        return (
          <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl shadow-lg flex items-center justify-center border border-gray-800 relative overflow-hidden">
            {/* Simulating a credit card look */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <CreditCard className="w-8 h-8 text-[#BCF96A]" strokeWidth={1.5} />
          </div>
        );
      case "tax":
        return (
          <div className="w-20 h-12 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center justify-center border border-gray-100 px-3">
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="w-full flex justify-between px-1">
                <div className="h-1 w-2 bg-gray-200 rounded-full"></div>
                <div className="h-1 w-4 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-gray-300"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        );
      case "contact":
        return (
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center justify-center border border-gray-100">
              <Mail className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
            </div>
            <div className="w-10 h-10 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center justify-center border border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-black"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] border-y border-gray-100 select-none">
      <div className="container mx-auto px-4 lg:px-6 max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] font-black tracking-tight text-black leading-tight md:leading-[1.1] mb-5">
            What you need for approval
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16.5px] leading-relaxed font-medium">
            Requirements depend on the market you want to sell in. Choose yours
            below, we&apos;ll handle the rest.
          </p>
        </motion.div>

        {/* Region Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <span className="text-[14px] font-bold text-gray-500">
            I want to sell in:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-5 py-2.5 rounded-full text-[13.5px] font-bold transition-all duration-200 border ${
                  selectedRegion === region
                    ? "bg-black text-white border-black shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRegion}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-[2rem] border border-gray-200/80 overflow-hidden flex flex-col shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* Top Section */}
                  <div className="relative h-[160px] bg-[#F6FED9]/60 flex items-center justify-center p-6 border-b border-[#BCF96A]/20">
                    {/* Number Badge */}
                    <div className="absolute top-5 left-5 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-[12px] font-black shadow-sm">
                      {card.id}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-5 right-5">
                      <span
                        className={`px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                          card.badge.type === "help"
                            ? "bg-[#BCF96A] text-black"
                            : card.badge.type === "required"
                              ? "bg-white text-gray-500 shadow-sm border border-gray-100"
                              : "bg-white text-gray-500 shadow-sm border border-gray-100"
                        }`}
                      >
                        {card.badge.text}
                      </span>
                    </div>

                    {/* Icon */}
                    {renderIcon(card.iconType)}
                  </div>

                  {/* Bottom Section */}
                  <div className="p-6 md:p-8 flex flex-col gap-2">
                    <h3 className="text-[18px] font-black text-black tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-[14.5px] text-gray-500 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Working Examples Carousel */}
        <div className="mt-20 border-t border-gray-200/60 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-3">
              Working Examples
            </h3>
            <p className="text-gray-500 text-[15px] max-w-2xl mx-auto">
              See some of the successful shop verifications and real documents we process daily.
            </p>
          </div>
          
          <div className="relative w-full overflow-hidden py-4">
            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
            
            <div className="flex flex-nowrap w-max">
              {[0, 1].map((loopIdx) => (
                <motion.div
                  key={loopIdx}
                  className="flex items-center gap-6 md:gap-8 flex-nowrap shrink-0 pr-6 md:pr-8"
                  animate={{ x: [0, "-100%"] }}
                  transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                  }}
                >
                  {[
                    "/id-cards/left-side-1.png",
                    "/id-cards/left-side-2.png",
                    "/id-cards/right-side-1.png",
                    "/id-cards/right-side-2.png",
                  ].map((src, idx) => (
                    <div 
                      key={`${loopIdx}-${idx}`}
                      className="relative w-[280px] h-[180px] md:w-[320px] md:h-[200px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm shrink-0 bg-white"
                    >
                      <Image
                        src={src}
                        alt="Working Example"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 280px, 320px"
                      />
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
