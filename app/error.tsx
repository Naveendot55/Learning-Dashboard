"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center p-8">
      <div className="max-w-md rounded-3xl tile-surface p-8 text-center">
        <h1 className="text-xl font-semibold text-white">Something went off-orbit</h1>
        <p className="mt-2 text-sm text-white/60">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-white text-black px-4 py-2 text-sm font-medium">
          Try again
        </button>
      </div>
    </main>
  );
}
