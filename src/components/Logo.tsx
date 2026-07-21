import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  href?: string;
  className?: string;
};

export function Logo({ variant = "light", href = "/", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const text = isLight ? "text-white" : "text-saem-night";
  const baseline = isLight ? "text-white/85" : "text-saem-night/70";

  const content = (
    <span className={`inline-flex flex-col gap-1 ${className}`}>
      <svg
        viewBox="0 0 48 12"
        className="h-2.5 w-10 animate-pulse-line text-saem-coral"
        aria-hidden
      >
        <path
          d="M1 6 H10 L13 2 L17 10 L21 4 L24 6 H47"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`font-display text-[1.05rem] leading-tight font-extrabold tracking-tight sm:text-lg ${text}`}>
        Salon des{" "}
        <span className="rounded-md bg-saem-coral px-1.5 py-0.5 text-white">Études</span>{" "}
        de Médecine
      </span>
      <span className={`text-[0.62rem] font-semibold tracking-[0.22em] uppercase ${baseline}`}>
        En France & à l&apos;étranger
      </span>
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="group inline-block focus-visible:outline-none">
      {content}
    </Link>
  );
}
