import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container, Section, Eyebrow } from "../ui/Section";
import { testimonials } from "../../lib/siteData";

export default function Testimonials() {
  return (
    <Section tone="ink" texture className="py-24 md:py-32">
      <Container>
        <Eyebrow className="text-volt">What Partners Say</Eyebrow>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-6"
            >
              <Quote size={28} className="text-volt" strokeWidth={2} />
              <blockquote className="text-lg leading-relaxed text-paper/85">
                {t.quote}
              </blockquote>
              <figcaption className="font-mono text-xs uppercase tracking-widest text-paper/40">
                {t.name} — {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
