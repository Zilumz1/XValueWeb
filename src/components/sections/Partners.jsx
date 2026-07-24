import { Container, Section, Eyebrow } from "../ui/Section";
import { partners } from "../../lib/siteData";

export default function Partners() {
  return (
    <Section tone="paper" className="py-20 md:py-24 border-y border-ink/10">
      <Container>
        <Eyebrow>Trusted Partners</Eyebrow>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-px bg-ink/10">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group bg-paper p-6 md:p-8 flex flex-col justify-center min-h-[120px] hover:bg-ink transition-colors duration-300"
            >
              <span className="font-display-x font-bold text-lg md:text-xl group-hover:text-paper transition-colors">
                {p.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate group-hover:text-red mt-1 transition-colors">
                {p.note}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
