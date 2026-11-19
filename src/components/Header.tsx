"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { models, CONTACT } from "@/lib/data";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  const cur = (h: string) => (path.startsWith(h) ? "page" : undefined);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span className="hide-m">Algonquin, Illinois · Made in the USA</span>
          <span><a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a> · <a href={`mailto:${CONTACT.info}`}>{CONTACT.info}</a></span>
        </div>
      </div>
      <header className="hdr">
        <div className="wrap hdr-in">
          <Link href="/" className="logo" aria-label="JN Machinery Corp., home"><img src="/img/brand/logo.webp" alt="JN Machinery" width={114} height={46} /></Link>
          <nav className="nav" aria-label="Main">
            <div className="dd">
              <button aria-haspopup="true" aria-current={cur("/conveyor-ovens")}>Conveyor Ovens</button>
              <div className="mega"><div className="mega-in">
                <div className="mega-col">
                  <h4>Division A</h4>
                  <ul>
                    <li><Link href="/conveyor-ovens/electric/">Electric Conveyor Ovens</Link></li>
                    <li><Link href="/conveyor-ovens/custom/">Custom Ovens &amp; Rebuilds</Link></li>
                    <li><Link href="/conveyor-ovens/incline-conveyors/">Incline Conveyors</Link></li>
                    <li><Link href="/conveyor-ovens/spare-parts/">Oven Spare Parts</Link></li>
                  </ul>
                </div>
                <div className="mega-col">
                  <h4>Oven models</h4>
                  <ul>{models.filter((m) => m.specs["Footprint"]).map((m) => (<li key={m.slug}><Link href={`/conveyor-ovens/electric/${m.slug}/`}>{m.name}<span>{m.specs["Chamber Size (W x L x H)"].split("x")[0].trim()} belt</span></Link></li>))}</ul>
                </div>
                <div className="mega-col">
                  <h4>Not sure which oven?</h4>
                  <p>Use the oven selector to match wire diameter to the models JN publishes for it.</p>
                  <Link className="tlink" href="/conveyor-ovens/electric/#selector">Open selector <ArrowRight size={14} /></Link>
                </div>
              </div></div>
            </div>
            <div className="dd">
              <button aria-haspopup="true" aria-current={cur("/trc-coatings")}>TRC Coatings</button>
              <div className="mega"><div className="mega-in">
                <div className="mega-col">
                  <h4>Division B</h4>
                  <ul>
                    <li><Link href="/trc-coatings/aqua-trc/">Aqua-TRC® Coatings</Link></li>
                    <li><Link href="/trc-coatings/dipping-drying/">Dipping &amp; Drying Systems</Link></li>
                    <li><Link href="/trc-coatings/flow-through/">Flow-Through Systems (FTS)</Link></li>
                  </ul>
                </div>
                <div className="mega-col"><h4>What is TRC?</h4><p>Tempering, Rustproofing and Color Coating: an in-line process that uses the heat of stress relieving to apply a polymer conversion coating.</p><Link className="tlink" href="/trc-coatings/">Overview <ArrowRight size={14} /></Link></div>
                <div className="mega-col"><h4>Request samples</h4><p>Send at least 10 parts per colour and JN will estimate sample cost under conditions close to your process.</p><Link className="tlink" href="/request-quote/">Start a request <ArrowRight size={14} /></Link></div>
              </div></div>
            </div>
            <Link href="/resources/" aria-current={cur("/resources")}>Resources</Link>
            <Link href="/about/" aria-current={cur("/about")}>About</Link>
            <Link href="/contact/" aria-current={cur("/contact")}>Contact</Link>
          </nav>
          <div className="hdr-cta">
            <Link className="btn btn-primary" href="/request-quote/">Request a Quote</Link>
            <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu size={22} /></button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mnav" role="dialog" aria-modal="true" aria-label="Menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.45, ease: [0.65, 0, 0.2, 1] }}>
            <div className="mnav-top"><span className="mono" style={{ color: "var(--ember)" }}>JN Machinery Corp.</span><button className="burger" style={{ display: "grid", color: "#fff", borderColor: "#fff" }} aria-label="Close menu" onClick={() => setOpen(false)}><X size={22} /></button></div>
            <details>
              <summary>Conveyor Ovens <span>+</span></summary>
              <Link className="sub" href="/conveyor-ovens/electric/">Electric conveyor ovens</Link>
              <Link className="sub" href="/conveyor-ovens/custom/">Custom ovens &amp; rebuilds</Link>
              <Link className="sub" href="/conveyor-ovens/incline-conveyors/">Incline conveyors</Link>
              <Link className="sub" href="/conveyor-ovens/spare-parts/">Oven spare parts</Link>
            </details>
            <details>
              <summary>TRC Coatings <span>+</span></summary>
              <Link className="sub" href="/trc-coatings/aqua-trc/">Aqua-TRC® coatings</Link>
              <Link className="sub" href="/trc-coatings/dipping-drying/">Dipping &amp; drying systems</Link>
              <Link className="sub" href="/trc-coatings/flow-through/">Flow-through systems</Link>
            </details>
            <Link className="big" href="/resources/">Resources <span>→</span></Link>
            <Link className="big" href="/about/">About <span>→</span></Link>
            <Link className="big" href="/contact/">Contact <span>→</span></Link>
            <div style={{ marginTop: 28 }}><Link className="btn btn-primary" href="/request-quote/">Request a Quote</Link></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
