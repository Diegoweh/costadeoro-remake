import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Media Kit | Hotel Costa de Oro",
  description: "Recursos de prensa del Hotel Costa de Oro: PDF informativo, galería, mapa y video institucional.",
};

const LINKS = [
  { href: "/mediakit.pdf", icon: "/images/iconos/pdfinfo.png", label: "PDF informativo" },
  { href: "https://www.instagram.com/costadeorobeachhotel/", icon: "/images/iconos/galeria.png", label: "Galería" },
  { href: "https://goo.gl/maps/QhpnqnSkDbSNutxHA", icon: "/images/iconos/mapa.png", label: "Mapa" },
  { href: "https://hotelcostadeoro.mx/costadeoro_institucional.mp4", icon: "/images/iconos/video.png", label: "Video 1" },
  { href: "https://hotelcostadeoro.mx/costadeoro_2025.mp4", icon: "/images/iconos/video.png", label: "Video 2" },
];

export default function MediaKitPage() {
  return (
    <section className="grid min-h-screen grid-cols-1 pt-20 sm:pt-24 lg:grid-cols-[1.25fr_0.85fr] lg:pt-28">
      <div className="relative h-[42vh] lg:h-auto">
        <Image src="/images/mediakit/mediakit.webp" alt="Vista del Hotel Costa de Oro frente al mar" fill priority className="object-cover" />
      </div>

      <div className="flex flex-col items-center justify-center bg-white px-6 py-10 text-center sm:px-10 lg:items-start lg:px-16 lg:text-left">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h1 className="text-xl font-light text-[#504e4e] sm:text-2xl">HOTEL COSTA DE ORO</h1>
          <span className="border-b-[3px] border-brand-gold-dark font-serif text-5xl italic text-brand-gold-dark sm:text-6xl">
            Mediakit
          </span>
          <p className="max-w-md text-lg text-[#504e4e]">
            En este menú encontrarás información a detalle sobre lo que nuestro Hotel en Mazatlán tiene para ofrecerte.
          </p>
        </div>

        <nav className="mt-8 flex w-full max-w-md flex-col divide-y divide-[#e7e1d9] border-t border-[#e7e1d9]">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 py-4 font-semibold text-[#504e4e] transition hover:translate-x-0.5 hover:opacity-80 lg:justify-start"
            >
              <Image src={link.icon} alt="" width={32} height={32} className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
