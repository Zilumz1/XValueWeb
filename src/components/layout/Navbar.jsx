import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { nav } from "../../lib/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-xl border-b border-ink/10 shadow-[0_10px_36px_rgba(10,10,10,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <NavLink to="/" onClick={() => setOpen(false)} aria-label="XValue home">
          <Logo />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-60 ${
                  isActive ? "opacity-100 underline underline-offset-4 decoration-red decoration-2" : "opacity-80"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as={NavLink} to="/quote" variant="ink" size="sm">
            Request a Quote
          </Button>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink text-paper cell-grid">
          <nav className="container-x flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl py-3 border-b border-paper/10 last:border-0"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-6">
              <Button as={NavLink} to="/quote" variant="red" onClick={() => setOpen(false)}>
                Request a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
