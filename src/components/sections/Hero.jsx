import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Container, Eyebrow } from "../ui/Section";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const HERO_IMG =
  "https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
  return (
    <section className="relative w-full pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden bg-ink text-paper grain">
      {/* Photo backdrop */}
      <div
        className="absolute inset-0 photo-cover"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        role="img"
        aria-label="Solar panels being installed on a rooftop"
      />
      <div className="absolute inset-0 photo-scrim-ink" />
      <div className="absolute -left-10 top-24 h-56 w-56 rounded-full bg-red/30 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-12 right-0 h-64 w-64 rounded-full bg-paper/15 blur-[120px]" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />

      <Container className="relative z-10">
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
          <Eyebrow className="text-red">Power / Supply / Build</Eyebrow>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="font-display uppercase leading-[0.92] mt-6 text-[13vw] md:text-[7.5vw] lg:text-[6.2vw]"
        >
          Energy that
          <br />
          <span className="text-red">doesn&apos;t quit</span>
          <span className="align-super text-[0.35em] ml-2 font-mono normal-case">
            on load-shedding.
          </span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <p className="max-w-xl text-paper/75 text-lg leading-relaxed">
            XValue supplies solar, lighting, power tools and interior solutions to
            Domestic, Commercial and Utility clients across South Africa — backed by
            in-house installation through Raka Energy.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button as={NavLink} to="/quote" variant="red" size="lg">
              Request a Quote
            </Button>
            <Button as={NavLink} to="/solar" variant="outline" size="lg" className="text-paper">
              Explore Solar
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Signature diagonal seam into next panel */}
      <div className="absolute -bottom-1 left-0 right-0 h-12 bg-paper seam-up z-10" />
    </section>
  );
}
