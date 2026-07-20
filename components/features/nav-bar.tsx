"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Store,
  UserPlus,
  ShieldCheck,
  ShieldAlert,
  Users,
  Video,
  Megaphone,
  Radio,
  Headphones,
  Zap,
  Package,
  GraduationCap,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const servicesCol1 = {
  category: "Store Operations",
  icon: Store,
  items: [
    {
      name: "Shop Management",
      desc: "Full seller center setup, listing & operation",
      icon: Store,
    },
    {
      name: "Account Creation",
      desc: "Fast verified shop onboarding & setup",
      icon: UserPlus,
    },
    {
      name: "Category Approval",
      desc: "Unlock restricted product categories",
      icon: ShieldCheck,
    },
    {
      name: "Violation Removal",
      desc: "Clear account strikes & restore standing",
      icon: ShieldAlert,
    },
  ],
};

const servicesCol2 = {
  category: "Growth & Marketing",
  icon: TrendingUp,
  items: [
    {
      name: "Affiliate & Creator Ops",
      desc: "Scale with top-tier TikTok influencers",
      icon: Users,
    },
    {
      name: "UGC Content Creation",
      desc: "High-converting short video ad creatives",
      icon: Video,
    },
    {
      name: "TikTok Shop Ads",
      desc: "Targeted ad campaigns & revenue scaling",
      icon: Megaphone,
    },
    {
      name: "Live Streaming",
      desc: "End-to-end live host & shop production",
      icon: Radio,
    },
  ],
};

