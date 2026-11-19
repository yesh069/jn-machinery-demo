import type { Metadata } from "next";
import { PageHero, CtaBand } from "@/components/Bits";
import QuoteForm from "@/components/QuoteForm";
import { DOCS } from "@/lib/data";

export const metadata: Metadata = { title: "Oven Spare Parts", description: "Most component parts for current JN oven models are stocked for same-day shipping. JN also stocks parts for some non-JN ovens." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Conveyor ovens", "/conveyor-ovens/"], ["Spare parts"]]} title="Oven spare parts" lede="Most component parts for current oven models are stocked at JN for immediate, same-day shipping." />
      <section className="pad"><div className="wrap cols2">
        <div>
          <p className="sec-no"><b>01</b> Overview</p><h2 style={{ marginBottom: 18 }}>Off-the-shelf where possible, custom where needed.</h2>
          <p>JN ovens are made with a mix of off-the-shelf parts modified to JN’s specific needs and custom-fabricated assemblies. In some cases JN also stocks spare parts for non-JN ovens. Call for any oven parts need.</p>
          <p className="notice">JN lists parts photos and specifications as “coming soon”. Tell us the oven model and the part you need and technical sales will respond.</p>
          <p><a className="tlink" href={DOCS.parts.href} target="_blank" rel="noopener noreferrer">{DOCS.parts.label}</a></p>
        </div>
        <QuoteForm interest="Oven spare parts" id="parts-quote" compact />
      </div></section>
      <CtaBand />
    </>
  );
}
