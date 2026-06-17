# SOLEHAUS — Premium Sneaker E-commerce

A premium, production-grade e-commerce front-end for a fictional sneaker brand, **SOLEHAUS**. Built to showcase a modern, interactive, billion-dollar-brand shopping experience — including an interactive 3D product viewer, a full browse → product → cart → checkout flow, smooth motion, and strong SEO/accessibility foundations.

> **Live demo:** https://solehaus-gules.vercel.app

---

## ✨ Features

- **Interactive 3D sneaker viewer** — drag, rotate and zoom a real 3D model (React Three Fiber + drei), with a photo fallback view.
- **Full shopping flow** — home → category browse → product detail → cart drawer → cart page → checkout → order confirmation.
- **Quick view modal** — preview and add to cart without leaving the grid.
- **Persistent cart** — Zustand store with `localStorage` persistence.
- **Premium motion** — page transitions, scroll reveals, magnetic CTAs and a custom cursor (all `prefers-reduced-motion` aware).
- **SEO ready** — per-page metadata, OpenGraph, JSON-LD structured data, sitemap, robots and a web manifest.
- **Accessible** — keyboard focus states, ARIA labels, focus-trapped modal, reduced-motion support.
- **Responsive** — mobile-first layout that scales to large desktops.

---

## 🛠 Tech stack

| Area        | Tech                                            |
| ----------- | ----------------------------------------------- |
| Framework   | Next.js 14 (App Router)                         |
| Language    | TypeScript                                      |
| Styling     | Tailwind CSS                                    |
| 3D          | React Three Fiber + @react-three/drei + three   |
| Motion      | Framer Motion + Lenis (smooth scroll)           |
| State       | Zustand (with persist)                          |
| Fonts       | Archivo (display) + Inter (body)                |
| Hosting     | Vercel                                          |

---

## 🚀 Getting started

```bash
# 1. Clone
git clone https://github.com/alok8429888-cpu/Solehaus
cd Solehaus

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
# open http://localhost:3000
```

### Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the local dev server        |
| `npm run build` | Production build                  |
| `npm run start` | Run the production build locally  |
| `npm run lint`  | Run ESLint                        |

---

## 📁 Project structure

```
app/                    # Routes (App Router)
  layout.tsx            # Root layout, providers, metadata, JSON-LD
  page.tsx              # Home page
  product/[slug]/       # Dynamic product detail pages
  cart/                 # Full cart page
  checkout/             # Checkout + success
  sitemap.ts robots.ts manifest.ts   # SEO routes
  loading.tsx not-found.tsx          # Loading + 404
components/
  layout/               # Navbar, Footer, AnnouncementBar
  home/                 # Hero, CategoryStrip, TrendingSection, etc.
  product/              # ProductCard, ProductDetail, QuickView, SizeSelector
  cart/                 # CartDrawer
  three/                # 3D SneakerScene
  ui/                   # Button, Badge, Modal, Skeleton, CustomCursor, etc.
  providers/            # SmoothScroll, MotionProvider, PageTransition
  seo/                  # JsonLd
lib/
  data/                 # products.ts, categories.ts (demo catalog)
  store/                # cart, toast, quickview (Zustand)
  types/                # Shared TypeScript types
  utils/                # cn(), formatINR(), etc.
```

---

## 🎨 Customization

- **Brand colors & fonts:** `tailwind.config.ts` (see the `ink`, `surface`, `volt`, `cream` tokens) and `app/globals.css`.
- **Catalog:** edit `lib/data/products.ts` and `lib/data/categories.ts`. Each product supports name, brand, price, compare-at price, sizes, colors, badge, rating and image.
- **3D model:** swap the GLB URL inside `components/three/SneakerScene.tsx`.
- **Copy / sections:** home sections live in `components/home/`.

---

## ☁️ Deployment (Vercel)

1. Push to GitHub (already done).
2. Import the repo at [vercel.com](https://vercel.com) → it auto-detects Next.js.
3. Keep all defaults and click **Deploy** — no environment variables required.
4. Every new push to `main` redeploys automatically.

---

## ⚠️ Demo note

This is a demonstration store. Checkout does **not** process real payments — placing an order simply clears the cart and shows a confirmation screen. Product data is static and for showcase purposes only.

---

Built with care for **foundida.in** by Alok.
