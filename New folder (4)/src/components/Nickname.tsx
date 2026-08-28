import { Reveal, Section } from "./shared";
import FallingPetals from "./Petals";

export default function Nickname() {
  return (
    <Section>
      <FallingPetals count={12} />

      <div className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-ruqaa text-gradient text-gradient-glow text-7xl leading-none md:text-[9rem]">
            روزي <span className="text-rose-300">🌹</span>
          </h2>
        </Reveal>

        <Reveal delay={0.7} className="mt-12">
          <p className="font-amiri text-2xl text-[#f3e7ea]/90 md:text-3xl">
            عارفة ليه بحب أناديكي روزي؟
          </p>
        </Reveal>

        <Reveal delay={2.1} className="mt-7 max-w-xl">
          <p className="font-amiri text-2xl leading-relaxed text-[#e4cdd6]/85 md:text-3xl">
            عشان حتى الاسم اللي بناديكي بيه
            <br />
            <span className="text-glow-soft text-rose-100">بقى مرتبط عندي بيكي إنتِ وبس.</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
