"use client";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Motion({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

const EASE = [0.65, 0, 0.2, 1] as const;

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.7, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

/** Precise clip-path wipe for photographs. */
export function Wipe({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }} whileInView={{ clipPath: "inset(0 0% 0 0)" }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1.1, ease: EASE }}>
      {children}
    </motion.div>
  );
}

export function PageFade({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const reduce = useReducedMotion();
  return (
    <motion.div key={path} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: EASE }}>
      {children}
    </motion.div>
  );
}
