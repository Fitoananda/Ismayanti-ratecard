export const cn = (...c) => c.filter(Boolean).join(" ");
export const idr = (n) => "Rp " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
