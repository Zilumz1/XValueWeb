import { NavLink } from "react-router-dom";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import Button from "../components/ui/Button";
import { mission, vision, partners } from "../lib/siteData";

export default function About() {
  return (
    <>
      <Section tone="ink" texture className="pt-40 pb-24 md:pt-48 md:pb-32">
        <Container>
          <Eyebrow className="text-red">About XValue</Eyebrow>
          <h1 className="font-display uppercase text-5xl md:text-7xl mt-6 leading-[0.95] max-w-4xl">
            Supply chain,
            <br />
            <span className="text-red">rebuilt for energy.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-paper/70 text-lg leading-relaxed">
            XValue Supply Chain Management is a B2B supplier of tiles, flooring
            materials, power tools and energy solutions to businesses across South
            Africa. Through our subsidiary Raka Energy, we design, install and
            maintain solar power systems for Domestic, Commercial and Utility
            clients.
          </p>
        </Container>
      </Section>

      <Section tone="paper" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            <div className="p-8 md:p-10 bg-red text-paper">
              <Eyebrow className="text-paper/70">Our Mission</Eyebrow>
              <p className="font-display uppercase text-2xl md:text-3xl mt-5 leading-tight">
                {mission}
              </p>
            </div>
            <div className="p-8 md:p-10 bg-ink text-paper">
              <Eyebrow className="text-paper/50">Our Vision</Eyebrow>
              <p className="font-display uppercase text-2xl md:text-3xl mt-5 leading-tight">
                {vision}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="redDeep" texture className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Eyebrow className="text-paper/60">Installation Subsidiary</Eyebrow>
              <h2 className="font-display uppercase text-3xl md:text-5xl mt-4 leading-[1.05]">
                Raka Energy handles design,
                <br />
                install &amp; after-sales.
              </h2>
              <p className="mt-6 max-w-xl text-paper/70 leading-relaxed">
                From meticulous system design to seamless installation, complete
                maintenance, and a comprehensive after-sales support structure —
                Raka Energy is XValue's dedicated solar installation partner.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Button as={NavLink} to="/solar" variant="paper" size="lg">
                See Solar Solutions
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink" className="py-20 md:py-24">
        <Container>
          <Eyebrow className="text-red">Trusted Partners</Eyebrow>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-px bg-paper/10">
            {partners.map((p) => (
              <div key={p.name} className="bg-ink p-6 md:p-8 flex flex-col justify-center min-h-[110px]">
                <span className="font-display-x font-bold text-lg">{p.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-paper/40 mt-1">
                  {p.note}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="redDeep" className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="font-display uppercase text-3xl md:text-5xl leading-tight max-w-xl">
              Want to partner with us?
            </h2>
            <Button as={NavLink} to="/contact" variant="ink" size="lg">
              Get In Touch
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
