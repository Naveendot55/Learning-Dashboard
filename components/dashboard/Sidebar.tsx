"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard, BookOpen, BarChart3, MessageSquare,
  Settings, GraduationCap, Menu,
} from "lucide-react";
import { useState } from "react";

const items = [
  { id: "home", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "stats", label: "Progress", icon: BarChart3 },
  { id: "chat", label: "Mentors", icon: MessageSquare },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop / tablet rail */}
      <aside className="hidden md:flex sticky top-0 h-screen w-[72px] lg:w-[232px] shrink-0 flex-col border-r border-white/5 bg-ink-950/60 backdrop-blur-xl px-3 py-5">
        <div className="flex items-center gap-2 px-2 pb-6">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan shadow-glow">
            <GraduationCap className="h-5 w-5 text-white" />
          </span>
          <span className="hidden lg:inline text-sm font-semibold tracking-wide text-white">Orbit</span>
        </div>

        <nav className="flex flex-col gap-1">
          {items.map((it) => {
            const Icon = it.icon;
            const isActive = active === it.id;
            return (
              <button
                key={it.id}
                onClick={() => setActive(it.id)}
                className="relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 hover:text-white transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-white/[0.06] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative h-5 w-5 shrink-0" />
                <span className="relative hidden lg:inline">{it.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto hidden lg:block rounded-2xl tile-mesh p-4 text-xs text-white/70">
          <p className="font-medium text-white">Go Pro</p>
          <p className="mt-1 leading-relaxed">Unlock mentor sessions & live cohorts.</p>
        </div>
      </aside>

      {/* Mobile: bottom nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/5 bg-ink-950/80 backdrop-blur-xl">
        <ul className="grid grid-cols-5">
          {items.map((it) => {
            const Icon = it.icon;
            const isActive = active === it.id;
            return (
              <li key={it.id} className="relative">
                <button
                  onClick={() => setActive(it.id)}
                  className="relative flex w-full flex-col items-center gap-1 py-3 text-[11px] text-white/60"
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-active"
                      className="absolute inset-x-4 top-1 h-0.5 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="h-5 w-5" />
                  <span>{it.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
