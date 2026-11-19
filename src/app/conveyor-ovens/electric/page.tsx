import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, CtaBand } from "@/components/Bits";
import Selector from "@/components/Selector";
import { models, WIRE, BELT_WIDTH, COMMON_FEATURES, ADVANTAGES, DOCS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Electric Conveyor Ovens",
  description: "Compare JN electric conveyor ovens: JN-540, 855, 1040, 1060, 1276, 1888, 15HD, 18HD and 30HD for heat treating and stress relieving steel springs.",
};

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Conveyor ovens", "/conveyor-ovens/"], ["Electric conveyor ovens"]]} title="Electric conveyor ovens" lede="Save space, time and money, and improve quality, with the efficiency of a JN Machinery oven. JN can also rebuild an older oven: essentially a new oven for about one-third of the cost." />
      <section className="pad"><div className="wrap">
        <p className="sec-no"><b>01</b> Oven selector</p><h2 style={{ marginBottom: 36 }}>Match the oven to your wire.</h2>
        <Selector />
      </div></section>
      <section className="pad mid rule"><div className="wrap">
        <p className="sec-no"><b>02</b> Compare models</p><h2 style={{ marginBottom: 36 }}>Published data, side by side.</h2>
        <div className="cmp-wrap" tabIndex={0} aria-label="Model comparison table, scrolls horizontally">
          <table className="cmp">
            <thead><tr><th>Model</th><th>Max wire / part</th><th>Belt width</th><th>Capacity</th><th>Max temp.</th><th>Footprint</th><th>Watts</th><th>Volts</th></tr></thead>
            <tbody>
              {models.map((m) => (
                <tr key={m.slug}>
                  <td><Link href={`/conveyor-ovens/electric/${m.slug}/`}>{m.name}</Link></td>
                  <td>{WIRE[m.slug]?.label.replace("about ", "") ?? "—"}</td><td>{BELT_WIDTH[m.slug]}</td>
                  <td className="wrapc">{m.specs["Capacity"] ?? "Spec sheet"}</td><td>{m.specs["Max Temperature"]?.split("(")[0] ?? "—"}</td>
                  <td className="wrapc">{m.specs["Footprint"]?.split("(")[0] ?? "—"}</td><td>{m.specs["Watts"] ?? "—"}</td><td>{m.specs["Volts"] ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="demo-note" style={{ marginTop: 14 }}>ALL FIGURES AS PUBLISHED BY JN. “—” MEANS NOT PUBLISHED. <a className="tlink" href={DOCS.specs.href} target="_blank" rel="noopener noreferrer">Current specifications (PDF)</a></p>
      </div></section>
      <section className="pad"><div className="wrap cols2">
        <div><p className="sec-no"><b>03</b> Features</p><h2 style={{ marginBottom: 24 }}>Common to all JN ovens.</h2><ul className="ticks">{COMMON_FEATURES.map((f) => <li key={f}>{f}</li>)}</ul></div>
        <div><p className="sec-no"><b>04</b> Advantages</p><h2 style={{ marginBottom: 24 }}>Engineering benefits.</h2><ul className="ticks">{ADVANTAGES.map((f) => <li key={f}>{f}</li>)}</ul></div>
      </div></section>
      <CtaBand />
    </>
  );
}
