import {
  Atom, BookOpen, Brain, Code2, Cpu, Database, Flame, Globe,
  GraduationCap, Lightbulb, Palette, Rocket, Sparkles, Terminal,
  Wand2, Zap, type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  atom: Atom, book: BookOpen, brain: Brain, code: Code2, cpu: Cpu,
  database: Database, flame: Flame, globe: Globe, graduation: GraduationCap,
  lightbulb: Lightbulb, palette: Palette, rocket: Rocket, sparkles: Sparkles,
  terminal: Terminal, wand: Wand2, zap: Zap,
};

export function getIcon(name: string): LucideIcon {
  return map[name?.toLowerCase()] ?? Sparkles;
}
