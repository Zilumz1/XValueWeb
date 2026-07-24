import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, Section, Eyebrow } from "../ui/Section";
import { productCategories } from "../../lib/siteData";

const images = {
  solar:
    "https://images.unsplash.com/photo-1756232973381-5ed87773a908?auto=format&fit=crop&w=1600&q=80",
  lighting:
    "https://images.unsplash.com/photo-1693023468577-05e78c8e9fa2?auto=format&fit=crop&w=1600&q=80",
  tools:
    "https://images.unsplash.com/photo-1632095710940-ad578e8cbe6b?auto=format&fit=crop&w=1600&q=80",
  interiors:
    "https://images.unsplash.com/photo-1764526624453-db32c24eca55?auto=format&fit=crop&w=1600&q=80",
};

export default function Categories() {
  return (
    <Section tone="paper" className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow>What we supply</Eyebrow>
            <h2 className="font-display uppercase text-4xl md:text-6xl mt-4 leading-[0.95]">
              Four divisions,
              <br />
              one supply chain
            </h2>
          </div>
          <p className="max-w-sm text-slate text-sm leading-relaxed">
            Solar leads everything we do — the rest of the catalogue keeps trade
            and retail partners stocked from one account.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <NavLink
                to={cat.href}
                className={`group relative block p-8 md:p-10 h-full min-h-[300px] flex flex-col justify-between
                  overflow-hidden transition-transform duration-300 ease-out-expo hover:-translate-y-1
                  ${cat.id === "solar" ? "md:min-h-[360px]" : ""}`}
              >
                <div
                  className="absolute inset-0 photo-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  style={{ backgroundImage: `url(${images[cat.id]})` }}
                  role="img"
                  aria-label={cat.title}
                />
                <div
                  className={`absolute inset-0 ${
                    cat.id === "solar" ? "photo-scrim-red" : "photo-scrim-ink"
                  }`}
                />

                <div className="relative z-10 flex justify-between items-start text-paper">
                  <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                    0{i + 1}
                  </span>
                  <ArrowUpRight
                    size={28}
                    strokeWidth={2}
                    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <div className="relative z-10 text-paper">
                  <h3 className="font-display uppercase text-2xl md:text-3xl mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm md:text-base text-paper/80 leading-relaxed max-w-md">
                    {cat.description}
                  </p>
                </div>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
