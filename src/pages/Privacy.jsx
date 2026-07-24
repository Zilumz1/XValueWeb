import { Container, Section, Eyebrow } from "../components/ui/Section";

export default function Privacy() {
  return (
    <Section tone="paper" className="pt-40 pb-32 min-h-[60vh]">
      <Container>
        <Eyebrow>Phase 3</Eyebrow>
        <h1 className="font-display uppercase text-5xl md:text-7xl mt-4">Privacy</h1>
        <p className="mt-6 max-w-xl text-slate leading-relaxed">
          This page is scaffolded and routed — full content and layout for
          Privacy lands in Phase 3 of the build.
        </p>
      </Container>
    </Section>
  );
}
