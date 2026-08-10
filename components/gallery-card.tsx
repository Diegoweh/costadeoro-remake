"use client";

import Image from "next/image";
import { useState } from "react";

export function GalleryCard({
  images,
  title,
  children,
  cta,
}: {
  images: string[];
  title: string;
  children: React.ReactNode;
  cta: { label: string; href: string };
}) {
  const [index, setIndex] = useState(0);
  const isExternal = cta.href.startsWith("mailto:") || cta.href.startsWith("http");

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-black/10 md:flex-row md:items-center">
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl md:w-1/2">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={title}
            fill
            className={`object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                aria-label={`Ver imagen ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex w-full flex-col items-center gap-4 px-6 py-8 text-center md:w-1/2 md:px-10">
        <h2 className="font-serif text-3xl italic text-brand-gold-dark">{title}</h2>
        <p className="text-base leading-relaxed text-brand-ink">{children}</p>
        {isExternal ? (
          <a
            href={cta.href}
            target={cta.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="mt-2 rounded-md bg-brand-gold-dark px-8 py-3 text-sm font-bold text-white shadow transition hover:bg-brand-gold-accent"
          >
            {cta.label}
          </a>
        ) : (
          <a
            href={cta.href}
            className="mt-2 rounded-md bg-brand-gold-dark px-8 py-3 text-sm font-bold text-white shadow transition hover:bg-brand-gold-accent"
          >
            {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}
