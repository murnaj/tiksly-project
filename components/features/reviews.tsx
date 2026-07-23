"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { HlsVideo } from "@/components/features/hls-video";


interface Reviewer {
  name: string;
  rating: number;
  countryName: string;
  countryFlag: string;
  avatar: string;
}

interface Review {
  id: string;
  videoId?: string;
  caption: string;
  reviewer: Reviewer;
}

const REVIEWS_DATA: Review[] = [
  {
    id: "hw-1",
    videoId: "ab807060990361a8baeca01ee02fca85",
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
    videoId: "ce3082f8b2b1151137c5b9a82aa9b342",
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
    videoId: "ced34f0b20b4edf473a0055a73b9d71b",
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
    videoId: "11d8f8e7bae109fa8d663716d9796058",
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
    videoId: "472c8a404f7d396a08417a00d5507f1c",
    caption: "go grab yours now before they're gone",
    reviewer: {
      name: "Alexis",
      rating: 4.9,
      countryName: "Australia",
      countryFlag: "🇦🇺",
      avatar: "/Alexis_California.webp",
    },
  },

  {
    id: "hw-6",
    videoId: "0aaea0305aa72881f52d75978391efb9",
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
    id: "hw-7",
    videoId: "a4e66c51a879a405eba452d44017299b",
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
    id: "hw-8",
    videoId: "8880a052180933af96cb96020e560c85",
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
    id: "hw-9",
    videoId: "79e7cf49cdb4ab1729369b36e5afd8cc",
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
    id: "hw-10",
    videoId: "77ee39539df24d8b2221621ad13893b2",
    caption: "go grab yours now before they're gone",
    reviewer: {
      name: "Alexis",
      rating: 4.9,
      countryName: "Australia",
      countryFlag: "🇦🇺",
      avatar: "/Alexis_California.webp",
    },
  },

  {
    id: "hw-11",
    videoId: "9eeb72536d1b478e604752b4ef089d96",
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
    id: "hw-12",
    videoId: "894c688f6c8c83c71eef8a2e6dc18278",
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
    id: "hw-13",
    videoId: "b1c7031bfed77c225dd2a2e657d3f4f6",
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
    id: "hw-14",
    videoId: "2384c4da51b3d5466e704f49b59f9137",
    caption: "unlike chocolate it's not gonna melt 😉",
    reviewer: {
      name: "Jonah",
      rating: 4.8,
      countryName: "Canada",
      countryFlag: "🇨🇦",
      avatar: "/Jonah_Nebraska.webp",
    },
  }
];

