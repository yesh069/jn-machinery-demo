import type { Metadata } from "next";
import { PageHero, CtaBand, Gallery } from "@/components/Bits";
import { ProcessFlow } from "@/components/Diagrams";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = { title: "Flow-Through Systems (FTS)", description: "The FTS flow-through system sprays Aqua-TRC onto garage and overhead door springs straight from the oven, with minimal tank size and no drying conveyor." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["TRC coatings", "/trc-coatings/"], ["Flow-through systems"]]} title="Flow-through systems (FTS)" lede="For coating garage door springs or other long springs using minimal tank sizes. Springs come out dry to the touch in less than 30 seconds after stress relief, per JN." />
      <section className="pad"><div className="wrap pgrid">
        <Gallery images={["/img/site/fts-frontal.webp", "/img/site/fts-video-slide.webp"]} alt="FTS flow-through coating system" />
        <div className="sticky">
          <p className="sec-no"><b>01</b> Overview</p><h2 style={{ marginBottom: 18 }}>What is FTS™?</h2>
          <p>The flow-through system uses the heat of the stress-relieving operation to apply a polymer conversion coating (Aqua-TRC) to formed springs at 350°F (177°C) or hotter. The entire tempering and painting process can be done in-house, in a small space, together with coiling, forming and stress relief.</p>
          <div className="quote-box"><h3>Quote an FTS</h3><p>FTS 12IN system. System length 131″, 36″ wide, adjustable height; 115 V, 5.3 A.</p><a className="btn btn-primary" href="#quote">Request a Quote</a></div>
        </div>
      </div></section>
      <section className="pad dark"><div className="wrap"><p className="sec-no"><b>02</b> Process</p><h2 style={{ marginBottom: 32 }}>Spray, don’t dip.</h2><ProcessFlow kind="fts" /></div></section>
      <section className="pad"><div className="wrap cols2">
        <div><p className="sec-no"><b>03</b> Engineering advantages</p><h2 style={{ marginBottom: 24 }}>Benefits JN lists for FTS.</h2>
          <ul className="ticks">
            <li>No splash, no dribbles, no waste: 100% of unused paint returns to the tank</li>
            <li>Dries instantly: no drying conveyor needed, so lower machinery cost, electricity and production time</li>
            <li>Springs can be striped immediately, reducing manual handling</li>
            <li>Heat (steam) is released to the air rather than absorbed into the paint solution</li>
            <li>Colour changes in under 10 minutes</li>
            <li>Short runs are as efficient as long runs</li>
            <li>Start each day with a fresh pail; top off with the previous day’s remainder</li>
          </ul></div>
        <div><p className="sec-no"><b>04</b> System components</p><h2 style={{ marginBottom: 24 }}>Three working parts.</h2>
          <ul className="numlist light"><li><div><h3>Tank</h3><p style={{ color: "var(--steel-500)" }}>Holds the coating material on casters and carries the pump; captures run-off through draining tubes.</p></div></li><li><div><h3>Coating plates</h3><p style={{ color: "var(--steel-500)" }}>Deliver an Aqua-TRC liquid curtain. Height-adjustable, available in multiple diameters, with flow set by four adjustable valves.</p></div></li><li><div><h3>Two-part conveyor</h3><p style={{ color: "var(--steel-500)" }}>12″ belt with speed control: an ingress belt from the oven and an egress belt to coning and striping.</p></div></li></ul></div>
      </div></section>
      <section className="pad mid rule" id="quote" style={{ scrollMarginTop: 100 }}><div className="wrap cols2"><div><p className="sec-no"><b>05</b> Request a quote</p><h2 style={{ marginBottom: 18 }}>Bring spring coating in-house.</h2><p>JN reports the FTS was launched at the 2017 International Door Association trade show in Atlanta.</p></div><QuoteForm interest="Flow-through system (FTS)" id="fts-quote" /></div></section>
      <CtaBand />
    </>
  );
}
