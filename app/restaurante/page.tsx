import type { Metadata } from "next";
import Image from "next/image";
import { AlternatingFeature } from "@/components/alternating-feature";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Restaurantes | Hotel Costa de Oro",
  description: "Descubre la oferta gastronómica del Hotel Costa de Oro: Los Adobes, Trattoria, Yuuyake y Bar Lago Azul.",
};

const RESTAURANTS = [
  {
    name: "Los Adobes",
    image: "/images/gastronomia/res__back.webp",
    logo: "/images/gastronomia/iconos-g/logos-03.svg",
    logoWidth: 140,
    social: "https://www.facebook.com/Restaurante-Los-Adobes-2226789187389495",
    description:
      "Disfruta de las mejores vistas y nuestros desayunos estrella a pie de playa en nuestro acogedor restaurante Los Adobes. Nuestro pan recién horneado con un cafecito y vistas impresionantes al Pacifico te esperan. Ven y vive una experiencia gastronómica única en Los Adobes, Costa de Oro.",
  },
  {
    name: "Trattoria",
    image: "/images/gastronomia/res__back5.webp",
    logo: "/images/gastronomia/iconos-g/trattoria.webp",
    logoWidth: 190,
    description:
      "Deléitate con nuestra especialidad italiana en la Trattoria, donde los sabores irresistibles te trasportarán directamente a Italia, ¡nuestras clásicas pastas artesanales y nuestras pizzas al forno de leña te encantarán! Ya sea que estés buscando una cena romántica, una reunión familiar o simplemente disfrutar de la auténtica comida italiana, la Trattoria es el lugar ideal.",
  },
  {
    name: "Yuuyake",
    image: "/images/gastronomia/res__back4.webp",
    logo: "/images/gastronomia/iconos-g/yuuyake.webp",
    logoWidth: 190,
    description:
      "Nuestro fascinante restaurante oriental, donde te sumergirás en un viaje culinario por los sabores exóticos del este de Asia, te sorprenderá con platos tradicionales y contemporáneos, cuidadosamente elaborados con ingredientes frescos y especias aromáticas. Desde sushi y sashimi hasta deliciosos platos de wok y dim sum.",
  },
  {
    name: "Bar Lago Azul",
    image: "/images/gastronomia/res__back2.webp",
    logo: "/images/gastronomia/iconos-g/LAGO AZUL FINAL-02.webp",
    logoWidth: 140,
    description:
      "Disfruta de un ambiente animado junto a la piscina Bar Lago Azul. Refréscate con cócteles y bebidas mientras te relajas al sol. Nuestro personal te atenderá con deliciosos y refrescantes visitas durante tu estadía en Costa de Oro.",
  },
  {
    name: "Snacks Lago Azul",
    image: "/images/gastronomia/res__back3.webp",
    logo: "/images/gastronomia/iconos-g/LAGO AZUL FINAL-01.webp",
    logoWidth: 190,
    description:
      "Disfruta de una selección de deliciosos snacks en Snacks Lago Azul junto a la piscina. Desde bocadillos y tapas hasta opciones saludables y tentadoras, tenemos algo para todos los gustos.",
  },
];

export default function RestaurantePage() {
  return (
    <>
      <PageHero image="/images/gastronomia/res-back.webp" eyebrow="Hotel Costa de Oro" title="Restaurantes" priority />

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
                <a href={r.social} target="_blank" rel="noopener noreferrer" aria-label={`${r.name} en Facebook`}>
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
