import Image from "next/image";

const charities = [
  { name: "Edhi Foundation", src: "/charity/edhi-foundation.svg" },
  { name: "Government Emblem", src: "/charity/pakistan.svg" },
  { name: "Shaukat Khanum", src: "/charity/shaukat-khanum.svg" },
  { name: "Saylani", src: "/charity/saylani.svg" },
];

const OurCharity = () => {
  return (
    <section className=" pb-14 md:pb-18 text-center text-black">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
          Every month we donate a percentage of company profits to a charity
          chosen by one of our team.
        </h2>
        <p className="text-[#6B7280] max-w-3xl mx-auto text-xs md:text-sm mb-16">
          As well as monthly donations, we donate profits of our Swag to Cancer
          Research and our team regularly takes part in various charitable
          events.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {charities.map((charity, index) => (
            <div className="flex justify-center items-center shadow-lg rounded-2xl" key={index}>
              <Image
                src={charity.src}
                alt={`${charity.name} Logo`}
                width={180}
                height={100}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCharity;
