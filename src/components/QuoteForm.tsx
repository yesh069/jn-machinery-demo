"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { models } from "@/lib/data";

type K = "name" | "company" | "email" | "phone" | "message" | "consent";

export default function QuoteForm({ interest, id = "quote", compact = false }: { interest?: string; id?: string; compact?: boolean }) {
  const [errs, setErrs] = useState<Partial<Record<K, string>>>({});
  const [done, setDone] = useState<string | null>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const n: Partial<Record<K, string>> = {};
    if (v("name").length < 2) n.name = "Please enter your name.";
    if (v("company").length < 2) n.company = "Please enter your company.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v("email"))) n.email = "Please enter a valid email address.";
    if (v("phone") && !/^[0-9+().\s-]{7,}$/.test(v("phone"))) n.phone = "Please check the phone number.";
    if (v("message").length < 10) n.message = "Please describe your application in a sentence or two.";
    if (!f.get("consent")) n.consent = "Please confirm you agree to be contacted.";
    setErrs(n);
    if (!Object.keys(n).length) { setDone(v("name").split(" ")[0]); e.currentTarget.reset(); }
  }
  if (done)
    return (
      <div className="ok" role="status" id={id}>
        <h3>Request received, {done}.</h3>
        <p>On the live site this would go to JN's technical sales team, who would reply with questions about your wire size, throughput and temperature. For immediate help call 224-209-8300.</p>
        <p className="demo-note">DEMO ONLY · NOTHING WAS SENT OR STORED</p>
      </div>
    );
  const fld = (k: K) => ({ "aria-invalid": !!errs[k], "aria-describedby": errs[k] ? `${id}-${k}` : undefined });
  const E = ({ k }: { k: K }) => (errs[k] ? <span className="err" id={`${id}-${k}`}>{errs[k]}</span> : null);
  return (
    <form className="form" id={id} onSubmit={submit} noValidate aria-label="Request a quote">
      <div className="row"><label>Name<input name="name" autoComplete="name" {...fld("name")} /><E k="name" /></label><label>Company<input name="company" autoComplete="organization" {...fld("company")} /><E k="company" /></label></div>
      <div className="row"><label>Email<input name="email" type="email" autoComplete="email" {...fld("email")} /><E k="email" /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" {...fld("phone")} /><E k="phone" /></label></div>
      <label>I am interested in
        <select name="interest" defaultValue={interest ?? "oven"}>
          {interest && <option value={interest}>{interest}</option>}
          <option value="oven">Electric conveyor oven</option><option value="custom">Custom oven or rebuild</option><option value="incline">Incline conveyor</option>
          <option value="parts">Oven spare parts</option><option value="aqua">Aqua-TRC coatings / samples</option><option value="trc">TRC dipping and drying system</option>
          <option value="fts">Flow-through system (FTS)</option><option value="other">Something else</option>
        </select>
      </label>
      {!compact && (
        <fieldset>
          <legend>Process details (optional, helps us quote faster)</legend>
          <div className="row"><label>Wire / part diameter<input name="wire" placeholder='e.g. .125" or 3 mm' /></label><label>Throughput (lb/hr)<input name="rate" inputMode="numeric" placeholder="e.g. 400" /></label></div>
          <div className="row"><label>Process temperature<input name="temp" placeholder="e.g. 500°F" /></label><label>Available voltage<input name="volts" placeholder="e.g. 480 V, 3-phase" /></label></div>
          <label>Preferred model
            <select name="model" defaultValue=""><option value="">Not sure yet</option>{models.map((m) => <option key={m.slug} value={m.slug}>{m.name}</option>)}</select>
          </label>
        </fieldset>
      )}
      <label>Your application<textarea name="message" {...fld("message")} placeholder="Material, wire size, what you need the oven or coating line to do…" /><E k="message" /></label>
      <label className="chk"><input type="checkbox" name="consent" {...fld("consent")} /><span>I agree to be contacted by JN Machinery about this request.</span></label>
      <E k="consent" />
      <div><button className="btn btn-primary" type="submit">Send request</button></div>
      <p className="demo-note">DEMO CONCEPT · SUBMITTING DOES NOT SEND OR STORE ANYTHING</p>
    </form>
  );
}
