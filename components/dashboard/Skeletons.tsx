export function CourseSkeleton() {
  return (
    <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="relative overflow-hidden rounded-3xl tile-surface p-6 min-h-[200px]">
          <div className="h-11 w-11 rounded-2xl bg-white/[0.06] animate-pulse" />
          <div className="mt-8 h-4 w-3/4 rounded bg-white/[0.06] animate-pulse" />
          <div className="mt-2 h-3 w-1/2 rounded bg-white/[0.05] animate-pulse" />
          <div className="mt-6 h-1.5 w-full rounded-full bg-white/[0.05] animate-pulse" />
        </div>
      ))}
    </div>
  );
}
