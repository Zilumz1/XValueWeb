import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { contact, nav } from "../../lib/siteData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper cell-grid">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo dark />
            <p className="mt-6 max-w-sm text-sm text-paper/60 leading-relaxed">
              B2B supplier of solar &amp; energy solutions, lighting, power tools and
              interiors — supplying Domestic, Commercial and Utility clients across
              South Africa.
            </p>
            <div className="mt-8 flex flex-col gap-3 font-mono text-sm text-paper/80">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-red transition-colors">
                <Phone size={16} /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-red transition-colors">
                <Mail size={16} /> {contact.email}
              </a>
              <span className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {contact.address.line1}, {contact.address.line2}, {contact.address.city},{" "}
                {contact.address.province}, {contact.address.country}
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-5">
              Sitemap
            </p>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <NavLink to={item.href} className="text-sm hover:text-red transition-colors">
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/store-locator" className="text-sm hover:text-red transition-colors">
                  Store Locator
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-5">
              Stay Powered Up
            </p>
            <p className="text-sm text-paper/60 mb-4">
              Product drops, partner offers and load-shedding-proof deals.
            </p>
            <div className="rounded-[1.5rem] border border-paper/15 bg-paper/8 p-5 backdrop-blur-sm">
              <p className="text-sm text-paper/70 leading-relaxed">
                Need a quote fast? We’ll help you scope the right solar, tools or interiors package.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button as={NavLink} to="/quote" variant="red" size="md">
                  Request a Quote
                </Button>
                <Button as={NavLink} to="/contact" variant="outline" size="md" className="border-paper/35 text-paper hover:bg-paper hover:text-ink">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} XValue Supply Chain Management. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-paper/40">
            <NavLink to="/terms" className="hover:text-red transition-colors">Terms</NavLink>
            <NavLink to="/privacy" className="hover:text-red transition-colors">Privacy</NavLink>
            <NavLink to="/warranty" className="hover:text-red transition-colors">Warranty</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
