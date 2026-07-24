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

## Design system
- Colors: Ink #0E1210, Paper #F7F5EF, Volt #D4FF3D, Ember #FF4B1F, Circuit #1B3BFF
- Type: Archivo Black (display), IBM Plex Sans (body), IBM Plex Mono (data/labels)
- Signature: full-bleed alternating color panels with a diagonal seam + solar-cell
  grid texture referencing the product itself without being a literal icon

## Notes
- Logo is a type-based wordmark (XVALUE, VALUE in Volt) rather than a recreation
  of the existing raster logo — cleaner for a from-scratch premium rebuild. Swap
  in the official SVG easily via `src/components/ui/Logo.jsx` if preferred.
- Copy, stats and categories are sourced from XValue's live site (products,
  mission/vision, partners: Jinko, Ritar, GCL, MUST, Raka Energy) — no fabricated
  claims or pricing.
