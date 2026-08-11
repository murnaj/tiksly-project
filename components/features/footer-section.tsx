"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Flag Icons ──────────────────────────────────────────────────────── */

function USFlag() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4">
      <g clipPath="url(#us-footer)">
        <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#F0F0F0"/>
        <path d="M7.65198 8.50001H15.9998C15.9998 7.77794 15.9035 7.07845 15.7242 6.41304H7.65198V8.50001Z" fill="#D80027"/>
        <path d="M7.65198 4.32569H14.8256C14.3359 3.52657 13.7097 2.82022 12.9797 2.23872H7.65198V4.32569Z" fill="#D80027"/>
        <path d="M7.99983 16.5C9.88261 16.5 11.6131 15.8493 12.9797 14.7609H3.01996C4.38652 15.8493 6.11705 16.5 7.99983 16.5Z" fill="#D80027"/>
        <path d="M1.17405 12.6733H14.8257C15.2188 12.0318 15.5237 11.3305 15.7243 10.5863H0.275452C0.475983 11.3305 0.780889 12.0318 1.17405 12.6733Z" fill="#D80027"/>
        <path d="M3.70575 1.74931H4.43478L3.75666 2.24197L4.01569 3.03912L3.33759 2.54647L2.6595 3.03912L2.88325 2.35047C2.28619 2.84781 1.76287 3.4305 1.33162 4.07975H1.56522L1.13356 4.39334C1.06631 4.50553 1.00181 4.6195 0.94 4.73516L1.14612 5.36956L0.761563 5.09016C0.665969 5.29269 0.578531 5.49978 0.499938 5.71119L0.727031 6.41019H1.56522L0.887094 6.90284L1.14612 7.7L0.468031 7.20734L0.0618437 7.50247C0.0211875 7.82928 0 8.16216 0 8.5H8C8 4.08175 8 3.56087 8 0.5C6.41963 0.5 4.94641 0.958438 3.70575 1.74931ZM4.01569 7.7L3.33759 7.20734L2.6595 7.7L2.91853 6.90284L2.24041 6.41019H3.07859L3.33759 5.61303L3.59659 6.41019H4.43478L3.75666 6.90284L4.01569 7.7ZM3.75666 4.57241L4.01569 5.36956L3.33759 4.87691L2.6595 5.36956L2.91853 4.57241L2.24041 4.07975H3.07859L3.33759 3.28259L3.59659 4.07975H4.43478L3.75666 4.57241ZM6.88525 7.7L6.20716 7.20734L5.52906 7.7L5.78809 6.90284L5.10997 6.41019H5.94816L6.20716 5.61303L6.46616 6.41019H7.30434L6.62622 6.90284L6.88525 7.7ZM6.62622 4.57241L6.88525 5.36956L6.20716 4.87691L5.52906 5.36956L5.78809 4.57241L5.10997 4.07975H5.94816L6.20716 3.28259L6.46616 4.07975H7.30434L6.62622 4.57241ZM6.62622 2.24197L6.88525 3.03912L6.20716 2.54647L5.52906 3.03912L5.78809 2.24197L5.10997 1.74931H5.94816L6.20716 0.952156L6.46616 1.74931H7.30434L6.62622 2.24197Z" fill="#0052B4"/>
      </g>
      <defs><clipPath id="us-footer"><rect width="16" height="16" fill="white" transform="translate(0 0.5)"/></clipPath></defs>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4">
      <g clipPath="url(#uk-footer)">
        <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#F0F0F0"/>
        <path d="M1.65379 3.62866C1.02538 4.44626 0.551541 5.3886 0.275635 6.41232H4.43745L1.65379 3.62866Z" fill="#0052B4"/>
        <path d="M15.7247 6.41241C15.4488 5.38872 14.9749 4.44638 14.3465 3.62878L11.5629 6.41241H15.7247Z" fill="#0052B4"/>
        <path d="M0.275635 10.5868C0.551572 11.6105 1.02542 12.5528 1.65379 13.3704L4.43736 10.5868H0.275635Z" fill="#0052B4"/>
        <path d="M12.8704 2.15318C12.0528 1.52478 11.1105 1.05093 10.0867 0.774994V4.93678L12.8704 2.15318Z" fill="#0052B4"/>
        <path d="M3.12927 14.8451C3.94687 15.4735 4.88921 15.9474 5.9129 16.2233V12.0616L3.12927 14.8451Z" fill="#0052B4"/>
        <path d="M5.91287 0.774994C4.88918 1.05093 3.94684 1.52477 3.12927 2.15315L5.91287 4.93674V0.774994Z" fill="#0052B4"/>
        <path d="M10.0867 16.2233C11.1104 15.9474 12.0528 15.4735 12.8703 14.8452L10.0867 12.0616V16.2233Z" fill="#0052B4"/>
        <path d="M11.5629 10.5868L14.3465 13.3704C14.9749 12.5529 15.4488 11.6105 15.7247 10.5868H11.5629Z" fill="#0052B4"/>
        <path d="M15.9323 7.45653H9.04353V0.567719C8.70191 0.52325 8.35366 0.5 8 0.5C7.64628 0.5 7.29809 0.52325 6.95653 0.567719V7.45647H0.0677188C0.02325 7.79809 0 8.14634 0 8.5C0 8.85372 0.02325 9.20191 0.0677188 9.54347H6.95647V16.4323C7.29809 16.4768 7.64628 16.5 8 16.5C8.35366 16.5 8.70191 16.4768 9.04347 16.4323V9.54353H15.9323C15.9768 9.20191 16 8.85372 16 8.5C16 8.14634 15.9768 7.79809 15.9323 7.45653Z" fill="#D80027"/>
        <path d="M10.087 10.5875L13.6569 14.1574C13.821 13.9933 13.9777 13.8217 14.1271 13.6438L11.0708 10.5875H10.087Z" fill="#D80027"/>
        <path d="M5.91305 10.5875L2.34314 14.1573C2.50726 14.3215 2.67886 14.4781 2.85673 14.6276L5.91305 11.5712V10.5875Z" fill="#D80027"/>
        <path d="M5.91293 6.41274L2.34305 2.84277C2.17887 3.0069 2.02224 3.17849 1.8728 3.35637L4.92915 6.41271H5.91293V6.41274Z" fill="#D80027"/>
        <path d="M10.087 6.41346L13.6569 2.84353C13.4928 2.67934 13.3212 2.52271 13.1433 2.37331L10.087 5.42965V6.41346Z" fill="#D80027"/>
      </g>
      <defs><clipPath id="uk-footer"><rect width="16" height="16" fill="white" transform="translate(0 0.5)"/></clipPath></defs>
    </svg>
  );
}

