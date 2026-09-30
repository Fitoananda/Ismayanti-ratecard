"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";

export const Card = React.memo(function Card({ card, index, hovered, setHovered }) {
  const [failed, setFailed] = useState(false);
  const dimmed = hovered !== null && hovered !== index;
  const active = hovered === index;

  return (
    <div
      tabIndex={0}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onFocus={() => setHovered(index)}
      onBlur={() => setHovered(null)}
      className={cn(
        "relative aspect-[1.08/1] w-full overflow-hidden rounded-3xl border border-ink/10 bg-paper transition-all duration-300 ease-out",
        dimmed && "md:scale-[0.98] md:blur-sm",
        card.className
      )}
    >
      {!failed ? (
        <Image
          src={card.src}
          alt={card.title}
          fill
          sizes="(min-width: 1024px) 33vw, 50vw"
          onError={() => setFailed(true)}
          className="absolute inset-0 object-contain"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-mist via-cream to-blush">
          <Icon name={card.icon} size={56} className="text-iris/40" />
        </div>
      )}

      <div
        className={cn(
          "absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-4 transition-opacity duration-300 md:p-6",
          "opacity-100 md:opacity-0",
          active && "md:opacity-100"
        )}
      >
        <div>
          <p className="font-display text-base font-medium text-white md:text-xl">{card.title}</p>
          {card.subtitle && <p className="mt-1 text-xs leading-snug text-white/75 md:text-sm">{card.subtitle}</p>}
        </div>
      </div>
    </div>
  );
});

export function FocusCards({ cards, className }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={cn("grid w-full grid-cols-2 gap-3 md:gap-5 lg:grid-cols-6", className)}>
      {cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  );
}