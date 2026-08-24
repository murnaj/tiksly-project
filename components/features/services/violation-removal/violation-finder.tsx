"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type ViolationItem = {
  id: string;
  title: string;
  description: string;
};

type ViolationCategory = {
  id: string;
  label: string;
  items: ViolationItem[];
};

const violationData: ViolationCategory[] = [
  {
    id: "trademark",
    label: "Trademark & IP",
    items: [
      {
        id: "tm-1",
        title: "Trademark Infringement Claim",
        description:
          "This violation occurs when another party claims you are using their trademark without permission. We help you draft a strong appeal and provide necessary documentation to prove authenticity or secure authorization.",
      },
      {
        id: "tm-2",
        title: "Copyright Infringement Claim",
        description:
          "If your images, videos, or product descriptions are flagged for copyright infringement, our team will help you submit a counter-notice or navigate the process to get your listings reinstated.",
      },
      {
        id: "tm-3",
        title: "Brand Authorization Missing / Required",
        description:
          "TikTok Shop requires explicit brand authorization for many branded products. We guide you through the process of obtaining and properly submitting authorization letters to lift restrictions.",
      },
      {
        id: "tm-4",
        title: "Counterfeit or Knockoff Product",
        description:
          "A serious violation that can suspend your shop. We work with you to gather supplier invoices, certificates of authenticity, and draft an appeal to prove your items are genuine.",
      },
      {
        id: "tm-5",
        title: "Brand Circumvention Behaviors",
        description:
          "Using tactics to bypass brand gating or manipulating keywords to sell branded items will trigger this. We help you clean up your listings and submit a corrective action plan.",
      },
    ],
  },
  {
    id: "identity",
    label: "Identity & verification",
    items: [
      {
        id: "id-1",
        title: "Failed Identity Verification",
        description:
          "If your submitted documents were rejected, we help you prepare and submit the correct, clearly legible IDs or business documents required by TikTok's compliance team.",
      },
      {
        id: "id-2",
        title: "Suspicious Registration Activity",
        description:
          "Flagged for unusual patterns during sign-up? We help clarify your business structure and operations to TikTok to get the suspension lifted.",
      },
    ],
  },
  {
    id: "shipping",
    label: "Shipping & fulfillment",
    items: [
      {
        id: "ship-1",
        title: "Late Dispatch Rate (LDR) Violation",
        description:
          "Consistently shipping late damages your shop score. We help you appeal the violation and formulate a better fulfillment plan to present to TikTok.",
      },
      {
        id: "ship-2",
        title: "Seller Cancellation Rate",
        description:
          "Canceling too many orders due to stock issues? We can help you submit an appeal demonstrating improved inventory management processes.",
      },
    ],
  },
  {
    id: "product",
    label: "Product & listing",
    items: [
      {
        id: "prod-1",
        title: "Prohibited Products",
        description:
          "Listed an item not allowed on TikTok Shop? We help you appeal, remove the offending listings, and ensure the rest of your catalog complies with their guidelines.",
      },
      {
        id: "prod-2",
        title: "Misleading Product Information",
        description:
          "If your product title or description is deemed deceptive, we help you revise the listing and submit an appeal to reinstate it.",
      },
    ],
  },
  {
    id: "store",
    label: "Store & account",
    items: [
      {
        id: "store-1",
        title: "High Negative Review Rate",
        description:
          "Too many negative reviews can lead to store probation. We assist in addressing the root causes and submitting a plan of action to TikTok to restore your shop's standing.",
      },
      {
        id: "store-2",
        title: "Severe Shop Policy Violation",
        description:
          "For complex, severe violations leading to permanent bans, our team conducts a deep audit and prepares a comprehensive legal-style appeal.",
      },
    ],
  },
];

export default function ViolationFinder() {
  const [activeCategory, setActiveCategory] = useState(violationData[0].id);
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const activeCategoryData = violationData.find(
    (cat) => cat.id === activeCategory,
  );

  const toggleAccordion = (id: string) => {
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      setOpenAccordionId(id);
    }
  };

  return (
    <section className="pb-14 md:pb-18">
      <div className="container mx-auto max-w-[1000px]">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[45px] font-black tracking-tight text-black leading-tight md:leading-[1.1] mb-5">
            Which violation did you get?
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16.5px] leading-relaxed max-w-2xl mx-auto font-medium">
            Pick a category, find your violation, and see exactly what it takes
            to appeal it. Then let us handle the whole thing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-10">
          {violationData.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenAccordionId(null);
                }}
                className={`px-5 py-2.5 rounded-full text-[13.5px] font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white shadow-md scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              {activeCategoryData?.items.map((item) => {
                const isOpen = openAccordionId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#BCF96A] shadow-md"
                        : "border-gray-100 shadow-sm hover:border-gray-200"
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between p-5 md:px-6 md:py-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        {/* Pink Exclamation Badge */}
                        <div className="w-6 h-6 rounded-md bg-[#FFF0F0] flex items-center justify-center shrink-0">
                          <span className="text-[#FF5252] text-[13px] font-black">
                            !
                          </span>
                        </div>
                        <span className="text-[15px] md:text-[16px] font-bold text-gray-900 pr-4">
                          {item.title}
                        </span>
                      </div>

                      {/* Plus/Minus Icon */}
                      <div className="shrink-0 text-gray-400">
                        {isOpen ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                          >
                            <path d="M5 12h14" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 md:px-6 pb-6 pt-1 text-gray-500 text-[14.5px] leading-relaxed pl-15">
                            {item.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-[14px] font-medium">
            Don&apos;t see yours, or not sure which one it is? We handle 30+
            violation types.
          </p>

          <div className="flex justify-center">
            <Link
              href="/book-a-meeting"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-center"
            >
              Send us your violation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
