# 🚀 Orbit — Next-Gen Learning Dashboard

A futuristic, animated student dashboard built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Supabase**. Track your courses, streaks, and learning activity — all in a stunning dark-mode interface.

🔗 **Live Demo:** [naveendot55.github.io/Learning-Dashboard](https://naveendot55.github.io/Learning-Dashboard/)

---

## ✨ Features

- **🎨 Dark Glassmorphism UI** — Premium design with mesh gradients, grain textures, and glowing accents
- **📊 Course Progress Tracking** — Animated progress bars for each enrolled course
- **🔥 Streak Tracker** — Weekly activity visualization to keep you motivated
- **📈 Activity Heatmap** — GitHub-style contribution grid showing 17 weeks of learning
- **🎬 Micro-Animations** — Smooth hover effects, staggered reveals, and spring physics via Framer Motion
- **📱 Fully Responsive** — Desktop sidebar, tablet rail, and mobile bottom navigation
- **⚡ Static Export** — Pre-rendered for blazing-fast load times on GitHub Pages

---

## 🖼️ Preview

| Hero Section | Course Cards | Activity Heatmap |
|:---:|:---:|:---:|
| Welcome banner with streak & level badges | Animated cards with icon mapping & progress | GitHub-style 17-week learning grid |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & micro-interactions |
| [Lucide React](https://lucide.dev/) | Beautiful icon library |
| [Supabase](https://supabase.com/) | Backend & database (optional) |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |

---

## 📁 Project Structure

```
learning-dashboard/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main dashboard page
│   ├── globals.css         # Global styles, gradients & textures
│   ├── loading.tsx         # Skeleton loading state
│   └── error.tsx           # Error boundary
├── components/
│   └── dashboard/
│       ├── Sidebar.tsx     # Desktop rail + mobile bottom nav
│       ├── HeroTile.tsx    # Welcome banner with streak info
│       ├── StreakTile.tsx   # Weekly lesson completion tracker
│       ├── CoursesSection.tsx  # Course data fetcher
│       ├── CoursesGrid.tsx # Animated course grid
│       ├── CourseCard.tsx  # Individual course card
│       ├── ProgressBar.tsx # Animated progress indicator
│       ├── ActivityTile.tsx # Heatmap contribution grid
│       ├── UpNextTile.tsx  # Upcoming lessons list
│       └── Skeletons.tsx   # Loading skeleton components
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   ├── icon-map.tsx        # Dynamic icon resolver
│   └── supabase/
│       └── server.ts       # Supabase client (optional)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages CI/CD
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Custom theme & color palette
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Naveendot55/Learning-Dashboard.git

# Navigate to the project
cd Learning-Dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Supabase Setup (Optional)

The dashboard works out of the box with **demo data**. To connect a live Supabase backend:

1. Create a project at [supabase.com](https://supabase.com/)
2. Run the schema from [`supabase/schema.sql`](./supabase/schema.sql) in the SQL editor
3. Copy your credentials to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## 🌐 Deployment

This project auto-deploys to **GitHub Pages** on every push to `main` via GitHub Actions.

To deploy manually:

```bash
npm run build    # Generates static files in /out
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `ink-950` | `#07070a` | Page background |
| `ink-900` | `#0b0b10` | Tile surfaces |
| `accent-violet` | `#8b5cf6` | Primary accent |
| `accent-cyan` | `#22d3ee` | Secondary accent |
| `accent-pink` | `#f472b6` | Tertiary accent |
| `accent-lime` | `#a3e635` | Success accent |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Design inspired by modern dashboard UIs from Dribbble & Figma Community
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Naveendot55">Naveendot55</a>
</p>
