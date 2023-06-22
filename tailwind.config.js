/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["]/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
}