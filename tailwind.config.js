/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage:{
        "bg-1": "url('/assets/bg-1.png')",
        "home": "url('../public/assets/bg-home.png')",
        "investidor": "url('../public/assets/bg-investidor.png')",
        "produtor": "url('../public/assets/bg-produtor.png')",
        "pesquisador": "url('../public/assets/bg-pesquisador.png')",
        "inspetor": "url('../public/assets/bg-inspetor.png')",
        "credito-token-green": "url('../public/assets/bg-credit-token-green.png')",
        "credito-token-white": "url('../public/assets/bg-credit-token-white.png')",
        "card-impact": "url('../public/assets/bg-card-impact.png')",
        "card-statics": "url('../public/assets/bg-card-statics.png')",
        "vitrine-produtor": "url('../public/assets/bg-2-green.png')",
        "credito-regeneracao": "url('../public/assets/bg-green-florest.png')",
        "lines": "url('../public/assets/bg-lines.png')",
        "credit-investor": "url('../public/assets/bg-credit-investor.png')",
        "arvore-2": "url('../public/assets/arvore-2.png')",
        "new-home": "url('../public/assets/new-bg-home.jpg')",
        "post": "url('https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/post.png?alt=media&token=e3bbf779-77e4-4ce9-a3ff-61d8bea854a1')",
        "presale": "url('../public/assets/bg-presale.jpg')",
        "first-section": "url('../public/assets/bg-first-section.jpg')"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}