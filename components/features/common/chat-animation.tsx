"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";

const MESSAGES = [
  { id: 1, type: "sent", text: "Hi, I’m looking for UGC videos for my TikTok Shop to help increase sales." },
  { id: 2, type: "received", text: "Sure, we can help with that. What product are you promoting?" },
  { id: 3, type: "sent", text: "It’s a skincare product. I want natural-looking TikTok content." },
  { id: 4, type: "received", text: "Perfect. We can match you with suitable creators and create content focused on both engagement and sales." },
  { id: 5, type: "sent", text: "Sounds good. How do we get started?" },
  { id: 6, type: "received", text: "Just send us your product details and TikTok Shop link, and we’ll take it from there." },
];

export const ChatAnimation = () => {
  const [messages, setMessages] = useState<typeof MESSAGES>([]);
  const [isTyping, setIsTyping] = useState<"received" | "sent" | null>(null);
  const [typedText, setTypedText] = useState("");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];

    const startAnimation = () => {
      let currentDelay = 0;
      
      MESSAGES.forEach((msg) => {
        // Show typing indicator
        const typeId = setTimeout(() => {
          setIsTyping(msg.type as "received" | "sent");
          if (msg.type === "sent") {
            const chars = msg.text.split("");
            const charDelay = 2000 / chars.length;
            chars.forEach((char, i) => {
              const charId = setTimeout(() => {
                setTypedText((prev) => prev + char);
              }, i * charDelay);
              timeoutIds.push(charId);
            });
          }
        }, currentDelay + 500);
        timeoutIds.push(typeId);
        
        currentDelay += 2000; // Time spent typing
        
        // Hide typing and show message
        const msgId = setTimeout(() => {
          setIsTyping(null);
          if (msg.type === "sent") setTypedText("");
          setMessages((prev) => [...prev, msg]);
        }, currentDelay + 500);
        timeoutIds.push(msgId);
        
        currentDelay += 1000; // Time reading before next starts
      });

      // Clear all and restart
      const clearId = setTimeout(() => {
        setMessages([]);
        setCycle((c) => c + 1);
      }, currentDelay + 3000);
      timeoutIds.push(clearId);
    };

    startAnimation();

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [cycle]);

  return (
    <div className="w-full h-full bg-white flex flex-col pt-8 pb-4 px-4 overflow-hidden relative font-sans">
      {/* Header mock */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md z-10 border-b border-gray-100 flex items-center px-4 gap-3 shadow-sm">
        <div className="w-10 h-10 rounded-full bg-white border border-gray-100 overflow-hidden shrink-0 flex items-center justify-center text-lg p-0.5">
          <Image src="/branding/favicon.png" alt="Tiksly" width={40} height={40} className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-bold text-gray-900 leading-tight">Tiksly</span>
          <span className="text-[11px] text-green-500 font-medium">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 min-h-0 mt-12 flex flex-col justify-end gap-3 pb-2 relative z-0">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={`${cycle}-${msg.id}`}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-[12px] shadow-sm leading-snug ${
                msg.type === "sent"
                  ? "bg-black text-white self-end rounded-br-sm"
                  : "bg-gray-100 text-gray-800 self-start rounded-bl-sm border border-gray-200"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
          {isTyping === "received" && (
             <motion.div
               key="typing"
               initial={{ opacity: 0, y: 10, scale: 0.9 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1 } }}
               className="w-12 h-8 rounded-2xl flex items-center justify-center gap-1 shadow-sm border border-gray-200 shrink-0 bg-gray-100 text-gray-800 self-start rounded-bl-sm"
             >
                <motion.div className="w-1 h-1 rounded-full bg-gray-500" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0 }} />
                <motion.div className="w-1 h-1 rounded-full bg-gray-500" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }} />
                <motion.div className="w-1 h-1 rounded-full bg-gray-500" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.4 }} />
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input mock */}
      <div className="h-10 mt-2 bg-gray-100 rounded-full flex items-center px-4 shadow-inner border border-gray-200 shrink-0 relative overflow-hidden">
        <span className={`text-[11px] truncate z-10 relative flex items-center ${isTyping === "sent" ? "text-gray-800" : "text-gray-400"}`}>
          {isTyping === "sent" ? (
             <>
               {typedText}
               <motion.span 
                 animate={{ opacity: [1, 0, 1] }} 
                 transition={{ repeat: Infinity, duration: 0.8 }} 
                 className="ml-[1px] inline-block w-[1.5px] h-[12px] bg-black" 
               />
             </>
          ) : "Type a message..."}
        </span>
      </div>
    </div>
  );
};
