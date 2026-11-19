import type { Metadata } from "next";
import { PageHero, CtaBand, Gallery } from "@/components/Bits";
import { ProcessFlow } from "@/components/Diagrams";
import QuoteForm from "@/components/QuoteForm";
import { DOCS } from "@/lib/data";

export const metadata: Metadata = { title: "Dipping & Drying Systems (TRC300)", description: "The TRC300 dipping and drying system: dip tank, incline conveyor and drying conveyor for coating hot springs with Aqua-TRC." };

const rows: [string, string][] = [
  ["Dip tank", "16.8″ W × 32″ L × 14.5″ H (34 gal.)"],
  ["Incline conveyor", "11.8″ belt, 17.3″ hopper; 115 V, 1.3 A"],
  ["Drying conveyor", "11.8″ belt, 40″ length, 21″ discharge height; 115 V, 1.3 A"],
  ["Power", "Standard 115 V, single phase; shared control panel"],
];
export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["TRC coatings", "/trc-coatings/"], ["Dipping & drying"]]} title="Dipping & drying systems" lede="The TRC300: a compact in-line system that dips hot springs in Aqua-TRC and delivers dry-to-the-touch parts, with little to no additional labour." />
      <section className="pad"><div className="wrap pgrid">
        <Gallery images={["/img/site/trc-300-system.webp"]} alt="TRC300 system: conveyor oven, dip tank, incline conveyor and drying conveyor" />
        <div className="sticky">
          <p className="sec-no"><b>01</b> Overview</p><h2 style={{ marginBottom: 18 }}>The TRC300 system.</h2>
          <p>Formed parts (350°F / 177°C or hotter) drop into the polymer solution. The incline conveyor removes them from the dip tank, a blower whisks off droplets, and the drying conveyor delivers dry-to-the-touch parts. The coating takes place almost instantly (within about one second); excess time in the coating material is detrimental to final results.</p>
          <div className="quote-box"><h3>Quote a TRC300</h3><p>Includes tank, incline conveyor and drying conveyor.</p><a className="btn btn-primary" href="#quote">Request a Quote</a> <a className="btn btn-line" style={{ marginLeft: 8 }} href={DOCS.trcAd.href} target="_blank" rel="noopener noreferrer">Product sheet</a></div>
        </div>
      </div></section>
      <section className="pad dark"><div className="wrap"><p className="sec-no"><b>02</b> Process</p><h2 style={{ marginBottom: 32 }}>Oven to dry part.</h2><ProcessFlow kind="trc" /></div></section>
      <section className="pad"><div className="wrap cols2">
        <div><p className="sec-no"><b>03</b> Technical data</p><h2 style={{ marginBottom: 24 }}>TRC300 components.</h2>
          <table className="spec"><tbody>{rows.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody></table>
          <p className="notice" style={{ marginTop: 20 }}>For light to medium volume the tank can run with less coating material by filling part of the gap under the incline conveyor with inert material (per JN).</p>
        </div>
        <div><p className="sec-no"><b>04</b> Engineering notes</p><h2 style={{ marginBottom: 24 }}>How each stage works.</h2>
          <ul className="ticks"><li>Dip tank: rests on casters for mobility; filled to roughly 2″ from the top</li><li>Incline conveyor: power, blower and belt-speed controls</li><li>Drying conveyor: blower plus retained heat in the part drive the cure</li><li>Residual coating at the end coil disappears once the part is fully cured</li></ul>
        </div>
      </div></section>
      <section className="pad mid rule" id="quote" style={{ scrollMarginTop: 100 }}><div className="wrap cols2"><div><p className="sec-no"><b>05</b> Request a quote</p><h2>Specify your coating line.</h2></div><QuoteForm interest="TRC dipping and drying system" id="trc-quote" /></div></section>
      <CtaBand />
    </>
  );
}
