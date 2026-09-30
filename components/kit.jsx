"use client";
import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import { cn } from "@/lib/utils";

/** Wrapper section + judul */
export function Section({ id, title, desc, children, className }) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24", className)}>
      <header className="mb-8 max-w-xl md:mb-12" data-aos="fade-up">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
        {desc && <p className="mt-3 text-[15px] leading-relaxed text-mute md:text-base">{desc}</p>}
      </header>
      {children}
    </section>
  );
}

/** Gaya Aceternity "Card Spotlight": cahaya mengikuti kursor */
export function SpotlightCard({ children, className }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("group relative overflow-hidden rounded-3xl border border-ink/10 bg-paper/80 p-5 transition-colors duration-300 hover:border-iris/30 md:p-6", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(91,91,240,.10), transparent 70%)" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Gaya Aceternity "Moving Border": garis cahaya berputar di tepi kartu */
export function MovingBorder({ children, className }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[28px] p-[1.5px]", className)}>
      <span aria-hidden className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_290deg,#5B5BF0_350deg,transparent_360deg)]" />
      <div className="relative h-full rounded-[26.5px] bg-paper">{children}</div>
    </div>
  );
}

/** Marquee tak berujung untuk daftar brand */
export function Marquee({ children }) {
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {children}
        {children}
      </div>
    </div>
  );
}

/** Foto dengan fallback inisial bila file belum ada */
export function Photo({ src, alt, className, fallback = "NI" }) {
  const [err, setErr] = useState(false);
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br from-mist via-cream to-blush", className)}>
      {!err && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className="absolute inset-0 h-full w-full object-cover" />
      )}
      {err && (
        <span className="absolute inset-0 grid place-items-center font-display text-4xl font-semibold text-ink/25">{fallback}</span>
      )}
    </div>
  );
}

export function QR({ value, size = 96, label }) {
  return (
    <figure className="inline-flex flex-col items-center gap-2">
      <div className="rounded-2xl border border-ink/10 bg-white p-2.5">
        <QRCodeSVG value={value} size={size} fgColor="#17162B" bgColor="#FFFFFF" level="M" />
      </div>
      {label && <figcaption className="text-xs text-mute">{label}</figcaption>}
    </figure>
  );
}

export function Bar({ label, value }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-ink">{label}</span>
        <span className="font-medium text-mute">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-sand">
        <div className="bar h-full rounded-full bg-iris" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
