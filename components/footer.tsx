"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BOOKING_URL,
  FOOTER_EXTRA_LINKS,
  NAV_LINKS,
  localeFromPathname,
  localePath,
} from "@/lib/nav-links";

const CONTENT = {
  es: {
    contact: "Contáctanos",
    social: "Redes sociales",
    menu: "Menú",
    privacy: "AVISO DE PRIVACIDAD",
    privacyFile: "/aviso_de_privacidad.pdf",
    address: "Av. Camarón Sábalo No. 710 Zona Dorada",
    findUs: "UBÍCANOS",
    mapTitle: "¿Cómo llegar?",
    directions: "Ver en Google Maps",
    rights: "Todos los derechos reservados.",
    ctaTitle: "¿Listo para tu próxima escapada?",
    ctaButton: "RESERVA AHORA",
  },
  en: {
    contact: "Contact us",
    social: "Social media",
    menu: "Menu",
    privacy: "PRIVACY NOTICE",
    privacyFile: "/aviso_de_privacidad_eng.pdf",
    address: "Av. Camarón Sábalo No. 710 Zona Dorada",
    findUs: "FIND US",
    mapTitle: "How to get here",
    directions: "View on Google Maps",
    rights: "All rights reserved.",
    ctaTitle: "Ready for your next getaway?",
    ctaButton: "BOOK NOW",
  },
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5c0-1.1.9-2 2-2h2.2c.5 0 .95.35 1.06.85l.9 3.6a1.1 1.1 0 0 1-.3 1.05L7.4 10.4a13.5 13.5 0 0 0 6.2 6.2l1.4-1.46a1.1 1.1 0 0 1 1.05-.3l3.6.9c.5.1.85.55.85 1.06V19c0 1.1-.9 2-2 2h-1C10.6 21 3 13.4 3 6.5v-1Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.5h17v11h-17v-11Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4 shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5s7-6.3 7-11.7a7 7 0 1 0-14 0c0 5.4 7 11.7 7 11.7Z" />
      <circle cx="12" cy="9.8" r="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const t = CONTENT[locale];

  return (
    <footer className="bg-brand-beige">
      <div className="px-5 py-8 text-center sm:px-7 md:px-8">
        <p className="mb-1 text-xs font-semibold tracking-[0.3em] text-brand-gold-dark">{t.findUs}</p>
        <h2 className="mb-1 font-serif text-2xl italic text-brand-ink-soft sm:text-3xl">{t.mapTitle}</h2>
        <p className="text-brand-ink-soft">{t.address}</p>
        <a
          href="https://goo.gl/maps/QhpnqnSkDbSNutxHA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-bold text-brand-gold-accent underline underline-offset-4 transition hover:text-brand-gold-dark"
        >
          {t.directions}
        </a>
      </div>
      <div className="relative h-80 w-full sm:h-105 lg:h-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.819841344563!2d-106.45767882393211!3d23.249642079015334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f54bb4450355f%3A0x3efd61eae4639a9!2sCosta%20de%20Oro%20Beach%20Hotel!5e0!3m2!1ses-419!2smx!4v1786385543248!5m2!1ses-419!2smx"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title="Mapa Hotel Costa de Oro"
        />
      </div>
      <div className="bg-brand-beige">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 md:px-8">
          <div className="flex flex-col items-center justify-between gap-5 border-b border-brand-beige-dark/60 py-8 text-center md:flex-row md:text-left">
            <p className="font-serif text-2xl italic text-brand-ink-soft sm:text-3xl">{t.ctaTitle}</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-brand-gold-accent px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-105 hover:shadow-md"
            >
              {t.ctaButton}
            </a>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 py-12 text-center md:grid-cols-[minmax(260px,1.15fr)_minmax(250px,0.9fr)_auto_minmax(160px,0.55fr)] md:gap-8 md:py-16 md:text-left">
            <div>
              <Link href={localePath(locale)} className="inline-flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <Image src="/images/index/logo_nuevo.png" alt="Hotel Costa de Oro" width={160} height={60} className="h-auto w-[132px] sm:w-[160px]" />
                <Image src="/images/index/Logo 50 Aniv.png" alt="50 aniversario" width={108} height={60} className="h-auto w-[88px] sm:w-[108px]" />
                <Image src="/images/index/logo-punto-limpio.png" alt="Punto Limpio" width={74} height={60} className="h-auto w-[60px] sm:w-[74px]" />
              </Link>

              <div className="mt-7">
                <h2 className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-gold-dark md:justify-start">
                  {t.social}
                  <span className="h-px w-6 bg-brand-gold-dark/50" />
                </h2>
                <div className="flex justify-center gap-3 md:justify-start">
                  <a
                    href="https://www.facebook.com/costadeorohotel/?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-beige-dark/40 transition hover:bg-brand-gold-accent/20"
                  >
                    <Image src="/images/iconos/facebook.svg" alt="Facebook" width={44} height={44} className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/costadeorobeachhotel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-beige-dark/40 transition hover:bg-brand-gold-accent/20"
                  >
                    <Image src="/images/iconos/instegram.svg" alt="Instagram" width={44} height={44} className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-gold-dark md:justify-start">
                {t.contact}
                <span className="h-px w-6 bg-brand-gold-dark/50" />
              </h2>
              <ul className="flex flex-col items-center gap-2.5 text-brand-ink-soft md:items-start">
                <li className="flex items-center gap-2.5">
                  <PhoneIcon />
                  <a href="tel:+16699132005" className="transition hover:text-brand-gold-accent">(669) 913 20 05</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <PhoneIcon />
                  <a href="tel:+16693300014" className="transition hover:text-brand-gold-accent">(669) 330 00 14</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <PhoneIcon />
                  <a href="tel:+18773418355" className="transition hover:text-brand-gold-accent">1877 341 8355 – Toll Free USA/Canada</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MailIcon />
                  <a href="mailto:info@hotelcostadeoro.mx" className="transition hover:text-brand-gold-accent">info@hotelcostadeoro.mx</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <PinIcon />
                  <span>{t.address}</span>
                </li>
              </ul>
            </div>

            <div className="hidden h-56 w-px self-center bg-gradient-to-b from-transparent via-brand-beige-dark to-transparent md:block" />

            <div>
              <h2 className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-gold-dark md:justify-start">
                {t.menu}
                <span className="h-px w-6 bg-brand-gold-dark/50" />
              </h2>
              <ul className="flex flex-col items-center gap-2 md:items-start">
                {NAV_LINKS.map((link) => (
                  <li key={link.slug}>
                    <Link href={localePath(locale, link.slug)} className="font-medium text-brand-ink-soft transition hover:text-brand-gold-accent">
                      {(locale === "en" ? link.en : link.es).toUpperCase()}
                    </Link>
                  </li>
                ))}
                {FOOTER_EXTRA_LINKS.map((link) => (
                  <li key={link.slug}>
                    <Link href={localePath(locale, link.slug)} className="font-medium text-brand-ink-soft transition hover:text-brand-gold-accent">
                      {(locale === "en" ? link.en : link.es).toUpperCase()}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={t.privacyFile} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-ink-soft transition hover:text-brand-gold-accent">
                    {t.privacy}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-16 w-full items-center justify-center bg-brand-beige-dark px-5 text-center text-xs text-brand-ink-soft/80">
        © {new Date().getFullYear()} Hotel Costa de Oro. {t.rights}
      </div>
    </footer>
  );
}
