import Link from "next/link";
import { CONTACT, DOCS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <div className="logo-w"><img src="/img/brand/logo.webp" alt="JN Machinery" width={104} height={42} /></div>
            <p style={{ maxWidth: "36ch" }}>Designer-supplier of electric conveyor ovens for metal tempering and stress relieving, and of TRC polymer conversion coating systems.</p>
            <address style={{ fontStyle: "normal", marginTop: 18 }}>{CONTACT.address.map((l) => <div key={l}>{l}</div>)}</address>
          </div>
          <div>
            <h4>Conveyor ovens</h4>
            <ul>
              <li><Link href="/conveyor-ovens/electric/">Electric conveyor ovens</Link></li>
              <li><Link href="/conveyor-ovens/custom/">Custom ovens</Link></li>
              <li><Link href="/conveyor-ovens/incline-conveyors/">Incline conveyors</Link></li>
              <li><Link href="/conveyor-ovens/spare-parts/">Spare parts</Link></li>
            </ul>
          </div>
          <div>
            <h4>TRC coatings</h4>
            <ul>
              <li><Link href="/trc-coatings/aqua-trc/">Aqua-TRC®</Link></li>
              <li><Link href="/trc-coatings/dipping-drying/">Dipping &amp; drying</Link></li>
              <li><Link href="/trc-coatings/flow-through/">Flow-through (FTS)</Link></li>
              <li><a href={DOCS.linecard.href} target="_blank" rel="noopener noreferrer">{DOCS.linecard.label} (PDF)</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.info}`}>{CONTACT.info}</a></li>
              <li>Technical: <a href={`mailto:${CONTACT.tech}`}>{CONTACT.tech}</a></li>
              <li><Link href="/request-quote/">Request a quote</Link></li>
              <li><Link href="/resources/">Articles &amp; resources</Link></li>
            </ul>
          </div>
        </div>
        <div className="ftr-bot"><span>© JN Machinery Corp. Website redesign concept. Development by <a href="https://cyrtechnologies.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>CYR Technologies</a></span><span>1350 Chase St., Algonquin, IL 60102</span></div>
      </div>
    </footer>
  );
}
