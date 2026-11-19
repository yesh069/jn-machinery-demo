import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { models, modelBySlug, WIRE, BELT_WIDTH, COMMON_FEATURES, ADVANTAGES, APPLICATIONS, SPEC_ORDER, DOCS, articles } from "@/lib/data";
import { PageHero, Gallery, SpecRows, CtaBand, ResourceList } from "@/components/Bits";
import { OvenPlan } from "@/components/Diagrams";
import QuoteForm from "@/components/QuoteForm";

export const generateStaticParams = () => models.map((m) => ({ model: m.slug }));

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const m = modelBySlug((await params).model);
  if (!m) return {};
  return { title: `${m.name} Electric Conveyor Oven`, description: `${m.name}${m.aka ? ` (aka ${m.aka})` : ""}: ${m.tagline}. Electric conveyor oven for spring heat treatment from JN Machinery.` };
}

export default async function Page({ params }: { params: Promise<{ model: string }> }) {
  const m = modelBySlug((await params).model);
  if (!m) notFound();
  const hasSpecs = !!m.specs["Footprint"];
  const wire = WIRE[m.slug];
  const idx = models.findIndex((x) => x.slug === m.slug);
  const prev = models[(idx + models.length - 1) % models.length], next = models[(idx + 1) % models.length];
  const res = articles.filter((a) => ["heat-treat-more-products-using-less-energy", "preventive-maintenance-tips-for-your-inline-conveyor-ovens", "troubleshooting-oven-issues"].includes(a.slug));
  const ld = { "@context": "https://schema.org", "@type": "Product", name: `JN Machinery ${m.name} electric conveyor oven`, brand: { "@type": "Brand", name: "JN Machinery" }, description: `${m.tagline}. ${m.description}`, image: m.images };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero crumbs={[["Home", "/"], ["Conveyor ovens", "/conveyor-ovens/"], ["Electric", "/conveyor-ovens/electric/"], [m.name]]} title={`${m.name}${m.aka ? ` (aka ${m.aka})` : ""}`} lede={m.tagline} />
      <div className="subnav"><div className="wrap"><a href="#overview">Overview</a><a href="#specs">Specifications</a><a href="#features">Features</a><a href="#applications">Applications</a><a href="#resources">Resources</a><a href="#quote">Request a quote</a></div></div>

      <section className="pad" id="overview" style={{ scrollMarginTop: 130 }}>
        <div className="wrap pgrid">
          <div>
            {m.images.length ? <Gallery images={m.images} alt={`${m.name} electric conveyor oven`} /> : (
              <div className="gal-main" style={{ display: "grid", placeItems: "center", textAlign: "center", padding: 30 }}><span className="mono" style={{ color: "var(--steel-500)" }}>Studio photography for the {m.name} has not been published yet.<br />Specification sheet available below.</span></div>
            )}
          </div>
          <div className="sticky">
            <p className="sec-no"><b>01</b> Overview</p>
            <h2 style={{ fontSize: "clamp(2rem,3vw,2.8rem)", marginBottom: 18 }}>{m.tagline.charAt(0).toUpperCase() + m.tagline.slice(1)}</h2>
            {m.description && <p>{m.description}</p>}
            <div style={{ marginTop: 18 }}>
              {wire && <span className="pill">Wire ≤ {wire.label}</span>}
              <span className="pill">Belt {BELT_WIDTH[m.slug]}</span><span className="pill">Electric</span><span className="pill">Made in the USA</span>
            </div>
            <div className="quote-box">
              <h3>Quote the {m.name}</h3>
              <p>Tell us your wire size, throughput and voltage.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link className="btn btn-primary" href={`/request-quote/?model=${m.slug}`}>Request a Quote <ArrowRight size={16} className="arr" aria-hidden /></Link>
                {DOCS.models[m.slug] && <a className="btn btn-line" href={DOCS.models[m.slug]} target="_blank" rel="noopener noreferrer">Spec sheet (PDF)</a>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pad mid rule" id="specs" style={{ scrollMarginTop: 130 }}>
        <div className="wrap cols2">
          <div>
            <p className="sec-no"><b>02</b> Technical data</p>
            <h2 style={{ marginBottom: 26 }}>{m.name} specifications.</h2>
            {hasSpecs ? <SpecRows specs={m.specs} order={SPEC_ORDER} /> : <p className="notice">JN has not yet published a technical data table for the {m.name}. Information is coming; in the meantime the specification sheet can be downloaded or requested from technical sales.</p>}
            {m.note && hasSpecs && <p className="demo-note" style={{ marginTop: 12 }}>{m.note.toUpperCase()}</p>}
            {m.slug === "jn-15hd" && <p className="notice">Capacity is reproduced exactly as published on JN’s current website (980 lb/hr at 500°F; 250 lb/hr at 750°F). Please confirm figures with JN technical sales before specifying.</p>}
          </div>
          <div>{hasSpecs ? <OvenPlan model={m} /> : <p className="notice">A dimensional plan is shown here once the footprint and chamber size are published.</p>}</div>
        </div>
      </section>

      <section className="pad" id="features" style={{ scrollMarginTop: 130 }}>
        <div className="wrap cols2">
          <div><p className="sec-no"><b>03</b> Key features</p><h2 style={{ marginBottom: 24 }}>Built into every JN oven.</h2><ul className="ticks">{COMMON_FEATURES.map((f) => <li key={f}>{f}</li>)}</ul></div>
          <div><p className="sec-no"><b>04</b> Engineering advantages</p><h2 style={{ marginBottom: 24 }}>What you gain.</h2><ul className="ticks">{ADVANTAGES.slice(0, 8).map((f) => <li key={f}>{f}</li>)}</ul></div>
        </div>
      </section>

      <section className="pad dark" id="applications" style={{ scrollMarginTop: 130 }}>
        <div className="wrap">
          <p className="sec-no"><b>05</b> Applications</p>
          <h2 style={{ marginBottom: 36, maxWidth: "18ch" }}>What this oven is used for.</h2>
          <ul className="numlist" style={{ maxWidth: 900 }}>{APPLICATIONS.slice(0, 2).concat(APPLICATIONS[3]).map((a) => <li key={a.t}><div><h3>{a.t}</h3><p>{a.d}</p></div></li>)}</ul>
        </div>
      </section>

      <section className="pad" id="resources" style={{ scrollMarginTop: 130 }}>
        <div className="wrap"><p className="sec-no"><b>06</b> Relevant technical resources</p><h2 style={{ marginBottom: 32 }}>Read before you buy.</h2><ResourceList items={res} /></div>
      </section>

      <section className="pad mid rule" id="quote" style={{ scrollMarginTop: 130 }}>
        <div className="wrap cols2">
          <div><p className="sec-no"><b>07</b> Request a quote</p><h2 style={{ marginBottom: 20 }}>Quote the {m.name}.</h2><p>Share your application and JN technical sales will come back with a recommendation. You can also call <a className="tlink" href="tel:+12242098300">224-209-8300</a>.</p>
            <p style={{ marginTop: 28 }}><Link className="tlink" href={`/conveyor-ovens/electric/${prev.slug}/`}>← {prev.name}</Link> &nbsp;&nbsp; <Link className="tlink" href={`/conveyor-ovens/electric/${next.slug}/`}>{next.name} →</Link></p></div>
          <QuoteForm interest={`${m.name} electric conveyor oven`} id="model-quote" compact />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
