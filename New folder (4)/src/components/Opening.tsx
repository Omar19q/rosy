import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  o: number;
  d: number;
  delay: number;
};

export default function Opening({ onEnter }: { onEnter: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2100),
      setTimeout(() => setStep(2), 4700),
      setTimeout(() => setStep(3), 7100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.4,
        o: 0.35 + Math.random() * 0.6,
        d: 5 + Math.random() * 6,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-6"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 40%, #0b0710 0%, #060409 55%, #040307 100%)",
      }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
      transition={{ duration: 1.1, ease }}
    >
      {/* stars slowly appearing */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {stars.map((s) => (
          <span
            key={s.id}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              boxShadow: s.size > 1.8 ? `0 0 8px 1px rgba(255,230,240,0.5)` : undefined,
              ["--o" as string]: s.o,
              ["--d" as string]: `${s.d}s`,
              ["--delay" as string]: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex max-w-2xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, filter: "blur(14px)", letterSpacing: "0.3em" }}
          animate={{ opacity: 1, filter: "blur(0px)", letterSpacing: "0.08em" }}
          transition={{ duration: 1.8, delay: 0.5, ease }}
          className="font-ruqaa text-gradient text-gradient-glow text-6xl leading-tight md:text-7xl"
        >
          لروزي...
        </motion.p>

        {step >= 1 && (
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease }}
            className="mt-9 max-w-xl font-amiri text-2xl leading-relaxed text-[#f3e7ea]/90 md:text-3xl"
          >
            عارف إنك زعلانة مني.
            <br />
            وعارف إن الكلام لوحده مش كفاية.
          </motion.p>
        )}

        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.3, ease }}
            className="mt-8 max-w-xl font-amiri text-xl leading-relaxed text-[#e4cdd6]/80 md:text-2xl"
          >
            بس قبل ما تقفلي الصفحة...
            <br />
            ممكن تديني دقيقتين من قلبك؟{" "}
            <span className="text-rose-300">❤️</span>
          </motion.p>
        )}

        {step >= 3 && (
          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            onClick={onEnter}
            className="btn-rose mt-12 rounded-full px-10 py-4 text-lg font-medium tracking-wide"
          >
            دخلي معايا...
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
