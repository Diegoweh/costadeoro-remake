import Image from "next/image";
import { Container } from "@/components/container";
import { PromoSlider } from "@/components/promo-slider";

const AMENITIES = [
  { icon: "/images/iconos/playa.svg", label: "OCEAN VIEW ROOMS" },
  { icon: "/images/iconos/restaurante.svg", label: "RESTAURANTS & BARS" },
  { icon: "/images/iconos/boda.svg", label: "WEDDINGS AND BANQUETS" },
  { icon: "/images/iconos/alberca.svg", label: "POOL, PALAPA HUTS AND LOUNGE CHAIRS" },
  { icon: "/images/iconos/star.svg", label: "ALL INCLUSIVE" },
];

const PROMO_SLIDES = [
  { src: "/images/promociones/SLIDER-1.webp", srcMobile: "/images/promociones/900x600-1.webp", alt: "Promotion 1" },
  { src: "/images/promociones/SLIDER-2.webp", srcMobile: "/images/promociones/900x600-2.webp", alt: "Promotion 2" },
  { src: "/images/promociones/SLIDER-3.webp", srcMobile: "/images/promociones/900x600-3.webp", alt: "Promotion 3" },
  { src: "/images/promociones/SLIDER-4.webp", srcMobile: "/images/promociones/900x600-4.webp", alt: "Promotion 4" },
];

const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/C7hFj9vuEY4/embed",
  "https://www.instagram.com/p/C7W2m0rOQkN/embed",
  "https://www.instagram.com/p/C53q38gOsKE/embed",
];

export default function HomeEn() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[100dvh] min-h-[520px] w-full items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/horizontal.mp4" type="video/mp4" media="(min-width: 769px)" />
          <source src="/video/vertical.mp4" type="video/mp4" media="(max-width: 768px)" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* Promotions */}
      <section className="bg-white py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-10">
          <PromoSlider slides={PROMO_SLIDES} />
        </div>
      </section>

      {/* Live the experience */}
      <section
        className="relative bg-cover bg-center px-4 py-24 sm:py-32"
        style={{ backgroundImage: "url(/images/index/palmera.webp)" }}
      >
        <Container className="flex max-w-190 flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-8 bg-brand-blue/50 sm:w-12" />
            <p className="text-sm font-semibold tracking-[0.3em] text-brand-blue sm:text-base">
              LIVE THE EXPERIENCE
            </p>
            <span className="h-px w-8 bg-brand-blue/50 sm:w-12" />
          </div>
          <p className="mb-6 font-serif text-5xl italic leading-tight text-brand-gold sm:text-6xl lg:text-7xl">
            Costa de Oro
          </p>
          <Image src="/images/index/hojacolor.png" alt="" width={78} height={78} className="mb-8 h-12 w-auto sm:h-16" />
          <p className="mb-5 max-w-md text-xl font-semibold text-brand-gold sm:text-2xl">
            The most traditional, family-run hotel in Mazatlán.
          </p>
          <p className="text-lg leading-relaxed text-brand-ink sm:text-xl">
            Its beachfront location is right in the heart of the Golden Zone, the most important resort
            area in the destination. In 2023 Costa de Oro celebrated its 50th Anniversary. Pamper
            yourself with the friendliness and service we are known for!
          </p>
        </Container>
      </section>

      {/* Our amenities */}
      <section className="flex flex-col md:flex-row">
        <div
          className="relative h-[320px] w-full bg-cover bg-center md:h-auto md:min-h-[560px] md:w-1/2"
          style={{ backgroundImage: "url(/images/index/alberca.webp)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-brand-beige-dark/20" />
        </div>
        <div className="flex w-full flex-col justify-center bg-brand-beige-dark px-6 py-14 sm:px-10 md:w-1/2 md:px-14 md:py-16">
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-brand-gold-dark sm:text-sm">
            HOTEL COSTA DE ORO
          </p>
          <h2 className="mb-9 font-serif text-2xl text-white sm:text-3xl">
            Our <span className="italic text-brand-gold-dark">amenities</span>
          </h2>
          <ul className="flex flex-col divide-y divide-white/10">
            {AMENITIES.map((item) => (
              <li key={item.label} className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-brand-gold-accent/20">
                  <Image src={item.icon} alt="" width={44} height={44} className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <span className="text-sm font-medium text-white sm:text-base">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Take a peek at your future experience */}
      <section className="flex flex-col items-center bg-white px-4 py-16 sm:py-24">
        <div className="mb-3 flex items-center gap-3">
          <Image src="/images/iconos/instegram2.svg" alt="" width={44} height={44} className="h-7 w-7 sm:h-9 sm:w-9" />
          <p className="text-xs font-semibold tracking-[0.3em] text-brand-gold-dark sm:text-sm">
            TAKE A PEEK AT YOUR FUTURE EXPERIENCE
          </p>
        </div>
        <p className="mb-10 font-serif text-3xl italic text-brand-ink-soft/80 sm:text-4xl">Follow us!</p>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INSTAGRAM_POSTS.map((src) => (
            <div key={src} className="overflow-hidden rounded-2xl shadow-lg">
              <iframe src={src} className="h-96 w-full border-0" title="Instagram post" loading="lazy" />
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/costadeorobeachhotel/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-full border border-brand-gold-dark px-7 py-2.5 text-sm font-bold text-brand-gold-dark transition hover:bg-brand-gold-dark hover:text-white"
        >
          @costadeorobeachhotel
        </a>
      </section>
    </>
  );
}
