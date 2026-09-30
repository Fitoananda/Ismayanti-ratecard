/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    // Mobile first: default = 0–374px, lalu 375 / 390 / 768 / 1024 / 1440
    screens: { xs: "375px", sm: "390px", md: "768px", lg: "1024px", xl: "1440px" },
    extend: {
      colors: {
        cream: "#FAF6EE",
        sand: "#F1E9DA",
        paper: "#FFFFFF",
        ink: "#17162B",
        mute: "#6B6880",
        iris: "#5B5BF0",
        mist: "#E7E6FD",
        blush: "#F6DDD3",
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin 9s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
