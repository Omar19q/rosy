import { HeartDivider, Reveal, Section } from "./shared";

export default function FinalScreen({ revealed }: { revealed: boolean }) {
  return (
    <Section id="final">
      {revealed && (
        <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
          <Reveal>
            <p dir="ltr" className="font-ruqaa text-gradient text-gradient-glow text-6xl md:text-7xl">
              12 / 3 <span className="text-rose-300">❤️</span>
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-amiri text-2xl text-[#f3e7ea]/90 md:text-3xl">
              اليوم اللي بدأت فيه حكايتنا.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="font-amiri text-xl leading-relaxed text-[#e4cdd6]/80 md:text-2xl">
              ويارب ما يكونش يوم من الأيام
              <br />
              اللي نزعل فيها من بعض هو اللي يحدد حكايتنا.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-6">
            <HeartDivider />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-ruqaa text-gradient text-gradient-glow text-5xl md:text-7xl">
              بحبك يا روزي ❤️
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <p className="font-amiri text-2xl text-[#e4cdd6]/85 md:text-3xl">وآسف.</p>
          </Reveal>

          <Reveal delay={0.9}>
            <p className="font-amiri text-xl text-[#cbb7bf]/70 md:text-2xl">— عمر</p>
          </Reveal>

          <Reveal delay={1.4} className="mt-16">
            <p className="text-xs leading-relaxed text-[#cbb7bf]/45 md:text-sm">
              لو ضحكتي ولو ابتسامة صغيرة...
              <br />
              اعتبري الموقع نجح.
            </p>
          </Reveal>
        </div>
      )}
    </Section>
  );
}
