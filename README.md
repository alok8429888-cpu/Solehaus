# SOLEHAUS — Premium Sneaker Store

A premium, interactive sneaker e-commerce storefront built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **React Three Fiber** (3D), **GSAP**, **Framer Motion** and **Zustand**.

> Curated premium sneakers and limited drops — fashion-grade UI, interactive 3D product viewing, buttery motion.

## ✨ Features

- Interactive **3D sneaker viewer** (drag, rotate, zoom) powered by React Three Fiber
- Editorial, dark-luxury design system with custom tokens
- Product catalog with category filtering
- Slide-in cart drawer with persistent state (Zustand + localStorage)
- Smooth scroll (Lenis) and scroll-reveal motion (GSAP / Framer Motion)
- Fully responsive, accessible, reduced-motion aware

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Build

```bash
npm run build
npm start
```

## 🧱 Tech Stack

| Layer | Tech |
| ----- | ---- |
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS + custom design tokens |
| 3D | React Three Fiber + drei (Three.js) |
| Motion | GSAP + Lenis + Framer Motion |
| State | Zustand |

## 📁 Project Structure

```
app/            # routes, layout, global styles
components/     # ui, layout, home, product, cart, three
lib/            # data, store, types, utils
hooks/          # reusable hooks
public/         # static assets
```

---

© 2026 SOLEHAUS. Crafted by Alok.