/* ── Contact Icons ───────────────────────────────────────────────────── */

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.549 4.083 1.508 5.799L.057 23.155a.748.748 0 0 0 .923.923l5.356-1.451A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.661-.515-5.175-1.413L2.82 21.742l1.155-4.005A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

function WeChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 0 0 .165-.054l1.9-1.106a.9.9 0 0 1 .62-.098 10.734 10.734 0 0 0 2.938.403c.28 0 .553-.013.827-.035-.174-.554-.268-1.135-.268-1.737 0-3.737 3.537-6.763 7.902-6.763.274 0 .543.016.81.04C16.947 4.983 13.159 2.188 8.691 2.188zm-2.373 3.756a.985.985 0 1 1 0 1.97.985.985 0 0 1 0-1.97zm4.807 0a.985.985 0 1 1 0 1.97.985.985 0 0 1 0-1.97z"/>
      <path d="M24 15.196c0-3.3-3.127-5.977-6.986-5.977-3.859 0-6.987 2.678-6.987 5.977 0 3.301 3.128 5.978 6.987 5.978.808 0 1.582-.12 2.304-.333a.707.707 0 0 1 .481.076l1.484.863a.26.26 0 0 0 .129.042.23.23 0 0 0 .228-.229c0-.056-.023-.11-.037-.166l-.305-1.157a.46.46 0 0 1 .167-.519C23.077 18.696 24 17.026 24 15.196zm-9.316-1.045a.768.768 0 1 1 0-1.537.768.768 0 0 1 0 1.537zm4.661 0a.768.768 0 1 1 0-1.537.768.768 0 0 1 0 1.537z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

/* ── SVG Icons ───────────────────────────────────────────────────────── */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.065-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.379-.293 1.189-.333 1.357-.053.225-.176.273-.406.165-1.513-.704-2.46-2.915-2.46-4.693 0-3.821 2.775-7.332 8.01-7.332 4.206 0 7.476 2.997 7.476 7.003 0 4.181-2.636 7.545-6.294 7.545-1.229 0-2.385-.639-2.78-1.392l-.758 2.888c-.274 1.054-1.018 2.374-1.517 3.183C9.691 23.87 10.824 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
      />
    </svg>
  );
}


/* ── Data ─────────────────────────────────────────────────────────────── */

const servicesLinks = [
  { label: "Shop Management", href: "#" },
  { label: "Affiliate & Creator Management", href: "#" },
  { label: "TikTok Shop Ads", href: "#" },
  { label: "UGC Content", href: "#" },
  { label: "Live Streaming", href: "#" },
  { label: "Coaching & Consultation", href: "#" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "#" },
  { label: "Checklists", href: "#" },
  { label: "Free Tools", href: "#" },
  { label: "About Us", href: "/about-us" },
  { label: "Careers ", href: "#" },
  { label: "Community", href: "#" },
];

const freeToolLinks = [
  { label: "Profit Calculator", href: "#" },
  { label: "Diamond Calculator", href: "#" },
  { label: "Shop Name Generator", href: "#" },
];

const socialLinks: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: "Facebook", href: "https://www.facebook.com/tiksly", icon: <FacebookIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/tiksly_services/", icon: <InstagramIcon /> },
  { label: "Pinterest", href: "https://www.pinterest.com/tiksly/", icon: <PinterestIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/tiksly/", icon: <LinkedInIcon /> },
  { label: "YouTube", href: "https://www.youtube.com/@Tiksly", icon: <YouTubeIcon /> },
];

/* ── Component ────────────────────────────────────────────────────────── */

