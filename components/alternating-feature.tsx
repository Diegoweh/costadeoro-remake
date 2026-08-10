import Image from "next/image";
import type { ReactNode } from "react";

export function AlternatingFeature({
  image,
  imageAlt = "",
  reverse = false,
  children,
  className = "",
}: {
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex w-full max-w-[1400px] flex-col items-center gap-6 px-4 py-8 sm:px-8 md:gap-10 md:py-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } ${className}`}
    >
      <div className="w-full shrink-0 md:w-1/2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-3 text-center md:w-1/2 md:items-start md:text-left">
        {children}
      </div>
    </div>
  );
}
