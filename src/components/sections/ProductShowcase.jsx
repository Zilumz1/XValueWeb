import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, BatteryCharging, SunMedium, Zap } from "lucide-react";
import { Container, Section, Eyebrow } from "../ui/Section";
import Button from "../ui/Button";

const highlights = [
  {
    title: "Solar that keeps projects moving",
    copy: "PV, storage and inverter systems sized for homes, sites and utility rollouts.",
    icon: SunMedium,
    accent: "from-red/90 to-red-bright/70",
  },
  {
    title: "Supply chain without the drag",
    copy: "One account for lighting, tools, interiors and energy hardware across South Africa.",
    icon: BatteryCharging,
    accent: "from-ink/90 to-red/70",
  },
  {
    title: "Fast answers, real execution",
    copy: "Quote support, delivery coordination and installation partnership through Raka Energy.",
    icon: Zap,
    accent: "from-redDeep/95 to-red/70",
  },
];

export default function ProductShowcase() {
  return (
    <Section tone="paper" className="py-24 md:py-32 border-t border-ink/10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow>What powers us</Eyebrow>
            <h2 className="font-display uppercase text-4xl md:text-6xl mt-4 leading-[0.95]">
              Built for momentum
            </h2>
          </div>
          <Button as={NavLink} to="/products" variant="outline" size="sm">
            Explore the catalogue
          </Button>
        </div>
      </Container>

      <div className="container-x grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-ink/10 bg-ink p-8 md:p-10 min-h-[420px] shadow-[0_24px_70px_rgba(4,13,17,0.16)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(228,3,46,0.25),_transparent_44%),linear-gradient(135deg,_rgba(255,255,255,0.06),_transparent_55%)]" />
          <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-red/30 blur-[100px]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <Eyebrow className="text-paper/70">XValue at a glance</Eyebrow>
              <h3 className="font-display uppercase text-3xl md:text-4xl mt-5 leading-[0.95] text-paper">
                One network for ambitious builds.
              </h3>
              <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed text-paper/75">
                From rooftop solar and commercial storage to power tools and interiors, we connect the right hardware with the right delivery plan.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button as={NavLink} to="/quote" variant="red" size="md">
                Start a Quote
              </Button>
              <Button as={NavLink} to="/contact" variant="outline" size="md" className="border-paper/30 text-paper hover:bg-paper hover:text-ink">
                Meet the Team
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-ink/10 bg-paper p-6 md:p-7 shadow-[0_16px_45px_rgba(4,13,17,0.08)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-95`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_42%)]" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/20 bg-paper/15 backdrop-blur-sm">
                    <Icon size={20} strokeWidth={2} className="text-paper" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display-x font-bold text-lg leading-snug text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/80">
                      {item.copy}
                    </p>
                  </div>
                  <ArrowUpRight size={18} strokeWidth={2} className="mt-1 shrink-0 text-paper/80 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
