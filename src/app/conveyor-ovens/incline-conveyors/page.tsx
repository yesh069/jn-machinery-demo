import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, CtaBand } from "@/components/Bits";
import { DOCS } from "@/lib/data";

export const metadata: Metadata = { title: "Incline Conveyors", description: "JN incline cooling conveyors and incline conveyors used in TRC dipping and drying systems." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Conveyor ovens", "/conveyor-ovens/"], ["Incline conveyors"]]} title="Incline conveyors" lede="Incline cooling conveyors, and the incline conveyor that lifts coated parts out of the TRC dip tank." />
      <section className="pad"><div className="wrap cols2">
        <div className="gal-main" style={{ aspectRatio: "16/9" }}><img src="/img/site/trc-300-system.webp" alt="TRC300 system showing the incline conveyor between the dip tank and the drying conveyor" loading="lazy" /></div>
        <div>
          <p className="sec-no"><b>01</b> Overview</p><h2 style={{ marginBottom: 18 }}>Part of the TRC line.</h2>
          <p>In the TRC300 system, the incline conveyor (11.8″ belt, 17.3″ hopper; 115 V, 1.3 A) extracts parts from the coating material as quickly as possible and delivers still-warm parts to the drying conveyor. It runs on standard 115 V single-phase power with three controls: power on/off, blower on/off and a belt-speed potentiometer.</p>
          <p className="notice">JN lists standalone incline cooling conveyor photos and specifications as “coming soon”. Download the product sheets below or contact technical sales.</p>
          <p><a className="tlink" href={DOCS.incline.href} target="_blank" rel="noopener noreferrer">{DOCS.incline.label}</a> &nbsp;&nbsp; <Link className="tlink" href="/trc-coatings/dipping-drying/">TRC300 system</Link></p>
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
