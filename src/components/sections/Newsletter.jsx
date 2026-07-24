import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Container, Section, Eyebrow } from "../ui/Section";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section tone="red" texture className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Eyebrow className="text-paper/70">Stay Powered Up</Eyebrow>
            <h2 className="font-display uppercase text-4xl md:text-6xl mt-4 leading-[0.95]">
              New stock, new
              <br />
              offers, no spam.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            {submitted ? (
              <div className="flex items-center gap-3 font-mono text-sm">
                <Check size={20} strokeWidth={2.5} />
                You&apos;re on the list — check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-stretch border-2 border-paper">
                <input
                  type="email"
                  required
                  placeholder="you@company.co.za"
                  className="bg-transparent px-5 py-4 text-sm flex-1 outline-none placeholder:text-paper/50 text-paper font-mono"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-5 bg-ink text-red hover:bg-paper hover:text-ink transition-colors flex items-center"
                >
                  <ArrowUpRight size={20} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
