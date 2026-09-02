"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, CreditCard, Globe } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
  "Other regions": [
    {
      id: 1,
      title: "Local company entity",
      desc: "A registered company entity. We can advise on setup.",
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
      title: "Tax ID (VAT/GST)",
      desc: "Tax ID required for verification",
      badge: { text: "Required", type: "specific" },
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

const regionsData = [
  { id: "United States", name: "United States", flag: "/flags/usa.jpg" },
  { id: "United Kingdom", name: "United Kingdom", flag: "/flags/uk.jpg" },
  { id: "Other regions", name: "Other regions", flag: null },
];

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
    <section className="pb-14 md:pb-18">
      <div className="container mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] font-black tracking-tight text-black leading-tight md:leading-[1.1] mb-5">
            What you need for approval
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16.5px] leading-relaxed font-medium">
            Requirements depend on the market you want to sell in. Choose yours
            below, we&apos;ll handle the rest.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <span className="text-[14px] font-bold text-gray-500">
            I want to sell in:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {regionsData.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-5 py-2.5 rounded-full cursor-pointer text-[13.5px] font-bold transition-all duration-200 border flex items-center gap-2.5 ${
                  selectedRegion === region.id
                    ? "bg-black text-white border-black shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {region.flag ? (
                  <Image
                    src={region.flag}
                    alt={`${region.name} flag`}
                    width={20}
                    height={14}
                    className="rounded-[2px] object-cover h-[14px] w-[20px]"
                  />
                ) : (
                  <Globe className="w-[16px] h-[16px] opacity-70" strokeWidth={2.5} />
                )}
                {region.name}
              </button>
            ))}
          </div>
        </div>

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

        <div className="flex justify-center">
          <Link
            href="/book-a-meeting"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-center"
          >
            Start my Setup
          </Link>
        </div>
      </div>
    </section>
  );
}
