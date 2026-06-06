"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export function HeroTile({ name, streak }: { name: string; streak: number }) {
  return (
    <motion.section
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-3xl tile-mesh grain p-8 md:p-10 col-span-12 lg:col-span-8 min-h-[220px]"
    >
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Welcome back</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-white">
            Hey, {name} <span className="text-white/40">— ready to ship?</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm md:text-base text-white/60">
            You&apos;re 3 lessons away from completing this week&apos;s track. Keep the momentum.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/80">
            <Flame className="h-4 w-4 text-accent-pink" />
            {streak}-day streak
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/80">
            Level 14 · Builder
          </span>
        </div>
      </div>

      {/* Glow orb */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/3 h-56 w-56 rounded-full bg-accent-cyan/20 blur-3xl" />
    </motion.section>
  );
}
