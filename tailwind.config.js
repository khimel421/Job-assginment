/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-overlay': ' linear-gradient(133deg, rgba(196,51,42,0.9304096638655462) 96%, rgba(179,44,33,0.8015581232492998) 100%), url("/background-image.png")'
  		},
  		backgroundSize: {
  			'repeat': '10ch'
  		},
  		colors: {
  			customYellow: '#FEBF00',
  			customRed: '#B52B1D'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}  

