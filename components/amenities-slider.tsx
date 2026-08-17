"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function AmenitiesSlider({
  slides,
}: {
  slides: { src: string; alt: string }[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length, paused]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div
      className="group absolute inset-0 h-full w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchX.current;
        if (delta > 40) prev();
        else if (delta < -40) next();
        touchX.current = null;
      }}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.src} className="relative h-full w-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              fetchPriority={i === 0 ? "high" : undefined}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2.5 text-brand-ink opacity-0 shadow-md backdrop-blur-sm transition duration-200 hover:bg-white hover:text-brand-gold-accent group-hover:opacity-100 sm:opacity-100"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2.5 text-brand-ink opacity-0 shadow-md backdrop-blur-sm transition duration-200 hover:bg-white hover:text-brand-gold-accent group-hover:opacity-100 sm:opacity-100"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-brand-gold-accent" : "w-2 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
