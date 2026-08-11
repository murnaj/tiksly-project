"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Store, 
  Inbox, 
  Users, 
  Megaphone, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  RotateCw, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Package, 
  FileText,
  MapPin,
  ChevronDown
} from "lucide-react";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ShopManagementPage() {
  const [activeTab, setActiveTab] = useState<"tasks" | "stats">("tasks");

  return (
    <div className="min-h-screen bg-[#F9F9F9] overflow-x-hidden">
      <NavBar />

      <main className="pt-24 md:pt-32 pb-20 select-none">
        
        {/* HERO SECTION - CLICKUP STYLE */}
        <section className="container mx-auto px-4 lg:px-6 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Values & Service Selector */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE }}
              className="flex flex-col gap-6"
            >
              <h1 className="text-4xl md:text-[50px] lg:text-[62px] font-black text-black leading-[1.05] tracking-tighter uppercase">
                The complete <br />
                <span className="bg-[#BCF96A] text-black px-4 rounded-full inline-block font-black my-1">operations</span> <br />
                engine for tiktok shop
              </h1>

              {/* ClickUp Style Checkmarks */}
              <div className="flex flex-col gap-3.5 text-neutral-600 font-medium text-[15px] md:text-[16px] leading-relaxed mt-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#0081FB] text-xl font-bold mt-0.5">✓</span>
                  <p>
                    <strong className="text-black font-extrabold">End-to-End Store Management.</strong> Full seller center operation, listing optimization, inventory sync, and compliance.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0081FB] text-xl font-bold mt-0.5">✓</span>
                  <p>
                    <strong className="text-black font-extrabold">Affiliate Pipeline Scale.</strong> Auto-outreach to hundreds of targeted creator leads daily to generate sales on autopilot.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0081FB] text-xl font-bold mt-0.5">✓</span>
                  <p>
                    <strong className="text-black font-extrabold">TikTok Ads & Strategy.</strong> Custom Shopping Ads, Live Shopping productions, and real-time dashboard analytics.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-black text-white rounded-full text-[15px] font-bold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-center shadow-md cursor-pointer"
                >
                  Get my free growth plan
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white border border-gray-200 text-black rounded-full text-[15px] font-bold hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 text-center cursor-pointer"
                >
                  Book a consultation
                </Link>
              </div>

              {/* Divider and Service Selector */}
              <div className="border-t border-gray-200/80 pt-8 mt-4">
                <p className="text-[10px] font-black text-neutral-400 tracking-wider uppercase mb-4">
                  explore our services
                </p>
                
                {/* Highlighted Services Pills */}
                <div className="flex flex-wrap gap-2 max-w-xl">
                  <Link
                    href="/services/shop-management"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#0081FB] text-white rounded-full text-[13px] font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                  >
                    <span>Shop Management</span>
                    <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">✓</span>
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-200/80 text-neutral-600 hover:border-gray-300 hover:text-black rounded-full text-[13px] font-bold transition-all hover:scale-105"
                  >
                    Affiliate & Creator Ops
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-200/80 text-neutral-600 hover:border-gray-300 hover:text-black rounded-full text-[13px] font-bold transition-all hover:scale-105"
                  >
                    TikTok Shop Ads
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-200/80 text-neutral-600 hover:border-gray-300 hover:text-black rounded-full text-[13px] font-bold transition-all hover:scale-105"
                  >
                    UGC Content
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-200/80 text-neutral-600 hover:border-gray-300 hover:text-black rounded-full text-[13px] font-bold transition-all hover:scale-105"
                  >
                    Live Streaming
                  </Link>
                  <Link
                    href="#"
                    className="px-4 py-2 bg-white border border-gray-200/80 text-neutral-600 hover:border-gray-300 hover:text-black rounded-full text-[13px] font-bold transition-all hover:scale-105"
                  >
                    Coaching & Consultation
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Tailwind Interactive Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="relative w-full aspect-[4/3] rounded-[2.5rem] bg-[#0E1117] border border-gray-800 shadow-2xl shadow-neutral-900/60 overflow-hidden text-gray-300 flex flex-col"
            >
              {/* Browser bar top */}
              <div className="h-10 border-b border-gray-800 bg-[#161B22] flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="bg-[#0D1117] text-[10px] text-gray-500 px-8 py-1 rounded-md border border-gray-800 select-none">
                  tiksly.hub / operations / shop-management
                </div>
                <div className="w-12" />
              </div>

              {/* Main Mockup Area */}
              <div className="flex-1 flex overflow-hidden min-h-0">
                
                {/* Sidebar */}
                <div className="w-[85px] sm:w-[130px] border-r border-gray-800 bg-[#161B22] flex flex-col shrink-0 py-3 gap-5">
                  <div className="px-3">
                    <span className="text-[14px] font-black uppercase text-[#BCF96A] tracking-wider">Tiksly</span>
                  </div>
                  <div className="flex flex-col gap-1 px-1.5">
                    <div className="flex items-center gap-2 p-2 bg-[#0D1117] rounded-xl text-[12px] font-bold text-white shrink-0">
                      <Inbox className="w-4 h-4 text-[#BCF96A]" />
                      <span className="hidden sm:inline">Overview</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl text-[12px] font-medium text-gray-400 hover:bg-gray-800/40 shrink-0">
                      <Store className="w-4 h-4" />
                      <span className="hidden sm:inline">Store Ops</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl text-[12px] font-medium text-gray-400 hover:bg-gray-800/40 shrink-0">
                      <Users className="w-4 h-4" />
                      <span className="hidden sm:inline">Affiliates</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl text-[12px] font-medium text-gray-400 hover:bg-gray-800/40 shrink-0">
                      <Megaphone className="w-4 h-4" />
                      <span className="hidden sm:inline">Campaigns</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-xl text-[12px] font-medium text-gray-400 hover:bg-gray-800/40 shrink-0">
                      <TrendingUp className="w-4 h-4" />
                      <span className="hidden sm:inline">Analytics</span>
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="flex-1 flex flex-col overflow-hidden min-h-0 bg-[#0D1117]">
                  {/* Top Bar inside panel */}
                  <div className="h-12 border-b border-gray-800 px-4 flex items-center justify-between shrink-0 bg-[#161B22]/40">
                    <div className="flex items-center gap-2">
                      <span className="text-[#BCF96A] text-lg">📁</span>
                      <span className="text-[13px] font-bold text-white uppercase tracking-tight">Shop Ops Workspace</span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setActiveTab("tasks")}
                        className={`text-[11px] font-extrabold px-2.5 py-1 rounded-md transition-colors ${activeTab === "tasks" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}
                      >
                        Tasks
                      </button>
                      <button 
                        onClick={() => setActiveTab("stats")}
                        className={`text-[11px] font-extrabold px-2.5 py-1 rounded-md transition-colors ${activeTab === "stats" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"}`}
                      >
                        Stats
                      </button>
                    </div>
                  </div>

                  {/* Tab Contents */}
                  <div className="flex-1 overflow-y-auto p-4 min-h-0">
                    {activeTab === "tasks" ? (
                      <div className="flex flex-col gap-5 text-left">
                        {/* Done Tasks */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">DONE</span>
                            <span className="text-gray-500 text-[11px] font-bold">5 tasks completed</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <div className="bg-[#161B22]/60 p-2.5 rounded-xl border border-gray-800/80 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span className="text-[13px] font-bold text-gray-200">Catalog setup & listing optimization</span>
                              </div>
                              <span className="text-[10px] text-gray-500 font-bold shrink-0">12 items synced</span>
                            </div>
                            <div className="bg-[#161B22]/60 p-2.5 rounded-xl border border-gray-800/80 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span className="text-[13px] font-bold text-gray-200">Commission plans configurations</span>
                              </div>
                              <span className="text-[10px] text-gray-500 font-bold shrink-0">15% base set</span>
                            </div>
                          </div>
                        </div>

                        {/* In Progress Tasks */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-blue-500/20 text-blue-400 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">IN PROGRESS</span>
                            <span className="text-gray-500 text-[11px] font-bold">3 tasks active</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <div className="bg-[#161B22]/60 p-2.5 rounded-xl border border-gray-800/80 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <RotateCw className="w-4 h-4 text-blue-400 shrink-0 animate-spin" />
                                <span className="text-[13px] font-bold text-gray-200">Affiliate creator outreach campaign</span>
                              </div>
                              <span className="text-[10px] text-blue-400 font-bold shrink-0">50 target daily</span>
                            </div>
                            <div className="bg-[#161B22]/60 p-2.5 rounded-xl border border-gray-800/80 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <RotateCw className="w-4 h-4 text-blue-400 shrink-0 animate-spin" />
                                <span className="text-[13px] font-bold text-gray-200">B-roll & review sample shipping ops</span>
                              </div>
                              <span className="text-[10px] text-gray-500 font-bold shrink-0">22 units sent</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    ) : (
                      /* Stats View */
                      <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="bg-[#161B22] p-4 rounded-2xl border border-gray-850">
                          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Total Sales (30d)</span>
                          <h4 className="text-2xl font-black text-white mt-1">$24,850</h4>
                          <span className="text-[10px] text-emerald-400 font-semibold mt-1 block">↑ 18.5% from last week</span>
                        </div>
                        <div className="bg-[#161B22] p-4 rounded-2xl border border-gray-850">
                          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Active Creators</span>
                          <h4 className="text-2xl font-black text-[#BCF96A] mt-1">112 active</h4>
                          <span className="text-[10px] text-gray-400 font-semibold mt-1 block">22 video posts this week</span>
                        </div>
                        <div className="col-span-2 bg-[#161B22] p-4 rounded-2xl border border-gray-850 flex flex-col gap-2">
                          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Seller Compliance Status</span>
                          <div className="flex items-center justify-between">
                            <span className="text-[13px] text-emerald-400 font-extrabold">Good Standing (0 points)</span>
                            <span className="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-ping" />
                          </div>
                          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mt-1">
                            <div className="bg-emerald-500 w-[100%] h-full" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section className="bg-white py-16 md:py-24 border-y border-gray-100 select-none">
          <div className="container mx-auto px-4 lg:px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest">Scope of Work</span>
              <h2 className="text-3xl md:text-4xl lg:text-[45px] font-black uppercase tracking-tighter text-black mt-3">
                Full seller center operations <span className="bg-[#BCF96A] px-3 py-0.5 rounded-full inline-block font-black">handled</span>
              </h2>
              <p className="text-gray-500 text-[15px] mt-4 leading-relaxed">
                Tired of logging into the Seller Center, checking compliance strikes, mapping inventory levels, and reviewing creator messages? We take the entire operations checklist off your plate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#0081FB]/10 text-[#0081FB] rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">Compliance & Policy</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  We monitor account health 24/7, respond to policy violation strikes, handle category approvals, and ensure your TikTok Shop remains in good standing.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/20 text-[#212120] rounded-2xl flex items-center justify-center">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">Product & Catalog Setup</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Optimized descriptions with keywords, high-quality images, product variant setups, mapping category tags, and commission rate integrations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#0081FB]/10 text-[#0081FB] rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">Logistics & 3PL Sync</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Syncing inventory levels from Shopify/ERP, tracking shipping timeframes, managing courier connections, and solving courier tracking update errors.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/20 text-[#212120] rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">Affiliate Inbox Ops</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Triage chat messages from creators requesting free product samples. Filter out low-value requests and ship samples to creators that generate ROI.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#0081FB]/10 text-[#0081FB] rounded-2xl flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">Invoice & Tax Setup</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Handling tax settings inside Seller Center, managing customer invoices, resolving dispute tickets, and filing payouts reports.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#BCF96A]/20 text-[#212120] rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black">Live & Ads Integration</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Scheduling streaming hosts, linking showcase accounts, launching Shopping Ads, and optimizing campaign budgets for maximum conversion.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ROADMAP / PROCESS SECTION */}
        <section className="py-16 md:py-24 select-none">
          <div className="container mx-auto px-4 lg:px-6">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest">How we start</span>
              <h2 className="text-3xl md:text-4xl lg:text-[45px] font-black uppercase tracking-tighter text-black mt-3">
                Our 3-step onboarding <span className="bg-[#0081FB] text-white px-4 py-0.5 rounded-full inline-block font-black">roadmap</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12 relative">
              {/* Card 1 */}
              <div className="relative bg-white border border-gray-150 p-8 rounded-[2rem] shadow-sm flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0081FB] text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  1
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black mt-2">Audit & Connection</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  We audit your current Seller Center, review any violation points, connect standard shipping templates, and map inventory sync parameters.
                </p>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white border border-gray-150 p-8 rounded-[2rem] shadow-sm flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full bg-[#BCF96A] text-black font-extrabold flex items-center justify-center text-sm shadow-md">
                  2
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black mt-2">Optimization & Sync</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  We optimize product catalog descriptions, setup affiliate commission base layers, integrate 3PL/Shopify connectors, and start creator sample pipelines.
                </p>
              </div>

              {/* Card 3 */}
              <div className="relative bg-white border border-gray-150 p-8 rounded-[2rem] shadow-sm flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  3
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-black mt-2">Scale & Ops Management</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Daily listing updates, creator messaging inbox management, sample checking, compliance audit reports, and optimization of Shopping Ads.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA BANNER */}
        <section className="container mx-auto px-4 lg:px-6">
          <div className="bg-[#BCF96A] rounded-[2.5rem] p-10 md:p-16 text-center flex flex-col items-center gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)", backgroundSize: "20px 20px" }} />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black max-w-3xl leading-[1.05]">
              Ready to automate your TikTok Shop operations?
            </h2>
            <p className="text-[#212120]/80 text-[15px] md:text-base font-semibold max-w-xl leading-relaxed">
              Book a growth call today. We will audit your current Seller Center status, identify catalog bottlenecks, and map out a scaling framework.
            </p>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-black text-white rounded-full text-[15px] font-bold hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mt-4 cursor-pointer"
            >
              <span>Schedule my free audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <FooterSection />
    </div>
  );
}
