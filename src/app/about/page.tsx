import type { Metadata } from "next";
import { PageHero, CtaBand } from "@/components/Bits";
import { Wipe } from "@/components/Motion";

export const metadata: Metadata = { title: "About JN Machinery", description: "JN Machinery Corp. was founded in 1985, growing out of a conveyor furnace first built in 1982 by North American Spring & Stamping Corporation." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["About"]]} title="Born by a spring company, for spring companies." lede="The world’s leading designer-supplier of electric conveyor ovens for heat treating steel springs, by JN’s own description." />
      <section className="pad"><div className="wrap cols2">
        <div><p className="sec-no"><b>01</b> History</p><h2 style={{ marginBottom: 20 }}>From an in-house furnace to an independent company.</h2>
          <p>JN Machinery was founded in 1985. The history of JN’s electric conveyor furnace began in 1982 as a unit of North American Spring &amp; Stamping Corporation (NASSCO), which developed conveyor furnaces for its own internal use. The furnace had quite an impact on quality and productivity, and JN Machinery Corporation was established as a new independent company in 1985.</p>
          <p>All of JN’s conveyor ovens are designed and built in its fabrication plant, drawing on its original partners’ combined 95 years of experience in the spring and stamping industry and its newest partner’s international business experience.</p></div>
        <Wipe><div className="gal-main" style={{ aspectRatio: "4/3.2" }}><img src="/img/site/pr-jn-machinery.webp" alt="Two JN Machinery representatives beside a conveyor oven at an industry trade show" loading="lazy" style={{ objectPosition: "center 30%" }} /></div></Wipe>
      </div></section>
      <section className="pad dark"><div className="wrap cols2">
        <div><p className="sec-no"><b>02</b> Expertise</p><h2>Heat treating, understood.</h2></div>
        <div>
          <p>Spring manufacturers use JN’s conveyor ovens for heat treating and stress relief of springs made from carbon, stainless steel or chrome silicon.</p>
          <p>JN has been instrumental in developing and setting the standards for electric conveyor furnaces in stress relieving springs and heat treating metal, and says it has published numerous studies showing that in most applications on-line, continuous heat treatment is superior to the traditional batch method.</p>
          <p>JN was also the first company to develop and market an automated paint system for springs, called TRC. It uses a special water-based polymer that bonds to metal only above 350°F (177°C), and uses the residual heat of parts leaving the oven to coat and dry them without additional labour.</p>
        </div>
      </div></section>
      <section className="pad"><div className="wrap">
        <p className="sec-no"><b>03</b> At a glance</p>
        <table className="spec" style={{ maxWidth: 760 }}><tbody>
          <tr><th scope="row">Company</th><td>JN Machinery Corp.</td></tr><tr><th scope="row">Location</th><td>1350 Chase St., Algonquin, IL 60102</td></tr>
          <tr><th scope="row">Established</th><td>1985 (furnace origins 1982)</td></tr><tr><th scope="row">Installed base</th><td>5,000+ ovens, as reported by JN*</td></tr>
          <tr><th scope="row">Manufacturing</th><td>Made in the USA</td></tr>
        </tbody></table>
        <p className="demo-note" style={{ marginTop: 10 }}>*JN’S HOMEPAGE SAYS “OVER 5000”; ITS CURRENT ABOUT PAGE SAYS “OVER 4400”. CLIENT TO CONFIRM.</p>
      </div></section>
      <CtaBand />
    </>
  );
}
