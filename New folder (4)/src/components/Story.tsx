import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal, Section } from "./shared";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Story() {
  const [remember, setRemember] = useState(false);

  return (
    <Section>
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <Reveal>
          <h2 className="font-ruqaa text-4xl leading-relaxed md:text-5xl">
            <span className="text-[#f6e9ee]">بس قبل ما نكمل...</span>
            <br />
            <span className="text-gradient text-gradient-glow">تعالي نفتكر إحنا بدأنا إزاي ❤️</span>
          </h2>
        </Reveal>

        {/* horizontal timeline */}
        <div className="relative mt-16 w-full px-2 md:mt-24">
          <div className="relative flex h-44 items-center justify-center md:h-56">
            {/* timeline line */}
            <div className="absolute inset-x-4 top-1/2 h-px bg-linear-to-r from-transparent via-rose-400/40 to-transparent" />
            <span className="absolute left-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-rose-300/30" />
            <span className="absolute right-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-rose-300/30" />

            {/* soft glow behind the date */}
            <motion.div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-72 md:w-72"
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2, ease }}
              style={{
                background:
                  "radial-gradient(circle, rgba(232,112,138,0.28) 0%, rgba(232,112,138,0.06) 55%, transparent 75%)",
              }}
            />

            {/* the date — revealed slowly like a memory */}
            <motion.div
              className="relative z-10 flex flex-col items-center gap-3"
              initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.9, ease }}
            >
              <span dir="ltr" className="font-ruqaa text-gradient text-gradient-glow text-6xl md:text-8xl">
                12 / 3 <span className="text-rose-300">❤️</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-rose-300 shadow-[0_0_14px_3px_rgba(232,112,138,0.7)]" />
            </motion.div>
          </div>
        </div>

        <div className="mt-4 space-y-5">
          <Reveal delay={0.2}>
            <p className="font-amiri text-2xl text-[#f3e7ea]/90 md:text-3xl">اليوم اللي اعترفتلك فيه.</p>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mx-auto max-w-xl font-amiri text-xl leading-relaxed text-[#e4cdd6]/75 md:text-2xl">
              يمكن اليوم ده بالنسبالي مش مجرد تاريخ...
              <br />
              <span className="text-[#f0d5df]/90">
                ده اليوم اللي أخدت فيه خطوة غيرت حاجات كتير في حياتي.
              </span>
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex min-h-16 flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!remember ? (
              <motion.button
                key="ask"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.9, ease }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                onClick={() => setRemember(true)}
                className="btn-ghost rounded-full px-9 py-3.5 text-lg"
              >
                فاكرة؟
              </motion.button>
            ) : (
              <motion.p
                key="answer"
                initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease }}
                className="font-amiri text-2xl text-glow-soft text-rose-100 md:text-3xl"
              >
                أنا عمري ما هنسى اليوم ده.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
