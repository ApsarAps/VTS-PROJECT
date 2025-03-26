import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            primary: "#EB40DA",  
            secondary: "#4D1AB1", 
            accent: "#C2FED2",  
          },
          fontFamily: {
            josefin: ["Josefin Sans", "sans-serif"],
          },
        },
      },
    }),

  ],
})
