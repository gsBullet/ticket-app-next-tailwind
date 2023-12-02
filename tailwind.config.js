/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        nav:"#64867e",
        page:"#e4b7ff",
        card: "#64867e",
        "card-hover": "#21675e",
        "default-text": "#f1f3f5",
        "blue-accent" : "#0084d4",
        "blue-accent-hover" : "#009fff",

      }
    },
  },
  plugins: [],
}
