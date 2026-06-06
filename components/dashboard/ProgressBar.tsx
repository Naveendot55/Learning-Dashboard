"use client";

import { motion } from "framer-motion";

export function ProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
      <motion.div
        initial={{ transform: "scaleX(0)" }}
        animate={{ transform: `scaleX(${clamped / 100})` }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ transformOrigin: "left center" }}
        className="h-full w-full origin-left rounded-full bg-gradient-to-r from-accent-violet via-accent-pink to-accent-cyan"
      />
    </div>
  );
}
