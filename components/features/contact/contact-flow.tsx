"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  Video,
  Handshake,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ViewType = "hub" | "brand" | "creator" | "agency";

export default function ContactFlow({ initialView = "hub" }: { initialView?: ViewType }) {
  const [view, setView] = useState<ViewType>(initialView);

  // Brand Form State
  const [brandStep, setBrandStep] = useState<number>(1);
  const [brandName, setBrandName] = useState("");
  const [brandEmail, setBrandEmail] = useState("");
  const [brandLink, setBrandLink] = useState("");
  const [brandRev, setBrandRev] = useState("Just starting ($0)");
  const [brandMarket, setBrandMarket] = useState("United States");
  const [brandNeed, setBrandNeed] = useState("Full shop management");
  const [brandChallenge, setBrandChallenge] = useState("");
  const [brandErrors, setBrandErrors] = useState<{ name?: boolean; email?: boolean }>({});

  // Strategy Call Slot Selection
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Creator Form State
  const [creatorSubmitted, setCreatorSubmitted] = useState(false);
  const [creatorName, setCreatorName] = useState("");
  const [creatorHandle, setCreatorHandle] = useState("");
  const [creatorFollowers, setCreatorFollowers] = useState("");
  const [creatorGmv, setCreatorGmv] = useState("");
  const [creatorNiche, setCreatorNiche] = useState("");
  const [creatorCountry, setCreatorCountry] = useState("");

  // Agency Form State
  const [agencySubmitted, setAgencySubmitted] = useState(false);
  const [agencyName, setAgencyName] = useState("");
  const [agencyWebsite, setAgencyWebsite] = useState("");
  const [agencyServices, setAgencyServices] = useState("");
  const [agencyVolume, setAgencyVolume] = useState("");
  const [agencyMarkets, setAgencyMarkets] = useState("");

  // Navigation Helper
  const navigateToView = (targetView: ViewType) => {
    setView(targetView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 1 Validation
  const handleBrandStep1Next = () => {
    const errors: { name?: boolean; email?: boolean } = {};
    if (!brandName.trim()) errors.name = true;
    if (!brandEmail.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(brandEmail)) errors.email = true;

    if (Object.keys(errors).length > 0) {
      setBrandErrors(errors);
      return;
    }

    setBrandErrors({});
    setBrandStep(2);
  };

  const handleBrandSubmit = () => {
    setBrandStep(4);
  };


  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-8 md:pb-16">
      <AnimatePresence mode="wait">
        {/* ==================== HUB VIEW ==================== */}
        {view === "hub" && (
          <motion.div
            key="hub"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black leading-tight mb-3">
              Let's talk{" "}
              <span className="inline-block bg-[#BCF96A] text-black px-3.5 py-0.5 rounded-2xl">
                growth
              </span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mb-10 max-w-lg mx-auto">
              Pick the option that fits you — it takes two minutes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              {/* Card 1: Brand (Primary) */}
              <div
                onClick={() => navigateToView("brand")}
                className="relative bg-white border-2 border-black rounded-3xl p-7 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              >
                <div className="absolute -top-3.5 left-6 bg-[#BCF96A] text-black font-extrabold text-xs uppercase px-3 py-1 rounded-full tracking-wider shadow-2xs">
                  Most popular
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#BCF96A] flex items-center justify-center text-black mb-5 group-hover:scale-105 transition-transform">
                    <Store className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">I'm a brand</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    I want to grow my revenue on TikTok Shop
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-black font-extrabold text-sm group-hover:gap-3 transition-all">
                  <span>Get my growth plan</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card 2: Creator */}
              <div
                onClick={() => navigateToView("creator")}
                className="bg-white border border-gray-200 rounded-3xl p-7 hover:border-black hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#BCF96A] flex items-center justify-center text-black mb-5 group-hover:scale-105 transition-transform">
                    <Video className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">I'm a creator</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    I'm looking for brand partnerships and deals
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-black font-extrabold text-sm group-hover:gap-3 transition-all">
                  <span>Apply to join</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card 3: Agency */}
              <div
                onClick={() => navigateToView("agency")}
                className="bg-white border border-gray-200 rounded-3xl p-7 hover:border-black hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#BCF96A] flex items-center justify-center text-black mb-5 group-hover:scale-105 transition-transform">
                    <Handshake className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">I'm an agency</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    I want to white-label Tiksly's TikTok Shop services
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-black font-extrabold text-sm group-hover:gap-3 transition-all">
                  <span>Partner with us</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 text-xs sm:text-sm text-gray-600 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Verified TikTok Shop Partner (US + UK)
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                Rated on Trustpilot
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-black shrink-0" />
                Reply within 24 hours
              </span>
            </div>
          </motion.div>
        )}

        {/* ==================== BRAND VIEW ==================== */}
        {view === "brand" && (
          <motion.div
            key="brand"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => navigateToView("hub")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black mb-6 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>All contact options</span>
            </button>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10">
                {/* Left Form */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-1">
                    Get your TikTok Shop growth plan
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    {brandStep < 4
                      ? `Step ${brandStep} of 3 · takes 60 seconds`
                      : "Application submitted ✅"}
                  </p>

                  {/* Progress Bar */}
                  <div className="flex gap-2 mb-6">
                    <div
                      className={cn(
                        "h-1.5 flex-1 rounded-full transition-all duration-300",
                        brandStep >= 1 ? "bg-black" : "bg-gray-100"
                      )}
                    />
                    <div
                      className={cn(
                        "h-1.5 flex-1 rounded-full transition-all duration-300",
                        brandStep >= 2 ? "bg-black" : "bg-gray-100"
                      )}
                    />
                    <div
                      className={cn(
                        "h-1.5 flex-1 rounded-full transition-all duration-300",
                        brandStep >= 3 ? "bg-black" : "bg-gray-100"
                      )}
                    />
                  </div>

                  {/* Step 1 */}
                  {brandStep === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Your name *
                        </label>
                        <input
                          type="text"
                          value={brandName}
                          onChange={(e) => setBrandName(e.target.value)}
                          placeholder="Ahmad Khan"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all",
                            brandErrors.name
                              ? "border-red-500 focus:border-red-600"
                              : "border-gray-200 focus:border-black"
                          )}
                        />
                        {brandErrors.name && (
                          <p className="text-xs text-red-500 mt-1">Please enter your name</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Work email *
                        </label>
                        <input
                          type="email"
                          value={brandEmail}
                          onChange={(e) => setBrandEmail(e.target.value)}
                          placeholder="name@yourbrand.com"
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all",
                            brandErrors.email
                              ? "border-red-500 focus:border-red-600"
                              : "border-gray-200 focus:border-black"
                          )}
                        />
                        {brandErrors.email && (
                          <p className="text-xs text-red-500 mt-1">
                            Please enter a valid email address
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Shop or website link
                        </label>
                        <input
                          type="text"
                          value={brandLink}
                          onChange={(e) => setBrandLink(e.target.value)}
                          placeholder="tiktok.com/@yourshop"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                        />
                      </div>

                      <button
                        onClick={handleBrandStep1Next}
                        className="w-full py-3.5 bg-black text-white font-bold text-sm rounded-full hover:bg-gray-800 transition-all hover:scale-[1.01] active:scale-95 mt-4 cursor-pointer"
                      >
                        Continue →
                      </button>
                    </div>
                  )}

                  {/* Step 2 */}
                  {brandStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Monthly revenue range
                        </label>
                        <Select value={brandRev} onValueChange={setBrandRev}>
                          <SelectTrigger className="w-full h-12 px-4 rounded-xl border-gray-200 focus:border-black text-sm bg-white text-black font-medium">
                            <SelectValue placeholder="Select monthly revenue" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
                            <SelectItem value="Just starting ($0)">Just starting ($0)</SelectItem>
                            <SelectItem value="$1K – $10K">$1K – $10K</SelectItem>
                            <SelectItem value="$10K – $50K">$10K – $50K</SelectItem>
                            <SelectItem value="$50K – $250K">$50K – $250K</SelectItem>
                            <SelectItem value="$250K+">$250K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Which market?
                        </label>
                        <Select value={brandMarket} onValueChange={setBrandMarket}>
                          <SelectTrigger className="w-full h-12 px-4 rounded-xl border-gray-200 focus:border-black text-sm bg-white text-black font-medium">
                            <SelectValue placeholder="Select market" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                            <SelectItem value="Europe">Europe</SelectItem>
                            <SelectItem value="Multiple markets">Multiple markets</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          What do you need most?
                        </label>
                        <Select value={brandNeed} onValueChange={setBrandNeed}>
                          <SelectTrigger className="w-full h-12 px-4 rounded-xl border-gray-200 focus:border-black text-sm bg-white text-black font-medium">
                            <SelectValue placeholder="Select service needed" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
                            <SelectItem value="Full shop management">Full shop management</SelectItem>
                            <SelectItem value="Affiliate & creator management">
                              Affiliate & creator management
                            </SelectItem>
                            <SelectItem value="TikTok Shop ads">TikTok Shop ads</SelectItem>
                            <SelectItem value="UGC content">UGC content</SelectItem>
                            <SelectItem value="Not sure — advise me">
                              Not sure — advise me
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => setBrandStep(1)}
                          className="w-1/3 py-3.5 bg-gray-100 hover:bg-gray-200 text-black font-bold text-sm rounded-full transition-all cursor-pointer"
                        >
                          ← Back
                        </button>
                        <button
                          onClick={() => setBrandStep(3)}
                          className="w-2/3 py-3.5 bg-black text-white font-bold text-sm rounded-full hover:bg-gray-800 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                        >
                          Continue →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {brandStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          What's your biggest challenge right now?
                        </label>
                        <textarea
                          rows={4}
                          value={brandChallenge}
                          onChange={(e) => setBrandChallenge(e.target.value)}
                          placeholder="e.g. Sales flatlined at $5K/month and my affiliate videos aren't converting..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all resize-none"
                        />
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => setBrandStep(2)}
                          className="w-1/3 py-3.5 bg-gray-100 hover:bg-gray-200 text-black font-bold text-sm rounded-full transition-all cursor-pointer"
                        >
                          ← Back
                        </button>
                        <button
                          onClick={handleBrandSubmit}
                          className="w-2/3 py-3.5 bg-[#BCF96A] text-black font-extrabold text-sm rounded-full hover:bg-[#a8e855] transition-all hover:scale-[1.01] active:scale-95 shadow-xs cursor-pointer"
                        >
                          Get my growth plan 🚀
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Submitted Success */}
                  {brandStep === 4 && (
                    <div className="py-6 text-left space-y-4">
                      <div className="w-14 h-14 rounded-full bg-[#BCF96A] text-black flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-black">
                        You're in, {brandName.split(" ")[0] || "there"}!
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                        We've got your details! Our team will review your shop and email you within 24 hours with your custom growth strategy.
                      </p>
                      <button
                        onClick={() => navigateToView("hub")}
                        className="mt-4 px-6 py-3 border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:text-black hover:border-black transition-all cursor-pointer"
                      >
                        Back to contact options
                      </button>
                    </div>
                  )}

                  <p className="text-xs text-gray-400 text-center mt-6">
                    No spam. No obligation. Your info stays private.
                  </p>

                  {/* WhatsApp Direct */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3 text-xs sm:text-sm">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-700">
                        Prefer to chat?{" "}
                        <a
                          href="https://wa.me/447412066394"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-emerald-600 hover:underline"
                        >
                          Message us on WhatsApp
                        </a>
                      </p>
                      <span className="text-gray-400 text-xs">Average reply time: under 2 hours</span>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-4">
                  {/* Proof Quote */}
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <div className="flex text-amber-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed mb-3">
                      "They took our shop from nearly closed to $8K in sales in the first month."
                    </p>
                    <span className="text-xs font-semibold text-gray-500 block">
                      — Client name · Brand · United States
                    </span>
                  </div>

                  {/* Stat Pill */}
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex flex-wrap items-center justify-around gap-2 text-xs font-bold text-gray-800">
                    <span>800+ brands</span>
                    <span className="text-gray-300">|</span>
                    <span>TSP verified 🇺🇸 🇬🇧</span>
                    <span className="text-gray-300">|</span>
                    <span>$XM+ GMV managed</span>
                  </div>

                  {/* What Happens Next */}
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-3">
                      What happens next
                    </h4>
                    <ul className="space-y-2.5 text-xs text-gray-600">
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#BCF96A] text-black font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          1
                        </span>
                        <span>We review your shop within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#BCF96A] text-black font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          2
                        </span>
                        <span>Free strategy call — no pitch, just a plan</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#BCF96A] text-black font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                          3
                        </span>
                        <span>You get a custom growth roadmap</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ==================== CREATOR VIEW ==================== */}
        {view === "creator" && (
          <motion.div
            key="creator"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="max-w-2xl mx-auto"
          >
            <button
              onClick={() => navigateToView("hub")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black mb-6 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>All contact options</span>
            </button>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              {!creatorSubmitted ? (
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-1">
                    Apply to our creator network
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    One form. No call needed. We come to you with brand deals.
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      value={creatorName}
                      onChange={(e) => setCreatorName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      TikTok handle
                    </label>
                    <input
                      type="text"
                      value={creatorHandle}
                      onChange={(e) => setCreatorHandle(e.target.value)}
                      placeholder="@yourhandle"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Followers
                      </label>
                      <input
                        type="text"
                        value={creatorFollowers}
                        onChange={(e) => setCreatorFollowers(e.target.value)}
                        placeholder="e.g. 25K"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        GMV (if any)
                      </label>
                      <input
                        type="text"
                        value={creatorGmv}
                        onChange={(e) => setCreatorGmv(e.target.value)}
                        placeholder="e.g. $10K"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Niche
                      </label>
                      <input
                        type="text"
                        value={creatorNiche}
                        onChange={(e) => setCreatorNiche(e.target.value)}
                        placeholder="Beauty, fitness, tech..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Country
                      </label>
                      <input
                        type="text"
                        value={creatorCountry}
                        onChange={(e) => setCreatorCountry(e.target.value)}
                        placeholder="US, UK, CA..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setCreatorSubmitted(true)}
                    className="w-full py-3.5 bg-black text-white font-bold text-sm rounded-full hover:bg-gray-800 transition-all hover:scale-[1.01] active:scale-95 mt-4 cursor-pointer"
                  >
                    Apply to join
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    We review applications weekly and reach out when there's a brand fit.
                  </p>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#BCF96A] text-black flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-black">Application received!</h2>
                  <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                    We review every week. If your profile fits an active brand campaign, you'll
                    hear from us by email — keep an eye on your inbox.
                  </p>
                  <button
                    onClick={() => navigateToView("hub")}
                    className="mt-6 px-6 py-3 border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:text-black hover:border-black transition-all cursor-pointer"
                  >
                    Back to contact options
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* ==================== AGENCY VIEW ==================== */}
        {view === "agency" && (
          <motion.div
            key="agency"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="max-w-2xl mx-auto"
          >
            <button
              onClick={() => navigateToView("hub")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black mb-6 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>All contact options</span>
            </button>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              {!agencySubmitted ? (
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-1">
                    Partner with Tiksly
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    White-label our TikTok Shop fulfillment under your agency's brand.
                  </p>

                  <div className="flex flex-wrap gap-2 pb-2">
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      NDA available
                    </span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      Branded reporting
                    </span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      Wholesale rates
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Agency name
                    </label>
                    <input
                      type="text"
                      value={agencyName}
                      onChange={(e) => setAgencyName(e.target.value)}
                      placeholder="Your agency"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Website
                    </label>
                    <input
                      type="text"
                      value={agencyWebsite}
                      onChange={(e) => setAgencyWebsite(e.target.value)}
                      placeholder="youragency.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Services needed
                      </label>
                      <input
                        type="text"
                        value={agencyServices}
                        onChange={(e) => setAgencyServices(e.target.value)}
                        placeholder="Shop mgmt, ads, UGC..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Client volume
                      </label>
                      <input
                        type="text"
                        value={agencyVolume}
                        onChange={(e) => setAgencyVolume(e.target.value)}
                        placeholder="e.g. 5–10 clients"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Markets
                    </label>
                    <input
                      type="text"
                      value={agencyMarkets}
                      onChange={(e) => setAgencyMarkets(e.target.value)}
                      placeholder="US, UK, EU..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm outline-none transition-all"
                    />
                  </div>

                  <button
                    onClick={() => setAgencySubmitted(true)}
                    className="w-full py-3.5 bg-black text-white font-bold text-sm rounded-full hover:bg-gray-800 transition-all hover:scale-[1.01] active:scale-95 mt-4 cursor-pointer"
                  >
                    Request partnership details
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    Goes straight to partners@tiksly.com — personal reply within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#BCF96A] text-black flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-black">Request sent!</h2>
                  <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                    Our partnerships lead will reply personally within 24 hours with wholesale rates and
                    our white-label deck.
                  </p>
                  <button
                    onClick={() => navigateToView("hub")}
                    className="mt-6 px-6 py-3 border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:text-black hover:border-black transition-all cursor-pointer"
                  >
                    Back to contact options
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