const servicesCol3 = {
  category: "Solutions & Support",
  icon: Sparkles,
  items: [
    {
      name: "Virtual Assistance",
      desc: "Dedicated 24/7 store support agents",
      icon: Headphones,
    },
    {
      name: "Automation",
      desc: "Streamline inventory & order processing",
      icon: Zap,
    },
    {
      name: "3PL & Fulfillment",
      desc: "Seamless warehousing & fast shipping",
      icon: Package,
    },
    {
      name: "Coaching & Consultation",
      desc: "1-on-1 mentorship & growth strategy",
      icon: GraduationCap,
    },
  ],
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          " container mx-auto px-3 lg:px-4  fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolling ? "py-2" : " py-3",
        )}
      >
        <nav
          className={cn(
            "px-3 lg:px-4 rounded-[2rem]  py-2 transition-all duration-300",
            scrolling
              ? "bg-[#F7F7F7]/80 backdrop-blur-sm "
              : "bg-[#F9F9F9]/90",
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tighter text-black z-50"
            >
              tiksly
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Dropdown Trigger */}
              <div
                className="relative group h-full"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-2 px-2 py-1 hover:bg-[#ECECEC] rounded-full text-[15px] font-medium text-black cursor-pointer",
                    isActive("/services") && "bg-[#ECECEC]",
                  )}
                >
                  Services <ChevronDown className={`w-4 h-4 text-gray-500 ${isDropdownOpen ? "rotate-180 transition-all duration-300" : " transition-all duration-300"}`} />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={cn(
                    "absolute top-full inset-x-1/2 -translate-x-1/2 pt-6 w-[820px] xl:w-[880px] min-w-[780px] transition-all duration-300 origin-top z-50",
                    isDropdownOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 translate-y-2 invisible",
                  )}
                >
                  <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] p-7 border border-gray-100/90 cursor-default w-full">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Column 1 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 px-2 pb-2 border-b border-gray-100">
                          <servicesCol1.icon className="w-4 h-4 text-black" />
                          <span className="text-[12px] font-bold tracking-wider uppercase text-black">
                            {servicesCol1.category}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {servicesCol1.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href="/services"
                                className="group relative flex items-start gap-3 p-2.5 rounded-2xl transition-all duration-200 hover:bg-gray-50/90 hover:scale-[1.01]"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#BCF96A] text-black flex items-center justify-center group-hover:scale-105 transition-all duration-200 shrink-0 mt-0.5 shadow-xs">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 flex-1 pr-4">
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-black font-semibold text-[14px] leading-tight group-hover:text-black">
                                      {item.name}
                                    </h4>
                                  </div>
                                  <p className="text-[12px] text-gray-500 leading-snug font-normal">
                                    {item.desc}
                                  </p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:text-black absolute top-3 right-3" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 px-2 pb-2 border-b border-gray-100">
                          <servicesCol2.icon className="w-4 h-4 text-black" />
                          <span className="text-[12px] font-bold tracking-wider uppercase text-black">
                            {servicesCol2.category}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {servicesCol2.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href="/services"
                                className="group relative flex items-start gap-3 p-2.5 rounded-2xl transition-all duration-200 hover:bg-gray-50/90 hover:scale-[1.01]"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#BCF96A] text-black flex items-center justify-center group-hover:scale-105 transition-all duration-200 shrink-0 mt-0.5 shadow-xs">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 flex-1 pr-4">
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-black font-semibold text-[14px] leading-tight group-hover:text-black">
                                      {item.name}
                                    </h4>
                                  </div>
                                  <p className="text-[12px] text-gray-500 leading-snug font-normal">
                                    {item.desc}
                                  </p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:text-black absolute top-3 right-3" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 px-2 pb-2 border-b border-gray-100">
                          <servicesCol3.icon className="w-4 h-4 text-black" />
                          <span className="text-[12px] font-bold tracking-wider uppercase text-black">
                            {servicesCol3.category}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {servicesCol3.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href="/services"
                                className="group relative flex items-start gap-3 p-2.5 rounded-2xl transition-all duration-200 hover:bg-gray-50/90 hover:scale-[1.01]"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#BCF96A] text-black flex items-center justify-center group-hover:scale-105 transition-all duration-200 shrink-0 mt-0.5 shadow-xs">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 flex-1 pr-4">
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-black font-semibold text-[14px] leading-tight group-hover:text-black">
                                      {item.name}
                                    </h4>
                                  </div>
                                  <p className="text-[12px] text-gray-500 leading-snug font-normal">
                                    {item.desc}
                                  </p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:text-black absolute top-3 right-3" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/about-us"
                className={cn(
                  "text-[15px] font-medium px-2 py-1 hover:bg-[#ECECEC] rounded-full transition-colors text-black",
                  isActive("/about-us") && "bg-[#ECECEC]",
                )}
              >
                About Us
              </Link>
              <Link
                href="/case-studies"
                className={cn(
                  "text-[15px] font-medium px-2 py-1 hover:bg-[#ECECEC] rounded-full transition-colors text-black",
                  isActive("/case-studies") && "bg-[#ECECEC]",
                )}
              >
                Case Studies
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex">
              <Link href={"/contact"} className="px-6 py-3 bg-black cursor-pointer text-white rounded-full text-[15px] font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
                Contact
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-black z-50 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out lg:hidden pt-24 overflow-y-auto",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full",
        )}
      >
        <div className="flex flex-col px-5 pb-12">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-1">
            {/* Dropdown Accordion for Mobile */}
            <div className="border-b border-gray-100 pb-1">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center justify-between w-full py-3.5 px-3 rounded-xl text-lg font-semibold text-black transition-colors",
                  isActive("/services") && "bg-gray-100",
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-500 transition-transform duration-300",
                    isDropdownOpen && "rotate-180 text-black",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isDropdownOpen
                    ? "grid-rows-[1fr] opacity-100 py-2"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <div className="bg-gray-50/90 rounded-2xl p-4 border border-gray-100 flex flex-col gap-6">
                    {[servicesCol1, servicesCol2, servicesCol3].map((col) => {
                      const ColIcon = col.icon;
                      return (
                        <div key={col.category} className="flex flex-col gap-2.5">
                          <div className="flex items-center gap-2 pb-1.5 border-b border-gray-200/60">
                            <ColIcon className="w-4 h-4 text-black" />
                            <span className="text-[11px] font-bold tracking-wider uppercase text-black">
                              {col.category}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {col.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.name}
                                  href="/services"
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-white transition-all group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-[#BCF96A] text-black flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex flex-col gap-0.5">
                                    <span className="text-[14px] font-semibold text-black leading-tight group-hover:text-black">
                                      {item.name}
                                    </span>
                                    <span className="text-[12px] text-gray-500 leading-snug font-normal">
                                      {item.desc}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3.5 px-3 rounded-xl text-lg font-semibold text-black border-b border-gray-100 transition-colors",
                isActive("/about-us") && "bg-gray-100",
              )}
            >
              About Us
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-3.5 px-3 rounded-xl text-lg font-semibold text-black border-b border-gray-100 transition-colors",
                isActive("/case-studies") && "bg-gray-100",
              )}
            >
              Case Studies
            </Link>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 text-center text-base font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all shadow-md active:scale-95"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
