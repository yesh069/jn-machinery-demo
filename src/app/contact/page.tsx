import type { Metadata } from "next";
import { PageHero } from "@/components/Bits";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = { title: "Contact", description: "Contact JN Machinery Corp., 1350 Chase St., Algonquin, IL 60102. Phone 224-209-8300." };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[["Home", "/"], ["Contact"]]} title="Contact JN" lede="Technical questions, quotes, parts and coating samples." />
      <section className="pad"><div className="wrap cols2">
        <div>
          <p className="sec-no"><b>01</b> Direct lines</p>
          <table className="spec"><tbody>
            <tr><th scope="row">Phone</th><td><a href={`tel:${CONTACT.tel}`}>{CONTACT.phone}</a></td></tr>
            <tr><th scope="row">General</th><td><a href={`mailto:${CONTACT.info}`}>{CONTACT.info}</a></td></tr>
            <tr><th scope="row">Technical questions</th><td><a href={`mailto:${CONTACT.tech}`}>{CONTACT.tech}</a></td></tr>
            <tr><th scope="row">Everything else</th><td><a href={`mailto:${CONTACT.sales}`}>{CONTACT.sales}</a></td></tr>
            <tr><th scope="row">Invoices, payments, shipping</th><td><a href="mailto:alma@jnmachinery.com">alma@jnmachinery.com</a></td></tr>
            <tr><th scope="row">Address</th><td>{CONTACT.address.join(", ")}</td></tr>
          </tbody></table>
          <p className="notice" style={{ marginTop: 22 }}>Redesign note: the existing site warns that most of its contact forms are not reaching JN’s servers. This concept replaces them with a single, validated enquiry flow; it must be connected to JN’s email or CRM before launch.</p>
        </div>
        <div><p className="sec-no"><b>02</b> Send a message</p><QuoteForm id="contact-form" compact /></div>
      </div></section>
    </>
  );
}
