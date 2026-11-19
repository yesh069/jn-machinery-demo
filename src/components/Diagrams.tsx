import { Model, dims } from "@/lib/data";

/** Plan-view schematic generated from the published footprint and chamber dimensions. */
export function OvenPlan({ model }: { model: Model }) {
  const d = dims(model);
  if (!d) return null;
  const W = 560, H = 270, pad = 56;
  const s = Math.min((W - pad * 2) / d.fl, (H - pad * 2 - 10) / d.fw);
  const fw = d.fw * s, fl = d.fl * s, cw = d.cw * s, cl = d.cl * s;
  const x0 = (W - fl) / 2, y0 = (H - fw) / 2 - 4;
  const cx = x0 + (fl - cl) / 2, cy = y0 + (fw - cw) / 2;
  const t = { fontFamily: "var(--f-mono)", fontSize: 11, fill: "#3a4249", letterSpacing: ".04em" } as const;
  const dim = (x1: number, y1: number, x2: number, y2: number, label: string, vert = false) => (
    <g stroke="#6b757d" strokeWidth="1">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x1} y1={y1} x2={vert ? x1 + 6 : x1} y2={vert ? y1 : y1 + 6} transform={vert ? "translate(-3 0)" : "translate(0 -3)"} />
      <line x1={x2} y1={y2} x2={vert ? x2 + 6 : x2} y2={vert ? y2 : y2 + 6} transform={vert ? "translate(-3 0)" : "translate(0 -3)"} />
      <text {...t} stroke="none" x={(x1 + x2) / 2} y={vert ? (y1 + y2) / 2 : y1 + 18} textAnchor="middle" transform={vert ? `rotate(-90 ${x1 - 8} ${(y1 + y2) / 2})` : undefined} dx={vert ? -8 : 0}>{label}</text>
    </g>
  );
  return (
    <div className="diag">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Plan view of ${model.name}: footprint ${d.fw} by ${d.fl} inches, chamber ${d.cw} by ${d.cl} inches`}>
        <defs><pattern id={`h-${model.slug}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#f08a00" strokeWidth="1.2" opacity=".55" /></pattern></defs>
        <rect x={x0} y={y0} width={fl} height={fw} fill="none" stroke="#14171a" strokeWidth="1.6" />
        <rect x={cx} y={cy} width={cl} height={cw} fill={`url(#h-${model.slug})`} stroke="#b85a00" strokeWidth="1.4" />
        <text {...t} x={cx + cl / 2} y={cy + cw / 2 + 4} textAnchor="middle" fill="#14171a" style={{ ...t, fill: "#14171a", fontWeight: 500 }}>HEATED CHAMBER</text>
        {dim(x0, y0 + fw + 22, x0 + fl, y0 + fw + 22, `${d.fl}″ footprint length`)}
        {dim(x0 - 22, y0, x0 - 22, y0 + fw, `${d.fw}″`, true)}
        {dim(cx, y0 - 12, cx + cl, y0 - 12, `${d.cl}″ chamber`)}
      </svg>
      <p className="demo-note" style={{ margin: "8px 0 0" }}>SCHEMATIC FROM PUBLISHED DIMENSIONS · CHAMBER POSITION NOT TO SCALE · CHAMBER HEIGHT {d.ch}″</p>
    </div>
  );
}

const STAGES = {
  trc: [
    ["Conveyor oven", "Stress relief / tempering"],
    ["Dip tank", "Aqua-TRC polymer solution"],
    ["Incline conveyor", "Lifts parts out of the tank"],
    ["Drying conveyor", "Blower + retained heat"],
  ],
  fts: [
    ["Conveyor oven", "Stress relief / tempering"],
    ["Ingress belt", "Accepts springs from the oven"],
    ["Coating plates", "Aqua-TRC liquid curtain"],
    ["Egress conveyor", "To coning and striping"],
  ],
} as const;

export function ProcessFlow({ kind, dark = true }: { kind: "trc" | "fts"; dark?: boolean }) {
  const st = STAGES[kind];
  const ink = dark ? "#fff" : "#14171a", sub = dark ? "#b4bcc2" : "#6b757d", line = dark ? "#6b757d" : "#8c969d";
  const W = 1000, bw = 190, gap = 60, y = 70;
  const result = kind === "trc" ? "Dry to the touch in under 3 minutes (per JN)" : "Dry to the touch in under 30 seconds after stress relief (per JN)";
  return (
    <div className={`proc ${dark ? "" : "light"}`}>
      <svg viewBox={`0 0 ${W} 250`} role="img" aria-label={`${kind === "trc" ? "TRC dip-coating" : "FTS flow-through"} process: ${st.map((s) => s[0]).join(", then ")}`}>
        <text x="0" y="22" fontFamily="var(--f-mono)" fontSize="12" fill="#f08a00" letterSpacing="1.5">PARTS ENTER COATING AT 350°F / 177°C OR HOTTER</text>
        {st.map(([a, b], i) => {
          const x = i * (bw + gap);
          return (
            <g key={a}>
              <rect x={x} y={y} width={bw} height={96} fill="none" stroke={line} strokeWidth="1.5" />
              <rect x={x} y={y} width="6" height="96" fill="#f08a00" />
              <text x={x + 22} y={y + 30} fontFamily="var(--f-mono)" fontSize="11" fill="#f08a00" letterSpacing="1.5">0{i + 1}</text>
              <text x={x + 22} y={y + 58} fontFamily="var(--f-head)" fontSize="23" fontWeight="600" fill={ink} style={{ textTransform: "uppercase" }}>{a}</text>
              <text x={x + 22} y={y + 80} fontFamily="var(--f-body)" fontSize="12.5" fill={sub}>{b}</text>
              {i < st.length - 1 && (<g stroke={line} strokeWidth="1.5"><line x1={x + bw} y1={y + 48} x2={x + bw + gap - 8} y2={y + 48} /><path d={`M${x + bw + gap - 14} ${y + 42} l8 6 l-8 6`} fill="none" /></g>)}
            </g>
          );
        })}
        <line x1="0" y1="206" x2={W} y2="206" stroke={line} strokeDasharray="3 5" />
        <text x="0" y="232" fontFamily="var(--f-mono)" fontSize="12" fill={ink} letterSpacing="1">{result.toUpperCase()}</text>
      </svg>
    </div>
  );
}
