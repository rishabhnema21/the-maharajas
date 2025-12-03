# the Maharajas

A curated interactive timeline and visual experience celebrating several major historical empires. The Maharajas presents elegantly animated storytelling with a focus on immersive visuals, typographic character, and modular UI components to render timelines, highlights, and details for each empire.

---

## 🚀 Overview

`the Maharajas` is a modern web application built with Vite and React that showcases historical empires through a combination of polished UI, animations, and carefully structured content. The project emphasizes interactive storytelling using parallax, motion, and 3D-friendly components.

Key highlights:
- Smooth scroll interactions and parallax effects
- Animations and motion using GSAP and Framer Motion
- A timeline UI to browse empires and a detail view for each
- Tailwind CSS-based styling with custom fonts and iconography

---

## 🧩 Tech Stack & Libraries

- Vite — super-fast build tooling and dev server
- React — UI library (JSX) with functional components
- Tailwind CSS — utility-first styling approach
- GSAP — advanced animations and parallax effects
- Framer Motion — interactive UI motion support
- Lenis — smooth scrolling utility
- React Three packages & postprocessing — 3D and postprocessing capability available (present in dependencies)
- Lucide React — icons
- Slugify — friendly URL slug generation
- Split Type — utilities for text splitting/animation
- ESLint — code linting
- Node.js / npm — development and build toolchain

> Reference versions are taken from the project's `package.json` and may evolve over time.

---

## 🛠️ Getting Started (local development)

Prerequisites: Node.js (recommended 18.x or newer).

Windows (PowerShell) commands to setup and run:

```powershell
# install dependencies
npm install

# start development server
npm run dev

# build bundle (generates `dist`)
npm run build

# preview the built app locally
npm run preview

# lint the codebase
npm run lint
```

Open your browser and go to the address shown (Vite typically runs on http://localhost:5173).

---

## 🗂 Project Structure

This is a concise overview of the most important source files and directories:

- `index.html` — App entry point.
- `src/main.jsx` — React entry / router wrapper.
- `src/App.jsx` — Application routing and global features (Lenis, Navigation, Footer).
- `src/pages` — Page-level route components: `Home`, `Empires`, `EmpireDetail`, `About`.
- `src/components` — Reusable UI components (Navigation, Timeline, Badge, Logo, etc.).
- `src/components/home` — Home-specific components like `Hero`, `Intro`, `FinalHome` and `Footer`.
- `src/assets` — Static data (example: `empires.js`) and other runtime assets.
- `public` — Static files served as-is: fonts, images, and other assets.
- `vite.config.js` — Vite configuration and plugins (React and Tailwind integration).
- `eslint.config.js` — ESLint configuration.

---

## 🧭 How content is organized

- Empire data: `src/assets/empires.js` includes a dataset representing the empires and related metadata. Each record exposes fields such as `id`, `name`, `date`, `thumbnail`, `images`, `highlighted`, `short_desc`, `long_desc`, `capital`, and `notable_rulers`.
- The timeline and detail routes read that dataset and render appropriate UI components.

Tip: Add a new empire entry in `src/assets/empires.js` to have it automatically show up in the UI list.

---

## 🎨 Styling & Assets

- The app uses Tailwind CSS for styling. Styles are located in `src/index.css` with utility classes spread across components.
- Custom fonts and icon-related assets are placed under `public/fonts` and `public` respectively.
- Images, thumbnails, and hero graphics are served from the `public` directory and referenced using absolute paths in components (e.g., `/king.png`).

---

## ✨ Animations & Effects

- Parallax and dynamic motion: GSAP is used in pages like `Empires` and in parts of the UI for smooth, performant parallax effects.
- Motion UI: Framer Motion enables animations during route transitions and interactive states.
- Scroll behavior: Lenis improves the smoothness and responsiveness of scrolling throughout the app.

---

## 🧱 Routing

Routing is handled via `react-router`.

- `/` — Home
- `/about` — About page
- `/empires` — Empires timeline and interactive view
- `/empires/:empire` — Empire detail page (dynamic path based on `id` from dataset)

---

## 🔧 Extending or Adding Content

Want to add a new empire or a new section?

1. Add a new object to `src/assets/empires.js` with a unique `id`.
2. Add associated images to the `public` directory and reference them via the `images` or `thumbnail` fields.
3. The `Timeline` and `Empires` components will pick up the new entry automatically (no additional route changes required).

For a new page or feature:
1. Create a new component/page under `src/pages` or `src/components`.
2. Add a new route in `src/App.jsx` if needed.
3. Keep the styling consistent by using Tailwind utilities or existing component classes.

---

## ✅ Development Tips

- Use the `dev` script to run the Vite dev server for fast iteration.
- Keep components modular; pages render smaller components so the UI is easier to test and reuse.
- Ensure accessibility by using alt attributes in `img` tags and semantic HTML when possible.

---

## ⚠️ Troubleshooting

- If modules fail to resolve, run `npm install` again and confirm Node.js is a suitable version.
- If Tailwind styles are not applied, verify that `index.css` imports Tailwind directives and that the Vite plugin for Tailwind is configured in `vite.config.js`.
- For runtime console issues, check that assets referenced in `public` exist at the specified paths.

---

## 🙌 Credits & Acknowledgements

- Fonts and assets included in `public` are credited where applicable — the project references several visual and typeface resources for stylistic choices.
- The repository relies on many excellent open-source libraries which have been cited in `package.json`.
