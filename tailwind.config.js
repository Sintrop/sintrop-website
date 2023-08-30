/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        "post": "url('https://firebasestorage.googleapis.com/v0/b/bolaofutebol-be9d3.appspot.com/o/post.png?alt=media&token=e3bbf779-77e4-4ce9-a3ff-61d8bea854a1')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography')
  ],
}
