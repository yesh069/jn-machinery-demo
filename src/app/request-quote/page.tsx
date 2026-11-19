import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/Bits";
import QuoteClient from "./QuoteClient";

export const metadata: Metadata = { title: "Request a Quote", description: "Request a quote for a JN electric conveyor oven, custom oven, spare parts, Aqua-TRC samples or a TRC / FTS coating system." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Request a quote"]]} title="Request a quote" lede="Tell us about your process. The more we know about wire size, throughput, temperature and voltage, the faster we can recommend the right equipment." />
      <section className="pad"><div className="wrap cols2">
        <div>
          <p className="sec-no"><b>01</b> What to include</p>
          <ul className="ticks"><li>Material and wire / part diameter</li><li>Throughput you need (lb/hr)</li><li>Process temperature</li><li>Available voltage and phase</li><li>For coatings: at least 10 sample pieces per colour (optional)</li></ul>
          <p className="notice" style={{ marginTop: 26 }}>Prefer to talk? Call <a href="tel:+12242098300" className="tlink">224-209-8300</a>.</p>
        </div>
        <Suspense fallback={null}><QuoteClient /></Suspense>
      </div></section>
    </>
  );
}
