import { useMemo } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  px: number;
  pr: number;
  pd: number;
  pdelay: number;
  pa: number;
};

/** A localized layer of gently falling rose petals */
export default function FallingPetals({
  count = 10,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 12,
        px: (Math.random() - 0.5) * 170,
        pr: (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360),
        pd: 11 + Math.random() * 9,
        pdelay: Math.random() * 16,
        pa: 0.32 + Math.random() * 0.42,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.35}px`,
            ["--px" as string]: `${p.px}px`,
            ["--pr" as string]: `${p.pr}deg`,
            ["--pd" as string]: `${p.pd}s`,
            ["--pdelay" as string]: `${p.pdelay}s`,
            ["--pa" as string]: p.pa,
          }}
        />
      ))}
    </div>
  );
}
