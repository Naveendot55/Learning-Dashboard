"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function StreakTile() {
  const days = ["M","T","W","T","F","S","S"];
  const done = [true, true, true, false, true, true, false];
  return (
    <motion.section
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl tile-surface grain p-6 col-span-12 lg:col-span-4 min-h-[220px]"
    >
      <header className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-white/80">This week</h2>
        <Sparkles className="h-4 w-4 text-accent-cyan" />
      </header>
      <p className="mt-3 text-3xl font-semibold text-white">5 / 7</p>
      <p className="text-xs text-white/50">lessons completed</p>

      <ul className="mt-6 grid grid-cols-7 gap-2">
        {days.map((d, i) => (
          <li key={i} className="flex flex-col items-center gap-2">
            <span className={`h-9 w-full rounded-lg ${done[i] ? "bg-gradient-to-b from-accent-violet to-accent-cyan/80" : "bg-white/[0.04] border border-white/10"}`} />
            <span className="text-[10px] text-white/40">{d}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
