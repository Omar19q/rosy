import { motion } from "framer-motion";
import { Section, fadeLine, staggerContainer } from "./shared";

export default function Apology() {
  return (
    <Section id="apology">
      {/* soft spotlight from above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 42% at 50% 0%, rgba(246,206,220,0.13), transparent 68%)",
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 flex max-w-2xl flex-col items-center gap-8 text-center"
      >
        <motion.p
          variants={fadeLine}
          className="font-amiri text-2xl leading-relaxed text-[#f6e9ee] md:text-4xl"
        >
          <span className="text-gradient">روزي...</span>
          <br />
          أنا مش بطلب منك تنسي اللي حصل.
        </motion.p>

        <motion.p variants={fadeLine} className="font-amiri text-2xl text-[#e4cdd6]/85 md:text-3xl">
          ومش بطلب منك تسامحيني عشان أنا طلبت.
        </motion.p>

        <motion.p variants={fadeLine} className="font-amiri text-2xl leading-relaxed text-[#e4cdd6]/85 md:text-3xl">
          أنا بس عايزك تعرفي
          <br />
          إن زعلك فارق معايا.
        </motion.p>

        <motion.p variants={fadeLine} className="font-amiri text-2xl leading-relaxed text-[#e4cdd6]/85 md:text-3xl">
          ولو في حاجة أقدر أعملها عشان أصلح اللي حصل...
          <br />
          هعملها.
        </motion.p>

        <motion.p variants={fadeLine} className="font-amiri text-glow-soft text-3xl text-rose-100 md:text-4xl">
          لأنك تستاهلي مني أحسن من كده.
        </motion.p>
      </motion.div>
    </Section>
  );
}
