import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GlowHeart, Section } from "./shared";

type Burst = {
  id: number;
  angle: number;
  dist: number;
  size: number;
  dur: number;
  rotate: number;
  delay: number;
};

export default function HeartInteractive() {
  const [clicked, setClicked] = useState(false);
  const [burst, setBurst] = useState<Burst[]>([]);

  const handleClick = () => {
    if (clicked) return;
    setBurst(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        angle: Math.random() * Math.PI * 2,
        dist: 70 + Math.random() * 170,
        size: 10 + Math.random() * 17,
        dur: 0.9 + Math.random() * 1,
        rotate: (Math.random() - 0.5) * 220,
        delay: Math.random() * 0.15,
      })),
    );
    setClicked(true);
  };

  return (
    <Section>
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-72 w-72 items-center justify-center md:h-80 md:w-80">
          {/* soft glow behind the heart */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "radial-gradient(circle, rgba(232,112,138,0.3), transparent 70%)",
              filter: "blur(14px)",
            }}
          />

          {/* burst of tiny hearts */}
          {burst.map((b) => (
            <motion.span
              key={b.id}
              className="pointer-events-none absolute left-1/2 top-1/2 z-0"
              initial={{ x: 0, y: 0, scale: 0.4, opacity: 1, rotate: 0 }}
              animate={{
                x: Math.cos(b.angle) * b.dist,
                y: Math.sin(b.angle) * b.dist,
                scale: [0.4, 1.15, 0.55],
                opacity: [1, 1, 0],
                rotate: b.rotate,
              }}
              transition={{ duration: b.dur, delay: b.delay, ease: "easeOut" }}
            >
              <GlowHeart
                className="text-rose-300"
                style={{ width: b.size, height: b.size }}
                glow="rgba(232,112,138,0.6)"
              />
            </motion.span>
          ))}

          {/* the heart */}
          <motion.button
            onClick={handleClick}
            aria-label="اضغطي على قلبي"
            className="relative z-10 cursor-pointer outline-none"
            animate={clicked ? { scale: [1, 1.18, 1] } : { scale: [1, 1.05, 1] }}
            transition={
              clicked
                ? { duration: 0.7, ease: "easeOut" }
                : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
            }
            whileHover={{ scale: 1.06 }}
          >
            <GlowHeart className="h-40 w-40 text-rose-500 md:h-48 md:w-48" glow="rgba(232,112,138,0.7)" />
          </motion.button>
        </div>

        <div className="mt-8 flex min-h-28 flex-col items-center gap-5">
          {!clicked ? (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-amiri text-2xl text-[#f3e7ea]/90 md:text-3xl"
            >
              اضغطي على قلبي <span className="text-rose-300">❤️</span>
            </motion.p>
          ) : (
            <AnimatePresence>
              <motion.div
                key="reveal"
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-col items-center gap-5"
              >
                <p className="font-amiri text-2xl leading-relaxed text-[#f3e7ea]/90 md:text-3xl">
                  شايفة؟
                  <br />
                  <span className="text-gradient">لسه في مكان كبير أوي ليكي هنا.</span>
                </p>
                <p className="font-amiri text-2xl text-glow-soft text-rose-100 md:text-3xl">
                  ومش ناوي أخليه مكان زعلان.
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </Section>
  );
}
