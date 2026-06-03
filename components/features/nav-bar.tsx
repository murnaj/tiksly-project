"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Store, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolling ? "py-3 px-3  " : " px-2 py-5",
      )}
    >
      <nav className="container mx-auto px-2 lg:px-4 bg-[#F9F9F9]/90 rounded-[2rem] py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tighter text-black z-50"
          >
            tiksly
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {/* Dropdown Trigger */}
            <div
              className="relative group h-full"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-2 px-5 py-1  hover:bg-[#ECECEC] rounded-full text-[15px] font-medium transition-colors text-black">
                Platform <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className={cn(
                  "absolute top-full left-1/2 translate-x-[-40%] pt-6 w-200 transition-all duration-300 origin-top",
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-2 invisible",
                )}
              >
                <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 grid grid-cols-[1fr_1fr] gap-8 border border-gray-100 cursor-default">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-8">
                    <div>
                      <h3 className="text-gray-400 text-sm font-medium mb-4">
                        By feature
                      </h3>

                      <div className="flex flex-col gap-6">
                        <Link href="#" className="group">
                          <h4 className="text-black font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                            Partnerships hub
                          </h4>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            Access thousands of vetted creators to form
                            partnerships that last.
                          </p>
                        </Link>

                        <Link href="#" className="group">
                          <h4 className="text-black font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                            CreativeOps
                          </h4>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            The first anti-guesswork system for creator
                            marketing.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-8">
                    <div>
                      <h3 className="text-gray-400 text-sm font-medium mb-4">
                        By business
                      </h3>

                      <div className="flex flex-col gap-6">
                        <Link href="#" className="group">
                          <h4 className="text-black font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                            For Brands
                          </h4>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            Physical and digital products.
                          </p>
                        </Link>

                        <Link href="#" className="group">
                          <h4 className="text-black font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                            For Agencies
                          </h4>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            Performance marketing teams.
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Column 3 */}
                  {/* <div className="flex flex-col h-full">
                    <h3 className="text-gray-400 text-sm font-medium mb-4 flex items-center gap-1 hover:text-gray-600 cursor-pointer w-max transition-colors">
                      Learn more <span className="text-lg leading-none mb-1">↗</span>
                    </h3>
                    
                    <Link href="#" className="bg-[#bfe2ff] hover:bg-[#b0d9fa] transition-colors rounded-3xl p-6 flex-1 flex flex-col relative overflow-hidden group">
                      <div className="relative z-10">
                        <p className="text-gray-700 text-sm mb-1 font-medium">Now Live:</p>
                        <h4 className="text-black text-3xl font-bold tracking-tight mb-6">CreativeOps</h4>
                        
                        
                        <div className="flex flex-col gap-3">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300">
                            <p className="text-sm font-bold text-gray-800">Brief</p>
                            <p className="text-[11px] text-gray-500 mt-0.5 mb-3">New Year, New Me</p>
                            <div className="w-full h-1.5 bg-gray-100 rounded-full mb-2"></div>
                            <div className="w-2/3 h-1.5 bg-gray-100 rounded-full"></div>
                          </div>
                          
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm flex items-center gap-3 transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                            <div className="w-10 h-10 bg-[#e6f2ff] rounded-xl flex items-center justify-center text-blue-600 font-bold text-xs">PR</div>
                            <div>
                              <p className="text-sm font-bold text-gray-800">Product</p>
                              <p className="text-[11px] text-gray-500 mt-0.5">Skincare Set</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="text-[15px] font-medium hover:text-gray-600 transition-colors text-black"
            >
              Creators
            </Link>
            <Link
              href="#"
              className="text-[15px] font-medium hover:text-gray-600 transition-colors text-black"
            >
              Success stories
            </Link>
            <Link
              href="#"
              className="text-[15px] font-medium hover:text-gray-600 transition-colors text-black"
            >
              Contact
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-6">
            {/* <Link href="#" className="text-[15px] font-medium hover:text-gray-600 transition-colors text-black">Login</Link> */}
            <div
              className="relative group h-full"
              onMouseEnter={() => setIsContactDropdownOpen(true)}
              onMouseLeave={() => setIsContactDropdownOpen(false)}
            >
              <button className="px-6 py-3 bg-black text-white rounded-full text-[15px] font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                Contact
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className={cn(
                  "absolute right-0 top-full pt-4 w-72 transition-all duration-300 origin-top-right",
                  isContactDropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-2 invisible",
                )}
              >
                <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-6 border border-gray-100 flex flex-col gap-6 cursor-default">
                  {/* Option 1: I'm a brand */}
                  <Link
                    href="#"
                    className="flex gap-4 group/item hover:bg-gray-50 p-2 -m-2 rounded-2xl transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-black group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-colors shrink-0">
                      <Store className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-semibold text-black text-[15px]">
                        I&apos;m a brand
                      </span>
                      <span className="text-gray-500 text-[13px]">
                        Connect with creators
                      </span>
                    </div>
                  </Link>

                  {/* Option 2: I'm a creator */}
                  <Link
                    href="#"
                    className="flex gap-4 group/item hover:bg-gray-50 p-2 -m-2 rounded-2xl transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-black group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-colors shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-semibold text-black text-[15px]">
                        I&apos;m a creator
                      </span>
                      <span className="text-gray-500 text-[13px]">
                        Monetize your content
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
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

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out lg:hidden pt-24 overflow-y-auto",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full",
          )}
        >
          <div className="flex flex-col px-6 pb-12">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-2">
              {/* Dropdown Accordion for Mobile */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full py-4 text-xl font-medium text-black"
                >
                  Platform
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isDropdownOpen && "rotate-180",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isDropdownOpen
                      ? "grid-rows-[1fr] opacity-100 pb-4"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden flex flex-col gap-6 pl-4">
                    <div>
                      <h3 className="text-gray-400 text-sm font-medium mb-3 mt-2">
                        By feature
                      </h3>
                      <div className="flex flex-col gap-4">
                        <Link
                          href="#"
                          className="text-black font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          Partnerships hub
                        </Link>
                        <Link
                          href="#"
                          className="text-black font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          CreativeOps
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm font-medium mb-3">
                        By business
                      </h3>
                      <div className="flex flex-col gap-4">
                        <Link
                          href="#"
                          className="text-black font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          For Brands
                        </Link>
                        <Link
                          href="#"
                          className="text-black font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          For Agencies
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="block py-4 text-xl font-medium text-black border-b border-gray-100"
              >
                Creators
              </Link>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="block py-4 text-xl font-medium text-black border-b border-gray-100"
              >
                Success stories
              </Link>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-4 mt-10">
              {/* <Link 
                href="#" 
                onClick={() => setIsOpen(false)}
                className="w-full py-4 text-center text-lg font-medium text-black border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              >
                Login
              </Link> */}
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 text-center text-lg font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
