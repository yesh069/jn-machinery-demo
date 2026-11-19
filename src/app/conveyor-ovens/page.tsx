import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero, CtaBand } from "@/components/Bits";

export const metadata: Metadata = { title: "Conveyor Ovens", description: "JN Machinery conveyor ovens: electric conveyor ovens, custom ovens and rebuilds, incline conveyors and spare parts." };

const items: [string, string, string, string][] = [
  ["Electric conveyor ovens", "/conveyor-ovens/electric/", "Nine models from a 5 in. to a 30 in. belt, for heat treatment and stress relieving of steel springs.", "/img/site/jn-1060-hero.webp"],
  ["Custom ovens & rebuilds", "/conveyor-ovens/custom/", "Ovens fabricated to your requirements; rebuilds of any make or model; curtains and exhaust hoods.", "/img/site/jn-1888-front.webp"],
  ["Incline conveyors", "/conveyor-ovens/incline-conveyors/", "Incline cooling conveyors and part of the TRC dipping system.", "/img/site/trc-300-system.webp"],
  ["Oven spare parts", "/conveyor-ovens/spare-parts/", "Most component parts for current oven models are stocked for same-day shipping.", "/img/site/jn30hd-detail.webp"],
];
export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Conveyor ovens"]]} title="Division A: Conveyor ovens" lede="Designed and built by JN for heat treating and stress relieving springs, and for a wide range of other thermal processes." />
      <section className="pad"><div className="wrap">
        {items.map(([t, h, d, img], i) => (
          <Link key={t} href={h} className="cols2" style={{ alignItems: "center", padding: "34px 0", borderTop: "1px solid var(--steel-300)" }}>
            <div style={{ order: i % 2 }}><p className="sec-no"><b>A.0{i + 1}</b></p><h2 style={{ marginBottom: 16 }}>{t}</h2><p style={{ maxWidth: "46ch" }}>{d}</p><span className="tlink">Explore <ArrowRight size={14} /></span></div>
            <div className="gal-main" style={{ aspectRatio: "16/8" }}><img src={img} alt="" loading="lazy" /></div>
          </Link>
        ))}
      </div></section>
      <CtaBand />
    </>
  );
}
