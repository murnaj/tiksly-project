import Image from 'next/image';
import React from 'react'

const charities = [
  { name: "Edhi Foundation", src: "/about-us/our-partners/edhi-1.webp" },
  { name: "Government Emblem", src: "/about-us/our-partners/govt-2.webp" },
  { name: "Shaukat Khanum", src: "/about-us/our-partners/Shaukat-Khanum-3.webp" },
  { name: "Saylani", src: "/about-us/our-partners/Saylani-4.webp" },
];

const OurCharity = () => {
    return (
        <section className="w-full bg-gradient-to-b from-white via-[#F6FED9] to-white py-20 md:py-28 text-center text-black">
        <div className="container mx-auto px-3 lg:px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
            Every month we donate a percentage of company profits to a charity chosen by one of our team.
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto text-xs md:text-sm mb-16">
            As well as monthly donations, we donate profits of our Swag to Cancer Research and our team regularly takes part in various charitable events.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {charities.map((charity, index) => (
              <div 
                key={index}
                className="bg-zinc-950 rounded-xl md:rounded-2xl flex items-center justify-center p-6 md:p-8 aspect-4/3 w-full shadow-xs border border-zinc-100/80"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={charity.src}
                    alt={`${charity.name} Logo`}
                    width={180}
                    height={100}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default OurCharity;