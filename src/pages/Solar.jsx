import { NavLink } from "react-router-dom";
import { Sun, BatteryCharging, Zap } from "lucide-react";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import Button from "../components/ui/Button";
import { featuredProducts, commercialSolutions } from "../lib/siteData";

const pillars = [
  {
    icon: Sun,
    title: "PV Panels",
    copy: "Jinko P-Type and NEO N-Type mono-facial modules from 480W to 575W.",
  },
  {
    icon: Zap,
    title: "Hybrid Inverters",
    copy: "MUST and Inhenergy inverter ranges sized from 3kW single-phase to 5kW hybrid.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Storage",
    copy: "Ritar lithium batteries from 100Ah cells up to 100kW OPzV ESS configurations.",
  },
];

export default function Solar() {
  const solarProducts = featuredProducts;

  return (
    <>
      <section className="relative w-full pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden bg-ink text-paper grain">
        <div
          className="absolute inset-0 photo-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1756232973381-5ed87773a908?auto=format&fit=crop&w=2400&q=80)",
          }}
          role="img"
          aria-label="Aerial view of a large solar panel farm"
        />
        <div className="absolute inset-0 photo-scrim-red" />
        <div className="scan-line" aria-hidden="true" />
        <Container className="relative z-10">
          <Eyebrow className="text-red">Green Energy Division</Eyebrow>
          <h1 className="font-display uppercase text-5xl md:text-7xl mt-6 leading-[0.92] max-w-4xl">
            Solar that
            <br />
            <span className="text-red">keeps the lights on.</span>
          </h1>
          <p className="mt-8 max-w-xl text-paper/75 text-lg leading-relaxed">
            Panels, inverters and battery storage — designed, supplied and
            installed end-to-end through our subsidiary, Raka Energy.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button as={NavLink} to="/quote" variant="red" size="lg">
              Request a Quote
            </Button>
            <Button as={NavLink} to="/products" variant="outline" size="lg" className="text-paper">
              View Product Specs
            </Button>
          </div>
        </Container>
      </section>

      <Section tone="paper" className="py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="p-8 border border-ink/10">
                <p.icon size={28} strokeWidth={1.75} className="text-red" />
                <h3 className="font-display-x font-bold text-xl mt-5 mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="pb-24 md:pb-32 border-t border-ink/10 pt-20">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Eyebrow>In Stock Now</Eyebrow>
              <h2 className="font-display uppercase text-3xl md:text-4xl mt-3 leading-tight">
                Pick the gear that fits your build.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate">
              Browse the most requested solar components with pricing that stands out at a glance.
            </p>
          </div>
        </Container>
        <div className="overflow-x-auto pb-4">
          <div className="container-x flex gap-5 w-max">
            {solarProducts.map((p) => {
              const Icon = p.category === "Battery" ? BatteryCharging : p.category === "Inverter" ? Zap : Sun;

              return (
                <div
                  key={p.id}
                  className={`w-[270px] md:w-[320px] shrink-0 overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-[0_18px_45px_rgba(4,13,17,0.08)] transition-transform duration-300 hover:-translate-y-1 ${
                    p.tone === "red" ? "bg-red text-paper" :
                    p.tone === "redDeep" ? "bg-redDeep text-paper" :
                    "bg-ink text-paper"
                  }`}
                >
                  <div className="relative h-[160px] w-full">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/15 backdrop-blur-sm">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <span className="absolute right-4 top-4 rounded-full border border-paper/25 bg-black/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm">
                      {p.badge}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between p-6 min-h-[220px]">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                        {p.category}
                      </span>
                      <h3 className="font-display-x font-bold text-lg leading-snug mt-3 mb-2">{p.name}</h3>
                      <p className="font-mono text-xs opacity-75">{p.spec}</p>
                    </div>

                    <div className="mt-5 rounded-[1.1rem] border border-paper/15 bg-paper/10 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">Starting at</p>
                      <p className="mt-1 text-2xl font-display-x font-bold">{p.price}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                        {p.availability}
                      </span>
                      <button className="rounded-full border border-paper/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-paper/15">
                        Request price
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section tone="ink" className="py-24 md:py-32">
        <Container>
          <Eyebrow className="text-paper/60">For Business</Eyebrow>
          <h2 className="font-display uppercase text-4xl md:text-6xl mt-4 mb-14 leading-[0.95] max-w-2xl">
            Commercial &amp; utility scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
            {commercialSolutions.map((s, i) => (
              <div key={s.title} className="bg-ink p-8 flex flex-col gap-4 min-h-[200px] justify-between">
                <span className="font-mono text-xs text-red">0{i + 1}</span>
                <div>
                  <h3 className="font-display-x font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-paper/70 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="red" texture className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="font-display uppercase text-3xl md:text-5xl leading-tight max-w-xl">
              Ready to size your system?
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
