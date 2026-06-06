"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Course } from "@/lib/types";
import { getIcon } from "@/lib/icon-map";
import { ProgressBar } from "./ProgressBar";

export function CourseCard({ course }: { course: Course }) {
  const Icon = getIcon(course.icon_name);

  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl tile-mesh grain p-6 min-h-[200px] flex flex-col justify-between"
    >
      <header className="flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-white" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-white/30 transition-colors group-hover:text-white" />
      </header>

      <div>
        <h3 className="text-base font-semibold text-white leading-snug">{course.title}</h3>
        <div className="mt-4 flex items-center justify-between text-xs text-white/50">
          <span>Progress</span>
          <span className="text-white/80">{course.progress}%</span>
        </div>
        <div className="mt-2"><ProgressBar value={course.progress} /></div>
      </div>

      {/* Hover glow */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.4), 0 30px 80px -30px rgba(139,92,246,0.45)" }} />
    </motion.article>
  );
}
