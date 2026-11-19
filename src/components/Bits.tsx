"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Article, fmtDate } from "@/lib/data";

export function PageHero({ crumbs, title, lede }: { crumbs: [string, string?][]; title: string; lede?: string }) {
  return (
    <section className="phero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          {crumbs.map(([l, h], i) => (<span key={l} style={{ display: "contents" }}>{h ? <Link href={h}>{l}</Link> : <span aria-current="page" style={{ color: "#fff" }}>{l}</span>}{i < crumbs.length - 1 && <span>/</span>}</span>))}
        </nav>
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Talk to an engineer about your process.", sub = "Tell us your wire size, throughput and temperature. JN will recommend an oven or coating system." }: { title?: string; sub?: string }) {
  return (
    <section className="cta">
      <div className="wrap">
        <div><h2>{title}</h2><p style={{ marginTop: 14, maxWidth: "52ch" }}>{sub}</p></div>
        <div className="cta-acts">
          <Link className="btn btn-dark" href="/request-quote/">Request a Quote <ArrowRight size={16} className="arr" aria-hidden /></Link>
          <a className="btn btn-line on-light" style={{ color: "#14110a" }} href="tel:+12242098300">224-209-8300</a>
        </div>
      </div>
    </section>
  );
}

export function ResourceList({ items }: { items: Article[] }) {
  return (
    <div className="res">
      {items.map((a) => (
        <Link key={a.slug} href={`/resources/${a.slug}/`}>
          <time dateTime={a.date}>{fmtDate(a.date)}</time>
          <h3>{a.title}</h3>
          <span className="tlink" aria-hidden>Read</span>
        </Link>
      ))}
    </div>
  );
}

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="gal-main"><img key={images[i]} src={images[i]} alt={alt} style={{ animation: "fadein .4s" }} /></div>
      {images.length > 1 && (
        <div className="gal-th" role="group" aria-label="Product photographs">
          {images.map((s, k) => (<button key={s} aria-current={k === i} aria-label={`Photo ${k + 1}`} onClick={() => setI(k)}><img src={s} alt="" loading="lazy" /></button>))}
        </div>
      )}
      <style>{`@keyframes fadein{from{opacity:0}to{opacity:1}}`}</style>
    </div>
  );
}

export function SpecRows({ specs, order }: { specs: Record<string, string>; order: string[] }) {
  return (
    <table className="spec"><tbody>{order.filter((k) => specs[k]).map((k) => (<tr key={k}><th scope="row">{k.replace(" (W x L x H)", " (W × L × H)")}</th><td>{specs[k]}</td></tr>))}</tbody></table>
  );
}
