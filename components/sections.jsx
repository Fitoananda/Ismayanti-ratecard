import {
  Music2, Instagram, Mail, MessageCircle, ArrowUpRight, Check,
} from "lucide-react";
import Image from "next/image";
import * as D from "@/lib/data";
import Icon from "./Icon";
import { FocusCards } from "@/components/ui/focus-cards";
import { idr } from "@/lib/utils";
import { Section, SpotlightCard, MovingBorder, Marquee, Photo, QR, Bar } from "./kit";

const IconBox = ({ name }) => (
  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-iris">
    <Icon name={name} size={19} />
  </span>
);

/* 2. ABOUT ------------------------------------------------ */
export function About() {
  return (
    <Section id="about" title="About Me" desc="Hi, I’m Neng Ismayanti, a Fashion Content Creator & Affiliate Creator.">
      <div className="grid gap-8 md:grid-cols-[1.45fr_0.9fr] md:items-start md:gap-10">
        <div className="space-y-4 text-[15px] leading-relaxed text-ink/80 md:text-base" data-aos="fade-up">
          {D.about.bio.map((p) => <p key={p} className="text-justify">{p}</p>)}
          <div className="flex flex-wrap gap-2 pt-2">
            {D.about.focus.map((f) => (
              <span key={f} className="rounded-full border border-ink/10 bg-paper px-3.5 py-1.5 text-sm">{f}</span>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-center md:-mt-24 md:justify-end" data-aos="fade-up" data-aos-delay="100">
          <div className="relative w-full max-w-[360px]">
            <div className="absolute -left-3 top-8 h-20 w-20 rounded-full border-4 border-paper bg-cream/80 blur-[2px]" aria-hidden />
            <div className="relative overflow-hidden rounded-[30px] border border-ink/10 bg-paper p-2 shadow-[0_18px_40px_rgba(23,22,43,0.08)]">
              <Photo src={D.creator.aboutPhoto} alt="Foto Neng Ismayanti" fallback="NI" className="h-[460px] w-full rounded-[24px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 3. SOCIAL & AUDIENCE ------------------------------------ */
export function Audience() {
  const { gender, age, cities, note } = D.demographics;
  return (
    <Section id="audience" title="Media sosial & audiens" desc={note}>
      <div className="grid gap-4 md:grid-cols-2">
        {D.platforms.map((p, i) => (
          <SpotlightCard key={p.name}>
            <div data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream">
                  {p.name === "TikTok" ? <Music2 size={18} aria-hidden /> : <Instagram size={18} aria-hidden />}
                </span>
                <div>
                  <p className="font-display font-semibold">{p.name}</p>
                  <p className="text-sm text-mute">{p.handle}</p>
                </div>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
                {[["Followers", p.followers], ["Engagement rate", p.er], ["Reach", p.reach]].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs text-mute">{k}</dt>
                    <dd className="mt-0.5 font-display text-2xl font-semibold tracking-tight">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </SpotlightCard>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {[["Jenis kelamin", gender], ["Usia", age], ["Top 5 Locations", cities]].map(([title, rows], i) => (
          <div key={title} className="rounded-3xl border border-ink/10 bg-paper/70 p-5 md:p-6" data-aos="fade-up" data-aos-delay={i * 100}>
            <p className="mb-4 font-display font-medium">{title}</p>
            <div className="space-y-3.5">{rows.map((r) => <Bar key={r.label} {...r} />)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 4. BRANDS ----------------------------------------------- */
export function Brands() {
  const cats = [...new Set(D.brands.map((b) => b.category))];
  return (
    <Section id="brands" title="Brand yang pernah bekerja sama" desc="Beberapa brand yang telah berkolaborasi dalam konten fashion, beauty, dan lifestyle.">
      <div data-aos="fade-up">
        <Marquee>
          {D.brands.map((b) => (
            <div key={b.name} className="flex min-w-[170px] flex-col items-center rounded-2xl border border-ink/10 bg-paper px-5 py-3">
              <Image src={b.logo} alt={`${b.name} logo`} width={160} height={56} className="h-14 w-full object-contain" />
              <span className="text-xs text-mute">{b.category}</span>
            </div>
          ))}
        </Marquee>
        <div className="mt-6 flex flex-wrap gap-2">
          {cats.map((c) => <span key={c} className="rounded-full bg-sand px-3 py-1 text-xs text-ink/70">{c}</span>)}
        </div>
      </div>
    </Section>
  );
}

/* 6. PORTFOLIO -------------------------------------------- */
export function Portfolio() {
  return (
    <Section id="portfolio" title="Portofolio konten" desc="Contoh konten terbaik. Ketuk untuk membuka, atau scan QR untuk portofolio lengkap.">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {D.portfolio.map((p, i) => (
          <article key={p.title} data-aos="fade-up" data-aos-delay={(i % 3) * 100}
            className="overflow-hidden rounded-3xl border border-ink/10 bg-paper">
            {p.video ? (
              <video controls playsInline preload="metadata" aria-label={p.title}
                className="aspect-[9/14] w-full bg-ink object-contain">
                <source src={p.video} type="video/mp4" />
                Browser Anda tidak mendukung pemutaran video.
              </video>
            ) : (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group relative block">
                <Photo src={p.thumb} alt={p.title} fallback={String(i + 1)} className="aspect-[9/14] w-full transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-x-2 bottom-2 flex items-end justify-between gap-2 rounded-2xl bg-paper/90 p-3 backdrop-blur">
                  <div className="min-w-0">
                    <p className="text-[11px] text-mute">{p.platform}</p>
                    <p className="truncate text-sm font-medium">{p.title}</p>
                  </div>
                  <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </div>
              </a>
            )}
            {p.video && (
              <div className="flex items-center justify-between gap-2 p-3">
                <div className="min-w-0">
                  <p className="text-[11px] text-mute">{p.platform}</p>
                  <p className="truncate text-sm font-medium">{p.title}</p>
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Buka ${p.title} di ${p.platform}`}
                  className="shrink-0 rounded-full p-2 transition-colors hover:bg-sand">
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4 rounded-3xl border border-ink/10 bg-paper/70 p-4" data-aos="fade-up">
        <QR value={D.portfolioAll} size={84} />
        <div>
          <p className="font-display font-medium">Portofolio lengkap</p>
          <p className="mt-1 text-sm text-mute">Scan untuk melihat semua konten dan case study.</p>
        </div>
      </div>
    </Section>
  );
}

/* 7. SERVICES --------------------------------------------- */
export function Services() {
  return (
    <Section id="services" title="Layanan kolaborasi" desc="Pilih satu layanan, atau gabungkan jadi paket di bagian harga.">
      <div className="grid gap-3 xs:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {D.services.map((s, i) => (
          <SpotlightCard key={s.title} className="p-4 md:p-5">
            <div data-aos="fade-up" data-aos-delay={(i % 4) * 80}>
              <IconBox name={s.icon} />
              <h3 className="mt-4 font-display font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mute">{s.text}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}

/* 8. PRICING ---------------------------------------------- */
export function Pricing() {
  return (
    <Section id="pricing" title="Harga & paket" desc="Harga dalam Rupiah, belum termasuk pajak. Harga dapat berubah mengikuti performa terbaru.">
      <div className="mb-4" data-aos="fade-up">
        <p className="font-display text-xl font-semibold">Rate Card Product Review</p>
      </div>

      <div className="overflow-hidden rounded-[22px] border border-ink/10 bg-paper" data-aos="fade-up">
        {D.rates.map((r, index) => (
          <div key={`${r.title}-${index}`} className="border-b border-ink/10 px-5 py-5 last:border-b-0 md:px-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0">
                <p className="font-display text-[15px] font-bold uppercase tracking-tight text-ink md:text-[17px]">
                  {r.title} <span className="font-medium normal-case">• {r.volume}</span>
                </p>
              </div>

              <p className="shrink-0 text-right font-display text-[18px] font-bold tracking-tight md:text-[22px]">
                {r.priceLabel}
              </p>
            </div>

            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-mute">
              {r.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold" data-aos="fade-up">Rate Card Live Streaming</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {D.bundles.map((b, i) => {
          const body = (
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold">{b.name}</p>
                {b.featured && <span className="rounded-full bg-iris px-2.5 py-1 text-xs font-medium text-white">Paling dipilih</span>}
              </div>
              <p className="mt-4 font-display text-3xl font-semibold tracking-tight">{idr(b.price)}</p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-2"><Check size={16} className="mt-0.5 shrink-0 text-iris" aria-hidden />{it}</li>
                ))}
              </ul>
            </div>
          );
          return (
            <div key={`${b.name}-${i}`} data-aos="fade-up" data-aos-delay={i * 100}>
              {b.featured ? <MovingBorder className="h-full">{body}</MovingBorder>
                : <div className="h-full rounded-[28px] border border-ink/10 bg-paper">{body}</div>}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-3xl bg-ink p-6 text-cream md:flex-row md:items-center md:p-8" data-aos="fade-up">
        <div>
          <p className="font-display text-xl font-semibold">Custom campaign</p>
          <p className="mt-1 text-sm text-cream/70">Punya kebutuhan khusus? Let&apos;s discuss.</p>
        </div>
        <a href={`https://wa.me/${D.creator.whatsapp.number}?text=${encodeURIComponent("Halo Ismayanti, saya ingin diskusi campaign.")}`}
           className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-95">
          <MessageCircle size={16} aria-hidden /> Diskusi sekarang
        </a>
      </div>
    </Section>
  );
}

/* 9. TERMS ------------------------------------------------ */
export function Terms() {
  return (
    <Section id="terms" title="Syarat & ketentuan" desc="Agar kolaborasi berjalan lancar bagi kedua pihak.">
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        {D.terms.map((t, i) => (
          <div key={t.title} className="flex gap-4 rounded-2xl border border-ink/10 bg-paper/70 p-4 md:p-5" data-aos="fade-up" data-aos-delay={(i % 2) * 100}>
            <IconBox name={t.icon} />
            <div>
              <p className="font-display font-medium">{t.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-mute">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 10. CONTACT --------------------------------------------- */
export function Contact() {
  const c = D.creator;
  const wa = `https://wa.me/${c.whatsapp.number}`;
  const rows = [
    { icon: "Mail", label: "Email", value: c.email, href: `mailto:${c.email}` },
    { icon: "MessageCircle", label: "WhatsApp", value: c.whatsapp.display, href: wa },
    { icon: "Music2", label: "TikTok", value: c.tiktok.handle, href: c.tiktok.url },
    { icon: "Instagram", label: "Instagram", value: c.instagram.handle, href: c.instagram.url },
  ];
  return (
    <Section id="contact" title="Mari berkolaborasi" desc="Kirim brief singkat: produk, tujuan campaign, dan target tanggal posting.">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-stretch">
        <ul className="grid gap-3 xs:grid-cols-2">
          {rows.map(({ icon, label, value, href }, i) => (
            <li key={label} data-aos="fade-up" data-aos-delay={i * 80}>
              <a href={href} className="group flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper p-4 transition-colors hover:border-iris/40">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-cream"><Icon name={icon} size={17} /></span>
                <span className="min-w-0">
                  <span className="block text-xs text-mute">{label}</span>
                  <span className="block truncate text-sm font-medium">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center rounded-3xl border border-ink/10 bg-paper/70 p-6" data-aos="fade-up">
          <QR value={wa} size={120} label="Scan untuk chat WhatsApp" />
        </div>
      </div>
    </Section>
  );
}

/* 11. TOOLKIT --------------------------------------------- */
  const toolSpans = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

export function Toolkit() {
  const cards = D.toolkit.map((t, i) => ({
    title: t.label,
    subtitle: t.value,
    src: t.image,
    icon: t.icon,
    className: toolSpans[i],
  }));

  return (
    <Section
      id="toolkit"
      title="Creator toolkit"
      desc="Perangkat yang dipakai agar hasil konten konsisten dan cepat. Arahkan kursor ke kartu untuk fokus."
    >
      <div data-aos="fade-up">
        <FocusCards cards={cards} />
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 py-8 text-center text-sm text-mute">
      © 2026 {D.creator.name}. Seluruh harga dan ketentuan dapat diperbarui sewaktu-waktu.
    </footer>
  );
}
