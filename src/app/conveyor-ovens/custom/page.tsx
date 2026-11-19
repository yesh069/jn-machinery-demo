import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, CtaBand } from "@/components/Bits";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = { title: "Custom Ovens & Rebuilds", description: "JN fabricates custom conveyor ovens and rebuilds any make or model of electric oven, including overseas brands." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Conveyor ovens", "/conveyor-ovens/"], ["Custom ovens"]]} title="Custom made ovens" lede="JN can fabricate an oven to meet your unique needs. We love a design challenge; almost any part has its ideal conveyor oven configuration." />
      <section className="pad"><div className="wrap cols2">
        <div className="gal-main" style={{ aspectRatio: "16/10" }}><img src="/img/site/jn-15hd-front-angle.webp" alt="JN-15HD oven, front angle showing belt entry" loading="lazy" /></div>
        <div>
          <p className="sec-no"><b>01</b> Overview</p>
          <h2 style={{ marginBottom: 20 }}>Fabricated in JN’s own shop.</h2>
          <p>Tell JN your specific requirements and it will configure an oven around your part, process and plant. The same fabrication shop rebuilds ovens.</p>
          <p className="notice">Photos and specifications for custom builds are listed by JN as “coming soon”. Contact JN directly with questions.</p>
        </div>
      </div></section>
      <section className="pad dark"><div className="wrap cols2">
        <div><p className="sec-no"><b>02</b> Rebuilding</p><h2 style={{ marginBottom: 20 }}>New life for an old oven.</h2></div>
        <div><p>JN’s fabrication shop can rebuild any make or model of electric ovens, including overseas brands. If it is salvageable, JN says it can make it work. JN states a rebuild gives you essentially a new oven for about one-third of the cost.</p></div>
      </div></section>
      <section className="pad"><div className="wrap">
        <p className="sec-no"><b>03</b> Oven options</p><h2 style={{ marginBottom: 30 }}>Squeeze out more efficiency.</h2>
        <ul className="numlist light" style={{ maxWidth: 880 }}>
          <li><div><h3>Stainless steel curtains</h3><p style={{ color: "var(--steel-500)" }}>Help retain heat in the chamber and lower energy consumption.</p></div></li>
          <li><div><h3>Exhaust hoods</h3><p style={{ color: "var(--steel-500)" }}>Oily smoke and other air pollutants are pulled from the entry and exit end of the oven and channelled through your collection system.</p></div></li>
          <li><div><h3>Easier-to-read controls</h3><p style={{ color: "var(--steel-500)" }}>Digital speed control and digital temperature controls are available options on JN ovens.</p></div></li>
        </ul>
      </div></section>
      <section className="pad mid rule"><div className="wrap cols2">
        <div><p className="sec-no"><b>04</b> Request a quote</p><h2 style={{ marginBottom: 20 }}>Describe your part.</h2><p>Technical questions go straight to JN’s engineers. <Link className="tlink" href="/resources/">Read the technical articles</Link></p></div>
        <QuoteForm interest="Custom oven or rebuild" id="custom-quote" />
      </div></section>
      <CtaBand />
    </>
  );
}
