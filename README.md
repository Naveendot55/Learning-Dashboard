# Orbit — Next-Gen Learning Dashboard

A futuristic, dark-mode student dashboard built with **Next.js 14 (App Router)**, **Supabase**, **Tailwind CSS**, and **Framer Motion**. Bento grid layout, server-rendered course data, staggered entrance animations, spring-based hover physics, and zero-layout-shift transitions (transform + opacity only).

---

## Stack

- **Next.js 14** — App Router + React Server Components
- **Supabase** (`@supabase/ssr`) — Postgres + secure server-side data fetch
- **Tailwind CSS** — utility styling + custom design tokens
- **Framer Motion** — spring physics, `layoutId` micro-interactions, staggered grids
- **Lucide React** — icon set (dynamically mapped from DB `icon_name`)
- **TypeScript** strict

---

## Architecture decisions

### Server / Client component split
- `app/page.tsx` is a **Server Component**. It composes the layout and wraps the data section in `<Suspense>`.
- `components/dashboard/CoursesSection.tsx` is an **async Server Component** that calls Supabase with `@supabase/ssr` on the server using only the public anon key. RLS enforces read-only access.
- All interactive tiles (`HeroTile`, `CourseCard`, `Sidebar`, `ActivityTile`, …) are `"use client"` because they use Framer Motion. They receive plain serializable props (the `Course[]` payload).
- `app/loading.tsx` provides a route-level skeleton; `<Suspense fallback={<CourseSkeleton />}>` provides a tile-level skeleton while only the DB call resolves.

### Zero layout shifts
- All hover and entrance animations animate **`opacity`** and **`transform`** only (no `width`, `height`, `top`, `margin`).
- The animated progress bar uses `transform: scaleX(...)` with `transform-origin: left center` instead of animating width.
- Tiles reserve `min-h-[...]` so the skeleton and loaded states occupy identical space.

### Spring physics
- Card hover: `{ type: "spring", stiffness: 300, damping: 20 }` (per spec).
- Sidebar active pill: `layoutId="sidebar-active"` with spring, so the highlight snaps between items.

### Bento grid
- 12-column CSS grid. Tiles declare their span (`col-span-12 lg:col-span-8` etc.).
- Tablet: 2-column course grid + icon-only sidebar.
- Mobile: single column + bottom navigation bar.

### Graceful fallback
If Supabase env vars are missing, `CoursesSection` renders 4 demo rows so the UI is reviewable out of the box. With env vars set, it queries live data.

---

## Database setup (Supabase)

1. Create a free Supabase project at https://supabase.com.
2. Open the **SQL editor** and paste `supabase/schema.sql` (creates the `courses` table, enables RLS, adds a read-only policy, and seeds 4 rows).
3. Go to **Project Settings → API** and copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Schema
| column      | type        |
|-------------|-------------|
| id          | uuid (PK)   |
| title       | text        |
| progress    | int (0-100) |
| icon_name   | text        |
| created_at  | timestamptz |

`icon_name` values map to Lucide icons via `lib/icon-map.tsx`. Supported keys: `atom, book, brain, code, cpu, database, flame, globe, graduation, lightbulb, palette, rocket, sparkles, terminal, wand, zap`.

---

## Local development

```bash
cp .env.example .env.local
# fill in NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY
npm install
npm run dev
```

Open http://localhost:3000.

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new, import the repo.
3. Add the two environment variables in **Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy. No other config needed.

---

## Challenges & notes

- **Bottom-nav vs sidebar parity**: the `layoutId` highlight is scoped per surface (`sidebar-active`, `mobile-active`) so Framer doesn't try to morph between them across breakpoints.
- **Deterministic activity grid**: the contribution heatmap uses a seeded `Math.sin` hash so the SSR markup matches the client render (no hydration warnings, no `Math.random`).
- **Progress bar animation**: animating `width` causes paint + layout. Using `transform: scaleX` keeps everything on the compositor.
