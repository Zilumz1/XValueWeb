import { useState, useMemo } from "react";
import { MapPin, Phone, Search } from "lucide-react";
import { Container, Section, Eyebrow } from "../components/ui/Section";
import { stores, contact } from "../lib/siteData";

export default function StoreLocator() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stores;
    return stores.filter(
      (s) => s.name.toLowerCase().includes(q) || s.address.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <Section tone="ink" texture className="pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <Eyebrow className="text-red">Find a Store</Eyebrow>
          <h1 className="font-display uppercase text-5xl md:text-7xl mt-6 leading-[0.95]">
            Store Locator
          </h1>
          <p className="mt-6 max-w-xl text-paper/70 leading-relaxed">
            XValue hardware stores and stockists offering the full range of
            products and services.
          </p>

          <div className="mt-10 max-w-md flex items-center gap-3 border border-paper/20 focus-within:border-red px-4 py-3 transition-colors">
            <Search size={18} className="text-paper/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by town or store name..."
              className="bg-transparent outline-none text-sm flex-1 placeholder:text-paper/30"
            />
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="py-16 md:py-20 border-b border-ink/10">
        <Container>
          <div className="p-8 md:p-10 bg-red text-paper flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest opacity-60">Head Office</span>
              <h2 className="font-display uppercase text-2xl md:text-3xl mt-2">
                {contact.address.line1}, {contact.address.line2}
              </h2>
              <p className="text-sm mt-1 opacity-80">
                {contact.address.city}, {contact.address.province}, {contact.address.country}
              </p>
            </div>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="font-mono text-sm flex items-center gap-2 shrink-0">
              <Phone size={16} /> {contact.phone}
            </a>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="py-16 md:py-24">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-slate mb-8">
            {filtered.length} {filtered.length === 1 ? "location" : "locations"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {filtered.map((s) => (
              <div key={s.name} className="bg-paper p-6 flex flex-col gap-3">
                <h3 className="font-display-x font-bold text-base leading-snug">
                  {s.name}
                </h3>
                <p className="text-sm text-slate flex items-start gap-2 leading-relaxed">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  {s.address}
                </p>
                {s.tel && (
                  <a
                    href={`tel:${s.tel.replace(/\s|\+/g, "")}`}
                    className="font-mono text-xs flex items-center gap-2 hover:text-ink transition-colors"
                  >
                    <Phone size={14} /> {s.tel}
                  </a>
                )}
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-slate text-sm py-12 text-center">
              No stores match "{query}" — try a different town.
            </p>
          )}
        </Container>
      </Section>
    </>
  );
}
