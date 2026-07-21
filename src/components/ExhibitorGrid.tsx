import type { Exhibitor } from "@/lib/event";

function initials(name: string) {
  const clean = name.replace(/^Étudiants — /, "");
  const parts = clean.split(/[\s—–-]+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function displayName(name: string) {
  return name.replace(/^Étudiants — /, "Étudiants\n");
}

type Props = {
  items: Exhibitor[];
};

export function ExhibitorGrid({ items }: Props) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item) => {
        const label = item.name.replace(/^Étudiants — /, "Étudiants — ");
        return (
          <li
            key={item.id}
            className="flex min-h-[11rem] flex-col overflow-hidden rounded-md border border-saem-night/10 bg-white sm:min-h-[12.5rem]"
          >
            <div className="flex flex-1 items-center justify-center bg-white p-4">
              <span className="flex size-16 items-center justify-center rounded-full bg-saem-cream font-display text-lg font-extrabold text-saem-turquoise-deep sm:size-20 sm:text-xl">
                {initials(item.name)}
              </span>
            </div>
            <div className="flex min-h-[3.5rem] items-center justify-center bg-saem-night px-3 py-3 text-center">
              <p className="text-[0.7rem] leading-snug font-bold tracking-wide text-white uppercase sm:text-xs">
                {label}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
