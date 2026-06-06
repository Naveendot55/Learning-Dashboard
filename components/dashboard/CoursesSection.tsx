import { createClient } from "@/lib/supabase/server";
import type { Course } from "@/lib/types";
import { CoursesGrid } from "./CoursesGrid";

export async function CoursesSection() {
  const hasEnv =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!hasEnv) {
    // Graceful fallback so the UI is reviewable without env vars set.
    const demo: Course[] = [
      { id: "1", title: "Advanced React Patterns", progress: 72, icon_name: "code",     created_at: "" },
      { id: "2", title: "Designing with Motion",   progress: 45, icon_name: "palette",  created_at: "" },
      { id: "3", title: "Systems & Databases",     progress: 88, icon_name: "database", created_at: "" },
      { id: "4", title: "AI for Builders",         progress: 30, icon_name: "brain",    created_at: "" },
    ];
    return <CoursesGrid courses={demo} />;
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: true });

  if (error) {
    return (
      <div className="col-span-12 rounded-3xl tile-surface p-6 text-sm text-white/70">
        <p className="text-white">Couldn't load courses.</p>
        <p className="mt-1 text-white/50">{error.message}</p>
      </div>
    );
  }

  return <CoursesGrid courses={(data ?? []) as Course[]} />;
}
