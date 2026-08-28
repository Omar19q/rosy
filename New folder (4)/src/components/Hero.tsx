import { motion } from "framer-motion";
import { GlowHeart, HeartDivider, Reveal, Section } from "./shared";

export default function Hero() {
  return (
    <Section>
      {/* pulsing glowing heart behind the text */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[62vmin] w-[62vmin] -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(46px)" }}
      >
        <GlowHeart className="h-full w-full text-rose-600" glow="rgba(232,112,138,0.35)" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h1 className="font-ruqaa text-6xl leading-[1.15] md:text-8xl">
            <span className="text-gradient">روزي...</span>
            <br />
            <span className="text-glow text-[#f6e9ee]">أنا آسف.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.5} className="mt-10">
          <HeartDivider />
        </Reveal>

        <div className="mt-9 max-w-2xl space-y-5">
          <Reveal delay={0.7}>
            <p className="font-amiri text-2xl leading-relaxed text-[#f3e7ea]/85 md:text-[1.7rem]">
              مش جاي أبرر،
              <br />
              ومش جاي أقولك إنك فهمتيني غلط.
            </p>
          </Reveal>

          <Reveal delay={1.05}>
            <p className="font-amiri text-2xl leading-relaxed text-[#f3e7ea]/70 md:text-[1.7rem]">
              أنا جاي أقولك إني عارف إني زعلتك،
              <br />
              وده آخر شيء كنت أتمنى أكون سببه.
            </p>
          </Reveal>

          <Reveal delay={1.4}>
            <p className="font-amiri text-2xl leading-relaxed text-[#e4cdd6]/90 md:text-[1.7rem]">
              إنتِ مش شخص عادي بالنسبالي...
              <br />
              <span className="text-[#f0d5df]">
                وعشان كده زعلك مش حاجة أقدر أعديها كأنها ولا حاجة.
              </span>
            </p>
          </Reveal>
        </div>
      </div>

      {/* subtle scroll cue */}
      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
      >
        <span className="text-[11px] tracking-[0.3em] text-[#cbb7bf]/45">انزلي تحت</span>
        <motion.span
          animate={{ y: [0, 7, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block h-7 w-px bg-linear-to-b from-rose-300/70 to-transparent"
        />
      </motion.div>
    </Section>
  );
}
