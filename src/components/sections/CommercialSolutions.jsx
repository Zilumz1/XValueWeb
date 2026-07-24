import { motion } from "framer-motion";
import { Container, Section, Eyebrow } from "../ui/Section";
import { commercialSolutions } from "../../lib/siteData";

export default function CommercialSolutions() {
  return (
    <Section tone="ink" className="py-24 md:py-32">
      <Container>
        <div className="mb-14">
          <Eyebrow className="text-paper/60">For Business</Eyebrow>
          <h2 className="font-display uppercase text-4xl md:text-6xl mt-4 leading-[0.95] max-w-2xl">
            Commercial &amp; utility solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
          {commercialSolutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-ink p-8 flex flex-col gap-4 min-h-[220px] justify-between"
            >
              <span className="font-mono text-xs text-red">0{i + 1}</span>
              <div>
                <h3 className="font-display-x font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-paper/70 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
