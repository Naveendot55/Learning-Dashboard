import type { Course } from "@/lib/types";
import { CoursesGrid } from "./CoursesGrid";

export async function CoursesSection() {
  // Demo data — replace with Supabase fetch when env vars are configured.
  const demo: Course[] = [
    { id: "1", title: "Advanced React Patterns", progress: 72, icon_name: "code",     created_at: "" },
    { id: "2", title: "Designing with Motion",   progress: 45, icon_name: "palette",  created_at: "" },
    { id: "3", title: "Systems & Databases",     progress: 88, icon_name: "database", created_at: "" },
    { id: "4", title: "AI for Builders",         progress: 30, icon_name: "brain",    created_at: "" },
  ];

  return <CoursesGrid courses={demo} />;
}
