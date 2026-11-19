# JN Machinery Corp.: Website Audit and Redesign Direction

Audited 19 Nov 2026 from https://jnmachinery.com/ (live pages, the public WordPress content feed, and desktop/mobile screenshots in `/_audit/shots`). This is the American company in Algonquin, Illinois. It is unrelated to JN Machineries Private Limited (India).

## What the business is (verified on the existing site)
- JN Machinery Corp., 1350 Chase St., Algonquin, IL 60102. Phone 224-209-8300, info@jnmachinery.com. Technical questions: michael@jnmachinery.com; other enquiries: daniel@jnmachinery.com; invoices and shipping: alma@jnmachinery.com.
- "The World's Leading Designer-Supplier of Electric Conveyor Ovens for Heat Treating Steel Springs" (homepage H1).
- Founded 1985 as an independent company; the conveyor furnace began in 1982 as a unit of North American Spring & Stamping Corporation (About page). "Born by a Spring Company, for Spring Companies."
- **Installed base claim.** The homepage meta description and body say "over 5000 ovens operating worldwide". The About page says "over 4400 furnaces in operation worldwide". The redesign uses the homepage claim, attributed to JN ("JN reports…"), and flags the About-page number for the client to reconcile.
- Products: nine oven models with published technical data (JN-540, 855, 1040, 1060, 1276, 1888, 15HD, 30HD, plus 18HD with a spec sheet only), custom ovens and rebuilds, spare parts, incline conveyors, TRC coating systems (TRC300 dip + drying system), Aqua-TRC water-based polymer coating, and the FTS flow-through system for garage-door springs.
- Technical content: 8 articles (2017–2019) on stress relieving, preventive maintenance, energy efficiency, buying a used oven and troubleshooting.

## Findings

| Area | Finding | Verdict |
|---|---|---|
| Brand positioning | A strong, specific claim (world's leading oven supplier for spring heat treatment, 5,000+ ovens) sits in a plain green heading. Engineering credibility (95 years of combined partner experience in the spring industry, published studies) is only on the About page. | Rebuild around expertise |
| Visual identity | Logo (green and orange conveyor loop) is distinctive and good. Site uses bright green headings, a decorative serif and a full-green footer. Reads as a 2017 template. | Keep logo and its orange as the single accent; replace everything else |
| Navigation / IA | Two mega-categories (Conveyor Ovens, TRC Coatings) plus About, Articles, Contact. Individual oven models are not reachable from the top navigation. Spare parts is a "survey" page. | Rebuild with model-level navigation |
| Homepage | Headline, four image tiles, then a large empty gap before the footer. The 5,000+ claim, features and advantages exist in the page content but are not visible in the rendered layout. | Rebuild |
| Product discovery | No way to compare ovens. Models are only listed by page. A customer must open nine pages to compare capacity, width and footprint. | Add a comparison table and selector |
| Product presentation | Good studio photography of each oven (1280 px). Specs appear as plain text pairs. Incline conveyors and spare parts say "photos and specs coming soon". JN-18HD shows a CAD placeholder. | Keep photos; structure specs; present gaps honestly |
| Typography / colour | Roman serif headings in saturated green on white, yellow-on-green footer text with weak contrast. | Replace |
| Responsiveness | Divi layout collapses but images and tiles stack with large dead space; footer text is hard to read. | Rebuild |
| Conversion | The Contact page states: "Our website is under construction. Most inquiry and contact-us forms are not reaching our servers." Enquiries are being lost. There is a quote configuration form page and an Aqua-TRC data form that are not linked from the main journey. | Critical: rebuild enquiry journeys |
| SEO | Page title and meta description exist. Product pages lack descriptive metadata and structured data; articles have no author/date markup. | Improve |
| Accessibility | Low contrast footer, text in images, no skip link. | Improve |
| Performance | WordPress/Divi with large unoptimised JPEGs (one 5312 px image) and external video embed. | Static, optimised WebP |
| Trust | Real claims (5,000+ ovens, 1985, Made in the USA, CQI-9 / AMS2750 support) but no customer names, no certifications page, no case studies. The demo does not invent any. | Present real claims clearly; list what the client should add |
| Data quality | JN-15HD capacity is published as "980 lb/hr @ 500°F, 250 lb/hr @ 750°F" which looks like a typo. Reproduced as published and flagged. | Client to confirm |

## Keep / improve / redesign
- **Keep:** logo and orange, studio product photography, all published specifications, Aqua-TRC colour list, the technical articles.
- **Improve:** spec presentation, comparison, plain-language explanation of TRC / Aqua-TRC / FTS.
- **Redesign completely:** homepage, navigation, product pages, resources, contact and quote journey.
- **Missed opportunities:** oven selector by wire diameter and throughput, line diagrams showing how oven + dip tank + conveyor fit together, industries and applications, a quote form that captures wire size, throughput, temperature and voltage, downloadable spec sheets in one place.

## Design direction
"Precision engineering manual." Graphite and warm white with muted steel greys and a single ember-orange accent taken from the logo. Type: Barlow Condensed for headings (industrial signage and drawing-sheet lettering), Inter for body, IBM Plex Mono for numbers and specs. Layouts follow a drawing-sheet grid with fine rules, section numbers, dimension lines and generated technical diagrams (footprint-vs-chamber plans drawn from the published dimensions). Motion is mechanical and precise: clip-path image wipes, line draws, tabular number alignment. No gradients, glows or glass.

## Demo assumptions (labelled)
- Every specification shown is taken from the existing JN site. Where JN has not published data (JN-18HD, incline conveyors, spare parts) the redesign says so and links to the spec sheet or the contact route.
- Performance claims (e.g. Aqua-TRC comparisons, "dry in under 3 minutes") are attributed to JN, not asserted by the demo.
- Forms are demo-only and send nothing. The real contact details above are displayed as published.
- No customer logos, testimonials, certifications or awards are shown because none are published.
