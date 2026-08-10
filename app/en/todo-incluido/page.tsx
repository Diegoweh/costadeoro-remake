import type { Metadata } from "next";
import { AlternatingFeature } from "@/components/alternating-feature";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "All Inclusive | Hotel Costa de Oro",
  description: "Discover the All Inclusive plan at Hotel Costa de Oro: dining, entertainment and activities for the whole family.",
};

export default function TodoIncluidoPageEn() {
  return (
    <>
      <PageHero image="/images/todoin/HEADER (1).webp" eyebrow="Hotel Costa de Oro" title="All Inclusive" priority />

      <section
        className="bg-cover bg-center px-4 py-16 text-center sm:py-20"
        style={{ backgroundImage: "url(/images/todoin/palmera.webp)" }}
      >
        <p className="mb-2 font-serif text-3xl italic text-[#e7cdb9] sm:text-5xl">Live the Costa de Oro</p>
        <p className="mb-3 font-serif text-3xl text-brand-gold-dark sm:text-5xl">experience</p>
        <p className="text-lg text-[#878787] sm:text-2xl">WITH OUR ALL INCLUSIVE PLAN</p>
      </section>

      <section className="bg-white">
        <AlternatingFeature image="/images/todoin/restaurante_1.webp" imageAlt="Restaurants" className="border-b border-[#878787]/40">
          <p className="text-sm font-semibold tracking-wide text-[#363636]">FOOD</p>
          <span className="h-px w-12 bg-brand-gold-dark" />
          <h2 className="text-2xl font-bold text-brand-gold-dark sm:text-3xl">RESTAURANTS</h2>
          <ul className="flex flex-col gap-2 text-left text-lg text-[#878787]">
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Main restaurant for 3 main meals (Breakfast, lunch and dinner)</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">2 specialty restaurants, Italian and Asian.</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Open Bar – Domestic alcoholic beverages</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Snacks</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Buffet-style food catering</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Sushi Bar</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Fresh seafood Ceviche Bar</li>
          </ul>
        </AlternatingFeature>

        <AlternatingFeature image="/images/todoin/baile.webp" imageAlt="Theme nights and shows" reverse className="border-b border-[#878787]/40">
          <p className="text-sm font-semibold tracking-wide text-[#363636]">ENTERTAINMENT</p>
          <span className="h-px w-12 bg-brand-gold-dark" />
          <h2 className="text-2xl font-bold text-brand-gold-dark sm:text-3xl">THEME NIGHTS AND SHOWS</h2>
          <ul className="flex flex-col gap-2 text-left text-lg text-[#878787]">
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Casino Night</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Comedy Night</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Karaoke</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Mexican Folkloric Show</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">International Caribbean Show</li>
          </ul>
        </AlternatingFeature>

        <AlternatingFeature image="/images/todoin/k_alberca.webp" imageAlt="Activities for the entire family">
          <p className="text-sm font-semibold tracking-wide text-[#363636]">ACTIVITIES</p>
          <span className="h-px w-12 bg-brand-gold-dark" />
          <h2 className="text-2xl font-bold text-brand-gold-dark sm:text-3xl">ACTIVITIES FOR THE ENTIRE FAMILY</h2>
          <ul className="flex flex-col gap-2 text-left text-lg text-[#878787]">
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Swimming and wading pool</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Pool activities</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Kids Club</li>
          </ul>
        </AlternatingFeature>
      </section>
    </>
  );
}
