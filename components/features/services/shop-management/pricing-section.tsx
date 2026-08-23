import Link from "next/link";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="bg-white pb-14 md:pb-18">
      <div className="container mx-auto">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
            Get a full operations team for less than the cost of a single
            entry-level hire. No hidden fees.
          </p>
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
                  <strong className="text-white">90-Day Guarantee:</strong> If
                  we don&apos;t increase your affiliate revenue within 90 days,
                  we&apos;ll waive our retainer for the following month.
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
  );
};

export default PricingSection;
