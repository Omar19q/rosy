import { motion } from "framer-motion";
import { Reveal, Section } from "./shared";

const cards = [
  { id: 1, text: "ضحكتك", heart: true },
  { id: 2, text: "طريقتك وإنتِ بتتكلمي", heart: false },
  { id: 3, text: "التفاصيل الصغيرة اللي محدش بياخد باله منها", heart: false },
  { id: 4, text: "الوقت اللي بنقضيه سوا", heart: false },
  { id: 5, text: "إنك إنتِ... روزي.", heart: false },
];

export default function LittleThings() {
  return (
    <Section>
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-ruqaa text-4xl text-[#f6e9ee] md:text-5xl">
            حاجات صغيرة بحبها فيكي <span className="text-rose-300">❤️</span>
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-wrap justify-center gap-5 md:gap-7">
          {cards.map((c, i) => (
            <Reveal key={c.id} delay={0.12 * i}>
              <div
                className="animate-floaty"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="glass-strong flex h-48 w-56 flex-col items-center justify-center gap-2 rounded-3xl px-7 text-center md:h-52 md:w-64"
                >
                  <p className="font-amiri text-2xl leading-relaxed text-rose-50">
                    {c.text}
                    {c.heart && <span className="text-rose-300"> ❤️</span>}
                  </p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
