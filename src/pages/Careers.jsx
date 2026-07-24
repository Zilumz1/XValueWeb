import { useState } from "react";
import { Check } from "lucide-react";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import { Field } from "../components/ui/Field";
import Button from "../components/ui/Button";

const values = [
  { title: "Refinement", copy: "We sharpen our supply process constantly, not just when something breaks." },
  { title: "Rapidness", copy: "Fast quoting, fast delivery, fast answers — speed is part of the product." },
  { title: "Customisation", copy: "Domestic, Commercial and Utility clients get solutions sized to them, not a shelf SKU." },
];

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Section tone="ink" texture className="pt-40 pb-24 md:pt-48 md:pb-32">
        <Container>
          <Eyebrow className="text-red">Careers</Eyebrow>
          <h1 className="font-display uppercase text-5xl md:text-7xl mt-6 leading-[0.95] max-w-3xl">
            Build the supply
            <br />
            chain of tomorrow
          </h1>
          <p className="mt-8 max-w-xl text-paper/70 text-lg leading-relaxed">
            There are no open positions listed right now — but we're always
            open to hearing from people who want to work in solar, supply
            chain or trade. Drop your CV below and we'll keep it on file.
          </p>
        </Container>
      </Section>

      <Section tone="paper" className="py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="p-8 border border-ink/10">
                <span className="font-mono text-xs text-slate">0{i + 1}</span>
                <h3 className="font-display-x font-bold text-lg mt-4 mb-3">{v.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{v.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="red" texture className="py-24 md:py-32">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="text-paper/70">Register Your Interest</Eyebrow>
            <h2 className="font-display uppercase text-3xl md:text-5xl mt-4 mb-10 leading-tight">
              Send us your CV
            </h2>

            {submitted ? (
              <div className="flex items-center gap-3 font-mono text-sm p-6 bg-ink text-red">
                <Check size={20} strokeWidth={2.5} />
                Received — we'll reach out if a role opens up that fits.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Full Name" name="name" required placeholder="Jane Dlamini" />
                  <Field label="Email" type="email" name="email" required placeholder="you@example.com" />
                </div>
                <Field label="Area of Interest" name="area" placeholder="e.g. Solar installation, logistics, sales" />
                <Field
                  label="A little about you"
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Relevant experience, what you're looking for..."
                  className="resize-none"
                />
                <div>
                  <Button type="submit" variant="ink" size="lg">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
