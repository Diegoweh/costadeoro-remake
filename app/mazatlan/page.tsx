import type { Metadata } from "next";
import { AlternatingFeature } from "@/components/alternating-feature";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Mazatlán | Hotel Costa de Oro",
  description: "Descubre Mazatlán: paseos, el Gran Acuario, El Clavadista, Centro Histórico, El Faro y más, cerca del Hotel Costa de Oro.",
};

const DARK_BAND = "bg-[#c2bfb5]";

const ATTRACTIONS = [
  {
    band: DARK_BAND,
    textTone: "light" as const,
    reverse: false,
    image: "/images/mazatlan/Servicio al Cliente CO.webp",
    title: "Paseos & Actividades",
    paragraphs: [
      "Descubre nuestra ciudad con nuestros exclusivos tours especiales. Explora la historia, cultura y belleza arquitectónica con nuestros expertos guías. Tours personalizados disponibles. ¡Reserva ahora y vive una experiencia auténtica en nuestra fascinante ciudad!",
      "Si desea cotizar algún paseo o acividad para llevar a cabo durante su estancia en Mazatlán, con mucho gusto podemos cotizarle para brindarle el servicio desde la comodidad de nuestro hotel.",
    ],
    cta: { label: "Cotizar", href: "mailto:concierge@hotelcostadeoro.mx" },
  },
  {
    band: "bg-white",
    textTone: "gold" as const,
    reverse: true,
    image: "/images/mazatlan/ACUARIO.webp",
    title: "Gran Acuario Mazatlán",
    paragraphs: [
      "El Acuario más grande de Latinoamérica está en Mazatlán, en tu visita no puedes perderte conocer la gran pecera oceánica de 14 metros donde podrás ver de cerca tiburones, caminar por debajo del puente de cristal y sumergirte en una experiencia única en el Mar de Cortés.",
    ],
  },
  {
    band: DARK_BAND,
    textTone: "light" as const,
    reverse: false,
    image: "/images/mazatlan/elclavadistawebp.webp",
    title: "El Clavadista",
    paragraphs: [
      "Una emocionante tradición de Mazatlán.",
      "Locales y turistas se reúnen por las tardes en la Glorieta Rodolfo Sánchez Taboada, mejor conocida como El Clavadista. Este, es un mirador al pie de un acantilado de poco más de 14 metros de altura que recibe a valientes hombres que quieran romper las olas del Océano Pacífico haciendo gala de sus mejores saltos.",
    ],
  },
  {
    band: "bg-white",
    textTone: "gold" as const,
    reverse: true,
    image: "/images/mazatlan/historico.webp",
    title: "Centro Histórico",
    paragraphs: [
      "El corazón de Mazatlán.",
      "De todos los destinos turísticos de playa en la costa del Pacífico mexicano, Mazatlán es el único en el que sus visitantes tienen la oportunidad de caminar entre calles y callejones que son vibrantes vías hacia un recorrido por su grandioso pasado histórico, que se manifiesta en la arquitectura de sus intrigantes y majestuosos edificios, que son los más vivos testimonios de la historia de la vida de Mazatlán y su maravillosa gente.",
    ],
  },
  {
    band: DARK_BAND,
    textTone: "light" as const,
    reverse: false,
    image: "/images/mazatlan/elfaro.webp",
    title: "El Faro",
    paragraphs: [
      "El mirador de cristal.",
      "Uno de los nuevos atractivos que debes visitar si vives o estarás de visita en Mazatlán es el nuevo Mirador de Cristal ubicado en la cima del faro natural más grande del mundo. Localizado al extremo sur de la hermosa bahía de Mazatlán sobre 157 metros de altitud encontrará el Cerro del Crestón, ideal para que los visitantes contemplen los amaneceres y atardeceres más bellos de México.",
    ],
  },
  {
    band: "bg-white",
    textTone: "gold" as const,
    reverse: true,
    image: "/images/mazatlan/QUELITE.webp",
    title: "Pueblos Señoriales",
    paragraphs: [
      "Los Pueblos Mágicos más bellos.",
      "En Mazatlán sin duda alguna podemos encontrar grandes atracciones turísticas para los vacacionistas, pero de lo que hoy hablaremos es de los fascinantes pueblos mágicos y señoriales que rodean al puerto. Actualmente el estado de Sinaloa, cuenta con 4 pueblos mágicos los cuales son: El Rosario, Cosalá, El Fuerte y el más reciente en incorporarse a esta categoría, Mocorito. ¡Ven a conocerlos!",
    ],
  },
  {
    band: DARK_BAND,
    textTone: "light" as const,
    reverse: false,
    image: "/images/mazatlan/observatorio.webp",
    title: "Observatorio 1873",
    paragraphs: [
      "Un lugar que preserva nuestra historia.",
      "Asentado sobre la cima del Cerro del Vigía y a 75 metros sobre el nivel del mar, podrás disfrutar el mejor atardecer, en la mejor vista de Mazatlán. Sella tu visita con broche de oro, degustando de nuestra cerveza artesanal y los mejores tragos. ¡Sin duda un lugar que debes conocer si visitas Mazatlán!",
    ],
  },
  {
    band: "bg-white",
    textTone: "gold" as const,
    reverse: true,
    image: "/images/mazatlan/parquecentral.webp",
    title: "Parque Central Mazatlán",
    paragraphs: [
      "Lugar de encuentros.",
      "Es un espacio interactivo y dinámico, destinado a conectar infraestructura educativa, deportiva, recreativa, cultural, turística y de entretenimiento que ofrece una experiencia única a sus visitantes tanto locales como turistas ven a conocer el gran lago, sus andadores y múltiples áreas verdes.",
    ],
  },
];

export default function MazatlanPage() {
  return (
    <>
      <PageHero image="/images/mazatlan/background1900px.png" eyebrow="Descubre" title="Mazatlán" priority />

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
