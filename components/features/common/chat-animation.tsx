"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MESSAGES = [
  { id: 1, type: "received", text: "Hey! We loved your recent skincare UGC video! 🔥" },
  { id: 2, type: "sent", text: "Thanks so much! I really enjoyed making it. 😊" },
  { id: 3, type: "received", text: "We're launching a new serum next week. Up for a 2-video campaign?" },
  { id: 4, type: "sent", text: "That sounds amazing! What's the timeline and budget?" },
  { id: 5, type: "received", text: "We need the drafts by the 15th. We can offer $400 for the package." },
  { id: 6, type: "sent", text: "Perfect, I can work with that. Send over the brief and I'll get started! 🚀" },
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
      <div className="absolute top-0 left-0 right-0 h-14 bg-white/90 backdrop-blur-md z-10 border-b border-gray-100 flex items-center px-4 gap-3 shadow-sm">
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0 flex items-center justify-center text-lg">
          👤
        </div>
        <div className="flex flex-col">
          <span className="text-[12px] font-bold text-gray-900 leading-tight">Brand Manager</span>
          <span className="text-[10px] text-green-500 font-medium">Online</span>
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
