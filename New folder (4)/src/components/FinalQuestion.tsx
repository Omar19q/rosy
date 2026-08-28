import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FallingPetals from "./Petals";
import { GlowHeart, Section } from "./shared";

type Choice = "yes" | "wait";

export default function FinalQuestion({ onChoose }: { onChoose: (c: Choice) => void }) {
  const [choice, setChoice] = useState<Choice | null>(null);

  const choose = (c: Choice) => {
    setChoice(c);
    onChoose(c);
  };

  const goFinal = () => document.getElementById("final")?.scrollIntoView({ behavior: "smooth" });

  return (
    <Section>
      <FallingPetals count={8} />

      {/* faint glowing heart */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.08, 1], opacity: [0.07, 0.15, 0.07] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(30px)" }}
      >
        <GlowHeart className="h-[60vmin] w-[60vmin] text-rose-600" glow="rgba(232,112,138,0.3)" />
      </motion.div>

      <div className="relative z-10 flex min-h-[70vh] w-full max-w-2xl flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {choice === null ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0, y: -22, filter: "blur(8px)" }}
              className="flex flex-col items-center"
            >
              <h2 className="font-ruqaa text-gradient text-6xl md:text-7xl">روزي...</h2>
              <p className="mt-8 font-amiri text-2xl text-[#f3e7ea]/90 md:text-3xl">
                لسه زعلانة مني؟ <span className="text-rose-300">🥺</span>
              </p>
              <p className="mt-3 font-amiri text-xl text-[#e4cdd6]/75 md:text-2xl">
                طب ممكن نبدأ من جديد؟
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                <button
                  onClick={() => choose("yes")}
                  className="btn-rose rounded-full px-10 py-4 text-lg font-medium"
                >
                  نبدأ ❤️
                </button>
                <button
                  onClick={() => choose("wait")}
                  className="btn-ghost rounded-full px-8 py-4 text-lg"
                >
                  لسه محتاجة وقت...
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center"
            >
              {choice === "yes" ? (
                <>
                  <h2 className="font-ruqaa text-gradient text-gradient-glow text-5xl md:text-7xl">
                    وعد؟ ❤️
                  </h2>
                  <p className="mt-8 font-amiri text-2xl leading-relaxed text-[#f3e7ea]/90 md:text-3xl">
                    المرة دي...
                    <br />
                    هخلي أفعالي هي اللي تتكلم.
                  </p>
                  <p className="mt-4 font-amiri text-2xl text-rose-100 md:text-3xl">
                    تعالي نرجع نضحك.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="font-ruqaa text-gradient text-gradient-glow text-5xl md:text-6xl">
                    خدي وقتك يا روزي ❤️
                  </h2>
                  <p className="mt-8 font-amiri text-2xl leading-relaxed text-[#f3e7ea]/90 md:text-3xl">
                    أنا مش مستعجل على مسامحتك...
                    <br />
                    المهم إنك تكوني كويسة.
                  </p>
                  <p className="mt-4 font-amiri text-2xl text-rose-100 md:text-3xl">وهفضل هنا.</p>
                </>
              )}

              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.5 }}
                onClick={goFinal}
                className="btn-ghost mt-12 rounded-full px-9 py-3.5 text-lg"
              >
                كملي ❤️
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
