import { useState } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import { Field } from "../components/ui/Field";
import Button from "../components/ui/Button";
import { contact } from "../lib/siteData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Section tone="ink" texture className="pt-40 pb-24 md:pt-48 md:pb-28">
        <Container>
          <Eyebrow className="text-red">Get In Touch</Eyebrow>
          <h1 className="font-display uppercase text-5xl md:text-7xl mt-6 leading-[0.95]">
            Contact
          </h1>
        </Container>
      </Section>

      <Section tone="paper" className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-6 font-mono text-sm">
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 hover:text-ink transition-colors">
                  <Phone size={20} /> {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 hover:text-ink transition-colors">
                  <Mail size={20} /> {contact.email}
                </a>
                <span className="flex items-start gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0" />
                  {contact.address.line1}, {contact.address.line2},<br />
                  {contact.address.city}, {contact.address.province},<br />
                  {contact.address.country}
                </span>
              </div>

              <div className="mt-10 aspect-[4/3] w-full border border-ink/10 overflow-hidden">
                <iframe
                  title="XValue Head Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://maps.google.com/maps?q=1069%20Morkels%20Cl%2C%20Halfway%20House%2C%20Midrand%2C%201685&t=m&z=10&output=embed&iwloc=near"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex items-center gap-3 font-mono text-sm p-8 bg-red text-paper">
                  <Check size={20} strokeWidth={2.5} />
                  Thanks — we&apos;ll be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Full Name" name="name" required placeholder="Jane Dlamini" />
                    <Field label="Company" name="company" placeholder="Optional" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Email" type="email" name="email" required placeholder="you@company.co.za" />
                    <Field label="Phone" type="tel" name="phone" placeholder="+27 ..." />
                  </div>
                  <Field
                    label="Message"
                    as="textarea"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you're looking for..."
                    className="resize-none"
                  />
                  <div>
                    <Button type="submit" variant="ink" size="lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
