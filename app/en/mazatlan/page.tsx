import type { Metadata } from "next";
import { AlternatingFeature } from "@/components/alternating-feature";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Mazatlán | Hotel Costa de Oro",
  description: "Discover Mazatlán: tours, the Gran Acuario, The Cliff Diver, Historical Center, The Lighthouse and more, near Hotel Costa de Oro.",
};

const DARK_BAND = "bg-[#c2bfb5]";

const ATTRACTIONS = [
  {
    band: DARK_BAND,
    textTone: "light" as const,
    reverse: false,
    image: "/images/mazatlan/Servicio al Cliente CO.webp",
    title: "Tours and Activities",
    paragraphs: [
      "Discover our city through our exclusive special tours. Explore our history, culture and architectural beauty with our expert guides. Personal tours are also available. Book now and live an authentic experience in our fascinating city!",
      "If you would like a quote for any tour or activity during your stay in Mazatlán, we will gladly send you a quote to service your needs from the comfort of our hotel.",
    ],
    cta: { label: "See more", href: "mailto:concierge@hotelcostadeoro.mx" },
  },
  {
    band: "bg-white",
    textTone: "gold" as const,
    reverse: true,
    image: "/images/mazatlan/ACUARIO.webp",
    title: "Gran Acuario Mazatlán",
    paragraphs: [
      "The largest aquarium of Latin America is right here in Mazatlán! During your visit, marvel at the 46-foot Ocean water tank, where you can get a close look at sharks and walk under the glass bridge, while immersing yourself in the unique experience of the Sea of Cortez.",
    ],
  },
  {
    band: DARK_BAND,
    textTone: "light" as const,
    reverse: false,
    image: "/images/mazatlan/elclavadistawebp.webp",
    title: "The Cliff Diver",
    paragraphs: [
      "An exciting tradition in Mazatlán.",
      "Locals and tourists alike gather around the ocean-facing public esplanade called Glorieta Sánchez Taboada, better-known as the “Cliff Diver’s” esplanade. It is set on an over 46-foot-high cliff, overlooking the Pacific Ocean. Brave men break the crashing ocean waves as they take a dive from this cliff top.",
    ],
  },
  {
    band: "bg-white",
    textTone: "gold" as const,
    reverse: true,
    image: "/images/mazatlan/historico.webp",
    title: "Historical Center",
    paragraphs: [
      "It's the heart of Mazatlán.",
      "Of all the tourist resort destinations on Mexico's Pacific Coast, Mazatlán is the only one where its visitors have the opportunity to stroll among vibrant, narrow streets and alleys that are reminiscent of its grand, historic past, as manifested in its intriguing, majestic architecture, a true living testimony of Mazatlán's history, lifestyle, and marvelous people.",
    ],
  },
  {
    band: DARK_BAND,
    textTone: "light" as const,
    reverse: false,
    image: "/images/mazatlan/elfaro.webp",
    title: "The Lighthouse",
    paragraphs: [
      "The Glass Lookout Platform.",
      "A new attraction that you shouldn't miss during your visit in Mazatlán is the new Glass Lookout Platform at the top of the highest lighthouse set on a natural site in the world, located at the far southern end of Mazatlán's beautiful bay, towering at over 515 feet above sea level on the hilltop of Cerro del Crestón. The ideal place to behold the most breathtaking sunrises and sunsets in Mexico.",
    ],
  },
  {
    band: "bg-white",
    textTone: "gold" as const,
    reverse: true,
    image: "/images/mazatlan/QUELITE.webp",
    title: "Pueblos Señoriales",
    paragraphs: [
      "The most beautiful Magic Towns.",
      "Mazatlán's surrounding villages that have been awarded the stature of Pueblos Mágicos or Señoriales are fascinating and unique cultural attractions for all visitors. Currently, the state of Sinaloa has 4 Pueblos Mágicos that include: El Rosario, Cosalá, El Fuerte, and, most recently, Mocorito. Come and see them!",
    ],
  },
  {
    band: DARK_BAND,
    textTone: "light" as const,
    reverse: false,
    image: "/images/mazatlan/observatorio.webp",
    title: "Observatorio 1873",
    paragraphs: [
      "A place that preserves our local history.",
      "Perched atop the oceanfront hill called Cerro del Vigía, at over 246 feet above sea level, you'll be able to delight in the best sunset and panoramic ocean view of Mazatlán. End your stay on a high note by trying our craft beer and the best cocktails around. Undoubtedly, a place you won't want to miss during your visit to Mazatlán!",
    ],
  },
  {
    band: "bg-white",
    textTone: "gold" as const,
    reverse: true,
    image: "/images/mazatlan/parquecentral.webp",
    title: "Parque Central Mazatlán",
    paragraphs: [
      "Mazatlán's Central Park is a place where people gather for relaxation and fresh air.",
      "It is an open, interactive and dynamic urban setting, destined for connecting local educational, sports, recreational, cultural, tourist, and entertainment infrastructures. Its unique offering to locals and visitors alike includes a great lagoon, surrounded by walking and bicycle trails, all set in a wide variety of green areas.",
    ],
  },
];

export default function MazatlanPageEn() {
  return (
    <>
      <PageHero image="/images/mazatlan/background1900px.png" eyebrow="Discover" title="Mazatlán" priority />

      {ATTRACTIONS.map((item) => (
        <section key={item.title} className={item.band}>
          <AlternatingFeature image={item.image} imageAlt={item.title} reverse={item.reverse}>
            <h2 className={`font-serif text-3xl italic sm:text-4xl ${item.textTone === "light" ? "text-white" : "text-brand-gold-dark"}`}>
              {item.title}
            </h2>
            {item.paragraphs.map((p) => (
              <p key={p} className={`text-justify text-lg ${item.textTone === "light" ? "text-white/90" : "text-brand-gold-dark/90"}`}>
                {p}
              </p>
            ))}
            {item.cta && (
              <a
                href={item.cta.href}
                className="mt-2 rounded-md bg-brand-gold-dark px-9 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent"
              >
                {item.cta.label}
              </a>
            )}
          </AlternatingFeature>
        </section>
      ))}
    </>
  );
}
