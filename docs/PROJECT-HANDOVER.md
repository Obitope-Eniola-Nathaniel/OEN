# Portfolio Project — Handover & Takeover Guide

This document explains everything about this portfolio project so you can run, modify, and deploy it with confidence.

---

## 1. What This Project Is

- **Name:** Personal Web Portfolio (Obitope Eniola)
- **Purpose:** A single-page portfolio site showcasing your profile, experience, projects, education, certifications, and contact info.
- **Stack:** React 18, TypeScript, Vite 6, Tailwind CSS, Radix UI, Motion (animations), Sonner (toasts).
- **Deployment:** Built as a static SPA; deployed on **Vercel** (e.g. `https://oen-uf1v.vercel.app/`).

---

## 2. How to Run & Build

| Task | Command |
|------|--------|
| Install dependencies | `npm install` |
| Run dev server | `npm run dev` (default: http://localhost:3000) |
| Build for production | `npm run build` |
| Output folder | `dist/` (Vite writes here) |

- **Hot reload:** Saving files in `src/` refreshes the browser automatically.
- **Build:** Always run `npm run build` before deploying to catch errors.

---

## 3. Project Structure (What Lives Where)

```
portifolio/
├── public/                    # Static assets (served at root URL)
│   ├── image/                 # Your photos (Hero, About, WhatsApp)
│   │   ├── PTP09911.jpg
│   │   └── PTP09857.jpg
│   ├── certificates/          # PDFs (e.g. New Horizon cert)
│   │   └── new-horizon-fullstack-frontend-2024.pdf  ← add when you have it
│   ├── oen-cv.pdf             # Your CV (View/Download link in Hero)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx               # App entry; mounts React to #root
│   ├── App.tsx                # Root component: layout + section order
│   ├── index.css              # Global styles + Tailwind; overflow-x fix
│   ├── components/            # Page sections & shared UI
│   │   ├── Navigation.tsx     # Top nav (Home, About, Experience, Projects, Contact)
│   │   ├── Hero.tsx           # Hero + name, title, CV button, social links
│   │   ├── About.tsx          # About me + image, highlights, Skills tab, Certifications tab
│   │   ├── Experience.tsx     # Work history (tabs per job)
│   │   ├── Projects.tsx       # Featured projects (live + ongoing)
│   │   ├── Education.tsx       # Caleb University, Federal Poly Ilaro
│   │   ├── Contact.tsx        # Contact form + social “Connect with me”
│   │   ├── Footer.tsx         # Quick links, socials, © 2026
│   │   ├── FloatingWhatsApp.tsx # WhatsApp chat button + popup
│   │   ├── ThemeProvider.tsx  # Dark/light theme context
│   │   ├── ThemeToggle.tsx    # Theme switch UI
│   │   ├── Certifications.tsx # Standalone certs section (not in App; optional)
│   │   ├── Skills.tsx         # Standalone skills section (not in App; optional)
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx  # Image with error fallback
│   │   └── ui/                # Reusable UI (Radix-based: button, input, tabs, etc.)
│   └── guidelines/            # Any project guidelines
├── index.html                 # Single HTML; SEO meta, canonical, OG, JSON-LD
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json                # Vercel: build, output dir, SPA rewrites
├── vite.config.ts             # Vite config; path alias @ → src
└── docs/
    └── PROJECT-HANDOVER.md    # This file
```

---

## 4. Page Sections (In Order) & Where to Edit

| Section | File | What to edit |
|--------|------|----------------|
| **Nav** | `src/components/Navigation.tsx` | Links in `navLinks`; logo text “Obitope Eniola”. |
| **Hero** | `src/components/Hero.tsx` | Name, title, tagline, CV link (`/oen-cv.pdf`), social links (GitHub, LinkedIn, X, Email), “About me” blurb. |
| **About** | `src/components/About.tsx` | Bio text, image (`/image/PTP09857.jpg`), highlights (years, degree, certs), **Technical Skills** list, **Certifications** list (titles, issuers, dates, `verifyUrl`). |
| **Experience** | `src/components/Experience.tsx` | `experiences` array: company, position, period, location, description, highlights. |
| **Projects** | `src/components/Projects.tsx` | `projects` array: title, description, image, tech, liveUrl, githubUrl; set `ongoing: true` for in-progress. |
| **Education** | `src/components/Education.tsx` | `education` array: degree, institution, location, period, grade, description. |
| **Contact** | `src/components/Contact.tsx` | Form labels/placeholders; “Connect with me” social links; form submit handler (currently front-end only). |
| **Footer** | `src/components/Footer.tsx` | Name, tagline, `quickLinks`, `socialLinks`, copyright year. |
| **WhatsApp** | `src/components/FloatingWhatsApp.tsx` | Phone number (`2349059692851`), popup avatar image, default message. |

---

## 5. Important Config & Assets

### 5.1 SEO & index.html

- **File:** `index.html`
- **Contains:** Title, meta description, keywords, author, canonical URL, Open Graph, Twitter Card, favicon, JSON-LD (Person schema).
- **Production URL:** `https://oen-uf1v.vercel.app/` — update if your Vercel URL changes.
- **Your name in SEO:** “Obitope Eniola” / “Obitope Eniola Nathaniel” — change here and in JSON-LD if needed.

### 5.2 Vercel (vercel.json)

- **Build:** `npm run build`
- **Output:** `dist/`
- **SPA:** All routes rewrite to `/index.html` so client-side routing works.
- No env vars required for basic static deploy.

### 5.3 Static Files

- **Images:** Put images in `public/image/` and reference as `/image/filename.jpg`.
- **CV:** `public/oen-cv.pdf` → link `/oen-cv.pdf` (used in Hero).
- **Certificates:** Put PDFs in `public/certificates/` and set `verifyUrl` to e.g. `/certificates/new-horizon-fullstack-frontend-2024.pdf` in About + Certifications.

### 5.4 Contact Form

- Form is **front-end only** (no backend). To receive messages, wire it to a service (e.g. Formspree, Web3Forms) or your own API and set the form `action` or `onSubmit` in `Contact.tsx`.

---

## 6. Skills & Certifications (Two Places)

- **About → “Technical Skills” tab:** Skills list is in `About.tsx` → `skillCategories` (Frontend, Backend, Database, Tools). This is the **only** place skills appear on the site now.
- **About → “Certifications” tab:** Certifications list is in `About.tsx` → `certifications` (titles, issuers, dates, `verifyUrl`).
- **Standalone sections:** `Skills.tsx` and `Certifications.tsx` exist but are **not** used in `App.tsx`. You can add them back to `App.tsx` and Navigation if you want a dedicated Skills or Certifications section.

---

## 7. Projects: Live vs “In progress”

- In `Projects.tsx`, each project can have `ongoing: true`.
- **Ongoing:** Shows an “In progress” badge and “Coming soon” instead of “View Live”; `liveUrl` can be `"#"`.
- **When a project goes live:** Set `liveUrl` to the real URL and remove `ongoing: true` (or set to `false`) so “View Live” appears.

---

## 8. Theme (Dark / Light)

- **Provider:** `ThemeProvider.tsx` (context).
- **Toggle:** `ThemeToggle.tsx` (floating control).
- **Usage:** `useTheme()` in any component; `theme === "dark"` or `"light"` to style.

---

## 9. Key Dependencies

- **React 18** + **TypeScript**
- **Vite 6** — build tool and dev server
- **Tailwind CSS** — styling (via `index.css` and class names)
- **Radix UI** — accessible primitives (used by `components/ui/*`)
- **Motion** — animations
- **Sonner** — toast notifications (e.g. Contact form)
- **Lucide React** — icons

---

## 10. Common Tasks Cheat Sheet

| Task | Where / How |
|------|----------------|
| Change name/title on site | Hero, Footer, Navigation, index.html (SEO). |
| Update CV | Replace `public/oen-cv.pdf`; link stays `/oen-cv.pdf`. |
| Add/edit a job | `Experience.tsx` → `experiences` array. |
| Add/edit a project | `Projects.tsx` → `projects` array; use `ongoing: true` if not live. |
| Change skills | `About.tsx` → `skillCategories`. |
| Add/edit certification | `About.tsx` → `certifications`; set `verifyUrl` to `/certificates/…` if you add a PDF in `public/certificates/`. |
| Change WhatsApp number | `FloatingWhatsApp.tsx` → `phoneNumber` (e.g. `2349059692851`). |
| Change social links | Hero, Footer, Contact (and index.html sameAs if you want SEO to match). |
| Change production URL | index.html (canonical, og:url, JSON-LD url); `public/robots.txt` and `public/sitemap.xml`. |
| Fix horizontal scroll on mobile | Global styles in `src/index.css` (overflow-x, etc.) already applied. |

---

## 11. Deployment (Vercel)

1. Push the repo to GitHub (or connect Vercel to your Git provider).
2. In Vercel, import the project; it should detect Vite and use `vercel.json`.
3. Build command: `npm run build`; output: `dist/`.
4. After deploy, set your custom domain in Vercel if needed, then update canonical/OG/sitemap URLs in this project to match.

---

## 12. Optional / Future

- **Contact form backend:** Integrate Formspree, Web3Forms, or your own API.
- **Skills/Certifications sections:** Re-add `Skills` and/or `Certifications` to `App.tsx` and Navigation if you want separate sections.
- **Analytics:** Add Google Analytics or similar in `index.html` or a layout component.

---

You now have a single place to understand and take over this project. For day-to-day edits, use **Section 4** and **Section 10**; for structure and config, use **Sections 2–3** and **5–9**.
