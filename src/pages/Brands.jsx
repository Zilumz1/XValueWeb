import { Sparkles, ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import { brandPartners } from "../lib/siteData";

const tones = ["red", "ink", "redDeep", "paper"];
const toneClasses = {
  red: "bg-red text-paper",
  ink: "bg-ink text-paper",
  redDeep: "bg-redDeep text-paper",
  paper: "bg-paper text-ink border border-ink/15",
};

export default function Brands() {
  return (
    <>
      <Section tone="ink" texture className="pt-40 pb-24 md:pt-48 md:pb-32">
        <Container>
          <Eyebrow className="text-red">Who We Supply With</Eyebrow>
          <h1 className="font-display uppercase text-5xl md:text-7xl mt-6 leading-[0.95]">
            Brands
          </h1>
          <p className="mt-6 max-w-2xl text-paper/70 leading-relaxed text-lg">
            The manufacturers and partners behind every product XValue stocks — chosen for performance, reliability and standout value.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <div className="rounded-full border border-paper/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/70">
              Trusted supply partnerships
            </div>
            <div className="rounded-full border border-paper/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-paper/70">
              Covering solar, tools & interiors
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="py-24 md:py-32">
        <Container>
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Featured Partners</Eyebrow>
              <h2 className="font-display uppercase text-3xl md:text-4xl mt-3 leading-tight">
                Built on strong manufacturer relationships.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-slate">
              Each brand is selected to support premium product availability, dependable stock flow and a polished customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandPartners.map((b, i) => (
              <div
                key={b.name}
                className={`group relative overflow-hidden rounded-[1.75rem] p-8 md:p-10 min-h-[240px] flex flex-col justify-between shadow-[0_18px_45px_rgba(4,13,17,0.08)] transition-transform duration-300 hover:-translate-y-1 ${toneClasses[tones[i % tones.length]]}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-70" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-70">
                      {b.category}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 bg-paper/10">
                      <Sparkles size={16} strokeWidth={2} />
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display uppercase text-2xl md:text-3xl mb-3">
                      {b.name}
                    </h3>
                    <p className="text-sm opacity-80 leading-relaxed max-w-md">
                      {b.note}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] opacity-80">
                  <span>View partner range</span>
                  <ArrowUpRight size={14} strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
