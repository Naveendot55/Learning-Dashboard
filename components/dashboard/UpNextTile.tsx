"use client";

import { motion } from "framer-motion";
import { PlayCircle, Clock } from "lucide-react";

const lessons = [
  { t: "Server Components in depth", d: "24 min" },
  { t: "Spring physics & gestures",  d: "18 min" },
  { t: "Indexing strategies",        d: "32 min" },
];

export function UpNextTile() {
  return (
    <motion.section
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl tile-surface grain p-6 col-span-12 lg:col-span-4 min-h-[260px]"
    >
      <header className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-white/80">Up next</h2>
        <PlayCircle className="h-4 w-4 text-accent-cyan" />
      </header>

      <ul className="mt-4 space-y-2">
        {lessons.map((l, i) => (
          <li key={i} className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-3 transition-colors hover:bg-white/[0.05]">
            <div>
              <p className="text-sm text-white">{l.t}</p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] text-white/45">
                <Clock className="h-3 w-3" /> {l.d}
              </p>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.05] ring-1 ring-white/10 transition-transform group-hover:scale-105">
              <PlayCircle className="h-4 w-4 text-white" />
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
