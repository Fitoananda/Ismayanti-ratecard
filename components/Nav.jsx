"use client";
import { MessageCircle } from "lucide-react";
import { creator } from "@/lib/data";

const links = [
  ["about", "Tentang"], ["audience", "Audiens"], ["portfolio", "Portofolio"],
  ["services", "Layanan"], ["pricing", "Harga"], ["terms", "Ketentuan"], ["contact", "Kontak"],
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl items-center gap-2 rounded-full border border-ink/10 bg-cream/80 p-1.5 pl-4 backdrop-blur-xl"
      >
        <a href="#top" className="shrink-0 font-display text-sm font-semibold tracking-tight">Ismay</a>
        <ul className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto px-2 text-[13px] text-mute [scrollbar-width:none]">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="whitespace-nowrap rounded-full px-3 py-1.5 transition-colors hover:bg-ink/5 hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/${creator.whatsapp.number}`}
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[13px] font-medium text-cream transition-transform duration-200 hover:scale-[1.03] active:scale-95"
        >
          <MessageCircle size={14} aria-hidden /> Hubungi
        </a>
      </nav>
    </header>
  );
}
