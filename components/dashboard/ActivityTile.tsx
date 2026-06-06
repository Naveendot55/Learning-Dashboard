"use client";

import { motion } from "framer-motion";

// Deterministic pseudo-random so SSR/CSR match.
function intensity(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return Math.abs(x - Math.floor(x));
}

export function ActivityTile() {
  const cells = Array.from({ length: 7 * 17 });

  return (
    <motion.section
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl tile-surface grain p-6 col-span-12 lg:col-span-8 min-h-[260px]"
    >
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-medium text-white/80">Learning activity</h2>
          <p className="text-xs text-white/50">Last 17 weeks</p>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-white/40">
          <span>Less</span>
          {[0.1, 0.3, 0.55, 0.8, 1].map((v, i) => (
            <span key={i} className="h-3 w-3 rounded-sm"
                  style={{ background: `rgba(139,92,246,${v})` }} />
          ))}
          <span>More</span>
        </div>
      </header>

      <div className="mt-6 grid grid-flow-col grid-rows-7 gap-1.5">
        {cells.map((_, i) => {
          const v = intensity(i + 1);
          const bg = v < 0.2 ? "rgba(255,255,255,0.04)"
                  : v < 0.45 ? "rgba(139,92,246,0.25)"
                  : v < 0.7  ? "rgba(139,92,246,0.5)"
                  : v < 0.88 ? "rgba(139,92,246,0.75)"
                  : "rgba(34,211,238,0.85)";
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, transform: "scale(0.6)" }}
              animate={{ opacity: 1, transform: "scale(1)" }}
              transition={{ delay: 0.005 * i, type: "spring", stiffness: 260, damping: 22 }}
              className="h-4 w-4 rounded-[5px]"
              style={{ background: bg }}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
