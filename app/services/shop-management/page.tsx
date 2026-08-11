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
  ChevronDown,
  Calendar,
  MessageSquare,
  BarChart,
  Check,
  GitBranch,
  Lock,
  AlertCircle
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

            {/* RIGHT COLUMN: Light Mode High-Fidelity ClickUp-Style Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="relative w-full aspect-[4/3] rounded-[2.5rem] bg-white border border-gray-200 shadow-2xl shadow-neutral-200/50 overflow-hidden text-neutral-700 flex flex-col z-10"
            >
              {/* Browser Bar */}
              <div className="h-10 border-b border-gray-200/80 bg-[#F6F8FA] flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="bg-white text-[10px] text-gray-400 px-8 py-1 rounded-md border border-gray-200 select-none font-medium">
                  tiksly.com / services / shop-management
                </div>
                <div className="w-12" />
              </div>

              {/* Main Area */}
              <div className="flex-1 flex overflow-hidden min-h-0 text-[12px]">
                
                {/* Sidebar (ClickUp Style) */}
                <div className="w-[110px] sm:w-[155px] border-r border-gray-200 bg-[#FAFAFA] flex flex-col shrink-0 py-3.5 justify-between select-none">
                  <div className="flex flex-col gap-4">
                    {/* Workspace Selector */}
                    <div className="px-3 flex items-center gap-1.5">
                      <div className="w-4.5 h-4.5 rounded-md bg-[#0081FB] text-white flex items-center justify-center text-[10px] font-black shrink-0 shadow-xs">T</div>
                      <span className="text-[12px] font-black text-neutral-800 tracking-tight whitespace-nowrap">Tiksly Hub</span>
                    </div>

                    {/* Nav Items */}
                    <div className="flex flex-col gap-0.5 px-2">
                      <div className="flex items-center justify-between p-1.5 hover:bg-neutral-200/40 rounded-lg text-neutral-600 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Inbox className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span className="font-semibold text-neutral-700">Inbox</span>
                        </div>
                        <span className="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-[8px] font-black shrink-0">3</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 hover:bg-neutral-200/40 rounded-lg text-neutral-600 cursor-pointer">
                        <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="font-semibold text-neutral-700">My Tasks</span>
                      </div>
                      <div className="flex items-center gap-2 p-1.5 hover:bg-neutral-200/40 rounded-lg text-neutral-600 cursor-pointer">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span className="font-semibold text-neutral-700">Schedule</span>
                      </div>
                    </div>

                    {/* Spaces section */}
                    <div className="flex flex-col gap-1 px-2">
                      <span className="text-[8px] font-bold text-gray-400 uppercase px-1.5">Spaces</span>
                      <div className="flex flex-col gap-0.5 bg-neutral-200/30 rounded-lg p-1">
                        <div className="flex items-center gap-1.5 p-1 text-neutral-800 font-bold shrink-0">
                          <span className="text-rose-500 text-[13px] shrink-0">📁</span>
                          <span>Marketing</span>
                        </div>
                        <div className="pl-5 flex flex-col gap-1 text-[11px] text-neutral-500 font-medium pb-1 select-none">
                          <span className="hover:text-black cursor-pointer">Campaigns</span>
                          <span className="hover:text-black cursor-pointer">Blogs</span>
                          <span className="text-[#0081FB] font-semibold cursor-pointer">Brand Assets</span>
                          <span className="hover:text-black cursor-pointer">Workflows</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Creator Avatars in Sidebar bottom */}
                  <div className="px-3 pt-3 border-t border-gray-200/80 hidden sm:flex flex-col gap-1.5">
                    <span className="text-[8px] font-bold text-gray-400 uppercase">Active Creators</span>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full overflow-hidden bg-neutral-200 shrink-0 relative">
                          <Image src="/creators/emma.png" alt="Emma" fill className="object-cover" />
                        </div>
                        <span className="text-[10px] text-neutral-600 font-semibold truncate">Emma (US)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full overflow-hidden bg-neutral-200 shrink-0 relative">
                          <Image src="/creators/elijah.png" alt="Elijah" fill className="object-cover" />
                        </div>
                        <span className="text-[10px] text-neutral-600 font-semibold truncate">Elijah (UK)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel (Mockup Table Workspace) */}
                <div className="flex-1 flex flex-col bg-white overflow-hidden min-h-0">
                  {/* Top bar inside panel */}
                  <div className="border-b border-gray-200 px-4 pt-3 flex flex-col justify-between shrink-0 bg-white gap-2 select-none">
                    <div className="flex items-center gap-2">
                      <span className="text-rose-500 text-base">📁</span>
                      <span className="text-[13px] font-extrabold text-neutral-800">Marketing</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-400 text-[10px]">Active Tasks</span>
                    </div>

                    {/* Tabs row matching ClickUp layout */}
                    <div className="flex gap-4 text-[11px] font-bold text-neutral-500 mt-1">
                      <div className="pb-2 border-b-2 border-transparent hover:text-black cursor-pointer flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-neutral-400 shrink-0" />
                        <span>Chat</span>
                      </div>
                      <div className="pb-2 border-b-2 border-[#0081FB] text-[#0081FB] flex items-center gap-1">
                        <Check className="w-3 h-3 shrink-0" />
                        <span>Tasks</span>
                      </div>
                      <div className="pb-2 border-b-2 border-transparent hover:text-black cursor-pointer flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-neutral-400 shrink-0" />
                        <span>Schedule</span>
                      </div>
                      <div className="pb-2 border-b-2 border-transparent hover:text-black cursor-pointer flex items-center gap-1">
                        <BarChart className="w-3 h-3 text-neutral-400 shrink-0" />
                        <span>Gantt</span>
                      </div>
                    </div>
                  </div>

                  {/* Tasks List */}
                  <div className="flex-1 overflow-y-auto p-4 min-h-0 text-left">
                    <div className="flex flex-col gap-5">
                      
                      {/* DONE Task Group */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-2 select-none">
                          <span className="text-[8px] text-gray-400">▼</span>
                          <span className="bg-emerald-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1 shadow-xs">
                            <span>Done</span>
                            <span className="bg-emerald-600 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0">5</span>
                          </span>
                        </div>

                        {/* DONE Task Rows */}
                        <div className="flex flex-col border-l border-emerald-200 pl-3 ml-1.5 gap-2.5">
                          {/* Row 1 */}
                          <div className="flex justify-between items-center group">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 text-emerald-600" />
                              </div>
                              <span className="text-[12px] font-semibold text-neutral-700 line-through decoration-neutral-350">Catalog Setup & Listings Uploaded</span>
                            </div>
                            <div className="w-5 h-5 rounded-full overflow-hidden bg-neutral-100 border border-gray-250 shrink-0 relative">
                              <Image src="/creators/emma.png" alt="Emma" fill className="object-cover" />
                            </div>
                          </div>

                          {/* Row 2 */}
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                  <Check className="w-2.5 h-2.5 text-emerald-600" />
                                </div>
                                <span className="text-[12px] font-semibold text-neutral-700 line-through decoration-neutral-350 flex items-center gap-1.5">
                                  <span>Website Assets Sync</span>
                                  <GitBranch className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                                  <span className="text-[9px] text-neutral-400 font-bold shrink-0">2</span>
                                </span>
                              </div>
                              <div className="flex -space-x-1.5 select-none">
                                <div className="w-5 h-5 rounded-full overflow-hidden bg-neutral-100 border border-white shrink-0 relative z-10">
                                  <Image src="/creators/elijah.png" alt="Elijah" fill className="object-cover" />
                                </div>
                                <div className="w-5 h-5 rounded-full overflow-hidden bg-neutral-100 border border-white shrink-0 relative z-0">
                                  <Image src="/Alexis_California.webp" alt="Alexis" fill className="object-cover" />
                                </div>
                              </div>
                            </div>
                            {/* Nested Sub-Rows */}
                            <div className="pl-6 flex flex-col gap-2 border-l border-gray-150">
                              <div className="flex justify-between items-center text-[11px]">
                                <span className="text-neutral-500 font-medium flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full border border-neutral-400 inline-block shrink-0" />
                                  <span>Tiksly Landing Page Mockup</span>
                                </span>
                                <div className="w-4 h-4 rounded-full overflow-hidden bg-neutral-100 border border-gray-200 shrink-0 relative">
                                  <Image src="/creators/emma.png" alt="Emma" fill className="object-cover" />
                                </div>
                              </div>
                              <div className="flex justify-between items-center text-[11px]">
                                <span className="text-neutral-500 font-medium flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full border border-neutral-400 inline-block shrink-0" />
                                  <span>Shop-management Services Layout</span>
                                </span>
                                <div className="w-4 h-4 rounded-full overflow-hidden bg-neutral-100 border border-gray-200 shrink-0 relative">
                                  <Image src="/creators/elijah.png" alt="Elijah" fill className="object-cover" />
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* IN PROGRESS Task Group */}
                      <div>
                        <div className="flex items-center gap-1.5 mb-2 select-none">
                          <span className="text-[8px] text-gray-400">▼</span>
                          <span className="bg-[#0081FB] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1 shadow-xs">
                            <span>In Progress</span>
                            <span className="bg-[#006ACC] w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-black text-white shrink-0">3</span>
                          </span>
                        </div>

                        {/* IN PROGRESS Task Rows */}
                        <div className="flex flex-col border-l border-blue-200 pl-3 ml-1.5 gap-2.5">
                          {/* Row 1 */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full border border-blue-300 flex items-center justify-center shrink-0">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              </div>
                              <span className="text-[12px] font-semibold text-neutral-800">Affiliate Creator Outreach & Message Box</span>
                            </div>
                            <div className="w-5 h-5 rounded-full overflow-hidden bg-neutral-100 border border-gray-200 shrink-0 relative">
                              <Image src="/Chelsea.webp" alt="Chelsea" fill className="object-cover" />
                            </div>
                          </div>

                          {/* Row 2 */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full border border-blue-300 flex items-center justify-center shrink-0">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              </div>
                              <span className="text-[12px] font-semibold text-neutral-800 flex items-center gap-1.5">
                                <span>Competitor Ads Analysis & Research</span>
                                <GitBranch className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                                <span className="text-[9px] text-neutral-400 font-bold shrink-0">1</span>
                              </span>
                            </div>
                            <div className="flex -space-x-1.5 select-none">
                              <div className="w-5 h-5 rounded-full overflow-hidden bg-neutral-100 border border-white shrink-0 relative z-10">
                                <Image src="/avatars/ahmed.png" alt="Ahmed" fill className="object-cover" />
                              </div>
                              <div className="w-5 h-5 rounded-full overflow-hidden bg-neutral-100 border border-white shrink-0 relative z-0">
                                <Image src="/Jonah_Nebraska.webp" alt="Jonah" fill className="object-cover" />
                              </div>
                            </div>
                          </div>

                          {/* Row 3 */}
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full border border-blue-300 flex items-center justify-center shrink-0">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              </div>
                              <span className="text-[12px] font-semibold text-neutral-800 flex items-center gap-1.5">
                                <Lock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                                <span>Seller Compliance Audit Reports</span>
                                <span className="text-[9px] font-extrabold text-rose-500 bg-rose-50 px-1 py-0.5 rounded-sm border border-rose-100 flex items-center gap-0.5 shrink-0">
                                  <AlertCircle className="w-2.5 h-2.5 text-rose-500 shrink-0" />
                                  <span>5d</span>
                                </span>
                              </span>
                            </div>
                            <div className="w-5 h-5 rounded-full overflow-hidden bg-neutral-100 border border-gray-200 shrink-0 relative">
                              <Image src="/josh.webp" alt="Josh" fill className="object-cover" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
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
