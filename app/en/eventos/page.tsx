import type { Metadata } from "next";
import Image from "next/image";
import { AlternatingFeature } from "@/components/alternating-feature";
import { EventInquiryForm } from "@/components/event-inquiry-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Events | Hotel Costa de Oro",
  description: "Weddings, social events, conferences and business meetings at Hotel Costa de Oro, Mazatlán.",
};

const WHATSAPP = "https://wa.me/5216691298311?text=Hola,%20quiero%20cotizar%20un%20evento";

const SPACES = [
  { image: "/images/eventos/La_Pergola.webp", title: "La Pérgola" },
  { image: "/images/eventos/Salon_Costa_de_Oro.webp", title: "Salón Costa de Oro" },
  { image: "/images/eventos/Salon_Tequilas .webp", title: "Salón Tequilas" },
];

export default function EventosPageEn() {
  return (
    <>
      <PageHero
        image="/images/eventos/bacground.webp"
        eyebrow="The ideal setting"
        eyebrowClassName="mb-2 font-script text-6xl text-white/90 sm:text-7xl lg:text-8xl"
        title="Unforgettable moments and stories"
        titleClassName="font-serif text-4xl not-italic sm:text-5xl lg:text-6xl"
        priority
      />

      <section className="bg-[#909986]">
        <AlternatingFeature image="/images/eventos/boda.webp" imageAlt="Weddings at Costa de Oro">
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">Weddings</h2>
          <p className="text-justify text-lg text-white/90">
            Celebrate your wedding at Costa de Oro. Enjoy a romantic wedding ceremony with your feet on the sand and unforgettable sunsets. Our special event team will take charge of every detail, to ensure that your special day is perfect. Take advantage of our quality facilities and lodging to make your wedding experience that more unique. Make your Beach Wedding dream come true by booking now!
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-md bg-brand-gold-dark px-9 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent">
            Quote request
          </a>
        </AlternatingFeature>
      </section>

      <section className="bg-[#c2bfb5]">
        <AlternatingFeature image="/images/eventos/evento-social.webp" imageAlt="Social event" reverse>
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">Social Events</h2>
          <p className="text-justify text-lg text-white/90">
            Experience an unforgettable social event at Costa de Oro. Our facilities offer the perfect setting for that special occasion. From birthdays and anniversaries to family reunions, our team is at your disposal to ensure it becomes a true success.
          </p>
          <p className="text-justify text-lg text-white/90">
            Allow us to take charge of each and every detail, so that you and your guests can enjoy a truly memorable experience. Book now and celebrate your next unforgettable social event in our hotel!
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-md bg-brand-gold-dark px-9 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent">
            Quote request
          </a>
        </AlternatingFeature>
      </section>

      <section className="bg-[#ad9b86]">
        <AlternatingFeature image="/images/eventos/congreso.webp" imageAlt="Conferences and business meetings">
          <h2 className="font-serif text-3xl italic text-white sm:text-4xl">Conferences and Business Meetings</h2>
          <p className="text-justify text-lg text-white/90">
            Discover the perfect venue for your Conference or Business Meeting. At Costa de Oro you&apos;ll find fully-equipped conference halls and meeting rooms of different sizes to suit your needs and set-up preferences, for any type of business meeting.
          </p>
          <p className="text-justify text-lg text-white/90">
            Our experienced team is at your disposal, to guarantee the success of your event. Enjoy our catering services and relax in our comfortable facilities. Book now for an unforgettable and successful conference or business meeting!
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-md bg-white px-9 py-3 font-bold text-brand-gold-dark shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent hover:text-white">
            Quote request
          </a>
        </AlternatingFeature>
      </section>

      <section className="bg-white px-4 py-14 text-center sm:py-20">
        <h2 className="mb-8 text-2xl font-bold text-[#222] sm:text-3xl">Our Event Spaces</h2>
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
          <h2 className="mb-4 text-center font-serif text-3xl italic text-[#213639] sm:text-4xl">Let&apos;s discuss your special event</h2>
          <p className="mx-auto mb-8 max-w-[720px] text-center text-[#34484a]">
            We want to offer you our full attention, to make your event a perfect one. Contact us by sending us a{" "}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-gold-dark underline decoration-2 underline-offset-2">
              WhatsApp message,
            </a>{" "}
            or emailing us:
          </p>
          <EventInquiryForm locale="en" />
        </div>
      </section>
    </>
  );
}
