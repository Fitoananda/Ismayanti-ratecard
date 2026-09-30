"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Music2, Instagram, ArrowDown } from "lucide-react";
import { creator } from "@/lib/data";
import { Photo } from "./kit";

export default function Hero() {
  const root = useRef(null);

  // Satu momen animasi terorkestrasi saat halaman dibuka
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-h='photo']", { clipPath: "inset(100% 0% 0% 0%)", duration: 1.1, ease: "power4.inOut" })
        .from("[data-h='name'] span", { yPercent: 110, duration: 0.9, stagger: 0.12 }, "-=0.7")
        .from("[data-h='fade']", { opacity: 0, y: 16, duration: 0.7, stagger: 0.1 }, "-=0.5")
        .from("[data-h='chip']", { opacity: 0, scale: 0.85, duration: 0.6, stagger: 0.12 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  const [first, last] = creator.name.split(" ");

  return (
    <section id="top" ref={root} className="relative overflow-hidden pt-24 md:pt-28">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div aria-hidden className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-mist blur-3xl md:h-[28rem] md:w-[28rem]" />
      <div aria-hidden className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blush/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 md:grid-cols-2 md:gap-8 md:px-8 md:pb-24 lg:gap-16">
        {/* Teks */}
        <div className="order-2 md:order-1">
          <p data-h="fade" className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/70 px-3 py-1.5 text-[13px] text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-iris" /> Rate Card 2026
          </p>
          <h1 className="font-display text-[44px] font-semibold leading-[1.02] tracking-tight xs:text-5xl md:text-6xl lg:text-7xl">
            <span data-h="name" className="block overflow-hidden"><span className="block">{first}</span></span>
            <span data-h="name" className="block overflow-hidden"><span className="block text-ink/45">{last}</span></span>
          </h1>
          <p data-h="fade" className="mt-5 text-lg font-medium text-ink">{creator.niche}</p>
          <p data-h="fade" className="mt-2 max-w-md text-[15px] leading-relaxed text-mute">{creator.tagline}</p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a data-h="chip" href={creator.tiktok.url} className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-2.5 text-sm transition-colors hover:border-iris/40">
              <Music2 size={16} aria-hidden /> TikTok <span className="text-mute">{creator.tiktok.handle}</span>
            </a>
            <a data-h="chip" href={creator.instagram.url} className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-2.5 text-sm transition-colors hover:border-iris/40">
              <Instagram size={16} aria-hidden /> Instagram <span className="text-mute">{creator.instagram.handle}</span>
            </a>
          </div>

          <a data-h="fade" href="#pricing" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-iris decoration-2 underline-offset-8">
            Lihat harga <ArrowDown size={15} aria-hidden />
          </a>
        </div>

        {/* Foto utama: bingkai lengkung */}
        <div className="order-1 mx-auto w-full max-w-[300px] xs:max-w-[330px] md:order-2 md:max-w-none">
          <div className="relative">
            <div data-h="photo" className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[36px] border border-ink/10 bg-paper p-2 md:mx-auto md:max-w-[420px]">
              <Photo src={creator.photo} alt={`Foto ${creator.name}`} fallback="NI" className="h-full w-full rounded-t-[999px] rounded-b-[28px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
