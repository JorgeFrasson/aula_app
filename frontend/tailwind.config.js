/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Usa a classe 'dark' para alternar o tema
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tema claro
        light: {
          primary: '#00A8E8', // Azul claro
          secondary: '#007EA7', // Azul médio
          background: '#FFFFFF', // Branco
          text: '#00171F', // Azul petróleo muito escuro
          accent: '#003459', // Azul escuro
        },
        // Tema escuro
        dark: {
          primary: '#003459', // Azul escuro
          secondary: '#00171F', // Azul petróleo muito escuro
          background: '#00171F', // Fundo escuro
          text: '#FFFFFF', // Texto claro
          accent: '#007EA7', // Azul médio como destaque
        },
      },
    },
  },
  plugins: [],
}