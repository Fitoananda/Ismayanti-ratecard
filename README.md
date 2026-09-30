# Rate Card — Neng Ismayanti

Next.js 14 (App Router) · Tailwind CSS · Lucide · Google Fonts (Sora + Manrope) · AOS + GSAP · qrcode.react

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Mengganti konten
- Semua teks, angka, harga, dan link ada di `lib/data.js`.
- Foto utama: `public/images/neng-main.jpg` (rasio 4:5).
- Thumbnail portofolio: `public/images/portfolio-1.jpg` … `portfolio-6.jpg` (rasio 9:14).
- Bila file foto belum ada, halaman menampilkan placeholder gradasi.

## Breakpoint (mobile first)
`xs` 375px · `sm` 390px · `md` 768px · `lg` 1024px · `xl` 1440px (lihat `tailwind.config.js`)

## Aceternity UI
Efek gaya Aceternity (Card Spotlight, Moving Border, Marquee) ditulis langsung di `components/ui.jsx`
tanpa dependensi tambahan. Jika ingin komponen resmi: `npx shadcn@latest add https://ui.aceternity.com/registry/<nama>.json`
(memerlukan `framer-motion`, `clsx`, `tailwind-merge`).
