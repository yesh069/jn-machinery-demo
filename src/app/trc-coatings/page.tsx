import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/Bits";
import { ProcessFlow } from "@/components/Diagrams";

export const metadata: Metadata = { title: "TRC Coating Systems", description: "TRC (Tempering, Rustproofing and Color Coating), Aqua-TRC polymer coating, dipping and drying systems and FTS flow-through systems from JN Machinery." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["TRC coatings"]]} title="Division B: TRC coating systems" lede="An in-line process that uses the heat of the tempering and stress-relieving operation to apply a polymer conversion coating: corrosion protection and colour-coding in one pass." />
      <section className="pad"><div className="wrap cols2">
        <div><p className="sec-no"><b>01</b> What is TRC?</p><h2 style={{ marginBottom: 20 }}>Tempering, Rustproofing and Color Coating.</h2></div>
        <div>
          <p>TRC is designed to convey hot materials through a coating material and deposit dry-to-the-touch product in less than 3 minutes, says JN. The entire tempering and painting process can be done in-house together with standard coiling, forming and stress-relief processes.</p>
          <p>Formed parts at 350°F (177°C) or hotter drop into a polymer solution. An incline conveyor removes them from the dip tank and drops them onto a drying conveyor. It is a compact in-line system that requires little to no additional labour.</p>
        </div>
      </div></section>
      <section className="pad dark"><div className="wrap"><p className="sec-no"><b>02</b> The process</p><h2 style={{ marginBottom: 34 }}>From oven to dry part.</h2><ProcessFlow kind="trc" /></div></section>
      <section className="pad"><div className="wrap">
        <p className="sec-no"><b>03</b> Systems and materials</p><h2 style={{ marginBottom: 34 }}>Choose your route.</h2>
        {[
          ["Aqua-TRC® coatings", "/trc-coatings/aqua-trc/", "The water-based polymer coating material at the heart of every JN coating line.", "/img/site/fts-video-slide.webp"],
          ["Dipping & drying systems", "/trc-coatings/dipping-drying/", "The TRC300: dip tank, incline conveyor and drying conveyor, for all types of springs.", "/img/site/trc-300-system.webp"],
          ["Flow-through systems (FTS)", "/trc-coatings/flow-through/", "A spray-style system for garage and overhead door springs that needs no drying conveyor.", "/img/site/fts-frontal.webp"],
        ].map(([t, h, d, img], i) => (
          <Link key={t} href={h} className="cols2" style={{ alignItems: "center", padding: "30px 0", borderTop: "1px solid var(--steel-300)" }}>
            <div style={{ order: i % 2 }}><p className="sec-no"><b>B.0{i + 1}</b></p><h2 style={{ marginBottom: 14 }}>{t}</h2><p style={{ maxWidth: "46ch" }}>{d}</p><span className="tlink">Explore <ArrowRight size={14} /></span></div>
            <div className="gal-main" style={{ aspectRatio: "16/8" }}><img src={img} alt="" loading="lazy" /></div>
          </Link>
        ))}
      </div></section>
      <CtaBand title="Ready to see Aqua-TRC on your parts?" sub="JN can estimate sample cost if you send at least 10 pieces per colour, and quote cost per gallon and per 1,000 parts." />
    </>
  );
}
