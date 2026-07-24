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
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative w-[260px] md:w-[300px] shrink-0 p-6 flex flex-col justify-between min-h-[280px]
                transition-transform duration-300 ease-out-expo hover:-translate-y-1 ${toneClasses[p.tone]}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                  {p.category}
                </span>
                <Zap size={18} strokeWidth={2} className="opacity-60" />
              </div>

              <div>
                <h3 className="font-display-x font-bold text-xl leading-snug mb-2">
                  {p.name}
                </h3>
                <p className="font-mono text-xs opacity-70">{p.spec}</p>
              </div>
            </motion.div>
          ))}

          {/* Trailing CTA card */}
          <NavLink
            to="/products"
            className="group w-[260px] md:w-[300px] shrink-0 flex flex-col items-start justify-center gap-3 p-6 min-h-[280px] border border-ink/15 hover:border-ink transition-colors"
          >
            <span className="font-display uppercase text-xl leading-tight">
              See the full catalogue
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-slate group-hover:text-ink transition-colors">
              Browse products →
            </span>
          </NavLink>
        </div>
      </div>
    </Section>
  );
}
