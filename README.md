# make.co

> Design it. Validate it. Make it.
> AI-powered consumer brand studio. Design products, validate with preorders, source from vetted manufacturers. **0% platform fee.**

A modern, installable PWA built with **Vite + React + Tailwind**. Inspired by [dough.do](https://dough.do).

![PWA](https://img.shields.io/badge/PWA-installable-B8A9E8) ![React](https://img.shields.io/badge/React-18-4ECDC4) ![Vite](https://img.shields.io/badge/Vite-5-F5A623) ![License](https://img.shields.io/badge/license-MIT-4ADE80)

## ✨ Features

- 🪄 **AI Product Generator** — Describe an idea, get a complete product spec (name, copy, pricing, MOQ, lead time)
- 🛍️ **Storefront** — Searchable, filterable product catalog with status badges and preorder progress
- 🎯 **Preorder System** — Customer payments held in escrow until production target is hit. **Free forever.**
- 🏭 **Supplier & Manufacturer Network** — 10 vetted partners across 7 countries
- 🌐 **Global Sourcing** — Request ingredients/materials with target cost, region, and certifications
- 📱 **PWA** — Installs to home screen, works offline, app-like experience on iOS & Android
- 💾 **Local-first** — All data persists in localStorage (no backend required for the demo)

## 🚀 Deploy

### Option 1: One-click Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/Make-co)

### Option 2: Manual Vercel deploy

```bash
npm install -g vercel
vercel
```

### Option 3: Build & host anywhere

```bash
npm install
npm run build
# Upload the dist/ folder to Netlify, Cloudflare Pages, S3, etc.
```

## 🛠️ Local Development

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## 🔑 Enable Real AI Generation (optional)

By default, the AI generator uses a smart local template. To use OpenAI:

1. Create a `.env.local` file in the project root:
   ```
   VITE_OPENAI_API_KEY=sk-...
   ```
2. Rebuild and redeploy.

> ⚠️ This embeds the key in the client bundle. For production, proxy through a serverless function (`/api/generate`) and keep the key on the server.

## 🌐 Custom Domain (make.co)

After deploying to Vercel:

1. In Vercel dashboard → Project → Settings → Domains, add `make.co`
2. At your domain registrar, add the DNS records Vercel shows you (typically an `A` record `76.76.21.21` and a `CNAME` for `www`)
3. Vercel issues an SSL cert automatically

## 📁 Project Structure

```
make-co/
├── public/
│   ├── favicon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── icon-maskable-512.png
│   └── apple-touch-icon.png
├── src/
│   ├── App.jsx          # Main app component (all 6 screens)
│   ├── data.js          # Seed data + localStorage persistence
│   ├── ai.js            # AI generator (OpenAI + local fallback)
│   ├── main.jsx         # React entry point + PWA install handler
│   └── index.css        # Tailwind + global styles
├── index.html
├── vite.config.js       # Vite + vite-plugin-pwa config
├── tailwind.config.js
└── package.json
```

## 🎨 Design System

The visual language is **Linear / Notion / Vercel × playful brand pixels**:

- **Lilac** `#B8A9E8` — brand primary (CTAs, identifiers)
- **Amber** `#F5A623` — warnings, highlights, "preorder"
- **Teal** `#4ECDC4` — info, escrow, "development"
- **Coral** `#FF6B6B` — destructive, "production"
- **Green** `#4ADE80` — success, "live"
- Hairline borders (`#F0F0F0`), no drop-shadows by default, frosted-glass headers

## 📜 License

MIT — Build whatever you want with this.

---

**Built by an AI in a single session.** Inspired by the brilliant [dough.do](https://dough.do).
