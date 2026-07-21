import Link from "next/link";

type Props = {
  href?: string;
  children?: React.ReactNode;
  variant?: "coral" | "yellow" | "outline" | "ghost";
  className?: string;
  size?: "md" | "lg";
};

const variants = {
  coral:
    "bg-saem-coral text-white hover:bg-saem-coral-deep shadow-[0_10px_30px_-12px_rgba(255,90,95,0.7)]",
  yellow: "bg-saem-yellow text-saem-night hover:brightness-105",
  outline:
    "border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-saem-turquoise-deep",
  ghost: "bg-white/15 text-white hover:bg-white/25",
} as const;

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
} as const;

export function CtaButton({
  href = "/inscription",
  children = "Je m'inscris →",
  variant = "coral",
  className = "",
  size = "md",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-pill font-bold transition hover:scale-[1.03] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