// Vector Flags duplicated from creator-regions.tsx and expanded
function USFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4">
      <g clipPath="url(#clip0_6035_706)">
        <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#F0F0F0"></path>
        <path d="M7.65198 8.50001H15.9998C15.9998 7.77794 15.9035 7.07845 15.7242 6.41304H7.65198V8.50001Z" fill="#D80027"></path>
        <path d="M7.65198 4.32569H14.8256C14.3359 3.52657 13.7097 2.82022 12.9797 2.23872H7.65198V4.32569Z" fill="#D80027"></path>
        <path d="M7.99983 16.5C9.88261 16.5 11.6131 15.8493 12.9797 14.7609H3.01996C4.38652 15.8493 6.11705 16.5 7.99983 16.5Z" fill="#D80027"></path>
        <path d="M1.17405 12.6733H14.8257C15.2188 12.0318 15.5237 11.3305 15.7243 10.5863H0.275452C0.475983 11.3305 0.780889 12.0318 1.17405 12.6733Z" fill="#D80027"></path>
        <path d="M3.70575 1.74931H4.43478L3.75666 2.24197L4.01569 3.03912L3.33759 2.54647L2.6595 3.03912L2.88325 2.35047C2.28619 2.84781 1.76287 3.4305 1.33162 4.07975H1.56522L1.13356 4.39334C1.06631 4.50553 1.00181 4.6195 0.94 4.73516L1.14612 5.36956L0.761563 5.09016C0.665969 5.29269 0.578531 5.49978 0.499938 5.71119L0.727031 6.41019H1.56522L0.887094 6.90284L1.14612 7.7L0.468031 7.20734L0.0618437 7.50247C0.0211875 7.82928 0 8.16216 0 8.5H8C8 4.08175 8 3.56087 8 0.5C6.41963 0.5 4.94641 0.958438 3.70575 1.74931ZM4.01569 7.7L3.33759 7.20734L2.6595 7.7L2.91853 6.90284L2.24041 6.41019H3.07859L3.33759 5.61303L3.59659 6.41019H4.43478L3.75666 6.90284L4.01569 7.7ZM3.75666 4.57241L4.01569 5.36956L3.33759 4.87691L2.6595 5.36956L2.91853 4.57241L2.24041 4.07975H3.07859L3.33759 3.28259L3.59659 4.07975H4.43478L3.75666 4.57241ZM6.88525 7.7L6.20716 7.20734L5.52906 7.7L5.78809 6.90284L5.10997 6.41019H5.94816L6.20716 5.61303L6.46616 6.41019H7.30434L6.62622 6.90284L6.88525 7.7ZM6.62622 4.57241L6.88525 5.36956L6.20716 4.87691L5.52906 5.36956L5.78809 4.57241L5.10997 4.07975H5.94816L6.20716 3.28259L6.46616 4.07975H7.30434L6.62622 4.57241ZM6.62622 2.24197L6.88525 3.03912L6.20716 2.54647L5.52906 3.03912L5.78809 2.24197L5.10997 1.74931H5.94816L6.20716 0.952156L6.46616 1.74931H7.30434L6.62622 2.24197Z" fill="#0052B4"></path>
      </g>
      <defs>
        <clipPath id="clip0_6035_706">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function CanadaFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4">
      <g clipPath="url(#clip0_6035_715)">
        <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#F0F0F0"></path>
        <path d="M16.0006 8.5007C16.0006 5.32901 14.1548 2.58851 11.4788 1.29451V15.7069C14.1548 14.4129 16.0006 11.6724 16.0006 8.5007Z" fill="#D80027"></path>
        <path d="M0.000305176 8.50027C0.000305176 11.672 1.84609 14.4125 4.52205 15.7065V1.29408C1.84609 2.58808 0.000305176 5.32858 0.000305176 8.50027Z" fill="#D80027"></path>
        <path d="M9.39168 9.54414L10.783 8.84848L10.0873 8.50067V7.80501L8.69602 8.50067L9.39168 7.10936H8.69602L8.00037 6.06589L7.30471 7.10936H6.60905L7.30471 8.50067L5.9134 7.80501V8.50067L5.21777 8.84848L6.60905 9.54414L6.26124 10.2398H7.65255V11.2833H8.34818V10.2398H9.73949L9.39168 9.54414Z" fill="#D80027"></path>
      </g>
      <defs>
        <clipPath id="clip0_6035_715">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4">
      <g clipPath="url(#clip0_6035_712)">
        <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#F0F0F0"></path>
        <path d="M1.65379 3.62866C1.02538 4.44626 0.551541 5.3886 0.275635 6.41232H4.43745L1.65379 3.62866Z" fill="#0052B4"></path>
        <path d="M15.7247 6.41241C15.4488 5.38872 14.9749 4.44638 14.3465 3.62878L11.5629 6.41241H15.7247Z" fill="#0052B4"></path>
        <path d="M0.275635 10.5868C0.551572 11.6105 1.02542 12.5528 1.65379 13.3704L4.43736 10.5868H0.275635Z" fill="#0052B4"></path>
        <path d="M12.8704 2.15318C12.0528 1.52478 11.1105 1.05093 10.0867 0.774994V4.93678L12.8704 2.15318Z" fill="#0052B4"></path>
        <path d="M3.12927 14.8451C3.94687 15.4735 4.88921 15.9474 5.9129 16.2233V12.0616L3.12927 14.8451Z" fill="#0052B4"></path>
        <path d="M5.91287 0.774994C4.88918 1.05093 3.94684 1.52477 3.12927 2.15315L5.91287 4.93674V0.774994Z" fill="#0052B4"></path>
        <path d="M10.0867 16.2233C11.1104 15.9474 12.0528 15.4735 12.8703 14.8452L10.0867 12.0616V16.2233Z" fill="#0052B4"></path>
        <path d="M11.5629 10.5868L14.3465 13.3704C14.9749 12.5529 15.4488 11.6105 15.7247 10.5868H11.5629Z" fill="#0052B4"></path>
        <path d="M15.9323 7.45653H9.04353H9.0435V0.567719C8.70191 0.52325 8.35366 0.5 8 0.5C7.64628 0.5 7.29809 0.52325 6.95653 0.567719V7.45647V7.4565H0.0677188C0.02325 7.79809 0 8.14634 0 8.5C0 8.85372 0.02325 9.20191 0.0677188 9.54347H6.95647H6.9565V16.4323C7.29809 16.4768 7.64628 16.5 8 16.5C8.35366 16.5 8.70191 16.4768 9.04347 16.4323V9.54353V9.5435H15.9323C15.9768 9.20191 16 8.85372 16 8.5C16 8.14634 15.9768 7.79809 15.9323 7.45653Z" fill="#D80027"></path>
        <path d="M10.087 10.5875L13.6569 14.1574C13.821 13.9933 13.9777 13.8217 14.1271 13.6438L11.0708 10.5875H10.087V10.5875Z" fill="#D80027"></path>
        <path d="M5.91305 10.5875H5.91298L2.34314 14.1573C2.50726 14.3215 2.67886 14.4781 2.85673 14.6276L5.91305 11.5712V10.5875Z" fill="#D80027"></path>
        <path d="M5.91293 6.41274V6.41268L2.34305 2.84277C2.17887 3.0069 2.02224 3.17849 1.8728 3.35637L4.92915 6.41271H5.91293V6.41274Z" fill="#D80027"></path>
        <path d="M10.087 6.41346L13.6569 2.84353C13.4928 2.67934 13.3212 2.52271 13.1433 2.37331L10.087 5.42965V6.41346Z" fill="#D80027"></path>
      </g>
      <defs>
        <clipPath id="clip0_6035_712">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function AustraliaFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4">
      <g clipPath="url(#clip0_6035_709)">
        <path d="M16 8.5C16 12.9183 12.4183 16.5 8 16.5C3.58175 16.5 0 12.9183 0 8.5C0 8.50187 8 0.500906 8 0.5C12.4183 0.5 16 4.08175 16 8.5Z" fill="#0052B4"></path>
        <path d="M7.97852 8.50026H7.99996C7.99996 8.493 7.99996 8.48605 7.99996 8.47882C7.99283 8.48599 7.98569 8.49313 7.97852 8.50026Z" fill="#F0F0F0"></path>
        <path d="M7.99981 4.67444C7.99981 3.26678 7.99981 2.34438 7.99981 0.500534H7.99847C3.58081 0.501253 -0.000183105 4.08266 -0.000183105 8.5005H4.17372V6.15013L6.52409 8.5005H7.97844C7.98559 8.49338 7.99272 8.48625 7.99984 8.4791C7.99984 7.94013 7.99984 7.45922 7.99984 7.02485L5.64944 4.67444H7.99981Z" fill="#F0F0F0"></path>
        <path d="M4.04739 1.54381C2.79617 2.25628 1.75599 3.29646 1.04352 4.54768V8.50034H3.13049V3.63081V3.63078H8.00005C8.00005 2.97256 8.00005 2.3455 8.00005 1.54381H4.04739Z" fill="#D80027"></path>
        <path d="M8.00025 7.5166L5.15797 4.67435H4.17419C4.17419 4.67431 4.17419 4.67435 4.17419 4.67435L8.00022 8.50038H8.00025C8.00025 8.50038 8.00025 7.8221 8.00025 7.5166Z" fill="#D80027"></path>
        <path d="M4.82504 9.89096L5.26411 10.809L6.25557 10.5799L5.81157 11.4956L6.60889 12.1278L5.61617 12.3516L5.61895 13.3692L4.82504 12.7326L4.03117 13.3692L4.03395 12.3516L3.0412 12.1278L3.83854 11.4956L3.39448 10.5799L4.38601 10.809L4.82504 9.89096Z" fill="#F0F0F0"></path>
        <path d="M11.9781 11.6302L12.1976 12.0893L12.6934 11.9747L12.4713 12.4325L12.87 12.7487L12.3736 12.8606L12.375 13.3694L11.9781 13.051L11.5811 13.3694L11.5825 12.8606L11.0862 12.7487L11.4848 12.4325L11.2628 11.9747L11.7586 12.0893L11.9781 11.6302Z" fill="#F0F0F0"></path>
        <path d="M9.93564 6.76094L10.1551 7.22L10.6509 7.10538L10.4289 7.56322L10.8275 7.87938L10.3312 7.99125L10.3325 8.50007L9.93564 8.18172L9.5387 8.50007L9.54004 7.99125L9.0437 7.87938L9.44236 7.56322L9.22036 7.10538L9.71611 7.22L9.93564 6.76094Z" fill="#F0F0F0"></path>
        <path d="M11.9781 3.97841L12.1976 4.43747L12.6934 4.32288L12.4714 4.78072L12.87 5.09685L12.3736 5.20875L12.375 5.71757L11.9781 5.39922L11.5811 5.71757L11.5825 5.20875L11.0862 5.09685L11.4848 4.78072L11.2628 4.32288L11.7586 4.43747L11.9781 3.97841Z" fill="#F0F0F0"></path>
        <path d="M13.7614 6.06517L13.9809 6.52423L14.4767 6.40961L14.2547 6.86745L14.6533 7.18361L14.157 7.29551L14.1583 7.80429L13.7614 7.48598L13.3645 7.80429L13.3659 7.29551L12.8695 7.18361L13.2682 6.86745L13.0462 6.40961L13.5419 6.52423L13.7614 6.06517Z" fill="#F0F0F0"></path>
        <path d="M12.4862 8.50023L12.6588 9.03167H13.2176L12.7655 9.36014L12.9383 9.89154L12.4862 9.5631L12.0341 9.89154L12.2068 9.36014L11.7547 9.03167H12.3135L12.4862 8.50023Z" fill="#F0F0F0"></path>
      </g>
      <defs>
        <clipPath id="clip0_6035_709">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function FranceFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="shrink-0 w-4 h-4">
      <rect y="0.5" width="16" height="16" rx="8" fill="#F0F0F0" />
      <path d="M0 0.5H5.33V16.5H0V0.5Z" fill="#0052B4" />
      <path d="M10.67 0.5H16V16.5H10.67V0.5Z" fill="#D80027" />
    </svg>
  );
}

function ItalyFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="shrink-0 w-4 h-4">
      <rect y="0.5" width="16" height="16" rx="8" fill="#F0F0F0" />
      <path d="M0 0.5H5.33V16.5H0V0.5Z" fill="#009246" />
      <path d="M10.67 0.5H16V16.5H10.67V0.5Z" fill="#F12B2C" />
    </svg>
  );
}

function SpainFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="shrink-0 w-4 h-4">
      <rect y="0.5" width="16" height="16" rx="8" fill="#F0F0F0" />
      <path d="M0 0.5H16V4.5H0V0.5Z" fill="#C60B1E" />
      <path d="M0 12.5H16V16.5H0V12.5Z" fill="#C60B1E" />
      <path d="M0 4.5H16V12.5H0V4.5Z" fill="#FFC400" />
    </svg>
  );
}

function GermanyFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="shrink-0 w-4 h-4">
      <rect y="0.5" width="16" height="16" rx="8" fill="#F0F0F0" />
      <path d="M0 0.5H16V5.83H0V0.5Z" fill="#000000" />
      <path d="M0 5.83H16V11.17H0V5.83Z" fill="#D80027" />
      <path d="M0 11.17H16V16.5H0V11.17Z" fill="#FFC400" />
    </svg>
  );
}

function JapanFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="shrink-0 w-4 h-4">
      <rect y="0.5" width="16" height="16" rx="8" fill="#F0F0F0" />
      <circle cx="8" cy="8.5" r="3.5" fill="#D80027" />
    </svg>
  );
}

function BrazilFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="shrink-0 w-4 h-4">
      <rect y="0.5" width="16" height="16" rx="8" fill="#009C3B" />
      <path d="M8 3.5L13.5 8.5L8 13.5L2.5 8.5L8 3.5Z" fill="#FFDF00" />
      <circle cx="8" cy="8.5" r="2.2" fill="#0021AD" />
    </svg>
  );
}

function NetherlandsFlag() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="shrink-0 w-4 h-4">
      <rect y="0.5" width="16" height="16" rx="8" fill="#F0F0F0" />
      <path d="M0 0.5H16V5.83H0V0.5Z" fill="#D80027" />
      <path d="M0 5.83H16V11.17H0V5.83Z" fill="#FFFFFF" />
      <path d="M0 11.17H16V16.5H0V11.17Z" fill="#0021AD" />
    </svg>
  );
}

const getFlagComponent = (countryName: string) => {
  switch (countryName) {
    case "United States":
      return USFlag;
    case "Canada":
      return CanadaFlag;
    case "United Kingdom":
      return UKFlag;
    case "Australia":
      return AustraliaFlag;
    case "France":
      return FranceFlag;
    case "Italy":
      return ItalyFlag;
    case "Spain":
      return SpainFlag;
    case "Germany":
      return GermanyFlag;
    case "Japan":
      return JapanFlag;
    case "Brazil":
      return BrazilFlag;
    case "Netherlands":
      return NetherlandsFlag;
    default:
      return USFlag;
  }
};

