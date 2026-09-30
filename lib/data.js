// ============================================================
//  SEMUA KONTEN RATE CARD ADA DI SINI.
//  Angka & link di bawah masih CONTOH — ganti dengan data asli.
// ============================================================

export const creator = {
  name: "Neng Ismayanti",
  niche: "Content Creator & Affiliate Creator",
  tagline: "Fashion yang terasa dekat, konten yang membuat orang berani checkout.",
  photo: "/images/ismay 3.jpeg",
  aboutPhoto: "/images/ismay.jpeg",
  tiktok: { handle: "@Ismay2_jj", url: "https://www.tiktok.com/@Ismay2_jj" },
  instagram: { handle: "ismay_jj", url: "https://www.instagram.com/ismay_jj" },
  email: "ismayanti.jj@gmail.com",
  whatsapp: { display: "+62 858-8254-3328", number: "6285882543328" },
  location: "Jawa Barat, Indonesia",
};

export const about = {
  bio: [
    "Saya adalah Fashion Content Creator & Affiliate Creator yang fokus menghadirkan konten fashion yang stylish, relatable, dan engaging. Melalui storytelling yang kreatif dan pendekatan yang autentik, saya membantu memperkenalkan produk kepada audiens sekaligus membangun awareness dan ketertarikan terhadap brand.",
    "Saya terbuka untuk berbagai bentuk kolaborasi dengan brand fashion yang ingin menciptakan konten menarik, memperkuat brand presence, dan menjangkau audiens yang relevan.",
  ],
  focus: ["Daily outfit & OOTD", "Try-on haul", "Modest & casual wear", "Review produk jujur", "Affiliate & TikTok Shop"],
  branding: [
    { title: "Relatable", text: "Tampil apa adanya, harga dan ukuran disebutkan jelas." },
    { title: "Jujur", text: "Review berdasarkan pemakaian nyata, termasuk kekurangannya." },
    { title: "Rapi & estetik", text: "Visual bersih dengan palet warna netral yang konsisten." },
  ],
};

export const platforms = [
  { name: "TikTok", handle: "Ismay2_jj", followers: "3.911K", er: "44.66%", reach: "454K / bulan" },
  { name: "Instagram", handle: "ismay_jj", followers: "9.480K", er: "2.54%", reach: "124K / bulan" },
];

export const demographics = {
  note: "Sumber: analytics TikTok & Instagram, 30 hari terakhir (contoh).",
  gender: [{ label: "Perempuan", value: 76 }, { label: "Laki-laki", value: 23 }],
  age: [
    { label: "18–24", value: 38.9 },
    { label: "25–34", value: 41.8 },
    { label: "35–44", value: 11.1 },
    { label: "45–54", value: 4.8 },
    { label: "55+", value: 3.4},
  ],
  cities: [
    { label: "WestJava", value: 21 },
    { label: "Jakarta", value: 12 },
    { label: "EastJava", value: 11 },
    { label: "CentralJava", value: 9 },
    
  ],
};

export const brands = [
  { name: "Brand A", category: "Benhill", logo: "/images/Brand/3enhil.jpg" },
  { name: "Brand B", category: "Antarestar", logo: "/images/Brand/Antarestar.png" },
  { name: "Brand C", category: "Carumby", logo: "/images/Brand/Carumby.webp" },
  { name: "Brand D", category: "Credifox", logo: "/images/Brand/Credifox.webp" },
  { name: "Brand E", category: "Geje Apparel", logo: "/images/Brand/Geje Apparel.jpg" },
  { name: "Brand F", category: "Innerly", logo: "/images/Brand/Innerly.jpg" },
  { name: "Brand G", category: "MKMC", logo: "/images/Brand/MKMC.jpg" },
  { name: "Brand H", category: "SeaGloca", logo: "/images/Brand/SeaGloca.jpg" },
];

export const portfolio = [
  { title: "Setelan Rok Polka Syar'i", platform: "TikTok", url: "https://vt.tiktok.com/ZSbMbS7Tx/", video: "/videos/Vidio 1.mp4" },
  { title: "Mukena Katun Adem Jumbo", platform: "Tiktok", url: "https://vt.tiktok.com/ZSbrmM8kN/", video: "/videos/Vidio 2.mp4" },
  { title: "Celana Anti Kusut", platform: "TikTok", url: "https://vt.tiktok.com/ZSbrmD5XN/", video: "/videos/Vidio 3.mp4" },
  { title: "Shoulder Bag Muat Banyak", platform: "TikTok", url: "https://vt.tiktok.com/ZSbruRwyw/", video: "/videos/Vidio 4.mp4" },
  { title: "Rekomendasi Kado Buat Cowok", platform: "Tiktok", url: "https://vt.tiktok.com/ZSbrmstxb/", video: "/videos/Vidio 5.mp4" },
  { title: "Unboxing & first impression", platform: "TikTok", url: "https://www.tiktok.com/@nengismayanti/video/4", thumb: "/images/portfolio-6.jpg" },
];
export const portfolioAll = "https://linktr.ee/nengismayanti"; // link portfolio lengkap → jadi QR

