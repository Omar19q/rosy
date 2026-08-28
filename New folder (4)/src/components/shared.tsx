import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "../utils/cn";

const ease = [0.22, 1, 0.36, 1] as const;

/** Cinematic section wrapper */
export function Section({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-24",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Fade-up reveal when scrolled into view */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Line-by-line text reveal (used for slow emotional sequences) */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.45, delayChildren: 0.1 },
  },
};

export const fadeLine: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease },
  },
};

/** A soft glowing heart */
export function GlowHeart({
  className,
  style,
  glow = "rgba(232,112,138,0.55)",
}: {
  className?: string;
  style?: CSSProperties;
  glow?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={{ filter: `drop-shadow(0 0 14px ${glow})`, ...style }}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

/** Small divider: heart between two thin lines */
export function HeartDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="h-px w-10 bg-linear-to-l from-rose-400/40 to-transparent" />
      <GlowHeart className="h-3 w-3 text-rose-300/80" glow="rgba(232,112,138,0.4)" />
      <span className="h-px w-10 bg-linear-to-r from-rose-400/40 to-transparent" />
    </div>
  );
}
