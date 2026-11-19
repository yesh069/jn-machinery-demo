import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Wipe } from "@/components/Motion";
import Selector from "@/components/Selector";
import { ProcessFlow } from "@/components/Diagrams";
import { CtaBand, ResourceList } from "@/components/Bits";
import { HeroPhoto } from "@/components/HeroPhoto";
import { COMMON_FEATURES, ADVANTAGES, OVEN_FEATURES, APPLICATIONS, articles } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="sec-no" style={{ color: "var(--steel-300)" }}><b>JN</b> Machinery Corp. · Algonquin, Illinois</p>
            <h1>Conveyor ovens <span>engineered</span> for spring heat treatment.</h1>
            <p className="lede">Electric conveyor ovens for tempering and stress relieving steel springs, and TRC coating systems that use the same heat to colour-code and rustproof the part. Designed and supplied by JN since 1985.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/conveyor-ovens/electric/">Explore Conveyor Ovens <ArrowRight size={16} className="arr" aria-hidden /></Link>
              <Link className="btn btn-line" href="/request-quote/">Request a Quote</Link>
            </div>
          </div>
          <HeroPhoto />
        </div>
        <div className="hero-bar">
          <div className="wrap">
            <div><b>5,000+</b><span>ovens operating worldwide, as reported by JN</span></div>
            <div><b>1985</b><span>established as an independent company</span></div>
            <div><b>9</b><span>electric oven models, 5 in. to 30 in. belts</span></div>
            <div><b>USA</b><span>made in the USA</span></div>
          </div>
        </div>
      </section>

      {/* 01 OVENS */}
      <section className="pad" id="ovens">
        <div className="wrap">
          <Reveal>
            <div className="div-head">
              <div><p className="sec-no"><b>01</b> Division A · Conveyor ovens</p><h2>Electric conveyor ovens.</h2></div>
              <p>Spring manufacturers use JN conveyor ovens for heat treating and stress relief of springs made from carbon, stainless steel or chrome silicon. Choose the wire diameter, then compare the models JN publishes for it.</p>
            </div>
          </Reveal>
          <Reveal><Selector /></Reveal>
          <p style={{ marginTop: 28 }}><Link className="tlink" href="/conveyor-ovens/electric/">Compare all models in a table <ArrowRight size={14} /></Link></p>
        </div>
      </section>

      {/* 02 FEATURES */}
      <section className="pad mid rule">
        <div className="wrap">
          <Reveal>
            <p className="sec-no"><b>02</b> Common to every JN oven</p>
            <h2 style={{ maxWidth: "20ch", marginBottom: 44 }}>One platform. Nine sizes.</h2>
          </Reveal>
          <Reveal>
            <div className="mosaic">
              <div><h3>Built-in on all JN ovens</h3><ul className="ticks">{COMMON_FEATURES.map((f) => <li key={f}>{f}</li>)}</ul></div>
              <div><h3>Options &amp; highlights</h3><ul className="ticks">{OVEN_FEATURES.map((f) => <li key={f}>{f}</li>)}</ul><p style={{ marginTop: 20 }}><Link className="tlink" href="/conveyor-ovens/custom/">Custom ovens &amp; rebuilds <ArrowRight size={14} /></Link></p></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 CUSTOM */}
      <section className="pad">
        <div className="wrap cols2" style={{ alignItems: "center" }}>
          <Wipe><div className="gal-main" style={{ aspectRatio: "16/10" }}><img src="/img/site/jn-1888-front.webp" alt="JN-1888 conveyor oven, front-three-quarter view" loading="lazy" /></div></Wipe>
          <Reveal>
            <p className="sec-no"><b>03</b> Custom ovens</p>
            <h2 style={{ marginBottom: 22 }}>Almost any part has an ideal oven configuration.</h2>
            <p>JN can fabricate an oven to meet your unique needs and says it loves a design challenge. Its fabrication shop can also rebuild any make or model of electric oven, including overseas brands: JN states a rebuilt oven is essentially new for about one-third of the cost.</p>
            <p>Options include stainless steel curtains to retain heat and lower energy use, and exhaust hoods that carry oily smoke away from the entry and exit ends into your collection system.</p>
            <p style={{ marginTop: 26 }}><Link className="btn btn-dark" href="/conveyor-ovens/custom/">Custom oven capabilities <ArrowRight size={16} className="arr" aria-hidden /></Link></p>
          </Reveal>
        </div>
      </section>

      {/* 04 TRC */}
      <section className="pad dark">
        <div className="wrap">
          <Reveal>
            <div className="div-head">
              <div><p className="sec-no"><b>04</b> Division B · TRC coating systems</p><h2>Temper, rustproof and colour-code in one pass.</h2></div>
              <p>TRC stands for Tempering, Rustproofing and Color Coating. Formed parts leaving the oven at 350°F (177°C) or hotter are coated with Aqua-TRC, a water-based polymer that bonds to hot metal. No extra curing step, and little to no additional labour, says JN.</p>
            </div>
          </Reveal>
          <Reveal><ProcessFlow kind="trc" /></Reveal>
          <Reveal>
            <div className="sys" style={{ marginTop: 44 }}>
              <Link href="/trc-coatings/aqua-trc/"><div><span className="no">B1</span><h3 style={{ fontSize: "2.4rem", margin: "8px 0 14px" }}>Aqua-TRC® coatings</h3><p>A concentrated water-based polymer coating diluted from 1:1 to 4:1 with water. JN formulates it for hot materials, with no ammonia handling and a smooth conversion coat in a range of colours.</p><span className="tlink" style={{ marginTop: 18 }}>Coating technology <ArrowRight size={14} /></span></div><img src="/img/site/fts-video-slide.webp" alt="Aqua-TRC blue coating on a spring in the FTS" loading="lazy" /></Link>
              <Link href="/trc-coatings/dipping-drying/"><span className="no">B2</span><h3>Dipping &amp; drying systems</h3><p>The TRC300: dip tank, incline conveyor and drying conveyor for all types of springs.</p><span className="tlink">View system <ArrowRight size={14} /></span></Link>
              <Link href="/trc-coatings/flow-through/"><span className="no">B3</span><h3>Flow-through systems (FTS)</h3><p>Sprays Aqua-TRC onto garage and overhead door springs using minimal tank sizes. Dry-to-the-touch in under 30 seconds after stress relief, per JN.</p><span className="tlink">View system <ArrowRight size={14} /></span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 ADVANTAGES */}
      <section className="pad">
        <div className="wrap cols2">
          <Reveal>
            <p className="sec-no"><b>05</b> Engineering advantages</p>
            <h2 style={{ marginBottom: 22 }}>Why on-line stress relieving.</h2>
            <p>JN has published studies concluding that in most applications, on-line, continuous heat treatment for springs is superior to the traditional batch method in large industrial ovens. The advantages JN lists for its ovens:</p>
            <p style={{ marginTop: 20 }}><Link className="tlink" href="/resources/evaluating-the-on-line-stress-relieving-process/">Read the study <ArrowRight size={14} /></Link></p>
          </Reveal>
          <Reveal delay={0.1}><ul className="ticks">{ADVANTAGES.map((a) => <li key={a}>{a}</li>)}</ul></Reveal>
        </div>
      </section>

      {/* 06 CLAIM */}
      <section className="pad mid rule">
        <div className="wrap">
          <p className="sec-no"><b>06</b> Installed base</p>
          <Reveal>
            <div className="claim">
              <div className="big" aria-label="5,000 plus">5,000<sup>+</sup></div>
              <div>
                <blockquote><p style={{ fontSize: "1.5rem", lineHeight: 1.3, color: "var(--graphite)", margin: 0 }}>“With over 5000 ovens operating worldwide, JN has the expertise and experience to handle your stress relieving requirements.”</p><cite>JN Machinery Corp., homepage</cite></blockquote>
                <p className="demo-note" style={{ marginTop: 22, maxWidth: "58ch" }}>CLAIM AS PUBLISHED BY JN. THE COMPANY’S ABOUT PAGE CITES “OVER 4400 FURNACES”. THE CLIENT SHOULD CONFIRM THE CURRENT FIGURE BEFORE LAUNCH.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 APPLICATIONS */}
      <section className="pad">
        <div className="wrap">
          <Reveal><p className="sec-no"><b>07</b> Applications</p><h2 style={{ marginBottom: 40, maxWidth: "18ch" }}>Where JN ovens and coatings work.</h2></Reveal>
          <Reveal><div className="apps">{APPLICATIONS.map((a, i) => (<div key={a.t}><span className="ix">A.0{i + 1}</span><h3>{a.t}</h3><p>{a.d}</p></div>))}</div></Reveal>
        </div>
      </section>

      {/* 08 RESOURCES */}
      <section className="pad mid rule">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 20, alignItems: "end", flexWrap: "wrap", marginBottom: 36 }}>
              <div><p className="sec-no"><b>08</b> Technical resources</p><h2>Published by JN engineers.</h2></div>
              <Link className="tlink" href="/resources/">All resources <ArrowRight size={14} /></Link>
            </div>
          </Reveal>
          <ResourceList items={articles.filter((a) => a.blocks.length > 5).slice(0, 4)} />
        </div>
      </section>

      {/* 09 CREDIBILITY */}
      <section className="pad">
        <div className="wrap">
          <Reveal>
            <p className="sec-no"><b>09</b> Company</p>
            <div className="cols2">
              <h2>Born by a spring company, for spring companies.</h2>
              <div>
                <p>The history of JN’s electric conveyor furnace began in 1982 as a unit of North American Spring &amp; Stamping Corporation (NASSCO), which built conveyor furnaces for its own use and saw the effect on quality and productivity. JN Machinery Corporation became an independent company in 1985.</p>
                <p>JN draws on its original partners’ combined 95 years of experience in the spring and stamping industry, and was the first company to develop and market an automated paint system for springs, TRC.</p>
                <Link className="tlink" href="/about/">About JN <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="tl">
              <div><b>1982</b><p>Conveyor furnace begins as a NASSCO unit</p></div>
              <div><b>1985</b><p>JN Machinery Corporation established</p></div>
              <div><b>TRC</b><p>First automated paint system for springs, per JN</p></div>
              <div><b>2017</b><p>FTS launched at the IDA trade show, Atlanta</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
