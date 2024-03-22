/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite/plugin';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',    
  ],
  "darkMode":"class",
  
  
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      }
    },
    fontFamily: {
      'bakbak-one': ['Bakbak One', 'system-ui'],
      'montserrat': ['montserrat', 'system-ui'],
      
    }
  },
  plugins: [
    flowbite,
    require("tw-elements-react/dist/plugin.cjs")
  ],
}

