import type { Metadata } from "next";
import { PageHero, CtaBand, ResourceList } from "@/components/Bits";
import { articles, DOCS } from "@/lib/data";

export const metadata: Metadata = { title: "Technical Resources", description: "Technical articles from JN Machinery engineers on on-line stress relieving, conveyor oven maintenance, energy efficiency, buying a used oven and troubleshooting." };

export default function Page() {
  const full = articles.filter((a) => a.blocks.length > 5);
  const news = articles.filter((a) => a.blocks.length <= 5);
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Resources"]]} title="Technical resources" lede="Articles and published works by JN engineers, made available to customers at any time." />
      <section className="pad"><div className="wrap">
        <p className="sec-no"><b>01</b> Articles</p><h2 style={{ marginBottom: 32 }}>Engineering articles.</h2>
        <ResourceList items={full} />
      </div></section>
      <section className="pad mid rule"><div className="wrap cols2">
        <div><p className="sec-no"><b>02</b> Downloads</p><h2 style={{ marginBottom: 20 }}>Spec sheets &amp; line cards.</h2></div>
        <ul className="ticks">
          {[DOCS.linecard, DOCS.specs, DOCS.colors, DOCS.trcAd, DOCS.incline, DOCS.parts].map((d) => <li key={d.href}><a className="tlink" href={d.href} target="_blank" rel="noopener noreferrer">{d.label}</a></li>)}
        </ul>
      </div></section>
      <section className="pad"><div className="wrap"><p className="sec-no"><b>03</b> Company news</p><h2 style={{ marginBottom: 30 }}>From the trade shows.</h2>
        {news.map((a) => (<div key={a.slug} style={{ padding: "18px 0", borderTop: "1px solid var(--steel-300)" }}><time className="mono" style={{ color: "var(--steel-500)" }}>{a.date}</time><p style={{ margin: "6px 0 0" }}>{a.blocks.map((b) => b.x).filter(Boolean).join(" ")}</p></div>))}
      </div></section>
      <CtaBand />
    </>
  );
}
