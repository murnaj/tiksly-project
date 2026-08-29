"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HlsVideo } from "@/components/features/common/hls-video";

interface FlippingVideoCardProps {
  videoIds: string[];
  initialIndex: number;
  delay?: number;
  flipInterval?: number;
}

export function FlippingVideoCard({
  videoIds,
  initialIndex,
  delay = 0,
  flipInterval = 5000,
}: FlippingVideoCardProps) {
  const [flipCount, setFlipCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setFlipCount((prev) => prev + 1);
      }, flipInterval + Math.random() * 2000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, flipInterval]);

  const currentVideoId = videoIds[initialIndex];

  return (
    <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipCount * 360 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-sm bg-gray-100"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Always active so it doesn't re-render and hang */}
          <HlsVideo videoId={currentVideoId} active={true} />
        </div>

        {/* Back Side (visible only during the flip) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-sm bg-black flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Image src="/branding/logo-white.svg" alt="Logo" width={100} height={40} className="w-2/3 h-auto" />
        </div>
      </motion.div>
    </div>
  );
}