const getBrandInfo = (index: number) => {
  const brands = [
    { name: "Pandasocks", color: "bg-slate-400" },
    { name: "Eterika", color: "bg-pink-400" },
    { name: "Mini Melts", color: "bg-purple-400" },
    { name: "Shape Republic", color: "bg-orange-400" },
    { name: "GLAS", color: "bg-cyan-400" },
    { name: "WOW TEA", color: "bg-amber-400" },
    { name: "Gizzmo", color: "bg-blue-400" },
    { name: "Top Shop", color: "bg-rose-400" },
  ];
  return brands[index % brands.length];
};

// Real creator headshots to rotate through (avoids reusing dashboard screenshots as fake avatars)
const AVATAR_POOL = [
  "/josh.webp",
  "/Chelsea.webp",
  "/Brie_Tennessee.webp",
  "/Jonah_Nebraska.webp",
  "/Alexis_California.webp",
];
const getAvatar = (index: number) => AVATAR_POOL[index % AVATAR_POOL.length];

const getVideoType = (index: number) => {
  const types = ["Testimonial", "Meta Ad", "B-roll", "Unboxing"];
  return types[index % types.length];
};

const getLocInfo = (countryName: string, index: number) => {
  const cities: Record<string, string[]> = {
    "United States": ["Orlando", "Austin", "Miami", "Boston", "Chicago"],
    "United Kingdom": ["Carisbrook", "London", "Bristol", "Leeds", "Glasgow"],
    "Canada": ["Alphen", "Toronto", "Vancouver", "Montreal", "Ottawa"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    "France": ["Paris", "Lyon", "Marseille", "Nice", "Bordeaux"],
    "Italy": ["Bologna", "Rome", "Milan", "Naples", "Florence"],
    "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
    "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao"],
  };
  const list = cities[countryName] || ["Carisbrook", "Orlando", "London", "Sydney"];
  return list[index % list.length];
};

