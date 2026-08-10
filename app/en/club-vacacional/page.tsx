import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Vacation Club | Hotel Costa de Oro",
  description: "Costa de Oro Vacation Club: memberships, exclusive benefits and referral program.",
};

const BENEFITS_LEFT = [
  { icon: "/images/clubv/iconos/regalo.svg", label: "Welcome Gift." },
  { icon: "/images/clubv/iconos/calendario.svg", label: "Free choice of dates, weeks and destinations." },
  { icon: "/images/clubv/iconos/comida.svg", label: "Concierge Service during your stay." },
  { icon: "/images/clubv/iconos/check_out.svg", label: "Free late check-out, with prior request and subject to availability." },
];

const BENEFITS_RIGHT = [
  { icon: "/images/clubv/iconos/diamante.svg", label: "30% discount at the Joyerías Rubio jewelry store." },
  { icon: "/images/clubv/iconos/gancho.svg", label: "10% discount at the Gaviota Boutique." },
  { icon: "/images/clubv/iconos/resturante.svg", label: "20% discount on Food and Beverages while on a European Plan booking." },
  { icon: "/images/clubv/iconos/infinito.svg", label: "Preferential European Plan or All Inclusive booking rates." },
  { icon: "/images/clubv/iconos/star.svg", label: "Personalized service before, during, and after your stay." },
];

export default function ClubVacacionalPageEn() {
  return (
    <>
      <PageHero image="/images/clubv/background1920px.webp" eyebrow="Hotel Costa de Oro" title="Vacation Club" priority />

      <section
        className="bg-cover bg-center py-16 sm:py-20"
        style={{ backgroundImage: "linear-gradient(rgba(249,249,249,.92),rgba(249,249,249,.92)), url(/images/clubv/bacground_huesded.webp)" }}
      >
        <Container className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="lg:w-1/3">
            <h1 className="font-serif text-3xl italic text-brand-gold-dark sm:text-4xl">From Guest to Family Member</h1>
            <p className="mt-2 text-xl text-[#494949]">Discover a new way of traveling that&apos;s unique and different.</p>
            <hr className="mx-auto mt-4 w-24 border-brand-gold-dark lg:mx-0" />
          </div>
          <div className="flex flex-col gap-4 lg:w-2/3">
            <p className="text-lg text-[#878787]">
              Costa de Oro Beach Hotel presents the Costa de Oro Vacation Club, your Vacation Club that offers a custom-made program, with exclusive advantages and benefits for all of its members.
            </p>
            <p className="text-lg text-[#878787]">
              As a Member, Costa de Oro Vacation Club offers you the freedom to choose the destination of your preference, and the membership level that better suits your lifestyle, ranging from 5 to 30 years, aiming at maximizing your stay&apos;s enjoyment with us.
            </p>
          </div>
        </Container>

        <div className="mx-auto mt-12 flex max-w-[1400px] flex-wrap justify-center gap-2 px-4">
          <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-xl sm:w-[45%]">
            <Image src="/images/clubv/imgl.png" alt="Costa de Oro Vacation Club" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-xl sm:w-[45%]">
            <Image src="/images/clubv/imgr.png" alt="Costa de Oro Vacation Club" fill className="object-cover" />
          </div>
        </div>

        <Container className="mt-16 flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="lg:w-1/3">
            <h2 className="font-serif text-2xl text-[#494949] sm:text-3xl">Share your most special</h2>
            <h1 className="font-serif text-3xl italic text-brand-gold-dark sm:text-5xl">moments</h1>
          </div>
          <div className="lg:w-2/3">
            <p className="mb-4 text-lg text-[#878787]">
              Costa de Oro Vacation Club grants you access to a membership with a wide array of possibilities, that will change your way of traveling forever. Learn more about the different membership levels, starting at 20 weeks or more, so that you can travel to all those destinations you&apos;ve always dreamt of.
            </p>
            <ul className="flex flex-col gap-3 text-left text-lg text-brand-gold-dark">
              <li className="list-disc pl-1 marker:text-brand-gold-dark">Access to over 1 million different hotels.</li>
              <li className="list-disc pl-1 marker:text-brand-gold-dark">Flexibility to choose how, when, and where to travel.</li>
              <li className="list-disc pl-1 marker:text-brand-gold-dark">Booking priority at our Hotel.</li>
              <li className="list-disc pl-1 marker:text-brand-gold-dark">Possibility of sharing your membership with family and friends.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="relative h-[45vh] min-h-[280px] w-full">
        <Image src="/images/clubv/bacground_pareja.png" alt="" fill className="object-cover" />
      </section>

      <section className="bg-[#eae9e5] px-4 py-16 sm:py-20">
        <Container className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="lg:w-1/2">
            <h1 className="mb-2 text-3xl font-medium text-[#494949] sm:text-4xl">
              <span className="text-brand-gold-dark">EXCLUSIVE</span> BENEFITS
            </h1>
            <hr className="mb-8 w-24 border-brand-gold-dark" />
            <ul className="flex flex-col gap-5">
              {BENEFITS_LEFT.map((b) => (
                <li key={b.label} className="flex items-center gap-4 text-lg text-[#494949]">
                  <Image src={b.icon} alt="" width={56} height={56} className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mt-24 lg:w-1/2">
            <ul className="flex flex-col gap-5">
              {BENEFITS_RIGHT.map((b) => (
                <li key={b.label} className="flex items-center gap-4 text-lg text-[#494949]">
                  <Image src={b.icon} alt="" width={56} height={56} className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white px-4 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:w-1/2">
            <Image src="/images/clubv/refe_background.webp" alt="Referral program" fill className="object-cover" />
          </div>
          <div className="flex flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            <h1 className="font-serif text-3xl italic text-[#494949] sm:text-4xl">
              <span className="text-brand-gold-dark">Referral</span> Program
            </h1>
            <hr className="my-4 w-16 border-brand-gold-dark" />
            <p className="mb-4 text-lg text-[#878787]">
              We appreciate your loyalty with valuable rewards through our Referral Program, when you invite your family and friends to learn about the benefits of traveling as a Member of Costa de Oro&apos;s Vacation Club.
            </p>
            <p className="mb-4 text-lg text-brand-gold-dark">
              Take advantage of the opportunity to share unforgettable memories, multiply your enjoyment and experience a wonderful stay with your family and friends.
            </p>
            <p className="text-[#878787]">You can find out how to participate in this Program by emailing us:</p>
            <a href="mailto:concierge@hotelcostadeoro.mx" className="mb-4 font-extrabold text-[#878787]">
              costatiempo@hotelcostadeoro.mx
            </a>
            <a
              href="mailto:ventasvaclub@hotelcostadeoro.mx"
              className="rounded-md bg-brand-gold-dark px-9 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-brand-gold-accent"
            >
              Send inquiry
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
