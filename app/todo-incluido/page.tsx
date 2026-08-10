import type { Metadata } from "next";
import { AlternatingFeature } from "@/components/alternating-feature";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Todo Incluido | Hotel Costa de Oro",
  description: "Conoce el plan Todo Incluido del Hotel Costa de Oro: alimentos, entretenimiento y actividades para toda la familia.",
};

export default function TodoIncluidoPage() {
  return (
    <>
      <PageHero image="/images/todoin/HEADER (1).webp" eyebrow="Hotel Costa de Oro" title="Todo Incluido" priority />

      <section
        className="bg-cover bg-center px-4 py-16 text-center sm:py-20"
        style={{ backgroundImage: "url(/images/todoin/palmera.webp)" }}
      >
        <p className="mb-2 font-serif text-3xl italic text-[#e7cdb9] sm:text-5xl">Vive la experiencia</p>
        <p className="mb-3 font-serif text-3xl text-brand-gold-dark sm:text-5xl">Costa de Oro</p>
        <p className="text-lg text-[#878787] sm:text-2xl">CON NUESTRO PLAN TODO INCLUIDO</p>
      </section>

      <section className="bg-white">
        <AlternatingFeature image="/images/todoin/restaurante_1.webp" imageAlt="Restaurantes Costa de Oro" className="border-b border-[#878787]/40">
          <p className="text-sm font-semibold tracking-wide text-[#363636]">ALIMENTOS</p>
          <span className="h-px w-12 bg-brand-gold-dark" />
          <h2 className="text-2xl font-bold text-brand-gold-dark sm:text-3xl">RESTAURANTES</h2>
          <ul className="flex flex-col gap-2 text-left text-lg text-[#878787] marker:text-brand-gold-dark">
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Restaurante principal para los 3 alimentos (Desayuno, comida y cena)</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">2 Restaurantes de Especialidades, Italiana y Oriental.</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Barra Libre Nacional</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Snacks</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Alimentos Tipo Buffet</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Sushi Bar</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Barra de Ceviches</li>
          </ul>
        </AlternatingFeature>

        <AlternatingFeature image="/images/todoin/baile.webp" imageAlt="Noches temáticas y show" reverse className="border-b border-[#878787]/40">
          <p className="text-sm font-semibold tracking-wide text-[#363636]">ENTRETENIMIENTO</p>
          <span className="h-px w-12 bg-brand-gold-dark" />
          <h2 className="text-2xl font-bold text-brand-gold-dark sm:text-3xl">NOCHES TEMÁTICAS Y SHOW</h2>
          <ul className="flex flex-col gap-2 text-left text-lg text-[#878787]">
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Noche Casino</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Noche de Comedia</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Karaoke</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Noche Mexicana</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Show Internacional Caribeño</li>
          </ul>
        </AlternatingFeature>

        <AlternatingFeature image="/images/todoin/k_alberca.webp" imageAlt="Actividades para toda la familia">
          <p className="text-sm font-semibold tracking-wide text-[#363636]">ACTIVIDADES</p>
          <span className="h-px w-12 bg-brand-gold-dark" />
          <h2 className="text-2xl font-bold text-brand-gold-dark sm:text-3xl">ACTIVIDADES PARA TODA LA FAMILIA</h2>
          <ul className="flex flex-col gap-2 text-left text-lg text-[#878787]">
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Alberca con Chapoteadero</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Actividades en Alberca</li>
            <li className="list-disc pl-1 marker:text-brand-gold-dark">Kids Club</li>
          </ul>
        </AlternatingFeature>
      </section>
    </>
  );
}
