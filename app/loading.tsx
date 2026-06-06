import { CourseSkeleton } from "@/components/dashboard/Skeletons";

export default function Loading() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="grid grid-cols-12 gap-4 md:gap-5">
        <div className="col-span-12 lg:col-span-8 h-[220px] rounded-3xl tile-surface animate-pulse" />
        <div className="col-span-12 lg:col-span-4 h-[220px] rounded-3xl tile-surface animate-pulse" />
        <CourseSkeleton />
        <div className="col-span-12 lg:col-span-8 h-[260px] rounded-3xl tile-surface animate-pulse" />
        <div className="col-span-12 lg:col-span-4 h-[260px] rounded-3xl tile-surface animate-pulse" />
      </div>
    </div>
  );
}
