import { type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: never;
}
interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}
type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-md)] transition-[transform,box-shadow,background,border-color,filter] duration-200 ease-[var(--ease-out)] disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-[3.25rem] px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "text-[#0a0710] shadow-[0_8px_30px_rgba(196,47,134,0.28)] hover:shadow-[0_10px_40px_rgba(196,47,134,0.42)] hover:brightness-105 active:brightness-95",
  secondary:
    "glass text-fg border-line-strong hover:border-fg/25 hover:bg-white/5",
  ghost: "text-fg hover:bg-ink-800",
};

// CTA gradient chosen so near-black label keeps AA contrast across the sweep.
const primaryStyle = { background: "linear-gradient(100deg, var(--magenta) 0%, var(--amber-deep) 100%)" };

export function Button({ variant = "primary", size = "md", children, className, ...props }: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const style = variant === "primary" ? primaryStyle : undefined;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} style={style} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} style={style} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
