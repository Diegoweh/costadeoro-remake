"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BOOKING_URL,
  NAV_LINKS,
  localeFromPathname,
  localePath,
  otherLocalePath,
} from "@/lib/nav-links";

export function Navbar() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-black/5 bg-brand-taupe/95 shadow-md backdrop-blur-md"
          : "border-transparent bg-brand-taupe/70 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 transition-[padding] duration-300 sm:px-6 lg:px-10 ${
          scrolled ? "py-2" : "py-3 sm:py-4"
        }`}
      >
        <Link href={localePath(locale)} className="shrink-0">
          <Image
            src="/images/index/cologo.png"
            alt="Hotel Costa de Oro"
            width={140}
            height={85}
            className={`w-auto transition-[height] duration-300 ${
              scrolled ? "h-12 sm:h-14 lg:h-14.5" : "h-14 sm:h-16 lg:h-17.5"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => {
            const href = localePath(locale, link.slug);
            const active = pathname === href;
            return (
              <Link
                key={link.slug}
                href={href}
                className="group relative whitespace-nowrap px-3 py-2 text-sm font-bold tracking-wide text-white transition hover:text-brand-gold-accent lg:text-[0.95rem]"
              >
                {locale === "en" ? link.en : link.es}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gold-accent transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <Link
            href={otherLocalePath(pathname)}
            aria-label="Switch language"
            className="flex items-center gap-2 text-xs font-bold text-white/90 transition hover:text-white"
          >
            <Image
              src={locale === "es" ? "/images/index/usa.png" : "/images/index/mx.svg"}
              alt={locale === "es" ? "English" : "Español"}
              width={26}
              height={17}
              className="h-4.25 w-auto rounded-xs shadow-sm"
            />
            {locale === "es" ? "EN" : "ES"}
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-gold-accent px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:scale-105 hover:shadow-md"
          >
            {locale === "en" ? "BOOK NOW" : "RESERVA"}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center text-white xl:hidden"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-brand-taupe-dark/95 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-in-out xl:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col items-center gap-1 px-4 pb-8 pt-2">
            {NAV_LINKS.map((link, i) => {
              const href = localePath(locale, link.slug);
              const active = pathname === href;
              return (
                <Link
                  key={link.slug}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                  className={`w-full max-w-xs rounded-lg px-4 py-3 text-center text-base font-bold transition-all duration-300 ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  } ${active ? "bg-white/10 text-brand-gold-accent" : "text-white hover:bg-white/5 hover:text-brand-gold-accent"}`}
                >
                  {locale === "en" ? link.en : link.es}
                </Link>
              );
            })}

            <div className="my-2 h-px w-full max-w-xs bg-white/15" />

            <Link
              href={otherLocalePath(pathname)}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-base font-bold text-white transition hover:bg-white/5"
            >
              <Image
                src={locale === "es" ? "/images/index/usa.png" : "/images/index/mx.svg"}
                alt=""
                width={24}
                height={16}
                className="h-4 w-auto rounded-xs"
              />
              {locale === "es" ? "English" : "Español"}
            </Link>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full max-w-xs rounded-full bg-brand-gold-accent px-5 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:scale-[1.02]"
            >
              {locale === "en" ? "BOOK NOW" : "RESERVA"}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
