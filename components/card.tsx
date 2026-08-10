import Image from "next/image";
import type { ReactNode } from "react";

export function Card({
  image,
  imageAlt,
  title,
  children,
  className = "",
}: {
  image?: string;
  imageAlt?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-white shadow-md shadow-black/5 ring-1 ring-black/5 transition hover:shadow-lg ${className}`}>
      {image && (
        <div className="relative aspect-[4/3] w-full">
          <Image src={image} alt={imageAlt ?? title ?? ""} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="mb-2 font-serif text-xl italic text-brand-gold-dark">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
