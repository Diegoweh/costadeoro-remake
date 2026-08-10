import type { Metadata } from "next";
import Image from "next/image";
import { AlternatingFeature } from "@/components/alternating-feature";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Restaurants | Hotel Costa de Oro",
  description: "Discover the dining options at Hotel Costa de Oro: Los Adobes, La Trattoria, Yuuyake and Lago Azul Bar.",
};

const RESTAURANTS = [
  {
    name: "Los Adobes",
    image: "/images/gastronomia/res__back.webp",
    logo: "/images/gastronomia/iconos-g/logos-03.svg",
    logoWidth: 140,
    social: "https://www.facebook.com/Restaurante-Los-Adobes-2226789187389495",
    description:
      "Take-in the full effect of the best ocean views and stellar breakfast menu, at our beachfront restaurant Los Adobes. Our freshly-baked bread, premium coffee and impressive ocean views await you! Come and live a unique and extraordinary culinary experience in Los Adobes, at the Costa de Oro hotel.",
  },
  {
    name: "La Trattoria",
    image: "/images/gastronomia/res__back5.webp",
    logo: "/images/gastronomia/iconos-g/trattoria.webp",
    logoWidth: 190,
    description:
      "Delight yourself with authentic Italian fare at our La Trattoria specialty restaurant, where irresistible flavors will take your senses to Italy, and you'll absolutely love our homemade pastas and freshly-made pizzas from our wood-burning oven! Looking for that romantic dinner or family gathering? Look no further. La Trattoria is ideal for enjoying authentic Italian cuisine for any occasion.",
  },
  {
    name: "Yuuyake",
    image: "/images/gastronomia/res__back4.webp",
    logo: "/images/gastronomia/iconos-g/yuuyake.webp",
    logoWidth: 190,
    description:
      "Our fascinating Asian specialty restaurant will take you on an exotic culinary trip through the flavors of East Asia. You'll be amazed by both traditional and modern Asian dishes, carefully made with the freshest ingredients and aromatic spices. From Sushi and Sashimi, to delicious Wok and Dim Sum dishes.",
  },
  {
    name: "Lago Azul Bar",
    image: "/images/gastronomia/res__back2.webp",
    logo: "/images/gastronomia/iconos-g/LAGO AZUL FINAL-02.webp",
    logoWidth: 140,
    description:
      "Don't miss the party atmosphere of the Lago Azul Bar by the pool area. Take a refreshment break with cocktails and your favorite beverages while you sunbathe. Our staff will serve your every delicious and refreshing whim during your stay at Costa de Oro.",
  },
  {
    name: "Lago Azul Snack Bar",
    image: "/images/gastronomia/res__back3.webp",
    logo: "/images/gastronomia/iconos-g/LAGO AZUL FINAL-01.webp",
    logoWidth: 190,
    description:
      "Choose from our delectable snack selection at Lago Azul Snack Bar by the pool. From hors d'oeuvres and Spanish tapas to tempting, healthier options. We have something for everyone!",
  },
];

export default function RestaurantePageEn() {
  return (
    <>
      <PageHero image="/images/gastronomia/res-back.webp" eyebrow="Hotel Costa de Oro" title="Restaurants" priority />

      <section className="bg-white">
        {RESTAURANTS.map((r, i) => (
          <AlternatingFeature
            key={r.name}
            image={r.image}
            imageAlt={r.name}
            reverse={i % 2 === 1}
            className={i < RESTAURANTS.length - 1 ? "border-b border-brand-gold/30" : ""}
          >
            <div className="flex w-full items-center justify-between gap-4 md:justify-start">
              <Image src={r.logo} alt={r.name} width={r.logoWidth} height={80} className="h-auto max-h-20 w-auto" />
              {r.social && (
                <a href={r.social} target="_blank" rel="noopener noreferrer" aria-label={`${r.name} on Facebook`}>
                  <Image src="/images/gastronomia/social.png" alt="" width={32} height={32} className="h-8 w-8" />
                </a>
              )}
            </div>
            <p className="text-justify text-base leading-relaxed text-brand-gold">{r.description}</p>
          </AlternatingFeature>
        ))}
      </section>
    </>
  );
}
