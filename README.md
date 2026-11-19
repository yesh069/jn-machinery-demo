# JN Machinery Corp. - website redesign demo

Independent demo (Next.js 15 static export, React 19, TypeScript, plain CSS, Framer Motion, Lucide).

## Run
    npm install
    npm run dev      # http://localhost:3102
    npm run build    # static export to /out

## Design system (v2 - technical drawing)
- Palette: deep slate-ink `#0c1b2a`, cool paper `#f7f9fb`, steel greys, one accent: ember `#f08a00` (text-safe `#b85a00`).
- Type: Archivo (headings, sentence case), Inter (body), IBM Plex Mono (labels/specs).
- Blueprint grid on dark and tinted sections; square corners; hairline rules; numbered sections.
- Motion: clip-path wipe image reveals, mechanical easing, dimension-line SVG plans generated from published dimensions. Reduced motion respected.

## Structure
Home, Conveyor ovens (electric with wire-diameter selector and comparison, 9 model pages, custom, incline conveyors, spare parts), TRC coatings (Aqua-TRC, dipping/drying, flow-through), Resources (articles), About, Contact, Request a quote.

## Honesty notes
- All specs come from jnmachinery.com. Nothing invented. Models without published photos show a "photography not published" state.
- "5,000+ ovens" is attributed to JN (their site also says 4,400+; flagged in docs/AUDIT.md).
- JN-15HD capacity on the live site appears to contain a typo; confirm with client.
- Forms are demo only: nothing is sent or stored.
- Audit: docs/AUDIT.md. Screenshots: screenshots/ (v2 = final).
