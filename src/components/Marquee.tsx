type Props = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className = "" }: Props) {
  const row = [...items, ...items];

  return (
    <div className={`overflow-hidden border-y border-saem-night/10 bg-saem-yellow ${className}`}>
      <div className="marquee-track py-3.5">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 inline-flex items-center gap-6 font-display text-sm font-extrabold tracking-wide text-saem-night uppercase sm:text-base"
          >
            {item}
            <span className="inline-block size-2 rounded-full bg-saem-coral" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
