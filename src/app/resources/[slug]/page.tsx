import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, articleBySlug, fmtDate } from "@/lib/data";
import { PageHero, CtaBand } from "@/components/Bits";

export const generateStaticParams = () => articles.filter((a) => a.blocks.length > 5).map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = articleBySlug((await params).slug);
  if (!a) return {};
  const first = a.blocks.find((b) => b.t === "p" && (b.x?.length ?? 0) > 80)?.x ?? "";
  return { title: a.title, description: first.slice(0, 155) };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const a = articleBySlug((await params).slug);
  if (!a) notFound();
  // group consecutive list items
  const out: React.ReactNode[] = []; let list: string[] = [];
  const flush = (k: number) => { if (list.length) { out.push(<ul key={`u${k}`}>{list.map((x, i) => <li key={i}>{x}</li>)}</ul>); list = []; } };
  let skipped = 0;
  a.blocks.forEach((b, i) => {
    if (b.t === "li") { list.push(b.x!); return; }
    flush(i);
    if (b.t === "img") out.push(<figure key={i}><img src={b.src} alt="" loading="lazy" /></figure>);
    else if (b.t === "h2") out.push(<h2 key={i}>{b.x}</h2>);
    else if (b.t === "h3") out.push(<h3 key={i}>{b.x}</h3>);
    else if (b.t === "q") out.push(<blockquote key={i}>{b.x}</blockquote>);
    else out.push(<p key={i}>{b.x}</p>);
  }); flush(9999);
  void skipped;
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Resources", "/resources/"], ["Article"]]} title={a.title} lede={`Published ${fmtDate(a.date)} · JN Machinery`} />
      <section className="pad"><div className="wrap"><article className="article">{out}
        <p style={{ marginTop: 48 }}><Link className="tlink" href="/resources/">← All resources</Link></p>
      </article></div></section>
      <CtaBand />
    </>
  );
}
