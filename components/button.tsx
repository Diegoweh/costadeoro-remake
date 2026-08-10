import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const VARIANTS = {
  outline:
    "border border-current text-white hover:scale-105 hover:bg-white/10",
  solid:
    "bg-brand-gold-dark text-white hover:bg-brand-gold-accent",
  ghost:
    "border border-brand-gold-dark text-brand-gold-dark hover:bg-brand-gold-dark hover:text-white",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold tracking-wide transition duration-300 whitespace-nowrap";

type Variant = keyof typeof VARIANTS;

export function Button({
  href,
  variant = "outline",
  className = "",
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} target={props.target ?? "_blank"} rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function ButtonAsButton({
  className = "",
  variant = "solid",
  children,
  ...props
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
