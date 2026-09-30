"use client";
import {
  Video, Clapperboard, Smartphone, LayoutGrid, Star, Shirt, ShoppingBag, Camera,
  RefreshCw, CalendarClock, Package, FileCheck, Megaphone, Lock, Wallet,
  Lightbulb, Scissors, Palette, BarChart3, Mail, MessageCircle, Music2, Instagram, Circle,
} from "lucide-react";

// Daftar icon eksplisit agar bundle kecil. Tambahkan icon baru di sini
// bila kamu memakai nama icon lain di lib/data.js.
const map = {
  Video, Clapperboard, Smartphone, LayoutGrid, Star, Shirt, ShoppingBag, Camera,
  RefreshCw, CalendarClock, Package, FileCheck, Megaphone, Lock, Wallet,
  Lightbulb, Scissors, Palette, BarChart3, Mail, MessageCircle, Music2, Instagram,
};

export default function Icon({ name, size = 20, className }) {
  const C = map[name] || Circle;
  return <C size={size} className={className} aria-hidden />;
}
