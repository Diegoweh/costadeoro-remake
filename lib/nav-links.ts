export type Locale = "es" | "en";

export const NAV_LINKS: { slug: string; es: string; en: string }[] = [
  { slug: "habitaciones", es: "Habitaciones", en: "Rooms" },
  { slug: "todo-incluido", es: "Todo Incluido", en: "All Inclusive" },
  { slug: "restaurante", es: "Restaurantes", en: "Restaurants" },
  { slug: "eventos", es: "Eventos", en: "Events" },
  { slug: "mazatlan", es: "Mazatlán", en: "Mazatlán" },
];

export const FOOTER_EXTRA_LINKS: { slug: string; es: string; en: string }[] = [
  { slug: "media-kit", es: "Media Kit", en: "Media Kit" },
  { slug: "club-vacacional", es: "Club Vacacional", en: "Vacation Club" },
];

export const BOOKING_URL = "https://booking.hotelcostadeoro.mx/";

export function localePath(locale: Locale, slug: string = "") {
  const base = locale === "en" ? "/en" : "";
  return slug ? `${base}/${slug}` : base || "/";
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export function otherLocalePath(pathname: string): string {
  const locale = localeFromPathname(pathname);
  if (locale === "en") {
    const rest = pathname.replace(/^\/en/, "");
    return rest || "/";
  }
  return `/en${pathname === "/" ? "" : pathname}`;
}
