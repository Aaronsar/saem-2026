type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden hero-mesh noise-overlay pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        className="pointer-events-none absolute -right-[8%] top-[20%] size-[22rem] animate-blob bg-white/10 blur-2xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.22em] text-saem-yellow uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold leading-[1.02] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-saem-cream to-transparent" />
    </section>
  );
}
