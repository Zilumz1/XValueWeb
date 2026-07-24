import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Zap } from "lucide-react";
import { Container, Section, Eyebrow } from "../ui/Section";
import Button from "../ui/Button";
import { featuredProducts } from "../../lib/siteData";

const toneClasses = {
  red: "bg-red text-paper",
  ink: "bg-ink text-paper",
  redDeep: "bg-redDeep text-paper",
};

const accentClasses = {
  red: "from-red/90 to-red-bright/80",
  ink: "from-ink/85 to-ink/70",
  redDeep: "from-redDeep/95 to-red/70",
};

export default function ProductShowcase() {
  return (
    <Section tone="paper" className="py-24 md:py-32 border-t border-ink/10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow>In Stock</Eyebrow>
            <h2 className="font-display uppercase text-4xl md:text-6xl mt-4 leading-[0.95]">
              Featured hardware
            </h2>
          </div>
          <Button as={NavLink} to="/products" variant="outline" size="sm">
            View All Products
          </Button>
        </div>
      </Container>

      {/* Horizontal scroll rail — bleeds to the edge intentionally */}
      <div className="overflow-x-auto pb-4 [scrollbar-width:thin]">
        <div className="container-x flex gap-5 w-max">
          {featuredProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative w-[260px] md:w-[300px] shrink-0 overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_20px_45px_rgba(4,13,17,0.10)] transition-transform duration-300 ease-out-expo hover:-translate-y-1 ${toneClasses[p.tone]}`}
            >
              <div className="relative h-[220px] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${accentClasses[p.tone]}`} />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 bg-paper/15 backdrop-blur-sm">
                  <Zap size={18} strokeWidth={2} />
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-paper/25 bg-black/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] backdrop-blur-sm">
                  {p.badge}
                </span>
              </div>

              <div className="flex flex-col justify-between p-6 min-h-[180px]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                    {p.category}
                  </span>
                  <h3 className="font-display-x font-bold text-lg leading-snug mt-3 mb-2">
                    {p.name}
                  </h3>
                  <p className="font-mono text-xs opacity-75">{p.spec}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                    {p.availability}
                  </span>
                  <span className="rounded-full border border-paper/20 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em]">
                    {p.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Trailing CTA card */}
          <NavLink
            to="/products"
            className="group relative w-[260px] md:w-[300px] shrink-0 overflow-hidden rounded-[2rem] border border-ink/15 bg-paper p-6 min-h-[400px] flex flex-col items-start justify-end transition-all duration-300 hover:border-ink hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(228,3,46,0.12),_transparent_58%)]" />
            <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-ink/10 bg-paper shadow-sm">
              <Zap size={20} strokeWidth={2} className="text-red" />
            </div>
            <div className="relative z-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate">
                Dive deeper
              </span>
              <span className="mt-4 block font-display uppercase text-xl leading-tight text-ink">
                See the full catalogue
              </span>
              <span className="mt-3 inline-flex font-mono text-xs uppercase tracking-widest text-slate transition-colors group-hover:text-ink">
                Browse products →
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </Section>
  );
}
