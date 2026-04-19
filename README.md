# Furkan Şahin — Kişisel Portfolio

React + TypeScript + Vite ile oluşturulmuş performans odaklı kişisel portfolio sitesi.

**Canlı:** https://fs06.netlify.app

## Tech Stack

- React 19 + TypeScript
- Vite 8 (build & dev server)
- Tailwind CSS v4
- motion (Framer Motion) — animasyonlar

## Özellikler

- Diagonal clip-path bölme tasarımı (dark/light alanlar)
- Intro animasyonu, text scramble, magnetic social links, motion stagger
- Responsive (mobile / tablet / desktop)
- `prefers-reduced-motion` desteği
- ~107 KB gzip bundle

## Geliştirme

```bash
npm install
npm run dev      # localhost:5173
npm run build    # production build → dist/
npm run preview  # build'i test et
```

## Dizin yapısı

```
src/
├── components/   Hero, Skills, Projects, IntroAnimation
├── data/         projects.ts, skills.ts
├── types/        Project, Skill interface'leri
├── utils/        motion variants
└── index.css     tema + keyframes
```
