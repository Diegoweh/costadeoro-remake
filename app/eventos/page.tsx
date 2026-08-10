import type { Metadata } from "next";
import Image from "next/image";
import { AlternatingFeature } from "@/components/alternating-feature";
import { EventInquiryForm } from "@/components/event-inquiry-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Eventos | Hotel Costa de Oro",
  description: "Bodas, eventos sociales, congresos y reuniones en el Hotel Costa de Oro, Mazatlán.",
};

const WHATSAPP = "https://wa.me/5216691298311?text=Hola,%20quiero%20cotizar%20un%20evento";

const SPACES = [
  { image: "/images/eventos/La_Pergola.webp", title: "La Pérgola" },
  { image: "/images/eventos/Salon_Costa_de_Oro.webp", title: "Salón Costa de Oro" },
  { image: "/images/eventos/Salon_Tequilas .webp", title: "Salón Tequilas" },
];

export default function EventosPage() {
  return (
    <>
      <PageHero image="/images/eventos/bacground.webp" eyebrow="Hotel Costa de Oro" title="Eventos" priority />

      <section className="bg-[#909986]">
        <AlternatingFeature image="/images/eventos/boda.webp" imageAlt="Bodas en Costa de Oro">
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">Bodas</h2>
          <p className="text-justify text-lg text-white/90">
            Celebra en Costa de Oro. Disfruta de una ceremonia romántica con los pies en la arena y atardeceres inolvidables. Nuestro equipo de eventos se encargará de cada detalle para que tu día sea perfecto. Disfruta de nuestras instalaciones y alojamientos de calidad para una experiencia única. ¡Haz realidad tus sueños de boda en la playa reservando ahora!
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-md bg-brand-gold-dark px-9 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent">
            Cotiza
          </a>
        </AlternatingFeature>
      </section>

      <section className="bg-[#c2bfb5]">
        <AlternatingFeature image="/images/eventos/evento-social.webp" imageAlt="Evento social" reverse>
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">Evento Social</h2>
          <p className="text-justify text-lg text-white/90">
            Vive tu evento inolvidable en Costa de Oro. Nuestros espacios te ofrecen el ambiente perfecto para celebraciones especiales. Desde fiestas de cumpleaños hasta aniversarios y reuniones familiares, nuestro equipo estará a tu disposición para hacer de tu evento un éxito.
          </p>
          <p className="text-justify text-lg text-white/90">
            Permítenos encargarnos de cada detalle para que tú y tus invitados disfruten de una experiencia inigualable. ¡Reserva ahora y celebra tu próximo evento social de manera inolvidable en nuestro hotel!
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-md bg-brand-gold-dark px-9 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent">
            Cotiza
          </a>
        </AlternatingFeature>
      </section>

      <section className="bg-[#ad9b86]">
        <AlternatingFeature image="/images/eventos/congreso.webp" imageAlt="Congresos y reuniones">
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">Congresos & Reuniones</h2>
          <p className="text-justify text-lg text-white/90">
            Descubre el lugar perfecto para tus Congresos y Reuniones. En Costa de Oro encontrarás salas de conferencias y salones para eventos equipados y con diferentes capacidades para eventos de cualquier tipo de montaje.
          </p>
          <p className="text-justify text-lg text-white/90">
            Nuestro experimentado equipo estará a tu disposición para garantizar el éxito de tu evento. Disfruta de nuestro servicio de catering y relájate en nuestras cómodas instalaciones. ¡Reserva ahora y haz de tu próximo congreso o reunión un éxito memorable!
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-md bg-white px-9 py-3 font-bold text-brand-gold-dark shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent hover:text-white">
            Cotiza
          </a>
        </AlternatingFeature>
      </section>

      <section className="bg-white px-4 py-14 text-center sm:py-20">
        <h2 className="mb-8 text-2xl font-bold text-[#222] sm:text-3xl">Nuestros Espacios para Eventos</h2>
        <div className="mx-auto flex max-w-[900px] snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {SPACES.map((space) => (
            <div key={space.title} className="w-[85%] shrink-0 snap-center sm:w-1/2 lg:w-1/3">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image src={space.image} alt={space.title} fill className="object-cover" />
              </div>
              <p className="mt-3 font-bold text-[#333]">{space.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3efe8] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] rounded-lg border border-[#ded5c8] bg-[#fffdf9] p-6 shadow-xl shadow-black/10 sm:p-10">
          <h2 className="mb-4 text-center font-serif text-3xl italic text-[#213639] sm:text-4xl">Hablemos de tu evento</h2>
          <p className="mx-auto mb-8 max-w-[720px] text-center text-[#34484a]">
            Queremos darte la mejor atención para que tu evento especial sea perfecto, comunícate con nosotros{" "}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-gold-dark underline decoration-2 underline-offset-2">
              envíandonos whatsapp,
            </a>{" "}
            o envíanos un mail:
          </p>
          <EventInquiryForm />
        </div>
      </section>
    </>
  );
}
