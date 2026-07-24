import { useState } from "react";
import { Check } from "lucide-react";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import { Field, Select } from "../components/ui/Field";
import Button from "../components/ui/Button";

const categories = [
  "Solar & Energy",
  "Lighting Solutions",
  "Power Tools",
  "Interiors & Flooring",
  "Multiple / Not Sure",
];

const clientTypes = ["Domestic", "Commercial", "Utility"];

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Section tone="redDeep" texture className="pt-40 pb-24 md:pt-48 md:pb-28">
        <Container>
          <Eyebrow className="text-paper/60">Request a Quote</Eyebrow>
          <h1 className="font-display uppercase text-paper text-5xl md:text-7xl mt-6 leading-[0.95] max-w-3xl">
            Tell us what you need
          </h1>
          <p className="mt-6 max-w-xl text-paper/70 leading-relaxed">
            Share a few details and we'll come back with pricing and lead
            times — no unpublished pricing promised up front, just a fast,
            accurate quote.
          </p>
        </Container>
      </Section>

      <Section tone="paper" className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            {submitted ? (
              <div className="flex items-center gap-3 font-mono text-sm p-8 bg-red text-paper">
                <Check size={20} strokeWidth={2.5} />
                Quote request received — our team will follow up shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Full Name" name="name" required placeholder="Jane Dlamini" />
                  <Field label="Company" name="company" placeholder="Optional" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Email" type="email" name="email" required placeholder="you@company.co.za" />
                  <Field label="Phone" type="tel" name="phone" required placeholder="+27 ..." />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select label="Product Category" name="category" options={categories} />
                  <Select label="Client Type" name="clientType" options={clientTypes} />
                </div>
                <Field
                  label="Project Details"
                  as="textarea"
                  name="details"
                  required
                  rows={6}
                  placeholder="System size, product specs, quantities, site location, timeline..."
                  className="resize-none"
                />
                <div>
                  <Button type="submit" variant="ink" size="lg">
                    Submit Request
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
