import { NavLink } from "react-router-dom";
import { BadgeDollarSign, Sparkles, Sun, Package, Wrench, Home } from "lucide-react";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import Button from "../components/ui/Button";
import { catalog } from "../lib/siteData";

const iconMap = {
  Sun,
  Package,
  Wrench,
  Home,
};

export default function Products() {
  return (
    <>
      <Section tone="ink" texture className="pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <Eyebrow className="text-red">Full Catalogue</Eyebrow>
          <h1 className="font-display uppercase text-5xl md:text-7xl mt-6 leading-[0.95]">
            Products
          </h1>
          <p className="mt-6 max-w-xl text-paper/70 leading-relaxed">
            Solar &amp; energy, lighting, power tools and interiors — all supplied
            through one account, one delivery network.
          </p>
        </Container>
      </Section>

      {catalog.map((cat, i) => {
        const Icon = iconMap[cat.icon] || Package;
        const sectionId = cat.category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

        return (
          <Section
            key={cat.category}
            id={sectionId}
            tone={i % 2 === 0 ? "paper" : "ink"}
            texture={i % 2 !== 0}
            className="py-20 md:py-28 border-b border-ink/10 scroll-mt-28"
          >
            <Container>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className={`inline-flex px-4 py-2 mb-6 font-mono text-[11px] uppercase tracking-[0.25em] ${i % 2 === 0 ? "bg-red/10 text-red" : "bg-paper/10 text-paper"}`}>
                      {cat.category}
                    </div>
                    <div className="flex items-start gap-3">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${i % 2 === 0 ? "bg-red text-paper" : "bg-paper text-ink"}`}>
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h2 className={`font-display-x font-bold text-2xl ${i % 2 === 0 ? "text-ink" : "text-paper"}`}>
                          {cat.tag}
                        </h2>
                        <p className={`mt-2 text-sm leading-relaxed ${i % 2 === 0 ? "text-slate" : "text-paper/70"}`}>
                          {cat.caption}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] ${i % 2 === 0 ? "border-ink/15 text-ink" : "border-paper/20 text-paper"}`}>
                      <BadgeDollarSign size={14} />
                      {cat.priceLabel}
                    </div>
                    <Button as={NavLink} to={cat.ctaHref} variant={i % 2 === 0 ? "red" : "ink"} size="md">
                      {cat.ctaLabel}
                    </Button>
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_18px_45px_rgba(4,13,17,0.10)]">
                    <img
                      src={cat.image}
                      alt={`${cat.category} highlight`}
                      className="h-full min-h-[280px] w-full object-cover"
                    />
                  </div>

                  <div className={`rounded-[2rem] border p-8 md:p-10 ${i % 2 === 0 ? "bg-ink text-paper border-ink" : "bg-paper text-ink border-ink/15"}`}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-current/15 px-3 py-2 text-[11px] uppercase tracking-[0.2em]">
                      <Sparkles size={14} />
                      Trusted by trade and project teams
                    </div>
                    <h3 className="font-display-x font-bold text-2xl mt-5 leading-tight">
                      Flexible supply for fast-moving projects
                    </h3>
                    <p className={`mt-4 text-sm leading-relaxed ${i % 2 === 0 ? "text-paper/70" : "text-slate"}`}>
                      Streamlined sourcing, reliable delivery and pricing support for everything from one-off orders to full-site rollouts.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button as={NavLink} to="/quote" variant={i % 2 === 0 ? "red" : "ink"} size="md">
                        Request pricing
                      </Button>
                      <Button as={NavLink} to="/contact" variant="outline" size="md" className={i % 2 === 0 ? "text-paper" : "text-ink"}>
                        Talk to a specialist
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {cat.groups.map((group) => (
                    <div key={group.name}>
                      <h3 className="font-display-x font-bold text-lg mb-4">
                        {group.name}
                      </h3>
                      <ul className="flex flex-col gap-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className={`text-sm leading-relaxed pb-2 border-b ${
                              i % 2 === 0 ? "border-ink/10" : "border-paper/10 text-paper/75"
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section tone="red" texture className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="font-display uppercase text-3xl md:text-5xl leading-tight max-w-xl">
              Need pricing on a specific order?
            </h2>
            <Button as={NavLink} to="/quote" variant="ink" size="lg">
              Request a Quote
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
