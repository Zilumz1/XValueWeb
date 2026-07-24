import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, BatteryCharging, Wrench, Zap } from "lucide-react";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import Button from "../components/ui/Button";

const tools = [
  {
    title: "Brushless Angle Grinder",
    label: "Cordless / 20V",
    description: "Fast cutting and grinding for metal, masonry and workshop jobs.",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hammer Drill",
    label: "Corded / Site Ready",
    description: "Heavy-duty drilling for anchors, fixings and structural work.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Impact Driver",
    label: "Battery Pack",
    description: "Quick fastening for timber, framing and trade applications.",
    image:
      "https://images.unsplash.com/photo-1592878904946-3036f6d4f0f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tool Battery Kit",
    label: "Power / Charge",
    description: "High-output batteries and chargers for uninterrupted site use.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Tools() {
  return (
    <>
      <Section tone="ink" texture className="pt-40 pb-24 md:pt-48 md:pb-28">
        <Container>
          <Eyebrow className="text-red">Power Tools</Eyebrow>
          <h1 className="font-display uppercase text-5xl md:text-7xl mt-6 leading-[0.95] max-w-3xl">
            Tools built for
            <br />
            fast-moving crews.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/75">
            Browse the trade-ready range with clear labels, practical specs and quick access to quotes for your next job.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button as={NavLink} to="/quote" variant="red" size="lg">
              Request pricing
            </Button>
            <Button as={NavLink} to="/contact" variant="outline" size="lg" className="border-paper/30 text-paper hover:bg-paper hover:text-ink">
              Talk to sales
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group overflow-hidden rounded-[2rem] border border-ink/10 bg-paper shadow-[0_16px_45px_rgba(4,13,17,0.08)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 bg-paper/15 backdrop-blur-sm">
                    <Wrench size={18} strokeWidth={2} className="text-paper" />
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-red/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-red">
                    <Zap size={13} strokeWidth={2} />
                    {tool.label}
                  </div>
                  <h2 className="mt-4 font-display-x font-bold text-2xl leading-tight text-ink">
                    {tool.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {tool.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between rounded-[1.1rem] border border-ink/10 bg-ink/5 px-4 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate">
                      Trade-ready
                    </span>
                    <Button as={NavLink} to="/quote" variant="ink" size="sm" arrow={false}>
                      Ask for stock
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="red" texture className="py-20 md:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <Eyebrow className="text-paper/70">Need a bundled order?</Eyebrow>
              <h2 className="font-display uppercase text-3xl md:text-4xl mt-4 leading-tight">
                Bring the tools, batteries and support together in one quote.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button as={NavLink} to="/quote" variant="ink" size="lg">
                Get a quote
              </Button>
              <Button as={NavLink} to="/contact" variant="outline" size="lg" className="border-paper/35 text-paper hover:bg-paper hover:text-ink">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
