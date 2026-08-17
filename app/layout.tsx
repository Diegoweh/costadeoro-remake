import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const royaleCoutureSans = localFont({
  src: "./fonts/RoyaleCouture-Sans.ttf",
  variable: "--font-royale-sans",
  weight: "400",
  display: "swap",
});

const royaleCoutureSerif = localFont({
  src: "./fonts/RoyaleCouture-Serif.ttf",
  variable: "--font-royale-serif",
  weight: "400",
  display: "swap",
});

const goldenHopes = localFont({
  src: "./fonts/GoldenHopes.ttf",
  variable: "--font-golden-hopes",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Costa de Oro | Zona Dorada, Mazatlán",
  description:
    "Hotel Costa de Oro, el hotel familiar de mayor tradición en Mazatlán. Ubicación a pie de playa en el corazón de la Zona Dorada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${royaleCoutureSans.variable} ${royaleCoutureSerif.variable} ${goldenHopes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans text-brand-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
