"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Setup Time",
      tiksly: "48 Hours",
      others: "2-3 Weeks",
    },
    {
      feature: "Approval Guarantee",
      tiksly: "100% Guaranteed or Refund",
      others: "None (At your own risk)",
    },
    {
      feature: "Direct TSP Channels",
      tiksly: "Yes (Fast-tracked)",
      others: "No (Standard queue)",
    },
    {
      feature: "Account Health on Launch",
      tiksly: "Pristine (Pre-audited)",
      others: "High risk of initial flags",
    },
    {
      feature: "Pricing Model",
      tiksly: "Flat One-time Fee",
      others: "Hidden Fees / Hourly Rates",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-gray-100 select-none">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black tracking-tighter text-black leading-[1.05] mb-6">
              Why settle for less?
            </h2>
            <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed font-medium">
              See how our streamlined approach to TikTok Shop account creation compares against the slow, traditional agency model.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-5 md:p-6 flex items-center">
                <span className="text-[13px] md:text-[15px] font-bold text-gray-500 uppercase tracking-widest">
                  Features
                </span>
              </div>
              <div className="p-5 md:p-6 border-l border-gray-200 bg-[#BCF96A]/10">
                <span className="text-[18px] md:text-[22px] font-black text-black">
                  Tiksly
                </span>
              </div>
              <div className="p-5 md:p-6 border-l border-gray-200">
                <span className="text-[15px] md:text-[18px] font-bold text-gray-400">
                  Other Agencies
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="divide-y divide-gray-100 bg-white">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 hover:bg-gray-50/50 transition-colors">
                  <div className="p-5 md:p-6 flex items-center">
                    <span className="text-[14px] md:text-[16px] font-semibold text-gray-800">
                      {row.feature}
                    </span>
                  </div>
                  
                  {/* Tiksly Column */}
                  <div className="p-5 md:p-6 border-l border-gray-200 bg-[#BCF96A]/5">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#BCF96A] flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3 h-3 text-black" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] md:text-[16px] font-bold text-black text-center">
                        {row.tiksly}
                      </span>
                    </div>
                  </div>

                  {/* Others Column */}
                  <div className="p-5 md:p-6 border-l border-gray-200 text-center">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-gray-300 shrink-0" />
                      <span className="text-[14px] md:text-[15px] font-medium text-gray-400">
                        {row.others}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
