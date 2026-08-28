import { Reveal, Section } from "./shared";

export default function RealMessage() {
  return (
    <Section>
      <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <Reveal>
          <p className="font-amiri text-3xl text-[#f6e9ee] md:text-4xl">أنا عمر.</p>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="font-amiri text-2xl text-[#e4cdd6]/85 md:text-3xl">وممكن أكون غلطت.</p>
        </Reveal>

        <Reveal delay={1}>
          <p className="font-amiri text-2xl text-[#e4cdd6]/85 md:text-3xl">وممكن أكون زعلتك.</p>
        </Reveal>

        <Reveal delay={1.5}>
          <p className="font-amiri text-2xl leading-relaxed text-[#e4cdd6]/85 md:text-3xl">
            بس في حاجة واحدة عمري ما كنت عايز أشككك فيها...
          </p>
        </Reveal>

        <Reveal delay={3.1} className="mt-10">
          <p className="font-ruqaa text-gradient text-gradient-glow text-5xl leading-tight md:text-7xl">
            إنك مهمة عندي.
          </p>
        </Reveal>

        <Reveal delay={3.8}>
          <p className="font-amiri text-2xl text-[#e4cdd6]/85 md:text-3xl">
            أكتر مما الكلام ده كله يقدر يوصف.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
