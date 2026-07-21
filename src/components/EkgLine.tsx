export function EkgLine({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 80"
      className={`w-full text-saem-coral ${className}`}
      fill="none"
      aria-hidden
    >
      <path
        className="ekg-path"
        d="M0 40 H90 L110 40 L130 12 L155 68 L180 28 L200 40 H280 L300 40 L320 8 L345 72 L370 22 L390 40 H480 L500 40 L520 18 L540 62 L560 40 H640"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
