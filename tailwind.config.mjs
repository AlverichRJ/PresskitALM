/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        abyss: '#0F0F0F',
        ember: '#C73A0E',
        blood: '#7A1F0A',
        smoke: '#B7AFA8',
        bone: '#F4EEE8'
      },
      fontFamily: {
        display: ['Oswald', 'Impact', 'Arial Narrow', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        ember: '0 0 60px rgba(199, 58, 14, 0.28)'
      },
      backgroundImage: {
        'radial-ember': 'radial-gradient(circle at center, rgba(199,58,14,0.20), transparent 42%)'
      }
    }
  },
  plugins: []
};