export default function FooterSection() {
  const footerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.1, 0.4, 0.85]);

  // Ambient parallax blobs scroll transformations
  const blobY1 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <footer ref={footerRef} className="relative bg-[#0B0C0E] text-white w-full">
      {/* Background decorations container (clips blobs and grid, leaves wave divider unclipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Moving Ambient Parallax Blobs */}
        <motion.div
          style={{ y: blobY1 }}
          className="absolute -top-[5%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#BCF96A] opacity-[0.16] blur-[110px]"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="absolute -bottom-[5%] right-[10%] w-[550px] h-[550px] rounded-full bg-[#0081FB] opacity-[0.14] blur-[140px]"
        />
      </div>

      {/* Wave top divider with glowing gradient stroke */}
      <div className="absolute -top-[49px] left-0 right-0 leading-none pointer-events-none z-10">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "50px" }} fill="#0B0C0E" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0081FB" stopOpacity="0" />
              <stop offset="15%" stopColor="#0081FB" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#BCF96A" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#0081FB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0081FB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,35 C120,10 280,50 480,20 C640,0 800,45 1000,18 C1150,2 1320,42 1440,22 L1440,50 L0,50 Z"/>
          <path d="M0,35 C120,10 280,50 480,20 C640,0 800,45 1000,18 C1150,2 1320,42 1440,22" fill="none" stroke="url(#wave-gradient)" strokeWidth="2.5" />
        </svg>
      </div>
      {/* Main grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-12">

          {/* Logo & Address / Contact */}
          <div className="flex flex-col gap-5">
            <div>
              {/* <div className="block mb-3">
                <Image
                  src="/branding/logo-green.svg"
                  alt="Logo"
                  width={110}
                  height={110}
                />
              </div> */}
              <p className="text-gray-400 text-[14px] leading-relaxed max-w-sm">
                The full-stack TikTok Shop agency. Built by operators, trusted by brands.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-[14px]">
              {/* Email & Instant Messaging Blocks */}
              <div className="flex flex-col gap-3.5">
                <a
                  href="https://wa.me/447412066394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-gray-300 hover:text-[#c3fd03] transition-colors w-fit text-[14.5px] font-medium"
                >
                  <WhatsAppIcon />
                  <span>+447412066394</span>
                </a>

                <div className="inline-flex items-center gap-2.5 text-gray-300 w-fit text-[14.5px] font-medium">
                  <WeChatIcon />
                  <span>+447412066394</span>
                </div>

                <a
                  href="mailto:sales@tiksly.com"
                  className="inline-flex items-center gap-2.5 text-gray-300 hover:text-[#c3fd03] transition-colors w-fit text-[14.5px] font-medium"
                >
                  <EmailIcon />
                  <span>sales@tiksly.com</span>
                </a>
              </div>

              {/* Office Addresses - Clean stacked layout with left border accents */}
              <div className="flex flex-col gap-3.5 pt-2">
                {/* <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#c3fd03] uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5 text-[#c3fd03] shrink-0" />
                    <span>Pakistan (operations hub)</span>
                  </div>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    Opposite Sub Divisional Court, Tandlianwala, Pakistan
                  </p>
                </div> */}

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#c3fd03] uppercase tracking-wider">
                    <USFlag />
                    <span>USA Office</span>
                  </div>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    1001 S Main St, Suite 500, Kalispell, MT 59901, USA
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#c3fd03] uppercase tracking-wider">
                    <UKFlag />
                    <span>UK Office</span>
                  </div>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    Unit 103 Chambers Business Centre, Chapel Road, Oldham OL8 4QQ, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 tracking-tight">Services</h3>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] text-gray-400 hover:text-[#c3fd03] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 tracking-tight">Resources</h3>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] text-gray-400 hover:text-[#c3fd03] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 tracking-tight">Free Tools</h3>
            <ul className="flex flex-col gap-3">
              {freeToolLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[14px] text-gray-400 hover:text-[#c3fd03] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Giant Parallax Watermark Logo Banner */}
      <div className="w-full overflow-hidden pt-8 pb-4 pointer-events-none select-none relative">
        {/* Glowing Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0081FB]/30 via-[#BCF96A]/60 via-[#0081FB]/30 to-transparent" />
        <motion.div
          style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
          className="flex justify-center items-center py-6"
        >
          <Image
            src="/branding/logo-white.svg"
            alt="Tiksly Brand Logo Parallax"
            width={720}
            height={220}
            className="w-[85%] max-w-[680px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(195,253,3,0.25)]"
          />
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#07080A] text-gray-400 px-4 w-full relative">
        {/* Glowing Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0081FB]/20 via-[#BCF96A]/40 via-[#0081FB]/20 to-transparent" />
        <div className="container mx-auto py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Copyright */}
            <div className="text-[13px] text-gray-500 order-3 md:order-1">
              Copyright © 2026 tiksly. All rights reserved.
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-6 order-1 md:order-2">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-gray-400 hover:text-[#c3fd03] transition-colors duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div className="flex items-center gap-6 text-[13px] order-2 md:order-3">
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#c3fd03] transition-colors duration-200">
                Terms Of Service
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#c3fd03] transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