/**
 * One marquee tile. Each tile owns an IntersectionObserver (viewport root) and
 * only plays its HLS video WHILE it is actually crossing the screen — so at any
 * moment just the handful of visible tiles decode video (~6-7), and scrolling
 * the section away detaches them all. This is what keeps the continuous marquee
 * smooth instead of trying to run 20+ players at once.
 */
function ReviewTile({ review, idx }: { review: Review; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { root: null, rootMargin: "400px", threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const brandInfo = getBrandInfo(idx);
  const videoType = getVideoType(idx);
  const locationCity = getLocInfo(review.reviewer.countryName, idx);
  const FlagIcon = getFlagComponent(review.reviewer.countryName);

  return (
    <div
      ref={ref}
      className="relative bg-white border border-gray-100 flex flex-col shrink-0 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.02)] w-[190px] sm:w-[210px] md:w-[220px] lg:w-[240px]"
    >
      {/* Video Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
        {review.videoId && (
          <HlsVideo videoId={review.videoId} active={active} />
        )}

        {/* Top scrim for text contrast */}
        <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black/55 to-transparent pointer-events-none z-10" />

        {/* Brand badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
          <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0", brandInfo.color)}>
            {brandInfo.name.charAt(0)}
          </div>
          <span className="text-white text-[13px] font-semibold tracking-tight drop-shadow-sm whitespace-nowrap">
            {brandInfo.name}
          </span>
        </div>

        {/* Bottom tag */}
        <div className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-md z-20">
          <span className="text-[10px] font-extrabold text-black uppercase tracking-tight">
            {videoType}
          </span>
        </div>
      </div>

      {/* Profile strip below */}
      <div className="flex items-center gap-2 px-3 py-3 bg-white">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 relative bg-slate-50 shrink-0">
          <Image
            src={getAvatar(idx)}
            alt={review.reviewer.name}
            width={32}
            height={32}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[13px] font-bold text-black leading-none truncate">
            {review.reviewer.name}
          </span>
          <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-400 font-semibold leading-none">
            <MapPin className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate max-w-[80px]">{locationCity}</span>
            <span className="shrink-0"><FlagIcon /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Reviews = () => {
  // Two identical halves = seamless -50% loop.
  const marqueeItems = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section className="bg-[#E6F1FF] pt-14 md:pt-20 mt-5 md:mt-10 overflow-hidden w-full relative pb-16">
      {/* Continuous marquee animation. GPU transform only → smooth. Pauses on hover. */}
      <style>{`
        @keyframes reviewsMarquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .reviews-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: reviewsMarquee 60s linear infinite;
        }
        .reviews-marquee-container:hover .reviews-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .reviews-marquee-track { animation: none; }
        }
      `}</style>

      {/* Title */}
      <div className="container mx-auto mb-6 text-center">
        <span className="text-[#212120]/80 text-[15px] font-semibold tracking-tight">
          This is what selling on TikTok actually looks like.
        </span>
      </div>

      {/* Marquee viewport */}
      <div className="relative w-full overflow-hidden reviews-marquee-container select-none">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#E6F1FF] to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#E6F1FF] to-transparent z-30 pointer-events-none" />

        <div className="reviews-marquee-track gap-4 md:gap-5 py-4">
          {marqueeItems.map((review, i) => (
            <ReviewTile
              key={`${review.id}-${i}`}
              review={review}
              idx={i % REVIEWS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
