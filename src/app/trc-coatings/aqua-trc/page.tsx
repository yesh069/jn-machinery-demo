import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, CtaBand } from "@/components/Bits";
import QuoteForm from "@/components/QuoteForm";
import { AQUA_COLORS, AQUA_HEX, DOCS } from "@/lib/data";

export const metadata: Metadata = { title: "Aqua-TRC® Coatings", description: "Aqua-TRC is a concentrated water-based polymer coating material formulated to coat hot metal springs, available in a wide colour range." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["TRC coatings", "/trc-coatings/"], ["Aqua-TRC"]]} title="Aqua-TRC® coatings" lede="A concentrated water-based polymer coating material, specifically designed to overcome dispersion and settling shortcomings found in other water-based paints." />
      <section className="pad"><div className="wrap pgrid">
        <div>
          <div className="gal-main"><img src="/img/site/2017-04-21-10.46.37.webp" alt="JN Machinery trade show booth with Aqua-TRC and FTS displays" loading="lazy" /></div>
          <p className="demo-note" style={{ marginTop: 8 }}>JN MACHINERY AT AN INDUSTRY TRADE SHOW · EXISTING JN PHOTOGRAPH</p>
        </div>
        <div>
          <p className="sec-no"><b>01</b> Overview</p><h2 style={{ marginBottom: 18 }}>What is Aqua-TRC?</h2>
          <ul className="ticks">
            <li>Concentrate designed to be diluted with water from 1:1 to 4:1 before use, formulated to coat hot materials</li>
            <li>A polymer that converts (bonds) to a metal spring with no additional curing process</li>
            <li>Environmentally safe, with no hazardous materials, and usable in open air without ventilation equipment (per JN)</li>
            <li>Conversion coat: a smooth surface with little or no build-up under the end coils</li>
            <li>Formulated by TRC Coatings on a patented polymer</li>
          </ul>
        </div>
      </div></section>
      <section className="pad dark"><div className="wrap cols2">
        <div><p className="sec-no"><b>02</b> Key features</p><h2 style={{ marginBottom: 20 }}>How it behaves in production.</h2><p>Statements below are JN’s, drawn from its Aqua-TRC FAQ and comparison pages.</p></div>
        <ul className="numlist">
          <li><div><h3>Stays dispersed</h3><p>Uses “dispersed pigment” chemistry. Five to ten seconds of stirring is enough to agitate the liquids.</p></div></li>
          <li><div><h3>Doesn’t stick to machinery</h3><p>A non-sticky resin that will not stick to non-heated surfaces. JN says machinery self-cleans in 20 minutes.</p></div></li>
          <li><div><h3>Dries in seconds in TRC and FTS</h3><p>Further processing such as striping can be done immediately after coating. Full cure takes about 12 hours and happens naturally.</p></div></li>
          <li><div><h3>No ammonia handling</h3><p>JN states Aqua-TRC does not need ammonia to control odour or bacteria.</p></div></li>
          <li><div><h3>Wide operating temperature</h3><p>JN states it functions from 38°F to 191°F with no detrimental effect when the paint returns to room temperature.</p></div></li>
        </ul>
      </div></section>
      <section className="pad"><div className="wrap">
        <p className="sec-no"><b>03</b> Colours</p><h2 style={{ marginBottom: 14 }}>A broad palette, colour-matched on request.</h2>
        <p style={{ maxWidth: "62ch" }}>Aqua-TRC can colour-match to any desired tint. Swatches below are on-screen approximations only: actual results depend on the colour of the wire, material mass, surface temperature and dilution. <a className="tlink" href={DOCS.colors.href} target="_blank" rel="noopener noreferrer">Official colour sheet (PDF)</a></p>
        <div className="swatches" style={{ marginTop: 30 }}>{AQUA_COLORS.map(([n, p, c]) => (<div key={c}><i style={{ background: AQUA_HEX[n] }} /><b>{n}</b><span>{p} · {c}</span></div>))}</div>
      </div></section>
      <section className="pad mid rule"><div className="wrap cols2">
        <div><p className="sec-no"><b>04</b> Samples and quotes</p><h2 style={{ marginBottom: 18 }}>Test it on your parts.</h2><p>If you send at least 10 pieces per colour required, JN can estimate the cost of samples at various dilutions under conditions as close to your process as possible, and quote a cost per gallon and Aqua-TRC consumption per 1,000 parts. JN can also quote TRC paint systems for dipping applications.</p><p><Link className="tlink" href="/trc-coatings/dipping-drying/">Dipping &amp; drying</Link> &nbsp;&nbsp; <Link className="tlink" href="/trc-coatings/flow-through/">Flow-through</Link></p></div>
        <QuoteForm interest="Aqua-TRC coatings / samples" id="aqua-quote" />
      </div></section>
      <CtaBand />
    </>
  );
}
