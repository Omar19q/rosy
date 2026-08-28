import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal, Section } from "./shared";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-[1px]" fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1.2" />
      <rect x="14" y="5" width="4" height="14" rx="1.2" />
    </svg>
  );
}

export default function Song() {
  const [playing, setPlaying] = useState(false);
  const [fav, setFav] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 100 / 300));
    }, 100);
    return () => clearInterval(id);
  }, [playing]);

  const scrollNext = () =>
    document.getElementById("apology")?.scrollIntoView({ behavior: "smooth" });

  return (
    <Section>
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-ruqaa text-5xl text-gradient text-gradient-glow md:text-6xl" dir="ltr">
            Love Song <span className="text-rose-300">🎵</span>
          </h2>
        </Reveal>

        <Reveal delay={0.35} className="mt-6 max-w-lg">
          <p className="font-amiri text-2xl leading-relaxed text-[#e4cdd6]/85 md:text-[1.7rem]">
            الأغنية اللي كل ما أسمعها
            <br />
            بحس إنها واخدة جزء من حكايتنا.
          </p>
        </Reveal>

        {/* player */}
        <Reveal delay={0.25} className="mt-12 w-full max-w-sm">
          <div className="glass-strong rounded-[2rem] p-8">
            {/* disc + glow */}
            <div className="relative mx-auto flex h-44 w-44 items-center justify-center">
              <motion.div
                aria-hidden="true"
                className="absolute -inset-6 rounded-full"
                animate={
                  playing
                    ? { scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }
                    : { scale: 1, opacity: 0.25 }
                }
                transition={
                  playing
                    ? { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                    : { duration: 0.6 }
                }
                style={{
                  background: "radial-gradient(circle, rgba(232,112,138,0.28), transparent 70%)",
                  filter: "blur(10px)",
                }}
              />
              <div
                className={`relative h-44 w-44 rounded-full ${
                  playing ? "animate-spin-slow" : ""
                }`}
                style={{
                  background:
                    "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0 1.5px, #170b11 1.5px 4.5px)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px -12px rgba(0,0,0,0.8)",
                }}
              >
                {/* sheen */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 210deg, transparent 0deg, rgba(255,255,255,0.07) 40deg, transparent 90deg, transparent 180deg, rgba(232,112,138,0.08) 220deg, transparent 270deg)",
                  }}
                />
                {/* center label */}
                <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-linear-to-br from-rose-500/80 to-[#4a0e1e]/90 text-white">
                  <span className="text-[0.55rem] font-medium tracking-wider" dir="ltr">
                    LOVE SONG
                  </span>
                  <span className="mt-0.5 text-rose-100">♥</span>
                </div>
              </div>
            </div>

            {/* title + visualizer */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-start">
                <p className="font-medium text-[#f6e9ee]" dir="ltr">
                  Love Song
                </p>
                <p className="text-sm text-[#cbb7bf]/70">أغنية حكايتنا</p>
              </div>
              <div className="flex h-7 items-end gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-rose-300/70"
                    style={{
                      height: "100%",
                      transformOrigin: "bottom",
                      transform: "scaleY(0.3)",
                      animation: `eq ${0.8 + i * 0.15}s ease-in-out ${i * 0.12}s infinite`,
                      animationPlayState: playing ? "running" : "paused",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* progress */}
            <div className="relative mt-5 h-1 w-full rounded-full bg-white/10">
              <div
                className="absolute inset-y-0 right-0 rounded-full bg-linear-to-l from-rose-500/80 to-rose-300/80 transition-[width] duration-200 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* controls */}
            <div className="mt-6 flex items-center justify-center gap-8">
              <button
                onClick={() => setFav((v) => !v)}
                aria-label="المفضلة"
                className="transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill={fav ? "#e8708a" : "none"} stroke={fav ? "#e8708a" : "#cbb7bf"} strokeWidth={1.8}>
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={() => setPlaying((v) => !v)}
                aria-label={playing ? "إيقاف" : "تشغيل"}
                className="btn-rose h-16 w-16 rounded-full text-white"
              >
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>

              <span className="w-6" aria-hidden="true" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <button onClick={scrollNext} className="btn-ghost rounded-full px-9 py-3.5 text-lg">
            اسمعيها وإنتِ بتكملي ❤️
          </button>
        </Reveal>
      </div>
    </Section>
  );
}
