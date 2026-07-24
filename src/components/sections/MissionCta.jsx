import { NavLink } from "react-router-dom";
import { Container, Section, Eyebrow } from "../ui/Section";
import Button from "../ui/Button";
import { mission } from "../../lib/siteData";

export default function MissionCta() {
  return (
    <Section tone="redDeep" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <Eyebrow className="text-paper/60">Our Mission</Eyebrow>
            <p className="font-display uppercase text-3xl md:text-5xl leading-[1.05] mt-5 max-w-3xl">
              {mission}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex flex-wrap gap-3">
              <Button as={NavLink} to="/quote" variant="ink" size="lg">
                Get a Custom Quote
              </Button>
              <Button as={NavLink} to="/contact" variant="outline" size="lg" className="border-paper/30 text-paper hover:bg-paper hover:text-ink">
                Talk to the Team
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
