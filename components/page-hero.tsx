import Image from "next/image";

export function PageHero({
  image,
  title,
  eyebrow,
  priority = false,
}: {
  image: string;
  title: string;
  eyebrow?: string;
  priority?: boolean;
}) {
  return (
    <section className="relative flex h-[70vh] min-h-[420px] w-full items-center justify-center overflow-hidden">
      <Image src={image} alt="" fill priority={priority} className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/40" />
      <div className="relative text-center text-white">
        {eyebrow && <p className="mb-2 text-sm font-semibold tracking-[0.25em] uppercase text-white/80">{eyebrow}</p>}
        <h1 className="font-serif text-4xl italic sm:text-5xl lg:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