// icon = nama icon Lucide (dipetakan di components/sections.jsx)
export const services = [
  { icon: "Video", title: "TikTok Video", text: "Video pendek 15–60 detik dengan hook kuat dan CTA ke keranjang." },
  { icon: "Clapperboard", title: "Instagram Reels", text: "Reels bergaya sinematik untuk brand awareness dan engagement." },
  { icon: "Smartphone", title: "Instagram Story", text: "Rangkaian 3 frame dengan link sticker dan mention brand." },
  { icon: "LayoutGrid", title: "Feed Post", text: "Foto atau carousel editorial dengan caption yang sudah dikurasi." },
  { icon: "Star", title: "Product Review", text: "Ulasan jujur: bahan, ukuran, dan kesan setelah pemakaian." },
  { icon: "Shirt", title: "Try-On / Outfit", text: "Padu padan produk dalam beberapa look untuk berbagai kesempatan." },
  { icon: "ShoppingBag", title: "Affiliate Content", text: "Konten berorientasi penjualan dengan link keranjang kuning / affiliate." },
  { icon: "Camera", title: "UGC", text: "Konten untuk dipakai di akun brand, tanpa posting di akun Neng." },
];

export const rates = [
  {
    title: "ENDORSE",
    volume: "1 PRODUCT / 2 VIDEOS",
    price: 50000,
    priceLabel: "Rp50.000",
    details: [
      "Video 1: Product review dengan Voice Over — detail bahan, model, ukuran, dan keunggulan produk.",
      "Video 2: Free concept / product only — konsep bebas dari creator, fokus pada visual produk, tanpa Voice Over.",
      "Free mirroring ke TikTok & Shopee apabila brand memiliki kedai toko.",
      "Editing oleh creator • Revisi minor maksimal 1 kali.",
    ],
  },
  {
    title: "PACKAGE",
    volume: "3 PRODUCTS / 6 VIDEOS",
    price: 1350000,
    priceLabel: "Rp135.000",
    details: [
      "3 produk dengan total 6 video.",
      "Setiap produk mendapatkan 1 video review Voice Over + 1 video free concept / product only.",
      "Free mirroring ke TikTok & Shopee.",
    ],
  },
  {
    title: "OWNING CONTENT",
    volume: "1 PRODUCT / 1 VIDEO",
    price: 1000000,
    priceLabel: "Rp100.000",
    details: [
      "Video product review dengan Voice Over.",
      "File video diberikan kepada brand untuk digunakan sebagai konten milik brand.",
      "Editing oleh creator • Revisi minor maksimal 1 kali.",
      "Tidak termasuk posting di akun creator.",
    ],
  },
  {
    title: "BARTER COLLABORATION",
    volume: "1 PRODUCT / 1 VIDEO",
    price: "FREE",
    priceLabel: "FREE",
    details: [
      "Tanpa biaya jasa, dengan produk dikirimkan oleh brand.",
      "Free mirroring ke Shopee.",
      "Apabila performa traffic video bagus, berpotensi mendapatkan video tambahan secara gratis.",
    ],
  },
];

export const bundles = [
  { name: "Live Streaming", price: 75000, items: ["1 Hours"], featured: false },
  { name: "Live Streaming", price: 150000, items: ["2 Hours"], featured: true },
  { name: "Live Streaming", price: 270000, items: ["4 Hours Package", "2 Sessions × 2 Hours"], featured: false },
];

export const terms = [
  { icon: "RefreshCw", title: "Revisi", text: "Maksimal 1 kali revisi minor per konten. Revisi tambahan dikenakan biaya." },
  { icon: "CalendarClock", title: "Timeline", text: "Konten selesai 5–7 hari kerja setelah produk diterima dan brief disetujui." },
  { icon: "Package", title: "Pengiriman produk", text: "Produk dikirim gratis oleh brand. Produk menjadi milik creator kecuali disepakati lain." },
  { icon: "FileCheck", title: "Usage rights", text: "Brand boleh repost di akun organik selama 30 hari. Perpanjangan dinegosiasikan." },
  { icon: "Megaphone", title: "Paid ads / whitelisting", text: "Tersedia dengan biaya tambahan, mulai 30% dari harga konten per 30 hari." },
  { icon: "Lock", title: "Eksklusivitas", text: "Tanpa eksklusivitas secara default. Eksklusivitas kategori dihitung +50% dari harga." },
  { icon: "Wallet", title: "Pembayaran", text: "DP 50% sebelum produksi, pelunasan 50% sebelum posting. Transfer bank / e-wallet." },
];

export const toolkit = [
  { icon: "Iphone 17 Pro", image: "/images/toolkit/Iphone 17 Pro.jpeg", label: "Smartphone", value: "iPhone 17 Pro" },
  { icon: "Lighthing",  image: "/images/toolkit/Lighting.jpeg",  label: "Lighting", value: "Ring light 18\", softbox, cahaya alami" },
  { icon: "Mic", image: "/images/toolkit/Mic.jpeg",  label: "Microphone", value: "Audio-Technica AT2020, Rode NT1-A" },
  { icon: "Tripod", image: "/images/toolkit/Tripod.jpeg", label: "Tripod", value: "Adjustable tripod" },
  { icon: "Canva", image: "/images/toolkit/Canva.jpg", label: "Editing", value: "CapCut Pro" },
  { icon: "Wink", image: "/images/toolkit/Wink.png", label: "Editing", value: "High-quality content" },
];
