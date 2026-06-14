"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Card } from "@/components/ui/card";
import {
  Leaf,
  Sparkles,
  Shirt,
  Smartphone,
  Coffee,
  PawPrint,
  Smile,
  Cpu,
  Home as HomeIcon,
  Play,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

// Swiper core styles
import "swiper/css";
import "swiper/css/autoplay";

// Category definitions with icons
const CATEGORIES = [
  { id: "health-wellness", name: "Health & Wellness", icon: Leaf },
  { id: "cosmetics-beauty", name: "Cosmetics & Beauty", icon: Sparkles },
  { id: "apparel-fashion", name: "Apparel & Fashion", icon: Shirt },
  { id: "apps-services", name: "Apps & Digital Services", icon: Smartphone },
  { id: "food-beverage", name: "Food & Beverage", icon: Coffee },
  { id: "pets", name: "Pets", icon: PawPrint },
  { id: "children-family", name: "Children & Family", icon: Smile },
  { id: "technology-gadgets", name: "Technology & Gadgets", icon: Cpu },
  { id: "home-lifestyle", name: "Home & Lifestyle", icon: HomeIcon },
];

interface Reviewer {
  name: string;
  rating: number;
  countryName: string;
  countryFlag: string;
  avatar: string;
}

interface Review {
  id: string;
  category: string;
  image: string;
  caption: string;
  reviewer: Reviewer;
}

// Complete mock reviews database
const REVIEWS_DATA: Record<string, Review[]> = {
  "Health & Wellness": [
    {
      id: "hw-1",
      category: "Health & Wellness",
      image: "/process/videoframe_1.png",
      caption: "I always had pain in my feet ⚡",
      reviewer: {
        name: "Josh",
        rating: 4.8,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/josh.webp",
      },
    },
    {
      id: "hw-2",
      category: "Health & Wellness",
      image: "/process/videoframe_2.png",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Jessica",
        rating: 4.7,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
        avatar: "/Chelsea.webp",
      },
    },
    {
      id: "hw-3",
      category: "Health & Wellness",
      image: "/process/videoframe_3.png",
      caption: "KNEE MASSAGER.",
      reviewer: {
        name: "Brie",
        rating: 4.9,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/Brie_Tennessee.webp",
      },
    },
    {
      id: "hw-4",
      category: "Health & Wellness",
      image: "/process/videoframe_4.png",
      caption: "unlike chocolate it's not gonna melt 😉",
      reviewer: {
        name: "Jonah",
        rating: 4.8,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/Jonah_Nebraska.webp",
      },
    },
    {
      id: "hw-5",
      category: "Health & Wellness",
      image: "/process/videoframe_5.png",
      caption: "go grab yours now before they're gone",
      reviewer: {
        name: "Alexis",
        rating: 4.9,
        countryName: "Australia",
        countryFlag: "🇦🇺",
        avatar: "/Alexis_California.webp",
      },
    },
  ],
  "Cosmetics & Beauty": [
    {
      id: "cb-1",
      category: "Cosmetics & Beauty",
      image: "/process/videoframe_6.png",
      caption: "The only lash serum that actually works! ✨",
      reviewer: {
        name: "Sophia",
        rating: 4.9,
        countryName: "France",
        countryFlag: "🇫🇷",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "cb-2",
      category: "Cosmetics & Beauty",
      image: "/process/videoframe_1.png",
      caption: "Get ready with me: Hydration Edition 🧴",
      reviewer: {
        name: "Elena",
        rating: 4.7,
        countryName: "Italy",
        countryFlag: "🇮🇹",
        avatar: "/process/videoframe_2.png",
      },
    },
    {
      id: "cb-3",
      category: "Cosmetics & Beauty",
      image: "/process/videoframe_2.png",
      caption: "BEST LIP GLOSS EVER! 💄",
      reviewer: {
        name: "Jessica",
        rating: 4.8,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "cb-4",
      category: "Cosmetics & Beauty",
      image: "/process/videoframe_3.png",
      caption: "Say goodbye to dark spots! 🌟",
      reviewer: {
        name: "Amara",
        rating: 4.9,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "cb-5",
      category: "Cosmetics & Beauty",
      image: "/process/videoframe_4.png",
      caption: "No makeup makeup routine tutorial 👇",
      reviewer: {
        name: "Chloe",
        rating: 4.6,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_1.png",
      },
    },
  ],
  "Apparel & Fashion": [
    {
      id: "af-1",
      category: "Apparel & Fashion",
      image: "/process/videoframe_4.png",
      caption: "Styling this oversized hoodie 3 ways 🧥",
      reviewer: {
        name: "Leo",
        rating: 4.7,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
        avatar: "/process/videoframe_5.png",
      },
    },
    {
      id: "af-2",
      category: "Apparel & Fashion",
      image: "/process/videoframe_5.png",
      caption: "Honest review of these activewear sets 🏋️‍♀️",
      reviewer: {
        name: "Aria",
        rating: 4.8,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "af-3",
      category: "Apparel & Fashion",
      image: "/process/videoframe_6.png",
      caption: "SUMMER LOOKBOOK ☀️",
      reviewer: {
        name: "Marcus",
        rating: 4.9,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_2364.png",
      },
    },
    {
      id: "af-4",
      category: "Apparel & Fashion",
      image: "/process/videoframe_1.png",
      caption: "These sneakers feel like clouds ☁️",
      reviewer: {
        name: "Lucas",
        rating: 4.9,
        countryName: "Germany",
        countryFlag: "🇩🇪",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "af-5",
      category: "Apparel & Fashion",
      image: "/process/videoframe_2.png",
      caption: "Are luxury sunglasses worth it? 😎",
      reviewer: {
        name: "Zara",
        rating: 4.6,
        countryName: "Spain",
        countryFlag: "🇪🇸",
        avatar: "/process/videoframe_3.png",
      },
    },
  ],
  "Apps & Digital Services": [
    {
      id: "ad-1",
      category: "Apps & Services",
      image: "/process/videoframe_2.png",
      caption: "How I learn Spanish in 5 mins a day 🇪🇸",
      reviewer: {
        name: "Mateo",
        rating: 4.8,
        countryName: "Spain",
        countryFlag: "🇪🇸",
        avatar: "/process/videoframe_1.png",
      },
    },
    {
      id: "ad-2",
      category: "Apps & Services",
      image: "/process/videoframe_3.png",
      caption: "This editing app changed my workflow! 🎬",
      reviewer: {
        name: "Maya",
        rating: 4.9,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "ad-3",
      category: "Apps & Services",
      image: "/process/videoframe_4.png",
      caption: "My new favorite coding assistant 💻",
      reviewer: {
        name: "David",
        rating: 5.0,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "ad-4",
      category: "Apps & Services",
      image: "/process/videoframe_5.png",
      caption: "Best productivity dashboard for 2026 📈",
      reviewer: {
        name: "Liam",
        rating: 4.7,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
        avatar: "/process/videoframe_6.png",
      },
    },
    {
      id: "ad-5",
      category: "Apps & Services",
      image: "/process/videoframe_6.png",
      caption: "Stop wasting time, use this AI tool!",
      reviewer: {
        name: "Ryan",
        rating: 4.8,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_2364.png",
      },
    },
  ],
  "Food & Beverage": [
    {
      id: "fb-1",
      category: "Food & Beverage",
      image: "/process/videoframe_5.png",
      caption: "The tastiest vegan protein shake ever 🥤",
      reviewer: {
        name: "Emma",
        rating: 4.9,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "fb-2",
      category: "Food & Beverage",
      image: "/process/videoframe_6.png",
      caption: "Brewing the perfect cup of coffee ☕",
      reviewer: {
        name: "Daniel",
        rating: 4.8,
        countryName: "Brazil",
        countryFlag: "🇧🇷",
        avatar: "/process/videoframe_3.png",
      },
    },
    {
      id: "fb-3",
      category: "Food & Beverage",
      image: "/process/videoframe_1.png",
      caption: "Are these healthy sodas actually good? 🥤",
      reviewer: {
        name: "Chloe",
        rating: 4.7,
        countryName: "Australia",
        countryFlag: "🇦🇺",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "fb-4",
      category: "Food & Beverage",
      image: "/process/videoframe_2.png",
      caption: "Snack haul: Keto-friendly edition 🥜",
      reviewer: {
        name: "Ethan",
        rating: 4.6,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "fb-5",
      category: "Food & Beverage",
      image: "/process/videoframe_3.png",
      caption: "I replaced my energy drinks with this ⚡",
      reviewer: {
        name: "Noah",
        rating: 4.9,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_4.png",
      },
    },
    {
      id: "fb-6",
      category: "Food & Beverage",
      image: "/process/videoframe_3.png",
      caption: "I replaced my energy drinks with this ⚡",
      reviewer: {
        name: "Noah",
        rating: 4.9,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_7.png",
      },
    },
  ],
  "Pets": [
    {
      id: "pt-1",
      category: "Pets",
      image: "/process/videoframe_1.png",
      caption: "My dog is obsessed with these treats! 🐶",
      reviewer: {
        name: "Bella",
        rating: 4.8,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "pt-2",
      category: "Pets",
      image: "/process/videoframe_2.png",
      caption: "Unboxing the ultimate cat scratcher 🐱",
      reviewer: {
        name: "Milo",
        rating: 4.7,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_5.png",
      },
    },
    {
      id: "pt-3",
      category: "Pets",
      image: "/process/videoframe_3.png",
      caption: "This harness stopped my pup from pulling 🐕",
      reviewer: {
        name: "Sarah",
        rating: 4.9,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "pt-4",
      category: "Pets",
      image: "/process/videoframe_4.png",
      caption: "Best automatic pet feeder review 🐾",
      reviewer: {
        name: "Cooper",
        rating: 4.8,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_6.png",
      },
    },
    {
      id: "pt-5",
      category: "Pets",
      image: "/process/videoframe_5.png",
      caption: "We tried a custom dog puzzle toy 🧩",
      reviewer: {
        name: "Lucy",
        rating: 4.9,
        countryName: "Australia",
        countryFlag: "🇦🇺",
        avatar: "/process/videoframe_9629.png",
      },
    },
  ],
  "Children & Family": [
    {
      id: "cf-1",
      category: "Children & Family",
      image: "/process/videoframe_3.png",
      caption: "Montessori toys my toddler loves 🧸",
      reviewer: {
        name: "Sophia",
        rating: 4.9,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "cf-2",
      category: "Children & Family",
      image: "/process/videoframe_4.png",
      caption: "This stroller fits in the overhead bin! ✈️",
      reviewer: {
        name: "James",
        rating: 4.7,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "cf-3",
      category: "Children & Family",
      image: "/process/videoframe_5.png",
      caption: "Family bedtime routine game-changer 😴",
      reviewer: {
        name: "Emily",
        rating: 4.8,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "cf-4",
      category: "Children & Family",
      image: "/process/videoframe_6.png",
      caption: "Sensory play ideas for rainy days 🎨",
      reviewer: {
        name: "Olivia",
        rating: 4.9,
        countryName: "Australia",
        countryFlag: "🇦🇺",
        avatar: "/process/videoframe_1.png",
      },
    },
    {
      id: "cf-5",
      category: "Children & Family",
      image: "/process/videoframe_1.png",
      caption: "Reviewing our new diaper backpack 🎒",
      reviewer: {
        name: "William",
        rating: 4.8,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_2364.png",
      },
    },
  ],
  "Technology & Gadgets": [
    {
      id: "tg-1",
      category: "Technology & Gadgets",
      image: "/process/videoframe_2.png",
      caption: "Active noise cancelling on these is wild 🎧",
      reviewer: {
        name: "Benjamin",
        rating: 4.8,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "tg-2",
      category: "Technology & Gadgets",
      image: "/process/videoframe_3.png",
      caption: "Mechanical keyboard unboxing & sound test ⌨️",
      reviewer: {
        name: "Mia",
        rating: 4.7,
        countryName: "Japan",
        countryFlag: "🇯🇵",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "tg-3",
      category: "Technology & Gadgets",
      image: "/process/videoframe_4.png",
      caption: "This desk light mimics natural sunlight 💡",
      reviewer: {
        name: "Alex",
        rating: 4.9,
        countryName: "Germany",
        countryFlag: "🇩🇪",
        avatar: "/process/videoframe_2364.png",
      },
    },
    {
      id: "tg-4",
      category: "Technology & Gadgets",
      image: "/process/videoframe_5.png",
      caption: "Ultra-thin magsafe power bank test 🔋",
      reviewer: {
        name: "Charlotte",
        rating: 4.8,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_1.png",
      },
    },
    {
      id: "tg-5",
      category: "Technology & Gadgets",
      image: "/process/videoframe_6.png",
      caption: "Is this smartwatch worth the hype? ⌚",
      reviewer: {
        name: "Henry",
        rating: 4.7,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_554.png",
      },
    },
  ],
  "Home & Lifestyle": [
    {
      id: "hl-1",
      category: "Home & Lifestyle",
      image: "/process/videoframe_6.png",
      caption: "My apartment smell-good routine 🕯️",
      reviewer: {
        name: "Grace",
        rating: 4.9,
        countryName: "France",
        countryFlag: "🇫🇷",
        avatar: "/process/videoframe_9629.png",
      },
    },
    {
      id: "hl-2",
      category: "Home & Lifestyle",
      image: "/process/videoframe_1.png",
      caption: "Styling our living room corner 🛋️",
      reviewer: {
        name: "Thomas",
        rating: 4.7,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "hl-3",
      category: "Home & Lifestyle",
      image: "/process/videoframe_2.png",
      caption: "This plant hanger is a work of art 🪴",
      reviewer: {
        name: "Oliver",
        rating: 4.8,
        countryName: "Netherlands",
        countryFlag: "🇳🇱",
        avatar: "/process/videoframe_554.png",
      },
    },
    {
      id: "hl-4",
      category: "Home & Lifestyle",
      image: "/process/videoframe_3.png",
      caption: "Desk makeover: minimal setup 🖥️",
      reviewer: {
        name: "Leo",
        rating: 4.9,
        countryName: "United States",
        countryFlag: "🇺🇸",
        avatar: "/process/videoframe_2364.png",
      },
    },
    {
      id: "hl-5",
      category: "Home & Lifestyle",
      image: "/process/videoframe_4.png",
      caption: "Reviewing the viral silk pillowcase 😴",
      reviewer: {
        name: "Lily",
        rating: 4.8,
        countryName: "Canada",
        countryFlag: "🇨🇦",
        avatar: "/process/videoframe_9629.png",
      },
    },
  ],
};

const Reviews = () => {
  const [activeCategory, setActiveCategory] = useState("Health & Wellness");

  const currentReviews = REVIEWS_DATA[activeCategory] || [];
  
  // Duplicate the reviews array to ensure there are enough slides (>= 15) for Swiper loop to work without gaps
  const displayReviews = [...currentReviews, ...currentReviews, ...currentReviews].map((review, idx) => ({
    ...review,
    uniqueKey: `${review.id}-dup-${idx}`
  }));

  return (
    <section className="bg-[#E6F1FF] pt-14 md:pt-20 mt-5 md:mt-10 overflow-hidden w-full relative">
      {/* Category Tabs Container */}
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-10 md:gap-y-2">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.name === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] md:text-sm font-medium transition-all duration-300 cursor-pointer border",
                  isActive
                    ? "bg-white text-black border-transparent shadow-[0_4px_15px_rgba(0,0,0,0.06)] transform scale-[1.04]"
                    : "text-slate-700 border-transparent hover:text-black hover:bg-white/40"
                )}
              >
                <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-[#0081FB]" : "text-slate-500")} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="relative w-full max-w-[1450px] mx-auto flex items-center justify-center px-4 md:px-12 select-none overflow-visible">
        
        {/* Swiper Slider with activeCategory key to force rebuild on category switch */}
        <div className="w-full overflow-visible">
          <Swiper
            key={activeCategory}
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={12}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 36,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 44,
              },
            }}
            className="swiper-reviews-container overflow-visible"
          >
            {displayReviews.map((review) => (
              <SwiperSlide key={review.uniqueKey} className="flex items-center justify-center overflow-visible py-8">
                {({ isActive }) => (
                  <div
                    className={cn(
                      "transition-all duration-300 mx-auto ease-out relative rounded-[2.5rem] p-2 aspect-9/18",
                      "w-full max-w-[210px] sm:max-w-[230px] md:max-w-[170px] lg:max-w-[200px] xl:max-w-[230px]",
                      isActive
                        ? "bg-[#B7DEFF] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] scale-108 z-10 border border-slate-100"
                        : "bg-slate-950 scale-90 opacity-60 z-0 shadow-md border border-slate-900"
                    )}
                  >
                    {/* Inner Screen */}
                    <Card className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-900 border-none">
                      {/* Background UGC Review Image */}
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={review.image}
                          alt={review.caption}
                          fill
                          priority={isActive}
                          className="object-cover"
                        />
                        {/* Dark Vignette Overlay for Text Contrast */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/35 z-10" />
                      </div>

                      {/* Top Pill Category Tag */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#B7DEFF] border border-[#0081FB]/10 backdrop-blur-sm px-3 py-1 rounded-full z-20">
                        <span className="text-[9px] font-bold text-[#0081FB] tracking-wider whitespace-nowrap">
                          {review.category}
                        </span>
                      </div>

                      {/* Center Play Button (Only on Active Central Card) */}
                      {isActive && (
                        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                          <div className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:scale-108 active:scale-95 transition-all pointer-events-auto cursor-pointer">
                            <Play className="w-5.5 h-5.5 text-black fill-black ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Custom Caption Overlay (Non-active) */}
                      {!isActive && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-20 flex justify-center text-center">
                          <p className="text-white text-[11px] font-semibold leading-snug select-none">
                            {review.caption}
                          </p>
                        </div>
                      )}

                      {/* Review Text / Quote for Active Card */}
                      {isActive && (
                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] z-20 flex justify-center text-center">
                          <p className="text-white text-xs md:text-[13px] font-bold leading-snug tracking-tight text-shadow-md select-none">
                            {review.caption}
                          </p>
                        </div>
                      )}

                      {/* Glassmorphic Reviewer Profile Pill (Only on Active Card) */}
                      {isActive && (
                        <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md border border-white/20 p-2.5 rounded-2xl flex items-center justify-between shadow-lg z-20">
                          <div className="flex flex-col">
                            <h4 className="text-xs font-bold text-slate-900 leading-tight">
                              {review.reviewer.name}
                            </h4>
                            <div className="flex items-center gap-1 mt-0.5">
                              <span className="text-[10px] text-slate-800 font-semibold">{review.reviewer.rating}</span>
                              <Star className="w-2.5 h-2.5 fill-amber-500 stroke-amber-500" />
                            </div>
                            <div className="flex items-center gap-1 mt-0.5 text-[9px] text-slate-500 font-medium">
                              <span aria-hidden="true" className="text-xs leading-none">{review.reviewer.countryFlag}</span>
                              <span>{review.reviewer.countryName}</span>
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-100 relative bg-slate-50 shrink-0">
                            <Image
                              src={review.reviewer.avatar}
                              alt={review.reviewer.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </Card>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
