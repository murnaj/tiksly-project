import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const beliefs = [
  {
    title: "Relentless Growth",
    description:
      "We never settle. The eCommerce world moves fast, and we move faster. Our team constantly tests, learns, and adapts to keep brands ahead of the curve on TikTok Shop.",
  },
  {
    title: "Results First",
    description:
      "Engagement is great, but sales are better. Everything we do is focused on performance—turning views into conversions and scaling brands to their highest potential.",
  },
  {
    title: "Teamwork Wins",
    description:
      "Success isn't a solo journey. Our experts collaborate, innovate, and support each other to bring out the best in every campaign and every brand we work with.",
  },
  {
    title: "Always Learning",
    description:
      "TikTok's algorithm changes? New ad formats? We're on it. Staying ahead of trends and constantly refining our strategies keeps our clients winning.",
  },
  {
    title: "Transparency & Trust",
    description:
      "No gimmicks, no false promises—just clear strategies and real results. We keep our clients informed every step of the way because trust is at the heart of everything we do.",
  },
  {
    title: "Excellence, Every Time",
    description:
      "Good enough is never good enough. From high-impact creatives to data-driven optimizations, we hold ourselves to the highest standards in everything we deliver.",
  },
];

export default function OurBeliefs() {
  return (
    <section className="bg-zinc-950 py-20 md:py-28 text-white">
      <div className="container mx-auto px-3 lg:px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
            Our Beliefs & Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief, index) => (
            <Card 
              key={index} 
              className="bg-zinc-950 border-zinc-800/80 hover:border-zinc-700 transition-colors duration-300 rounded-2xl"
            >
              <CardHeader className="pt-8 px-8 pb-4">
                <CardTitle className="text-xl font-bold tracking-tight text-white">
                  {belief.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-zinc-400 leading-relaxed text-sm">
                {belief.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
