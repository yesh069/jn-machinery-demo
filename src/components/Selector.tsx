"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { models, WIRE, SPEC_ORDER, DOCS } from "@/lib/data";

const pick = ["Footprint", "Chamber Size (W x L x H)", "Capacity", "Max Temperature", "Volts", "Watts"];

export default function Selector() {
  const [mm, setMm] = useState(0);
  const [sel, setSel] = useState("jn-1276");
  const fits = (slug: string) => { const w = WIRE[slug]; return mm === 0 ? true : !!w && w.mm >= mm; };
  const m = models.find((x) => x.slug === sel)!;
  const photo = m.images[0];
  const label = mm === 0 ? "Any size" : `${mm.toFixed(mm % 1 ? 1 : 0)} mm  /  ${(mm / 25.4).toFixed(3).replace(/^0/, "")}″`;
  const count = models.filter((x) => fits(x.slug)).length;

  return (
    <div className="sel" id="selector">
      <div className="sel-list">
        <div className="sel-tools">
          <label htmlFor="wire">Wire / part diameter</label>
          <output htmlFor="wire" aria-live="polite">{label}</output>
          <input id="wire" type="range" min={0} max={16} step={0.5} value={mm} onChange={(e) => setMm(parseFloat(e.target.value))} aria-valuetext={label} />
          <small><span>Any</span><span>16 mm</span></small>
          <small style={{ marginTop: 8 }}><span>{mm === 0 ? `${models.length} models` : `${count} model${count === 1 ? "" : "s"} published for this size or larger`}</span></small>
        </div>
        {models.map((x) => {
          const w = WIRE[x.slug];
          return (
            <button key={x.slug} className={`sel-item ${fits(x.slug) ? "" : "off"}`} aria-pressed={sel === x.slug} onClick={() => setSel(x.slug)}>
              <b>{x.name}</b><span>{w ? `≤ ${w.label.replace("about ", "")}` : "heavy duty"}</span>
              <small>{x.tagline}</small>
            </button>
          );
        })}
      </div>
      <div className="sel-detail">
        <div className="sel-photo">
          <AnimatePresence mode="wait">
            {photo ? (
              <motion.img key={photo} src={photo} alt={`${m.name} electric conveyor oven`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} />
            ) : (
              <motion.div key="nophoto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "grid", placeItems: "center", height: "100%", color: "var(--steel-500)", textAlign: "center", padding: 24 }}>
                <span className="mono">Studio photography not yet published for {m.name}</span>
              </motion.div>
            )}
          </AnimatePresence>
          <span className="tag">{m.name}{m.aka ? ` · aka ${m.aka}` : ""}</span>
        </div>
        <div className="sel-body">
          <div><h3>{m.name}</h3><p>{m.tagline}</p></div>
          {Object.keys(m.specs).length > 0 ? (
            <table className="spec"><tbody>{SPEC_ORDER.filter((k) => pick.includes(k) && m.specs[k]).map((k) => (<tr key={k}><th scope="row">{k.replace(" (W x L x H)", "")}</th><td>{m.specs[k]}</td></tr>))}</tbody></table>
          ) : (
            <p className="notice">JN has not yet published a full data table for the {m.name}. The specification sheet is available to download.</p>
          )}
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center" }}>
            <Link className="btn btn-dark" href={`/conveyor-ovens/electric/${m.slug}/`}>View {m.name} <ArrowRight size={16} className="arr" aria-hidden /></Link>
            <Link className="tlink" href="/request-quote/">Request a quote</Link>
            {DOCS.models[m.slug] && <a className="tlink" href={DOCS.models[m.slug]} target="_blank" rel="noopener noreferrer">Spec sheet (PDF)</a>}
          </div>
        </div>
      </div>
    </div>
  );
}
