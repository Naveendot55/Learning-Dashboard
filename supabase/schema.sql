-- Run this in the Supabase SQL editor.

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamptz not null default now()
);

alter table public.courses enable row level security;

-- Public read for demo purposes (dashboard fetches with anon key).
create policy "Public read courses"
  on public.courses for select
  to anon, authenticated
  using (true);

insert into public.courses (title, progress, icon_name) values
  ('Advanced React Patterns', 72, 'code'),
  ('Designing with Motion',   45, 'palette'),
  ('Systems & Databases',     88, 'database'),
  ('AI for Builders',         30, 'brain');
