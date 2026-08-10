export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  light = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className={`mb-2 text-sm font-semibold tracking-[0.2em] uppercase ${light ? "text-white/80" : "text-brand-blue"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl italic sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-brand-gold"}`}>
        {title}
      </h2>
    </div>
  );
}
