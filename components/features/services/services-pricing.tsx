"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "/mo",
    desc: "Perfect for brands just getting started with TikTok Ads.",
    features: [
      "Up to $5k monthly ad spend",
      "2 creatives per month",
      "1 creator partnership",
      "Weekly performance report",
      "TikTok Ads account setup",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$2,499",
    period: "/mo",
    desc: "For brands ready to scale with data and creator partnerships.",
    features: [
      "Up to $25k monthly ad spend",
      "6 creatives per month",
      "3 creator partnerships",
      "Bi-weekly strategy calls",
      "A/B testing & optimization",
      "Dedicated account manager",
      "Priority support",
    ],
    cta: "Start Growing",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "Enterprise-level campaigns with full-service management.",
    features: [
      "Unlimited ad spend managed",
      "Unlimited creatives",
      "10+ creator partnerships",
      "Weekly strategy calls",
      "Full CreativeOps access",
      "Custom reporting dashboard",
      "Dedicated team",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function ServicesPricing() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-50">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4 leading-tight">
            Pricing
          </p>
          <p className="text-gray-500 text-[15px] mt-5 max-w-lg mx-auto leading-relaxed">
            No hidden fees. No lock-in contracts. Pick the plan that fits your brand and scale when you&apos;re ready.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className={`relative flex flex-col rounded-[2rem] p-8 border transition-shadow duration-300 ${plan.highlight
                  ? "bg-black border-black text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]"
                  : "bg-[#F9F9F9] border-gray-100 text-black hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]"
                }`}
            >
              {plan.highlight && (
                <span className="absolute top-6 right-6 bg-[#BCF96A] text-black text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <p className="text-[12px] font-semibold uppercase tracking-widest mb-4 text-gray-400">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-[38px] md:text-[42px] font-black tracking-tighter leading-none">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[14px] mb-1.5 text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className={`text-[13px] leading-relaxed ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Divider */}
              <div className={`w-full h-px mb-6 ${plan.highlight ? "bg-white/10" : "bg-gray-200"}`} />

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? "bg-[#BCF96A]" : "bg-black"}`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? "text-black" : "text-white"}`} strokeWidth={2.5} />
                    </span>
                    <span className={`text-[13px] leading-relaxed ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-demo"
                className={`w-full py-3.5 rounded-full text-[14px] font-semibold text-center transition-all duration-200 hover:scale-[1.03] active:scale-95 ${plan.highlight
                    ? "bg-[#BCF96A] text-black hover:bg-lime-300"
                    : "bg-black text-white hover:bg-gray-800"
                  }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
