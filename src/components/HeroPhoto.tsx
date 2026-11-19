"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function HeroPhoto() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -24]);
  return (
    <div className="hero-photo">
      <motion.div className="plate" style={{ y }}>
        <div className="ph" style={{ backgroundImage: "url(/img/site/jn-1276-hero.webp)" }} role="img" aria-label="JN-1276 electric conveyor oven" />
        <span className="callout" style={{ left: "44%", top: "14%" }}><i /><span><b>01</b> Heated chamber</span></span>
        <span className="callout rev" style={{ right: "6%", top: "70%" }}><i /><span><b>02</b> Conveyor belt</span></span>
        <span className="callout" style={{ left: "2%", bottom: "4%" }}><span className="mono" style={{ color: "#fff" }}>JN-1276 · 12 in. belt</span></span>
      </motion.div>
    </div>
  );
}
