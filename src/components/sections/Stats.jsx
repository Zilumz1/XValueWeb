import { motion } from "framer-motion";
import { Container, Section } from "../ui/Section";
import { stats } from "../../lib/siteData";

export default function Stats() {
  return (
    <Section tone="paper" className="py-16 md:py-20 border-b border-ink/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="font-display text-4xl md:text-5xl">
                {s.value}
                <span className="text-red">{s.unit}</span>
              </div>
              <p className="mt-2 text-xs md:text-sm text-slate leading-snug max-w-[16ch]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
