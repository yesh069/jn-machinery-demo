import modelsRaw from "@/data/models.json";
import articlesRaw from "@/data/articles.json";

export type Model = {
  slug: string; name: string; aka: string | null; tagline: string; description: string;
  specs: Record<string, string>; note: string | null; images: string[];
};
export type Block = { t: "h2" | "h3" | "p" | "li" | "q" | "img"; x?: string; src?: string };
export type Article = { slug: string; title: string; date: string; blocks: Block[] };

export const models = modelsRaw as Model[];
export const articles = articlesRaw as Article[];
export const modelBySlug = (s: string) => models.find((m) => m.slug === s);
export const articleBySlug = (s: string) => articles.find((a) => a.slug === s);

/** Maximum wire / part diameter each model is published for (from JN's model taglines). mm only used for filtering. */
export const WIRE: Record<string, { label: string; mm: number } | null> = {
  "jn-540": { label: ".062″ (2 mm)", mm: 2 },
  "jn-855": { label: ".125″ (3.175 mm)", mm: 3.175 },
  "jn-1040": { label: "0.125″ (3 mm)", mm: 3 },
  "jn-1060": { label: ".162″ (4 mm)", mm: 4 },
  "jn-1276": { label: "about .192″ (5 mm)", mm: 5 },
  "jn-1888": { label: ".312″ (8 mm)", mm: 8 },
  "jn-15hd": { label: ".500″ (12 mm)", mm: 12 },
  "jn-18hd": { label: ".625″ (16 mm)", mm: 16 },
  "jn-30hd": null,
};

export const BELT_WIDTH: Record<string, string> = {
  "jn-540": "5″ (127 mm)", "jn-855": "8″ (203 mm)", "jn-1040": "10″ (254 mm)", "jn-1060": "10″ (254 mm)", "jn-1276": "12″ (305 mm)",
  "jn-1888": "18″ (457 mm)", "jn-15hd": "15″ (381 mm)", "jn-18hd": "—", "jn-30hd": "30″ (762 mm)",
};

const nums = (s: string) => [...s.matchAll(/(\d+(?:\.\d+)?)\s*[″"]/g)].map((m) => parseFloat(m[1]));
export function dims(m: Model) {
  const f = nums((m.specs["Footprint"] ?? "").split("(")[0]);
  const c = nums((m.specs["Chamber Size (W x L x H)"] ?? "").split("(")[0]);
  if (f.length < 2 || c.length < 3) return null;
  return { fw: f[0], fl: f[1], cw: c[0], cl: c[1], ch: c[2] };
}

export const SPEC_ORDER = ["Footprint", "Chamber Size (W x L x H)", "Capacity", "Max Temperature", "Volts", "Amps", "Watts"];

export const COMMON_FEATURES = [
  "Ceramic fiber insulation",
  "Vari-speed control (potentiometer or digital)",
  "Incoloy sheath heating elements",
  "Stainless steel heat-shielded chamber",
  "AC direct drive motor",
  "Stainless steel tight mesh belt",
  "Adjustable conveyor height",
  "Low energy consumption",
  "Belt reversing",
];
export const ADVANTAGES = [
  "Large effective heating area",
  "Small total floor area",
  "Fast start-up",
  "Low operating cost",
  "Economically priced",
  "On-line stress relieving",
  "Improved quality",
  "Increased productivity",
  "Low energy consumption",
  "Reduced variation on loads and dimensions",
  "Facilitates CQI-9 / AMS2750 and other data needs",
];
export const OVEN_FEATURES = ["Made in the USA", "Digital speed control (option)", "Insulated belt return", "Belt reversing", "Digital temperature controls", "Trouble alarm", "Low maintenance"];

export const APPLICATIONS = [
  { t: "Spring heat treatment and stress relieving", d: "Springs made from carbon steel, stainless steel or chrome silicon wire. JN's published studies argue that on-line, continuous heat treatment beats traditional batch ovens in most spring applications." },
  { t: "TRC coating", d: "Tempering, Rustproofing and Color Coating in one in-line process, using the heat from stress relieving to apply a polymer conversion coating." },
  { t: "Garage and overhead door springs", d: "The FTS flow-through system sprays Aqua-TRC onto formed springs straight from the oven." },
  { t: "Beyond springs", d: "JN states its ovens are also used for rustproofing, tempering metal, baking, oiling, drying and sterilization." },
];

export const AQUA_COLORS: [string, string, string][] = [
  ["Red", "Pantone 185", "CM-108-01"], ["Pink", "Pantone 210", "CM-113-01"], ["Purple", "Pantone 266", "CM-107-01"],
  ["Light blue", "Pantone 299", "CM-102-01"], ["Yellow", "Pantone Yellow C", "CM-103-01"], ["Orange", "Pantone 021", "CM-109-01"],
  ["Beige", "Special colour", "CM-105-01"], ["White", "—", "CM-110-01"], ["Green", "Pantone Green C", "CM-106-01"],
  ["Light green", "Pantone 366", "CM-114-01"], ["Blue", "Pantone 293", "CM-111-01"], ["Black (gloss)", "Pantone Black", "CM-101-01"],
  ["Gray", "Pantone 430", "CM-104-01"], ["Brown", "Pantone 7516", "CM-112-01"],
];
export const AQUA_HEX: Record<string, string> = {
  Red: "#c8102e", Pink: "#ef9fc0", Purple: "#6b3fa0", "Light blue": "#7fb8e0", Yellow: "#fedd00", Orange: "#f47c20", Beige: "#d8c9a8",
  White: "#f5f5f2", Green: "#00a651", "Light green": "#a6d96a", Blue: "#0033a0", "Black (gloss)": "#111", Gray: "#8b8d8e", Brown: "#6b4a2b",
};

const J = "https://jnmachinery.com/wp-content/uploads";
export const DOCS = {
  linecard: { label: "JN Line Card 2026", href: `${J}/2026/01/JN-Linecard-2026.pdf` },
  specs: { label: "Current oven specifications (2025)", href: `${J}/2025/01/Current-Oven-Specs-2025.pdf` },
  colors: { label: "Aqua-TRC colour sheet", href: `${J}/2017/12/Aqua-TRC-Colors.pdf` },
  models: {
    "jn-540": `${J}/2017/12/JN-540-Ad.pdf`, "jn-855": `${J}/2017/12/JN-855-Ad.pdf`, "jn-1060": `${J}/2017/12/JN-1060-Ad.pdf`,
    "jn-1276": `${J}/2019/09/JN-1276-Ad-revised.pdf`, "jn-1888": `${J}/2019/12/JN-1888-Ad.pdf`, "jn-18hd": `${J}/2019/12/JN-18HD-Ad-panel-sketch.pdf`,
    "jn-30hd": `${J}/2019/12/JN-30HD-Ad-panel-sketch.pdf`,
  } as Record<string, string>,
  incline: { label: "Incline sorters (PDF)", href: `${J}/2017/12/Incline-Sorters.pdf` },
  parts: { label: "New parts conveyor (PDF)", href: `${J}/2017/12/New-Parts-Conveyor.pdf` },
  trcAd: { label: "TRC product sheet (PDF)", href: `${J}/2017/12/TRC-Ad.pdf` },
};
export const CONTACT = {
  phone: "224-209-8300", tel: "+12242098300", info: "info@jnmachinery.com", tech: "michael@jnmachinery.com", sales: "daniel@jnmachinery.com",
  address: ["JN Machinery Corp.", "1350 Chase St.", "Algonquin, IL 60102"],
};
export const fmtDate = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
