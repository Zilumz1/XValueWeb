# XValue — Website Rebuild

React + Vite + Tailwind. Bold, saturated, solar-led design system.

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to /dist
```

## What's built (Phase 1 + start of Phase 2)
- Full Vite + React + Tailwind scaffold, design tokens, fonts, routing
- Component library: Button, Section/Container, Eyebrow, Logo, Navbar, Footer
- Homepage: Hero, Stats, Categories (product divisions), Partners, Mission/CTA
- All Phase 3 pages routed and stubbed (About, Products, Solar, Brands, Contact,
  Quote, Careers, Store Locator, Terms, Privacy, Warranty) — ready to be filled in


## Notes
- Logo is a type-based wordmark (XVALUE, VALUE in Volt) rather than a recreation
  of the existing raster logo — cleaner for a from-scratch premium rebuild. Swap
  in the official SVG easily via `src/components/ui/Logo.jsx` if preferred.
- Copy, stats and categories are sourced from XValue's live site (products,
  mission/vision, partners: Jinko, Ritar, GCL, MUST, Raka Energy) — no fabricated
  claims or pricing.
