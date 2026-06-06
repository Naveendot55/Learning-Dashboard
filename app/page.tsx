import { Suspense } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { StreakTile } from "@/components/dashboard/StreakTile";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { UpNextTile } from "@/components/dashboard/UpNextTile";
import { CoursesSection } from "@/components/dashboard/CoursesSection";
import { CourseSkeleton } from "@/components/dashboard/Skeletons";



export default function Page() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 md:p-8 pb-24 md:pb-8">
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <HeroTile name="Alex" streak={12} />
          <StreakTile />
          <Suspense fallback={<CourseSkeleton />}>
            <CoursesSection />
          </Suspense>
          <ActivityTile />
          <UpNextTile />
        </div>
      </main>
    </div>
  );
}
