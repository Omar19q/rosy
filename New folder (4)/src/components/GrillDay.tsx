import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { GlowHeart, Reveal, Section } from "./shared";

export default function GrillDay() {
  const [open, setOpen] = useState(false);

  const embers = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        ex: (Math.random() - 0.5) * 140,
        ed: 7 + Math.random() * 8,
        edelay: Math.random() * 9,
        eo: 0.4 + Math.random() * 0.5,
      })),
    [],
  );

  return (
    <Section>
      {/* warm evening glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 105%, rgba(214,138,60,0.16) 0%, transparent 65%)",
        }}
      />
      {/* rising embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {embers.map((e) => (
          <span
            key={e.id}
            className="ember"
            style={{
              left: `${e.left}%`,
              width: `${e.size}px`,
              height: `${e.size}px`,
              ["--ex" as string]: `${e.ex}px`,
              ["--ed" as string]: `${e.ed}s`,
              ["--edelay" as string]: `${e.edelay}s`,
              ["--eo" as string]: e.eo,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-ruqaa text-4xl text-[#f6e9ee] md:text-5xl">
            فاكرة يوم الشوي؟ <span className="text-rose-300">❤️</span>
          </h2>
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-5">
          <Reveal delay={0.25}>
            <p className="font-amiri text-2xl text-[#f3e7ea]/85 md:text-[1.7rem]">
              اليوم ده من الحاجات اللي بحب أفتكرها...
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="font-amiri text-xl leading-relaxed text-[#e4cdd6]/80 md:text-2xl">
              قعدتنا سوا،
              <br />
              الكلام اللي مكنش ليه نهاية،
              <br />
              والإحساس البسيط إننا قاعدين سوا وخلاص.
            </p>
          </Reveal>

          <Reveal delay={0.95}>
            <p className="font-amiri text-xl leading-relaxed text-[#e4cdd6]/75 md:text-2xl">
              يمكن بالنسبة لأي حد كان يوم عادي...
              <br />
              <span className="text-[#f0d5df]/90">
                بس بالنسبالي، كان من الأيام اللي كنت مبسوط فيها إنك موجودة جنبي.
              </span>
            </p>
          </Reveal>
        </div>

        {/* interactive memory card */}
        <Reveal delay={0.3} className="perspective-1200 mt-14 w-full max-w-sm">
          <motion.button
            onClick={() => setOpen((v) => !v)}
            className="preserve-3d relative block h-64 w-full cursor-pointer"
            animate={{ rotateY: open ? 180 : 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            aria-label="افتحي الذكرى"
          >
            {/* front */}
            <div className="backface-hidden glass-strong absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-3xl p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/15">
                <GlowHeart className="h-8 w-8 text-rose-300" glow="rgba(232,112,138,0.5)" />
              </span>
              <p className="font-amiri text-2xl text-rose-100">افتحي الذكرى</p>
              <p className="text-sm text-[#cbb7bf]/60">اضغطي على الكارت ❤️</p>
            </div>
            {/* back */}
            <div
              className="backface-hidden glass-strong absolute inset-0 flex items-center justify-center rounded-3xl p-8"
              style={{ transform: "rotateY(180deg)" }}
            >
              <p className="font-amiri text-2xl leading-relaxed text-rose-100">
                نفسي نعيش أيام كتير شبه اليوم ده...
                <br />
                <span className="text-gradient">بس من غير زعل ❤️</span>
              </p>
            </div>
          </motion.button>
        </Reveal>
      </div>
    </Section>
  );
}
