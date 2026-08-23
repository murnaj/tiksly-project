export interface Reviewer {
  name: string;
  rating: number;
  countryName: string;
  countryFlag: string;
}

export interface Review {
  id: string;
  videoId?: string;
  caption: string;
  reviewer: Reviewer;
}

const ReviewsData = (): Review[] => {
  return [
    {
      id: "review-1",
      videoId: "ce3082f8b2b1151137c5b9a82aa9b342",
      caption: "I always had pain in my feet ⚡",
      reviewer: {
        name: "Emma",
        rating: 4.8,
        countryName: "United States",
        countryFlag: "🇺🇸",
      },
    },
    {
      id: "review-2",
      videoId: "ab807060990361a8baeca01ee02fca85",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Elijah",
        rating: 4.7,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
      },
    },
    {
      id: "review-3",
      videoId: "ced34f0b20b4edf473a0055a73b9d71b",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Evelyn",
        rating: 4.7,
        countryName: "Canada",
        countryFlag: "🇨🇦",
      },
    },
    {
      id: "review-4",
      videoId: "11d8f8e7bae109fa8d663716d9796058",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Noah",
        rating: 4.7,
        countryName: "Australia",
        countryFlag: "🇦🇺",
      },
    },
    {
      id: "review-5",
      videoId: "472c8a404f7d396a08417a00d5507f1c",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Lucas",
        rating: 4.7,
        countryName: "Germany",
        countryFlag: "🇩🇪",
      },
    },
    {
      id: "review-6",
      videoId: "0aaea0305aa72881f52d75978391efb9",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "James",
        rating: 4.7,
        countryName: "United States",
        countryFlag: "🇺🇸",
      },
    },
    {
      id: "review-7",
      videoId: "a4e66c51a879a405eba452d44017299b",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Mia",
        rating: 4.7,
        countryName: "Italy",
        countryFlag: "🇮🇹",
      },
    },
    {
      id: "review-8",
      videoId: "8880a052180933af96cb96020e560c85",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Olivia",
        rating: 4.7,
        countryName: "Spain",
        countryFlag: "🇪🇸",
      },
    },
    {
      id: "review-9",
      videoId: "79e7cf49cdb4ab1729369b36e5afd8cc",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Sophia",
        rating: 4.7,
        countryName: "France",
        countryFlag: "🇫🇷",
      },
    },
    {
      id: "review-10",
      videoId: "77ee39539df24d8b2221621ad13893b2",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Isabella",
        rating: 4.7,
        countryName: "Brazil",
        countryFlag: "🇧🇷",
      },
    },
    {
      id: "review-11",
      videoId: "9eeb72536d1b478e604752b4ef089d96",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "William",
        rating: 4.7,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
      },
    },
    {
      id: "review-12",
      videoId: "894c688f6c8c83c71eef8a2e6dc18278",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Mason",
        rating: 4.7,
        countryName: "Canada",
        countryFlag: "🇨🇦",
      },
    },
    {
      id: "review-13",
      videoId: "9e7ad391188bbfeb730c75755e662845",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Benjamin",
        rating: 4.7,
        countryName: "Netherlands",
        countryFlag: "🇳🇱",
      },
    },
    {
      id: "review-14",
      videoId: "b1c7031bfed77c225dd2a2e657d3f4f6",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Jacob",
        rating: 4.7,
        countryName: "United States",
        countryFlag: "🇺🇸",
      },
    },
    {
      id: "review-15",
      videoId: "2384c4da51b3d5466e704f49b59f9137",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Amelia",
        rating: 4.7,
        countryName: "Australia",
        countryFlag: "🇦🇺",
      },
    },
    {
      id: "review-16",
      videoId: "1851b7f14202fa484c2b024aa54d9c38",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Harper",
        rating: 4.7,
        countryName: "United Kingdom",
        countryFlag: "🇬🇧",
      },
    },
    {
      id: "review-17",
      videoId: "2b7716ff7e2eb183741ff99fbf990be6",
      caption: "Creatine Gummies are a SCAM! 😡",
      reviewer: {
        name: "Yuki",
        rating: 4.7,
        countryName: "Japan",
        countryFlag: "🇯🇵",
      },
    },
  ];
};

export default ReviewsData;
